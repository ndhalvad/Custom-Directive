angular.module("app",['main']);

var ndApp = angular.module("main",[]);

//Controller
ndApp.controller("mainController",function($scope){
    // Controller body	
});


//Custom Directive...
ndApp.directive('customDirective', function() {
    return {
        restrict: 'E',/* Restrict directive to elements */
		template: '<h1>From custom directive!</h1>'
    };
});


//Custom Directive with Link function and Template tag...
ndApp.directive('linkedDirective', function() {
	return {
		restrict: 'E',/* Restrict directive to elements */
		transclude: 'true',
		template: '<span ng-transclude></span>',
		link: function(scope, element, attr){

			//Append title from tag
		    element.append("<strong>"+attr.title+"</strong>");

		    //Bind click event using link function...
			element.bind('click', function () {
				element.html('You clicked me!');
			});
		}
	};
});