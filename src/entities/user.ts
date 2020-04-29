import {
    Entity,
    Column,
    ObjectIdColumn,
    ObjectID
} from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    email: string;

    @Column()
    name: string;
}
