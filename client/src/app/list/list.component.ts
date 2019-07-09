import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { Launch, Meteor, Query } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  launches:Observable<Launch[]>;
  meteors:Observable<Meteor[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.launches = this.apollo.watchQuery<Query>({
      query: gql`
          query LauchesQuery {
            lauches {
              flight_number,
              mission_name,
              launch_year,
              launch_success,
              rocket,
              links
            }
          }
        `
    })
    .valueChanges
    .pipe(
      map(result => result.data.Lauches)
    ),
    this.meteors = this.apollo.watchQuery<Query>({
      query: gql`
          query MeteorsQuery {
            Meteores {
              name,
              nametype,
              recclass,
              year,
              mass,
              id
            }
          }
        `
    })
    .valueChanges
    .pipe(
      map(result => result.data.Meteors)
    );
  }
  

}
