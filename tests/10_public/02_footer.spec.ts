import { test, expect } from "../helpers/fixtures";

test("フッターの内容が正しい", async ({ ecPage }) => {
  await ecPage.goto("/");

  const footer = ecPage.getByRole("contentinfo").first();
  await expect(footer, "フッターが表示されている").toBeVisible();
  await expect(footer, "フッターのベースラインと比較").toHaveScreenshot(
    "ec-footer.png"
  );
});
