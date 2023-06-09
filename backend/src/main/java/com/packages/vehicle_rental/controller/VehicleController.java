package com.packages.vehicle_rental.controller;

import com.packages.vehicle_rental.model.Vehicle;
import com.packages.vehicle_rental.services.implementation.VehicleServicesImpl;
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
public class VehicleController {

    @Autowired
    private VehicleServicesImpl vehicleServices;

    //with photo
    @PostMapping("/vehiclePhoto")
    private ResponseEntity<?> addVehicleWithPhoto(MultipartFile image,String vehicleType,String costPerHour,String costWithDriver,String brand,String vehicleNumber
    ,String city,String state,String street,String hr) {
        String filepath= Paths.get("").toAbsolutePath().toString();
        Path actualFilepath=Paths.get(filepath,"src","main","resources","static","images" , image.getOriginalFilename());
        try {
            image.transferTo(actualFilepath);
            Vehicle vehicle = Vehicle.builder()
                    .image(image.getOriginalFilename())
                    .vehicleType(vehicleType)
                    .costPerHour(costPerHour)
                    .brand(brand)
                    .city(city)
                    .costWithDriver(costWithDriver)
                    .vehicleNumber(vehicleNumber)
                    .city(city)
                    .state(state)
                    .street(street)
                    .hr(hr)
                    .build();
            System.out.println(vehicle);
            return new ResponseEntity<>(vehicleServices.addVehicle(vehicle), HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //with photo
    @PutMapping("/vehicle")
    private ResponseEntity<?> updateVehicle(Long id,MultipartFile image,String vehicleType,String costPerHour,String costWithDriver,String brand,String vehicleNumber
            ,String city,String state,String street) {
        String filepath= Paths.get("").toAbsolutePath().toString();
        Path actualFilepath=Paths.get(filepath,"src","main","resources","static","images" , image.getOriginalFilename());
        try {
            image.transferTo(actualFilepath);
            Vehicle v = Vehicle.builder()
                    .id(id)
                    .image(image.getOriginalFilename())
                    .vehicleType(vehicleType)
                    .costPerHour(costPerHour)
                    .brand(brand)
                    .city(city)
                    .costWithDriver(costWithDriver)
                    .vehicleNumber(vehicleNumber)
                    .city(city)
                    .state(state)
                    .street(street)
                    .build();

            System.out.println(v);
            return new ResponseEntity<>(vehicleServices.updateVehicle(v), HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    //to get vehicle by id
    @GetMapping("/vehicle/{id}")
    private ResponseEntity<?> getVehicleById(@PathVariable Long id){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(vehicleServices.getVehicle(id),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to delete vehicle by id
    @DeleteMapping("/vehicle/{id}")
    private ResponseEntity<?> deleteVehicleById(@PathVariable Long id){
        HashMap<String,String> res=new HashMap<>();
        try{
            vehicleServices.deleteVehicleById(id);
            res.put("meg","Vehicle deleted successfully!");
            return new ResponseEntity<>(res,HttpStatus.OK);
        }catch (Exception e){
            res.put("Error", e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to get all vehicles
    @GetMapping("/vehicles")
    private ResponseEntity<?> getALLVehicles(){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(vehicleServices.getAllVehicles(),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
 }
