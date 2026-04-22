package com.tradeledger.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class HistoryService {

    private List<String> history =
            new ArrayList<>();

    public List<String> getAll() {
        return history;
    }

    public void addHistory(String text) {
        history.add(0, text);
    }
}
