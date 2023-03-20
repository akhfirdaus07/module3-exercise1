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