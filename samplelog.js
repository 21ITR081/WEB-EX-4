http=require("http")
url=require("url")
qs=require("querystring")

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for"+path+"recieved");
    var query=url.parse(request.url).query;
    var Name=qs.parse(query)["name"];
    var Email=qs.parse(query)["mail"];
    response.write("Hi  "+Name+"Your Email"+Email);
    response.end();
}http.createServer(onRequest).listen(3400);
console.log("Server Pranesh");