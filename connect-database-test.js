import { Sequelize } from "sequelize"
import "dotenv/config"
 
// This is very unsafe, as it reveals the user and password of the database 
// of an open source project
// TODO: Learn about SQL migrations
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres' 
});

sequelize.authenticate().then(function(){
    console.log("You are connected!");
}).catch(function(err){
    console.log("ERROR: " + err);
});

/* This is a Sequelize model, which creates a table
const Articles = sequelize.define("Articles", {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

Articles.create({
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
});

Articles.sync({force: true}); */