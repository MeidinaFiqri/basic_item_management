import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'crud-basic',
})

try {
    const isConnected = await connection.ping()
    console.log('Database Status :', isConnected ? "Connected" : "Disconnected")
} catch (error) {
    console.log("faied to connect "+ error)
}

export default connection;