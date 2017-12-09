# Custom-Directive  
AngularJS with Custom Directive example with it properties  

**What is Directives in AngularJS..?**  
AngularJS [directives](https://docs.angularjs.org/api/ng/directive) are the controls the rendering of the HTML within the AngularJS application. AngularJS comes with many built in directives like interpolation directive ( {{ }} ), the ng-repeat directive and ng-if directive.
  
  
**Types of Directive:**  
There 4 type of a directive to determines how the directive is activated and work. 
  
1) Element directives(E)  
An Element directive is activated when AngularJS finds a matching HTML Element in the HTML template. When setting restrict to 'E' means we specify that only HTML elements named div should activate the directive.  
  
2) Attribute directives(A)  
An Attribute directive is activated when AngularJS finds a matching HTML element Attribute. When setting restrict to 'A' means we specify that only HTML attributes named div should activate the directive.
  
NOTE: We can also use a value of 'A' which will match both HTML element names and attribute names.  
  
3) CSS class directives(C)  
A CSS class directive is activated when AngularJS finds a matching CSS Class.    
  
4) Comment directives(M)  
A Comment directive is activated when AngularJS finds a matching HTML Comment.  
  
NOTE: Although the C and M values can be used, they're more rare. Most directives out there only use E and A.  
  
  
**Why Custom directive:**    
Directives are very useful to creating reusable code to modularize the code by grouping the specific behavioral functions at single place.  With Directives, you can create custom HTML tags, attributes, or classes to implement required functionality over an HTML section. Such a modular code will have multiple directives that handle their own functionalities and data, and work in isolation from other directives. As an added benefit, the HTML page and Angular scripts becomes less messy and more organized.  
  
  
**Defining a Directive:**    
This section lists simple steps to define a custom directive in an AngularJS module. But before go ahad, lets understanend the directives property.  
  
**Basically directive having 7 properties which help us to complete the fundamental of directives.**   
1) restrict:  Will determines that where a directive can be used. i.e. E = element, A = attribute, C = class and M = comment  
2) scope: Will used to create a new child scope or an isolate scope.   
3) template: By this property we can defines the content that should be output from the directive. We can include HTML, data binding expressions, and even other directives too.  
4) templateUrl: This property will provides the path to the template that should be used by the directive. It can be optionally contain a DOM element id when templates are defined in <script> tags.  
5) controller: We can associate our controller to the directive template using this property  
6) link: Use this properties when we need to perform any action OR event with function which used for DOM manipulation tasks.      
7) transclude: Will used to whether to transfer and include the original child content of the directive's HTML markup in the destination markup which is defined in the template.      
  
**Some basic fundamental of scope**    
When we are setting scope: true in directive, and directive is custom, the scope of the directive could be in Isolated scope, It means the directive does not share a scope with the controller; both directive and controller have their own scope. Angular js will create a new scope for that directive. That means any changes made to the directive scope will not reflect back in parent controller.     
    
`<` is for one-way binding and available since v1.5.   
`@` pass string value, one way binding. These strings support {{}} expressions for interpolated values.   
`=` pass object, 2 ways binding. The model in parent scope is linked to the model in the directive's isolated scope.  
`&` pass a method into your directive's scope so that it can be called within your directive. Also can pass data from directive to controller.  
  
    
**index.html code** 
```html
<body ng-controller="mainController">
	<!-- Static content-->
	{{2+2}}

	<!-- Custom Directive content-->
	<custom-directive></custom-directive>

	<!-- Linked Directive content -->
	<linked-directive title="Linked Title"></linked-directive>
</body>
```

**app.js code**  
```html
//define an Angular app...
angular.module("app",['main']);

//Create and assing module to use more specific way...
var ndApp = angular.module("main",[]);

//define a directive...
ndApp.directive('customDirective', function() {
    return {
        restrict: 'E',
		template: '<h1>From custom directive!</h1>'
    };
});
```  
Checkout this example for more detail and take ride of this [documentation](https://docs.angularjs.org/guide/directive)...
