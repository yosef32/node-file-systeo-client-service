import App from './app'
import FileController from './controllers/file.controller';

const app = new App(
    [
        new FileController()
    ]
);

app.listen();
