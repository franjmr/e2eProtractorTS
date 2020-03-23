import { browser, element, by } from "protractor";
import { BrowserUtil } from "../__m4utils__/m4Utils";

export class Page {

    server : string;
    pageUrl : string;

    constructor(server: string, pageUrl:string){
        this.server = server;
        this.pageUrl = pageUrl;
    }

    async open():Promise<any>{
        await browser.get(this.server.concat(this.pageUrl));
    }

    async openAndWaitFor_PageIsReady(){
        await this.open();
        await this.waitForUntil_PageIsReady();
    }

    async waitForUntil_PageIsReady(){
        const layerLock = element(by.css("div.layerLock.hide"));
        BrowserUtil.element_WaitUntilReady(layerLock);
    }
}