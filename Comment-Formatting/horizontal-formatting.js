/*
    *** Horizontal Formatting ***
        => Lines of code should be readable without scrolling avoid very long "sentences"
        => Use indentation-even if not required technically
        => In some languages like python, indentation IS required technically to define function bodies etc.
        => Break long statements into multiple shorter ones.
        => Use clear but not unreadably long names.should not write variable name to much long.
*/
// bad Fromatting
const path = require('path');
const fs = require('fs');

class DiskStorage {
  constructor(storageDirectory) {
    this.storagePath = path.join(__dirname, storageDirectory);this.setupStorageDirectory();
  }

setupStorageDirectory() {
if (!fs.existsSync(this.storagePath)) {
      this.createStorageDirectory();
} else {
      console.log('Directory exists already.');
}
}
createStorageDirectory() {
    fs.mkdir(this.storagePath, this.handleOperationCompletion);
}

  insertFileWithData(fileName, data) {
    if (!fs.existsSync(this.storagePath)) {
      console.log("The storage directory hasn't been created yet.");
      return;
    }
const filePath = path.join(this.storagePath, fileName);
fs.writeFile(filePath, data, this.handleOperationCompletion);
}

handleOperationCompletion(error) {
if (error) {
    this.handleFileSystemError(error);
} else {
    console.log('Operation completed.');
}
}

  handleFileSystemError(error) {
    if (error) {
      console.log('Something went wrong - the operation did not complete.');
      console.log(error);
    }
  }
}

const logStorage = new DiskStorage('logs');
const userStorage = new DiskStorage('users');

setTimeout(function () {
logStorage.insertFileWithData('2020-10-1.txt', 'A first demo log entry.');
logStorage.insertFileWithData('2020-10-2.txt', 'A second demo log entry.');
userStorage.insertFileWithData('max.txt', 'Maximilian Schwarzmüller');
userStorage.insertFileWithData('maria.txt', 'Maria Jones');
}, 1500);


/* Good Formatting */
const path = require('path');
const fs = require('fs');

class DiskStorage {
  constructor(storageDirectory) {
    this.storagePath = path.join(__dirname, storageDirectory);
    this.setupStorageDirectory();
  }

  setupStorageDirectory() {
    if (!fs.existsSync(this.storagePath)) {
      this.createStorageDirectory();
    } else {
      console.log('Directory exists already.');
    }
  }

  createStorageDirectory() {
    fs.mkdir(this.storagePath, this.handleOperationCompletion);
  }

  insertFileWithData(fileName, data) {
    if (!fs.existsSync(this.storagePath)) {
      console.log("The storage directory hasn't been created yet.");
      return;
    }
    // Break long statements into multiple shorter ones.
    const filePath = path.join(this.storagePath, fileName);
    fs.writeFile(filePath, data, this.handleOperationCompletion);
  }

  handleOperationCompletion(error) {
    if (error) {
      this.handleFileSystemError(error);
    } else {
      console.log('Operation completed.');
    }
  }

  handleFileSystemError(error) {
    if (error) {
      console.log('Something went wrong - the operation did not complete.');
      console.log(error);
    }
  }
}

const logStorage = new DiskStorage('logs');
const userStorage = new DiskStorage('users');

setTimeout(function () {
  logStorage.insertFileWithData('2020-10-1.txt', 'A first demo log entry.');
  logStorage.insertFileWithData('2020-10-2.txt', 'A second demo log entry.');
  userStorage.insertFileWithData('max.txt', 'Maximilian Schwarzmüller');
  userStorage.insertFileWithData('maria.txt', 'Maria Jones');
}, 1500);