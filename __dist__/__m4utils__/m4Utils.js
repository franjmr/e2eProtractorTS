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
class BrowserUtil {
    constructor() {
    }
    static element_WaitUntilReady(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(element), 60000);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(element), 60000);
        });
    }
    ;
    static element_WaitUntilNotInDom(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(element), 60000);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.invisibilityOf(element), 60000);
        });
    }
    ;
    static getEnv() {
        const baseUrl = protractor_1.browser.params.baseUrl;
        if (baseUrl.indexOf('qaenvurl') != -1) {
            return Environment.QA;
        }
        else if (baseUrl.indexOf('prodenvurl') != -1) {
            return Environment.PROD;
        }
        else {
            return Environment.LOCAL;
        }
    }
    static getBaseUrl() {
        return protractor_1.browser.params.baseUrl;
    }
}
exports.BrowserUtil = BrowserUtil;
class SessionStorageUtils {
    constructor() { }
    static setItem(itemKey, itemValue) {
        return new Promise(resolve => {
            protractor_1.browser.executeScript("return window.sessionStorage.setItem('" + itemKey + "','" + itemValue + "');").then(() => {
                resolve(true);
            });
        });
    }
    static getItem(itemKey) {
        return new Promise(resolve => {
            protractor_1.browser.executeScript('return window.sessionStorage.getItem("' + itemKey + '");').then((value) => {
                resolve(value);
            });
        });
    }
}
exports.SessionStorageUtils = SessionStorageUtils;
var Environment;
(function (Environment) {
    Environment["QA"] = "qa";
    Environment["PROD"] = "prod";
    Environment["LOCAL"] = "local";
})(Environment = exports.Environment || (exports.Environment = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibTRVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fbTR1dGlsc19fL200VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0Y7QUFFL0YsTUFBYSxXQUFXO0lBQ3BCO0lBQ0EsQ0FBQztJQUVELE1BQU0sQ0FBTyxzQkFBc0IsQ0FBQyxPQUFzQjs7WUFDdEQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUdGLE1BQU0sQ0FBTyx5QkFBeUIsQ0FBQyxPQUFzQjs7WUFDekQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVGLE1BQU0sQ0FBQyxNQUFNO1FBQ1QsTUFBTSxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRXZDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNuQyxPQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekI7YUFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDNUMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDSCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVU7UUFDYixPQUFPLG9CQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUE5QkQsa0NBOEJDO0FBRUQsTUFBYSxtQkFBbUI7SUFFNUIsZ0JBQWMsQ0FBQztJQUVmLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZSxFQUFFLFNBQWlCO1FBQzdDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsb0JBQU8sQ0FBQyxhQUFhLENBQUMsd0NBQXdDLEdBQUMsT0FBTyxHQUFDLEtBQUssR0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtnQkFDbkcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQzFCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsb0JBQU8sQ0FBQyxhQUFhLENBQUMsd0NBQXdDLEdBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVksRUFBQyxFQUFFO2dCQUMvRixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQW5CRCxrREFtQkM7QUFFRCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsd0JBQVMsQ0FBQTtJQUNULDRCQUFhLENBQUE7SUFDYiw4QkFBZSxDQUFBO0FBQ25CLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QiJ9