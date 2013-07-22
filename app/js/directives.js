'use strict';

/* Directives */


angular.module('awa.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

$(document).ready(function() {
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
	$('.dayweek').html(newDate.getDate() + "/" );
	$('.dayweektwo').html(newDate.getDate() + 1 + "/" );
	$('.dayweekthree').html(newDate.getDate() + 2 + "/" );
	$('.dayweekfour').html(newDate.getDate() + 3 + "/" );
	$('.dayweekfive').html(newDate.getDate() + 4 + "/" );
	$('.dayweeksix').html(newDate.getDate() + 5 + "/" );
	$('.dayweekseven').html(newDate.getDate() + 6 + "/" );
	$('.year').html(newDate.getFullYear() );
	$('.yeartwo').html(str);
});