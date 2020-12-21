module.exports = {

    url: 'http://localhost/ELANG/elang/',

    elements: {
        fieldPassword: by.xpath("//*[@id='inputPassword1']")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performFill: function () {
 
        var selector = page.fieldPassword.elements.fieldPassword
 
        // catatan: untuk menguji setiap test data harap ubah nilai array pada akun1[x] sesuai dengan test data yang akan diuji pada shared-objects
        // misal: untuk menguji validasi username sama / duplikat maka nilai array diubah menjadi akun1[10] sesuai data di akun1 shared-objects 
        return driver.findElement(selector).sendKeys(shared.akun1[9].password);
    }
};