module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'blindTyping',
        user: process.env.DB_USER || 'blindTyping',
        email: process.env.DB_EMAIL || 'blindTyping',
        password: process.env.DB_PASS || 'blindTyping',
        info: process.env.DB_INFO || 'blindTyping',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './blindTyping.sqlite'
        }
    }
}
