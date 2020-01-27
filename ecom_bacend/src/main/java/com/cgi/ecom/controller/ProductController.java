package com.cgi.ecom.controller;

import com.cgi.ecom.model.LoginDao;
import com.cgi.ecom.model.User;
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

    public ProductController(UserService userService) {
        this.userService = userService;
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





}
