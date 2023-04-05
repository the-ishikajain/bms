package bms1.project.demo.Entity;

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
@Table(name="customer")
public class Customer extends User {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private Long customerId;
	@Override
	public Boolean verifyUser()
	{
		return true;
	}

}
