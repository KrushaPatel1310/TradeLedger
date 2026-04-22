package com.tradeledger.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tradeledger.backend.service.HistoryService;

// Controller layer for history APIs
@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryController {

    @Autowired
    private HistoryService historyService;

    // Get all history records
    @GetMapping
    public Object getHistory() {
        return historyService.getAll();
    }
}
