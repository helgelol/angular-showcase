import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/users/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  user$!: any;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.user$ = params['id']));
  }

  ngOnInit(): void {
    this.data.getUser(this.user$).subscribe(data => (this.user$ = data));
  }
}
