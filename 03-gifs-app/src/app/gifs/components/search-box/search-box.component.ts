import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent {
  constructor( private gifsService: GifsService) { }

  @ViewChild('txtSearchInput')
  searchInput!: ElementRef<HTMLInputElement>;

  onSearch() {
    const query = this.searchInput.nativeElement.value
    this.gifsService.search(query)
    this.searchInput.nativeElement.value = ''
  }
}
