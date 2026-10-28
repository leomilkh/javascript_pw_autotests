export class SettingsPage {
    constructor(page) {
        this.page = page;
        this.bioInput = page.getByRole('textbox', { name: 'Short bio about you' });
        this.updateButton = page.getByRole('button', { name: 'Update Settings' });
    }

    async updateBio(bio) {
        await this.bioInput.fill(bio);
        await this.updateButton.click();
    }
}