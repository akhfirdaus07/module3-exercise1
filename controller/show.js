const fs=require("fs");
let database=fs.readFileSync("./database.json");
database=JSON.parse(database);

exports.list=async(req,res)=>{
    const list=[];
    database.expense.forEach(value=>list.push(value["name"]));
    res.json({
        status:'ok',
        data:[list]
    });
}

exports.details=async(req,res)=>{
    res.json({
        status:'ok',
        data:[database.expense]
    });
}

exports.byCategory=async(req,res)=>{
    const categories={
        food:[],
        furniture:[],
        games:[]
    };

    for (let category in categories){
        for (let value of database.expense){
            if(value["category"]==category){
                categories[category].push(value["name"])
            }
        }
    }

    res.json({
        status:'ok',
        data:[categories]
    });
}