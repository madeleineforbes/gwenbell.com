
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Gwen Bell • Engineer the Web You Want' });
};

exports.about = function(req, res){
	res.render('about', { title: 'About Gwen Bell'});
};

exports.responses = function(req, res){
res.render('responses', { title: 'Reader Responses'});
};

exports.writing = function(req, res){
res.render('writing', { title: 'Writing'});
};

exports.deadpeople = function(req, res){
res.render('deadpeople', { title: 'Dead People'});
};

exports.presence = function(req, res){
res.render('presence', { title: 'Presence'});
};

exports.tech = function(req, res){
res.render('tech', { title: 'Tech'});
};