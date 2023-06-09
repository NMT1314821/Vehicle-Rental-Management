package com.packages.vehicle_rental.repository;

import com.packages.vehicle_rental.model.Accept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAcceptRepository  extends JpaRepository<Accept,Long> {
}
