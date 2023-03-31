package bms2.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import bms2.project.demo.Entity.InsuranceService; 

public interface InsuranceServiceRepository extends JpaRepository<InsuranceService,String>{

}
