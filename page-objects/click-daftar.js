module.exports = {
 
    url: 'http://localhost/ELANG/elang/',
 
    elements: {
        clickDaftar: by.xpath("/html/body/nav/ul[2]/li[1]/a")
    },
 
    performClick: function () {
 
        var selector = page.clickDaftar.elements.clickDaftar;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};