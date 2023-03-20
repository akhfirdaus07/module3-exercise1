const fs=require("fs");
let database=fs.readFileSync("./database.json");
database=JSON.parse(database);

exports.details=async(req,res)=>{
    database.expense.pop();
    database = JSON.stringify(database);

    fs.writeFile("./database.json",database,(err)=>{
        if(err) throw err;
        console.log("expense data deleted successfully");
    })

    database=JSON.parse(database);
    res.json({
        status:'ok',
        data:[database.expense]
    })
}