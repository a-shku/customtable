export class MainController {
  constructor($timeout, webDevTec, toastr, columns, data) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1510568737519;
    this.toastr = toastr;
    this.originColumns = angular.copy(columns);
    this.columns = columns;
    this.originData = data;
    this.data = data;
    this.activate($timeout, webDevTec);
    this.$onInit();

  }

  $onInit() {
    this.hiddenColumns = [];
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

    return data;
  }

  hideColumn(col) {
    //let index = this.columns.map(function (item) { return item.title; }).indexOf(col.title);

    function getTurnerdOffIndex(arr, col) {
      return arr.map(function (item) { return item.title; }).indexOf(col.title);
    };

    let index = getTurnerdOffIndex(this.columns, col);
    let indexOrigin = getTurnerdOffIndex(this.originColumns, col);

    //this.updateVisibilityData(this.columns[index])
    let turnedOffCol = this.columns[index];
    turnedOffCol.show = false;
    this.hiddenColumns.push(turnedOffCol);

    this.columns.splice(index, 1);

    //let indexOrigin = this.originColumns.map(function (item) { return item.title; }).indexOf(col.title);
    this.originColumns[indexOrigin].show = false;

  };

  showColumn(col) {
    this.columns.push(col);
  }

  toggleColumns(col) {
    for (let i = 0, len = this.originColumns.length; i < len - 1; i++) {
      if (this.originColumns[i].title === col.title) {
        this.originColumns[i].show = !this.originColumns[i].show;

        this.originColumns[i].show ? this.showColumn(col) : this.hideColumn(col);

        console.log(this.originColumns[i]);
        break;
      }
    }

  }


  // updateVisibilityData(col) {
  //   this.data = this.data.map(item => {
  //     delete item[col.title]
  //     return item

  //   });
  // }

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
