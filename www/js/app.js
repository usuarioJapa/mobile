// Ionic Starter App
angular
	//modulo
	.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])
	//run
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	})
	//config
	.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	
		// Turn off caching for demo simplicity's sake
		$ionicConfigProvider.views.maxCache(0);
	
		/*
		// Turn off back button text
		$ionicConfigProvider.backButton.previousTitleText(false);
		*/
	
		$stateProvider.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html',
			controller: 'AppCtrl'
		})
	
		.state('app.login', {
			url: '/login',
			views: {
				'menuContent': {
					templateUrl: 'templates/login.html',
					controller: 'LoginCtrl'
				},
				'fabContent': {
					template: ''
				}
			}
		})
		
		.state('app.cadastro', {
			url: '/cadastro',
			views: {
				'menuContent': {
					templateUrl: 'templates/cadastro.html',
					controller: 'CadastroCtrl'
				},
				'fabContent': {
					template: ''
				}
			}
		})
		
		.state('app.intro', {
			url: '/intro',
			views: {
				'menuContent': {
					templateUrl: 'templates/intro.html',
					controller: 'IntroCtrl'
				}
				/** /
				,
				'fabContent': {
					template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
					controller: function ($timeout) {
						$timeout(function () {
							document.getElementById('fab-profile').classList.toggle('on');
						}, 800);
					}
				}
				/**/
			}
		})
	
		.state('app.home', {
			url: '/home',
			views: {
				'menuContent': {
					templateUrl: 'templates/home.html',
					controller: 'HomeCtrl'
				},
				'fabContent': {
					template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
					controller: function ($timeout) {
						/*$timeout(function () {
							document.getElementById('fab-profile').classList.toggle('on');
						}, 800);*/
					}
				}
			}
		})
	
		.state('app.senha', {
			url: '/senha',
			views: {
				'menuContent': {
					templateUrl: 'templates/senha.html',
					controller: 'SenhaCtrl'
				},
				'fabContent': {
					//template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
					controller: function ($timeout) {
						/*$timeout(function () {
							document.getElementById('fab-profile').classList.toggle('on');
						}, 800);*/
					}
				}
			}
		});
	
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/login');
	});
