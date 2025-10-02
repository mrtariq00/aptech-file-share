class name {} // creation of a class

class class2 {
  constructor(parameters) {}
} // creation of a constructor in class

class name3 {
  getNames() {}
} // creation of methods in class

// Usages :-

const NameApi = class {
  static names = [
    "Tariq",
    "Ali",
    "Sara",
    "Hina",
    "Omar",
    "Ayesha",
    "Bilal",
    "Zara",
    "Hassan",
    "Fatima",
    "Nadia",
    "Imran",
    "Kashif",
    "Rabia",
    "Usman",
    "Saima",
    "Hamza",
    "Sana",
    "Asad",
    "Mariam",
    "Noman",
    "Iqra",
    "Shahid",
    "Laiba",
    "Farhan",
  ];

  static getNames(count) {
    return this.names.slice(0, count);
  }
}; // that is class method

console.log(NameApi.getNames(5)); // it print arry 0 index to 5 items

let objcreator = class {
  constructor(name, age, gender, className) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.className = className;
  } // it will built object
  printobj(){
    console.table(this)
  }
};

let user1 =new objcreator("Tariq",15,"male",8)


user1.printobj()


// bye Guys today class end