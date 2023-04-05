package bms1.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import bms1.project.demo.Entity.Customer; 

public interface CustomerRepository extends JpaRepository<Customer,Long>{
	Customer findByEmail(String email);
}