package com.tradeledger.backend.model;

// Using OOP Encapsulation concept to protect stock data using private fields
public class Stock {

    private String name;
    private double price;
    private double change;

    public Stock(String name, double price, double change) {
        this.name = name;
        this.price = price;
        this.change = change;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public double getChange() {
        return change;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setChange(double change) {
        this.change = change;
    }
}
