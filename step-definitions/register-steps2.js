//Catatan: register-steps2 untuk feature register case 2: validasi form register tidak boleh kosong
// Untuk semua validasi form kosong pada setiap field, harap mengubah dahulu nilai arraynya di bagian page-object sesuai dengan test data yang akan diuji pada shared-objects

module.exports = function () {
    this.Given(/^Browse landing page Case 2$/, function () {
      helpers.loadPage('http://localhost/ELANG/elang/')
    });

    this.Given(/^User click Daftar Case 2$/, function () {
      driver.then(function(){
          return page.clickDaftar.performClick();
      })
    });

    this.Given(/^Website show modal Case 2$/, function () {
      driver.then(function(){
        return driver.manage().setTimeouts( { implicit: 5000} )
      })
    });

    this.Given(/^User fill Nama lengkap Case 2$/, function () {
      driver.then(function(){
          return page.fieldNamaLengkap.performFill();
      })
    });
  
    this.Given(/^User fill Username Case 2$/, function () {
        driver.then(function(){
            return page.fieldUsername.performFill();
        })
    });

    this.Given(/^User fill Email Case 2$/, function () {
        driver.then(function(){
            return page.fieldEmail.performFill();
        })
    });

    this.Given(/^User fill Nohp Case 2$/, function () {
        driver.then(function(){
          return page.fieldNohp.performFill();
        })
    });

    this.Given(/^User fill Tanggal lahir Case 2$/, function () {
        driver.then(function(){
          return page.fieldTanggalLahir.performFill();
        })
    });

    this.Given(/^User fill Alamat Case 2$/, function () {
        driver.then(function(){
          return page.fieldAlamat.performFill();
        })
    });

    this.Given(/^User fill Password Case 2$/, function () {
      driver.then(function(){
        return page.fieldPassword.performFill();
      })
    });

    this.Given(/^User fill Konfirm password Case 2$/, function () {
        driver.then(function(){
          return page.fieldKonfirmPassword.performFill();
        })
    });

    this.When(/^User click button Submit Daftar Case 2$/, function () {
        driver.then(function(){
            return page.clickButtonSubmit.performClick();
        })
    });

    this.Then(/^Website masih show modal Case 2$/, function () {
        driver.then(function(){
          return driver.wait(until.elementsLocated(by.xpath("//*[@id='regisModal']")), 10000);
        })
    });
}
