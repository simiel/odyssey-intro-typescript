import { RESTDataSource } from "@apollo/datasource-rest";
import { Amenity, CreateListingInput, Listing } from "../types";

export class ListingAPI extends RESTDataSource {
  baseURL = "https://rt-airlock-services-listing.herokuapp.com/";

  getFeaturedListings(): Promise<Listing[]> {
    return this.get<Listing[]>("featured-listings");
  }

  getListing(listingId: string): Promise<Listing> {
    return this.get<Listing>(`listings/${listingId}`);
  }
  getAmenities(listingId: string): Promise<Amenity[]> {
    console.log("🚀 ~ ListingAPI ~ getAmenities ~ listingId:", listingId);
    return this.get<Amenity[]>(`listings/${listingId}/amenities`);
  }
  createListing(listing: CreateListingInput): Promise<Listing> {
    return this.post<Listing>("listings", {
      body: {
        listing,
      },
    });
  }
}
