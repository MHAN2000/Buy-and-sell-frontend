import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { Location } from '@angular/common';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  email: string = '';
  message: string = '';
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService,
    private location: Location,
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.listingService.getListingById(id).subscribe(listing => {
      this.listing = listing;
      this.message = `Hi, I'm interested in your ${this.listing.name.toLocaleLowerCase()!}`;
    });
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

  goBack(): void {
    this.location.back();
  }
}
