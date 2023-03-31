package bms2.project.demo.controller;
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
import bms2.project.demo.repository.InsuranceServiceRepository;
import bms2.project.demo.repository.UserServiceRepository;

import bms2.project.demo.Entity.InsuranceService;
import bms2.project.demo.Entity.UserService;

@RestController
public class ServiceController {
	@Autowired
	InsuranceServiceRepository insRepository;
	
	@Autowired
	UserServiceRepository userRepository;

	@GetMapping (path="/getAllServices")
	public List<InsuranceService> getAllInsuranceService()
	{
		List<InsuranceService> tranLst=insRepository.findAll();           //http://localhost:9001/getAllInsuranceService
		return tranLst;
	}

	@PostMapping (path="/insertInsuranceService")
	public String insertInsuranceService(@RequestBody InsuranceService tranobj)
	{
	System.out.println("Received Data : " +tranobj);
	insRepository.save(tranobj);
	return "Record inserted successfully";
	}

	@PutMapping (path="/updateInsuranceService")
	public String updateInsuranceService(@RequestBody InsuranceService empobj)
	{
		Optional<InsuranceService> emo=insRepository.findById(empobj.getId());
		if(emo.isPresent())
		{
			InsuranceService eu=emo.get();
			eu.setName(empobj.getName());
			eu.setType(empobj.getType());
			eu.setTotalAmount(empobj.getTotalAmount());
			eu.setStartDate(empobj.getStartDate());
			eu.setEndDate(empobj.getEndDate());
			eu=emo.get();
			eu=emo.get();
		    insRepository.save(eu);
			return "Recode updated Successfully";
			
			
		}
		return "Unable to update record";
	}
	
	@DeleteMapping (path="/deleteInsuranceService/{id}")
	public String deleteInsuranceService(@PathVariable String id)
	{
		System.out.println("Given id is : " +id);
		insRepository.deleteById(id);
		return "Record deleted Successfully";
		
	}
	
	
	@GetMapping (path="/getAllUsers")
	public List<UserService> getAllUsers()
	{
		List<UserService> tranLst=userRepository.findAll();           //http://localhost:8080/getAllTransactions
		return tranLst;
	}

	@PostMapping (path="/insertUsers")
	public String insertCustomer(@RequestBody UserService tranobj)
	{
	System.out.println("Received Data : " +tranobj);
	userRepository.save(tranobj);
	return "Record inserted successfuly";
	}

	@PutMapping (path="/updateUser")
	public String updateUserService(@RequestBody UserService empobj)
	{
		Optional<UserService> emo=userRepository.findById(empobj.getId());
		if(emo.isPresent())
		{
			UserService eu=emo.get();
			eu.setName(empobj.getName());
			eu.setType(empobj.getType());
			eu.setTotalAmount(empobj.getTotalAmount());
			eu.setStartDate(empobj.getStartDate());
			eu.setEndDate(empobj.getEndDate());
			eu.setUserId(empobj.getUserId());
			eu=emo.get();
			eu=emo.get();
			eu=emo.get();
		    userRepository.save(eu);
			return "Recode updated Successfully";
			
			
		}
		return "Unable to update record";
	}
	
	@DeleteMapping (path="/deleteUser/{id}")
	public String deleteUser(@PathVariable String id)
	{
		System.out.println("Given id is : " +id);
		userRepository.deleteById(id);
		return "Record deleted Successfully";
	}
	
	
}