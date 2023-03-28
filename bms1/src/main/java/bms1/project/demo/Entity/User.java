package bms1.project.demo.Entity;

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
public abstract class User {
	private String name;
	private String phoneNumber;
	private String email;
	private String gender;
	private String address;  
	private Date dob;
	public abstract Boolean verifyUser();
}
