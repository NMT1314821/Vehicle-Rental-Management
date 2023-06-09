package com.packages.vehicle_rental.repository;

import com.packages.vehicle_rental.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVehicleRepository  extends JpaRepository<Vehicle,Long> {
}
