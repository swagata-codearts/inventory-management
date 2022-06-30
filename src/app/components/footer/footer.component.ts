import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

 constructor(private router: Router) {}
 
 ngOnInit() {}
 weatherClick(){this.router.navigate(['weather'])}
 totalInventoryClick(){this.router.navigate(['total-inventory'])}
 homeClick(){this.router.navigate(['home'])}
  

}
