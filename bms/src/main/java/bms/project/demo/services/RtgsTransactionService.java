package bms.project.demo.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import bms.project.demo.Entity.RtgsTransaction;

public interface RtgsTransactionService {
	
	public List<RtgsTransaction> getRtgsTransactions(Long userId);
	public void saveRtgsTransaction(RtgsTransaction transaction);
	public void deleteRtgsTransaction(Long id);
}
