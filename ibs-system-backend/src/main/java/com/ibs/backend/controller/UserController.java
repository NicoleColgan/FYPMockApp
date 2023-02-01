package com.ibs.backend.controller;
//controller from whuch all the APAs will be handled

import com.ibs.backend.model.User;
import com.ibs.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    /**
     *  Delete objects by the key
     */
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Long id){
        boolean deleted=false;
        deleted= userService.deleteUser(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = null;
        user=userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user){
        user=userService.updateUser(id, user);
        return ResponseEntity.ok(user);
    }
    @GetMapping("/users/validate/{id}")
    public boolean validateUser(@RequestBody String emailId, @RequestBody String password){
        Boolean validated=false;
        validated=userService.validateUser(emailId, password);
        return validated;
    }
}
