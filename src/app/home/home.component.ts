import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mode = new FormControl('side');
 /*  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host)); */
 shouldRun = true;

 fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
}
