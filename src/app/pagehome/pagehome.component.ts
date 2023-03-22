import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagehome',
  templateUrl: './pagehome.component.html',
  styleUrls: ['./pagehome.component.css']
})
export class PagehomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.getElementById("sidebarCollapse")?.addEventListener('click', () => {
      document.getElementById("sidebar")?.classList.toggle('active')
    })

    
  }

}
