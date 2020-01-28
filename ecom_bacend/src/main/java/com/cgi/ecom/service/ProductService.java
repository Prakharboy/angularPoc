package com.cgi.ecom.service;

import com.cgi.ecom.model.Product;

import java.util.List;

public interface ProductService {

    public List<Product> getProducts();
    public  Product saveProduct(Product product);
}
