import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private _http: DataService) { }

  ngOnInit() {
    this.booksApi();
  }



  booksApi(){

    var url = "libros";

    this._http.obtenerData(url, null).subscribe(resul =>{
      console.log(resul);
    });
    

  }








}
