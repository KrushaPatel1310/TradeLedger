package com.tradeledger.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tradeledger.backend.model.Stock;
import com.tradeledger.backend.service.StockService;

// Using Controller concept to create REST APIs for frontend communication
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    // API to get all stocks
    @GetMapping
    public List<Stock> getAllStocks() {
        return stockService.getAllStocks();
    }

    // API to get single stock by name
    @GetMapping("/{name}")
    public Stock getStock(@PathVariable String name) {
        return stockService.getStockByName(name);
    }

    // API to update prices manually
    @GetMapping("/update")
    public String updatePrices() {
        stockService.updatePrices();
        return "Stock prices updated successfully";
    }
}
