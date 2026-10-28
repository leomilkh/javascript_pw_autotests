export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.title = page.getByRole('heading', { level: 1 });
        // Кнопки Edit/Delete в шаблоне Conduit дублируются вверху и внизу статьи
        this.editLink = page.getByRole('link', { name: 'Edit Article' }).first();
        this.deleteButton = page.getByRole('button', { name: 'Delete Article' }).first();
        this.commentInput = page.getByRole('textbox', { name: 'Write a comment...' });
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
    }

    textOnPage(text) {
        return this.page.getByText(text);
    }

    async edit() {
        await this.editLink.click();
    }

    async delete() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.deleteButton.click();
    }

    async addComment(text) {
        await this.commentInput.fill(text);
        await this.postCommentButton.click();
    }
}