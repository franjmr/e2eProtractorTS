import { element, by, ElementFinder } from "protractor";

import { WebElement } from "selenium-webdriver";
import { BrowserUtil } from "../../__m4utils__/m4Utils";

export class EmployeeInformationTab {

    elemTab: ElementFinder;
    elemTabContainer: ElementFinder;

    constructor(idTab: string, idTabContainder: string) {
        this.elemTab = element(by.id(idTab));
        this.elemTabContainer = element(by.id(idTabContainder));
    }

    async waitForIsDisplayed_Tab(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(this.elemTab);
    }

    async waitForIsDisplayed_TabContainer(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(this.elemTabContainer);
    }

    async clickOn_Tab(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(this.elemTab);
        await this.elemTab.click();
    }
    
    async getElement_Tab(): Promise<WebElement> {
        await this.waitForIsDisplayed_Tab();
        return this.elemTab;
    }

    async getElement_TabContainer(): Promise<WebElement> {
        await this.waitForIsDisplayed_TabContainer();
        return this.elemTabContainer;
    }

}