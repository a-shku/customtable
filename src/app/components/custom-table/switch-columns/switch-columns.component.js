
const switchColumns = {
  templateUrl: './app/components/custom-table/switch-columns/switch-columns.html',
  bindings: {
    appToggle: '&',
    appColumns: '<'
  },
  controller: class SwitchColumnsController {
    constructor($mdDialog) {
      'ngInject';

      this.$mdDialog = $mdDialog;
      this.originatorEv;
      this.notificationsEnabled = true;
    }

    $onInit() {
      // $('#toggleList').click(function (e) {
      //   console.log('click', e);

      // })
    }

    $onChanges() {

    }

    //     

    openMenu($mdMenu, ev) {
      this.originatorEv = ev;
      $mdMenu.open(ev)
    };


    toggleNotifications() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };


    //


  }

};

export default switchColumns;