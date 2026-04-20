package com.tradeledger.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.tradeledger.backend.service.WalletService;

// Controller for wallet API
@RestController
@RequestMapping("/api/wallet")
@CrossOrigin(origins = "http://localhost:3000")
public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping
    public double getWalletBalance() {
        return walletService.getBalance();
    }
}
