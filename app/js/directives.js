'use strict';

/* Directives */


angular.module('awa.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


$(document).ready(function() {
	// $('.dateSlider').children().click(function(){
	// 	$(this).addClass('current')
	// });
	// $('.dateSlider').children().mouseout(function(){
	// 	$(this).removeClass('current')
	// });

	// var start_day = 0; // set your start day to show first!

	// $('.day_box').hide().eq(start_day).show();
	// $('.mainCalendar .day').eq(start_day).addClass('active');

	// var calWidth = $('#calendar').width();

	// $('.mainCalendar .day').click(function(){

	//     $('.mainCalendar .day').removeClass('active');
	//     $(this).addClass('active');

	//     var thisIndex = $(this).index();

	//     $('.day_box').stop().hide().eq(thisIndex).show();
	//     $('.days').stop().animate({left: '-'+calWidth*thisIndex },800);

	// });


	var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]; 
	var weekdayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
	var str=new Date().getFullYear()+'';
	str= str.match(/\d{2}$/);

	
	
	// // Create a newDate() object
	var newDate = new Date();
	// // Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	// // Output the day, date, month and year   
	$('.weekdayname').html(weekdayNames[newDate.getDay()] );
	$('.weekdaytwo').html(weekdayNames[newDate.getDay() + 1] );
	$('.weekdaythree').html(weekdayNames[newDate.getDay() + 2] );
	$('.weekdayfour').html(weekdayNames[newDate.getDay() + 3] );
	$('.weekdayfive').html(weekdayNames[newDate.getDay() + 4] );
	$('.weekdaysix').html(weekdayNames[newDate.getDay() + 5] );
	$('.weekdayseven').html(weekdayNames[newDate.getDay() + 6] );
	$('.month').html(newDate.getMonth()+ 1 + "/" );
	$('.dayweek').html(newDate.getDate());
	$('.dayweektwo').html(newDate.getDate() + 1 + "/" );
	$('.dayweekthree').html(newDate.getDate() + 2 + "/" );
	$('.dayweekfour').html(newDate.getDate() + 3 + "/" );
	$('.dayweekfive').html(newDate.getDate() + 4 + "/" );
	$('.dayweeksix').html(newDate.getDate() + 5 + "/" );
	$('.dayweekseven').html(newDate.getDate() + 6 + "/" );
	$('.year').html(newDate.getFullYear() );
	$('.yeartwo').html(str);
	
	$('.basic').click(function (e) {
		$('#modal').removeClass('none');
		$('#simplemodal-container').fadeIn('500');
		$('#simplemodal-overlay').fadeIn('500');
		$('#modal').modal();
		return false;
	});
	$('.closeModal').click(function() {
		$('#modal').fadeOut('500');
		$('#simplemodal-container').fadeOut('500');
		$('#simplemodal-overlay').fadeOut('500');
	});
	$('.details').click(function() {
		$('.detailsCard').toggle();
		$('.detailsArrow').toggle();
	});
});