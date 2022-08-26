/*
    *** Calling the Function ***
        => Keep The Number Of Parameters Low!
        => Minimize the number of parameters.beacuse more parameters a function uses,
        the harder it gets to call them. harder to memorize.
*/
/*
    *** The Number of Function / Method Parameters ***

    None Parameter          1 Paramter                  2 parameters            2 Parameters                >3
    use.save()              log(message)                Point(10, 20)           calc(10, 20, "agr")         point(1,3,4,5)
    Easy to understand      Easy to understand          Decent to understand    Challenging to uderstand    Difficult to under
    Easy to call            Easy to call                Acceptable to call      Challenging to call         Difficult to call
    Best possible option    Very good possible option   Use with caution        Avoid to possible           Always avoid
*/
/* Unclean Function */
function saveUser(email, password) {
    const user = {
        id: Math.random().toString(),
        email: email,
        password: password,
    };

    db.insert("users", user);
}

saveUser("test@test.com", "testers");

/* Clean Function */
function saveUser(user) {
    db.insert("users", user);
}
const user = {
    id: Math.random().toString(),
    email: email,
    password: password,
};
saveUser(user);

/* Another Solution */
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
    }

    save() {
        db.insert("users", this);
    }
}

const user = new User("test@test.com", "testers");
user.save();

/* Another Example */
let isLoggedIn = false;

function toggleLoginStatus() {
    isLoggedIn = !isLoggedIn;
}

// no parameter function calling is the best option
toggleLoginStatus();

/* One Argument Function */

function log(message) {
    console.log(message);
}

log("ABC");

// Modify With Class
class Message {
    constructor(message) {
        this.message = message;
    }

    log() {
        console.log(this.message);
    }
}

const msg = new Message("ABC");
msg.save();

// another example
function square(number) {
    return number * number;
}

square(3);

// example
function emailIsValid(email) {
    return email.include("@");
}

const isValid = emailIsValid("a@gmail.com");

/*
    *** Two Argument Function ***
        => It is about minimizing the number of parameters,but it's simply also about 
        how readable and how easy to undertand a function is. 
        => If it's obvious which paramters it needs and in which order these parameters need to be provided. 
        Like login or point example, then it's absolutely fine to use two parameters. You do not need 
        to come up with a way of reducing the number of parameters.Beacuse after all, we should always keep in mind 
        that writting clean code is about writing readable and meaningful code and about reducing the congnitive load. 
        So, if we have no cognitive load, beacuse it's clear and easy to grasp what a function does 
        and how we should call it. So no need to rewrite it.
*/

function login(email, password) {
    // Log a user in
    // ...
}

login("a@gmail.com", "testpass");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const point = new Point(10, 13);

/* Two-Argument-Dirty */
function log(message, isError) {
    if (isError) {
        console.error(message);
    } else {
        console.log(message);
    }
}

log("ABC", false);

// Clean
function log(message) {
    console.log(message);
}

function logError(errorMessage) {
    console.error(errorMessage);
}

log("ABC");
logError("An Error!");

/* 
    ***Three-Argument-Function(Dealing With Too Many Values) ***

*/
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const user = new User("A", 31, "a@gmail.com");

// good one above modifier
class User {
    constructor(userData) {
        this.name = userData.name;
        this.age = userData.age;
        this.email = userData.email;
    }
}

const user = new User({ name: "A", age: 31, email: "a@gmail.com" });

// bad one
function compare(a, b, comparator) {
    if (comparator === "equal") {
        return a === b;
    } else if (comparator === "not equal") {
        return a !== b;
    } else if (comparator === "greater") {
        return a > b;
    } else if (comparator === "smaller") {
        return a < b;
    }
}

const isSmaller = compare(3, 5, "smaller");
const isEqual = compare(3, 5, "equal");

// good one by modifier
function compare(comparisionData) {
    const { first, second, comparator } = comparisionData;
    if (comparator === "equal") {
        return first === second;
    } else if (comparator === "not equal") {
        return first !== second;
    } else if (comparator === "greater") {
        return first > second;
    } else if (comparator === "smaller") {
        return first < second;
    }
}

const isSmaller = compare({ first: 3, second: 5, comparator: "smaller" });
const isSmaller = compare({ comparator: "equal", first: 3, second: 5 });

/* 
    *** Infinity-Argument-Function ***
    Functions With A Dynamic Number Of Parameters
*/
function sumUp(...numbers){
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
}

const total = sumUp();

// const total = sumUp([10,20,3,-3,4]);

/*
    *** Beware Of "Output Parameters" ***
        => Try to avoid output arguments - especially if they are unexpected, but framework, other libraries we can not avoid it.
        => but if we need, we can use okay one, another one is good one.
*/
// bad one: not great- user gets modified in an unexpected way
function createId(user){
    user.id = "ui"
}

const user = {
    name: "a"
}
// we might not expected user created id, instead it is return id and finally store in the obect.
// const id = createId(user);
createId(user);

// okay one: user gets modified, but the function implies it
function addId(user){
    user.id = "ui"
}

const user = {
    name: "a"
}
addId(user);

console.log(user)

// Good one: it's obvious, that the user will get modified.
class User{
    constructor(name){
        this.name = name;
    }

    addId(){
        this.id = "ui"
    }
}

const customer = new User("A");
customer.addId();
console.log(customer);