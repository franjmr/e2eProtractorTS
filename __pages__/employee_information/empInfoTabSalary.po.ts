import { EmployeeInformationTab } from "./empInfoTab.po";

export class EmployeeInformationTabSalary extends EmployeeInformationTab{
    constructor() {
        super("tabSalary", "tabSalary_container", "btnAssistant_tabSalary");
    }
}