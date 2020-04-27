function addButtonListener(){
    //grabs all of our buttons
    let ourButtons = document.getElementsByTagName("button");

    //we will use result to hold our command string
    let command_string = document.getElementById("result").textContent;

    //loop through the buttons
    for(let i = 0; i < ourButtons.length; i++){

        //add a listener that add it's value to the command string
        ourButtons[i].addEventListener("click", function(){
            let ourChar = ourButtons[i].textContent;

            if(ourChar === '='){

                //execute the command string
                try{
                    let result = eval(command_string).toString();
                    console.log(typeof result);
                    document.getElementById("result").textContent = `${command_string} = ${result}`;
                    command_string = result;

                //if the user entered in a poorly formatted equation
                //catch the error and output it. 
                }catch (error){
                    document.getElementById("result").textContent = error.toString();
                }

            }else if(ourChar === "←"){

                //remove the last element from the command string
                command_string = command_string.slice(0, -1);
                document.getElementById("result").textContent = command_string;

            }else if(ourChar === "Clear"){

                //clear the command string
                command_string = "";
                document.getElementById("result").textContent = command_string;

            }else{

                //add the character to the command string
                command_string += ourChar;
                document.getElementById("result").textContent = command_string;
            }
            
        });
    }
}

//once the DOM is loaded, add the button listeners
window.addEventListener("load", addButtonListener);