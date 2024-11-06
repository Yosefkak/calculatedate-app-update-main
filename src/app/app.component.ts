import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateDate } from "./calculate-app/calculate-main-page";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculateDate],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculatedate-app';
}
