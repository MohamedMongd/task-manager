import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addt-tasks',
  templateUrl: './addt-tasks.component.html',
  styleUrls: ['./addt-tasks.component.css']
})
export class AddtTasksComponent {
  constructor(private _TaskService: TaskService, private _Route: Router) {}

  formData: any = {
    id: '',
    title: '',
    details: ''
  };

  add() {
    
    this.formData.id = Math.floor(Math.random() * 10000);  

    this._TaskService.add(this.formData).subscribe({
      next: () => {
        this._Route.navigate(['/list-task']);
      },
      error: (er) => {
        console.log(er);
      }
    });
  }
}
