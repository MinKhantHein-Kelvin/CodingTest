import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild (MatSidenav) sideNav !: MatSidenav;
  hide = true;

  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void{
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)']).subscribe(res=>{
      if(res?.matches){
        this.sideNav.mode = "over";
        this.sideNav.close();
      }
      else{
        this.sideNav.mode = "side";
        this.sideNav.open();
      }
    })
    this.cd.detectChanges();
  }

}
