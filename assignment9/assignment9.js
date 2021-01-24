// ---------- Assignmment 9 ----------//
const john = {
    firstName: 'John',
    lastName: 'Williams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter'],
    bestFriend: 'Mikey',
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    drivLicense: function () {
        if (john.calAge() > 16) {
            return `has`;
        } else {
            return `does not have`;
        }
    },
    getSummary: function () {
        return `${john.firstName} is ${john.calAge()} years old, and he ${john.drivLicense()} a driver's license`;
    }
}

console.log(john);
john.address = '123 abc street';
john['instagram'] = '@John.Will';
console.log(john);

console.log(john.calAge());
console.log(john.age);
// ----- Part A and Part B ----- //
console.log('---------- Part A and Part B ----------')
console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.bestFriend}`);
console.log(john.getSummary());

// ----------Assignment 9 Part C ---------- //
console.log('----------Assignment 9 Part C ---------- ')
const modal = document.querySelector('.modalWindow');
const close = document.querySelector('.close');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const openModal = function () {
    modal.classList.remove('hide');
}
btn1.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal.style.display = "block";
}
btn3.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}