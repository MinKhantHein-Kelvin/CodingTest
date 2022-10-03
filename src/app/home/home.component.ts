import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild (MatSidenav) sideNav !: MatSidenav;
  @ViewChild('content') myModal: any;
  hide = true;
  closeResult: string;

  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef,private modalService: NgbModal) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() : void{
    this.open(this.myModal);
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
