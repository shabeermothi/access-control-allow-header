const restify = require('restify');
const restifyCors = require('restify-cors-middleware');

const respond = (req, res, next) => {
    res.send({
        [req.params.task]: req.params.name
    });
    next();
};

const server = restify.createServer();

const cors = restifyCors({
    preflightMaxAge: 5,
    allowHeaders: ['X-Foo-Bar'],
    exposeHeaders: ['X-Foo-Bar']
});

server.pre(cors.preflight);
server.use(cors.actual);

server.get('/:task/:name', respond);

server.listen('9000', () => {
    console.log(`Listening to ${server.name} at ${server.url}`);
});