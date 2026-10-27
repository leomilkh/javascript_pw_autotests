import { test, expect } from '@playwright/test';
import { registerNewUser } from '../src/helpers/auth.js';
import { createArticleData } from '../src/helpers/article.js';
import { HeaderComponent } from '../src/pages/header.component.js';
import { EditorPage } from '../src/pages/editor.page.js';
import { ArticlePage } from '../src/pages/article.page.js';

test('Пользователь может создать статью', async ({ page }) => {
    const header = new HeaderComponent(page);
    const editor = new EditorPage(page);
    const articlePage = new ArticlePage(page);
    const article = createArticleData();

    await registerNewUser(page);
    await header.openNewArticle();
    await editor.createArticle(article);

    await expect(articlePage.title).toHaveText(article.title);
    await expect(articlePage.textOnPage(article.body)).toBeVisible();
});