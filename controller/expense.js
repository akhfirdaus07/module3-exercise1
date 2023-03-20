const fs=require("fs");

let database=fs.readFileSync("./database.json");
database=JSON.parse(database);

// exports.list=async(req,res)=>{
//     res.json({
//         status:'ok',
//         data:[expense]
//     })
// }

exports.details=async(req,res)=>{
    res.json({
        status:'ok',
        data:[database.expense]
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