package com.tradeledger.backend.service;

import java.util.*;
import org.springframework.stereotype.Service;
import com.tradeledger.backend.model.PortfolioItem;

// Manages portfolio stocks
@Service
public class PortfolioService {

    private List<PortfolioItem> portfolio = new ArrayList<>();

    public List<PortfolioItem> getPortfolio() {
        return portfolio;
    }

    public void buyStock(String name, int qty, double price) {

        for (PortfolioItem item : portfolio) {
            if (item.getName().equalsIgnoreCase(name)) {
                item.addQty(qty);
                return;
            }
        }

        portfolio.add(new PortfolioItem(name, qty, price));
    }

    public boolean sellStock(String name, int qty) {

        for (PortfolioItem item : portfolio) {
            if (item.getName().equalsIgnoreCase(name)) {

                if (item.getQuantity() >= qty) {
                    item.reduceQty(qty);

                    if (item.getQuantity() == 0) {
                        portfolio.remove(item);
                    }

                    return true;
                }
            }
        }

        return false;
    }
}
