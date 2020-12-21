module.exports = {
 
    url: 'http://localhost/ELANG/elang/',
 
    elements: {
        clickMasuk: by.xpath("/html/body/nav/ul[2]/li[2]/a/b")
    },
 
    performClick: function () {
 
        var selector = page.clickMasuk.elements.clickMasuk;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};