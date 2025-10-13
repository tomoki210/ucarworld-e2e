import { test, expect } from "../helpers/fixtures";

test("ヘッダーの内容が正しい", async ({ ecPage }) => {
  await ecPage.goto("/");

  const header = ecPage.getByRole("banner").first();
  await expect(header, "ヘッダーが表示されている").toBeVisible();
  await expect(header, "ヘッダーのベースラインと比較").toHaveScreenshot(
    "ec-header.png"
  );
});
