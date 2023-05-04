const http = require('http')
const querystring = require('querystring')

var query,email,name;

http.createServer(function (req, res) {

    var data1 = '';

    req.on('data', function (chunk) {

        console.log(chunk);

        data1 += chunk;

    });

    req.on('end', function () {
        query = querystring.parse(data1);

        console.log(query);

        email = query['Email']

        name = query['Name']


        res.write("Check out your email id and password email id : "+email +" Name: "+name);

        res.end();

    });

}).listen(5501); console.log('Server has Started.......');