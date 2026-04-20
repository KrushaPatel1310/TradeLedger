package com.tradeledger.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.tradeledger.backend.model.Stock;

// Using Service layer concept to handle business logic for all stocks
@Service
public class StockService {

    // List to store all stocks (Collection framework used here)
    private List<Stock> stockList = new ArrayList<>();

    // Constructor runs once when app starts
    public StockService() {
        stockList.add(new Stock("Reliance", 2450, 1.5));
        stockList.add(new Stock("TCS", 3850, -0.8));
        stockList.add(new Stock("Infosys", 1520, 2.1));
        stockList.add(new Stock("Wipro", 540, 0.9));
        stockList.add(new Stock("HDFC Bank", 1680, -1.2));
    }

    // Return all stocks
    public List<Stock> getAllStocks() {
        return stockList;
    }

    // Get single stock by name
    public Stock getStockByName(String name) {
        for (Stock stock : stockList) {
            if (stock.getName().equalsIgnoreCase(name)) {
                return stock;
            }
        }
        return null;
    }

    // Simulate price change (logic)
    public void updatePrices() {
        Random random = new Random();

        for (Stock stock : stockList) {
            double change = -2 + (4 * random.nextDouble()); // -2% to +2%
            double newPrice = stock.getPrice() + (stock.getPrice() * change / 100);

            stock.setPrice(Math.round(newPrice));
            stock.setChange(Math.round(change * 100.0) / 100.0);
        }
    }
}
