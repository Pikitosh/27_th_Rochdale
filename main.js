// JavaScript Document
/* exported checkCookies */
	let quotes =
	[
		'"Being hardworking is the best thing you can show children." <h6>David Beckham (Footballer).</h6>',
		'"It matters not who you love, where you love, why you love, when you love or how you love, it matters only that you love." <h6>John Lennon (The Beatles - 3rd Allerton Scouts Group).</h6>',
		'‘I don’t know where I’m going from here, but I promise it won’t be boring." <h6>David Bowie (Singer-songwriter and actor).</h6>',
		'"The trick to having a happy life is being good at something." <h6>David Gilmour (Pink Floyd).</h6>',
		'"Scouting got me away from the desk, got me doing useful, fun & exciting things... thinking back it taught me more things than school ever did." <h6>Richard Branson (Entrepreneur).</h6>',
		'"If you give people a chance, they shine." <h6>Billy Connolly (Actor, comedian).</h6>',
		'"I was a Scout, but I didn\u0027t get many badges. I got a Bivouac Badge for camping out." <h6>Paul McCartney (The Beatles).</h6>',
		'"When you are trying to move mountains, you want-and need-people on your side who want to move them with you." <h6>Jamie Oliver (Chef).</h6>',
		'"An understanding of the natural world is a source of not only great curiosity, but great fulfilment." <h6>Sir David Frederick Attenborough (Broadcaster, and natural historian).</h6>',
		'"If you get stuck in a lift, or washed up on a desert island, just make sure it’s with a Scout!" <h6>Bear Grylls (Adventurer and television presenter).</h6>',
		'"We age not by holding on to youth, but by letting ourselves grow and embracing whatever youthful parts remain." <h6>Keith Richards (The Rolling Stones).</h6>',
		'"Scouting was the first step on a journey that led me to becoming an astronaut… and more importantly a Lego minifig ;)." <h6>Tim Peake (Astronaut).</h6>',
		'"It\u0027s impossible to please everybody all of the time, but you just have to believe that you\u0027re making decisions for the right reasons." <h6>Gareth Southgate (Footballer).</h6>',
		'"Teach Scouts not how to get a living, but how to live." <h6>Robert Baden-Powell (Founder of the Scout Movement).</h6>',
		'"The real way to gain happiness is to give it to others." <h6>Robert Baden-Powell (Founder of the Scout Movement).</h6>',
		'"In Scouting you are combating the brooding of selfishness." <h6>Robert Baden-Powell (Founder of the Scout Movement).</h6>',
		'"You can only get discipline in the mass by discipline in the individual." <h6>Robert Baden-Powell (Founder of the Scout Movement).</h6>',
		'"The Scout Oath and Law are our binding disciplinary force." <h6>Robert Baden-Powell (Founder of the Scout Movement).</h6>',
	];

function checkCookies() {
	var text = "";
	if (navigator.cookieEnabled == true) {
		text = quotes[Math.floor(Math.random() * quotes.length)];
	} else {
		text = "Cookies are not enabled.";
	}
	document.getElementById("demo").innerHTML = text;
	document.addEventListener('DOMContentLoaded', checkCookies);
	
}

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
