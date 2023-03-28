package bms1.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import bms1.project.demo.Entity.Employee; 

public interface EmployeeRepository extends JpaRepository<Employee,String>{

}