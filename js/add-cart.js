$(document).ready(function() {
	var count = 0;
	$("a.add-btn").click(function(event) {
		count++;
		$("a.add-btn").addClass("size");
		setTimeout(function() {
			$("a.add-btn").addClass("hover");
		}, 200);
		setTimeout(function() {
			$("a.cart > span").addClass("counter");
			$("a.cart > span.counter").text(count);
		}, 400);
		setTimeout(function() {
			$("a.add-btn").removeClass("hover");
			$("a.add-btn").removeClass("size");
		}, 600);
		event.preventDefault();
	});
});