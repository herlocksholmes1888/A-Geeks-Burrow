import { Sequelize } from "sequelize"
 
// This is very unsafe, as it reveals the user and password of the database 
// of an open source project
// TODO: Learn about environment variables and SQL migrations
const sequelize = new Sequelize("testdatabase", "postgres", "supersecretpassword", {
    host: 'localhost',
    dialect: 'postgres' 
});

sequelize.authenticate().then(function(){
    console.log("You are connected!");
}).catch(function(err){
    console.log("ERROR: " + err);
});