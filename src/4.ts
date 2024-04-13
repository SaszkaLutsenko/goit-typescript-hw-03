import { combineSlices } from "../../../node_modules/@reduxjs/toolkit/dist/combineSlices";

class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random()
    }

    getSignature(): number {
        return this.signature;
    } 
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    private tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if(this.door) {
            this.tenants.push(person);
            console.log('person come in house' )
        } else {
            console.log('the door is closed. Person on side')
        }   
    }
    
    abstract openDoor(key: Key): void;
}



class MyHouse extends House {
    constructor(key: Key){
        super(key);
    }
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log( 'the door is open');
        } else {
            console.log('the door is close')
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};