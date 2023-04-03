package bms.project.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import bms.project.demo.Entity.RtgsTransaction; 

public interface RtgsTransactionRepository extends JpaRepository<RtgsTransaction,Long>{
	List<RtgsTransaction> findAllBySenderUserId(Long senderUserId);
}
