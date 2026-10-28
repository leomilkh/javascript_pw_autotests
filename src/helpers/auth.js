import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../pages/main.page.js';
import { RegisterPage } from '../pages/register.page.js';

export async function registerNewUser(page) {
    const user = {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password(),
    };

    const main = new MainPage(page);
    const register = new RegisterPage(page);

    await main.open();
    await main.signup();
    await register.register(user);
    await expect(page.getByRole('navigation')).toContainText(user.name);

    return user;
}