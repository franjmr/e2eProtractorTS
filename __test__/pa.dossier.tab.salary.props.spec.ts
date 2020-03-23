import { browser, logging } from "protractor";
import { M4JsapiUtils } from "../__m4utils__/m4JsapiUtils";
import { SessionStorageUtils } from "../__m4utils__/m4Utils";
import { EmployeeInformationPage } from "../__pages__/employee_information.po";
import visibilityJson from "../__mock__/visibility.json";
import confJson from "../__mock__/conf.json";
import confLocJson from "../__mock__/confLoc.json";
import { Level } from "selenium-webdriver/lib/logging";

describe("PA - Salary UI Properties Suite", function() {

    let m4JsApiUtils: M4JsapiUtils;
    let server: string;
    let empInfoPage: EmployeeInformationPage;
    let jsonProps: number[] = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    
    beforeAll(async(done)=>{
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

        browser.ignoreSynchronization = true;
        server = "http://jonsnow.meta4.com:13020";
        let appUser = "JCM_ESS";
        let passUser = "123";
        let lang = "2";
        
        empInfoPage = new EmployeeInformationPage(server);
        m4JsApiUtils = new M4JsapiUtils(server, appUser, passUser, lang );

        await m4JsApiUtils.logonPortal();

        done();
    });

    afterAll(async (done)=>{
        await m4JsApiUtils.logoutPortal()
        done();
    });
    
    jsonProps.forEach(value => {
        describe("PA - Salary UI probability '"+(value * 100)+"%' of properties to be false ", function() {

            const changeInJson = (id: string, obj: object): void => {
                if(!obj){
                    return;
                }
                
                for (const [k, v] of Object.entries(obj)) {
                  if (k === id) {
                    obj[k] = Math.random() >= value;
                  } else if (typeof v === "object") {
                    changeInJson(id, v);
                  }
                }
            };

            beforeAll(async(done)=>{
                changeInJson("showSection", visibilityJson);
                changeInJson("visible", confJson);
                changeInJson("visible", confLocJson);

                await SessionStorageUtils.setItem("visibility_1001M4EMPLOYEE", JSON.stringify(visibilityJson));
                await SessionStorageUtils.setItem("conf_1001M4EMPLOYEE", JSON.stringify(confJson));
                await SessionStorageUtils.setItem("confLoc_1001M4EMPLOYEE", JSON.stringify(confLocJson));
                
                await browser.manage().logs().get('browser');

                await empInfoPage.openAndWaitFor_PageIsReady();
                
                done();
            });
            
            it("Should load Employee Information Page", async()=>{
                const pageTitleElem = await empInfoPage.getPageTitle();
                expect(await pageTitleElem.getText()).toEqual("EMPLOYEE PORTFOLIO");
            });
            
            it("Should load container Tabs", async()=>{
                await empInfoPage.waitFor_TabsAreDisplayed();
                const containerTabs = await empInfoPage.getContainerTabs();
                expect(await containerTabs.isDisplayed()).toBeTruthy();
            });
            
            it("should load Tab Salary", async()=>{
                const tabSalaryElem = await empInfoPage.empInfoTabSalary.getElement_Tab();
                expect(await tabSalaryElem.isDisplayed()).toBeTruthy();
            });
            
            it("should load Tab Salary Container", async()=>{
                await empInfoPage.empInfoTabSalary.clickOn_Tab();
                const tabSalaryContainerElem = await empInfoPage.empInfoTabSalary.getElement_TabContainer();
                expect(await tabSalaryContainerElem.isDisplayed()).toBeTruthy();
            });

            it("should not load console log errors",async()=>{
                const browserLogs = await browser.manage().logs().get('browser');
                const errors: string[] = [];

                function getLogErrorMessage(value: logging.Entry){
                    return new Promise( resolve =>{
                        const _level = value.level;
                        if(_level.name == Level.SEVERE.name){
                            const _type = value.type;
                            const _msg = value.message;
                            console.log("LEVEL NAME "+_level.name + ". Type: "+_type+".Message: "+_msg);
                            errors.push(_msg);
                        }
                        resolve(true);
                    })
                }
                browserLogs.forEach(async (value: logging.Entry)=>{
                    await getLogErrorMessage(value);
                });

                expect(errors.length).toEqual(0);
            });
        });
    });
});