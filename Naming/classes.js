/*
    *** Naming Classes ***
        => Describe the obejct, which is created when we instantiate the class, so class should reflect,
        which kind of object gets created
        => User, Product
        => Provide more details without introducing redundancy
        => Customer, Course
        => Avoid redundant suffixes (Classes are typically instantiated)
        => DatabaseManager (Instantiating a "DatabaseManager" make no sense.)
*/

/*
    **** Examples - Class Names  **** 
*/
/* what object is described? */
// A User

/* Bad Name */
class UEntity // unspecific, it hold anything, 
class ObjA // both name is unspecific

/* Okay Names */
class UserObject 
class AppUser // both class names have redundant information

/* Good Names */
class User // "User" is just fine 
class Admin // "Admin" if it a more specific kind of user
// ----------------------------------------------------------------

/* what object is described? */
// A Database (in code)

/* Bad Name */
class Data // unspecific, or even describing the wrong thing, 
class DataStorage // Data Storage does not have to be a database, could be file storage, a storage in memory

/* Okay Names */
class db 
class data // still not 100% specific, data could be anything

/* Good Names */
class Database // "Database" is good 
class SQLDatabase // "SQLDatabase" if it a more specific, might be even better.