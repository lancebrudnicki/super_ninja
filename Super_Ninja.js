



class Ninja{
    constructor(name, health=10, speed=3,strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }



    sayName() {
        console.log(this.name);
    }



    showStats(){
        console.log(this.strength);
        console.log(`Your Speed is ${ this.speed }!`);
        console.log(`Your Health is ${this.health}`);
    }



    drinkSake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("lance")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();





class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10,wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake()
        console.log('here is your wise message')
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

