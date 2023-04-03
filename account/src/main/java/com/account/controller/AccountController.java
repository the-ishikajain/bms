package com.account.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.account.entity.Account;
import com.account.service.AccountService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class AccountController {
	
	@Autowired
	AccountService accountService;
	
	@GetMapping("/getAllAccounts")
	public ResponseEntity<?> getAllAccount(){
		try {
		return ResponseEntity.ok().body(accountService.getAllAccounts());
		}
		catch(Exception e){
			return ResponseEntity.ok().body("Not Found");
		}
	}
	
	@GetMapping("/getAllAccountsByUserId/{userId}")
	public ResponseEntity<?> getAllAccountByUserId(@PathVariable Long userId){
		try {
		return ResponseEntity.ok().body(accountService.getAllAccountsByUserId(userId));
		}
		catch(Exception e){
			return ResponseEntity.ok().body("Not Found");
		}
	}
	
	@GetMapping("/getAccount/{id}")
	public ResponseEntity<?> getAccount(@PathVariable Long id){
		try {
		return ResponseEntity.ok().body(accountService.getAccountById(id));
		}
		catch(Exception e){
			return ResponseEntity.ok().body("Not Found");
		}
	}
	
	@PostMapping("/insertAccount")
	public ResponseEntity<?> insertAccount(@RequestBody Account accountObj){
		try {
			return ResponseEntity.ok().body(accountService.saveAccount(accountObj));
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Server error");
		}
	}
	
	@PutMapping("/updateAccount")
	public ResponseEntity<?> updateAccount(@RequestBody Account accountObj){
		try {
			return ResponseEntity.ok().body(accountService.updateAccount(accountObj));
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Server error");
		}
	}

}
