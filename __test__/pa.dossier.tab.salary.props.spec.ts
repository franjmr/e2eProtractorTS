import { browser } from "protractor";
import { M4JsapiUtils } from "../__m4utils__/m4JsapiUtils";
import { SessionStorageUtils } from "../__m4utils__/m4Utils";
import { EmployeeInformationPage } from "../__pages__/employee_information.po";
import visibilityJson from "../__mock__/visibility.json";
import confJson from "../__mock__/conf.json";
import confLocJson from "../__mock__/confLoc.json";

describe("PA - Salary UI Properties Suite", function() {

    let m4JsApiUtils: M4JsapiUtils;
    let server: string;
    let empInfoPage: EmployeeInformationPage;
    let jsonProps: string[] = ['x', 'y', 'width', 'height'];
    
    beforeAll(async(done)=>{
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
    
    jsonProps.forEach(name => {
        describe(name, function() {
        
            beforeAll(async(done)=>{
                await SessionStorageUtils.setItem("visibility_1001M4EMPLOYEE", JSON.stringify(visibilityJson));
                await SessionStorageUtils.setItem("conf_1001M4EMPLOYEE", JSON.stringify(confJson));
                await SessionStorageUtils.setItem("confLoc_1001M4EMPLOYEE", JSON.stringify(confLocJson));
                
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
            
            it("should load Tab Salary",async()=>{
                const tabSalaryElem = await empInfoPage.empInfoTabSalary.getElement_Tab();
                expect(await tabSalaryElem.isDisplayed()).toBeTruthy();
            });
            
            it("should load Tab Salary Container",async()=>{
                await empInfoPage.empInfoTabSalary.clickOn_Tab();
                const tabSalaryContainerElem = await empInfoPage.empInfoTabSalary.getElement_TabContainer();
                expect(await tabSalaryContainerElem.isDisplayed()).toBeTruthy();
            });
        });
    });
});