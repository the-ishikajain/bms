package bms.project.demo.services.implementation;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import bms.project.demo.Entity.RtgsTransaction;
import bms.project.demo.dto.AccountDto;
import bms.project.demo.repository.RtgsTransactionRepository;
import bms.project.demo.services.RtgsTransactionService;

@Service
public class RtgsTransactionServiceImplementation implements RtgsTransactionService{
	@Autowired
	RtgsTransactionRepository rtgsRepository;
	@Autowired
	RestTemplate restTemplate;
	
	Logger logger = LoggerFactory.getLogger(RtgsTransactionServiceImplementation.class);
	
	public List<RtgsTransaction> getRtgsTransactions(Long userId){
		return rtgsRepository.findAllBySenderUserId(userId);
	}
	public void saveRtgsTransaction(RtgsTransaction transaction) {
		try {
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
			
			rtgsRepository.save(transaction);
		}
		catch(Exception e) {
			logger.info(e.toString());
		}
		
	}
	public void deleteRtgsTransaction(Long id) {
		rtgsRepository.deleteById(id);
	}
}
