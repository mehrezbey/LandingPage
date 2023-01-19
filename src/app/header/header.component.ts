import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let menu:any = document.querySelector(".header nav .container .left-part ul.menu");
    let socialmediaMenu:any = document.querySelector(".header nav .container .right-part ul.social-media");
    let toShowMenu:any = document.querySelector(".header nav .container .navbar-menu");

    toShowMenu?.addEventListener("click", (e:any)=>{
      menu.classList.toggle("visible");
      if(menu.classList.contains("visible")){
        socialmediaMenu.style.display="flex";
      }
      else{
        socialmediaMenu.style.display="none";
      }
    });
  }

}
