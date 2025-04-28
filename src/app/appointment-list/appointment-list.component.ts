import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrl: './appointment-list.component.css',
    standalone: false
})
export class AppointmentListComponent implements OnInit {
  

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [] 

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  addAppointment(){

    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))

    }
    else {
    alert("You didn't enter an Appointment description or select a Date!")
    }

  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

}
