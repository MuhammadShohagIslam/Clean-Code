class Database{
    private client: any // private means it can not be accessed from outside  the class

    get connectedClient(){
        if(!this.client){
            throw new Error('Database not connected!')
        }
        return this.client;
    } // get means allows us to control access to certain properties in the class

    connect(){
        // Establishing connection ...
        this.client = {}
    }

}
const db = new Database();
db.connectedClient.query()