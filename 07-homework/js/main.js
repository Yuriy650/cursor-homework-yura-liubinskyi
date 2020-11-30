/*let a = 'A';
function  foo() {
    console.log(a);
}

function bar() {
    let a = 'B';
    foo();
}

bar();

let counter = 0;

function test() {

    counter++;
    console.log('counter', counter);
    console.log('test');

}

test();
test();*/
function printName(){
    console.log(this.firstName, this.lastName);
}

const ivan = {
    firstName: 'Ivan',
    lastName: 'Ivaniv',
    printName() {
        console.log(this.firstName, this.lastName);
    }
}

const oleh = {
    firstName: 'Oleh',
    lastName: 'Voytiv',
    printName() {
        console.log(this.firstName, this.lastName);
    }
}

printName.call(ivan, 'hello');

printName.bind(ivan, ...msg);

