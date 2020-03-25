import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationInfoComponent } from './info/confirmation.info.component';

@Injectable()
export class ConfirmationService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationComponent, { size: dialogSize, centered: true,
      windowClass: 'fade'});
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }

  public info(
    title: string,
    message: string,
    btnOkText: string = 'OK',    
    dialogSize: 'sm'|'lg' = 'sm'
    ): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationInfoComponent, { size: dialogSize, centered: true,
      windowClass: 'fade'});
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;    
    return modalRef.result;
  }

}
