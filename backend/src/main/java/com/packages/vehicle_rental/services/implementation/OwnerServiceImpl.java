package com.packages.vehicle_rental.services.implementation;

import com.packages.vehicle_rental.model.Owner;
import com.packages.vehicle_rental.repository.IOwnerRepository;
import com.packages.vehicle_rental.services.IOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OwnerServiceImpl implements IOwnerService {

    @Autowired
    private IOwnerRepository ownerRepository;

    @Override
    public Owner findByEmailAndPassword(String email, String password) {
        return ownerRepository.findByEmailAndPassword(email, password);
    }

    //to register owner
    @Override
    public Owner regOwner(Owner o){
        return ownerRepository.save(o);
    }

    //to update owner
    @Override
    public  Owner updateOwner(Owner o){
        return ownerRepository.save(o);
    }

    //to find owner by id
    @Override
    public Optional<Owner> findOwnerById(Long id){
        return ownerRepository.findById(id);
    }

    //to delete owner by id
    @Override
    public void deleteOwnerById(Long id){
       ownerRepository.deleteById(id);
    }

    //to get all owners at same time
    @Override
    public List<Owner> findAllOwners(){
        return ownerRepository.findAll();
    }
}
