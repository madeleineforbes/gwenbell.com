
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Gwen Bell Dot Com' });
};

exports.about = function(req, res){
	res.render('about', { title: 'About Gwen Bell'});
};