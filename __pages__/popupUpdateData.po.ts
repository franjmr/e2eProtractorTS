import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";
import { BrowserUtil } from "../__m4utils__/m4Utils";
import { WebElement } from "selenium-webdriver";

export class PopupUpdateData {

    private elemPopUp: ElementFinder;
    private elemPopUpTitle: ElementFinder;
    private elemAssistantLeftContent: ElementFinder;
    private elemBlockActionsContent: ElementFinder;
    private elemContainerExpanderAssistant: ElementFinder;

    constructor(){
        this.elemPopUp = element(by.id("m4-popUp"));
        this.elemPopUpTitle = element(by.id("m4-popUpTitle"));
        this.elemAssistantLeftContent = element(by.id("assistantLeftContent"));
        this.elemBlockActionsContent = element(by.id("_blockActionsContent"));
        this.elemContainerExpanderAssistant = element(by.id("containerexpanderAssistant"));
    }

    async waitForm_PopUpReady(): Promise<void>{
        await this.getElem_Popup();
        await this.getElem_PopupTitle();
        await this.getElem_WidgetSelectAssistantLeft();
        await this.getElem_AssistanteLeftContent();
    }

    async getElem_Popup(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemPopUp);
        return this.elemPopUp;
    }

    async getElem_PopupTitle(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemPopUpTitle);
        return this.elemPopUpTitle;
    }

    async getElem_WidgetSelectAssistantLeft(): Promise<ElementFinder>{
        const widgetSelect = element(by.css(".meta4-widget-select"));
        await BrowserUtil.element_WaitUntilReady(widgetSelect);
        return widgetSelect;
    }

    private async getElem_WidgetSelectListAssistantLeft(): Promise<ElementFinder>{
        const widgetSelectList = element(by.css(".meta4-widget-select-ul:not(.hidden)"));
        await BrowserUtil.element_WaitUntilReady(widgetSelectList);
        return widgetSelectList;
    }

    async clickOn_WidgetSelectAssistantLeft(): Promise<void>{
        const widgetSelect: ElementFinder = await this.getElem_WidgetSelectAssistantLeft();
        await BrowserUtil.element_WaitUntilBeClickable(widgetSelect);
        await widgetSelect.click();
    }

    async getElems_WidgetSelectListOptionsAssistantLeft(): Promise<ElementFinder[]>{
        const widgetSelectList: ElementFinder = await this.getElem_WidgetSelectListAssistantLeft();
        await BrowserUtil.element_WaitUntilBeClickable(widgetSelectList);
        return widgetSelectList.all(by.css("li"));
    }

    async click_OptionHtmlSelectAsistantLeft(optionIndex: number): Promise<void>{
        const liOptions : ElementFinder[] = await this.getElems_WidgetSelectListOptionsAssistantLeft();
        const liOptionByIdx = liOptions[optionIndex];
        browser.actions().mouseMove(liOptionByIdx).click().perform();
    }

    async getElem_BlockActions(): Promise<ElementFinder>{
        await BrowserUtil.element_WaitUntilReady(this.elemBlockActionsContent);
        return this.elemBlockActionsContent;
    }

    async getElems_BlockActionContent(): Promise<ElementFinder[]>{
        const elemBlockActions = await this.getElem_BlockActions();
        return elemBlockActions.all(by.tagName("svg"));
    }

    async getElem_AssistanteLeftContent(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemAssistantLeftContent);
        return this.elemAssistantLeftContent;
    }

    async getElem_AssistanteRigthContent(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemContainerExpanderAssistant);
        return this.elemContainerExpanderAssistant;
    }
}