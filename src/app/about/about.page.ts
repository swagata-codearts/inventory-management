import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})


export class AboutPage implements OnInit {
  
  myName = 'Swagata';
  posts: any;
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
       this.posts = res
    })
    
  }

  changeMyText(){
    console.log('button works')
    this.myName = 'tripathi'

  }

}
