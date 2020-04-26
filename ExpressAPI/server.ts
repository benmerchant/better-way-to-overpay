import express = require('express')
const app = express()
const host = 'http://localhost'
const port = 8000

app.get('/', (_req: any, res: any) => {
  res.send('Heyooooo, World!')
})

app.listen(port, () => {
  console.log(`oPay API listening on ${host}${port}`)
  
})