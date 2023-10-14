import { Locator, Page } from "@playwright/test";

export class TodoApp {
    private readonly newTodoItem: Locator = this.page.locator('header > input');
    private readonly leftTodoItems: Locator = this.page.locator('//*[@data-testid="todo-count"]/strong');

    constructor (private readonly page: Page) {}

    addNewItem = async (newItem: string): Promise<void> => {
        await this.newTodoItem.fill(newItem);
        return this.page.keyboard.press('Enter');
    }

    addNewItems = async (newItems: string[]): Promise<void> => {
        for (let i = 0; i < newItems.length; i++) {
            const newItem = newItems[i];
            await this.addNewItem(newItem);
        }
    }

    getLeftTodoItems = async (): Promise<number> => {
        return Number(await this.leftTodoItems.innerText());
    }
}

export default TodoApp;