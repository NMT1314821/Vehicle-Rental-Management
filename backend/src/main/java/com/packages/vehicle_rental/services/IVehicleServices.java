package com.packages.vehicle_rental.services;

import com.packages.vehicle_rental.model.Vehicle;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface IVehicleServices {
    //with photo
    Vehicle addVehicleWithPhoto(Vehicle vehicle, MultipartFile file);
    //to update vehicle
    Vehicle updateVehicleWithPhoto(Vehicle v,MultipartFile file);

    //to add vehicle
    Vehicle addVehicle(Vehicle vehicle);

    //to update vehicle
    Vehicle updateVehicle(Vehicle vehicle);

    //to get vehicle by id
    Optional<Vehicle> getVehicle(Long id);

    //to delete vehicle by id
    void deleteVehicleById(Long id);

    //to get all vehicles
    List<Vehicle> getAllVehicles();
}
