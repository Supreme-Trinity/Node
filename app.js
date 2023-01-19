var http= require('http');
//Libraries just like #include iostream

//Now we will call a method on the http
//and pass a function onto it as a parameter
// var foo= function(req, res){
//     //Anonymous function

// }
http.createServer(function(req, res){
    //Anonymous function
    //We'll just take the request and send out the response
    res.end("Hello, Node!\n");
}).listen(3000);
//Now on what server we're going to run our server on? For that we write listen (.listen(${server}))

console.log("server listening on http://localhost/3000");
 
//If we go on inspect element, we go to network section and referesh the page we will see status code 200
