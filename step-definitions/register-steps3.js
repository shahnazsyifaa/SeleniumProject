//Catatan: register-steps3 untuk feature register case 3: validasi username tidak boleh sama dan konfirm password harus sesuai dengan password
// Untuk validasi username / konfirm password, harap mengubah dahulu nilai arraynya di bagian page-object sesuai dengan test data yang akan diuji pada shared-objects

module.exports = function () {
    this.Given(/^Browse landing page Case 3$/, function () {
      helpers.loadPage('http://localhost/ELANG/elang/')
    });

    this.Given(/^User click Daftar Case 3$/, function () {
      driver.then(function(){
          return page.clickDaftar.performClick();
      })
    });

    this.Given(/^Website show modal Case 3$/, function () {
      driver.then(function(){
        return driver.manage().setTimeouts( { implicit: 5000} )
      })
    });

    this.Given(/^User fill Nama lengkap Case 3$/, function () {
      driver.then(function(){
          return page.fieldNamaLengkap.performFill();
      })
    });
  
    this.Given(/^User fill Username Case 3$/, function () {
        driver.then(function(){
            return page.fieldUsername.performFill();
        })
    });

    this.Given(/^User fill Email Case 3$/, function () {
        driver.then(function(){
            return page.fieldEmail.performFill();
        })
    });

    this.Given(/^User fill Nohp Case 3$/, function () {
        driver.then(function(){
          return page.fieldNohp.performFill();
        })
    });

    this.Given(/^User fill Tanggal lahir Case 3$/, function () {
        driver.then(function(){
          return page.fieldTanggalLahir.performFill();
        })
    });

    this.Given(/^User fill Alamat Case 3$/, function () {
        driver.then(function(){
          return page.fieldAlamat.performFill();
        })
    });

    this.Given(/^User fill Password Case 3$/, function () {
      driver.then(function(){
        return page.fieldPassword.performFill();
      })
    });

    this.Given(/^User fill Konfirm password Case 3$/, function () {
        driver.then(function(){
          return page.fieldKonfirmPassword.performFill();
        })
    });

    this.When(/^User click button Submit Daftar Case 3$/, function () {
        driver.then(function(){
            return page.clickButtonSubmit.performClick();
        })
    });

    this.Then(/^User gagal daftar Case 3$/, function () {
        driver.then(function(){
          // untuk menghandle alert yang muncul ketika gagal daftar
          return driver.switchTo().alert().dismiss();
        })
    });
}
