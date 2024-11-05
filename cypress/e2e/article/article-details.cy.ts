let articleDetailsId = '';

describe('User enters article details page', (): void => {
    beforeEach((): void => {
        cy.login();
        cy.createArticle().then((article) => {
            articleDetailsId = article.id;
            cy.visit('articles/' + articleDetailsId);
        });
    });

    afterEach((): void => {
        cy.removeArticle(articleDetailsId);
    });

    it('should render article details', (): void => {
        cy.get('[data-testid="ArticleDetails.Header"]').should('exist');
    });

    it('should leave comment', (): void => {
        cy.get('[data-testid="AddCommentForm"]').scrollIntoView();
        cy.addComment('Some new comment');
        cy.get('[data-testid="CommentCard.Content"]').should('have.length', 1);
    });

    it('should set rating', (): void => {
        cy.get('[data-testid="RatingCard"]').scrollIntoView();
        cy.setRating(3);
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});
