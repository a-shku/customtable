export class MainController {
  constructor($timeout, webDevTec, toastr, columns, data) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1510568737519;
    this.toastr = toastr;
    this.originColumns = columns;
    this.columns = columns;
    this.originData = data;
    this.data = data;
    this.activate($timeout, webDevTec);
    this.$onInit();

  }

  $onInit() {
    console.log('data');
    this.data = this.dataColumnsInit(this.columns, this.data);

  }

  dataColumnsInit(cols, data) {
    cols.forEach((item, index) => {
      if (!item.show) {
        data.forEach((dataItem, dataIndex) => {
          delete dataItem[item.title];
        })
      }
    })
    console.log(data);
    return data;
  }

  hideColumn(col) {
    let index = this.columns.map(function (item) { return item.title; }).indexOf(col.title);
    this.columns[index].show = false;
    this.updateVisibilityColumns(this.columns[index])
    this.columns.splice(index, 1);

  };


  updateVisibilityColumns(col) {
    this.data = this.data.map(item => {
      delete item[col.title]
      return item

    });
    console.log('visibility', this.data);
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
