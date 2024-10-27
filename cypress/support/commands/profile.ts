export const updateProfile = (firstname: string, lastname: string): void => {
    cy.get('[data-testid="EditProfileButton"]').click();
    cy.get('[data-testid="Input.firstname"]').clear().type(firstname);
    cy.get('[data-testid="Input.lastname"]').clear().type(lastname);
    cy.get('[data-testid="EditableProfileForm.SaveButton"]').click();
};

export const resetProfile = (profileId: string): void => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/` + profileId,
        headers: {
            Authorization: 'aaa',
        },
        body: {
            id: '3',
            firstname: 'User',
            lastname: 'Test',
            age: '20',
            currency: 'PLN',
            country: 'Poland',
            city: 'Krakow',
            username: 'testuser',
            avatar: '',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            resetProfile(profileId: string): Chainable<void>;
            updateProfile(firstname: string, lastname: string): Chainable<void>;
        }
    }
}
