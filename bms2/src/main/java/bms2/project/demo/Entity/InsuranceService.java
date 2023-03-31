package bms2.project.demo.Entity;

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
@Table(name="insuranceservice")
public class InsuranceService {
	@Id
	private String id;
	private String name;
	private String type;
	private double totalAmount; 
	private Date startDate;
	private Date endDate;
	private int noOfPayements;
	private double monthlyAmountToBePaid;
}
