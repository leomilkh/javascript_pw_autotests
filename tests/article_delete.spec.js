import { test, expect } from '@playwright/test';
import { registerNewUser } from '../src/helpers/auth.js';
import { publishNewArticle } from '../src/helpers/article.js';
import { ArticlePage } from '../src/pages/article.page.js';

test('Пользователь может удалить свою статью', async ({ page }) => {
    const articlePage = new ArticlePage(page);

    await registerNewUser(page);
    const article = await publishNewArticle(page);

    await articlePage.delete();

    await expect(articlePage.title).toBeHidden();
    await page.goBack();
    await expect(articlePage.title).not.toHaveText(article.title);
});