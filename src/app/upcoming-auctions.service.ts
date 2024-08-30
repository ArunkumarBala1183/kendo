import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingAuctionsService {
  private apiURL = 'https://auctionapitest.grexel.com/auction/publicauctionapi/Auctions'

  constructor(private http: HttpClient) { }

  getUpcomingAuctions(): Observable<any[]> {
    return this.http.get(this.apiURL, { responseType: 'text' }) // Fetch XML data as text
      .pipe(
        map(xml => this.parseXml(xml)) // Parse XML to JSON
      );
  }

  private parseXml(xml: string): any[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'application/xml');
    const auctions = xmlDoc.getElementsByTagName('Auction');
    
    const result: any[] = [];
    for (let i = 0; i < auctions.length; i++) {
      const auctionElement = auctions[i];
      const auctionData = {
        auctionName: this.getElementValue(auctionElement, 'AuctionName'),
        StartDate: this.getElementValue(auctionElement, 'StartDate'),
        EndDate: this.getElementValue(auctionElement, 'EndDate'),
        // Add other fields as needed
      };
      result.push(auctionData);
    }

    return result;
  }

  private getElementValue(parent: Element, tagName: string): string | null {
    const element = parent.getElementsByTagName(tagName)[0];
    return element ? element.textContent || null : null;
  }
}
