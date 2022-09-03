import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'NONE',
    port: NONE,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        },
    },
    username: 'NONE',
    password: 'NONE',
    database: 'NONE',
    url: 'NONE',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/server/migrations'
    }
}

export default config;
