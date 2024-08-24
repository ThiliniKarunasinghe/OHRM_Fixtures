describe('User Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        });
    });

    it('should add a new candidate', () => {
        cy.get(':nth-child(5) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('org')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('test')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('candidate')
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testcandi@gmail.com')
        cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0112387916')
        cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input').type('QA ,Intern')
        cy.get('.oxd-date-input > .oxd-input').click()
        cy.get(':nth-child(23) > .oxd-calendar-date').click()
        cy.get('.oxd-textarea').type('Test')
        cy.get('.oxd-checkbox-input > .oxd-icon').click()
        cy.get('.oxd-button--secondary').click()
       // cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')



    })


})