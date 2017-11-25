import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForOf } from '@angular/common';

export interface Result {
  author : string;
  date : number;
  image : string;
  title : string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  films: Result[];
  ress: Result[];

  constructor(public navCtrl: NavController) {
    this.films = [
      {
        author: 'Servan',
        date: 2010,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Servan'
      },
      {
        author: 'Zoran',
        date: 2020,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Zorank'
      },
      {
        author: 'Charlotk',
        date: 2030,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Charot'
      },
      {
        author: 'Chanet',
        date: 2040,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Chanet'
      }]
  }

  itemSelected(item: Result) {
    console.log("Selected Item", item);
  }


  initRes(){
    this.films = [
      {
        author: 'Servan',
        date: 2010,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Servan'
      },
      {
        author: 'Zoran',
        date: 2020,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Zorankz'
      },
      {
        author: 'Charlotkz',
        date: 2030,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Charot'
      },
      {
        author: 'Chanet',
        date: 2040,
        image: 'http://lorempixel.com/300/300',
        title: 'despicable Chanet'
      }]
  }

  getItems(ev) {
    // Reset items back to all of the items
    // this.initRes();
    // this.ress = null;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ress = this.films.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.author.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
    else{
      this.ress = [];
    }
  }
}
