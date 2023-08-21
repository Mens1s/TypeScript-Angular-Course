package com.luv2code.springbootecommerce.dao;

import com.luv2code.springbootecommerce.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
