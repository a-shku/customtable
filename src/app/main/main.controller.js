export class MainController {
  constructor($window, $timeout, webDevTec, toastr, columns, data) {
    'ngInject';

    this.window = $window;
    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1510568737519;
    this.toastr = toastr;
    this.originColumns = JSON.parse(this.window.localStorage.getItem('show')) || angular.copy(columns);
    this.columns = columns;
    this.originData = data;
    this.data = data;
    this.result = '';
    this.$onInit();

  };

  $onInit() {
    this.hiddenColumns = [];
    this.columns = this.dataColumnsInit(this.originColumns, this.columns);
    //console.log(this.reverse('s1tar3t 2 hellow'));
  };

  dataColumnsInit(originCols, cols) {

    originCols.forEach((originItem, originIndex) => {

      if (!originItem.show) {
        for (let len = cols.length, i = len - 1; i > -1; i--) {
          if (cols[i].title == originItem.title) {
            cols.splice(i, 1);
          }
        }
      }

    });
    return cols;
  };

  saveToStorage(show, sort) {
    let showColumns = JSON.stringify(show);
    this.window.localStorage.setItem('show', showColumns);
  };

  hideColumn(col) {

    function getTurnerdOffIndex(arr, col) {
      return arr.map(function (item) { return item.title; }).indexOf(col.title);
    };

    let index = getTurnerdOffIndex(this.columns, col);
    let indexOrigin = getTurnerdOffIndex(this.originColumns, col);

    let turnedOffCol = this.columns[index];
    //turnedOffCol.show = false;
    //this.hiddenColumns.push(turnedOffCol);

    this.columns.splice(index, 1);

    this.originColumns[indexOrigin].show = false;

    this.saveToStorage(this.originColumns);
  };

  showColumn(col, index) {
    this.columns.splice(index, 0, col);
    this.saveToStorage(this.originColumns);
  };

  toggleColumns(col, index) {
    for (let i = 0, len = this.originColumns.length; i < len; i++) {
      if (this.originColumns[i].title === col.title) {
        this.originColumns[i].show = !this.originColumns[i].show;
        this.originColumns[i].show ? this.showColumn(col, index) : this.hideColumn(col);
        break;
      }
    }

  };



  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  };

  reverse(words) {
    console.log('words', words);

    let wordsArr = words.split(' ');
    let finalWordsArr = [];

    wordsArr.forEach((word) => {
      let regExp = /[^a-zA-Z]/g;
      let wordLetter = word.replace(regExp, '');
      wordLetter = wordLetter.split('');
      wordLetter = wordLetter.reverse();
      let finalWordArray = [];

      for (let len = word.length, i = len - 1; i > -1; i--) {
        let a = word[i];
        if (regExp.test(word[i])) {
          finalWordArray[i] = word[i];
        }
        else {
          finalWordArray[i] = wordLetter.pop();
        }
      }

      finalWordsArr.push(finalWordArray.join(''));
    });

    this.result = finalWordsArr.join(' ');
    return this.result;
  }



}
