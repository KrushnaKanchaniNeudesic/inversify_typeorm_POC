import { AsyncContainerModule } from "inversify";
import { UserService } from "./src/service/user";
import TYPES from "./src/constant/types";
import { MongoDBConnection } from "./src/utils/mongodb/connection";
import { Repository } from "typeorm";
import { User } from "./src/entities/User";
import { UserRepository } from "./src/repositories/user_repository";


export const bindings = new AsyncContainerModule(async (bind) => {

    await MongoDBConnection.getDbConnection();

    bind<Repository<User>>(TYPES.UserRepository).toDynamicValue(() => {
        return UserRepository();
    }).inRequestScope();

    bind<UserService>(TYPES.UserService).to(UserService);


});
