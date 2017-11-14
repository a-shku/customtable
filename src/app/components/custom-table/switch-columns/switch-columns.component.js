
const switchColumns = {
  templateUrl: './app/components/custom-table/switch-columns/switch-columns.html',
  bindings: {
    switcher: '&'
  },
  controller: class SwitchColumnsController {
    constructor() {
      console.log('SWITCH');

    }


  }

};

export default switchColumns;