const cheerio = require("cheerio");
const schedule = require("node-schedule");
const axios = require("axios");

schedule.scheduleJob("*/1 * * * *", function() {
    console.log("Buillion Bot is running...");

axios
    .get("https://sdbullion.com/deals")
    .then((response) => {
        let items = [];
        const $ = cheerio.load(response.data);
        $("div.plp-item-top").each((i, el) => {
            const $el = $(el);
            const title = $el.find("strong.product.name.product-item-name").text();
            const price = $el.find("strong.price-formatted").text();
            const link  = $el.find("a.product-item-link").attr("href");  

            var deals = {
                "title" : "Title: " + title,
                "price" : "Price: " + price,
                "link" : "Link: " + link,
                "sName" : "Shop Name: sdbullion.com", 
                "bCategory": "Bullion Category: Deals",
                "bType": "Bullion Type: All",
                

// need to add :Active Flag,
//Product Code*:
//Mint*:

            }
            
            console.log( deals [ "title" ] );
            console.log( deals [ "price" ] );
            console.log( deals [ "link" ] );
            console.log( deals [ "sName" ] );
            console.log( deals [ "bCategory" ] );
            console.log( deals [ "bType" ] );



        }//end of each
        );//end of $
    });//end of then
axios
    .get("https://sdbullion.com/silver/silver-bars/10-oz-silver-bars")
    .then((response) => {
        let items = [];
        const $ = cheerio.load(response.data);
        $("div.plp-item-top").each((i, el) => {
            const $el = $(el);
            const title = $el.find("strong.product.name.product-item-name").text();
            const price = $el.find("strong.price-formatted").text();
            const link  = $el.find("a.product-item-link").attr("href");  

            var sBars = {
                "title" : "Title: " + title,
                "price" : "Price: " + price,
                "link" : "Link: " + link,
                "sName" : "Shop Name: sdbullion.com", 
                "bCategory": "Bullion Category: 10oz Silver Bars",
                "bType": "Bullion Type: Bar",
                "pCode": "Product Code: O",
                
// need to add :Active Flag,
//Mint*:
        }
            
            console.log( sBars [ "title" ] );
            console.log( sBars [ "price" ] );
            console.log( sBars [ "link" ] );
            console.log( sBars [ "sName" ] );
            console.log( sBars [ "bCategory" ] );
            console.log( sBars [ "bType" ] );
            console.log( sBars [ "pCode" ] );


        }//end of each
        );//end of $
    });//end of then

    


});//end of schedule