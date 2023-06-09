package com.packages.vehicle_rental.services;

import com.packages.vehicle_rental.model.Owner;
import java.util.List;
import java.util.Optional;

public interface IOwnerService {

    Owner findByEmailAndPassword(String email,String password);
    //to register owner
    Owner regOwner(Owner o);

    //to update owner
    Owner updateOwner(Owner o);

    //to find owner by id
    Optional<Owner> findOwnerById(Long id);

    //to delete owner by id
    void deleteOwnerById(Long id);

    //to get all owners at same time
    List<Owner> findAllOwners();
}
