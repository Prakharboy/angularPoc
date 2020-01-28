package com.cgi.ecom.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class Product {


    @Id
    @GeneratedValue()
    long id;
    String name;
    String type;
    BigInteger price;


    public Product(long id, String name, String type, BigInteger price) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;

    }

    public Product() {
    }

    public long getId() {
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


    public void setId(long id) {
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


}
