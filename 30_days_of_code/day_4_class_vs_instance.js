`use strict`

function Person(initialAge) {
    this.age = initialAge > 0 ? initialAge : 0;

    this.amIOld = function() {
        if (this.age === 0) {
            console.log(`Age is not valid, setting age to 0.`)
            console.log(`You are young.`)
        } else if (this.age < 13) console.log(`You are young.`)
        else if (this.age >= 13 && this.age < 18) console.log(`You are a teenager.`)
        else console.log(`You are old.`)
    }
    this.yearPasses = function() {
        this.age += 1;
    }
}

function main() {
    let arr = [-1, 10, 16, 18]
    for (let i = 0; i < arr.length; i++) {
        var age = arr[i]
        var p = new Person(age)
        p.amIOld()
        for (let j = 0; j < 3; j++) {
            p.yearPasses();
        }
        p.amIOld()
        console.log("")
    }
}
main()