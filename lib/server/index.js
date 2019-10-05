
module.exports = app => {
  let options = app.settings.server

  var server = app.listen(options.port, function () {
     var host = server.address().address
     var port = server.address().port

     console.log("SecureContent listening at http://%s:%s/secure-content", host, port)
  })
}
