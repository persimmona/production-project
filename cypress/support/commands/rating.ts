export const setRating = (starsCount = 5): void => {
    cy.get(`[data-testid="StarRating.${starsCount}"]`).click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(starsCount?: number): Chainable<void>;
        }
    }
}
