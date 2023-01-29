package com.ibs.backend.controller;
//controller from whuch all the APAs will be handled

import com.ibs.backend.model.User;
import com.ibs.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    /*the main purpose of @Autowired is to provide a convenient way for the developer to express a dependency without
     having to write explicit code to perform the lookup, thus making the code more readable and maintainable.
     */
    //so when this controller class is called, the userservice is automatically injected (object is created)
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //define an api which will handle the post reques to save the data
    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }


    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
