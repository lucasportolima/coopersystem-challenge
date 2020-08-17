import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  constructor() { }

  set(itemName, item) {
    sessionStorage.setItem(itemName, JSON.stringify(item));
  }

  get(itemName): any {
    const item = sessionStorage.getItem(itemName);
    if (item)
      return JSON.parse(item)
    return null
  }

  remove(itemName) {
    sessionStorage.removeItem(itemName);
  }
}