package com.tradeledger.backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class PortfolioService {

    private List<Map<String,Object>> portfolio =
            new ArrayList<>();

    public List<Map<String,Object>> getAll() {
        return portfolio;
    }

    public String buyStock(
            String name,
            int qty,
            double price) {

        for (Map<String,Object> item : portfolio) {

            if (item.get("name")
                    .toString()
                    .equalsIgnoreCase(name)) {

                int oldQty =
                        (int)item.get("qty");

                item.put("qty",
                        oldQty + qty);

                return "Stock Purchased";
            }
        }

        Map<String,Object> stock =
                new HashMap<>();

        stock.put("name", name);
        stock.put("qty", qty);
        stock.put("buyPrice", price);

        portfolio.add(stock);

        return "Stock Purchased";
    }

    public String sellStock(
            String name,
            int qty,
            double price) {

        for (Map<String,Object> item : portfolio) {

            if (item.get("name")
                    .toString()
                    .equalsIgnoreCase(name)) {

                int oldQty =
                        (int)item.get("qty");

                if (oldQty < qty) {
                    return "Not Enough Qty";
                }

                item.put("qty",
                        oldQty - qty);

                return "Stock Sold";
            }
        }

        return "Stock Not Found";
    }
}
