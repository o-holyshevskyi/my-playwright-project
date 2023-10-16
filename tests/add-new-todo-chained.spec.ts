import test, { expect } from './fixtures/fixture';

test.describe('add todo item with chained approach', () => {  
  test('add todo item with chained functions', async ({ todoPage }) => {
    const newTodoItem = 'chainedTodoItem';
    const todo = todoPage.todoApp.newTodoInput;

    await todo
        .fill(newTodoItem)
        .then(() => todo.clear())
        .then(() => todo.fill(newTodoItem))
        .then(() => todo.press('Enter'));

    const leftTodoItems = await todoPage.todoApp.getLeftTodoItems();
    expect(leftTodoItems).toBe(1);
  });
});