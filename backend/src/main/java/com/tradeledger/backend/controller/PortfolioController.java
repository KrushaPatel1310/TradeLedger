package com.tradeledger.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.tradeledger.backend.service.PortfolioService;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "http://localhost:3000")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping
    public Object getPortfolio() {
        return portfolioService.getPortfolio();
    }
}
