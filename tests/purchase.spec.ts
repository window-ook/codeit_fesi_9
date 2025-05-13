import { test, expect } from '@playwright/test';

test('구매 시나리오', async ({ page }) => {
    await page.goto('http://localhost:3000/main');
    await page.getByRole('textbox', { name: '이메일' }).fill('abc@gmail.com');
})