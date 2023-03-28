
let input=document.querySelector('input');
let submitButton=document.querySelector('.get-repo');
let showData=document.querySelector('.container .data');


submitButton.addEventListener('click',getRepo);

function getRepo(){
    if(input.value==''){
        showData.textContent='Please enter your github username';
    }else{
        showData.innerHTML='';
        let urlRepo=`https://api.github.com/users/${input.value}/repos`;

        fetch(urlRepo).then((res)=>res.json()).then((repos)=>{
            console.log(repos)
            
            repos.forEach((repo)=>{

                let mainDiv=document.createElement('div');

                let span=document.createElement('span');

                span.appendChild(document.createTextNode(repo.name));

                mainDiv.appendChild(span);

                mainDiv.className='repoDetail';

                let visit=document.createElement('a');

                visit.href=`https://github.com/${input.value}/${repo.name}`;

                visit.setAttribute('target', '_blank');

                visit.appendChild(document.createTextNode('Visit'));

                mainDiv.appendChild(visit)

                showData.appendChild(mainDiv);

            })
        })
    }
    
}
