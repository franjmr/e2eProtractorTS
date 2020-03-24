import { element, by } from "protractor";

import { WebElement } from "selenium-webdriver";
import { BrowserUtil } from "../../__m4utils__/m4Utils";

export class EmployeeInformationTab {

    private idTab: string;
    private idTabContainer: string;
    private idTabContainerOtherItems: string;
    private idButtonAssistant:  string

    constructor(idTab: string, idTabContainer: string, idTabContainerOtherItems: string, idButtonAssistant: string) {
        this.idTab = idTab;
        this.idTabContainer = idTabContainer;
        this.idTabContainerOtherItems = idTabContainerOtherItems;
        this.idButtonAssistant = idButtonAssistant;
    }

    async getElement_Tab(): Promise<WebElement> {
        await this.waitForIsDisplayed_Tab();
        return element(by.id(this.idTab))
    }

    async getElement_TabContainer(): Promise<WebElement> {
        await this.waitForIsDisplayed_TabContainer();
        return element(by.id(this.idTabContainer))
    }

    async getElement_TabContainerOtherItems(): Promise<WebElement> {
        await this.waitForIsDisplayed_TabContainerOtherItems();
        return element(by.id(this.idTabContainerOtherItems))
    }

    async getElement_ButtonUpdateInformation(): Promise<WebElement> {
        await this.waitForIsDisplayed_TabContainerOtherItems();
        await this.waitForIsDisplayed_ButtonUpdateInformation();
        return element(by.id(this.idButtonAssistant))
    }
    
    async waitForIsDisplayed_Tab(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(element(by.id(this.idTab)));
    }

    async waitForIsDisplayed_TabContainer(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(element(by.id(this.idTabContainer)));
    }

    async waitForIsDisplayed_TabContainerOtherItems(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(element(by.id(this.idTabContainerOtherItems)));
    }

    async waitForIsDisplayed_ButtonUpdateInformation(): Promise<void> {
        await BrowserUtil.element_WaitUntilReady(element(by.id(this.idButtonAssistant)));
    }

    async clickOn_Tab(): Promise<void> {
        const elemTab = await this.getElement_Tab();
        await elemTab.click();
    }

    async clickOn_ButtonUpdateInformation(): Promise<void> {
        const buttonUpdateInfo = await this.getElement_ButtonUpdateInformation();
        await buttonUpdateInfo.click();
    }

}