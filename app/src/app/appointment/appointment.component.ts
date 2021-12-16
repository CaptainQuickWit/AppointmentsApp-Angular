

import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointment.service';
import { Appointment } from '../Appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  appointmentDate: string;
  name: string;
  email: string;

  constructor(private appointmentsService: AppointmentsService) { 
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentDate = '';
    this.name = '';
    this.email = '';
  }

  ngOnInit() {
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentsService.createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.name = '';
        this.email = '';
        const appointmentDate = createdAppointment.appointmentDate;
        //const appointmentDate = new Date(variable).toDateString();
        this.successMsg = `Appointment Booked Successfully for ${appointmentDate}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}