if (Meteor.isClient) {
	// counter starts at 0
	Session.setDefault('counter', 0);
	
	Template.navigation.helpers({
		domain: function() {
			return Meteor.absoluteUrl();
		}
	});
	
	Template.navigation.onRendered(function () {
		$('body').flowtype({
			minFont   : 14,
			maxFont   : 16,
			fontRatio : 30
		});
		
		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 50
				}, 500);
				return false;
			  }
			}
		  });
		});
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
	var utenti = new Mongo.Collection('users');
}
