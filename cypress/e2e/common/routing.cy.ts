describe('Routing', () => {
    describe('user is NOT authorized', () => {
        it('should access main page', () => {
            cy.visit('/');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('should redirect to main page, when does not have access', () => {
            cy.visit('/profile/3');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('should redirect to forbidden, when no routes exist', () => {
            cy.visit('/dsfsddf');
            cy.get('[data-testid="NotFoundPage"]').should('exist');
        });
    });
    describe('user is authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('should access profile page', () => {
            cy.visit('/profile/3');
            cy.get('[data-testid=ProfilePage]').should('exist');
        });
    });
});
