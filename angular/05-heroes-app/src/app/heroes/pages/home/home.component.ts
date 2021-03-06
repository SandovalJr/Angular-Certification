import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterface } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jsonAuth!: AuthInterface


  get auth() {
    return this.authS.auth
  }

  constructor(private router: Router, private authS: AuthService) { }

  ngOnInit(): void {



  }


  logout() {
    this.router.navigate(['./auth'])
  }


}
