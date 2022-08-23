/*
    *** Naming - Assigning Names To Variables, Functions, Classes ***
        => Names should be meaningful
        * Why Good Name is Matter? *
            => Well-named "Things" allow readers to uderstand our code
                without going through it in details

            Example:  const user = new User()   database.insert()   if(isLoggedIn){}
            ---------------------------------------------------------------------------
                    To understand the above code, we do not need to go through the
                    full class or function definition and all the other code.

            => Picking good name is realy matter
*/
// bad naming code
const us = new MainEntity();
us.process();

if(login){
    // 
}

// good naming code 
const user = new User();
user.save();
if(isLoggedIn){
    // 
}

const admin = new Admin(); // this is readable
const admin = new AdminUser() // this also readable


/*
                *** How To Name Things Correctly ***
    
Variables & Constants            Function/Methods                          Classes
    Data Containers           Commands or Calculated            Use classes  to create "things"
                              values
    e.g user input data,      e.g send data to server,          e.g a user, a product, http request body          
    results, or list of       check  if user input is valid
    products

    Use nouns or short        User verbs or short phrases with  Use nouns or short noun phrase with nouns
    phrase with adjectives.   adjectives

    const userData = {...}     sendData()                        class User{...}, class Product{...}
    const isValid = ...        inputValid()
        
*/