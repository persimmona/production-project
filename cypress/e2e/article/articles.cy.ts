describe('User enters article list', (): void => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it('should load article list', () => {
        cy.get('[data-testid="ArticlesPage"]').should('exist');
        cy.get('[data-testid="ArticleListItem"]').should('have.length.greaterThan', 3);
    });
});
