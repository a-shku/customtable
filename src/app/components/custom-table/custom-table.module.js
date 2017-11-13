import customTableComponent from './custom-table.component';
//import customTableService from './custom-table.service';
//import customTableConstants from './custom-table.constants'

const customTableModule = angular.module('customTableModule', [])
  .component('customTable', customTableComponent)
  //.constant('customTableConstants', customTableConstants)
  //.customTableService('customTableService'.customTableService)
  .name;


export default customTableModule;