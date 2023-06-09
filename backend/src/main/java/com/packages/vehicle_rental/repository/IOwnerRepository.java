package com.packages.vehicle_rental.repository;

import com.packages.vehicle_rental.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOwnerRepository extends JpaRepository<Owner,Long> {

    Owner findByEmailAndPassword(String email,String password);
}
