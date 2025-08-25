package com.js.library_management.dto;

public class BookResponseDTO {
    private Long id;
    private String title;
    private String author;
    private String category;
    private int totalCopies;
    private int availableCopies;
    private double price;
 
    public BookResponseDTO(Long id, String title, String author, String category, int totalCopies, int availableCopies, double price) {
    	this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.totalCopies = totalCopies;
        this.availableCopies = availableCopies;
        this.price = price;
    }
 
    // Getters only
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public String getCategory() { return category; }
    public int getTotalCopies() { return totalCopies; }
    public int getAvailableCopies() { return availableCopies; }
    public double getPrice() { return price; }
}