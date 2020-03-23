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
class M4JsapiUtils {
    constructor(server, user, pass, lang) {
        this.server = server;
        this.user = user;
        this.pass = pass;
        this.lang = lang;
    }
    // PRIVATE
    logonM4JsApi() {
        const _user = this.user;
        const _pass = this.pass;
        const _lang = this.lang;
        return new Promise(resolve => {
            try {
                function logonM4JsApiScript(userId, userPass, lang) {
                    let _callback = arguments[arguments.length - 1];
                    function executeLogon(userId, userPass, lang) {
                        try {
                            function onLogonSuccess(request) {
                                if (request.getResult()) {
                                    _callback(true);
                                }
                                else {
                                    throw "Invalid User!";
                                }
                            }
                            function onLogonError() {
                                throw "Logon Error!";
                            }
                            const _m4Executor = new window.meta4.M4Executor();
                            _m4Executor.logon(userId, userPass, lang, onLogonSuccess, onLogonError);
                        }
                        catch (exception) {
                            console.error("Exception: " + exception);
                            _callback(false);
                        }
                    }
                    executeLogon(userId, userPass, lang);
                }
                protractor_1.browser.executeAsyncScript(logonM4JsApiScript, _user, _pass, _lang).then((logonStatus) => {
                    resolve(logonStatus);
                }).then(() => {
                    resolve(false);
                });
            }
            catch (exception) {
                resolve(false);
            }
        });
    }
    logoutM4JsApi() {
        return new Promise(resolve => {
            function logoutM4JsApiScript() {
                let _callback = arguments[arguments.length - 1];
                try {
                    function onLogout() {
                        _callback(true);
                    }
                    const _m4Executor = new window.meta4.M4Executor();
                    _m4Executor.logout(onLogout, onLogout);
                }
                catch (exception) {
                    _callback(false);
                }
            }
            protractor_1.browser.executeAsyncScript(logoutM4JsApiScript).then(function () {
                resolve(true);
            });
        });
    }
    waitForIframeM4JsApi() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Waiting for M4JSAPI...");
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.id("m4jsapi"))), 120000);
            console.log("M4jsapi Loaded Succes!");
        });
    }
    // PUBLIC    
    getAppUserFromSession() {
        try {
            function getIdAppUser() {
                return window.meta4.session.getIdAppUser();
            }
            return protractor_1.browser.executeScript(getIdAppUser);
        }
        catch (exception) {
            throw "Error loading AppUser from session " + exception;
        }
    }
    logonPortal() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(this.server);
            yield this.waitForIframeM4JsApi();
            const logon = yield this.logonM4JsApi();
            return logon;
        });
    }
    logoutPortal() {
        return __awaiter(this, void 0, void 0, function* () {
            const logout = yield this.logoutM4JsApi();
            return logout;
        });
    }
}
exports.M4JsapiUtils = M4JsapiUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibTRKc2FwaVV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vX19tNHV0aWxzX18vbTRKc2FwaVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFFO0FBUXJFLE1BQU0sWUFBWTtJQU9kLFlBQVksTUFBYyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsVUFBVTtJQUNGLFlBQVk7UUFDaEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixJQUFHO2dCQUNDLFNBQVMsa0JBQWtCLENBQUMsTUFBZSxFQUFFLFFBQWdCLEVBQUUsSUFBVztvQkFDdEUsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRWhELFNBQVMsWUFBWSxDQUFDLE1BQWMsRUFBRSxRQUFlLEVBQUUsSUFBVzt3QkFDOUQsSUFBRzs0QkFDQyxTQUFTLGNBQWMsQ0FBQyxPQUFPO2dDQUMzQixJQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBQztvQ0FDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lDQUNuQjtxQ0FBSTtvQ0FDRCxNQUFNLGVBQWUsQ0FBQTtpQ0FDeEI7NEJBQ0wsQ0FBQzs0QkFFRCxTQUFTLFlBQVk7Z0NB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