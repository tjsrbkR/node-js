var http = require('http');
var fs = require('fs');
//${변수} < 리터럴 방식
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    let title = queryData.id;
    if(pathname === '/'){
        if(title === undefined){
                let name = "Welcome !";
                let description = "Hello! Node.js!"
                let template = `
                    <!doctype html>
                    <html>
                        <head>
                        <title>WEB1 - ${name}</title>
                        <meta charset="utf-8">
                        </head>
                        <body>
                        <h1><a href="/">WEB</a></h1>
                        <ul>
                            <li><a href="/?id=HTML">HTML</a></li>
                            <li><a href="/?id=CSS">CSS</a></li>
                            <li><a href="/?id=JavaScript">JavaScript</a></li>
                        </ul>
                        <h2>${name}</h2>
                        <p>
                            ${description}
                        </p>
                        </body>
                    </html>
                `;
                response.writeHead(200);
                response.end(template);
        }
        else{
            fs.readFile(`data/${title}`,'utf-8', function(err, description){
                let template = `
                    <!doctype html>
                    <html>
                        <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                        </head>
                        <body>
                        <h1><a href="/">WEB</a></h1>
                        <ul>
                            <li><a href="/?id=HTML">HTML</a></li>
                            <li><a href="/?id=CSS">CSS</a></li>
                            <li><a href="/?id=JavaScript">JavaScript</a></li>
                        </ul>
                        <h2>${title}</h2>
                        <p>
                            ${description}
                        </p>
                        </body>
                    </html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        }
    } else{
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);