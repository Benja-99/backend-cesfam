const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

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