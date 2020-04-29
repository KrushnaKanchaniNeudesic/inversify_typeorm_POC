import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class HomeController {
  @httpGet('/')
  public get(): string {
     throw new Error('tes');
    // return 'Home sweet home';
  }
}
