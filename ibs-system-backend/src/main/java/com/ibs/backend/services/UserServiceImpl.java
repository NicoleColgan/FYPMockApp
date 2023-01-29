package com.ibs.backend.services;

import com.ibs.backend.entity.UserEntity;
import com.ibs.backend.model.User;
import com.ibs.backend.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        UserEntity userEntity=new UserEntity();

        //copy all the values in the user object into the user entity object
        BeanUtils.copyProperties(user, userEntity);
        System.out.println("user entity: "+userEntity);
        System.out.println("user: "+user);

        //save to db
        userRepository.save(userEntity);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        //get database user objects
        List<UserEntity> userEntities = userRepository.findAll();
        //convert to new users for ui
        //map function is used to convert from one type to another
        List<User> users = userEntities.stream().map(u -> new User(
                u.getId(),
                u.getFirstName(),
                u.getLastName(),
                u.getEmailId()))
                .collect(Collectors.toList());
        return users;
    }
}
