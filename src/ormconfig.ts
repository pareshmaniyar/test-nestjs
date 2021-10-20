
const config = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "firstuser",
    "password": "1234",
    "database": "test",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true // for production, make it false
}
export default config;
