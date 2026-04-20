package com.tradeledger.backend.service;

import java.util.*;
import org.springframework.stereotype.Service;
import com.tradeledger.backend.model.Stock;

// Service layer to manage all stock data
@Service
public class StockService {

    private List<Stock> stockList = new ArrayList<>();

    public StockService() {

        stockList.add(new Stock("Reliance", 850, 1.2));
        stockList.add(new Stock("TCS", 920, -0.5));
        stockList.add(new Stock("Infosys", 780, 0.8));
        stockList.add(new Stock("Airtel", 640, -1.1));
        stockList.add(new Stock("Jio", 500, 1.5));
        stockList.add(new Stock("Tata Steel", 720, -0.6));
        stockList.add(new Stock("Tata Gold", 950, 0.9));
        stockList.add(new Stock("Wipro", 610, -0.3));
        stockList.add(new Stock("HDFC Bank", 890, 1.0));
        stockList.add(new Stock("ICICI Bank", 870, -0.7));
        stockList.add(new Stock("Oracle", 930, 1.3));
        stockList.add(new Stock("SBI", 550, -0.9));
        stockList.add(new Stock("Adani Power", 670, 0.6));
        stockList.add(new Stock("Tata Motors", 730, -1.2));
        stockList.add(new Stock("Tech Mahindra", 810, 0.4));
    }

    public List<Stock> getAllStocks() {
        return stockList;
    }

    public Stock getStockByName(String name) {
        for (Stock stock : stockList) {
            if (stock.getName().equalsIgnoreCase(name)) {
                return stock;
            }
        }
        return null;
    }

    // Update prices but NEVER exceed ₹1000
    public void updatePrices() {

        Random random = new Random();

        for (Stock stock : stockList) {

            double change = -2 + (4 * random.nextDouble()); // -2% to +2%

            double newPrice = stock.getPrice() + (stock.getPrice() * change / 100);

            // 🔥 IMPORTANT LIMIT
            if (newPrice > 1000) {
                newPrice = 1000;
            }

            if (newPrice < 1) {
                newPrice = 1;
            }

            stock.setPrice(Math.round(newPrice));
            stock.setChange(Math.round(change * 100.0) / 100.0);
        }
    }
}
