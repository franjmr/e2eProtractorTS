import { element, by, ElementFinder } from "protractor";

import { WebElement } from "selenium-webdriver";
import { BrowserUtil } from "../../__m4utils__/m4Utils";

export class EmployeeInformationTab {

    private elemTab: ElementFinder;
    private elemTabContainer: ElementFinder;
    private elemTabContainerOtherItems: ElementFinder;
    private elemButtonAssistant:  ElementFinder

    constructor(idTab: string, idTabContainder: string, elemTabContainerOtherItems: string, idButtonAssistant: string) {
        this.elemTab = element(by.id(idTab));
        this.elemTabContainer = element(by.id(idTabContainder));
        this.elemTabContainerOtherItems = element(by.id(elemTabContainerOtherItems));
        this.elemButtonAssistant = element(by.id(idButtonAssistant));
    }

    async waitForIsDisplayed_Tab(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(this.elemTab);
    }

    async waitForIsDisplayed_TabContainer(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(this.elemTabContainer);
    }

    async waitForIsDisplayed_TabContainerOtherItems(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(this.elemTabContainerOtherItems);
    }

    async waitForIsDisplayed_ButtonUpdateInformation(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(this.elemButtonAssistant);
    }

    async clickOn_Tab(): Promise<void> {
        await BrowserUtil.element_WaitUntilBeClickable(this.elemTab);
        await this.elemTab.click();
    }

    async clickOn_ButtonUpdateInformation(): Promise<void> {
        await BrowserUtil.element_WaitUntilBeClickable(this.elemButtonAssistant);
        await this.elemButtonAssistant.click();
    }
    
    async getElement_Tab(): Promise<WebElement> {
        await this.waitForIsDisplayed_Tab();
        return this.elemTab;
    }

    async getElement_TabContainer(): Promise<WebElement> {
        await this.waitForIsDisplayed_TabContainer();
        return this.elemTabContainer;
    }

    async getElement_TabContainerOtherItems(): Promise<WebElement> {
        await this.waitForIsDisplayed_TabContainerOtherItems();
        return this.elemTabContainerOtherItems;
    }

    async getElement_ButtonUpdateInformation(): Promise<WebElement> {
        await this.waitForIsDisplayed_TabContainerOtherItems();
        await this.waitForIsDisplayed_ButtonUpdateInformation();
        return this.elemButtonAssistant;
    }

}