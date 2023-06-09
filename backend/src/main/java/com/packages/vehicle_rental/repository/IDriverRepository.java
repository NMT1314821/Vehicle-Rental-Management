package com.packages.vehicle_rental.repository;


import com.packages.vehicle_rental.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDriverRepository extends JpaRepository<Driver,Long> {
}


