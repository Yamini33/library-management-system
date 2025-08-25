package com.js.library_management.dto;

public class BookRequestDTO {
    private String title;
    private String author;
    private String category;
    private int totalCopies;
    private double price;
 
    // Getters & Setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
 
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
 
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
 
    public int getTotalCopies() { return totalCopies; }
    public void setTotalCopies(int totalCopies) { this.totalCopies = totalCopies; }
 
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}