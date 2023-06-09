package com.packages.vehicle_rental.controller;


import com.packages.vehicle_rental.dto.Login;
import com.packages.vehicle_rental.model.Owner;
import com.packages.vehicle_rental.repository.IOwnerRepository;
import com.packages.vehicle_rental.services.implementation.OwnerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(originPatterns = "*")
public class OwnerController {

    @Autowired
    private OwnerServiceImpl ownerService;


    //to login
    @PostMapping("/ownerLogin")
    private ResponseEntity<?> findByEmailAndPassword(@RequestBody Login login)
    {
        HashMap<String,String> res=new HashMap<>();
        try
        {
            if(ownerService.findByEmailAndPassword(login.getEmail(),login.getPassword()) !=null)
            {
                res.put("message","success");
                return new ResponseEntity<>(login,HttpStatus.OK);
            }
            else
            {
                res.put("error","fail");
                return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to register owner
    @PostMapping("/owner")
    private ResponseEntity<?> regOwner(@RequestBody Owner owner){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(ownerService.regOwner(owner),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to update  owner
    @PutMapping("/owner/{id}")
    private ResponseEntity<?> updateOwner(@RequestBody Owner owner){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(ownerService.updateOwner(owner),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.OK);
        }
    }

    //to get owner by id
    @GetMapping("/owner/{id}")
    private ResponseEntity<?> getOwnerById(@PathVariable Long id){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(ownerService.findOwnerById(id),HttpStatus.OK);
        }catch(Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to delete owner by id
    @DeleteMapping("/owner/{id}")
    private ResponseEntity<?> deleteOwnerById(@PathVariable Long id){
        HashMap<String,String> res=new HashMap<>();
        try{
            ownerService.deleteOwnerById(id);
            res.put("meg","Owner deleted successfully!");
          return new ResponseEntity<>(res,HttpStatus.OK);
        }catch(Exception e){
            res.put("meg",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/owners")
    private  ResponseEntity<?> findAllOwners(){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(ownerService.findAllOwners(),HttpStatus.OK);
        }catch (Exception e){
            res.put("Error",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
