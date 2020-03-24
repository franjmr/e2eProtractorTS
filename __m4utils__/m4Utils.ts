import {browser, element, by, ExpectedConditions, protractor, ElementFinder} from 'protractor';
import { logging } from 'selenium-webdriver';
import { Level } from 'selenium-webdriver/lib/logging';

export class BrowserUtil {
    constructor() {}

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

    static async cleanConsoleLog(){
        await browser.manage().logs().get('browser');
    }

    static async getConsoleLogError(){
        const browserLogs = await browser.manage().logs().get('browser');
        const logErrorMessages: string[] = [];

        function getLogErrorMessage(value: logging.Entry){
            return new Promise( resolve =>{
                const _level = value.level;
                if(_level.name == Level.SEVERE.name){
                    const _type = value.type;
                    const _msg = value.message;
                    const _formattedMsg = "LEVEL: "+_level.name + ". Type: "+_type+".Message: "+_msg;
                    logErrorMessages.push(_formattedMsg);
                }
                resolve(true);
            });
        }

        browserLogs.forEach(async (value: logging.Entry)=>{
            await getLogErrorMessage(value);
        });

        return logErrorMessages;
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

export class JSON_Utils {
    constructor() {}

    static setBooleanRandomValue(id: string, obj: object, randomCompareValue?: number): void {
        if(!obj){
            return;
        }
        
        for (const [k, v] of Object.entries(obj)) {
            if (k === id) {
                obj[k] = Math.random() >= randomCompareValue? randomCompareValue: 0.5;
            } else if (typeof v === "object") {
                JSON_Utils.setBooleanRandomValue(id, v, randomCompareValue);
            }
        }
    }
}