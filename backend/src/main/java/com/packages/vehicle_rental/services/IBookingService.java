package com.packages.vehicle_rental.services;

import com.packages.vehicle_rental.model.Booking;

import java.util.List;
import java.util.Optional;

public interface IBookingService {
    //to add booking
    Booking addBooking(Booking booking);

    //to delete booking
    void deleteBookingById(Long id);

    //to get booking by id
    Optional<Booking> getBookingById(Long id);


    //to get all bookings
    List<Booking> getAllBookings();
}
