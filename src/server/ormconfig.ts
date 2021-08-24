import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'ec2-44-197-40-76.compute-1.amazonaws.com',
    port: 5432,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        },
    },
    username: 'ixvmhqbaiqwkiw',
    password: '198a915903aad44091c7c469f7635e019b4efcf2c903e24d6bdf570bc57a76c1',
    database: 'd5pjd57fhmrb73',
    url: 'postgres://ixvmhqbaiqwkiw:198a915903aad44091c7c469f7635e019b4efcf2c903e24d6bdf570bc57a76c1@ec2-44-197-40-76.compute-1.amazonaws.com:5432/d5pjd57fhmrb73',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/server/migrations'
    }
}

export default config;