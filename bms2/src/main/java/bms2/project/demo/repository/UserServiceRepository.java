package bms2.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import bms2.project.demo.Entity.UserService; 

public interface UserServiceRepository extends JpaRepository<UserService,String>{

}
