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
const m4Utils_1 = require("../../__m4utils__/m4Utils");
class EmployeeInformationTab {
    constructor(idTab, idTabContainder) {
        this.elemTab = protractor_1.element(protractor_1.by.id(idTab));
        this.elemTabContainer = protractor_1.element(protractor_1.by.id(idTabContainder));
    }
    waitForIsDisplayed_Tab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(this.elemTab);
        });
    }
    waitForIsDisplayed_TabContainer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(this.elemTabContainer);
        });
    }
    clickOn_Tab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield m4Utils_1.BrowserUtil.element_WaitUntilReady(this.elemTab);
            yield this.elemTab.click();
        });
    }
    getElement_Tab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForIsDisplayed_Tab();
            return this.elemTab;
        });
    }
    getElement_TabContainer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForIsDisplayed_TabContainer();
            return this.elemTabContainer;
        });
    }
}
exports.EmployeeInformationTab = EmployeeInformationTab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wSW5mb1RhYi5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL19fcGFnZXNfXy9lbXBsb3llZV9pbmZvcm1hdGlvbi9lbXBJbmZvVGFiLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdEO0FBR3hELHVEQUF3RDtBQUV4RCxNQUFhLHNCQUFzQjtJQUsvQixZQUFZLEtBQWEsRUFBRSxlQUF1QjtRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUssc0JBQXNCOztZQUN4QixNQUFNLHFCQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtJQUVLLCtCQUErQjs7WUFDakMsTUFBTSxxQkFBVyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsTUFBTSxxQkFBVyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssY0FBYzs7WUFDaEIsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztLQUFBO0lBRUssdUJBQXVCOztZQUN6QixNQUFNLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7S0FBQTtDQUVKO0FBakNELHdEQWlDQyJ9