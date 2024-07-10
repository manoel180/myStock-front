import { Injectable } from '@angular/core';


interface LayoutState {
    visibleSideBar: boolean;
}

@Injectable({
    providedIn: 'root',
  })
export class HomeService {
    state: LayoutState = {
        visibleSideBar: true,
    };

  constructor() {

  }


  onMenuToggle() {
    this.state.visibleSideBar =   !this.state.visibleSideBar;
  }
}
