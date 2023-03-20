const fs=require("fs");

let database=fs.readFileSync("./database.json");
database=JSON.parse(database);

// list=database.expense.forEach(expense=>expense["name"])
const list=[];
database.expense.forEach(value=>list.push(value["name"]));
exports.list=async(req,res)=>{
    res.json({
        status:'ok',
        data:[list]
    })
}

const details=database.expense;
exports.details=async(req,res)=>{
    res.json({
        status:'ok',
        data:[details]
    })
}





// data.user.push({
//     id:2,
//     email:"email120@gmail.com",
//     password:"def123"
// })

// data = JSON.stringify(data);


// fs.writeFile("./user.json",data,(err)=>{
//     if(err) throw err;
//     console.log("data saved successfully");
// })