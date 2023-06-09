package com.packages.vehicle_rental.controller;

import com.packages.vehicle_rental.model.Accept;
import com.packages.vehicle_rental.model.Booking;
import com.packages.vehicle_rental.model.User;
import com.packages.vehicle_rental.repository.IBookingRepository;
import com.packages.vehicle_rental.services.implementation.BookingServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;

@RestController
@CrossOrigin(originPatterns = "*")
public class BookingController {

    @Autowired
    private BookingServiceImpl bookingService;

    @Autowired
    private IBookingRepository bService;


    //to post booking
    @PostMapping("/booking")
    private ResponseEntity<?> addBooking(@RequestBody Booking booking) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(bookingService.addBooking(booking), HttpStatus.OK);
        } catch (Exception e) {
            res.put("Error", e.getLocalizedMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("/booking/{id}")
    private ResponseEntity<?> updateAccept(@RequestBody Booking b){
        return new ResponseEntity<>(bService.save(b),HttpStatus.OK);
    }

    //to delete booking by id
    @DeleteMapping("/booking/{id}")
    private ResponseEntity<?> deleteBookingById(@PathVariable Long id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            bookingService.deleteBookingById(id);
            res.put("meg", "Deleted successfully!");
            return new ResponseEntity<>(res, HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to get post by id
    @GetMapping("/booking/{id}")
    private ResponseEntity<?> getBookingById(@PathVariable Long id){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(bookingService.getBookingById(id),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to get all bookings
    @GetMapping("/bookings")
    private ResponseEntity<?> getAllBookings(){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(bookingService.getAllBookings(),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
