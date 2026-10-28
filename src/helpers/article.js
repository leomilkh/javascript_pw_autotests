import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { HeaderComponent } from '../pages/header.component.js';
import { EditorPage } from '../pages/editor.page.js';
import { ArticlePage } from '../pages/article.page.js';

export const createArticleData = () => ({
    title: `Autotest ${faker.lorem.words(3)}`,
    description: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
});

export async function publishNewArticle(page) {
    const article = createArticleData();
    const header = new HeaderComponent(page);
    const editor = new EditorPage(page);
    const articlePage = new ArticlePage(page);

    await header.openNewArticle();
    await editor.createArticle(article);
    await expect(articlePage.title).toHaveText(article.title);

    return article;
}