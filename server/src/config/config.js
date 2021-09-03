module.exports = {
  db: {
    database: process.env.DB_NAME || 'nvWebblogDb',
    user: process.env.DB_User || 'root',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      storage: './nvwebblog-db.sqlite'      
    },    
  },
  authentication: {
    jwtSecret: 'nodejs vuejs'
  }
}