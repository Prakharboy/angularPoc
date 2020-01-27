package com.cgi.ecom.model;

import java.math.BigInteger;

public class Product {
    String id;
    String name;
    String type;
    BigInteger price;
    double rating;

    public Product(String id, String name, String type, BigInteger price, double rating) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.rating = rating;
    }

    public Product() {
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public BigInteger getPrice() {
        return price;
    }

    public double getRating() {
        return rating;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setPrice(BigInteger price) {
        this.price = price;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
