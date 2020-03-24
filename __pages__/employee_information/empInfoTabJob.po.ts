import { EmployeeInformationTab } from "./empInfoTab.po";

export class EmployeeInformationTabJob extends EmployeeInformationTab{
    constructor() {
        super("tabJob", "tabJob_container", "containertabSalaryOtherItems", "btnAssistant_tabJob");
    }
}