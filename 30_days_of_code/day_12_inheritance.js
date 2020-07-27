`use strict`

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(`Name: ${this.lastName}, ${this.firstName}\nID: ${this.idNumber}`)
    }
}

class Student extends Person {
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification);
        this.scores = scores;
    }

    calculate() {
        let grade, studentAvg = this.scores.reduce((acc, val) => acc + val, 0) / this.scores.length;
        if (studentAvg >= 90 && studentAvg <= 100) grade = 'O';
        else if (studentAvg >= 80 && studentAvg < 90) grade = 'E';
        else if (studentAvg >= 70 && studentAvg < 80) grade = 'A';
        else if (studentAvg >= 55 && studentAvg < 70) grade = 'P';
        else if (studentAvg >= 40 && studentAvg < 55) grade = 'D';
        else if (studentAvg < 40) grade = 'T';
        return grade;
    }
}
let firstName = `Aakansha`;
let lastName = `Doshi`;
let id = 7825621;
let testScores = [31, 32, 34, 35];

let s = new Student(firstName, lastName, id, testScores)
s.printPerson()
s.calculate()
console.log('Grade: ' + s.calculate())