export default class CustomTableController {

  /*get sortType() {
    console.log('get', this.$value);
    return this.$value;
  }

  set sortType(value) {
    this.$value = value;
    console.log('set', value);
  }*/



  constructor() {
    //'ngInject';
    this.sortType = ''
    this.sortReverse = false
    this.sorting();
  }


  $onInit() {
    this.sortType = 'firstData'
  }

  sorting(value) {
    this.sortType == value || this.sortType == '-' + value ? this.sortReverse = !this.sortReverse : this.sortType = value;
  }




};

