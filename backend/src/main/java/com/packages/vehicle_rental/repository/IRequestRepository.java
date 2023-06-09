package com.packages.vehicle_rental.repository;

import com.packages.vehicle_rental.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRequestRepository extends JpaRepository<Request,Long> {
}
