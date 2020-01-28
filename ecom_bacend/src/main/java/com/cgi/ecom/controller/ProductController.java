package com.cgi.ecom.controller;

import com.cgi.ecom.model.LoginDao;
import com.cgi.ecom.model.Product;
import com.cgi.ecom.model.User;
import com.cgi.ecom.service.ProductService;
import com.cgi.ecom.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.*;




@CrossOrigin(value = "*")
@RestController
public class ProductController {

    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;

    public ProductController(UserService userService, ProductService productService) {
        this.userService = userService;
        this.productService = productService;
    }

    @PreAuthorize("hasRole('ROLE_seller')")
    @GetMapping("/getUser/{username}")
    public ResponseEntity<?> getUser(@PathVariable String username)
    {
        ResponseEntity responseEntity;

        User gotUser=userService.getUserByName(username);
        responseEntity = new ResponseEntity<User>(gotUser,HttpStatus.OK);
        return  responseEntity;
    }


    @PostMapping("/saveUser")
    public ResponseEntity<?> saveUser(@RequestBody User user)
    {
        ResponseEntity responseEntity;

        userService.save(user);
        responseEntity = new ResponseEntity<User>(user,HttpStatus.OK);
        return  responseEntity;
    }

    @PostMapping("/addProduct")
    public ResponseEntity<?> saveProduct(@RequestBody Product product)
    {
        ResponseEntity responseEntity;

        productService.saveProduct(product);
        responseEntity = new ResponseEntity<Product>(product,HttpStatus.OK);
        return  responseEntity;
    }

    @GetMapping("/getProducts")
    public List<Product> getProducts()
    {
        return productService.getProducts();
    }






}
