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
