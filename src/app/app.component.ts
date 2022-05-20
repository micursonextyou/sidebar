import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.control_sidebar();
  }
  title = 'sidebar3';
  
  control_sidebar(){
    const btnMenu=document.getElementById("btnMenu");
    const sidebar=document.querySelector(".sidebar");
    btnMenu?.addEventListener("click",()=>{
      sidebar?.classList.toggle("active");
    });
    
  }
}
