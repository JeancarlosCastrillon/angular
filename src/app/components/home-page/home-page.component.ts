import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  NavButtons = [
    {
    id: 1,
    text: 'Home'
    },
    {
    id: 2,
    text: 'About Us'
    },
    {
    id: 3,
    text: 'Projects'
    },
    {
    id: 4,
    text: 'Contact'
    },
    {
    id: 5,
    text: 'GET A FREE QUOTE'
    },
]
}
