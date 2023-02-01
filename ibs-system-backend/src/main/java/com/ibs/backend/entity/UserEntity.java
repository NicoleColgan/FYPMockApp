package com.ibs.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

//this is an entity which will work with the jpa to save to entity to the database
///Java Persistence API is a collection of classes and methods to persistently store the vast amounts of data into a database
//any time we refer to the userEntity, were referring to the database entry
@Entity
@Data
@Table(name="users")
public class UserEntity {
    //annotate primary key
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;
}
