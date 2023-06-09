package com.packages.vehicle_rental.repository;

import com.packages.vehicle_rental.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User,Long> {


 User findByEmailAndPassword(String email,String password);


}
