package com.tradeledger.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradeService {

    @Autowired
    private WalletService walletService;

    @Autowired
    private PortfolioService portfolioService;

    @Autowired
    private HistoryService historyService;

    // BUY STOCK
    public String buyStock(String name, int qty, double price) {

        double total = qty * price;

        // Wallet deduct
        boolean success = walletService.deduct(total);

        if (!success) {
            return "Insufficient Balance";
        }

        // Portfolio update
        portfolioService.buyStock(name, qty, price);

        // History update
        historyService.addHistory(
            "BUY " + name +
            " | Qty: " + qty +
            " | Price: ₹" + price +
            " | Total: ₹" + total
        );

        return "Stock Purchased Successfully";
    }

    // SELL STOCK
    public String sellStock(String name, int qty, double price) {

        String result =
            portfolioService.sellStock(name, qty, price);

        if (result.equals("Stock Sold")) {

            double total = qty * price;

            // Wallet add money
            walletService.add(total);

            // History update
            historyService.addHistory(
                "SELL " + name +
                " | Qty: " + qty +
                " | Price: ₹" + price +
                " | Total: ₹" + total
            );
        }

        return result;
    }
}
