export interface FeaturedImageType{
    url:string;
    altText:string;
}

export interface PriceType {
	amount: number;
	currencyCode:string;
}

export interface PriceRangeType {
	minVariantPrice:PriceType;
	maxVariantPrice:PriceType;
}

export interface productItemType {
	id: number;
	handle: string;
	title: string;
	description: string;
	featuredImage: FeaturedImageType;
	priceRange: PriceRangeType;
}
/* 
    "id": 1,
    "handle": "sticker-sheet",
    "title": "Deno Sticker Sheet",
    "description": "If the sticker of a technology you use isn't on your laptop, then are you actually using it? Make sure the world knows you deploy to the edge in seconds with this fun sticker sheet.",
    "featuredImage": {
      "url": "https://merch-clone.s3.ap-south-1.amazonaws.com/kiss-cut-sticker-sheet-white-front-62c5b5d604ab6_400x400.jpg.webp",
      "altText": "stickets"
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": 10,
        "currencyCode": "USD"
      },
      "maxVariantPrice": {
        "amount": 0,
        "currencyCode": ""
      }
    } */