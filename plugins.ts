import { ProtractorPlugin } from 'protractor';

declare var module: any;

let myPlugin: ProtractorPlugin = {
  addSuccess(info: {specName: string}) {
    console.log('on success: ' + info.specName);
  },
  onPageLoad() {
    this.addSuccess({specName: 'Hello, World!'});
  }
};

module.exports = myPlugin;