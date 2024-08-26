import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 30433,
    username: 'pguser',
    password: 'pgpassword',
    database: 'pguser',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
