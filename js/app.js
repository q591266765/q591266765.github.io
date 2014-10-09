require.config({
    baseUrl: 'js',
    paths: {
        Framework7: 'libs/framework7',
        text: 'libs/text',
        GS: 'services/globalService'
    },
    shim: {
        Framework7: {
            exports: 'Framework7'
        }
    }
});

require(['Framework7', 'router'], function (Framework7, Router) {
    window.$$ = window.Dom7;

    var device = Framework7.prototype.device;

    if (device.android) {
        window.wtApp = new Framework7({
            animatePages: false,
            swipeout: false,
            sortable: false,
            cache: false,
            pushState: false,
            swipeBackPage: false,
            popupCloseByOutside: false,
            animateNavBackIcon: true,
            modalTitle: '系统消息',
            modalButtonOk: '确定',
            modalButtonCancel: '取消',
            smartSelectBackText: '完成',
            smartSelectBackTemplate: '<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>'
        });
    } else {
        window.wtApp = new Framework7({
            cache: false,
            pushState: false,
            swipeBackPage: false,
            popupCloseByOutside: false,
            animateNavBackIcon: true,
            modalTitle: '系统消息',
            modalButtonOk: '确定',
            modalButtonCancel: '取消',
            smartSelectBackText: '完成',
            smartSelectBackTemplate: '<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>',
            onAjaxStart: function (xhr) {
                wtApp.showIndicator();
            },
            onAjaxComplete: function (xhr) {
                wtApp.hideIndicator();
            }
        });
    }

    // 我的业务
    window.mainView = wtApp.addView('#mainView', {
        dynamicNavbar: true
    });

    // 我的资金
    window.moneyView = wtApp.addView('#moneyView', {
        dynamicNavbar: true
    });

    // 证书管理
    window.certView = wtApp.addView('#certView', {
        dynamicNavbar: true
    });

    // 更多
    window.moreView = wtApp.addView('#moreView', {
        dynamicNavbar: true
    });

    var mySlider = wtApp.slider('.slider-container', {
        pagination:'.slider-pagination'
    });

    Router.init();
});
