package com.packages.vehicle_rental.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Booking {
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

    private String username;
    private  String userPhone;
    private String hr;

    private String driver;
    private String driverName;
    private String driverPhone;

    private String amount;
    private String cardNo;
    private String cvv;

    private LocalDate onDate;
    private LocalDate date;

    private String userMail;
    private String mail;

}
