package com.cgi.ecom.controller;


import java.util.Objects;

import com.cgi.ecom.jwt.JwtRequest;
import com.cgi.ecom.jwt.JwtResponse;
import com.cgi.ecom.jwt.JwtTokenUtil;
import com.cgi.ecom.model.User;
import com.cgi.ecom.service.UserService;
import com.cgi.ecom.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.userdetails.UserDetailsService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {


    private UserService userService;

    @Autowired
    @Qualifier("userServiceImpl")
    public void setUserService(UserService userService) {
        this.userService = userService;
    }




    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;



    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {


        if(authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword()))
        {
            System.out.println("pppp"+authenticationRequest.getUsername() + authenticationRequest.getPassword());
            final UserDetails userDetails = userService
                    .loadUserByUsername(authenticationRequest.getUsername());

            System.out.println("authorties are"+userService
                    .loadUserByUsername(authenticationRequest.getUsername()).getAuthorities());

            final String token = jwtTokenUtil.generateToken(userDetails);
            return ResponseEntity.ok(new JwtResponse(token));

        }
        else
        {
            throw new Exception("no");

        }


    }
    private boolean authenticate(String username, String password) throws Exception {
        User user = userService.getUserByName(username);
        if(user==null)
        {
            throw new Exception("user not found");
        }
        else
        {


            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if(encoder.matches(password, user.getPassword()))
            {
                return true;
            }
            else
            {
                return false;

            }

        }
    }
}