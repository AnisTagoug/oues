import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../services/materiel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
nom:any;
constructor(  private service : MaterielService,
  private router : Router,){}
  fournisseurs:any={}
textBus = '';
ngOnInit(): void {




  this.service.getMateriel().subscribe(
    data => this.fournisseurs=data
  )

}
deleteSession(id:any){
  this.service.deleteMateriel(id).subscribe(
    res=>{this.fournisseurs},
    error => console.log(error)
    )
    }

delete(i:any){
  this.fournisseurs.splice(i,1)
}

modify(id:any){
  this.router.navigate(['update-mat',id])
}


  Search(){
      if (this.nom ==''){
        this.ngOnInit();

      }else {
        this.fournisseurs =this.fournisseurs.filter ((res: { nom: string; }) => {
          return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
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
