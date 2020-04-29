import {
  controller, httpGet, httpPost, httpPut, httpDelete, requestBody, requestParam
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { IUser, UserService } from '../service/user';
import { Request } from 'express';
import TYPES from '../constant/types';

@controller('/user')
export class UserController {

  constructor(@inject(TYPES.UserService) private userService: UserService) { }

  @httpGet('/')
  public getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @httpGet('/:id')
  public async getUser(request: Request, @requestParam("id") id: string): Promise<IUser> {
    return await this.userService.getUser(id);
  }

  @httpPost('/')
  public async newUser(request: Request, @requestBody() newUser: IUser):  Promise<IUser> {
    return await this.userService.newUser(newUser);
  }

  @httpPut('/:id')
  public updateUser(request: Request): IUser {
    return this.userService.updateUser(request.params.id, request.body);
  }

  @httpDelete('/:id')
  public deleteUser(request: Request): string {
    return this.userService.deleteUser(request.params.id);
  }
}
