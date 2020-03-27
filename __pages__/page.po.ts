import { browser, element, by } from "protractor";
import { BrowserUtil } from "../__m4utils__/m4Utils";

export class Page {

    private TIMEOUT_DEFAULT = 10000;

    server : string;
    pageUrl : string;
    fullUrl: string;

    constructor(server: string, pageUrl:string){
        this.server = server;
        this.pageUrl = pageUrl;
        this.fullUrl = this.server.concat(this.pageUrl)
    }

    async open(): Promise<any>{
        await browser.get(this.fullUrl, this.TIMEOUT_DEFAULT);
    }

    async navigateToAndWaitFor_PageIsReady(): Promise<any>{
        await browser.navigate().to(this.fullUrl);
        await this.waitForUntil_PageIsReady();
    }

    async openAndWaitFor_PageIsReady(): Promise<void>{
        await this.open();
        await this.waitForUntil_PageIsReady();
    }

    async refreshAndWaitFor_PageIsReady(): Promise<void>{
        await browser.navigate().refresh();
        await this.waitForUntil_PageIsReady();
    }

    async waitForUntil_PageIsReady(): Promise<void>{    
        await BrowserUtil.element_WaitUntilInDom(element(by.css("div.layerLock.hide")));
    }
}