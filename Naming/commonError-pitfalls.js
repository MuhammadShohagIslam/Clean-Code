/*
    *** Common Error And Pitfalls ***

        => Don't include Redundant information in names
*/
suerWithNameAndAge = User('Max', 31) // it is so specific
// names have the purpose of the making us understand code without diving into the details of a certain implementaion
// but that does not mean that we want to describe everything with a variable name

// Name should avoid describing unneccsary or redundant details
user = User("max", 31)
(newUser, loggedInUser)

/*
    *** Avoid Slang, unclear Abbreviation and Disinformation
*/
// Avoid slang
product.diePlease()
user.facePalm

// do 
product.remove()
user.sendErrorMessage();

// unclear Abbrevitions
message(n)
ymdt = "34729595"
// do 
message(newUser)
dateWithTimezone = "32496"

// Disinformation 
userList = {u1: ..., u2: ...}
allAcount = accounts.filter()

// do 
userMap = {u1: ..., u2: ...}
filteredAccounts = 
accounts.filter()

/*
    *** Choose Distinctive Names ***
*/
// bad
anaytics.getDailyDate(day);
anaytics.getDayDate(day);
anaytics.getRawDailyDate(day);
anaytics.getParsedDailyDate(day);

// good
anaytics.getDailyReport(day);
anaytics.getDateForToday(day);
anaytics.getRawDailyDate(day);
anaytics.getParsedDailyDate(day);