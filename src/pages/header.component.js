export class HeaderComponent {
    constructor(page) {
        this.page = page;
        this.navigation = page.getByRole('navigation');
        this.newArticleLink = page.getByRole('link', { name: 'New Article' });
        this.userMenu = this.navigation.getByRole('img'); // аватар пользователя
        this.settingsLink = page.getByRole('link', { name: 'Settings' });
    }

    async openNewArticle() {
        await this.newArticleLink.click();
    }

    async openSettings() {
        await this.userMenu.click();
        await this.settingsLink.click();
    }
}