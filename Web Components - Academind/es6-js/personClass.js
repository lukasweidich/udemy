class Human {
    // ES6
    // constructor() {
    //     this.gender = "male"
    // }

    // ES7
    gender = "male"
    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    // constructor() {
    //     super();
    //     this.name = "Lukas"
    // }
    name = "Lukas"

    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();