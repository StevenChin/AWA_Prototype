$(function() {
	$( ".draggableContainer" ).draggable({ grid: [ 360, 0 ], containment: "parent"  });
	
	$( ".draggableContainer" ).mousedown(function(e) {
		var $this = $(this);

        this.downTimer = setTimeout(function() {
            $this.addClass("selected");
        }, 300);
	}).mouseup(function(e) {
		var $this = $(this);
        var _e = e;
        
        clearTimeout(this.downTimer);
        $this.removeClass("selected");
	});
});