/*global describe,beforeEach,it,expect*/

describe('responsive directive', function () {

    var elm, scope,
        iphone = {
            outerWidth: 320,
            navigator: {
                userAgent: 'iPhone'
            }
        },
        ipad = {
            outerWidth: 768,
            navigator: {
                userAgent: 'iPad'
            }
        },
        desktop = {
            outerWidth: 1280,
            navigator: {
                userAgent: 'ie'
            }
        };

    function compileDirective(tpl) {
        // inject allows you to use AngularJS dependency injection
        // to retrieve and use other services
        tpl = tpl || '<div><div ar-desktop>desktop</div><div ar-tablet>tablet</div><div ar-mobile>mobile</div></div>';
        inject(function ($compile) {
            elm = $compile(tpl)(scope);
        });
        // $digest is necessary to finalize the directive generation
        scope.$digest();
    }

    describe('on a mobile device', function () {

        beforeEach(function () {
            module(function ($provide) {
                $provide.value('$window', iphone);
            });
            module('angular-responsive');
            inject(function ($rootScope) {
                scope = $rootScope;
            });
        });

        it('should show only mobile elements', function () {
            compileDirective();
            expect(elm.children('div').length).to.equal(1);
            expect(elm.children('div').text()).to.equal('mobile');
        });

    });

    describe('on a tablet device', function () {

        beforeEach(function () {
            module(function ($provide) {
                $provide.value('$window', ipad);
            });
            module('angular-responsive');
            inject(function ($rootScope) {
                scope = $rootScope;
            });
        });

        it('should show only tablet elements', function () {
            compileDirective();
            expect(elm.children('div').length).to.equal(1);
            expect(elm.children('div').text()).to.equal('tablet');
        });

    });

    describe('on a desktop', function () {

        beforeEach(function () {
            module(function ($provide) {
                $provide.value('$window', desktop);
            });
            module('angular-responsive');
            inject(function ($rootScope) {
                scope = $rootScope;
            });
        });

        it('should show only desktop elements', function () {
            compileDirective();
            expect(elm.children('div').length).to.equal(1);
            expect(elm.children('div').text()).to.equal('desktop');
        });

    });
});