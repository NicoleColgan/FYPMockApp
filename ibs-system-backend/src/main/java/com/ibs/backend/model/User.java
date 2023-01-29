package com.ibs.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor //creates a contructor with all arguments
@NoArgsConstructor  //creates a constructor with no args
public class User {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
