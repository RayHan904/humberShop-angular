import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../models/product.model'; // Assuming you have a model for Product

@Injectable()
export class IndividualProductService {
  private apiUrl = 'http://localhost:5001/api/products'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getProducts(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred while fetching products.';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: details ! ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: details ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        console.log(error);
        return throwError(errorMessage);
      })
    );
  }
}
