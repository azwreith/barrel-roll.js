var canHazRollin = true;

function rotate (angle) {
	//angle = Math.min(Math.max(angle, -360), 360); // Use this to constrain rotates to a maximum of 1 rotation.
	var s = document.body.style;

	s.setProperty("-moz-transform", "rotate(" + angle + "deg)");
	s.setProperty("-moz-transition-duration", "4s");
	s.setProperty("-moz-transition-property", "all");
	s.setProperty("-webkit-transform", "rotate(" + angle + "deg)");
	s.setProperty("-webkit-transition-duration", "4s");
	s.setProperty("-webkit-transition-property", "all");
	s.setProperty("-o-transform", "rotate(" + angle + "deg)");
	s.setProperty("-o-transition-duration", "4s");
	s.setProperty("-o-transition-property", "all");
	s.setProperty("transform", "rotate(" + angle + "deg)");
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
}

function doBarrelRoll () {
	if(canHazRollin) {
		canHazRollin = false;
		rotate(360);
	}
}

function doAntiBarrelRoll () {
	if(canHazRollin) {
		canHazRollin = false;
		rotate(-360);
	}
}
