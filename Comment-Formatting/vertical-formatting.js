/*
    *** Vertical Formatting ***
        => Vertical space of our code file.
        => Code should be readable like an essay - top to bottom withour too many "jumps"
        => if our file becomes too big, it houses too many different concepts, we wanna consider splitting
         it across multiple files. there is no rule regualtion how many code one file, but for example, 
         multiple classes beign defined in one file, then it is probably too big and we should split our 
         file into multiple files.One file is one class it is good rule.
        => Different concepts ("areas") should be seperated by spacing. for example, 
        simply multiple methods within one at the same class.vertical black line
        => Similar concepts ("area") should not be separated by spacing.
        => Related concept should be kept close to each other.
        => Order things: public properties -> private properties -> public methods -> private methods
*/

const path = require("path");
const fs = require("fs");
// veritcal blank line: it is good
class DiskStorage {
    constructor(storageDirectory) {
        this.storagePath = path.join(__dirname, storageDirectory);
        // Related concept should be kept close to each other.
        this.setupStorageDirectory();
    }
    // veritcal blank line: it is good
    // Related concept should be kept close to each other.
    setupStorageDirectory() {
        if (!fs.existsSync(this.storagePath)) {
            // Related concept should be kept close to each other.
            this.createStorageDirectory();
        } else {
            console.log("Directory exists already.");
        }
    }
    // veritcal blank line: it is good
    // Related concept should be kept close to each other.
    createStorageDirectory() {
        fs.mkdir(this.storagePath, this.handleOperationCompletion);
    }
    // veritcal blank line: it is good
    insertFileWithData(fileName, data) {
        if (!fs.existsSync(this.storagePath)) {
            console.log("The storage directory hasn't been created yet.");
            return;
        }
        const filePath = path.join(this.storagePath, fileName);
        fs.writeFile(filePath, data, this.handleOperationCompletion);
    }
    // veritcal blank line: it is good
    handleOperationCompletion(error) {
        if (error) {
            this.handleFileSystemError(error);
        } else {
            console.log("Operation completed.");
        }
    }
    // veritcal blank line: it is good
    handleFileSystemError(error) {
        if (error) {
            console.log(
                "Something went wrong - the operation did not complete."
            );
            console.log(error);
        }
    }
}
// veritcal blank line: it is good
// Similar concepts ("area") should not be separated by spacing.
const logStorage = new DiskStorage("logs");
const userStorage = new DiskStorage("users");
// veritcal blank line: it is good
setTimeout(function () {
    // Similar concepts ("area") should not be separated by spacing.
    logStorage.insertFileWithData("2020-10-1.txt", "A first demo log entry.");
    logStorage.insertFileWithData("2020-10-2.txt", "A second demo log entry.");
    userStorage.insertFileWithData("max.txt", "Maximilian Schwarzmüller");
    userStorage.insertFileWithData("maria.txt", "Maria Jones");
}, 1500);

/*
    *** Language-Specific-Consideration ***
        => JavaScript language does not care execution code with ordering methods, but python it is matter. we can not call funtion before denining function above.
*/
// --- It's work for JavaScript ***
start();

function start() {
  console.log('start');
  next();
}

function next() {
  console.log('next');
  last();
}

function last() {
  console.log('last');
}

// --- It's does not work for Python ***
// Won't work
// start()


def start():
    print('Start')
    next()


// Won't work
// start()

def next():
    print('Next')
    last()


def last():
    print('Last')

// Won't work
// start()
start()

