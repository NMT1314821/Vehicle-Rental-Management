package com.packages.vehicle_rental.controller;


import com.packages.vehicle_rental.model.NoDrAccept;
import com.packages.vehicle_rental.repository.INoDrAcceptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(originPatterns = "*")
public class NoDrAcceptController {

    @Autowired
    private INoDrAcceptRepository acceptService;

    @PostMapping("/acceptNoDr")
    private ResponseEntity<?> addNoDrAccept(@RequestBody NoDrAccept accept){
        return new ResponseEntity<>(acceptService.save(accept), HttpStatus.OK);
    }


    @PutMapping("/acceptNoDr/{id}")
    private ResponseEntity<?> updateNoDrAccept(@RequestBody NoDrAccept accept){
        return new ResponseEntity<>(acceptService.save(accept), HttpStatus.OK);
    }

    @GetMapping("/acceptNoDr/{id}")
    private ResponseEntity<?> getNoDAcceptById(@PathVariable Long id){
        System.out.println("Inside getNoDAcceptById method");
        return new ResponseEntity<>(acceptService.findById(id),HttpStatus.OK);
    }

    @GetMapping("/acceptsNoDr")
    private ResponseEntity<?> getAllNoDAccepts(){
        return new ResponseEntity<>(acceptService.findAll(),HttpStatus.OK);
    }

    @DeleteMapping("/acceptNoDr/{id}")
    private ResponseEntity<?> cancelAcc(@PathVariable Long id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            acceptService.deleteById(id);
            res.put("meg", "deleted");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
