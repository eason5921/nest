export default {
  poolSize: 1000,
  type: 'mysql', // 数据库类型
  host: 'localhost', // 数据库主机
  port: 3306, // 数据库端口
  username: 'root',
  password: 'dengpu123',
  database: 'nest_shop',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // 生产环境中应该设置为 false，开发环境可以为 true
  autoLoadEntities: true,
};
