import { browser, element, by, ExpectedConditions} from 'protractor';

declare global {
    interface Window {
        meta4:any;
    }
}

class M4JsapiUtils {

    private server: string;
    private user: string;
    private pass: string;
    private lang: string;

    constructor(server: string, user: string, pass: string, lang: string){
        this.server = server;
        this.user = user;
        this.pass = pass;
        this.lang = lang;
    }

    // PRIVATE
    private logonM4JsApi(): Promise<boolean>{
        const _user = this.user;
        const _pass = this.pass;
        const _lang = this.lang;

        return new Promise(resolve => {
            try{
                function logonM4JsApiScript(userId : string, userPass: string, lang:string ){
                    let _callback = arguments[arguments.length - 1];
            
                    function executeLogon(userId: string, userPass:string, lang:string){
                        try{
                            function onLogonSuccess(request){
                                if(request.getResult()){
                                    _callback(true);
                                }else{
                                    throw "Invalid User!"
                                }
                            }
            
                            function onLogonError(){
                                throw "Logon Error!"
                            }
            
                            const _m4Executor = new window.meta4.M4Executor();
                            _m4Executor.logon(userId, userPass, lang, onLogonSuccess, onLogonError);
                        }
                        catch(exception){
                            console.error("Exception: "+exception);
                            _callback(false);
                        }
                    }
            
                    executeLogon(userId, userPass, lang);
                    
                }

                browser.executeAsyncScript(logonM4JsApiScript, _user, _pass, _lang).then((logonStatus:boolean)=>{
                    resolve(logonStatus);
                }).then(()=>{
                    resolve(false);
                });

            }catch(exception){
                resolve(false);
            }
        });
    }

    private logoutM4JsApi(): Promise<boolean>{
        return new Promise(resolve => {
            function logoutM4JsApiScript(){
                let _callback = arguments[arguments.length - 1];
                
                try{
                    function onLogout(){
                        _callback(true);
                    }
        
                    const _m4Executor = new window.meta4.M4Executor();
                    _m4Executor.logout(onLogout,onLogout);
                }catch(exception){
                    _callback(false);
                }
            }
            browser.executeAsyncScript(logoutM4JsApiScript).then(function(){
                resolve(true);
            });
        });
    }

    private async waitForIframeM4JsApi(): Promise<any>{
        console.log("Waiting for M4JSAPI...");
        await browser.wait(ExpectedConditions.presenceOf(element(by.id("m4jsapi"))), 120000);
        console.log("M4JSAPI Loaded Success!");
    }

    // PUBLIC    
    public getAppUserFromSession(){
        try{
            function getIdAppUser(){
                return window.meta4.session.getIdAppUser();
            }

            return browser.executeScript(getIdAppUser);
        }catch(exception){
            throw "Error loading AppUser from session "+exception;
        }
    } 

    public async logonPortal(): Promise<boolean>{
        await browser.get(this.server);
        await this.waitForIframeM4JsApi();
        const logon = await this.logonM4JsApi();
        return logon;
    }

    public async logoutPortal(): Promise<boolean>{
        const logout = await this.logoutM4JsApi();
        return logout;
    }
}

export { M4JsapiUtils }