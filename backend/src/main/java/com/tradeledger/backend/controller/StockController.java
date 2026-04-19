package com.tradeledger.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {

    @GetMapping("/api/test")
    public String test() {
        return "Backend Connected Successfully!";
    }
}
