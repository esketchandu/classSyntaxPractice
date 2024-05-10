class Computer {
  constructor(brand, os, type){
    this.brand = brand;
    this.os = os;
    this.type = type;
  }

  // instance method
  powerOn(){
    console.log(`${this.brand} ${this.type} powers on with ${this.os}.`)
  }

  // static method
  static callPowerOn(...instances){
    return instances.forEach(instance => instance.powerOn());
  }
}

// creating Computer class instances
const computerOne = new Computer('HP', 'Windows', 'Desktop');
const computerTwo = new Computer('MacBook', 'iOS', 'MacBookPro');

//
console.log(computerOne.powerOn());
console.log(computerTwo.powerOn());
console.log(Computer.callPowerOn(computerOne, computerTwo));
