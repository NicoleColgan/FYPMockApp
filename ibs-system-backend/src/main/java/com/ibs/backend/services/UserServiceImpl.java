package com.ibs.backend.services;

import com.ibs.backend.entity.UserEntity;
import com.ibs.backend.model.User;
import com.ibs.backend.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

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
}
