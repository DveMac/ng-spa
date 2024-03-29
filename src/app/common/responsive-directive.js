// https://github.com/lavinjj/angular-responsive

(function (angular) {
    'use strict';

    /**
     * Partial application for DRY construction of a directive compile function
     */
    function buildCompileFn(responsiveType, verifyFn) {
        return function compile(element, attr, transclude) {
            return function postLink(scope, element, attr) {
                var childElement, childScope,
                    config = scope.$eval(attr[responsiveType]),
                    unwatch = scope.$watch(config, function () {
                        // attribute changed, delete existing element & $scope

                        if (childElement) {
                            childElement.remove();
                            childScope.$destroy();
                            childElement = undefined;
                            childScope = undefined;
                        }

                        if (verifyFn(config)) {
                            // Create a new element and $scope...

                            childScope = scope.$new();
                            childElement = transclude(childScope, function (clone) {
                                element.after(clone);
                            });
                        }
                    });

                // Fix memory leak an remove watcher when element/directive is released

                scope.$on("$destroy", unwatch);
            };
        };
    }

    /**
     * Partial application for DRY construction of function to scan of any valid responsive types
     */
    function checkAllTypes(responsiveHelper) {
        return function (deviceTypes) {
            return  ( deviceTypes['Mobile'] && responsiveHelper.isMobile()  ) ||
                ( deviceTypes['Tablet'] && responsiveHelper.isTablet()  ) ||
                ( deviceTypes['Desktop'] && responsiveHelper.isDesktop() ) || false;
        };
    }

    /**
     * Scan to determine if current window is hosted within a `smart` device
     * @param $window
     * @returns {boolean}
     */
    function isSmartDevice($window) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];

        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }

    angular
        .module('app.common')
        .provider('responsiveHelper', ["$windowProvider", function ($windowProvider) {
            // Gather winWidth and smartDevice information only 1x at app startup...

            var $window = $windowProvider.$get();
            var winWidth = $window['outerWidth'];
            var helper = {

                isSmartDevice: isSmartDevice($window),
                isMobile: function () {
                    return helper.isSmartDevice && (winWidth <= 767);
                },
                isTablet: function () {
                    return helper.isSmartDevice && (winWidth > 767);
                },
                isDesktop: function () {
                    return !helper.isSmartDevice;
                }

            };

            // Publish accessor function...

            this.$get = function () {
                return helper;
            };
        }])

    /**
     * Is this a limited-display-size mobile device
     */
        .directive('arMobile', ['responsiveHelper', function (responsiveHelper) {
            return {
                restrict: "EAC",
                transclude: 'element',
                template: '<div></div>',
                compile: buildCompileFn('arMobile', responsiveHelper.isMobile)
            };
        }])

    /**
     * Is this a table device
     */
        .directive('arTablet', ['responsiveHelper', function (responsiveHelper) {
            return {
                restrict: "EAC",
                transclude: 'element',
                template: '<div></div>',
                compile: buildCompileFn('arTablet', responsiveHelper.isTablet)
            };
        }])

    /**
     * Is this a desktop device
     */
        .directive('arDesktop', ['responsiveHelper', function (responsiveHelper) {
            return {
                restrict: "EAC",
                transclude: 'element',
                template: '<div></div>',
                compile: buildCompileFn('arDesktop', responsiveHelper.isDesktop)
            };
        }])

    /**
     * Does the device a match user-specified combination (0..3) of device types
     */
        .directive('arResponsive', ['responsiveHelper', function (responsiveHelper) {
            return {
                restrict: "EAC",
                transclude: 'element',
                template: '<div></div>',
                compile: buildCompileFn('arResponsive', checkAllTypes(responsiveHelper))
            };
        }]);


}(window.angular));
