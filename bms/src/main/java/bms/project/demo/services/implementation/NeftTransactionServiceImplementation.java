package bms.project.demo.services.implementation;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import bms.project.demo.Entity.NeftTransaction;
import bms.project.demo.dto.AccountDto;
import bms.project.demo.repository.NeftTransactionRepository;
import bms.project.demo.services.NeftTransactionService;

@Service
public class NeftTransactionServiceImplementation implements NeftTransactionService {
	@Autowired
	NeftTransactionRepository neftRepository;
	
	@Autowired
	RestTemplate restTemplate;
	
	Logger logger = LoggerFactory.getLogger(NeftTransactionServiceImplementation.class);
	
	public List<NeftTransaction> getNeftTransactions(Long userId){
		return neftRepository.findAllBySenderUserId(userId);
	}
	public void saveNeftTransaction(NeftTransaction transaction) throws Exception {
		neftRepository.save(transaction);
		ResponseEntity<AccountDto> senderAccountResponse = restTemplate
                .getForEntity("http://localhost:8091/getAccount/" + transaction.getSenderAccountNo(),
                AccountDto.class);
		
		ResponseEntity<AccountDto> receiverAccountResponse = restTemplate
                .getForEntity("http://localhost:8091/getAccount/" + transaction.getReceiverAccountNo(),
                AccountDto.class);
		
		AccountDto senderAccount = senderAccountResponse.getBody();
		AccountDto receiverAccount = receiverAccountResponse.getBody();
		
		if(senderAccount.getBalance() < transaction.getAmount())
			throw new Exception("Insufficient Balance");
		
		senderAccount.setBalance(senderAccount.getBalance() - transaction.getAmount());
		receiverAccount.setBalance(receiverAccount.getBalance() + transaction.getAmount());
		
		restTemplate.put("http://localhost:8091/updateAccount", receiverAccount);
		restTemplate.put("http://localhost:8091/updateAccount", senderAccount);
	}
	public void deleteNeftTransaction(Long id) {
		neftRepository.deleteById(id);
	}
}
