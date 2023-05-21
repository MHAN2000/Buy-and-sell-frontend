import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent {

  isLoading: boolean = true;
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService,
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.listingService.getListingById(id).subscribe(listing => {
      this.listing = listing;
      this.isLoading = false;
    });
    this.listingService.addViewToListing(id).subscribe(() => console.log('Views updated'));
  }
}
