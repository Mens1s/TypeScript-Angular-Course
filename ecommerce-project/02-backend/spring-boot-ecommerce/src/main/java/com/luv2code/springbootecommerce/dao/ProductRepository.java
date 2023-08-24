package com.luv2code.springbootecommerce.dao;

import com.luv2code.springbootecommerce.Entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable); // http://localhost:8080/api/products/search/findByCategoryId?id=1
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable); // http://localhost:8080/api/products/search/findByNameContaining?name=Java
}
