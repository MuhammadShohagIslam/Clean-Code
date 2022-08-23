/*
        *** Naming Variables, Constants & Properties ***
    
    Value is an Object    Value is Number or String       Value is a Boolean

    Describe the value     Describe the value              Answer a true/ false question    
        user                    name                        isActive
        database                age                         loggedIn

    Provide more details    Provide more details            Provide more details
    without introducing     without introducing             without introducing
    redundancy              redundancy                      redundancy

    authenticatedUser       firstName                       isActiveUser
    sqlDatabase             age                             isLoggedUser

    Note: sometime shorter is better, sometime longer is better
*/

/*
    **** Examples - Varible Name  **** 
*/
/* what is stored? */
// you have a varible, which is stored user object, it is true constant, or property

/* Bad Name */
u // very short and unspecific
data // not very specific, both is not clear which holds user object

/* Okay Names */
userData // it is okay, but it might have redundancy
person // it is okay, person is too unspecific, but it make sense, what if for instructure, aadministator

/* Good Names */
user // user is desriptive
custome // customer is even more specific

// ----------------------------------------------------------------
/* what is stored? */
// user input validation result (true / false)

/* Bad Name */
v // very short and unspecific, single character always bad, "v" could be anything
val // not very specific, "val" could also stand for "value"

/* Okay Names */
correct
validatedInput // these names is that they do not imply that they hold true or false values

/* Good Names */
isCorrect // isCorrect is desriptive
isValid // isValid is even more specific
