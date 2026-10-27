import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { registerNewUser } from '../src/helpers/auth.js';
import { publishNewArticle } from '../src/helpers/article.js';
import { EditorPage } from '../src/pages/editor.page.js';
import { ArticlePage } from '../src/pages/article.page.js';

test('Пользователь может изменить заголовок своей статьи', async ({ page }) => {
    const editor = new EditorPage(page);
    const articlePage = new ArticlePage(page);
    const newTitle = `Edited ${faker.lorem.words(3)}`;

    await registerNewUser(page);
    await publishNewArticle(page);

    await articlePage.edit();
    await editor.updateArticleTitle(newTitle);

    await expect(articlePage.title).toHaveText(newTitle);
});