package bms.project.demo.controller;
import java.util.List;
//import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import bms.project.demo.repository.RtgsTransactionRepository;
import bms.project.demo.repository.NeftTransactionRepository;

import bms.project.demo.Entity.RtgsTransaction;
import bms.project.demo.Entity.NeftTransaction;

@RestController
public class TransactionController {
	@Autowired
	RtgsTransactionRepository rtgstranRepository;
	
	@Autowired
	NeftTransactionRepository nefttranRepository;

	@GetMapping (path="/getAllRtgsTransactions")
	public List<RtgsTransaction> getAllRtgsTransactions()
	{
		List<RtgsTransaction> tranLst=rtgstranRepository.findAll();           //http://localhost:8080/getAllTransactions
		return tranLst;
	}

	@PostMapping (path="/insertRtgsTransactions")
	public String insertRtgsTransaction(@RequestBody RtgsTransaction tranobj)
	{
	System.out.println("Received Data : " +tranobj);
	rtgstranRepository.save(tranobj);
	return "Record inserted successfuly";
	}

	@DeleteMapping (path="/deleteRtgsTransaction/{id}")
	public String deleteRtgsTransaction(@PathVariable int id)
	{
		System.out.println("Given id is : " +id);
		rtgstranRepository.deleteById(id);
		return "Record deleted Successfully";
		
	}
	
	
	@GetMapping (path="/getAllNeftTransactions")
	public List<NeftTransaction> getAllNeftTransactions()
	{
		List<NeftTransaction> tranLst=nefttranRepository.findAll();           //http://localhost:8080/getAllTransactions
		return tranLst;
	}

	@PostMapping (path="/insertNeftTransactions")
	public String insertNeftTransaction(@RequestBody NeftTransaction tranobj)
	{
	System.out.println("Received Data : " +tranobj);
    nefttranRepository.save(tranobj);
	return "Record inserted successfuly";
	}

	@DeleteMapping (path="/deleteNeftTransaction/{id}")
	public String deleteNeftTransaction(@PathVariable int id)
	{
		System.out.println("Given id is : " +id);
		nefttranRepository.deleteById(id);
		return "Record deleted Successfully";
		
	}
}