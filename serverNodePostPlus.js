/*practica server usando post */
const servidor = require('http');

const server = servidor.createServer((req, res) => {
    console.log('incoming request');
    console.log(req.method, req.url);

    res.setHeader('Content-Type', 'text/html');

    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            
            let dataUser = body.split('&');
            
            //res.end(JSON.stringify(dataUser));

            let userName = dataUser[0].split('=')[1];
            let password = dataUser[1].split('=')[1];

            res.end(`${userName} <br> ${password}`);
        });

    }
    else {
        
        res.end('<form method="POST">User:<input type="text" name="username"><br/><br/>Password:<input type="text" name="password"><br/><br/><button type="submit" >Login</button></form>');

    };
});

server.listen(5001);