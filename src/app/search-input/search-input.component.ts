import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
input = "";
@Output() eventSearchInput: EventEmitter<string> = new EventEmitter();

inputChange() {
  this.eventSearchInput.emit(this.input);
  }
}
