/*
    *** Bad Comments ***
*/

/* 
    ---  Dividers / Block Markers --- 
    => we do not need define any class comment below way, beacuse already we use class keyword.
*/

// ***************
// GLOBALS
// ***************
let sqlDriver: any;
let mongoDbDriver: any;

// ***************
// CLASSES
// ***************

/* 
    ---  Redundant Information --- 
      => 'the database engine to which we connect', which is the bad comment, instead write comment like, we can use name 'dbEngine'
      => If we use proper name you should not need any explanatory comments beacuse the names should be self-explanatory already.
      => Comments make it header to understand the code.

*/

// Acts as an adapter, connecting models to various database engines (SQL, MongoDB)
class Database {
    private dbEngine: any; // the database engine to which we connect
  
    loadDatabaseDriver(driver: string) {
      if (driver === 'sql') {
        // Connect to the SQL Driver if "driver" is set to SQL
        this.dbEngine = sqlDriver;
      } else {
        // Otherwise, connect to MongoDB
        this.dbEngine = mongoDbDriver;
      }
    }
  
    connect() {
      this.dbDriver.connect(); // This may fail and throw an error
    }
  
    /*  
        --- Misleading Comment ---
          =>  "updates a user", we say updates a user, but name implies that we are inserting a user.
          which is not the same as updating.So what are we doing, What the comment says or what the name says?
          => update a user, although the method name says "insert"
    
    */
    insertData(data: any) {
      this.dbEngine.insert(data); // updates a user
    }

    /* 
      --- Commented-Out-Code ---  
        => we should not permanently comment-out-code, if we really have code which we do not need anymore, we should just remove it. We can use version control system.
    */
     // findMany(filter: any) {
    //   this.dbDriver.find(filter);
    // }
  
  }


 