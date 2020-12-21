//Catatan: register-steps1 untuk feature register case 1: validasi form register berhasil karena memenuhi syarat (tidak ada form kosong, username tidak duplikat)

module.exports = function () {
    this.Given(/^Browse landing page$/, function () {
      helpers.loadPage('http://localhost/ELANG/elang/')
    });

    this.Given(/^User click Daftar$/, function () {
      driver.then(function(){
          return page.clickDaftar.performClick();
      })
    });

    this.Given(/^Website show modal$/, function () {
      driver.then(function(){
        // untuk menghandle modal yang tampil
        return driver.manage().setTimeouts( { implicit: 5000} )
      })
    });

    this.Given(/^User fill Nama lengkap$/, function () {
        driver.then(function(){
            return page.fieldNamaLengkap.performFill();
        })
    });
  
    this.Given(/^User fill Username$/, function () {
        driver.then(function(){
            return page.fieldUsername.performFill();
        })
    });

    this.Given(/^User fill Email$/, function () {
        driver.then(function(){
            return page.fieldEmail.performFill();
        })
    });

    this.Given(/^User fill Nohp$/, function () {
        driver.then(function(){
          return page.fieldNohp.performFill();
        })
    });

    this.Given(/^User fill Tanggal lahir$/, function () {
        driver.then(function(){
          return page.fieldTanggalLahir.performFill();
        })
    });

    this.Given(/^User fill Alamat$/, function () {
        driver.then(function(){
          return page.fieldAlamat.performFill();
        })
    });

    this.Given(/^User fill Password$/, function () {
        driver.then(function(){
          return page.fieldPassword.performFill();
        })
    });

    this.Given(/^User fill Konfirm password$/, function () {
        driver.then(function(){
          return page.fieldKonfirmPassword.performFill();
        })
    });

    this.When(/^User click button Submit Daftar$/, function () {
        driver.then(function(){
            return page.clickButtonSubmit.performClick();
        })
    });

    this.Then(/^User berada di Homepage$/, function () {
        driver.then(function(){
            return driver.wait(until.elementsLocated(by.xpath("/html/body/div/div[2]/div[1]/div[1]/h2")), 10000);
        })
    });
}
