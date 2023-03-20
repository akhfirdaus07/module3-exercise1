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

exports.create=async(req,res)=>{
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

exports.edit=async(req,res)=>{
    const editedData={
        id:1,
        name:"Sushi"
    };

    for (let data of database.expense){
        if (data["id"]===editedData["id"]) data["name"]=editedData["name"]
    }


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

exports.delete=async(req,res)=>{
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

exports.byDateRange=async(req,res)=>{
    const expense2021 = database.expense.filter(a => {
        const date = new Date(a.date);
        return (date >= new Date("2021-01-01") && date <= new Date("2021-12-31"));
    });
    const expense2022 = database.expense.filter(a => {
        const date = new Date(a.date);
        return (date >= new Date("2022-01-01") && date <= new Date("2022-12-31"));
    });
    const expense2023 = database.expense.filter(a => {
        const date = new Date(a.date);
        return (date >= new Date("2023-01-01") && date <= new Date("2023-12-31"));
    });

    const dateRange={
        "2021":expense2021,
        "2022":expense2022,
        "2023":expense2023
    }

    res.json({
        status:'ok',
        data:[dateRange]
    });
}

exports.byCategory=async(req,res)=>{
    const categories={
        food:0,
        furniture:0,
        games:0
    };

    for (let category in categories){
        for (let value of database.expense){
            if(value["category"]==category) categories[category]+=value["nominal"];
        }
    }

    res.json({
        status:'ok',
        data:[categories]
    });
}