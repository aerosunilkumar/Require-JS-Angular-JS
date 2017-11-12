require.config({
    paths: {
        'angular': '../angular/angular',
        'angularRoute': '../angular-route/angular-route',
        'text': '../requirejs-text/text'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularRoute': ['angular'],
        'angularAppBootstrap': [
            'app',
            'Home/homeController',
            'About/aboutController'
        ],
    },
    deps: ['angularAppBootstrap']
});