// import { test, expect } from "@playwright/test";

// test.describe("회원가입 페이지 E2E 테스트", () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto("http://localhost:3000/auth/signup");
//     });

//     test("회원가입 폼이 올바르게 작동하는지 확인", async ({ page }) => {
//         const emailInput = page.getByPlaceholder("이메일");
//         const passwordInput = page.getByPlaceholder("비밀번호", { exact: true }); // exact가 있어야 정확하게 찾음
//         const confirmPasswordInput = page.getByPlaceholder("비밀번호 확인");
//         const submitButton = page.getByRole("button", { name: "회원가입" });

//         await emailInput.fill("test@test.com");
//         await passwordInput.fill("123123");
//         await confirmPasswordInput.fill("123123");
//         await submitButton.click();

//         await expect(page).toHaveURL("http://localhost:3000/auth/login");
//     });
// });
