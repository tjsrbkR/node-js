var http = require('http');
var fs = require('fs');
//${변수} < 리터럴 방식
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    let title = queryData.id;
    if(_url == '/'){
        _url = '/index.html';
        title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
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
    response.end(template);
    });
});
app.listen(3000);