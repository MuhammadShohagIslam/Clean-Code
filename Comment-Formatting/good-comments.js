/*
    *** Good Comments ***
        
 */
/*
    *** Explanations which can not be replaced by good naming. ***
*/

// accepts [text]@[text].[text], i.e. it simply requires an "@" and a dot
const emailRegex = /\S+@\S+\.\S+/;

/*
    *** Warnings ***
        => This comment that warns we of something
        => e.g below comment: which warns to me, the local storage API is only available in JavaScript running in the browser, not running.
        not running of the the machine.
*/
// Only works in browser environment
localStorage.setItem('user', 'test@test.com');

/*
    *** Legal Information ***
        => below comment, which simpley explaines what does regualr expression
*/
// (c) Maximilian Schwarzmüller / Academind GmbH
// Created in 2020

let sqlDriver: any;
let mongoDbDriver: any;

class DatabaseAdapter {
  private dbEngine: any;

  loadDatabaseDriver(engine: string) {
    if (engine === 'sql') {
      this.dbEngine = sqlDriver;
    } else {
      this.dbEngine = mongoDbDriver;
    }
  }

  connect() {
    this.dbEngine.tryConnect();
  }

  insertData(data: any) {
    this.dbEngine.insert(data);
  }
    /*
        *** Todo Notes ***
            => but if we do have some code which is unfinished, adding a note like this can indeed make sense. Of course we should not overdo it though.
    */
    findOne(id: string) {
    // Todo: Needs to be implemented
  }
}

/*
    *** Documentation Strings ***
        => documentation comments are special kind of comment, which can make sense depending on which kind of project we are working on.
        => It is good if we work with libraries.
*/