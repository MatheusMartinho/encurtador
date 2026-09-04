import { createServer } from 'node:http';

createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('oi');
    }else if (req.method === 'POST' && req.url === '/encurtar') {
        res.writeHead(201, { 'Content-Type': 'text/html' });
        res.end('<h1>Vou encurtar em breve</h1>');
    }else if (req.method === 'GET' && req.url.slice(1)) {
        const codigo = req.url.slice(1);
        res.writeHead(302, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Vou te redirecionar para o Código: ${codigo}`);
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});