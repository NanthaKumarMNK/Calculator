
let input = document.querySelector(".disp");
let buttons = document.querySelectorAll('button');
buttons.forEach(
    button=>{
        button.addEventListener('click',(events)=>{

                    if (input.innerHTML=='ERROR'){
                        input.innerHTML=''
                    }

                    if (events.target.innerHTML == '='){

                        if (input.innerHTML.includes('x')){
                            let str=input.innerHTML
                            input.innerHTML=str.replace(/x/g,'*')
                        }
                        try{
                            input.innerHTML = eval(input.innerHTML );
                        }
                        catch(err){
                            input.innerHTML ="ERROR"
                        }
                    }

                    else if (events.target.innerHTML == 'DEL'){
                        if (input.innerHTML =='ERROR'){
                            input.innerHTML =''
                        }
                        else{
                            input.innerHTML  = input.innerHTML.slice(0,-1);   
                        }
                        
                    }
                    else if (events.target.innerHTML == 'RESET'){
                        input.innerHTML ="";
                    }

                    else if (events.target.innerHTML == 'x' || events.target.innerHTML == '+' || events.target.innerHTML == '-' || events.target.innerHTML == '/'){
                        
                        if (input.innerHTML.length ==0){
                            input.innerHTML =""
                        }

                        else{

                            if(input.innerHTML[input.innerHTML.length-1]=="x" || input.innerHTML[input.innerHTML.length-1]=="/" || input.innerHTML[input.innerHTML.length-1]=="-" || input.innerHTML[input.innerHTML.length-1]=="+" ){
                                input.innerHTML  = input.innerHTML.slice(0,-1); 
                                input.innerHTML  +=events.target.innerHTML;                        
                            }
                            else{
                                input.innerHTML  +=events.target.innerHTML;
                            } 
                        }

                    }

                    else if (events.target.innerHTML == '.'){
                        
                        if (input.innerHTML.includes('.')==true){
                            input.innerHTML =input.innerHTML 
                        }
                        else{
                            input.innerHTML  += events.target.innerHTML;
                        }
                    }

                    else{
                        
                        if (input.innerHTML=='0'){
                            input.innerHTML  = input.innerHTML.slice(0,-1); 
                        }
                        input.innerHTML  += events.target.innerHTML;    
                    }
        })
    }
)
