import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent {
  isLoading: boolean = true;
  listing: Listing;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.listingsService.getListingById(id).subscribe(listing => {
      this.listing = listing;
      this.isLoading = false;
    });
  }

  onSubmit({ name, description, price }: Listing): void {
    this.listingsService.editListing(this.listing.id, name, description, price).subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    });
  }

}
