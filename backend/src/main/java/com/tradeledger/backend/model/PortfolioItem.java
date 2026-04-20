package com.tradeledger.backend.model;

// Stores user owned stocks
public class PortfolioItem {

    private String name;
    private int quantity;
    private double buyPrice;

    public PortfolioItem(String name, int quantity, double buyPrice) {
        this.name = name;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getBuyPrice() {
        return buyPrice;
    }

    public void addQty(int qty) {
        quantity += qty;
    }

    public void reduceQty(int qty) {
        quantity -= qty;
    }
}
