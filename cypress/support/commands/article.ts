import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Научная статья - Биология',
    subtitle: 'БиологиЯ',
    img: '',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '3',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article: Article): Cypress.Chainable<Article> => {
    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: {
                Authorization: 'aaa',
            },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body);
};

export const removeArticle = (articleId: string): void => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/` + articleId,
        headers: {
            Authorization: 'aaa',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
