import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import './src/controller/home';
import './src/controller/user';
import { bindings } from './inversify.config';
import * as bodyParser from 'body-parser';
// // load everything needed to the Container
// let container = new Container();
// container.bind<UserService>(TYPES.UserService).to(UserService);

// // start the server
// let server = new InversifyExpressServer(container);

// server.setConfig((app) => {
//   app.use(bodyParser.urlencoded({
//     extended: true
//   }));
//   app.use(bodyParser.json());
// });

// let serverInstance = server.build();
// serverInstance.listen(3000);

// console.log('Server started on port 3000 :)');

(async () => {

  const port = 3000;
  const container = new Container();
  await container.loadAsync(bindings);
  const server = new InversifyExpressServer(container);

  server.setConfig((theApp) => {
    theApp.use(bodyParser.urlencoded({
      extended: true
    }));
    theApp.use(bodyParser.json());
  });


  const app = server.build();

  app.listen(port, () => {
      console.log(`Server running at http://127.0.0.1:${port}/`)
  });

})();
