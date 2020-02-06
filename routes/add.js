var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	console.log(request.query.name);
	console.log(request.query.description);
	var newFriend = {
	"name": request.query.name, 
	"description": request.query.description, 
	"imageURL": "http://lorempixel.com/500/500/people"};
	data.friends.push(newFriend);
	response.render('index', data);
 }