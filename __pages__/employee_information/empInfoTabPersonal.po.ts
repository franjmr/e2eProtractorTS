import { EmployeeInformationTab } from "./empInfoTab.po";

export class EmployeeInformationTabPersonal extends EmployeeInformationTab{
    constructor() {
        super("tabPersonal", "tabPersonal_container", "containertabSalaryOtherItems",  "btnAssistant_tabPersonal");
    }
}