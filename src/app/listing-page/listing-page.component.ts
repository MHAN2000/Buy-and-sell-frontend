import { Component } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

// RxJS & HttpClient
@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => this.listings = listings);
  }
}
