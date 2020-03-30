import App from './app'

const app = new App(
    [
        // file controllers
    ]
);

async function start() {
   (await app.connectGrpc(5000)).listen();
}

start();
