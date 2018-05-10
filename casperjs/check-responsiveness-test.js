const url = 'http://localhost/Laura/EPS/Fallbeispiel_1/';
const screenshot_url = 'casperjs/screenshots/';

casper.test.begin('Page Title is correct', 1, function(test) {
	casper.options.viewportSize = { width: 1200, height: 800 };
    casper.start(url + 'index.html', function() {
		this.capture(screenshot_url + 'index.png');
    	test.assertTitle('Kosmetikstudio Soul & Perle', 'Website has correct title');
    });
	
    casper.run(function(){
        test.done();
    });
});

/*
casper.test.begin('Page Preise is available from browser', 1, function(test) {
	casper.options.viewportSize = { width: 1200, height: 800 };
    casper.start(url + 'index.html', function() {
		this.capture(screenshot_url + 'browser_index.png');
    	//this.click('#toggler');
    	this.click('#preise');
    });
    	
    casper.then(function(){
    	test.assertUrlMatch(url + 'preise.html', 'New location is ' + this.getCurrentUrl());
    	this.capture(screenshot_url + 'browser_preise.png');
	});

	
    casper.run(function(){
        test.done();
    });
});*/

casper.test.begin('Page Preise is available from mobile device', 1, function(test) {
    casper.options.viewportSize = { width: 400, height: 800 };
    casper.start(url + 'index.html', function() {
		this.capture(screenshot_url + 'mobile_index.png');
    	this.click('#toggler');
    	this.click('#preise');
    });
    	
    casper.then(function(){
    	test.assertUrlMatch(url + 'preise.html', 'New location is ' + this.getCurrentUrl());
    	this.capture(screenshot_url + 'mobile_preise.png');
	});

	
    casper.run(function(){
        test.done();
    });
});

casper.test.begin('Mobile Nav is visible when width < 500', 1, function(test) {
	casper.options.viewportSize = { width: 400, height: 1200 };
    casper.start(url + 'index.html', function() {
		
		test.assertVisible('#toggler');
    	this.capture(screenshot_url + 'mobile_nav.png');
    });
	
    casper.run(function(){
        test.done();
    });
});


