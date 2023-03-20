const fs=require("fs");
let database=fs.readFileSync("./database.json");
database=JSON.parse(database);

exports.details=async(req,res)=>{
    database.expense.push({
        id:3,
        name:"XBOX",
        nominal:15000000,
        category:"games",
        date:"2023-01-21T18:25:43.511Z"
    });
    database = JSON.stringify(database);

    fs.writeFile("./database.json",database,(err)=>{
        if(err) throw err;
        console.log("expense data created successfully");
    })

    database=JSON.parse(database);
    res.json({
        status:'ok',
        data:[database.expense]
    });
}