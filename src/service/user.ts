import { ObjectID } from 'mongodb';
import { injectable, inject } from 'inversify';
import { Repository } from 'typeorm';
import TYPES from '../constant/types';
import { User } from '../entities/User';

export interface IUser {
  email: string;
  name: string;
  id?: ObjectID;
}

@injectable()
export class UserService {

  private readonly _userRepository: Repository<User>;
    public constructor(
        @inject(TYPES.UserRepository)userRepository: Repository<User>
    ) {
        this._userRepository = userRepository;
    }

  private userStorage: IUser[] = [{
    email: 'lorem@ipsum.com',
    name: 'Lorem'
  }, {
    email: 'doloe@sit.com',
    name: 'Dolor'
  }];

  public getUsers(): IUser[] {
    return this.userStorage;
  }

  public async getUser(id: string): Promise<IUser> {
    return await this._userRepository.findOne({id});
  }

  public async newUser(user: IUser): Promise<IUser> {
   return await this._userRepository.save(user);
  }

  public updateUser(id: string, user: IUser): IUser {
    this.userStorage.map((entry, index) => {
      if (entry.name === id) {
        this.userStorage[index] = user;
      }
    });

    return user;
  }

  public deleteUser(id: string): string {
    let updatedUser: IUser[] = [];
    this.userStorage.map(user => {
      if (user.name !== id) {
        updatedUser.push(user);
      }
    });

    this.userStorage = updatedUser;
    return id;
  }
}
