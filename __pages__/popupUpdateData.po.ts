import { ElementFinder, element, by } from "protractor";
import { BrowserUtil } from "../__m4utils__/m4Utils";

export class PopupUpdateData {

    elemPopUpTitle: ElementFinder;
    elemAssistantLeftContent: ElementFinder;
    elemBlockActionsContent: ElementFinder;
    elemContainerExpanderAssistant: ElementFinder;

    constructor(){
        this.elemPopUpTitle = element(by.id("m4-popUpTitle"));
        this.elemAssistantLeftContent = element(by.id("assistantLeftContent"));
        this.elemBlockActionsContent = element(by.id("blockActionsContent"));
        this.elemContainerExpanderAssistant = element(by.id("containerexpanderAssistant"));
    }

    getSelectOptions(){
        //#assistantLeftContent select
    }

    getActionsFromOptionSelected(){
        //#_blockActionsContent  svg
    }

    async getElem_PopupTitle(){
        await BrowserUtil.element_WaitUntilReady(this.elemPopUpTitle);
        return this.elemPopUpTitle;
    }

    async getElem_BlockActions(){
        await BrowserUtil.element_WaitUntilReady(this.elemAssistantLeftContent);
        return this.elemAssistantLeftContent;
    }

    async getElem_AssistanteLeftContent(){
        await BrowserUtil.element_WaitUntilReady(this.elemBlockActionsContent);
        return this.elemBlockActionsContent;
    }

    async getElem_AssistanteRigthContent(){
        await BrowserUtil.element_WaitUntilReady(this.elemContainerExpanderAssistant);
        return this.elemContainerExpanderAssistant;
    }

}