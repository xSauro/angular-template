import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavModel } from '../model/NavModel';
import { AppService } from '../app-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private appService: AppService) {}

  navModel;


  ngOnInit() {
    const user = 'Admin';
    switch (user) {
      case 'Admin':
        this.navModel = [
          new NavModel('/home/dashboard', 'Home', 'home'),
          new NavModel('/home/user', 'Users', 'account_circle'),
          new NavModel('/home/about', 'About', 'help'),
          new NavModel('/home/settings', 'Settings', 'settings'),
        ];
        break;

      // case 'AuthenticatedUser':
      //   this.navModel = [
      //     new NavModel('/home/dashboard', 'Home', 'home'),
      //   ];
      //   break;

      default:
        this.navModel = [
          new NavModel('/home/dashboard', 'Home', 'home'),

        ];
        break;

    }
  }

  logout(): void {
    // localStorage.removeItem('JWT');
    this.router.navigate(['login']);
    }

    navigateTo(link) {
      this.router.navigate([link]);
    }

  getInfoFromToken() {
    // let loggedInUser: UserModel;
    // this.appService.getUserData().subscribe(res => {
    //   this.showLoadingBar = false;

    //   loggedInUser = res.message;
    //   this.currentUser = loggedInUser;


    // }, err => {
    //   console.log(err);
    // });

  }
}
