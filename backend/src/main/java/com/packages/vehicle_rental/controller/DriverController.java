package com.packages.vehicle_rental.controller;

import com.packages.vehicle_rental.model.Driver;
import com.packages.vehicle_rental.services.implementation.DriverServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Paths;
import java.util.HashMap;

@RestController
@CrossOrigin(originPatterns = "*")
public class DriverController {

    @Autowired
    private DriverServiceImpl driverService;

    //to add driver by owner
//    @PostMapping("/driver")
//    private ResponseEntity<?> addDriver(MultipartFile licenceCopy,String firstName,String lastName,String email,String phone){
//        HashMap<String,String> res=new HashMap<>();
//        try{
//            String filePath= Paths.get("").toAbsolutePath().toString();
//            String actualFilePath=Paths.get(filePath,"src","main","resources","static",licenceCopy.getOriginalFilename()).toString();
//            Driver d= Driver.builder()
//                    .licencePhoto(actualFilePath.getBytes())
//                    .firstName(firstName)
//                    .lastName(lastName)
//                    .email(email)
//                    .phone(phone)
//                    .build();
//            return new ResponseEntity<>(driverService.addDriver(d), HttpStatus.INTERNAL_SERVER_ERROR);
//        }catch (Exception e){
//            res.put("meg","Driver added successfully!");
//            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

//    //to update driver
//    @PutMapping ("/driver/{id}")
//    private ResponseEntity<?> updateDriver(MultipartFile licenceCopy,String firstName,String latsName,String email,String phone){
//        HashMap<String,String> res=new HashMap<>();
//        try{
//            String filePath=Paths.get("").toAbsolutePath().toString();
//            String actualFilePath=Paths.get(filePath,"src","main","resource","static",licenceCopy.getOriginalFilename()).toString();
//            Driver d= Driver.builder()
//                    .licencePhoto(actualFilePath.getBytes())
//                    .firstName(firstName)
//                    .lastName(latsName)
//                    .email(email)
//                    .phone(phone)
//                    .build();
//            return new ResponseEntity<>(driverService.updateDriver(d),HttpStatus.OK);
//        }catch (Exception e){
//            res.put("Error",e.getLocalizedMessage());
//            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    @PostMapping("/driver")
    private ResponseEntity<?> addDriver(@RequestBody Driver driver){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(driverService.addDriver(driver),HttpStatus.OK);
        }catch(Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to update driver
    @PutMapping("/driver/{id}")
    private  ResponseEntity<?> updateDriver(@RequestBody Driver driver){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(driverService.updateDriver(driver),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to get Driver by id
    @GetMapping("/driver/{id}")
    private ResponseEntity<?> getDriverById(@PathVariable Long id){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(driverService.findDriverById(id),HttpStatus.OK);
        }catch(Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to delete Driver by id
    @DeleteMapping("/driver/{id}")
    private ResponseEntity<?> deleteDriverById(@PathVariable Long id){
        HashMap<String,String> res=new HashMap<>();
        try{
            driverService.deleteDriverById(id);
            res.put("meg","Driver added successfully!");
            return new ResponseEntity<>(res,HttpStatus.OK);
        }catch(Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to get list of drivers
    @GetMapping("/drivers")
    private ResponseEntity<?> getListOfDrivers(){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(driverService.getAllDrivers(),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
