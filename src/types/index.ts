export interface IProduct {
  id: string;
  title: string;
  price: number;
  original_price?: number;
  thumbnail: string;
}

export interface IGetProdutsResponse {
  data: {
    products: IProduct[];
  };
}

export interface ICartProduct extends IProduct {
  quantity?: number;
}