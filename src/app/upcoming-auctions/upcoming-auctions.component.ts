import { Component } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { UpcomingAuctionsService } from '../upcoming-auctions.service';

@Component({
  selector: 'app-upcoming-auctions',
  templateUrl: './upcoming-auctions.component.html',
  styleUrls: ['./upcoming-auctions.component.css']
})

export class UpcomingAuctionsComponent {
  public sort: SortDescriptor[] = [];

  
  public sortOrder: { [key: string]: number } = {}; // Track sort order of columns
  public filterDate: Date | null = null;
  constructor(private service : UpcomingAuctionsService) {}

  ngOnInit() : void
  {
      this.service.getUpcomingAuctions().subscribe(data=>
      {
        this.auctions = data;
        console.log("Data",this.auctions);
      }
      )
  }

  public gridData: any[] = [
    {
      auctionName: 'Auction 2025-Q2',
      volume: 300,
      description: 'Good',
      fuelTechnology: 'F01050000, T050202',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
    {
      auctionName: 'Auction 2025-Q1',
      volume: 500,
      description: 'Good',
      fuelTechnology: 'F01010101, T010101',
      phoneNumber: 998833123123,
      salary: 'INR'
    },
  ];

  public pageSize: number = 5; // Number of entries per page
  public skip: number = 0; // Start with the first page
  // public gridData : any[] = [];
  public auctions: any[] = [];
  public pageSizes: number[] = [10, 20, 50]; // Available page size options


  public onPageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
  }

  // Method to handle page size change events
  onSortChange(sort: SortDescriptor[]): void {
    this.sort = sort;

    // Clear previous sort order if sort array length is 0
    if (this.sort.length === 0) {
      this.sortOrder = {};
      return;
    }

    // Update sort order based on current sort state
    sort.forEach((descriptor, index) => {
      const field = descriptor.field;

      // Update the sort order if it exists, otherwise set it
      if (!this.sortOrder[field]) {
        this.sortOrder[field] = Object.keys(this.sortOrder).length + 1;
      } else {
        // Reassign order to maintain sort sequence
        this.sortOrder[field] = index + 1;
      }
    });

    console.log('Current sort order:', this.sortOrder);
  }
  onFilterChange(value: Date | null): void {
    // Filter the grid data based on the selected date
    if (value) {
      this.gridData = this.gridData.filter(item => {
        // Assuming `phoneNumber` is a date field; adjust as needed
        return new Date(item.phoneNumber).toDateString() === value.toDateString();
      });
    } else {
      // Reset to original data if no filter
      // Replace with actual data fetch logic
      this.gridData = []; // Replace with original data source
    }
  }
}
