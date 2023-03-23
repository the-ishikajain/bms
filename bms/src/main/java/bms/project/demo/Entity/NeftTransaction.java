package bms.project.demo.Entity;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
@Entity
@Table(name="neft")
public class NeftTransaction extends Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String transactionId;
	@Override
	public Boolean verifyTransactionAmount(String transactionType,double amount)
	{
		return true;
	}

}