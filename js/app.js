const maxSleep = 10;
const maxHunger= 10;
const maxPlay = 10;
let time = 10;


class tamagotchi {
    constructor(name,age,hunger,sleepiness,boredom) {
        this.name= name;
        this.age = age;
        this.hunger= hunger;
        this.sleepiness = sleepiness;
        this.boredom= boredom;
    }
    feed() {
        this.hunger + 1;
    }
    sleep() {
        this.sleepiness -  1;
    }
    play() {
        this.boredom - 1;
    }
    
}
let tama = new tamagotchi();

