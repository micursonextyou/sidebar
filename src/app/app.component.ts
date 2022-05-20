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
    const menu=document.querySelector(".menu");
    const item_menu=document.querySelectorAll(".item-menu a");
    
    btnMenu?.addEventListener("click",()=>{
      sidebar?.classList.toggle("active");
    });
    
    for(let i=0;i<item_menu.length;i++){
      item_menu[i].addEventListener("click",()=>{
        for(let i=0;i<item_menu.length;i++){
          item_menu[i].classList.remove("seleccionado");
        }        
        item_menu[i].classList.add("seleccionado");
      }); 
    }
    
  }
}
