export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const AppRoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};
