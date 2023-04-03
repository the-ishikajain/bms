package bms.project.demo.services;

import java.util.List;

import bms.project.demo.Entity.NeftTransaction;

public interface NeftTransactionService {
	public List<NeftTransaction> getNeftTransactions(Long userId);
	public void saveNeftTransaction(NeftTransaction transaction) throws Exception;
	public void deleteNeftTransaction(Long id);
}
