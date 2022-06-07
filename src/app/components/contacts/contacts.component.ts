import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/users/data.service';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-35px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            ),
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class ContactsComponent implements OnInit {
  users$!: any; // sorry for hackz

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getUsers().subscribe(data => (this.users$ = data));
  }
}
