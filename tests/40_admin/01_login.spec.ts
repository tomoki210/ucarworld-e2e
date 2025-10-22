import { test, expect } from "../helpers/fixtures";

test("ログインページが開ける", async ({ adminPage }) => {
  const res = await adminPage.goto("/login", { waitUntil: "domcontentloaded" });

  expect(res, "初回レスポンスが得られる").toBeTruthy();
  await expect(adminPage, "ベースラインと比較").toHaveScreenshot(
    "admin-login.png"
  );
});
