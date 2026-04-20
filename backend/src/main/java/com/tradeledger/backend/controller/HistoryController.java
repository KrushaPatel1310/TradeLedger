package com.tradeledger.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryController {

    @GetMapping
    public List<String> getHistory() {

        List<String> history = new ArrayList<>();

        history.add("BUY Reliance Qty 1");
        history.add("SELL TCS Qty 2");

        return history;
    }
}
