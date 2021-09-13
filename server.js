/*
 * @Description:
 * @Version: 2.0
 * @Autor: duanfy
 * @Date: 2021-09-08 18:45:47
 * @LastEditors: duanfy
 * @LastEditTime: 2021-09-13 11:49:32
 */
'use strict'
const express = require('express')
// Constants
const PORT = 8080
const HOST = '127.0.0.1'
// App
const app = express()
app.get('/', (req, res) => {
  console.log(123);
  res.send('Hello world\n')
})
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
