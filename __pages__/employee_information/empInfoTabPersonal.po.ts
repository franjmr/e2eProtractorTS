import { EmployeeInformationTab } from "./empInfoTab.po";
import { PopupUpdateData } from "../popupUpdateData.po";

export class EmployeeInformationTabPersonal extends EmployeeInformationTab{
    popupUpdateInformation: PopupUpdateData;
    
    constructor() {
        super("tabPersonal", "tabPersonal_container", "containertabPersonalOtherItems",  "btnAssistant_tabPersonal");
        this.popupUpdateInformation = new PopupUpdateData();
    }
}