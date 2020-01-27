package com.cgi.ecom.service;

import com.cgi.ecom.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

public interface UserService {

    public User getUserByName(String username);

    public User save(User user);

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
