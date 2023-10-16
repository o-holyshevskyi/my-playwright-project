import { Locator, Page } from '@playwright/test';

class Control {
    private readonly locator: Locator;

    constructor (private readonly selector: string, private readonly page: Page) {
        this.locator = this.page.locator(this.selector);
    }

    click = async (): Promise<Control> => {
        await this.locator.click();
        return this;
    }

    fill = async (value: string): Promise<Control> => {
        await this.locator.fill(value);
        return this;
    }

    clear = async (): Promise<Control> => {
        await this.locator.clear();
        return this;
    }

    press = async (key: string): Promise<Control> => {
        await this.locator.press(key);
        return this
    }

    getInputValue = (): Promise<string> => this.locator.inputValue();
}

export default Control;