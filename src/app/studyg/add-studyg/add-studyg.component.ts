import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudygService } from 'src/app/services/studyg.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-studyg',
  templateUrl: './add-studyg.component.html',
  styleUrls: ['./add-studyg.component.css']
})
export class AddStudygComponent implements OnInit{
  constructor(
    private service : StudygService,
    private router : Router,
    private datePipe: DatePipe

  ) { }
  levels = ['premiere', 'deuxieme', 'troisieme'];

  fournisseur:any={dateSession: null}
  
  ngOnInit(): void {

  
  }
 
  ajouter(): void {
    this.service.addSession(this.fournisseur).subscribe(
      (session: any) => {
        this.navigate();
      }
    );
  }
  navigate(){
    this.router.navigate(['session'])
  }

 

}
  
  