package com.tradeledger.backend.service;

import java.util.*;
import org.springframework.stereotype.Service;

// Using Service layer and ArrayList concept to store transaction history
@Service
public class HistoryService {

    private List<String> history = new ArrayList<>();

    public List<String> getAll() {
        return history;
    }

    public void add(String text) {
        history.add(0, text);
    }
}
