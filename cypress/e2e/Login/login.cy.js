describe('Login Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        });
    });


    it('should log in and display the dashboard', () => {
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });
});
