const Restify = require('restify');
const server = Restify.createServer();

server.get('/users', (req,res,next) => {
    res.send(200,[{id:1, name:"teste", jobs:["developer"]}]);
});

server.on('NotFound', (req, res, next ) => {
    res.send(404, {statusCode: 404, errorName: 'Resource Not Found', message: 'Por favor olhar o manual.'})
});

function teste(){


}
function teste2(){

}

module.exports = server;
