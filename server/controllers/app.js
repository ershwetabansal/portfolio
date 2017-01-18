var express         = require('express'),
    http            = require('http'),
    path            = require('path'),
    // bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    url             = require('url'),
    fs              = require('fs'),
    bb              = require('express-busboy');

var app = express();
exports.startServer = function() {
bb.extend(app, {
  upload: true,
});
app.set('port', process.env.PORT || 3000);
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, '../../public'));
app.set('view engine', 'html');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/r-e-s-u-m-e', function(req,res){
  res.render('r-e-s-u-m-e', {});
});

app.get('/portfolio', function(req,res){
  res.render('portfolio.html', {});
});

app.get('/*');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Demo server listening on port ' + app.get('port'));
});

};