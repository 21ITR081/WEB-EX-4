http= require('http');
url=require("url");
qs= require("querystring");

function  onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Reuest for"+path+" recieved");
    var query=url.parse(request.url).query;
    var User=qs.parse(query)["Name"];
    var Phone=qs.parse(query)["NOw"];
    var Email=qs.parse(query)["Email"];
    var Address=qs.parse(query)["add"];
    response.write("Hi = = ="+User+"\n\nPhone No = = ="+Phone+"\n\nEmail = = ="+Email+"\n\nYour Address= = ="+Address+"\n\nYou have create the account succescfully ");
    response.end();
}

http.createServer(onRequest).listen(2500);
console.log("Server is Running ..........");