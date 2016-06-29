var canHazRollin = true;

bRoller = function() {

	var s = document.body.style;

	s.setProperty("-moz-transform", "rotate(360deg)");
	s.setProperty("-moz-transition-duration", "4s");
	s.setProperty("-moz-transition-property", "all");
	s.setProperty("-webkit-transform", "rotate(360deg)");
	s.setProperty("-webkit-transition-duration", "4s");
	s.setProperty("-webkit-transition-property", "all");
	s.setProperty("-o-transform", "rotate(360deg)");
	s.setProperty("-o-transition-duration", "4s");
	s.setProperty("-o-transition-property", "all");
	s.setProperty("transform", "rotate(360deg)");
	s.setProperty("transition-duration", "4s");
	s.setProperty("transition-property", "all");

	setTimeout(function() {
		s.removeProperty("-moz-transform");
		s.removeProperty("-moz-transition-duration");
		s.removeProperty("-moz-transition-property");
		s.removeProperty("-webkit-transform");
		s.removeProperty("-webkit-transition-duration");
		s.removeProperty("-webkit-transition-property");
		s.removeProperty("-o-transform");
		s.removeProperty("-o-transition-duration");
		s.removeProperty("-o-transition-property");
		s.removeProperty("transform");
		s.removeProperty("transition-duration");
		s.removeProperty("transition-property");
		canHazRollin = true;
	}, 4000);

};

doBarrelRoll = function() {
	if(canHazRollin) {
		canHazRollin = false;
		bRoller();
	}
};
