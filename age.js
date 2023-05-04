const { totalmem } = require('os');

http=require('http');
url=require('url');
qs=require('querystring');
function onRequest(req,res){
    var path=url.parse(req.url).pathname;
    var query =url.parse(req.url).query;
    var Ma=qs.parse(query)["Mark1"];
    var Ma2=qs.parse(query)["Mark2"];
    var Ma3=qs.parse(query)["Mark3"];
    var Total=parseInt(Ma)+parseInt(Ma2)+parseInt(Ma3);
    res.write("Your total is "+Total+"\n\n\n");
    console.log("ToTal Marks ="+Total);
    var avg=Total/3;
    res.write("Your Average is "+avg+"\n\n\n");
    if(avg>90)
    res.write("Your Grade is A");
    else if(avg>80)
    res.write("Your Grade is B");
    else if(avg>70)
    res.write("Your Grade is C");
    else if(avg>60)
    res.write("Your Grade is D");
    else if(avg>50)
    res.write("Your Grade is E");
    else
    res.write("Your are Fail");    
    res.end();
}
http.createServer(onRequest).listen(3200);
console.log("Server is running");