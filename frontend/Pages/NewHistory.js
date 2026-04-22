package com.tradeledger.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tradeledger.backend.service.PortfolioService;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "http://localhost:3000")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping
    public Object getPortfolio() {
        return portfolioService.getAll();
    }

    @GetMapping("/buy")
    public String buyStock(
            @RequestParam String name,
            @RequestParam int qty,
            @RequestParam double price) {

        return portfolioService.buyStock(
                name, qty, price);
    }

    @GetMapping("/sell")
    public String sellStock(
            @RequestParam String name,
            @RequestParam int qty,
            @RequestParam double price) {

        return portfolioService.sellStock(
                name, qty, price);
    }
}
