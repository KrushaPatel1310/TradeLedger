package com.tradeledger.backend.service;

import java.util.*;
import org.springframework.stereotype.Service;
import com.tradeledger.backend.model.PortfolioItem;

// Using Service layer and Collection Framework concept to manage portfolio stocks
@Service
public class PortfolioService {

    private List<PortfolioItem> items = new ArrayList<>();

    public List<PortfolioItem> getAll() {
        return items;
    }

    public void buy(String name, int qty, double price) {

        for (PortfolioItem item : items) {

            if (item.getName().equalsIgnoreCase(name)) {
                item.addQty(qty);
                return;
            }
        }

        items.add(new PortfolioItem(name, qty, price));
    }

    public boolean sell(String name, int qty) {

        for (PortfolioItem item : items) {

            if (item.getName().equalsIgnoreCase(name)) {

                if (item.getQuantity() >= qty) {

                    item.reduceQty(qty);

                    if (item.getQuantity() == 0) {
                        items.remove(item);
                    }

                    return true;
                }
            }
        }

        return false;
    }
}
