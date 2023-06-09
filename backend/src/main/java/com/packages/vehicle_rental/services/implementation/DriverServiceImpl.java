package com.packages.vehicle_rental.services.implementation;

import com.packages.vehicle_rental.model.Driver;
import com.packages.vehicle_rental.repository.IDriverRepository;
import com.packages.vehicle_rental.services.IDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverServiceImpl implements IDriverService {

    @Autowired
    private IDriverRepository driverRepository;

    //to add driver by his owner
    @Override
    public Driver addDriver(Driver driver){
        return driverRepository.save(driver);
    }

    //to update  driver by id
    @Override
    public Driver updateDriver(Driver driver){
        return driverRepository.save(driver);
    }

    //to get driver by id
    @Override
public Optional<Driver> findDriverById(Long id){
        return driverRepository.findById(id);
    }

    //to delete drive rby id
    @Override
    public void deleteDriverById(Long id){
        driverRepository.deleteById(id);
    }

    //to get all drivers
    @Override
    public List<Driver> getAllDrivers(){
        return driverRepository.findAll();
    }
}
