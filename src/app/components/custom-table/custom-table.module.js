import customTableComponent from './custom-table.component';
//import customTableService from './custom-table.service';
import customTableConstants from './custom-table.constants';
import appSwitchColumns from './switch-columns/switch-columns.component'

const customTableModule = angular.module('customTableModule', [])
  .component('customTable', customTableComponent)
  .constant('customTableConstants', customTableConstants)
  .component('appSwitchColumns', appSwitchColumns)
  //.customTableService('customTableService'.customTableService)
  .name;



export default customTableModule;