import { Page, Response } from '@playwright/test';

class BasePage {
    private readonly url: string = 'https://demo.playwright.dev/todomvc/#/'
    constructor(protected readonly page: Page) {}

    get title(): Promise<string> {
        return this.page.title();
    }

    get pageUrl(): string {
        return this.page.url();
    }

    goto = (): Promise<Response | null> => this.page.goto(this.url);
    
}

export default BasePage;