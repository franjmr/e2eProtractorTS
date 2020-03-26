import { M4JsapiUtils } from "../__m4utils__/m4JsapiUtils";
import { SessionStorageUtils, BrowserUtil, JSON_Utils } from "../__m4utils__/m4Utils";
import { EmployeeInformationPage } from "../__pages__/employee_information.po";
import visibilityJson from "../__mock__/visibility.json";
import confJson from "../__mock__/conf.json";
import confLocJson from "../__mock__/confLoc.json";
import { browser, element, by, ElementFinder } from "protractor";

describe("PA - Personal UI Properties Suite", function() {

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
            
            beforeAll(async()=>{
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
                
                await empInfoPage.openAndWaitFor_PageIsReady();
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
                await empInfoPage.empInfoTabPersonal.clickOn_Tab().then(()=>{
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

            it("And I should check all possible data modification options", async()=>{
                await empInfoPage.empInfoTabPersonal.clickOn_ButtonUpdateInformation();
                await empInfoPage.empInfoTabPersonal.popupUpdateInformation.waitForm_PopUpReady();

                await empInfoPage.empInfoTabPersonal.popupUpdateInformation.clickOn_WidgetSelectAssistantLeft();
                const elemOptions = await empInfoPage.empInfoTabPersonal.popupUpdateInformation.getElems_WidgetSelectListOptionsAssistantLeft()
                
                for(let optIdx = 0; optIdx < elemOptions.length; optIdx++) {
                    try{
                        if(optIdx > 0){
                            await empInfoPage.empInfoTabPersonal.popupUpdateInformation.clickOn_WidgetSelectAssistantLeft();
                            await empInfoPage.empInfoTabPersonal.popupUpdateInformation.getElems_WidgetSelectListOptionsAssistantLeft()
                        }
                        
                        const elemOption = elemOptions[optIdx];
    
                        await BrowserUtil.element_WaitUntilBeClickable(elemOption);
                        await elemOption.click();
                        await empInfoPage.waitForUntil_PageIsReady();

                        const popUpError = element(by.id("m4-error"));
                        await popUpError.isDisplayed().then(async()=>{
                            expect(await popUpError.getText()).toBeFalsy;
                        }).catch(async()=>{
                            const noActions = element(by.cssContainingText('#assistantLeftContent', 'No actions are available for these data'));
                        
                            await noActions.isDisplayed().then( async () =>{
                                expect(true).toBeTruthy();
                            }).catch(async ()=>{
                                const actions = await empInfoPage.empInfoTabPersonal.popupUpdateInformation.getElems_BlockActionContent();
                                expect(actions.length).toBeGreaterThan(0);
                            });
                        })
                    }catch(error){
                        console.warn("=== WARNING!- Loop Idx: "+optIdx+" - Error: "+error);
                        continue;
                    }finally{
                        browser.sleep(500);
                    }
                }
            });
        });
    });
});