import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/users/data.service';

@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.css'],
})
export class ContactcardComponent implements OnInit {
  users$!: any; // sorry for hackz

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getUsers().subscribe(data => (this.users$ = data));
  }
}
