const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loadSync = protoLoader.loadSync('bapg.proto', {});
const pkgDefinition = grpc.loadPackageDefinition(loadSync);
const grpcBAPG = pkgDefinition.grpcBAPG;

const Client = new grpcBAPG.List('localhost:2020', grpc.credentials.createInsecure());

// Methods
function put(key, value) {
    Client.put({
        "key": key,
        "value": value
    }, (err, response) => {
        console.log(response)
    });
}

function get(key) {
    Client.get({key: key}, (err, response) => {
        response = JSON.stringify(response);
        console.log(response);
    });
}

function getAllkeys() {
    const send = Client.getAllKeys();
    send.on("data", item => {
        console.log(item);
    });
}

const inputArgs = process.argv.slice(2);

let key;
let value; 

switch(inputArgs[0]) {
    case 'get':
        key = inputArgs[1];
        get(key);
        break;
    case 'put':
        key = inputArgs[1];
        value = inputArgs[2];
        put(key, value);
        break;
    case 'getAllKeys':
        getAllkeys();
        break;
    default:
        console.log('Invalid command!');
}

