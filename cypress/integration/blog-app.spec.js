describe("blog app", function () {
    //this is where it began. The errors, the terros and everything in between
    beforeEach(function () {
        //cy.request('POST', 'http://localhost:3030/api/testing/reset');
        cy.visit('http://localhost:3000');
    });

    it("Login form is showed", function () {
        cy.contains("login").click();
    });

    describe("logging in", function () {
        it("succeeds with the correct credentials", function () {
            cy.contains("login").click();
            cy.get('#username').type("jim4067");
            cy.get('#password').type("pass123");
            cy.get('#login-button').click()

            cy.contains("logged in as");
        });

        it("fails with wrong credentials", function () {
            cy.contains("login").click();
            cy.get('#username').type("wrong_user");
            cy.get('#password').type("wrong_pass");
            cy.get('#login-button').click();

            cy.contains("wrong credentials")
        });
    });

    describe.only("when logged in ", function () {
        beforeEach(function () {
            cy.contains("login").click();
            cy.get('#username').type("jim4067");
            cy.get('#password').type("pass123");
            cy.get('#login-button').click();
        });

        it("a user can create a blog", function () {
            cy.contains("new blog").click();
            cy.get('input:first').type("a new blog by cypress");
            cy.get('input:second').type("new author");
            cy.get('input:third').type("a new url");
            cy.contains("create").click();

            cy.contains("a new blog created by cypress")
        });
    });


});