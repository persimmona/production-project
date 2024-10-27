let profileId = '';

describe('User enters profile page', (): void => {
    beforeEach(() => {
        cy.visit('/');
        cy.login().then((user) => {
            profileId = user.id;
            cy.visit('profile/' + user.id);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('should load profile page data', () => {
        cy.get('[data-testid="ProfileInfoItem.firstname"]').contains('Test');
    });

    it('should edit profile', () => {
        cy.updateProfile('Firstname', 'Lastname');
        cy.get('[data-testid="ProfileInfoItem.firstname"]').contains('Firstname');
        cy.get('[data-testid="ProfileInfoItem.lastname"]').contains('Lastname');
    });
});
