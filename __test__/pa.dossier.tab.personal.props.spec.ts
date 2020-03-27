import { M4JsapiUtils } from "../__m4utils__/m4JsapiUtils";
import { SessionStorageUtils, BrowserUtil, JSON_Utils } from "../__m4utils__/m4Utils";
import { EmployeeInformationPage } from "../__pages__/employee_information.po";
import visibilityJson from "../__mock__/visibility.json";
import confJson from "../__mock__/conf.json";
import confLocJson from "../__mock__/confLoc.json";
import { element, by, browser } from "protractor";
import browserLogs from "protractor-browser-logs";

describe("PA - Tab Personal: Configuration Forms suite", function() {

    let m4JsApiUtils: M4JsapiUtils;
    let empInfoPage: EmployeeInformationPage;
    
    const falseProbability: number[] = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

    beforeAll(async()=>{
        let server = "http://jonsnow.meta4.com:13020";
        let appUser = "JCM_ESS";
        let passUser = "123";
        let lang = "2";
        
        empInfoPage = new EmployeeInformationPage(server);
        m4JsApiUtils = new M4JsapiUtils(server, appUser, passUser, lang );

        await m4JsApiUtils.logonPortal();
    });

    afterAll(async()=>{
        await m4JsApiUtils.logoutPortal();
    });
    
    falseProbability.forEach( async (probability) => {
        describe("PA - Personal UI probability '"+(probability * 100)+"%' of properties to be false ", function() {
            
            let logs: browserLogs.BrowserLogs;

            beforeAll(async()=>{
                logs = browserLogs(browser);
                logs.reset();
                logs.ignore(logs.or(logs.DEBUG, logs.INFO));
                logs.ignore(logs.or(logs.LOG, logs.WARNING));

                await SessionStorageUtils.clear();

                JSON_Utils.setBooleanRandomValue("showTab", visibilityJson, probability);
                JSON_Utils.setBooleanRandomValue("showSection", visibilityJson, probability);
                JSON_Utils.setBooleanRandomValue("visible", confJson, probability);
                JSON_Utils.setBooleanRandomValue("editable", confJson, probability);
                JSON_Utils.setBooleanRandomValue("visible", confLocJson, probability);
                JSON_Utils.setBooleanRandomValue("editable", confLocJson, probability);

                await SessionStorageUtils.setItem("visibility_1001M4EMPLOYEE", JSON.stringify(visibilityJson));
                await SessionStorageUtils.setItem("conf_1001M4EMPLOYEE", JSON.stringify(confJson));
                await SessionStorageUtils.setItem("confLoc_1001M4EMPLOYEE", JSON.stringify(confLocJson));
                
                await empInfoPage.navigateToAndWaitFor_PageIsReady();
                await empInfoPage.refreshAndWaitFor_PageIsReady();
            });

            afterAll(async()=>{
                await SessionStorageUtils.removeItem("visibility_1001M4EMPLOYEE");
                await SessionStorageUtils.removeItem("conf_1001M4EMPLOYEE");
                await SessionStorageUtils.removeItem("confLoc_1001M4EMPLOYEE");
            });

            it("Given I navigate to the Employee Information Page", async()=>{
                const pageTitleElem = await empInfoPage.getPageTitle();
                expect(await pageTitleElem.getText()).toEqual("EMPLOYEE PORTFOLIO");
            });
                        
            it("And the Personal Tab is displayed", async()=>{
                const tabSalaryElem = await empInfoPage.empInfoTabPersonal.getElement_Tab();
                expect(await tabSalaryElem.isDisplayed()).toBeTruthy();
            });
            
            it("When I click on the Personal Tab", async()=>{
                await empInfoPage.empInfoTabPersonal.clickOn_Tab().then(async()=>{
                    await empInfoPage.waitForUntil_PageIsReady();
                    expect(true).toBeTruthy()
                }).catch(()=>{
                    expect(false).toBeTruthy();
                });
            });

            it("Then I should view the Personal Tab content", async()=>{
                const tabSalaryCntnr = await empInfoPage.empInfoTabPersonal.getElement_TabContainer();
                const tabSalaryCntnrOtherElem = await empInfoPage.empInfoTabPersonal.getElement_TabContainerOtherItems();
                const buttonUpdateInformation = await empInfoPage.empInfoTabPersonal.getElement_ButtonUpdateInformation();
                expect(await tabSalaryCntnr.isDisplayed()).toBeTruthy();
                expect(await tabSalaryCntnrOtherElem.isDisplayed()).toBeTruthy();
                expect(await buttonUpdateInformation.isDisplayed()).toBeTruthy();
            });

            it("And I should click on Update Information Button", async()=>{
                await empInfoPage.empInfoTabPersonal.clickOn_ButtonUpdateInformation().then(async()=>{
                    await empInfoPage.waitForUntil_PageIsReady();
                    expect(true).toBeTruthy()
                }).catch(()=>{
                    expect(false).toBeTruthy();
                });
            });

            it("And I should select all possible data modification options", async()=>{
                await empInfoPage.empInfoTabPersonal.popupUpdateInformation.clickOn_WidgetSelectAssistantLeft();
                const elemOptions = await empInfoPage.empInfoTabPersonal.popupUpdateInformation.getElems_WidgetSelectListOptionsAssistantLeft()
                
                for(let optIdx = 0; optIdx < elemOptions.length; optIdx++) {
                    try{
                        if(optIdx > 0){
                            await empInfoPage.empInfoTabPersonal.popupUpdateInformation.clickOn_WidgetSelectAssistantLeft();
                            await empInfoPage.empInfoTabPersonal.popupUpdateInformation.getElems_WidgetSelectListOptionsAssistantLeft()
                        }

                        await BrowserUtil.element_clickOn(elemOptions[optIdx])
                        await empInfoPage.waitForUntil_PageIsReady();

                        const noActionsLabel = element(by.cssContainingText('#assistantLeftContent', 'No actions are available for these data'));
                        await noActionsLabel.isDisplayed().then( async (isDisplayed) =>{
                            expect(isDisplayed).toBeTruthy();
                        }).catch(async ()=>{
                            const actions = await empInfoPage.empInfoTabPersonal.popupUpdateInformation.getElems_BlockActionContent();
                            expect(actions.length).toBeGreaterThan(0);
                            for(let actionIdx = 0; actionIdx < actions.length; actionIdx++) {
                                await BrowserUtil.element_clickOn(actions[actionIdx]);
                                await empInfoPage.waitForUntil_PageIsReady();
                                await browser.sleep(500);
                            }
                        });
                    }catch(error){
                        console.warn("=== WARNING!- Loop Idx: "+optIdx+" - Error: "+error);
                        continue;
                    }finally{
                        await browser.sleep(1000);
                    }
                }
            });

            it("And should not appear message errors in the browser console", ()=>{
                return logs.verify();
            });
        });
    });
});