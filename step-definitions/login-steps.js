//Catatan: register-steps1 untuk feature register case 1: validasi form register berhasil karena memenuhi syarat (tidak ada form kosong, username tidak duplikat)

module.exports = function () {
    this.Given(/^Browse landing page case login$/, function () {
      helpers.loadPage('http://localhost/ELANG/elang/')
    });

    this.Given(/^User click Masuk case login$/, function () {
      driver.then(function(){
          return page.clickMasuk.performClick();
      })
    });

    this.Given(/^Website show modal case login$/, function () {
      driver.then(function(){
        // untuk menghandle modal yang tampil
        return driver.manage().setTimeouts( { implicit: 5000} )
      })
    });
  
    this.Given(/^User fill Username case login$/, function () {
        driver.then(function(){
            return page.fieldUsernameLogin.performFill();
        })
    });

    this.Given(/^User fill Password case login$/, function () {
        driver.then(function(){
          return page.fieldPasswordLogin.performFill();
      })
    });

    this.When(/^User click button Masuk case login$/, function () {
        driver.then(function(){
            return page.clickButtonMasuk.performClick();
        })
    });

    this.Then(/^User berada di Beranda$/, function () {
        driver.then(function(){
            return driver.wait(until.elementsLocated(by.xpath("/html/body/div/div[2]/div[1]/div[1]/h2")), 10000);
        })
    });
}
