import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-meme',
  templateUrl: './random-meme.component.html',
  styleUrls: ['./random-meme.component.css']
})
export class RandomMemeComponent implements OnInit {

  urlOfImage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getMeme = () => {
    this.http.get(" https://meme-api.herokuapp.com/gimme").subscribe(());
  }

}
