const selenium = require('selenium-webdriver');

describe('Check Responsiveness', function() {
    const that = this;    
    const chromeCapabilities = selenium.Capabilities.chrome();
    const chromeOptions = {
        'args': ['--window-size=400,800']
    };  
    chromeCapabilities.set('chromeOptions', chromeOptions);

    beforeEach(function(done) {
        that.driver = new selenium.Builder().
            withCapabilities(chromeCapabilities).
            build();
        
        that.driver.get('http://localhost/Laura/EPS/Fallbeispiel_1/').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        that.driver.quit().then(done);
    });

    it('can be navigated to "Preise" from Browser', function(done) {
        that.driver.manage().window().maximize();   
        that.driver.findElement(selenium.By.id('preise'))
            .then(function(element) {
                return element.click();
            })
            .then(function() {
                return that.driver.getCurrentUrl();
            })
            .then(function(url) {
                expect(url).toContain('/preise');
            })
            .catch(function(err){
                console.log(err);
                fail(err);
            })
            .then(done);
    });

    it('has mobile navigation when window size is < 500', function(done) { 
        that.driver.findElement(selenium.By.id('toggler'))
            .then(function(element) {
                return element.getCssValue('display');
            })
            .then(function(cssValue) {
                expect(cssValue).toBe('block');
            })
            .catch(function(err){
                console.log(err);
                fail(err);
            })
            .then(done);
    });
});