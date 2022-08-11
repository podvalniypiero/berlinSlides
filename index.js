const next=document.querySelector("#next");

const back=document.querySelector("#back");
console.log(back);

const photos=["de1.jpg","de20.jpg","de2.jpg","de3.jpg","de4.jpg","de5.jpg","de6.jpg","de7.jpg","de8.jpg","de9.jpg"];
//document.querySelector("#pictures").src=photos[i];

console.log(photos[0]);

let i=0;

next.addEventListener("click",()=>{
    i++;
    if(i>photos.length-1){
        i=0;
    }
    document.querySelector("#pictures").src=photos[i];
})

back.addEventListener("click",()=>{
    i--;
    if(i<0){
        i = photos.length - 1;
    }
    document.querySelector("#pictures").src=photos[i];
})



