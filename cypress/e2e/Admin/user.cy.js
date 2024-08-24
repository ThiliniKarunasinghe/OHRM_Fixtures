describe('User Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        });
    });

    it('should add a new user', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get('.oxd-autocomplete-text-input > input').type('org test user')
        cy.wait(2000)
        cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Orgtest')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Orgtest123')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Orgtest123')
        cy.get('.oxd-button--secondary').click()

        cy.wait(5000)
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        //add comment


    })

    /*it('should delete an existing user', () => {
        cy.get('#menu_admin_viewAdminModule').click();
        cy.get('#searchSystemUser_userName').type('john.smith');
        cy.get('#searchBtn').click();
        cy.get('.chkbox').click();
        cy.get('#btnDelete').click();
        cy.get('#dialogDeleteBtn').click();
        cy.get('.message').should('contain', 'Successfully Deleted');
    });*/
})