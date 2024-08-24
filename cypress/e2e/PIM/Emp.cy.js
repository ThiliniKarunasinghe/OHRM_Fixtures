describe('employee Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        });
    });
        
   

    it('should add a new employee ', () => {
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('org')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('test')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('user')
        cy.get('.oxd-button--secondary').click()

        
        cy.wait(4000)

        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails')
        

    })

})