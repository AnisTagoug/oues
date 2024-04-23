import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudygService } from 'src/app/services/studyg.service';
@Component({
  selector: 'app-update-studyg',
  templateUrl: './update-studyg.component.html',
  styleUrls: ['./update-studyg.component.css']
})
export class UpdateStudygComponent implements OnInit{
  id:any
  four:any={}
  constructor(
    private route : ActivatedRoute,
    private service : StudygService,
    private router : Router,
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.sessionDetails(this.id).subscribe(data =>

      this.four=data,
    )
  }
modify(){
  const parsedDate = new Date(this.four.date_debut);

  // Check if parsedDate is a valid Date object
  if (!isNaN(parsedDate.getTime())) {
    // Manually format the date string using toISOString()
    const formattedDate = parsedDate.toISOString();
    
    // Assign the formatted date to the fournisseur object
    this.four.date_debut = formattedDate;

this.service.updateSession(this.id,this.four).subscribe(
  data =>{this.four=data,this.router.navigate(['studyg'])}
)
}
}
}
