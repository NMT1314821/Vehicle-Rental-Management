package com.packages.vehicle_rental.repository;

import com.packages.vehicle_rental.model.NoDrAccept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INoDrAcceptRepository  extends JpaRepository<NoDrAccept,Long> {
}
