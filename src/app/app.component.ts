import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {

    if(this.authService.user != null){
    this.authService.autoLogin();
    }else{
      this.router.navigate(['/auth'])
    }
  }

  title = 'bankApplication-frontend';
}
