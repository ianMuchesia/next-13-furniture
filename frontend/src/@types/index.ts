export interface userAuth {
    name: string;
    userId: string;
    role: string;
  }


  export interface typeProduct{
    _id:string;
    name:string;
    description:string;
    price:number;
    category:string;
    images:string[];
    imageUrl:string;
}

export interface cartProductModel{
    _id: string;
    name: string;
    
    price: number;
    
    images:string[];
    
  
    quantity:number;
    totalPrice:number;
    
}


export interface cartModel{
    itemsList:cartProductModel[];
    totalQuantity:number;
    subTotal:number;
    showCart:boolean;
}
