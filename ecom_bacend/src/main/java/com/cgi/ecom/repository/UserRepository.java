package com.cgi.ecom.repository;

import com.cgi.ecom.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {


    @Query(value = "SELECT * FROM user WHERE id = ?1",nativeQuery = true)
    User findUser(String username);

}
