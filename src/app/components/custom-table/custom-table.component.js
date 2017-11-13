//import template from './app/components/custom-table/custom-table.html';
import customTableController from './custom-table.controller'

const customTableComponent = {
  templateUrl: './app/components/custom-table/custom-table.html',
  controllerUrl: customTableController,
  //template: '<div>1111111111111111111111</div>',
  bindings: {
    appColumns: '<',
    appData: '<'
  },
  // controller: class customTableController {
  //   constructor() {
  //     console.log('customTable');
  //   }
  //   $onInit() {
  //     console.log('customTable');
  //   }
  // }


};

export default customTableComponent;