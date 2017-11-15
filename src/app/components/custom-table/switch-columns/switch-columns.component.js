
const switchColumns = {
  templateUrl: './app/components/custom-table/switch-columns/switch-columns.html',
  bindings: {
    switcher: '&',
    appColumns: '<'
  },
  controller: class SwitchColumnsController {
    constructor($mdDialog) {
      'ngInject';
      console.log('SWITCH', this.appColumns);

      this.$mdDialog = $mdDialog;
      this.originatorEv;
      this.notificationsEnabled = true;
    }

    $onChanges() {
      console.log('chh', this.appColumns);
    }

    //     

    openMenu($mdMenu, ev) {
      console.log('$mdDialog', this.$mdDialog)
      this.originatorEv = ev;
      $mdMenu.open(ev)
    };


    toggleNotifications() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    redial() {
      this.$mdDialog.show(
        this.$mdDialog.alert()
          .targetEvent(this.originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );

      this.originatorEv = null;
    };

    checkVoicemail() {
      // This never happens.
    };
    //


  }

};

export default switchColumns;