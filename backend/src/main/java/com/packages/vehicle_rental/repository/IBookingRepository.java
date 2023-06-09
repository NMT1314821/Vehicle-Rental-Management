package com.packages.vehicle_rental.repository;

import com.packages.vehicle_rental.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBookingRepository  extends JpaRepository<Booking,Long> {
}
