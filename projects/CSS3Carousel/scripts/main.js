(function demo() {
	var demo = document.getElementById("wrap");
	var count = 0;
	demo.addEventListener("click", function() {

		count += 1;
		demo.style.webkitTransform = "rotateY(" + count * 60 + "deg)";
		
		demo.style.MozTransform = "rotateY(" + count * 60 + "deg)";
		
	}, false);
})();