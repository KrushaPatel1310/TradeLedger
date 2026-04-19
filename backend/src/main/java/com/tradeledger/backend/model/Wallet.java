package com.tradeledger.backend.model;

// Using Encapsulation concept for wallet balance security
public class Wallet {

    private double balance = 100000;

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
