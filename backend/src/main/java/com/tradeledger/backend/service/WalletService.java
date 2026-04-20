package com.tradeledger.backend.service;

import org.springframework.stereotype.Service;
import com.tradeledger.backend.model.Wallet;

// Service layer handles wallet logic
@Service
public class WalletService {

    private Wallet wallet = new Wallet();

    public double getBalance() {
        return wallet.getBalance();
    }

    public void deductMoney(double amount) {
        wallet.deduct(amount);
    }

    public void addMoney(double amount) {
        wallet.add(amount);
    }
}
