package com.librarysys.digital_library_system.controller;

import com.librarysys.digital_library_system.dto.RegisterRequestDTO;
import com.librarysys.digital_library_system.entity.User;
import com.librarysys.digital_library_system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody RegisterRequestDTO registerRequestDTO) {
        return userService.registerUser(registerRequestDTO);
    }

        /*
    @PostMapping("/login")
    public User loginUser(@RequestBody LoginRequestDTO loginRequestDTO) {
        return userService.loginUser(loginRequestDTO.getUsername(), loginRequestDTO.getPassword());
    }
    */

}