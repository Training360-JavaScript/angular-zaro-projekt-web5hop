import { Toast, ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string){
    this.toastr.success(message, title)
}
}
