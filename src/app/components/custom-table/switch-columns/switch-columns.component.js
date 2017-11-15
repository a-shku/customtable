
const switchColumns = {
  templateUrl: './app/components/custom-table/switch-columns/switch-columns.html',
  bindings: {
    switcher: '&',
    appColumns: '<'
  },
  controller: class SwitchColumnsController {
    constructor() {
      console.log('SWITCH', this.appColumns);

    }

    $onChanges() {
      console.log('chh', this.appColumns);
    }


  }

};

export default switchColumns;