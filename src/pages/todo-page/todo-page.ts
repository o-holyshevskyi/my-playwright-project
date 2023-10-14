import { Locator, Page } from "@playwright/test";
import BasePage from "../base-page";
import TodoApp from "./page-elements/todo-app";

class TodoPage extends BasePage {
    public pageHeader: Locator = this.page.locator('h1');
    public todoApp: TodoApp = new TodoApp(this.page);

    constructor(page: Page) {
        super(page);
    }
}

export default TodoPage;