import {MongoClient} from 'mongodb'

let db

const connectToDb = (cb) => {
    const client = new MongoClient('mongodb+srv://admin:admin@richiesblog.8s2m2no.mongodb.net/?retryWrites=true&w=majority')
    client.connect()
    db = client.db('portfolio')
    cb()
}

export {
    db,
    connectToDb
}