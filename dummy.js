// barss_name: { 
//     type : DataTypes.STRING, 
//     allowNull: false, 
// }, 

// rating : { 
//     type : DataTypes.INET, 
//     allowNull: false, 
// }, 

// pricing: { 
//     type: DataTypes.ENUM, 
//     allowNull: false, 
// }, 

// hours: { 
//     type: DataTypes.STRING, 
//     allowNull: false, 
// }, 

// reservation: { 
//     type: DataTypes.STRING, 
//     allowNull: false, 
// }, 

// reviews: { 
//     type: DataTypes.STRING, 
//     allowNull: false,
// },  

// day_of_week:{ 
//     type: DataTypes.STRING, 
//     allowNull: false,

// },

// const sequelize = require("./Configuration/connection")
// const {Bar} = require('./Bar-Models')
// const seed = [
//     {
//         bars_name: "jumping rabbit",
//         day_of_week: "monday",
//         reviews: "great!"
//     },
//     {
//         bars_name: "humping rabbit",
//         day_of_week: "tuesday",
//         reviews: "great!"
//     },
//     {
//         bars_name: "rabbit burger",
//         day_of_week: "wednesday",
//         reviews: "great!"
//     },
//     {
//         bars_name: "eating rabbit",
//         day_of_week: "thursday",
//         reviews: "great!"
//     },
//     {
//         bars_name: "hopping rabbit",
//         day_of_week: "friday",
//         reviews: "great!"
//     },
//     {
//         bars_name: "dancing rabbit",
//         day_of_week: "saturday",
//         reviews: "great!"
//     },
//     {
//         bars_name: "running rabbit",
//         day_of_week: "sunday",
//         reviews: "great!"
//     },
// ]

// sequelize.sync({force:true}).then(async ()=> {
//     try{

//         await Bar.bulkCreate(seed);
//         console.log("seeded")
//     }catch(err){
//         console.log(err)
//     }
// })



// this is a practice folder. can be deleted.