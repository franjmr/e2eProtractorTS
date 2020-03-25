import { element, by, ElementFinder, browser } from "protractor";
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

    async getElement_Tab(): Promise<ElementFinder> {
        await this.waitForIsDisplayed_Tab();
        return element(by.id(this.idTab))
    }

    async getElement_TabContainer(): Promise<ElementFinder> {
        await this.waitForIsDisplayed_TabContainer();
        return element(by.id(this.idTabContainer))
    }

    async getElement_TabContainerOtherItems(): Promise<ElementFinder> {
        await this.waitForIsDisplayed_TabContainerOtherItems();
        return element(by.id(this.idTabContainerOtherItems))
    }

    async getElement_ButtonUpdateInformation(): Promise<ElementFinder> {
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
        await BrowserUtil.element_WaitUntilBeClickable(elemTab);
        await elemTab.click();
    }

    async clickOn_ButtonUpdateInformation(): Promise<void> {
        const buttonUpdateInfo:ElementFinder = await this.getElement_ButtonUpdateInformation();
        await BrowserUtil.element_WaitUntilBeClickable(buttonUpdateInfo);
        await browser.sleep(1000);  //Waitfor animation left to rigth
        await buttonUpdateInfo.click();
    }

}