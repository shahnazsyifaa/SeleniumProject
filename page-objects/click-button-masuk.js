module.exports = {
 
    url: 'http://localhost/ELANG/elang/',
 
    elements: {
        clickButtonMasuk: by.xpath("//*[@id='myModalLogin']/div/div/form/div[5]/input")
    },
 
    performClick: function () {
 
        var selector = page.clickButtonMasuk.elements.clickButtonMasuk;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};