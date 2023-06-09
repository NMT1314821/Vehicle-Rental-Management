package com.packages.vehicle_rental.services;


import com.packages.vehicle_rental.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    //to register user
    User regUser(User user);

    public User findByEmailAndPassword(String email,String password);
    //to update User
    User updateUser(User user);
    //to get user by id
    Optional<User> getUserById(Long id);
    //delete user by id
    void deleteUserById(Long id);
    //to get users
    List<User> getAllUsers();

}
