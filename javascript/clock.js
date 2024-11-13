(function(){ 
//*start
console.info("Hello JS");
const myNode = document.createElement("div");

//*Digital Clock
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);

//console.dir(myDate);
// *show only hours, minutes and seconds
//myNode.innerHTML = myDate.toDateString(); 

const updateTime = () => {

console.info('tick tock');

const myDate = new Date();
myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

setInterval(updateTime, 1000);

//*Analogue Clock
  //const secondHand = document.getElementById("secondHand");
  //const minHand = document.getElementById("minHand");
  //const hrHand = document.getElementById("hrHand");
  //hrHand.style.backgroundColor = '#0f0';
//*end
})();