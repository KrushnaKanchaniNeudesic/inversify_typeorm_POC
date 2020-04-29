
import { createConnection, Connection } from 'typeorm';
import { User } from '../../entities/User';

const connStr = 'mongodb://localhost:27017';
const dbName = "inversify-express-typeOrm-example";

export class MongoDBConnection {

  public static async getDbConnection() {

    const entities = [
      User
    ]

    const connection: Connection = await createConnection({
      type: "mongodb",
      url: connStr,
      useNewUrlParser: true,
      database: dbName,
      synchronize: true,
      logging: true,
      entities: entities
    });

    return connection;
  }
}
