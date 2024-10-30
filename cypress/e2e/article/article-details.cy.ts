let articleDetailsId = '';
describe('User enters article details page', (): void => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            articleDetailsId = article.id;
            cy.visit('articles/' + articleDetailsId);
        });
    });
    afterEach(() => {
        cy.removeArticle(articleDetailsId);
    });
    it('should render article details', () => {});
});
