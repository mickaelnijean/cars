import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserCanLoadService implements CanLoad {

  constructor() { }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return true;
  }
}
