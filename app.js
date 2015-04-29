(function() { // We use this anonymous function to create a closure.

	var app = angular.module('feedme-web', ['ngResource']);

	//Provides meal functions
	app.factory("Meal", ['$http', function($http) {
		return {
			create_meal: 
				//returns a promise of a request return to create a meal
				function (date_and_time_of_mealIn, deadlineIn, component_listIn) {
					
					alert("start req");

					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'POST', 
						url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/meals.json',
						headers: {
							'Content-Type': 'application/json'
						},
						data: { 
							meal:{date_and_time_of_meal: date_and_time_of_mealIn, deadline: deadlineIn}, component_list: component_listIn
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				},

			view_meals:
				//returns a promise of a request return that contains all meals
				function () {
					
					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'GET',
						url:'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/meals.json',
						headers: {
							'Content-Type': 'application/json'
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				},

			get_deadline_past:
				//returns a promise of a request return that contains all meals for which the deadline has passed
				function () {
					
					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'GET', 
						url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/meal/deadline_past.json',
						headers: {
							'Content-Type': 'application/json'
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				},


			}
		}
	]);

	
	app.factory("Person", ['$http', function($http) {
		return {
			view_all_customers:
				function () {

					var req = {
						method: 'GET',
						url:'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/students.json',
						headers: {
							'Content-Type': 'application/json'
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				},
					/*
			create_customer:
					var req = {
						method: 'POST',
						url:'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/student.json'},
						headers: {
							'Content-Type': 'application/json'
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				},
				*/
			}
		}
	]);





	//Provides report functions
	app.factory("Report", ['$http', function($http) {
		return {
			get_report: 
				//returns a promise of a request return
				function (mealId) {
					
					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'GET', 
						url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/get_report.json',
						headers: {
							'Content-Type': 'application/json'
						},
						params: { 
							id: mealId
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				}
			}
		}
	]);

	//Provides login functions
	app.factory("Login", ['$http', function($http) {
		return {
			staff: 
				//returns a promise of a request return
				function (userNameIn, passWordIn) {
					
					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'POST', 
						url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/staff/login.json',
						/*url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/login/staff.json',*/
						headers: {
							'Content-Type': 'application/json'
						},
						data: { 
							username: userNameIn, password: passWordIn
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				}
			}
		}
	]);









	//Provides indication functions
	app.factory("Indication", ['$http', function($http) {
		return {
			indicate: 
				//returns a promise of a request return
				function (student_id, meal_id, is_going, list) {
					
					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'POST', 
						url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/attendances.json',
						headers: {
							'Content-Type': 'application/json'
						},
						data: { 
							meal_id: meal_id, person_id: student_id, going: is_going, list: list
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				}
			}
		}
	]);


	//Provides Component retrieval functions
	app.factory("Components", ['$http', function($http) {
		return {
			get_for_meal: 
				//returns a promise of a request return
				function (meal_id) {
					
					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'GET', 
						url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/meal/components.json',
						headers: {
							'Content-Type': 'application/json'
						},
						params: {
							id: meal_id
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				},
			get_all: 
				//returns a promise of a request return
				function () {
					
					//the request with method, url, content-type, and data needed for a login
					var req =  {
						method: 'GET', 
						url: 'http://ec2-54-153-163-189.ap-southeast-2.compute.amazonaws.com:3000/components.json',
						headers: {
							'Content-Type': 'application/json'
						},
					}

					//creation of a promise
					var promise = $http(req)
						.success(function (data, status, headers, config) {
							return data;
						})
						.error(function (data, status, headers, config) {
							return data;
						});

					return promise;
				}
			}
		}
	]);









	/*
	controls the logged in state of the user
	*/
	app.controller('CTRLLoginController', function (Login, $scope) {

		this.username = "";
		this.password = "";


		//indicated logged in or not
		$scope.logged_in_indicator = false;
		$scope.logged_in_user = "";

		//login function
		this.login = function ()
		{
			Login.staff(this.username, this.password).then(
				function (promise) {
					//create a user
					retUser = {
						id: promise.data.id,
						name: promise.data.name,
						username: promise.data.username
					};

					//set the logged_in_user variable to the returned user
					$scope.logged_in_user = retUser;

					//set the logged_in_indicator to true
					$scope.logged_in_indicator = true;
				}, function (error) {
					alert("login failed	\nIncorrect username or pssword");
				}
			);

			this.password = "";
		};


		//logout function
		this.logout = function(){
			$scope.logged_in_indicator = false;
			$scope.logged_in_user = "";
			//make and add the logout requests here
		};

		//check if the user is logged in
		this.isLoggedIn = function(){
			return $scope.logged_in_indicator;
		};

		//returns the logged in user as a json object
		this.getLoggedInUser = function(){
			return $scope.logged_in_user;
		};
	});

	/*
	page controller
	*/
	app.controller('CTRLPageController', function () {
		this.tab = 5;

	    this.isSet = function(checkTab) {
	      return this.tab === checkTab;
	    };

	    this.setTab = function(setTab) {
	      this.tab = setTab;
	    };
	});

















	/*
	Person controller
	*/

	app.controller('CTRLPersonController', function (Person, $scope) {

		$scope.person_list;

		this.view_all_customers = function() {
			Person.view_all_customers().then(
				function (promise) {
					$scope.person_list = promise.data.students;
				}, function (error) {
					alert("failure on get people");
				}
			);
		};

		this.get_people = function () {
			return $scope.person_list;
		}

	});



















	/*
	report controller
	*/

	app.controller('CTRLReportController', function (Report, Meal, $scope) {
		//Array of meals that have passed the set deadline
		$scope.meals_past_deadline = [];

		//Components in the report
		$scope.components = [];

		$scope.total_students = "0";

		$scope.students_who_have_indicated = "0";

		$scope.students_going = "0";

		//Show report for individual meal
		this.show_report = false;

		//View the report for the meal in this tab
		this.sub_page_tab = "0";

		this.get_meals_the_deadline_has_passed_on = function () {
			Meal.get_deadline_past().then(
				function (promise) {
					$scope.meals_past_deadline = promise.data.meals;
				}, function (error) {
					alert("General Failure \n Check internet connection \nContact system administrator.")
				}
			);
		};

		this.reset_vars = function () {

			//reset componet list
			//avoid graphical ugliness
			//server too fast so needs a reset

			//Components in the report
			$scope.components = [];

			$scope.total_students = "0";

			$scope.students_who_have_indicated = "0";

			$scope.components = [];
			$scope.students_going = 0;
		};

		this.get_meals = function () {
			return $scope.meals_past_deadline;
		}

		this.get_components = function () {
			return $scope.components;
		};

		this.get_number_going = function () {
			return $scope.students_going;
		}

		this.get_total_students = function () {
			return $scope.total_students;
		}

		this.get_students_who_have_indicated = function () {
			return $scope.students_who_have_indicated;
		}


		this.get_report_for_meal_from_server = function() {
			
			//Retrieves meal components for the currently selected meal
			Report.get_report(this.sub_page_tab).then(
				function (promise) {

					//report var
					var report = promise.data.report;

					//get items from report
					$scope.components = report;
					$scope.total_students = report.total_students;
					$scope.students_who_have_indicated = report.indicated;
					$scope.students_going = report.going;

				}, function (error) {

					//description of error
					alert("Unable to get report from server.");
				}
			);
		};

		this.reset_controller = function () {
			this.reset_vars();
			this.get_meals();

			this.show_report = false;
		};




		this.setTab = function (meal_id) {

			this.reset_vars();


			if(this.sub_page_tab === meal_id && this.show_report)
			{
				//components already shown
				//hide them
				this.show_report = false;
			}
			else
			{
				//set the tab to the current meal
				this.sub_page_tab = meal_id;

				//get the correct components from the server
				this.get_report_for_meal_from_server();

				//alow showing of the components
				this.show_report = true;
			};
		};

		this.getTab = function (queryTab) {

			//if correct tab
			var correct_tab = (this.sub_page_tab == queryTab);

			//show_components allowable is already set

			var show_indicator = (correct_tab && this.show_report);
			return (show_indicator);
		};



	});



	/*
	controller for list of meals
	*/
	app.controller('CTRLListComponentController', function (Components, Indication, Meal, $scope) {

		//components in the selected individual future meal
		$scope.components = [];
		//show the indication form
		this.show_components = true;

		//"i want these components" variable
		this.indicated_on_components = [];


		this.deadline = "";
		this.date_and_time_of_meal = "";


		//i am (not) going to the meal
		this.going = false;

		//view the indication for for the meal with the id matching this.tab
		this.tab = "0";

		$scope.view_all_components = [];

		this.meal_list;


		/*
			setup methods
		*/


		this.view_all_meals = function() {
			this.meal_list = Meal.view_meals();
		};




		this.make_meal = function () {

			alert("meal");

			Meal.create_meal(this.date_and_time_of_meal, this.deadline, this.indicated_on_components).then(
				function (promise) {
					//feedback indication successful
					alert("Meal created!");

				}, function (error) {
					//feedback indication not successful
					alert("indication not successful");

				}
			);
		};

		this.reset_controller = function () {
			this.reset_vars();

			this.show_components = false; //always show components????
		};

		this.reset_vars = function () {

			//reset componet list
			//avoid graphical ugliness
			//server too fast so needs a reset
			$scope.components = [];
			this.indicated_on_components = [];      //becomes selected components for the meal
			this.going = false;    
		};


		this.display_components = function() {

			return $scope.view_all_components;


		};

		this.get_all_components = function() {
			

			Components.get_all().then(
				function (promise) {

					$scope.view_all_components = promise.data;

				}, function (error) {

					//description of error
					alert("Unable to get components from server.");
				}
			);
		};








		this.get_components_from_server = function() {
			

			Components.get_for_meal(this.tab).then(
				function (promise) {

					$scope.components = promise.data.components;

				}, function (error) {

					//description of error
					alert("Unable to get components from server.");
				}
			);
		};

		this.get_components = function () {
			return $scope.components;
		};

		//if the component_id is in this.indicated_on_components then remove it
		//if the component_id is not in this.indicated_on_components then add it
		this.swap_component_indication = function (component_id) {


			//for panel
			if(this.check_component_in_list(component_id)) {
				
				var i = this.indicated_on_components.indexOf(component_id);
				if(i != -1) {
					this.indicated_on_components.splice(i, 1);
				}
			}
			else {
				this.indicated_on_components.push(component_id);
			}

			

			/*
			//for the event only
			if(this.check_component_in_list(component_id)) {
				
				this.indicated_on_components = [];
			}
			else {
				this.indicated_on_components = [component_id];
			}
			*/
		};

		this.check_component_in_list = function (component_id) {
			return (~this.indicated_on_components.indexOf(component_id));
		};




		this.indicate = function (user_id) {
			Indication.indicate(user_id, this.tab, this.going, this.indicated_on_components).then(
				function (promise) {
					//feedback indication successful
					alert("indication successful");

				}, function (error) {
					//feedback indication not successful
					alert("indication not successful");

				}
			);
		};
	});







})
();
