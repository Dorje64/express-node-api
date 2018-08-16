module.exports = (app, db) => {
  app.post('/notes', (req, res)=> {
    res.send('hello world')
  })
}
