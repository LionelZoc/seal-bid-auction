export interface buyerBidProps {
    buyerName: string;
    bids: number[];
}
export interface auctionProps {
    reservePrice: number;
    buyers: buyerBidProps[];
}

export interface auctionResult {
    buyer: string | null;
    price: number;
}
