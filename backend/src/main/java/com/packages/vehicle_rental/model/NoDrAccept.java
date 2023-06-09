package com.packages.vehicle_rental.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NoDrAccept {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String image;
    @Lob
    private String identityCard;
    @Lob
    private String licenceCopy;
    private String vehicleType;
    private String vehicleNumber;
    private String costPerHour;
    private String costWithDriver;
    private String brand;
    private String city;
    private String state;
    private String street;
    private String email;
    private String username;
    private  String userPhone;
    private String hr;


    private String ownerPhone;
    private String date;

    private String onDate;

}
