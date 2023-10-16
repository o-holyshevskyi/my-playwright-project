import { test as base } from '@playwright/test';
import TodoPage from '../../src/pages/todo-page/todo-page';

type Fixture = {
    todoPage: TodoPage;
}

const test = base.extend<Fixture>({
    todoPage: async ({ page }, use) => {
      const todoPage = new TodoPage(page);
      await todoPage.goto();
      await use(todoPage);
      await page.close();
    },
});

export default test;
export { expect } from '@playwright/test';