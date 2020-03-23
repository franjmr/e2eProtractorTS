import { browser, element, by } from "protractor";

import { WebElement } from "selenium-webdriver";
import { BrowserUtil } from "../__m4utils__/m4Utils";
import { EmployeeInformationTabSalary } from "./employee_information/empInfoTabSalary.po";
import { EmployeeInformationTabCv } from "./employee_information/empInfoTabCv.po";
import { EmployeeInformationTabJob } from "./employee_information/empInfoTabJob.po";
import { EmployeeInformationTabPersonal } from "./employee_information/empInfoTabPersonal.po";
import { Page } from "./page.po";

export class EmployeeInformationPage extends Page{

    empInfoTabSalary : EmployeeInformationTabSalary;
    empInfoTabCv : EmployeeInformationTabCv;
    empInfoTabJob : EmployeeInformationTabJob;
    empInfoTabPersonal : EmployeeInformationTabPersonal;

    constructor(server: string) {
        super(server, "/servlet/CheckSecurity/JSP/sse_g1_fl/employee_information.html?SSE=1");
        this.empInfoTabSalary = new EmployeeInformationTabSalary();
        this.empInfoTabCv = new EmployeeInformationTabCv();
        this.empInfoTabJob = new EmployeeInformationTabJob();
        this.empInfoTabPersonal = new EmployeeInformationTabPersonal();
    }

    public async waitFor_PageContentIsDisplayed(){
        await this.waitForUntil_PageIsReady();
        const pageMain = element(by.id("main"));
        const pageHeader = element(by.id("header"));
        const pageContent = element(by.id("content"));
        await BrowserUtil.element_WaitUntilReady(pageMain);
        await BrowserUtil.element_WaitUntilReady(pageHeader);
        await BrowserUtil.element_WaitUntilReady(pageContent);
        await this.waitFor_ProgressBarIsDisplayed();
        await this.waitFor_TabsAreDisplayed();
    }

    async waitFor_ProgressBarIsDisplayed(){
        const divProgressBar = element(by.id("divProgressBar"));
        await BrowserUtil.element_WaitUntilReady(divProgressBar);
    }

    async getPageTitle(): Promise<WebElement> {
        const pageTitle = element(by.id("pageTitle"));
        await BrowserUtil.element_WaitUntilReady(pageTitle);
        return pageTitle;
    }

    async getContainerTabs(): Promise<WebElement> {
        const containerTabs = element(by.id("containerTabs"));
        await BrowserUtil.element_WaitUntilReady(containerTabs);
        return containerTabs;
    }

    async waitFor_TabsAreDisplayed(): Promise<void> {
        await this.empInfoTabCv.waitForIsDisplayed_Tab();
        await this.empInfoTabJob.waitForIsDisplayed_Tab();
        await this.empInfoTabPersonal.waitForIsDisplayed_Tab();
        await this.empInfoTabSalary.waitForIsDisplayed_Tab();
    }
}
