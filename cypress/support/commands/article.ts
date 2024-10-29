import { Article, ArticleType } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Научная статья - Биология',
    subtitle: 'БиологиЯ',
    img: 'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '3',
    type: [ArticleType.SCIENCE],
    blocks: [],
};

export const createArticle = (article: Article): void => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/articles`,
        headers: {
            Authorization: 'aaa',
        },
        body: article ?? defaultArticle,
    });
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
            createArticle(article: Article): Chainable<void>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
