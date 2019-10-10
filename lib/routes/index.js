var replaceStream = require('replacestream')
  , contentRequest = require('request');

module.exports = app => {
  try{
    app.get('/secure-content/:id(*)', function (req, res) {
      let settings = app.settings.repoService
      // console.log('Transforming http://' + settings.purl.host + '/' + req.params.id)
      var secureContent = contentRequest('http://' + settings.purl.host + '/' + req.params.id)
         .pipe(replaceStream('http://', 'https://')).pipe(res);
    })
  } catch (err){
    console.log(err);
  }
}
