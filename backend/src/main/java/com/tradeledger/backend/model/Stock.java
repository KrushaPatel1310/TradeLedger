package com.tradeledger.backend.model;

import java.util.Random;

// Encapsulation for stock data
public class Stock {

    private String name;
    private double price;
    private double change;
    private String volume;
    private String marketCap;

    public Stock(String name, double price, double change) {
        this.name = name;
        this.price = price;
        this.change = change;

        // Auto generate values
        this.volume = (100 + new Random().nextInt(900)) + "K";
        this.marketCap = "₹" + (10 + new Random().nextInt(90)) + "K Cr";
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

    public String getVolume() {
        return volume;
    }

    public String getMarketCap() {
        return marketCap;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setChange(double change) {
        this.change = change;
    }
}
