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
class Page {
    constructor(server, pageUrl) {
        this.server = server;
        this.pageUrl = pageUrl;
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(this.server.concat(this.pageUrl));
        });
    }
    openAndWaitFor_PageIsReady() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.open();
            yield this.waitForUntil_PageIsReady();
        });
    }
    waitForUntil_PageIsReady() {
        return __awaiter(this, void 0, void 0, function* () {
            const layerLock = protractor_1.element(protractor_1.by.css("div.layerLock.hide"));
            m4Utils_1.BrowserUtil.element_WaitUntilReady(layerLock);
        });
    }
}
exports.Page = Page;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fcGFnZXNfXy9wYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBRWxELG9EQUFxRDtBQUVyRCxNQUFhLElBQUk7SUFLYixZQUFZLE1BQWMsRUFBRSxPQUFjO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFSyxJQUFJOztZQUNOLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBRUssMEJBQTBCOztZQUM1QixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixNQUFNLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLHdCQUF3Qjs7WUFDMUIsTUFBTSxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUN4RCxxQkFBVyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtDQUNKO0FBdkJELG9CQXVCQyJ9