'use strict'

/**
 * # the main application for Clean Path Carpet Consumer portal

Config Summary:
State provider: does routing and template views. ui.router module req.

Controller summary:
bubble: class names for ngBubble Directive to use.
emailForm: for emailing customer queries and posting them to server.

Factories:
custData: contains the main pricing table, storage of quote form, alert responses, and is general storage.

Custom Directives:
ngBubble: randomize bubble classes.

Directory:

[1] angular.module
[2] config
[3] controllers
[4] factories
[5] custom directives

 *
 * [1] Main module of the application 
 */
var gapp = angular.module('clientApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ui.router',
		'ui.bootstrap'
		]);

// [2] Routing and Views: here's where the views, templates, and shorter Html snippets or thier linked local URLs
gapp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('index', {
				url : '/',
				views : {

					'viewAll' : {
						templateUrl : '../views/main.html'
					},
					'view1' : {
						template : '<img style="height:100%"; src="images/cplogo1.png">'
					},
					'view2' : {
						template : '<p>Clean Path Carpet Solution is a Joliet, IL based company that has been providing outstanding service to our customers in Joliet and Chicago land area since 2013. We have 2 trucks that are available 24 hours a day and we will respond to any emergency call immediately. Clean Path Carpet Cleaning is here to serve you and we’ll be by your side until the situation is resolved. All jobs are owner supervised and we are fully insured. <br> <br>We want to maintain a healthy living standard for our customers by providing them with the healthiest cleaning methods available on the market. Ethical business practices and a small well-trained team of technicians have helped us gain the trust of our customers. As a small company we guarantee that you’ll see the same faces in your home at each appointment, this is almost unheard of with our larger competitors.</br>'
					}
				}
			})
			.state('about', {
				url : '/about',
				views : {
					'viewAll' : {
						templateUrl : '../views/about.html'
					},
					'view1' : {
						template : '<b>About Us</b>'
					},
					'view2' : {
						template : '<p>Clean Path Carpet Solution is a Joliet, IL based company that has been providing outstanding service to our customers in Joliet and Chicago land area since 2013. We have 2 trucks that are available 24 hours a day and we will respond to any emergency call immediately. Clean Path Carpet Cleaning is here to serve you and we’ll be by your side until the situation is resolved. All jobs are owner supervised and we are fully insured. <br> <br>We want to maintain a healthy living standard for our customers by providing them with the healthiest cleaning methods available on the market. Ethical business practices and a small well-trained team of technicians have helped us gain the trust of our customers. As a small company we guarantee that you’ll see the same faces in your home at each appointment, this is almost unheard of with our larger competitors.<br><br>We utilize a truck mounted steam extractor system that heats up to 190 degrees. The carpet is cleaned with pet-safe detergents and then rinsed using fresh water steam with an acidic PH level. This repels dirt’s ability to stick to the carpet. Truck mounted cleaners are the most effective carpet cleaning tool on the market. Our system is powered by a truck that remains OUTSIDE of your home while the dirt is collected. We do not require the use of your water or electricity to operate any of our systems.</p>'
					}
				}
			})
			.state('faq', {
				url : '/faq',
				views : {
					'viewAll' : {
						templateUrl : '../views/faq.html'
					},

				}
			})
			.state('contact', {
				url : '/contact',
				views : {
					'viewAll' : {
						templateUrl : '../views/furniture.html'
					},
					'view1' : {
						template : 'test'
					},
					'view2' : {
						templateUrl : '../views/contact.html'
					}
				}
			})
			.state('carpet', {
				url : '/carpet',
				views : {
					'viewAll' : {
						templateUrl : '../views/carpet.html'
					},
					'view1' : {
						template : '<b>Carpet Cleaning</b>'
					},
					'view2' : {
						templateUrl : '../views/carpet2.html'
					}
				}
			})
			.state('tile', {
				url : '/tile',
				views : {
					'viewAll' : {
						templateUrl : '../views/tile.html'
					},
					'view1' : {
						template : '<b>Tile and Grout</b>'
					},
					'view2' : {
						templateUrl : '../views/tile2.html'
					}
				}
			})
			.state('furniture', {
				url : '/furniture',
				views : {
					'viewAll' : {
						templateUrl : '../views/furniture.html'
					},
					'view1' : {
						template : '<b>Upholstry</b>'
					},
					'view2' : {
						templateUrl : '../views/furniture2.html'
					}
				}

			});
		}
	]);

	// [3] Factories
	
	// custData Factory stores the table data and contact form info. Pricing info in tableData should be set as needed.
gapp.factory('custData', [function () {

			//the object returned by the factory

			var dataDrop = {};

			//contact form data
			var contact = {

				'fullName' : '',
				'street' : '',
				'state' : '',
				'zipCode' : '',
				'phone' : '',
				'email' : '',
				'message' : '',
				'services' : '',
				'totalQuote' : 0,
				'expectDate' : '',
			};

			// table quote data. Here is storage of customer quote info in real time. Controllers below will do math to calculate final value.
			var tableData = [{
					'name' : 'roomsclean1',
					'price' : 27,
					'title' : 'Room(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'roomsprotect1 ',
					'price' : 62,
					'title' : 'Room(s) to protect',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'staircasesclean1',
					'price' : 35,
					'title' : 'Staircase(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'staircasesprotect1',
					'price' : 27,
					'title' : 'Staircase(s) to protect',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'bathsclean1',
					'price' : 20,
					'title' : 'Bath(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'bathsprotect1 ',
					'price' : 11,
					'title' : 'Bath(s) to protect',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' hallwaysclean1',
					'price' : 20,
					'title' : 'Hallway(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' hallwaysprotect1',
					'price' : 11,
					'title' : 'Hallway(s) to protect',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' roomsclean2',
					'price' : 103,
					'title' : 'Room(s) to tile clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' roomsclear1',
					'price' : 51,
					'title' : 'Room(s) to clear seal',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' roomscolorseal1',
					'price' : 160,
					'title' : 'Room(s) to color seal',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'staircasesclean2 ',
					'price' : 100,
					'title' : 'Staircase(s) to tile clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' staircasesclear1',
					'price' : 51,
					'title' : 'Staircase(s) to  ',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' staircasescolorseal1',
					'price' : 160,
					'title' : 'Staircase(s) to  ',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' bathsclean2',
					'price' : 45,
					'title' : 'Bath(s) to tile clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' bathsclear1',
					'price' : 25,
					'title' : 'Bath(s) to clear seal',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'bathscolorseal1 ',
					'price' : 70,
					'title' : 'Bath(s) to color seal',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' hallwaysclean2',
					'price' : 45,
					'title' : 'Hallway(s) to tile clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' hallwaysclear1',
					'price' : 25,
					'title' : 'Hallway(s) to clear seal',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' hallwayscolorseal1',
					'price' : 70,
					'title' : 'Hallway(s) to color seal',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : ' sofasclean1',
					'price' : 83,
					'title' : 'sofa(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'sofasprotect1 ',
					'price' : 43,
					'title' : 'sofa(s) to protect',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'sectionalsclean1 ',
					'price' : 165,
					'title' : 'sectional(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'sectionalsprotect1 ',
					'price' : 84,
					'title' : 'sectional(s) to protect',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'loveseatsclean1 ',
					'price' : 66,
					'title' : 'love seat(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'loveseatsprotect1 ',
					'price' : 33,
					'title' : 'love seat(s) to protect ',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : '  chairsclean1',
					'price' : 44,
					'title' : 'chair(s) to clean',
					'area' : 0,
					'total' : 0,
				}, {
					'name' : 'chairsprotect1 ',
					'price' : 22,
					'title' : 'chair(s) to protect',
					'area' : 0,
					'total' : 0,
				}
			];

			// alerts for forms and quote forms

			var alerts = [{
					type : 'danger',
					msg : 'Minimum order of $100 required for all home visits!'
				}, {
					type : 'success',
					msg : ' Email sent! Someone will contact you shortly.'
				}, {
					type : 'danger',
					msg : 'Email Failed! Please re-fill the form of contact cp@cpcarpet.com'
				}, {
					type : 'danger',
					msg : 'Additional travel cost will be added to equal $100 if requested service costs are under $100.'
				}
			];

			// get specific data needed from dataDrop

			dataDrop.list = function () {
				return tableData;
			};
			dataDrop.contact = function () {
				return contact;
			};

			dataDrop.alerts = function () {
				return alerts;
			};
			
			dataDrop.sortByRooms2 = function (scope) {
				var amount = 0;
				for (var i = 0; i < tableData.length; i++) {
					amount += tableData[i].area * tableData[i].price;
				}
				if (amount < 100 && amount > 0) {
					scope.alertBadPrice = true;
					//scope.contact.totalQuote = amount;
					return amount;
				} else {
					$scope.contact.totalQuote = amount;
					$scope.alertBadPrice = false;
					return amount;
				}
			};
			

			//pull from dataDrop to get factory data
			return dataDrop;

		}
	]);

	// [4] controllers
	
// stores class names for random bubble maker
gapp.controller('bubble', ['$scope', function ($scope) {
			// der bubble maker
			$scope.bubbleMaker = [
				'bubbles',
				'bubbles2',
				'bubbles3',
				'bubbles4',
				'bubbles5'];
		}
	]);

// email form ajax request
gapp.controller('emailForm', ['$scope', 'custData', '$http', function ($scope, custData, $http) {

			// Contact user form data

			$scope.user = {};
			$scope.alertPop = custData.alerts();
			//alert Pop up control depending on if email was sent
			$scope.alertEmailOk = false;
			$scope.alertEmailFail = false;
			//process form for emailing, database storage
			$scope.processForm = function () {

				$http({
					method : 'POST',
					url : '/contactform',
					data : $scope.user,
					headers : {
						'Content-type' : 'application/json'
					}
				}).success(function () {
					console.log('success!');
					$scope.alertEmailOk = true;
				}).error(function (err, data) {
					$scope.alertEmailOk = false;
					console.log('oh noes! ' + err );
				});
			};

		}
	]);

	
	// this is controller for quote form submission.
gapp.controller('quoteForm', ['$scope', 'custData', function ($scope, custData) {
			
			// customer pricing table data via two-way binding and alerts.
			$scope.customers = custData.list();
			$scope.alertPop = custData.alerts();
			$scope.contact = custData.contact();
			
			// Reset price quote table 
			$scope.resetAll = function () {
				for (var i = 0; i < $scope.customers.length; i++) {
					$scope.customers[i].area = 0;
				}
			};
			// get's total amount and alerts if customer selection is too low
			$scope.sortByRooms = function () {
				var amount = 0;
				for (var i = 0; i < $scope.customers.length; i++) {
					amount += $scope.customers[i].area * $scope.customers[i].price;
				}
				if (amount < 100 && amount > 0) {
					$scope.alertBadPrice = true;
					$scope.contact.totalQuote = amount;
					return amount;
				} else {
					$scope.contact.totalQuote = amount;
					$scope.alertBadPrice = false;
					return amount;
				}
			};
			
		}
	]);

gapp.controller('submitForm', ['$scope', '$q', 'custData', '$http', function ($scope, $q, custData, $http) {
			
			
			// customer pricing table data via two-way binding and alerts.
			
			$scope.customers = custData.list();
			$scope.contact = custData.contact();
			$scope.alertPop = custData.alerts();
			
			//var test = custData.list();
			//var test2 = custData.contact();
			
			// uses promise to ensure the table data is finished calculating before proceeding
			var deferred = $q.defer();
			// What we Will mail to server 
			var mailJson = []; 
			
			//The Promise chain - Ride the snake!
			$scope.makeMail = function () {
				//caculate values
				calculateAll()
				//prepare form
				.then(makeForm)
				//remove this in final 
				.then(function (result) {

					console.log(JSON.stringify(result));
				});
			};
			
		// Caculates All values....pushing them along with customer contact details to mailJson for submission.
			var calculateAll = function () {

				mailJson = [];
				var mailObj = {
					user : '',
				};
				//var amount = 0;
				$scope.contact.totalQuote = 0;

				for (var i = 0; i < $scope.customers.length; i++) {
					if ($scope.customers[i].area !== 0) {

						$scope.customers[i].total = parseInt($scope.customers[i].area, 10) * parseInt($scope.customers[i].price, 10);
						$scope.contact.totalQuote += $scope.customers[i].total;
						mailJson.push($scope.customers[i]);
					}
				}
				mailJson.unshift($scope.contact);
				mailObj.user = mailJson;
				if (mailJson[1].total !== 0) {
					deferred.resolve(mailJson);
					console.log('values loaded successfully');
				} else {
					console.log('no values!');
					deferred.reject(mailJson);
				}
				return deferred.promise;
			};

			var makeForm = function () {
				if (mailJson[1].total !== 0) {
					deferred.resolve(mailJson);
					console.log('values loaded successfully again');

					
					$http({
						method : 'POST',
						url : '/send',
						data : mailJson,
						headers : {
							'Content-type' : 'application/json'
						}
					}).success(function (data) {
						console.log('success! ' + data);
						$scope.alertEmailOk = true;
					}).error(function (err) {
						console.log('there was an error indeed ' + err);
						$scope.alertEmailOk = false;
					});
				} else {
					console.log('no values!');
					deferred.reject(mailJson);
				}
				return deferred.promise;
			};
			
			// Different than sortByRooms in another controller: get's existing value of total from form and fires alert, less calculating. 
		
	
			//custom filter - returns all objects that have prices existing
			$scope.myFilter = function (element) {
				return element.area !== 0;
			};
		//USA states for form
			$scope.usa = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];

		}
	]);

	// custom directives
	
gapp.directive('ngRandomBubble', function () {
	return {
		restrict : 'EA',
		replace : false,
		scope : {
			ngClasses : '='

		}, // Random bubble time!

		link : function (scope, elem) {
			elem.addClass(scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
		}
	};

});