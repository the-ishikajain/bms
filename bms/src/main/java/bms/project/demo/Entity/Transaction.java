package bms.project.demo.Entity;

import java.util.Date;

import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
@MappedSuperclass
public abstract class Transaction {
	private String transactionType;
	private int senderUserId;
	private int receiverUserId;
	private int senderAccountNo;
	private int receiverAccountNo;
	private double amount;          
	private String transactionStatus;
	private Date timestamp;
	private String bankId;
	public Boolean checkBalance(int senderAccountNo)
	{
		double balance=0;
		if(balance>=this.amount)
			return true;
		return false;
	}
	
	public Boolean verify(String bankId,int senderAccountNo)
	{
		return true;
	}
	
	abstract public Boolean verifyTransactionAmount(String transactionType,double amount);
	
}
