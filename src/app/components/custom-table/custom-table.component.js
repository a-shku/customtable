//import template from './app/components/custom-table/custom-table.html';
import customTableController from './custom-table.controller'

const customTableComponent = {
  templateUrl: './app/components/custom-table/custom-table.html',
  controller: customTableController,
  bindings: {
    appColumns: '<',
    appData: '<'
  },
  // controller: class customTableController {
  //   constructor() {
  //     console.log('customTable', this.appColumns, this.appData);
  //   }
  //   // $onInit() {
  //   //   console.log('customTable');
  //   // }
  // }


};

export default customTableComponent;