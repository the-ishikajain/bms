package com.account.service;

import java.util.List;

import com.account.entity.Account;

public interface AccountService {
	public Account getAccountById(Long id);
	public Account saveAccount(Account accountObj);
	public Account updateAccount(Account accountObj);
	public List<Account> getAllAccounts();
	public List<Account> getAllAccountsByUserId(Long userId);
}
