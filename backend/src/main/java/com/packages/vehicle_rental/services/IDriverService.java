package com.packages.vehicle_rental.services;

import com.packages.vehicle_rental.model.Driver;

import java.util.List;
import java.util.Optional;

public interface IDriverService {
    //to add driver by his owner
    Driver addDriver(Driver driver);

    //to update  driver by id
    Driver updateDriver(Driver driver);

    //to get driver by id
    Optional<Driver> findDriverById(Long id);

    //to delete drive rby id
    void deleteDriverById(Long id);

    //to get all drivers
    List<Driver> getAllDrivers();
}
