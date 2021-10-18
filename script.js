
const body = document.getElementsByTagName("body")[0];

const hamburger = document.getElementsByClassName("hamburger")[0];

const menu = document.getElementsByClassName("menu")[0];

//hamburger icon-switch
hamburger.addEventListener("click", handler, true );

function handler(){
    hamburger.classList.toggle("menu-close");
    menu.classList.toggle("show-menu");
    body.classList.toggle("fixed");
    body.removeAttribute("style");
}
//bookmark icon change
const bookmarkButton = document.getElementById("bookmark-button");

const bookmarkIcon = document.getElementById("bookmark-icon");

const bookmarkLabel = document.getElementById("bookmark-label");

bookmarkButton.addEventListener("click", function(event){
    bookmarkIcon.firstElementChild.classList.toggle("click-circle");
    bookmarkIcon.lastElementChild.classList.toggle("click-path");
    bookmarkLabel.classList.toggle("bookmark-label");
});

//backproject change and modal pop up 
const backProject = document.getElementById("back-project");

const modal = document.getElementById("modal");

backProject.addEventListener("click", function(){
    backProject.classList.add("back-project");
    modal.classList.add("modal");
    window.scrollTo(0,0);
    selectRadio();
});

// closing the modal
const modalClose = document.getElementById("modal-close");

modalClose.addEventListener("click", function(){
    modal.classList.remove("modal");
    backProject.classList.remove("back-project");
    const check = document.getElementsByName("check");
            for (let index = 0; index < check.length-1; index++) {
                const element = check[index];
                element.checked = false;

                const stands = document.getElementsByClassName("stand");   
                stands[index].classList.remove("border");

                const start = document.getElementsByClassName("start"); 
                start[index].classList.remove("start-show");
            }
});

//selecting and applying effects to a single radio
function selectRadio(){
    const check = document.getElementsByName("check");

    for (let index = 0; index < check.length-1; index++) {
        const element = check[index];
        element.addEventListener("click",function(event){
            const stands = document.getElementsByClassName("stand");   
            stands[index].classList.add("border");

            const start = document.getElementsByClassName("start"); 
            
            try {
                start[index].classList.add("start-show");
            } catch (TypeError) {
                console.log("The selected element doesn't have a start div element.");
            }
        
            var x =[];
            var y = [];

            if(index == 0){
                y.push(check[index+1]);
                y.push(check[index+2]);
            }

            else if(index == 1){
                x.push(check[index-1]);
                y.push(check[index+1]);
            }
            else{
                x.push(check[index-1]);
                x.push(check[index-2]);
            }
           
            try {
                //put y on top 
                for (let b = 0; b < y.length; b++){
                    if (y[b].checked == false) {
                        stands[index+1].classList.remove("border");
                        stands[index+2].classList.remove("border");
                        start[index+1].classList.remove("start-show");
                        start[index+2].classList.remove("start-show");     
                    }
                }     

                for (let a = 0; a < x.length; a++) {                   
                    if(x[a].checked == false){                    
                        stands[index-1].classList.remove("border"); 
                        start[index-1].classList.remove("start-show");                       
                        stands[index-2].classList.remove("border");                        
                        start[index-2].classList.remove("start-show");
                    }        
                }                                                 
            } catch (Typeerror) {
                // console.log("NO  radio button found");
            }
            //window scroll
            // var x = screen.height;
            // if(event.target.matches("#no-reward")){
                
            //     var y = event.clientY;                
            //     if((x-y) > 500){
            //         window.scrollBy(0,-200);
            //     }
            //     else{
            //         window.scrollBy(0,100);
                    
            //     }
            // }

            // else if(event.target.matches("#bamboo")){
                
            //     var y = event.clientY;
            //     if(x > y){
            //         if ((x-y) > 100 && (x-y) < 449) {
            //             window.scrollBy(0, 220);
            //         }
            //         else if((x-y) > 450){                        
            //             window.scrollBy(0,-200);
            //         }  
            //     }
            // }
            // else if(event.target.matches("#black")){
            //     var y = event.clientY;              
            //     if((x-y) < 350){
            //         window.scrollBy(0,220);                
            //     }
            //     else{
            //         window.scrollBy(0,-100);
                 
            //     }
            // }        
        });
    }
    goSuccess();
}
// display success box
function goSuccess(){
    const buttons = document.getElementsByClassName("go-success");
    for (let button = 0; button < buttons.length; button++) {
        const btn = buttons[button];
        const success = document.getElementsByClassName("success")[0];

        btn.addEventListener("click", function(){
            modal.classList.remove("modal");
            success.classList.remove("success-hide");
            setTimeout(() => {
                success.classList.add("success-show");
            }, 100);
            
            window.scrollTo(0,0);
            
            body.style.maxHeight="100vh";
            body.style.overflow="hidden";

            const check = document.getElementsByName("check");
            for (let index = 0; index < check.length-1; index++) {
                const element = check[index];
                element.checked = false;

                const stands = document.getElementsByClassName("stand");   
                stands[index].classList.remove("border");

                const start = document.getElementsByClassName("start"); 
                start[index].classList.remove("start-show");
           }
        });

        const toBody = document.getElementById("bsuccess");
        toBody.addEventListener("click", function(){
            success.classList.add("success-hide");
            setTimeout(() => {
                success.classList.remove("success-show");    
            }, 1000);
            backProject.classList.remove("back-project");
            body.style.maxHeight="100%";
            body.style.overflow="visible";
        });
        
    }
}
// update diffrent elements value
function updateContent(){
    const buttons = document.getElementsByClassName("go-success");

    const backedMoney = document.getElementsByClassName("backed-money")[0];
    const backersNumbers = document.getElementsByClassName("backers-numbers")[0];
    const bambooNumber = document.getElementsByClassName("bnumber");
    const blackNumber = document.getElementsByClassName("blnumber");

    var totalMoney = 89914;
    var totalbackers = 5007;

    for (let button = 0; button < buttons.length; button++) {
        const btn = buttons[button];
        btn.addEventListener("click",function(){
            if(btn.classList.contains("bambooc")){
                const price = 25;
                calculation(bambooNumber,price);
            }

            else if(btn.classList.contains("blackc")){
                const price = 75;
                calculation(blackNumber,price);
            }
            else{
                console.log("End of button line.");
            }
        });
    }
    function calculation(array,price){
        for (let bN = 0; bN < array.length; bN++) {
            const element = array[bN];
            var number = parseInt(element.textContent);
            element.innerText = number-1;
        }
        totalMoney = totalMoney + price;
        var money = totalMoney.toString();
        let mlength = money.length;
        if(mlength == 5){
            var fhalf= money.substring(0, 2);
            var lhalf= money.substring(2);
            var newString = "$" + fhalf +"," + lhalf;
        }
        backedMoney.innerHTML = newString;
        
        totalbackers++;
        var backers = totalbackers.toString() 
        let blength = backers.length;
        if (blength == 4) {
            var bfhalf = backers.substring(0,1);
            var blhalf = backers.substring(1);
            var newNumber = bfhalf + "," + blhalf;
        }
        backersNumbers.innerHTML = newNumber;
        const range = document.getElementById("range");
        var rangeVariable = parseInt(fhalf);
        range.style.backgroundImage = " linear-gradient(to right,hsl(176, 50%, 47%)" + rangeVariable + "%, hsla(0, 0%, 48%, 0.103) 0% )";
    }   
}

updateContent();

// project's select-reward button function
const buttons = document.getElementsByClassName("toproject");

for (let button = 0; button < buttons.length; button++) {
    const btn = buttons[button];
    btn.addEventListener("click", function(){
        modal.classList.add("modal");
        window.scrollTo(0,0);
        selectRadio();
    });
}
    

window.onclick = function(event){
    if(!event.target.matches(".hamburger")){
        if(menu.classList.contains("show-menu")){
            menu.classList.remove("show-menu");
            hamburger.classList.remove("menu-close");
            body.classList.remove("fixed");
        }
    }
    
    if(event.target.matches(".hamburger")){
        modal.classList.remove("modal");
        backProject.classList.remove("back-project");
        const check = document.getElementsByName("check");
            for (let index = 0; index < check.length-1; index++) {
                const element = check[index];
                element.checked = false;

                const stands = document.getElementsByClassName("stand");   
                stands[index].classList.remove("border");

                const start = document.getElementsByClassName("start"); 
                start[index].classList.remove("start-show");
           }
    }  
}
