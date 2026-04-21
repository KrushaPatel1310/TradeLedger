package com.tradeledger.backend.service;

import org.springframework.stereotype.Service;

// Using Service layer and Encapsulation concept to manage wallet balance securely
@Service
public class WalletService {

    private double balance = 20000;

    public double getBalance() {
        return balance;
    }

    public boolean deduct(double amount) {

        if (balance >= amount) {
            balance -= amount;
            return true;
        }

        return false;
    }

    public void add(double amount) {
        balance += amount;
    }
}
