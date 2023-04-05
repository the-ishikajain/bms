package bms1.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import bms1.project.demo.Entity.Customer;
import bms1.project.demo.Entity.Employee; 

public interface EmployeeRepository extends JpaRepository<Employee,String>{
	Customer findByEmail(String email);
}