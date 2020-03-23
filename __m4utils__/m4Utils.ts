import {browser, element, by, ExpectedConditions, protractor, ElementFinder} from 'protractor';

export class BrowserUtil {
    constructor() {
    }

    static async element_WaitUntilReady(element: ElementFinder) {
        await browser.wait(ExpectedConditions.presenceOf(element), 60000);
        await browser.wait(ExpectedConditions.visibilityOf(element), 60000);
    };


    static async element_WaitUntilNotInDom(element: ElementFinder) {
        await browser.wait(ExpectedConditions.stalenessOf(element), 60000);
        await browser.wait(ExpectedConditions.invisibilityOf(element), 60000);
    };

    static getEnv(): Environment {
        const baseUrl = browser.params.baseUrl;

        if (baseUrl.indexOf('qaenvurl') != -1) {
            return Environment.QA;
        } else if (baseUrl.indexOf('prodenvurl') != -1) {
            return Environment.PROD;
        } else {
            return Environment.LOCAL;
        }
    }

    static getBaseUrl(): String {
        return browser.params.baseUrl;
    }
}

export class SessionStorageUtils {

    constructor(){}

    static setItem(itemKey: string, itemValue: string): Promise<boolean>{
        return new Promise(resolve => {
            browser.executeScript("return window.sessionStorage.setItem('"+itemKey+"','"+itemValue+"');").then(()=>{
                resolve(true);
            });
        });
    }

    static getItem(itemKey: string): Promise<string>{
        return new Promise(resolve => {
            browser.executeScript('return window.sessionStorage.getItem("'+itemKey+'");').then((value:string)=>{
                resolve(value);
            });
        });
    }
}

export enum Environment {
    QA = 'qa',
    PROD = 'prod',
    LOCAL = 'local'
}