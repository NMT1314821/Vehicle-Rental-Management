package com.packages.vehicle_rental.controller;


import com.packages.vehicle_rental.model.Request;
import com.packages.vehicle_rental.repository.IRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(originPatterns = "*")
public class RequestController {

    @Autowired
    private IRequestRepository requestService;



    @PostMapping("/request")
    private ResponseEntity<?> addRequest(@RequestBody Request request) {
            return new ResponseEntity<>(requestService.save(request), HttpStatus.OK);
    }

    @PutMapping("/request/{id}")
    private ResponseEntity<?> updateRequest(@RequestBody  Request request){
        HashMap<String,String> res=new HashMap<>();
        int date=request.getDate().getDayOfYear();
        int onDate=request.getOnDate().getDayOfYear();
        if(onDate>=date){
        return new ResponseEntity<>(requestService.save(request), HttpStatus.OK);
                    }else {
           res.put("Error","Dont select past date") ;
           return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/request/{id}")
    private ResponseEntity<?> getReq(@PathVariable Long id) {
        return new ResponseEntity<>(requestService.findById(id), HttpStatus.OK);
    }

    @GetMapping("/requests")
    private ResponseEntity<?> getAllReq() {
        return new ResponseEntity<>(requestService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/request/{id}")
    private ResponseEntity<?> cancelReq(@PathVariable Long id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            requestService.deleteById(id);
            res.put("meg", "deleted");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
