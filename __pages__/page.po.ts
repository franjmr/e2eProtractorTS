import { browser, element, by } from "protractor";
import { BrowserUtil } from "../__m4utils__/m4Utils";

export class Page {

    private TIMEOUT_DEFAULT = 10000;

    server : string;
    pageUrl : string;

    constructor(server: string, pageUrl:string){
        this.server = server;
        this.pageUrl = pageUrl;
    }

    async open():Promise<any>{
        await browser.get(this.server.concat(this.pageUrl), this.TIMEOUT_DEFAULT);
    }

    async openAndWaitFor_PageIsReady(): Promise<void>{
        await this.open();
        await this.waitForUntil_PageIsReady();
    }

    async refreshAndWaitFor_PageIsReady(): Promise<void>{
        await browser.refresh(this.TIMEOUT_DEFAULT);
        await this.waitForUntil_PageIsReady();
    }

    async waitForUntil_PageIsReady(): Promise<void>{
        await BrowserUtil.element_WaitUntilReady(element(by.css(".layerLock.hide")), 60000);
    }
}