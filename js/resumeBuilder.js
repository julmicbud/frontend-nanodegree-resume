/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = 
		HTMLheaderName.replace("%data%", "Julia Hendrickson");
		
var formattedRole = 
		HTMLheaderRole.replace("%data%", "Web Developer and Graphic Designer");
		
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Julia Hendrickson",
	"role" : "Graphic Designer and Web Developer",
	"photo" : "images/me.jpg",
	"message" : "Hello World!",
"skills" : [
"Everything!"]
	}
	
$("#main").prepend(bio);
	