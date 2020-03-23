"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const m4JsapiUtils_1 = require("../__m4utils__/m4JsapiUtils");
const m4Utils_1 = require("../__m4utils__/m4Utils");
const employee_information_po_1 = require("../__pages__/employee_information.po");
const visibility_json_1 = __importDefault(require("../__mock__/visibility.json"));
const conf_json_1 = __importDefault(require("../__mock__/conf.json"));
const confLoc_json_1 = __importDefault(require("../__mock__/confLoc.json"));
describe("PA - Logon and load page Suite", function () {
    let m4JsApiUtils;
    let server;
    let empInfoPage;
    beforeAll((done) => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        server = "http://jonsnow.meta4.com:13020";
        let appUser = "JCM_ESS";
        let passUser = "123";
        let lang = "2";
        empInfoPage = new employee_information_po_1.EmployeeInformationPage(server);
        m4JsApiUtils = new m4JsapiUtils_1.M4JsapiUtils(server, appUser, passUser, lang);
        yield m4JsApiUtils.logonPortal();
        yield m4Utils_1.SessionStorageUtils.setItem("visibility_1001M4EMPLOYEE", JSON.stringify(visibility_json_1.default));
        yield m4Utils_1.SessionStorageUtils.setItem("conf_1001M4EMPLOYEE", JSON.stringify(conf_json_1.default));
        yield m4Utils_1.SessionStorageUtils.setItem("confLoc_1001M4EMPLOYEE", JSON.stringify(confLoc_json_1.default));
        yield empInfoPage.openAndWaitFor_PageIsReady();
        done();
    }));
    afterAll((done) => {
        m4JsApiUtils.logoutPortal().then(function () {
            done();
        });
    });
    it("Should load Employee Information Page", () => __awaiter(this, void 0, void 0, function* () {
        const pageTitleElem = yield empInfoPage.getPageTitle();
        expect(yield pageTitleElem.getText()).toEqual("EMPLOYEE PORTFOLIO");
    }));
    it("Should load container Tabs", () => __awaiter(this, void 0, void 0, function* () {
        yield empInfoPage.waitFor_TabsAreDisplayed();
        const containerTabs = yield empInfoPage.getContainerTabs();
        expect(yield containerTabs.isDisplayed()).toBeTruthy();
    }));
    it("should load Tab Salary", () => __awaiter(this, void 0, void 0, function* () {
        const tabSalaryElem = yield empInfoPage.empInfoTabSalary.getElement_Tab();
        expect(yield tabSalaryElem.isDisplayed()).toBeTruthy();
    }));
    it("should load Tab Salary Container", () => __awaiter(this, void 0, void 0, function* () {
        yield empInfoPage.empInfoTabSalary.clickOn_Tab();
        const tabSalaryContainerElem = yield empInfoPage.empInfoTabSalary.getElement_TabContainer();
        expect(yield tabSalaryContainerElem.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGEuZG9zc2llci50YWIuc2FsYXJ5LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9fX3Rlc3RfXy9wYS5kb3NzaWVyLnRhYi5zYWxhcnkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyw4REFBMkQ7QUFDM0Qsb0RBQTZEO0FBQzdELGtGQUErRTtBQUMvRSxrRkFBeUQ7QUFDekQsc0VBQTZDO0FBQzdDLDRFQUFtRDtBQUVuRCxRQUFRLENBQUMsZ0NBQWdDLEVBQUU7SUFFdkMsSUFBSSxZQUEwQixDQUFDO0lBQy9CLElBQUksTUFBYyxDQUFDO0lBQ25CLElBQUksV0FBb0MsQ0FBQztJQUV6QyxTQUFTLENBQUMsQ0FBTSxJQUFJLEVBQUMsRUFBRTtRQUNuQixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLEdBQUcsZ0NBQWdDLENBQUM7UUFDMUMsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFFZixXQUFXLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBRSxDQUFDO1FBRWxFLE1BQU0sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWpDLE1BQU0sNkJBQW1CLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMseUJBQWMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsTUFBTSw2QkFBbUIsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBUSxDQUFDLENBQUMsQ0FBQztRQUNuRixNQUFNLDZCQUFtQixDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXpGLE1BQU0sV0FBVyxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFFL0MsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7UUFDYixZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFPLEVBQUU7UUFDakQsTUFBTSxhQUFhLEdBQUcsTUFBTSxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFPLEVBQUU7UUFDdEMsTUFBTSxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM3QyxNQUFNLGFBQWEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzNELE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUMsR0FBTyxFQUFFO1FBQ2pDLE1BQU0sYUFBYSxHQUFHLE1BQU0sV0FBVyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUMsR0FBTyxFQUFFO1FBQzNDLE1BQU0sV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM1RixNQUFNLENBQUMsTUFBTSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9