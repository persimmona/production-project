export const addComment = (text: string): void => {
    cy.get('[data-testid="AddCommentForm.Content"]').type(text);
    cy.get('[data-testid="AddCommentForm.Submit"]').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
