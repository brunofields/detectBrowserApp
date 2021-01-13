import { Component, OnInit } from '@angular/core';
import * as browser from 'detect-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  browserData: BrowserModel;
  isCompatibleHandler: boolean;
  isCompatible: boolean;

  constructor() {
    this.browserData = browser.detect();
  }

  ngOnInit(): void {}

  userAgent() {
    alert(browser.browserName(navigator.userAgent));
  }

  verifyBrowser() {
    browserConst.forEach(item => {
      this.isCompatibleHandler = this.browserData.name === item;
      if (this.isCompatibleHandler) {
        this.isCompatible = true;
      }
    });
    this.isCompatible ? alert('navegador compativel') : alert('navegador incompativel');
  }

  alert(): void {
    alert(
      this.browserData.name +
        ' ' +
        this.browserData.os +
        ' ' +
        this.browserData.type +
        ' ' +
        this.browserData.version
    );
  }
}

export class BrowserModel {
  name: string;
  os: string;
  type: string;
  version: string;
}

export const browserConst = ['ios', 'crios', 'chrome', 'samsung', 'safari', 'instagram'];
