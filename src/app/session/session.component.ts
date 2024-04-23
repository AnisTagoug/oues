import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
intitule:any;
constructor(
  private service : SessionService,
  private router : Router,
) { }
fournisseurs:any={}
textBus = '';
ngOnInit(): void {




  this.service.getSession().subscribe(
    data => this.fournisseurs=data
  )

}
deleteSession(id:any){
  this.service.deleteSession(id).subscribe(
    res=>{this.fournisseurs},
    error => console.log(error)
    )
    }

delete(i:any){
  this.fournisseurs.splice(i,1)
}

modify(id:any){
  this.router.navigate(['update-sess',id])
}


  Search(){
      if (this.intitule ==''){
        this.ngOnInit();

      }else {
        this.fournisseurs =this.fournisseurs.filter ((res: { intitule: string; }) => {
          return res.intitule.toLocaleLowerCase().match(this.intitule.toLocaleLowerCase());
        })
      }

     }

   
   
     function(){
      let btn:any = document.querySelector("#btn");
      let sidebar:any = document.querySelector(".sidebar");
      let searchBtn = document.querySelector(".bx-search");


      sidebar.classList.toggle("active");
      if(btn.classList.contains("bx-menu")) {
          btn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
          btn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }

}

