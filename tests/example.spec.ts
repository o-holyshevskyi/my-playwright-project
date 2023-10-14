import test, { expect } from './fixtures/fixture';

test.describe('my first page object pattern tests', () => {
  test('has title', async ({ todoPage }) => expect(await todoPage.title).toBe('React • TodoMVC'));
  test('get current url', async ({ todoPage }) => expect(todoPage.pageUrl).toContain('demo.playwright.dev'));  
});