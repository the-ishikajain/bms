package com.account.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.account.entity.Account;
import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long>{
	List<Account> findAllByUserId(Long userId);
}
