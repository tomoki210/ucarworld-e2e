import { test as base } from "@playwright/test";

type Fixtures = {
  ecPage: import("@playwright/test").Page;
  adminPage: import("@playwright/test").Page;
};

export const test = base.extend<Fixtures>({
  ecPage: async ({ browser }, use) => {
    const ctx = await browser.newContext({
      baseURL: process.env.EC_URL ?? undefined,
      httpCredentials: {
        username: process.env.EC_BASIC_AUTH_USERNAME ?? "",
        password: process.env.EC_BASIC_AUTH_PASSWORD ?? "",
      },
    });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },
  adminPage: async ({ browser }, use) => {
    const ctx = await browser.newContext({
      baseURL: process.env.ADMIN_URL ?? undefined,
      httpCredentials: {
        username: process.env.ADMIN_BASIC_AUTH_USERNAME ?? "",
        password: process.env.ADMIN_BASIC_AUTH_PASSWORD ?? "",
      },
    });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },
});

export { expect } from "@playwright/test";
