import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer, gql} from "apollo-server-express"
import merge from "lodash";
import express from 'express'
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'

mongoose.connect("mongodb+srv://benja:aG98IBeo9TMFvI2I@cluster0.zgq4xqi.mongodb.net/backend-cesfam", {useNewUrlParser: true, useUnifiedTopology: true})




let apolloServer = null

const corsOptions = {
    origin: "http://localhost:8090",
    credentials: false
}

async function startServer() {
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions})
    await apolloServer.start()

    apolloServer.applyMiddleware({ app, cors: false})
}

startServer()

const app = express()

app.use(cors())
app.listen(8090, () => {
    console.log("Servidor Iniciado")
})