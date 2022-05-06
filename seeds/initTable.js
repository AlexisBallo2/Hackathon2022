exports.seed = async function (knex) {   
    await knex("alltable").del();  // Deletes ALL existing entries       
    await knex("alltable").insert([    
        { 
            ID: 0, 
            itemOrService: "Sexual Favors", 
            publishTime: "3:14PM 5/6/22", 
            endtime: "na", 
            user: "Julian", 
            buySellRentBorrow: "sell",
            price: 420.69
        },    
    ]);   
};