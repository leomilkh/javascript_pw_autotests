import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { registerNewUser } from '../src/helpers/auth.js';
import { HeaderComponent } from '../src/pages/header.component.js';
import { SettingsPage } from '../src/pages/settings.page.js';

test('Пользователь может сохранить bio в настройках профиля', async ({ page }) => {
    const header = new HeaderComponent(page);
    const settings = new SettingsPage(page);
    const bio = `Bio ${faker.lorem.words(4)}`;

    await registerNewUser(page);
    await header.openSettings();
    await settings.updateBio(bio);

    // Возвращаемся в настройки через навигацию: не зависит от того,
    // куда приложение перенаправляет после сохранения
    await header.openSettings();
    await expect(settings.bioInput).toHaveValue(bio);
});