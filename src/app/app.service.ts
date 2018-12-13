import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cart } from './pojo/cart';
import { Observable } from 'rxjs';
import { CartProduct } from './pojo/cardproduct';
import { Product } from './pojo/product';
import { ProductImage } from './pojo/productimage';
import { FeedBack } from './pojo/feedback';
import { Wishlist } from './pojo/wishlist';
import { Customer } from './pojo/customer';
import { ProductOrder } from './pojo/order';
import { Address } from './pojo/address';
import { IShipment } from './pojo/shipment';
import { BankAccount } from './pojo/bankaccount';
import { Card } from './pojo/card';
import { Invoice } from './pojo/invoice';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}



@Injectable({
    providedIn: 'root'
})
export class AppService {


    address : Address=new Address()
    customers: Customer[];

    order: ProductOrder = new ProductOrder();

    private Url = "http://10.138.150.215:8083/capstore/api/v1";



    constructor(private http: HttpClient) {
        this.getCustomerByEmail(this.emailId).subscribe(
            customer => {
                this.customer = customer;
                console.log(customer);
            }
        );
    }

    //-----------------------------Mail----------------------------------
    emailId: string = "virat@gmail.com";
    setMailId(str: string) {
        this.emailId = str;
    }

    getMailId(): string {
        return this.emailId;
    }


    //-----------------------------CART----------------------------------
    cart: Cart[];

    cartcount(): Observable<Cart[]> {

        return this.http.get<Cart[]>(this.Url + '/cartcount');
    }

    getCart(): Observable<Cart> {

        return this.http.get<Cart>(this.Url + '/getCart/'+'virat@gmail.com');
    }



    //-----------------------------CARTProduct----------------------------------

    addToCart(cartProduct: CartProduct): Observable<CartProduct[]> {
        return this.http.post<CartProduct[]>(this.Url + '/addProductToCart/virat@gmail.com', cartProduct);
    }

    getAllCart(custId: number): Observable<CartProduct[]> {
        console.log("cartService");
        return this.http.get<CartProduct[]>(this.Url + '/getCartProducts/virat@gmail.com');
    }

    //-----------------------------Customer----------------------------------
    customer: Customer = new Customer();

    getCustomer(): Customer {
        return this.customer;
    }
    getCustomerByEmail(emailId: string): Observable<Customer> {
        return this.http.get<Customer>(this.Url + '/getCustomer/' + emailId);
    }

    deleteProduct(productId: number): Observable<CartProduct[]> {
        return this.http.delete<CartProduct[]>(this.Url + '/deleteProductFromCart/virat@gmail.com' + '/' + productId);
    }
    updateQuantity(cartProduct: CartProduct): Observable<CartProduct> {
        return this.http.put<CartProduct>(this.Url + '/updateCartProductQuantity/virat@gmail.com', cartProduct, {});
    }



    // getFiles(productId:number): Observable<any> {
    //   console.log('customerService getFile'+productId);
    //   return this.http.get<any>('http://10.138.150.195:8082/getallfiles/106');


    //}

    //-----------------------------Product----------------------------------
    getproductswithcategory(category): Observable<Product[]> {
        return this.http.get<Product[]>(this.Url + '/' + category);
    }
    getImages(productId): Observable<ProductImage[]> {
        return this.http.get<ProductImage[]>(this.Url + '/images' + "/" + productId);
    }
    getProduct(productId): Observable<Product> {
        return this.http.get<Product>(this.Url + '/product/' + productId);
    }
    getSimilarProducts(brand: string, productCategory: string) {
        return this.http.get<Product[]>(this.Url + '/similarProduct/' + brand + "/" + productCategory);
    }

    getAllfeedbacks(productId): Observable<FeedBack[]> {
        return this.http.get<FeedBack[]>(this.Url + '/feedback' + "/" + productId);
    }

    addViewCount(productId) {
        this.http.post(this.Url + '/productViewCount/' + productId, null);
    }






    //-----------------------------Sorting----------------------------------


    selectedOption: string;
    productCategory: string;
    private product: Product;
    sortedProducts: Product[];
    set_sort_option(selectedoption) {
        this.selectedOption = selectedoption;
    }
    get_sort_option(): string {
        return this.selectedOption;
    }
    setCategory(category) {
        this.productCategory = category;
    }
    getCategory(): string {
        return this.productCategory;
    }

    getAscProducts(category): Observable<Product[]> {
        return this.http.get<Product[]>(this.Url + '/' + category + "/" + "lowtohigh");
    }

    getDscProducts(category): Observable<Product[]> {
        return this.http.get<Product[]>(this.Url + '/' + category + "/" + "hightolow");
    }
    set_sorted_products(sortedProducts) {
        this.sortedProducts = sortedProducts;
    }
    get_sorted_products() {
        return this.sortedProducts;
    }
    getMostViewed(category): Observable<Product[]> {
        return this.http.get<Product[]>(this.Url + '/' + category + "/" + "mostViewed");
    }
    getbestSellers(category): Observable<Product[]> {
        return this.http.get<Product[]>(this.Url + '/' + category + "/" + "BestSeller");
    }
    getProductRating(productId: number): any {
        return this.http.get<any>(this.Url + '/getProductRating/' + productId);
    }

    inRange(category, min, max): Observable<Product[]> {
        return this.http.get<Product[]>(this.Url + '/' + category + '/' + min + '/' + max);
    }

    //-----------------------------Wishlist----------------------------------



    wishlistcount(): Observable<Wishlist[]> {

        return this.http.get<Wishlist[]>(this.Url + '/wishlistcount');


    }

    addWishlist(productId): Observable<Product[]> {
        return this.http.post<Product[]>(this.Url + "/addingtowishlist/" + this.emailId + '/' + productId, null);
    }
    getWishlist(): Observable<Product[]> {
        return this.http.get<Product[]>(this.Url + "/viewWishlist/" + this.emailId);

    }

    remove(productId: number): Observable<Product[]> {
        return this.http.delete<Product[]>(this.Url + "/deleteFromWishlist/" + this.emailId + "/" + productId);
    }

    moveFromWishlistToCart(productId: number): Observable<boolean> {
        return this.http.delete<boolean>(this.Url + "/moveFromWishlistToCart/" + this.emailId + "/" + productId);
    }


    //-----------------------------ORDER----------------------------------
    checkAvailability(order: ProductOrder): Observable<boolean> {
        return this.http.post<boolean>(this.Url + "/checkAvailabilityInInventory", order); //
    }
    placeOrder(order: ProductOrder): Observable<ProductOrder> {
        return this.http.post<ProductOrder>(this.Url + "/placeOrder/", order); //
    }




     //changePassword

  comparepassword(password:String):Observable<boolean>{
   
   
    return this.http.post<boolean>(this.Url+"/customerPasswordMatch/"+this.emailId,password,{})
  }
   changepassword(password:String):Observable<boolean>{
      return this.http.post<boolean>(this.Url+"/customerPasswordChange/"+this.emailId,password,{})
  }
 
  //customerProfile
 
  getCustomer1 (): Observable<Customer> {
   return this.http.get<Customer>(this.Url+"/getCustomers/"+this.emailId)
 }
 
 getAddresses (): Observable<Address[]> {
   
   return this.http.get<Address[]>(this.Url+"/address/"+this.emailId)
 }
 
 updateAddress(address)
 {
   this.address=address;
   console.log(this.emailId);
 }
 getAddress():Address{
   //console.log(this.address);
  return this.address;
 }
 
 
  updateadd(addressMaster:Address): Observable<Address[]>
   {
     console.log(this.address)
     
     console.log("in address service");
     console.log(this.emailId);
     console.log(addressMaster);
     return this.http.post<Address[]>(this.Url+"/updateAddresses",addressMaster,{});
   }
 
 
   updatemobile(customer:Customer): Observable<Boolean>  {
     return this.http.put<Boolean>(this.Url+"/updatemobile/"+this.emailId,customer);
  
 }
 



//---------------------------Deliver address-----------------------

setProductOrder(order:ProductOrder){
    this.order = order; 
}

getProductOrder(){
    return this.order;
}

getAllAddress(): Observable<Address[]>{
    console.log("Service1245");
    console.log(this.Url+'/address/'+this.emailId);
   return this.http.get<Address[]>(this.Url+'/address/'+'virat@gmail.com'); //TODO
  
}

saveAllShipments(shipments:IShipment):Observable<boolean>{
    return this.http.post<boolean>(this.Url+'/address/'+'virat@gmail.com',shipments); //TODO
}

// getCart(): Observable<Cart>{
//     console.log("Service")
//    return this.http.get<Cart>(this.Url+"/"+'701');
  
// }


createaddress(address:Address):Observable<Address[]>
{
 console.log("sdkhfh");
   return  this.http.post<Address[]>(this.Url+'/address'+this.emailId,address,{}) 

}

//------------------------------PAYMENT----------------------------
getBankAccountFromCredential(account: BankAccount):Observable<BankAccount>{
    return this.http.get<BankAccount>(this.Url+'/bankaccount/credential');
}
getCardFromNumber(cardNumber: number):Observable<Card>{
    return this.http.get<Card>(this.Url+'/card/number/'+cardNumber);
}
payByBankAccount(account: BankAccount,orderId:number):Observable<Invoice>{
    return this.http.post<Invoice>(this.Url+'/transaction/pay/bankaccount/order/'+orderId,account);
}
payByCard(card: Card,orderId:number):Observable<Invoice>{
    return this.http.post<Invoice>(this.Url+'/transaction/pay/card/order/'+orderId,card);
}
payByCash(orderId:number):Observable<Invoice>{
    return this.http.post<Invoice>(this.Url+'/transaction/pay/cash/order/'+orderId,null);
}















































}
