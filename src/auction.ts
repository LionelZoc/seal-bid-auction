import type { auctionProps, auctionResult } from 'types';

/*
* function take a reserve price and a list of buyers & bid and return the winning Buyer and price
* 
* The buyer winning the auction is the one with the highest bid above or equal to the reserve price.
*
* There is always, as a maximum, one winning buyer, and only one
*
*  The winning price is the highest bid price from a non-winning buyer above the reserve
price (or the reserve price if none applies).
*
* 
*/
const main = ({ reservePrice = 0, buyers = [] }: auctionProps): auctionResult => {
    let bestBuyer = null;
    let winningPrice = reservePrice;

    buyers.sort((a, b) => Math.max(...a.bids) - Math.max(...b.bids));

    // the best buyer will be in any case the one having the best max bid
    bestBuyer = buyers.pop();

    if (!bestBuyer || Math.max(...bestBuyer.bids) < reservePrice)
        return { buyer: null, price: reservePrice };

    const bestNonWinningBider = buyers.pop();

    //wining price is the highest bid price from a non-winning
    winningPrice = bestNonWinningBider ? Math.max(...bestNonWinningBider.bids) : reservePrice;

    return { buyer: bestBuyer?.buyerName, price: winningPrice };
};

export { main };
