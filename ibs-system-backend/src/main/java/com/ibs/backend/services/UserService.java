package com.ibs.backend.services;

import com.ibs.backend.model.User;

import java.util.List;

public interface UserService {
    User createUser(User user);

    List<User> getAllUsers();
}
