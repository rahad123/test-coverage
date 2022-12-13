module.exports = {
    app: {
        platform: 'testing-project',
        name: process.env.APP_NAME ?? 'testing-project',
        port: process.env.PORT ?? 3000,
        secret: process.env.JWT_SECRET,
        environment: process.env.NODE_ENV ?? 'dev'
    },
    db: {
        uri: process.env.MONGO_URI ?? 'mongodb://mongo:27017/Testing-purpose' 
    }
}