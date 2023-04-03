package bms.project.demo.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import bms.project.demo.services.implementation.NeftTransactionServiceImplementation;
import bms.project.demo.services.implementation.RtgsTransactionServiceImplementation;
import bms.project.demo.Entity.RtgsTransaction;
import bms.project.demo.Entity.NeftTransaction;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TransactionController {
	
	Logger logger = LoggerFactory.getLogger(TransactionController.class);
	
	@Autowired
	RtgsTransactionServiceImplementation rtgsService;
	
	@Autowired
	NeftTransactionServiceImplementation neftService;

	@GetMapping (path="/getAllRtgsTransactions/{userId}")
	public ResponseEntity<?> getAllRtgsTransactions(@PathVariable Long userId)
	{
		logger.info("Getting transactions for userId: " + userId);
		return ResponseEntity.ok().body(
				rtgsService.getRtgsTransactions(userId));
	}

	@PostMapping (path="/insertRtgsTransactions")
	public ResponseEntity<?> insertRtgsTransaction(@RequestBody RtgsTransaction tranobj)
	{
		try {
			logger.info("Rtgs transaction: " + tranobj);
			rtgsService.saveRtgsTransaction(tranobj);
			return ResponseEntity.ok().body("{\"message\": \"inserted successfully\"}");
		}
		catch(Exception e) {
			logger.warn(e.toString());
			return ResponseEntity.ok().body(e.toString());
		}
	}

	@DeleteMapping (path="/deleteRtgsTransaction/{id}")
	public ResponseEntity<?> deleteRtgsTransaction(@PathVariable Long id)
	{
		try {
			logger.info("Delete with id: " + id);
			rtgsService.deleteRtgsTransaction(id);
			return ResponseEntity.ok().body("deleted successfully");
		}
		catch(Exception e) {
			logger.warn(e.toString());
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
		
	}
	
	
	@GetMapping (path="/getAllNeftTransactions/{userId}")
	public ResponseEntity<?> getAllNeftTransactions(@PathVariable Long userId)
	{
		return ResponseEntity.ok().body(neftService.getNeftTransactions(userId));
	}

	@PostMapping (path="/insertNeftTransactions")
	public ResponseEntity<?> insertNeftTransaction(@RequestBody NeftTransaction tranobj)
	{
		try {
			logger.info("Insert Neft: " + tranobj);
			neftService.saveNeftTransaction(tranobj);
			return ResponseEntity.ok().body("{\"message\": \"inserted successfully\"}");
		}
		catch(Exception e) {
			logger.warn(e.toString());
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	}

	@DeleteMapping (path="/deleteNeftTransaction/{id}")
	public ResponseEntity<?> deleteNeftTransaction(@PathVariable Long id)
	{
		try {
			logger.info("Delete Neft with id: " + id);
			neftService.deleteNeftTransaction(id);
			return ResponseEntity.ok().body("deleted successfully");
		}
		catch(Exception e) {
			logger.warn(e.toString());
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
		
	}
}