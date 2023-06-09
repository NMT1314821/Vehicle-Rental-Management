package com.packages.vehicle_rental.services.implementation;

import com.packages.vehicle_rental.model.User;
import com.packages.vehicle_rental.repository.IUserRepository;
import com.packages.vehicle_rental.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl  implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    //to register user
    @Override
    public User regUser(User user){
        return userRepository.save(user);
    }


    @Override
    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email,password);
    }


    //to update User
    @Override
    public User updateUser(User user){
        return userRepository.save(user);
    }

    //to get user by id
    @Override
    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

    //delete user by id
    @Override
    public void deleteUserById(Long id){
     userRepository.deleteById(id);
    }

    //to get users
    @Override
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }


}
