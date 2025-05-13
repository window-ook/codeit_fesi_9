import { test, expect } from "@playwright/test";

test("신규 가입자를 위한 쿠폰 발급 시나리오", async ({ page }) => {
    await page.goto("http://localhost:3000/main");
    await page.getByRole("button", { name: "지금 가입하면 이득" }).click();
    await page.getByRole("textbox", { name: "이메일" }).fill("abc@naver.com");
    await page.getByRole("textbox", { name: "비밀번호", exact: true }).fill("12347659a");
    await page.getByRole("textbox", { name: "비밀번호 확인" }).fill("12347659a");
    await page.getByRole("button", { name: "회원가입" }).click();
    await expect(
        page.getByText("신규 가입자시군요! 쿠폰이 발급됐어요!")
    ).toBeVisible();
})
