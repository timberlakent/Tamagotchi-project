//const
const maxSleep = 10;
const maxHunger= 10;
const maxPlay = 10;

let startButton = document.querySelector("#startButton");
let sleepButton = document.querySelector("#sleep");
let feedButton = document.querySelector("#feed");
let playButton = document.querySelector("#play");
let sleepHpNum = document.querySelector("#sleep-hp");
let hungerHpNum = document.querySelector("#hunger-hp");
let playHpNum = document.querySelector("#play-hp");
//create a class for tamagotchi with hunger sleepiness and boredom, make methods to feed,play and sleep,
class Tamagotchi {
    constructor() {
        this.hunger = 0;
        this.boredom = 0;
        this.sleepiness = 0;
    }
    play() {
        this.play = this.play - 1;
    }
    sleep() {
        this.sleep = this.sleep - 1;
    }
    feed() {
        this.hunger = this.hunger - 1;
    }
    time() {
       pet.sleepiness++;
       pet.hunger +10;
       pet.boredom++;
    }
       
} 
    

//buttons
startButton.addEventListener("click",function() {

    startGame(); 
    pet.time();
});
sleepButton.addEventListener("click",function() {
    sleep();
});
feedButton.addEventListener("click",function() {
    feed();
});
playButton.addEventListener("click",function() {
    play();
});


let pet = new Tamagotchi();
hungerHpNum.innerHTML= pet.hunger
playHpNum.innerHtml = pet.boredom
sleepHpNum.innerHtml = pet.sleepiness


//functions

//make a game function on click that starts the game,firsdt asking for the name of pet
function startGame() {
    
    sleepHpNum = pet.hunger++;
    hungerHpNum = pet.sleepiness+10;
    playHpNum = pet.boredom ++;   
    let name= prompt("Name your tamagotchi below!","");
    document.querySelector("#name").innerHTML = name;
//call count up funtion
   let intervalId = setInterval(countUp, 0);
    clearInterval(intervalId);
   
  console.log(playHpNum);
   if((playHpNum >= 4) || (sleepHpNum>= 4) || (hungerHpNum >=4)) {
      playHpNum = 0;
      sleepHpNum = 0;
      hungerHpNum = 0;
      alert("your pet died:(");
    }   

//create countUp function that adds 1 to each value and 
function countUp() {
    this.hunger ++;
    this.sleepiness ++;
    this.boredom ++;
 
  }
}

// sleepHp.innerHTML = sleepHpNum;
// playHp.innerHTML = playhpNum;
// hungerHp.innerHTML = hungerhpNum;
