import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string): string {
    return localStorage.getItem(key);
  }

  set(key: string, value: any): void {
    return localStorage.setItem(key, value);
  }

  remove(key: string): void {
    return localStorage.removeItem(key)
  }

  clear(): void {
    return localStorage.clear();
  }
}
