const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loadSync = protoLoader.loadSync('bapg.proto', {});
const pkgDefinition = grpc.loadPackageDefinition(loadSync);
const grpcBAPG = pkgDefinition.grpcBAPG;

const crypto = require('crypto');

const server = new grpc.Server();

server.bind('0.0.0.0:2020', grpc.ServerCredentials.createInsecure());

server.addService(grpcBAPG.List.service,
	{
		'put': put,
		'get': get,
		'getAllKeys': getAllKeys
	}
);

server.start();

const data = [];

function put(send, callback){

	let current_date = (new Date()).valueOf().toString();
	let random = Math.random().toString();
	let key = crypto.createHash('sha1').update(current_date + random).digest('hex');

	const Item = {
		"key": send.request.key,
		"value": send.request.value
	};

	data.push(Item);
	callback(null, Item);
}

function get(send, callback){
	const found = data.find(
		i => i.key == send.request.key);

	callback(null, found);
}

function getAllKeys(send, callback){
	data.forEach(i => send.write(i));
	send.end();
}
