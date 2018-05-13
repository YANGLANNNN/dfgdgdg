import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  public sessionStorage: any;
  constructor() {
    if (!sessionStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.sessionStorage = sessionStorage;
  }
  public set(key: string, value: string): void {
    this.sessionStorage[key] = value;
  }

  public get(key: string): string {
    return this.sessionStorage[key] || false;
  }

  public setObject(key: string, value: any): void {
    this.sessionStorage[key] = JSON.stringify(value);
  }

  public getObject(key: string): any {
    return JSON.parse(this.sessionStorage[key] || '{}');
  }

  public remove(key: string): any {
    this.sessionStorage.removeItem(key);
  }

}
export class NavList {
  constructor(
    public title: string,
    public routers: string,
    public icon: string,
    public clsstate: boolean,
    public children: NavListChild[],
    public open: boolean
  ) {}
}
export class NavListChild {
  constructor(
    public title: string,
    public setState: boolean,
    public routers: string
  ) {}
}

export class DeparmentList {
  constructor(
    public id: number,
    public name: string,
    public dcode: string,
    public tel: string,
    public oid: number,
    public pid: number,
    public idt: string,
    public udt: string
  ) {}
}
export class PageBody {
  constructor(
    public page: number,
    public row: number
  ) {}
}
