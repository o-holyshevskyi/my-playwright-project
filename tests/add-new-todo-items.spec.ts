import test, { expect } from './fixtures/fixture';

test.describe('my first page object pattern tests', () => {  
  test('add single todo item', async ({ todoPage }) => {
    await todoPage.todoApp.addNewItem('newTodoItem');
    const leftTodoItems = await todoPage.todoApp.getLeftTodoItems();
    expect(leftTodoItems).toBe(1);
  });

  test('add multiple todo items', async ({ todoPage }) => {
    const newItems: string[] = ['newTodoItem1', 'newTodoItem2'];
    await todoPage.todoApp.addNewItems(newItems);
    const leftTodoItems = await todoPage.todoApp.getLeftTodoItems();
    expect(leftTodoItems).toBe(newItems.length);
  });  
});