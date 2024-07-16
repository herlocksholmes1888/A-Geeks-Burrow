import { Sequelize } from "sequelize"

const sequelize = new Sequelize("testdatabase", "postgres", "supersecretpassword", {
    host: 'localhost',
    dialect: 'postgres' 
});

sequelize.authenticate().then(function(){
    console.log("You are connected!");
}).catch(function(err){
    console.log("ERROR: " + err);
});