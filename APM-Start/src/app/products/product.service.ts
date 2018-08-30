import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError , tap } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private productUrl ='api/products/products.json';
  constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]> {

return this.http.get<IProduct[]>(this.productUrl).pipe(
tap( d => console.log(JSON.stringify(d))),
catchError(this.handleError)

);
    }

    private handleError(err : HttpErrorResponse){

      let errorMessage = '';
      if(err.error instanceof ErrorEvent){

        errorMessage = `an error occured: ${err.error.message}`
      }else{

        errorMessage = `Server returned code: ${err.status} , error message is: ${err.message}`;
      }

      console.log(errorMessage);
      return throwError(errorMessage);

    }

}