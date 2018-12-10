export interface Pros {
    productid: number;
    productNmae: string;
    productDescription: string;
    productCategory: string;
    productImage: ProductPhoto[];
    productPrice: number;
    discount: number;
    productsSold:number;
    productView:number;
    isPromotionMessageSent:boolean;
    quantity:number;
    brand:number;
    Inventory:string;
    Promos:string;
  
  }
  export interface ProductPhoto {
    thumb: string;
    full: string;
    description: string;
  }
  