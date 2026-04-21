package com.tradeledger.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.tradeledger.backend.service.HistoryService;

// Using Controller concept to provide transaction history to frontend
@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryController {

    @Autowired
    private HistoryService historyService;

    @GetMapping
    public Object getHistory() {
        return historyService.getAll();
    }
}
