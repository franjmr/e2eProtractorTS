import { EmployeeInformationTab } from "./empInfoTab.po";
import { PopupUpdateData } from "../popupUpdateData.po";

export class EmployeeInformationTabSalary extends EmployeeInformationTab{
    popupUpdateInformation: PopupUpdateData;
    
    constructor() {
        super("tabSalary", "tabSalary_container", "btnAssistant_tabSalary");
        this.popupUpdateInformation = new PopupUpdateData();
    }
}