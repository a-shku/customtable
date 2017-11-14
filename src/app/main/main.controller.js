export class MainController {
  constructor($timeout, webDevTec, toastr, columns, data) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1510568737519;
    this.toastr = toastr;
    this.columns = columns;
    this.data = data;
    this.activate($timeout, webDevTec);
  }

  hideColumn(col) {
    let index = this.columns.map(function (item) { return item.title; }).indexOf(col.title);
    console.log('hideColumn', col.title, index);
    this.columns[index].show = false;
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
