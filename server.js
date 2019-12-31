//require('dotenv').config();

const Koa = require('koa');
const cors = require('@koa/cors');
const next = require('next');
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const Nextapp = next({ dev });
const handle = Nextapp.getRequestHandler();
const koaBody = require('koa-body');


const api = require('./api');
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);



io.on('connect', socket => {
    console.log('connected');
    socket.emit('now', {
        message: 'zeit'
    });
    socket.emit('recent-todolist', {
        message: 'zeit2'
    });
    


});

Nextapp.prepare()
    .then(() => {
        //const server = new Koa();
        const router = new Router();

        router.get('*', async context => {
            await handle(context.req, context.res);
            context.respond = false;
        });

        app.use(async (context, next) => {
            context.res.statusCode = 404;
            await next();
        });

        // 미들웨어
        app.use(koaBody({ multipart: true }));
        app.use(
            cors({
                origin: '*',
                allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
                allowHeaders: ['Content-Type', 'Authorization'],
                exposeHeaders: ['Content-Length', 'Date', 'X-Request-Id']
            })
        );

        // API
        app.use(api.routes());
        app.use(router.routes());
        // Socket IO

        // server.use(handle);
        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch(ex => {
        console.log(ex);
        process.exit(1);
    });
