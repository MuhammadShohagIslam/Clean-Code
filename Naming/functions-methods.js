/*
    *** Naming Functions And Methods ***
        * If function perform on operation
            => Describe the operation
            => getUser(...), response.save(...)
            => Provide more details whithout introducing redundancy
            => getUserByEmail(...), response.send(...)
        
        * If function computes a Boolean
            => Answer a true / false question
            => isValid(...), purchase.isPaid(..)
            => Provide more details whithout introducing redundancy
            => emailIsValid(...), purchase.isPaid(...)
*/

/*
    **** Examples - Function / Method Names  **** 
*/
/* what does the function do? */
// save user data to a databse

/* Bad Name */
process() // unspecific, process means save or update or delete, could be anything
handle() // not very specific

/* Okay Names */
save() // it is okay, but it is not clear what we save
storeData() // At least we know that something is saved - but what?

/* Good Names */
saveUser() // saveUser is desriptive
user.save() // user is function, save is inside function, it is very clear, especially with the method.

// ----------------------------------------------------------------
//* what does the function do? */
// Validate the user input

/* Bad Name */
process() // unspecific, process means save or update or delete, could be anything, but validation is not saving
save() // not very specific, or it misleading "save"

/* Okay Names */
validateSave() // it is okay, but validateSave could imply that we do both, validation and saving, so its still not ideal
check() // check is okay, it makes it clear that we are cheacking something, not realy specific. it leaves us guessing

/* Good Names */
validate() // validate is desriptive
isValid() // both makes sense- depends on what the function does exactly.