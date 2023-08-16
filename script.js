const display=document.getElementById("display");
const buttons=document.getElementById("buttons");

buttons.addEventListener("click",(event)=>{
    let oper=["+","-","*","/","%"];
    if (event.target.innerHTML==="C"){
        display.value="";
    }
    else if(event.target.classList.contains("number")){
        display.value+=event.target.innerHTML;
    }
    else if(event.target.classList.contains("operator")){
        let lastch=display.value[display.value.length-1];
        if (oper.includeslastch){
            display.value=display.value.slice(0,-1)+event.target.innerHTML;
        }
        else {
        display.value+=event.target.innerHTML;
       }
    }
    else if(event.target.innerHTML==="X"){
        display.value=display.value.slice(0,-1);
    }
    else if (event.target.innerHTML==="="){
        if (display.value.length!==0){
            try {
                display.value=eval(display.value);
            } catch (error) {
                display.value="syntax error";   
            }
        }
        else{
            display.value="";
        }
    }  
})
