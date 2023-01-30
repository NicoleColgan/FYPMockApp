package com.ibs.backend.services;

import com.ibs.backend.model.User;

import java.util.List;

public interface UserService {
    User createUser(User user);

    List<User> getAllUsers();

    boolean deleteUser(Long id);

    User getUserById(Long id);

    User updateUser(Long id, User user);
}
