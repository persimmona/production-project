import { User } from '../../../src/entities/User';
import { AUTH_USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';

export const login = (username = 'testuser', password = 'testuser') => {
    cy.log(`Logging in as ${username}`);

    cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(AUTH_USER_LOCALSTORAGE_KEY, JSON.stringify(body));

        return body;
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
        }
    }
}
