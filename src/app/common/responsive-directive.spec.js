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

    function setupFor(display) {
        return function () {
            module(function ($provide) {
                $provide.value('$window', display);
            });
            module('app.common');
            inject(function ($rootScope) {
                scope = $rootScope;
            });
        };
    }

    describe('on a mobile device', function () {

        beforeEach(setupFor(iphone));

        it('should show only mobile elements', function () {
            compileDirective();
            expect(elm.children('div').length).to.equal(1);
            expect(elm.children('div').text()).to.equal('mobile');
        });

    });

    describe('on a tablet device', function () {

        beforeEach(setupFor(ipad));

        it('should show only tablet elements', function () {
            compileDirective();
            expect(elm.children('div').length).to.equal(1);
            expect(elm.children('div').text()).to.equal('tablet');
        });

    });

    describe('on a desktop', function () {

        beforeEach(setupFor(desktop));

        it('should show only desktop elements', function () {
            compileDirective();
            expect(elm.children('div').length).to.equal(1);
            expect(elm.children('div').text()).to.equal('desktop');
        });

    });
});