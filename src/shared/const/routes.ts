export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ADMIN_PANEL = 'admin_panel',

    NOT_FOUND = 'not_found',
    FORBIDDEN = 'forbidden',
}

function createStrictObject<T extends Record<AppRoutes, unknown>>(obj: T): T {
    return obj;
}

export const AppRoutesPath = createStrictObject({
    [AppRoutes.MAIN]: () => '/',
    [AppRoutes.ABOUT]: () => '/about',
    [AppRoutes.PROFILE]: (id: string) => '/profile/' + id,
    [AppRoutes.ARTICLES]: () => '/articles',
    [AppRoutes.ARTICLE_DETAILS]: (id: string) => '/articles/' + id,
    [AppRoutes.ADMIN_PANEL]: () => '/admin',

    [AppRoutes.NOT_FOUND]: () => '*',
    [AppRoutes.FORBIDDEN]: () => '/forbidden',
});
