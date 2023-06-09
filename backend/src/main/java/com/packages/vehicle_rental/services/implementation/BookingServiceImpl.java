package com.packages.vehicle_rental.services.implementation;

import com.packages.vehicle_rental.model.Booking;
import com.packages.vehicle_rental.repository.IBookingRepository;
import com.packages.vehicle_rental.services.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements IBookingService {

    @Autowired
    private IBookingRepository bookingRepository;

    //to add booking
    @Override
    public Booking addBooking(Booking booking){
        return bookingRepository.save(booking);
    }

    //to delete booking
    @Override
    public  void deleteBookingById(Long id){
        bookingRepository.deleteById(id);
    }

    //to get booking by id
    @Override
    public Optional<Booking> getBookingById(Long id){
        return bookingRepository.findById(id);
    }

    //to get all bookings
    @Override
    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }
}
