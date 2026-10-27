import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { registerNewUser } from '../src/helpers/auth.js';
import { publishNewArticle } from '../src/helpers/article.js';
import { ArticlePage } from '../src/pages/article.page.js';

test('Пользователь может добавить комментарий к статье', async ({ page }) => {
    const articlePage = new ArticlePage(page);
    const comment = `Comment ${faker.lorem.words(4)}`;

    await registerNewUser(page);
    await publishNewArticle(page);

    await articlePage.addComment(comment);

    await expect(articlePage.textOnPage(comment)).toBeVisible();
    await expect(articlePage.commentInput).toHaveValue('');
});