const sequelize = require("../Configuration/connection")
const  {Session} = require("../Models/Bar-Models/session.js");

const Sessionseed = () => {
    sequelize.sync({force:true}).then(async ()=> {
        try{
            console.log("No longer undefined",Session);
            await Session.bulkCreate();
            console.log("seeded")
        }catch(err){
            console.log(err)
        }
    })
 }
 
 module.exports = Sessionseed;