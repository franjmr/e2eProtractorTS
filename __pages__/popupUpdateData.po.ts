import { ElementFinder, element, by } from "protractor";
import { BrowserUtil } from "../__m4utils__/m4Utils";
import { WebElement } from "selenium-webdriver";

export class PopupUpdateData {

    private elemPopUpTitle: ElementFinder;
    private elemAssistantLeftContent: ElementFinder;
    private elemBlockActionsContent: ElementFinder;
    private elemContainerExpanderAssistant: ElementFinder;

    constructor(){
        this.elemPopUpTitle = element(by.id("m4-popUpTitle"));
        this.elemAssistantLeftContent = element(by.id("assistantLeftContent"));
        this.elemBlockActionsContent = element(by.id("_blockActionsContent"));
        this.elemContainerExpanderAssistant = element(by.id("containerexpanderAssistant"));
    }

    async getElem_HtmlSelectAssistantLeft(): Promise<ElementFinder>{
        await this.getElem_BlockActions();
        await this.getElem_AssistanteLeftContent();
        const htmlSelect = element(by.css("#_blockActionsContent select"));
        await BrowserUtil.element_WaitUntilReady(htmlSelect);
        return htmlSelect;
    }

    async getElems_OptionsHtmlSelectAssistantLeft(): Promise<ElementFinder>{
        const htmlSelect = await this.getElem_HtmlSelectAssistantLeft();
        const htmlSelectOptions = htmlSelect.all(by.tagName("option"));
        return htmlSelectOptions;
    }

    async click_OptionHtmlSelectAsistantLeft(optionValue: string): Promise<void>{
        const htmlSelect = await this.getElem_HtmlSelectAssistantLeft();
        htmlSelect.element(by.cssContainingText('option', optionValue)).click();
    }

    async getElem_BlockActionContent(){
        await this.getElem_BlockActions();
        const svgActions = element.all(by.css("#_blockActionsContent svg"));
        return svgActions;
        
    }

    async getElem_PopupTitle(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemPopUpTitle);
        return this.elemPopUpTitle;
    }

    async getElem_AssistanteLeftContent(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemAssistantLeftContent);
        return this.elemAssistantLeftContent;
    }

    async getElem_BlockActions(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemBlockActionsContent);
        return this.elemBlockActionsContent;
    }

    async getElem_AssistanteRigthContent(): Promise<WebElement>{
        await BrowserUtil.element_WaitUntilReady(this.elemContainerExpanderAssistant);
        return this.elemContainerExpanderAssistant;
    }

}