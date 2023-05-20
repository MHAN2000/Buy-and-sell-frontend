import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent {
  listings: Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
