const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const {expect} = require('chai').use(require('chai-as-promised'));
const {promisify} = require('util');

describe('grpc & node 14', () => {

  const protoDescriptor = loadService();

  it('metadata crashes node process', async () => {

    let server = initServer();
    let sayHello = initClient();

    await expect(sayHello({}, someBinaryMetadata())).to.be.fulfilled;

    server.forceShutdown();

    // does not happen without recreating the server
    initServer();
    sayHello = initClient();

    await expect(sayHello({}, someBinaryMetadata())).to.be.fulfilled;
  });

  function initServer() {
    let server = new grpc.Server();

    server.addProtoService(protoDescriptor.com.wix.EchoService.service, {
      SayHello: (call, callback) => {
        // with the second instance of server the metadata is corrupted and node process crashes
        console.log('*********grpc-failure.spec.js:32*********** call.metadata: ', call.metadata);
        callback(null, {greeting: 'hey'});
      }
    });

    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    return server;
  }

  function initClient() {
    let client = new protoDescriptor.com.wix.EchoService('localhost:50051', grpc.credentials.createInsecure());
    return promisify(client.SayHello).bind(client);
  }

  function someBinaryMetadata() {
    const metadata = new grpc.Metadata();
    metadata.add('foo-bin', Buffer.from('foo'));
    return metadata;
  }

  function loadService() {
    const packageDefinition = protoLoader.loadSync('test/service.proto');
    return grpc.loadPackageDefinition(packageDefinition);
  }
});
