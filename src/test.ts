import { main } from 'auction';
import type { auctionProps } from 'types';

const testData: auctionProps[] = [
    {
        reservePrice: 100,
        buyers: [
            { buyerName: 'Buyer1', bids: [90, 110, 120] },
            { buyerName: 'Buyer2', bids: [105, 115, 125] },
            { buyerName: 'Buyer3', bids: [95, 100, 130] },
        ],
    },
    {
        reservePrice: 150,
        buyers: [
            { buyerName: 'BuyerA', bids: [140, 155, 160] },
            { buyerName: 'BuyerB', bids: [145, 150, 165] },
            { buyerName: 'BuyerC', bids: [135, 145, 170] },
        ],
    },
    {
        reservePrice: 90,
        buyers: [
            { buyerName: 'BuyerA', bids: [140, 155, 160, 300] },
            { buyerName: 'BuyerB', bids: [145, 150, 165] },
            { buyerName: 'BuyerC', bids: [135, 145, 170, 190, 200] },
        ],
    },
    // Edge case: Empty buyers array
    {
        reservePrice: 200,
        buyers: [],
    },

    // Edge case: Reserve price higher than all bids
    {
        reservePrice: 250,
        buyers: [
            { buyerName: 'Buyer1', bids: [200, 210, 220] },
            { buyerName: 'Buyer2', bids: [180, 190, 195] },
            { buyerName: 'Buyer3', bids: [150, 160, 170] },
        ],
    },

    // Edge case: Multiple buyers with the same highest bid
    {
        reservePrice: 300,
        buyers: [
            { buyerName: 'BuyerA', bids: [250, 260, 270] },
            { buyerName: 'BuyerB', bids: [280, 290, 300] },
            { buyerName: 'BuyerC', bids: [300, 310, 320] },
        ],
    },

    // Tricky case: Single buyer with the highest bid
    {
        reservePrice: 150,
        buyers: [{ buyerName: 'BuyerX', bids: [100, 125, 150] }],
    },
];

testData.forEach((param) => {
    const result = main(param);

    console.log('Auction Result:', result);
    console.log('------------------------');
});
