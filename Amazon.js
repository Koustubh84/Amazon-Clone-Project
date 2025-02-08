// JavaScript for Amazon-Clone Website

// Event listener for "Back to Top" button
const backtop = document.querySelector('.backtop');
backtop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});

// Logic for Changing the slide
{
const imgs =document.querySelectorAll('.herosection img');
const btnleft = document.querySelector('.btnleft');
const btnright = document.querySelector('.btnright');

let n = 0;

function changeslide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeslide();

btnleft.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeslide();
});

btnright.addEventListener('click',()=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeslide();
});

}
