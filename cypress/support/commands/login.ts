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

        cy.visit('/');
    });
};
