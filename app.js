const restify = require('restify');

const respond = (req, res, next) => {
    res.send({
        [req.params.task]: req.params.name
    });
    next();
};

const server = restify.createServer();

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "X-Foo-Bar");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

server.get('/:task/:name', respond);

server.listen('9000', () => {
    console.log(`Listening to ${server.name} at ${server.url}`);
});