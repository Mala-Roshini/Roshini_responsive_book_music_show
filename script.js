var eventOneCount = 25;
var eventTwoCount = 25;
var eventThreeCount = 25;
var eventFourCount = 25;
var eventFiveCount = 25;
var eventSixCount = 25;
var eventSevenCount = 25;
var eventEightCount = 25;

document.getElementsByTagName("button")[0].addEventListener("click" , function(){
    eventOneCount --;
    console.log(eventOneCount);
    document.getElementsByTagName("div")[8].innerText = `Seats Available: ${eventOneCount}`;
    if(eventOneCount == 0){
        document.getElementsByTagName("button")[0].innerText = "Sold out";
        document.getElementsByTagName("button")[0].disabled = true;
    }
    
})
document.getElementsByTagName("button")[1].addEventListener("click" , function(){
console.log("button 2")
eventTwoCount --;
    console.log(eventTwoCount);
    document.getElementsByTagName("div")[14].innerText = `Seats Available: ${eventTwoCount}`;
    if(eventTwoCount == 0){
        document.getElementsByTagName("button")[1].innerText = "Sold out";
        document.getElementsByTagName("button")[1].disabled = true;
    }
    
})
document.getElementsByTagName("button")[2].addEventListener("click" , function(){
eventThreeCount --;
    console.log(eventThreeCount);
    document.getElementsByTagName("div")[20].innerText = `Seats Available: ${eventThreeCount}`;
    if(eventThreeCount == 0){
        document.getElementsByTagName("button")[2].innerText = "Sold out";
        document.getElementsByTagName("button")[2].disabled = true;
    }
    
})
document.getElementsByTagName("button")[3].addEventListener("click" , function(){
eventFourCount --;
    console.log(eventFourCount);
    document.getElementsByTagName("div")[26].innerText = `Seats Available: ${eventFourCount}`;
    if(eventFourCount == 0){
        document.getElementsByTagName("button")[3].innerText = "Sold out";
        document.getElementsByTagName("button")[3].disabled = true;
    }
    
})
document.getElementsByTagName("button")[4].addEventListener("click" , function(){
eventFiveCount --;
    console.log(eventFiveCount);
    document.getElementsByTagName("div")[33].innerText = `Seats Available: ${eventFiveCount}`;
    if(eventFiveCount == 0){
        document.getElementsByTagName("button")[4].innerText = "Sold out";
        document.getElementsByTagName("button")[4].disabled = true;
    }
    
})
document.getElementsByTagName("button")[5].addEventListener("click" , function(){
eventSixCount --;
    console.log(eventSixCount);
    document.getElementsByTagName("div")[39].innerText = `Seats Available: ${eventSixCount}`;
    if(eventSixCount == 0){
        document.getElementsByTagName("button")[5].innerText = "Sold out";
        document.getElementsByTagName("button")[5].disabled = true;
        // document.getElementsByClassName(".bookClass")[5].innerText = "Sold out";
    }
    
})
document.getElementsByTagName("button")[6].addEventListener("click" , function(){
eventSevenCount --;
    console.log(eventSevenCount);
    document.getElementsByTagName("div")[45].innerText = `Seats Available: ${eventSevenCount}`;
    if(eventSevenCount == 0){
        document.getElementsByTagName("button")[6].innerText = "Sold out";
        document.getElementsByTagName("button")[6].disabled = true;
    }
    
})
document.getElementsByTagName("button")[7].addEventListener("click" , function(){
eventEightCount --;
    console.log(eventEightCount);
    document.getElementsByTagName("div")[51].innerText = `Seats Available: ${eventEightCount}`;
    if(eventEightCount == 0){
        document.getElementsByTagName("button")[7].innerText = "Sold out";
        document.getElementsByTagName("button")[7].disabled = true;
    }
    
})