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
    this.sortType = 'secondData',
      this.sortReverse = false
    this.sorting();
  }


  // $onInit() {
  //   this.sorting = function (value) {
  //     this.sortType = value;
  //   }
  // }
  sorting(value) {
    this.sortType = value;
  }




};

