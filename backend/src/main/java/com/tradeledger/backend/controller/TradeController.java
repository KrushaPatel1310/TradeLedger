package com.tradeledger.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tradeledger.backend.service.WalletService;
import com.tradeledger.backend.service.PortfolioService;

// Trade APIs for buy and sell
@RestController
@RequestMapping("/api/trade")
@CrossOrigin(origins = "http://localhost:3000")
public class TradeController {

    @Autowired
    private WalletService walletService;

    @Autowired
    private PortfolioService portfolioService;

    @PostMapping("/buy")
    public String buyStock(
        @RequestParam String name,
        @RequestParam int qty,
        @RequestParam double price
    ) {

        double total = qty * price;

        if (walletService.getBalance() < total) {
            return "Insufficient wallet balance";
        }

        walletService.deductMoney(total);
        portfolioService.buyStock(name, qty, price);

        return "Stock bought successfully";
    }

    @PostMapping("/sell")
    public String sellStock(
        @RequestParam String name,
        @RequestParam int qty,
        @RequestParam double price
    ) {

        boolean sold = portfolioService.sellStock(name, qty);

        if (!sold) {
            return "Not enough stock quantity";
        }

        walletService.addMoney(qty * price);

        return "Stock sold successfully";
    }
}
