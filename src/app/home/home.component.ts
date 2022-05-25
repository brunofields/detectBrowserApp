import { Component, Inject, OnInit } from '@angular/core';
import * as browser from 'detect-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  corpo = new CorpoModel();
  browserData: BrowserModel;
  isCompatibleHandler: boolean;
  isCompatible: boolean;
  userAgentValue: string;
  fban: boolean;
  fbav: boolean;
  instagram: boolean;
  windowPlatform: string;

  constructor() {
    this.browserData = browser.detect();
  }

  ngOnInit(): void {
    this.userAgentValue = navigator.userAgent;
    this.fban = this.userAgentValue.indexOf("FBAN") > -1;
    this.fbav = this.userAgentValue.indexOf("FBAV") > -1;
    this.instagram = this.userAgentValue.indexOf("Instagram") > -1;
    this.windowPlatform = window.navigator.platform;
  }

  criarHumano() {
    this.corpo.cabeca = 1;
    this.corpo.tronco = 1;
    this.corpo.membros = 4;
  }

  userAgent() {
    alert(browser.browserName(navigator.userAgent));
  }
  
  isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor;
    return (ua.indexOf("FBAN")) > -1 || (ua.indexOf("FBAV")) > -1 || (ua.indexOf("Instagram")) > -1;
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

export class CorpoModel {
  cabeca: number;
  tronco: number;
  membros: number;
}

export const browserConst = ['ios', 'crios', 'chrome', 'samsung', 'safari', 'instagram'];
