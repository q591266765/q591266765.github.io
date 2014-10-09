define(['GS'], function (GS) {

	var hash = {
        index         : 'index',
        depository    : 'depository',
        depositoryAdd : 'depositoryAdd',
		fund          : 'fund',
		state         : 'state'
	};

	/**
	 * Init router, that handle page events
	 */
	function init() {
		$$(document).on('pageBeforeInit', function (e) {
			var page = e.detail.page;
			load(page.name, page.query);
		});

		// $$('.logout').on('click', GS.logout);
		// $$('.version').on('click', GS.checkUpdate);
        $$('#moneyView').on('show', function () {
            GS.loadInitPage('page/money/index.html', moneyView);
        });

        $$('#certView').on('show', function () {
            GS.loadInitPage('page/cert/index.html', certView);
        });

        $$('.login-screen').on('close', function () {
            wtApp.showTab('#mainView');
        });

		// if (!GS.isLogin()) {
		// 	// mainView.loadPage('login.html');
		// 	mainView.loadPage(GS.startPage, false);
		// } else {
		// 	var currentUser = GS.getCurrentUser();
		// 	mainView.loadPage(currentUser.node + '.html');
		// }
	}

	/**
	 * Load (or reload) controller from js code (another controller) - call it's init function
	 * @param  controllerName
	 * @param  query
	 */
	function load(controllerName, query) {
		if (controllerName in hash) {
			require(['controllers/' + hash[controllerName] + 'Controller'], function (controller) {
				controller.init(query);
			});
		}
	}

	return {
		init: init,
		load: load
	};
});
