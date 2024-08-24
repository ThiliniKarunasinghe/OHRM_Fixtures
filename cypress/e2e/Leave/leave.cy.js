describe('Leave Module Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        });
    });

    it('should apply for leave', () => {
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        cy.get(':nth-child(23) > .oxd-calendar-date').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-dates-grid > :nth-child(23) > .oxd-calendar-date').click()
        cy.get('.oxd-textarea').type('Test leave for me')
        cy.get('.oxd-button').click()
    });
})