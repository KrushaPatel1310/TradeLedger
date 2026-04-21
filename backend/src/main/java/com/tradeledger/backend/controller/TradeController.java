package com.tradeledger.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.tradeledger.backend.service.*;

// Using Controller and REST API concept to handle buy and sell stock requests
@RestController
@RequestMapping("/api/trade")
@CrossOrigin(origins = "http://localhost:3000")
public class TradeController {

    @Autowired
    private WalletService walletService;

    @Autowired
    private PortfolioService portfolioService;

    @Autowired
    private HistoryService historyService;

    @GetMapping("/buy")
    public String buyStock(
        @RequestParam String name,
        @RequestParam int qty,
        @RequestParam double price
    ) {

        double total = qty * price;

        if (walletService.deduct(total)) {

            portfolioService.buy(name, qty, price);

            historyService.add(
                "BUY " + name + " Qty " + qty
            );

            return "Stock bought successfully";
        }

        return "Insufficient wallet balance";
    }

    @GetMapping("/sell")
    public String sellStock(
        @RequestParam String name,
        @RequestParam int qty,
        @RequestParam double price
    ) {

        if (portfolioService.sell(name, qty)) {

            walletService.add(qty * price);

            historyService.add(
                "SELL " + name + " Qty " + qty
            );

            return "Stock sold successfully";
        }

        return "Not enough stock quantity";
    }
}
