package com.packages.vehicle_rental.controller;


import com.packages.vehicle_rental.dto.Login;
import com.packages.vehicle_rental.model.User;
import com.packages.vehicle_rental.services.implementation.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;


@RestController
@CrossOrigin(originPatterns = "*")
public class UserController {

    @Autowired
    private UserServiceImpl userService;


    //to login admin
    @PostMapping("/adminLogin")
    private ResponseEntity<?> adminLogin(@RequestBody Login login) {
        HashMap<String,String> res=new HashMap<>();
        try{
            if(login.getEmail().equals("admin@gmail.com") && login.getPassword().equals("admin")){
                return new ResponseEntity<>(login, HttpStatus.OK);
            }
            return new ResponseEntity<>("Invalid Credentials",HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to login
    @PostMapping("/userLogin")
    private ResponseEntity<?> findByEmailAndPassword(@RequestBody Login login)
    {
        HashMap<String,String> res=new HashMap<>();
        try
        {
            if(userService.findByEmailAndPassword(login.getEmail(),login.getPassword()) !=null)
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


    //to register user
    @PostMapping("/user")
    private ResponseEntity<?> regUser(@RequestBody User user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(userService.regUser(user), HttpStatus.OK);
        } catch (Exception e) {
            res.put("meg", e.getLocalizedMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to update user
    @PutMapping("/user/{id}")
    private ResponseEntity<?> updateUser(@RequestBody User user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
        } catch (Exception e) {
            res.put("meg", e.getLocalizedMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to get user  by id
    @GetMapping("/user/{id}")
    private ResponseEntity<?> getUserById(@PathVariable Long id) {
        HashMap<String, String> res = new HashMap<>();
        try
            {
                return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
            }catch(Exception e) {
            res.put("meg",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //to delete user by id
    @DeleteMapping("/user/{id}")
    private ResponseEntity<?> deleteUserById(@PathVariable Long id){
        HashMap<String,String > res=new HashMap<>();
    try{
                 userService.deleteUserById(id);
                res.put("meg","User deleted successfully!");
        return new ResponseEntity<>(res,HttpStatus.OK);
    }catch(Exception e){
        res.put("Error", e.getLocalizedMessage());
        return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    }

    //to get all users
    @GetMapping("/users")
    private  ResponseEntity<?> getAllUsers(){
        HashMap<String,String> res=new HashMap<>();
        try{
            return new ResponseEntity<>(userService.getAllUsers(),HttpStatus.OK);
        }catch (Exception e){
            res.put("meg",e.getLocalizedMessage());
            return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}