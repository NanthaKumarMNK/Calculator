
let input = document.querySelector(".disp");
let buttons = document.querySelectorAll('button');

let string="";
let arr= Array.from(buttons);
input.value=0
arr.forEach(
    button=>{
        button.addEventListener('click',(events)=>{
            if (events.target.innerHTML == '='){
                string = eval(string);
            }
            else if (events.target.innerHTML == 'DEL'){
                string = string.slice(0,-1);
            }
            else if (events.target.innerHTML == 'RESET'){
                string="0";
            }
            // else if ((events.target.innerHTML == ('*' || '+' || '-' ||'/')) && (string[-1]=='*' || '+' || '-' ||'/')){
            //     continue;
            // }
            // else if ((events.target.innerHTML == '*' || '+' ||'/') && (string[0]=='*' || '+' || '-' ||'/')){
            //     continue;
            // }
            else{
                string += events.target.innerHTML;
            }
            input.value = string;
        })
    }
)
            // if (string[0]== "+" || '*' || '/'){
            //     continue
            // }
            // if ((string[-1]== "+" || '*' || '/' || '-') && (string[-2]=="+" || '*' || '/' || '-' )){
            //     string = string.slice(0,-1);
            // }
            // input.value = string;
            