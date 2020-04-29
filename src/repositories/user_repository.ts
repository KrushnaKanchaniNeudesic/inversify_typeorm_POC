
import { getConnection } from "typeorm";
import { User } from "../entities/User";

export function UserRepository() {
    const conn = getConnection();
    const movieRepository = conn.getRepository(User);
    return movieRepository;
}


// export class GenericRepositoryClass<T> {
   
//     constructor(private type: ObjectType<T>, private connection: Connection) {
       
//     }

//     public find(): T[] {
//         let result: T[] = [];
//         this.connection.connect().then(async  connection => {
//             result = await <Promise<T[]>>(connection.getMongoRepository(this.type).find(this.type));
//         });
//         return result;
//      }
// }

