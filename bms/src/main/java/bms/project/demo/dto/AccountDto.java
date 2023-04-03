package bms.project.demo.dto;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountDto {
	private Long accountNumber;
    private String accountType;
    private double balance;
    private String registeredDate;
    private String userId;
}
