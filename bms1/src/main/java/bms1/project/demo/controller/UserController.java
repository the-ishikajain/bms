package bms1.project.demo.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import bms1.project.demo.repository.EmployeeRepository;
import bms1.project.demo.repository.CustomerRepository;

import bms1.project.demo.Entity.Employee;
import bms1.project.demo.Entity.Customer;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {
	@Autowired
	EmployeeRepository empRepository;
	
	@Autowired
	CustomerRepository cusRepository;

	@GetMapping (path="/getAllEmployees")
	public List<Employee> getAllEmployees()
	{
		List<Employee> tranLst=empRepository.findAll();           //http://localhost:8080/getAllTransactions
		return tranLst;
	}

	@PostMapping (path="/insertEmployee")
	public String insertEmployee(@RequestBody Employee tranobj)
	{
	System.out.println("Received Data : " +tranobj);
	empRepository.save(tranobj);
	return "Record inserted successfully";
	}

	@PutMapping (path="/updateEmployee")
	public String updateEmployee(@RequestBody Employee empobj)
	{
		Optional<Employee> emo=empRepository.findById(empobj.getEmployeeId());
		if(emo.isPresent())
		{
			Employee eu=emo.get();
			eu.setName(empobj.getName());
			eu.setPhoneNumber(empobj.getPhoneNumber());
			eu.setEmail(empobj.getEmail());
			eu.setGender(empobj.getGender());
			eu.setAddress(empobj.getAddress());
			eu.setDob(empobj.getDob());
			eu.setDepartment(empobj.getDepartment());
			eu.setDesignation(empobj.getDesignation());
			eu=emo.get();
			empRepository.save(eu);
			return "Recode updated Successfully";
			
			
		}
		return "Unable to update record";
	}
	
	@DeleteMapping (path="/deleteEmployee/{id}")
	public String deleteEmployee(@PathVariable String id)
	{
		System.out.println("Given id is : " +id);
		empRepository.deleteById(id);
		return "Record deleted Successfully";
		
	}
	
	
	@GetMapping (path="/getAllCustomers")
	public List<Customer> getAllCustomers()
	{
		List<Customer> tranLst=cusRepository.findAll();           //http://localhost:8080/getAllTransactions
		return tranLst;
	}

	@PostMapping (path="/insertCustomers")
	public String insertCustomer(@RequestBody Customer tranobj)
	{
	System.out.println("Received Data : " +tranobj);
	cusRepository.save(tranobj);
	return "Record inserted successfuly";
	}

	@PutMapping (path="/updateCustomer")
	public String updateCustomer(@RequestBody Customer empobj)
	{
		Optional<Customer> emo=cusRepository.findById(empobj.getCustomerId());
		if(emo.isPresent())
		{
			Customer eu=emo.get();
			eu.setName(empobj.getName());
			eu.setPhoneNumber(empobj.getPhoneNumber());
			eu.setEmail(empobj.getEmail());
			eu.setGender(empobj.getGender());
			eu.setAddress(empobj.getAddress());
			eu.setDob(empobj.getDob());
			cusRepository.save(eu);
			return "Recode updated Successfully";
			
			
		}
		return "Unable to update record";
	}
	
	@DeleteMapping (path="/deleteCustomer/{id}")
	public String deleteCustomer(@PathVariable String id)
	{
		System.out.println("Given id is : " +id);
		cusRepository.deleteById(id);
		return "Record deleted Successfully";
	}
	
	
}