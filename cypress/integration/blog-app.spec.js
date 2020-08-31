describe("blog app" , function (){
    //this is where it began. The errors, the terros and everything in between
    beforeEach(function() {
        //cy.request('POST', 'http://localhost:3030/api/testing/reset');
        cy.visit('http://localhost:3000');
    });

    it("Login form is showed", function () {
        cy.contains("login").click();
    });
} );