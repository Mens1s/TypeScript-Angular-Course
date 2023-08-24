import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httplClient: HttpClient) { }

  getProductListPaginate(thePage: number, 
                         thePageSize: number,
                         theCategoryId: number ): Observable<GetResponseProducts> {

    // todo...
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`+
                          `&page=${thePage}&size=${thePageSize}`;


    return this.httplClient.get<GetResponseProducts>(searchUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    // @TODO: need to build url based on category id .. done
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`

    return this.getProducts(searchUrl);
  }

  getProduct(theId: number): Observable<Product> {

    // need to build URL based on pro id
    const searchUrl = `${this.baseUrl}/${theId}`;

    return this.httplClient.get<Product>(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httplClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    )
  }

  searchProducts(keyword: string): Observable<Product[]>{
    const searchUrl = `http://localhost:8080/api/products/search/findByNameContaining?name=${keyword}`;
    
    return this.getProducts(searchUrl)
  } 


  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httplClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
  page:{
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}