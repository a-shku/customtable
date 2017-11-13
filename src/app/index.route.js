export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve: {
        columns: (customTableConstants) => {
          'ngInject';
          return customTableConstants.columns
        },
        data: (customTableConstants) => {
          'ngInject';
          return customTableConstants.data
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
