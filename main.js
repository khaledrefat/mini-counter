var counter= document.getElementById('counter');
var result=document.getElementById('result');

var mini=document.getElementById('mini');
var count = Number (0) ;
var countt;

// if (result <=0 ){
//     mini.dis=;
// }else{
//     mini.value= 0 ;
// }

counter.addEventListener('click',function(){
    countt=+1 
    result.innerHTML=countt 
})
mini.addEventListener('click',function(){
    count-=1 
    result.innerHTML=count       
})
reset.addEventListener('click',function(){
    count=0 
    result.innerHTML=count
})



//     document.querySelector('#mini').onclick=function(){
//         document.querySelector('#number').innerHTML =3;

//     }
//     document.querySelector('#reset').onclick=function(){
//         document.querySelector('#number').innerHTML=0 ;

//     }
// }
// )








counter.addEventListener("click", () => {
  count += 1
  result.innerHTML = count
})


