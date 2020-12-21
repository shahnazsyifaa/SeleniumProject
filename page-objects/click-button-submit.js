module.exports = {
 
    url: 'http://localhost/ELANG/elang/',
 
    elements: {
        clickButtonSubmit: by.xpath("//*[@id='buton']")
    },
 
    performClick: function () {
 
        var selector = page.clickButtonSubmit.elements.clickButtonSubmit;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};