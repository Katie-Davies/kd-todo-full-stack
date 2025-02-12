import express from 'express'
import * as Path from 'node:path'
// import * as db from './db/db'
import todos from './routes/todos'

const server = express()

// const todos = await db.getTodoById(3)

// console.log(todos)

server.use(express.json())
server.use('/api/v1/todos', todos)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
