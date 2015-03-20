var rfButtons = angular.module('rfButtons', []);

//scrolls to an selector
rfButtons.directive('rfScrollto', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.click(function(event){
				event.preventDefault();
				var to = $(attrs.mpScrollto).offset().top;
				$("html, body").animate({ scrollTop: to }, 600);
			});
		}
	}
});