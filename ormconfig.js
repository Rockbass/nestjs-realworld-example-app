module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "{your password}",
    "database": "nestjsrealworld",
    "entities": process.env.NODE_ENV === 'dev' ? ["src/**/**.entity{.ts,.js}"] : ["dist/**/**.entity{.ts,.js}"],
    "synchronize": false,
    "logging": true
}
