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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const m4Utils_1 = require("../__m4utils__/m4Utils");
const empInfoTabSalary_po_1 = require("./employee_information/empInfoTabSalary.po");
const empInfoTabCv_po_1 = require("./employee_information/empInfoTabCv.po");
const empInfoTabJob_po_1 = require("./employee_information/empInfoTabJob.po");
const empInfoTabPersonal_po_1 = require("./employee_information/empInfoTabPersonal.po");
const page_po_1 = require("./page.po");
class EmployeeInformationPage extends page_po_1.Page {
    constructor(server) {
        super(server, "/servlet/CheckSecurity/JSP/sse_g1_fl/employee_information.html?SSE=1");
        this.empInfoTabSalary = new empInfoTabSalary_po_1.EmployeeInformationTabSalary();
        this.empInfoTabCv = new empInfoTabCv_po_1.EmployeeInformationTabCv();
        this.empInfoTabJob = new empInfoTabJob_po_1.EmployeeInformationTabJob();
        this.empInfoTabPersonal = new empInfoTabPersonal_po_1.EmployeeInformationTabPersonal();
    }
    waitFor_PageContentIsDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForUntil_PageIsReady();
            const pageMain = protractor_1.element(protractor_1.by.id("main"));
            const pageHeader = protractor_1.element(protractor_1.by.id("header"));
            const pageContent = protractor_1.element(protractor_1.by.id("content"));
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(pageMain);
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(pageHeader);
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(pageContent);
            yield this.waitFor_ProgressBarIsDisplayed();
            yield this.waitFor_TabsAreDisplayed();
        });
    }
    waitFor_ProgressBarIsDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            const divProgressBar = protractor_1.element(protractor_1.by.id("divProgressBar"));
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(divProgressBar);
        });
    }
    getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            const pageTitle = protractor_1.element(protractor_1.by.id("pageTitle"));
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(pageTitle);
            return pageTitle;
        });
    }
    getContainerTabs() {
        return __awaiter(this, void 0, void 0, function* () {
            const containerTabs = protractor_1.element(protractor_1.by.id("containerTabs"));
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(containerTabs);
            return containerTabs;
        });
    }
    waitFor_TabsAreDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.empInfoTabCv.waitForIsDisplayed_Tab();
            yield this.empInfoTabJob.waitForIsDisplayed_Tab();
            yield this.empInfoTabPersonal.waitForIsDisplayed_Tab();
            yield this.empInfoTabSalary.waitForIsDisplayed_Tab();
        });
    }
}
exports.EmployeeInformationPage = EmployeeInformationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVfaW5mb3JtYXRpb24ucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9fX3BhZ2VzX18vZW1wbG95ZWVfaW5mb3JtYXRpb24ucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFHbEQsb0RBQXFEO0FBQ3JELG9GQUEwRjtBQUMxRiw0RUFBa0Y7QUFDbEYsOEVBQW9GO0FBQ3BGLHdGQUE4RjtBQUM5Rix1Q0FBaUM7QUFFakMsTUFBYSx1QkFBd0IsU0FBUSxjQUFJO0lBTzdDLFlBQVksTUFBYztRQUN0QixLQUFLLENBQUMsTUFBTSxFQUFFLHNFQUFzRSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksa0RBQTRCLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMENBQXdCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNENBQXlCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxzREFBOEIsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFWSw4QkFBOEI7O1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDdEMsTUFBTSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUMsTUFBTSxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxxQkFBVyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE1BQU0scUJBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCxNQUFNLHFCQUFXLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEQsTUFBTSxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztZQUM1QyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLDhCQUE4Qjs7WUFDaEMsTUFBTSxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLHFCQUFXLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0lBRUssWUFBWTs7WUFDZCxNQUFNLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLHFCQUFXLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEQsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRUssZ0JBQWdCOztZQUNsQixNQUFNLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNLHFCQUFXLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEQsT0FBTyxhQUFhLENBQUM7UUFDekIsQ0FBQztLQUFBO0lBRUssd0JBQXdCOztZQUMxQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNsRCxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3ZELE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDekQsQ0FBQztLQUFBO0NBQ0o7QUFsREQsMERBa0RDIn0=