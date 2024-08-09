import { Component } from '@angular/core';import { DateService } from '../../date.service';
;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  logo: string = '../../favicon.ico';

  daydate: string = '';

  constructor(private today: DateService) {}
  ngOnInit(): void {
    this.daydate = this.today.getAllDate();
  }
}
