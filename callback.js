

function calculator1(a,b,callb){
    callb(a,b);
}



calculator1(1,2,(a,b)=>{
    console.log(a+b);
})