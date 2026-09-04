import { createServer } from 'node:http';

createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('oi');
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }   
}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});