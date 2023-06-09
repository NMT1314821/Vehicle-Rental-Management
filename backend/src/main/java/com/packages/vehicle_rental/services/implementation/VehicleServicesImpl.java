package com.packages.vehicle_rental.services.implementation;

import com.packages.vehicle_rental.model.Vehicle;
import com.packages.vehicle_rental.repository.IVehicleRepository;
import com.packages.vehicle_rental.services.IVehicleServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleServicesImpl implements IVehicleServices {

    @Autowired
    private IVehicleRepository vehicleRepository;

    @Override
    public Vehicle addVehicleWithPhoto(Vehicle vehicle, MultipartFile file)  {

        return   vehicleRepository.save(vehicle);
    }
    //to update vehicle
    @Override
    public Vehicle updateVehicleWithPhoto(Vehicle v,MultipartFile file) {
        return vehicleRepository.save(v);
    }

    //to add vehicle
    @Override
    public Vehicle addVehicle(Vehicle vehicle){
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle updateVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    //to get vehicle by id
    @Override
    public Optional<Vehicle> getVehicle(Long id){
        return vehicleRepository.findById(id);
    }

    //to delete vehicle by id
    @Override
    public void deleteVehicleById(Long id){
        vehicleRepository.deleteById(id);
    }

    //to get all vehicles
    @Override
    public List<Vehicle> getAllVehicles(){
        return vehicleRepository.findAll();
    }



}
