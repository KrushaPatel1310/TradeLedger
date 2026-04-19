package com.tradeledger.backend.model;

// Transaction class stores buy and sell history
public class Transaction {

    private String stockName;
    private int quantity;
    private String type;

    public Transaction(String stockName, int quantity, String type) {
        this.stockName = stockName;
        this.quantity = quantity;
        this.type = type;
    }

    public String getStockName() {
        return stockName;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getType() {
        return type;
    }
}
