package com.packages.vehicle_rental.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

@Lob
   private String image;
    private String email;
    private String vehicleType;
    private String costPerHour;
    private String costWithDriver;
    private String brand;
    private String vehicleNumber;
    private String city;
    private String state;
    private String street;
    private String hr;


}

