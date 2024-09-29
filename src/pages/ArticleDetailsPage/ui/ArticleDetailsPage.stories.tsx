import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { ArticleBlockType, articles, ArticleType } from '@/entities/Article';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppRoutes, AppRoutesPath } from '@/shared/const/routes';
import { Theme } from '@/shared/contexts/theme';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {},
    decorators: [withMock],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=4&_expand=user`,
                method: 'GET',
                status: 200,
                response: articles,
            },
            {
                url: `${__API__}/article-ratings?articleId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: [{ rating: 3 }],
            },
        ],
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
    ],
};

export const Light = Template.bind({});
Light.decorators = [
    RouterDecorator(AppRoutesPath[AppRoutes.ARTICLE_DETAILS](article.id), AppRoutesPath[AppRoutes.ARTICLE_DETAILS](':id')),
    StoreDecorator({ article: { data: article }, user: { authData: { id: '1' } } }),
];
Light.parameters = {
    themes: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.decorators = [
    RouterDecorator(AppRoutesPath[AppRoutes.ARTICLE_DETAILS](article.id), AppRoutesPath[AppRoutes.ARTICLE_DETAILS](':id')),
    StoreDecorator({ article: { data: article }, user: { authData: { id: '1' } } }),
    ThemeDecorator(Theme.DARK),
];
Dark.parameters = {
    themes: getDarkThemeBackground(),
};

export const Loading = Template.bind({});
Loading.decorators = [
    RouterDecorator(AppRoutesPath[AppRoutes.ARTICLE_DETAILS](article.id), AppRoutesPath[AppRoutes.ARTICLE_DETAILS](':id')),
    StoreDecorator({
        article: { isLoading: true },
    }),
];
