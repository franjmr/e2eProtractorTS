import { EmployeeInformationTab } from "./empInfoTab.po";

export class EmployeeInformationTabCv extends EmployeeInformationTab{
    constructor() {
        super("tabCV", "tabCV_container", "containertabSalaryOtherItems", "btnAssistant_tabCV");
    }
}