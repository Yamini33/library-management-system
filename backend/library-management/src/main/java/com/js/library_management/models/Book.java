package com.js.library_management.models;

import jakarta.persistence.*;
 
@Entity
@Table(name = "books")
public class Book {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    private String title;
 
    private String author;
 
    private String category;
 
    private int totalCopies;
 
    private int availableCopies;
 
    private double price;
 
    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
 
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
 
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
 
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
 
    public int getTotalCopies() { return totalCopies; }
    public void setTotalCopies(int totalCopies) { this.totalCopies = totalCopies; }
 
    public int getAvailableCopies() { return availableCopies; }
    public void setAvailableCopies(int availableCopies) { this.availableCopies = availableCopies; }
 
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}
 