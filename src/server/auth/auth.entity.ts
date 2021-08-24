import { hash } from 'bcrypt';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "users" })
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    name: string

    @Column({ default: '' })
    image: string

    @Column({ select: false })
    password: string

    @Column({ default: '' })
    bio: string

    @CreateDateColumn()
    created_at: Date;

    @BeforeInsert()
    async hashPasword() {
        this.password = await hash(this.password, 5);
    }
}