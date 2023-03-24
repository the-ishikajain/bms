package bms.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import bms.project.demo.Entity.NeftTransaction; 

public interface NeftTransactionRepository extends JpaRepository<NeftTransaction,Long>{

}