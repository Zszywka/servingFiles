--> index3.js & index.html & error404.gif/firstframe.jpg
using the fs module and the http module to serve static files. 
Create an index.html file and send it back to the client if there is an url / request. 
Otherwise, send him any picture that will inform him about the 404 error.
Use the fs.readFile method to read the file. Also remember to set the right headings!

--> index.js
a simple server that will give the customer a response in the form of "Hello World!".

--> index1.js
the application returns the response to the client ('<h1> Hello World! </ h1>');
if the query method is GET and the address is / hello. 
Otherwise, it is worth showing the client that we are unable to handle his query 
and send a response with a specific status(404)
