package com.tradeledger.backend.model;

// Using Encapsulation to manage wallet balance securely
public class Wallet {

    private double balance = 20000;

    public double getBalance() {
        return balance;
    }

    public void deduct(double amount) {
        balance -= amount;
    }

    public void add(double amount) {
        balance += amount;
    }
}
