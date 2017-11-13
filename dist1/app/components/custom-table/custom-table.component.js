//import template from './app/components/custom-table/custom-table.html';
import customTableController from './custom-table.controller';

const customTableComponent = {
  templateUrl: './app/components/custom-table/custom-table.html',
  controllerUrl: customTableController,

  bindings: {
    appColumns: '<',
    appData: '<'
  }


};

export default customTableComponent;