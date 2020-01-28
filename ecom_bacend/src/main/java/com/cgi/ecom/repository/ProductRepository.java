package com.cgi.ecom.repository;

import com.cgi.ecom.model.Product;
import com.cgi.ecom.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query(value = "SELECT * FROM product ",nativeQuery = true)
    List<Product> getProducts();
}
