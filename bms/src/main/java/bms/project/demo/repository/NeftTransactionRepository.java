package bms.project.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import bms.project.demo.Entity.NeftTransaction;
import bms.project.demo.Entity.RtgsTransaction; 

public interface NeftTransactionRepository extends JpaRepository<NeftTransaction,Long>{
	List<NeftTransaction> findAllBySenderUserId(Long senderUserId);
}