let cart=document.querySelector("#cart");
let addc=document.querySelector("#add");
let inp=document.querySelector("input");



addc.addEventListener("click",()=>{
    
    if (inp.value.trim()==="") {return};

    
    let tsk=document.createElement("div");
    tsk.innerText=inp.value;
    tsk.style.backgroundColor="#d4f4dd";
    tsk.style.color="black";
    tsk.style.height="40px";
    tsk.style.margin="5px";
    tsk.style.color="black";
    tsk.style.display="flex";
    tsk.style.fontSize="20px"
    tsk.style.justifyContent="space-between";
    
    tsk.style.alignItems="center";
    
    tsk.style.padding="5px";

    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.style.color="white";
    btn.style.backgroundColor="red";
    btn.style.border="none";
    btn.style.height="35px";
    btn.style.borderRadius="6px";
    
    tsk.appendChild(btn);
    cart.appendChild(tsk);
    
    btn.addEventListener("click",()=>{
        cart.removeChild(tsk);
    })
    
})
