package com.account.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.account.entity.Account;
import com.account.repository.AccountRepository;
import com.account.service.AccountService;

@Service
public class AccountServiceImplementation implements AccountService {
	@Autowired
	AccountRepository accountRepository;
	public Account getAccountById(Long id) {
		return accountRepository.findById(id).get();
	}
	
	public Account saveAccount(Account accountObj) {
		return accountRepository.save(accountObj);
	}
	
	public Account updateAccount(Account accountObj) {
		System.out.println(accountObj);
		return accountRepository.save(accountObj);
	}
	
	public List<Account> getAllAccounts(){
		return accountRepository.findAll();
	}
	
	public List<Account> getAllAccountsByUserId(Long id){
		return accountRepository.findAllByUserId(id);
	}
}
