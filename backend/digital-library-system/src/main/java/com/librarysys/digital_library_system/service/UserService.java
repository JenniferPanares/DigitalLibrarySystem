package com.librarysys.digital_library_system.service;

import com.librarysys.digital_library_system.dto.RegisterRequestDTO;
import com.librarysys.digital_library_system.entity.User;
import com.librarysys.digital_library_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Registration method (existing)
    public User registerUser(RegisterRequestDTO registerRequestDTO) {
        // Check if user exists
        if (userRepository.findByUsername(registerRequestDTO.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        // Map DTO to Entity
        User user = new User();
        user.setUsername(registerRequestDTO.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequestDTO.getPassword()));
        user.setFirstName(registerRequestDTO.getFirstName());
        user.setLastName(registerRequestDTO.getLastName());
        user.setEmail(registerRequestDTO.getEmail());
        user.setPhone(registerRequestDTO.getPhone());

        // Save User
        return userRepository.save(user);
    }

    // CREATE User (if you need additional create logic beyond registration)
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // READ All Users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // READ User by ID
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    // UPDATE User
    public User updateUser(Long id, User updatedUser) {
        User existingUser = getUserById(id); // Fetch existing user by ID
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPhone(updatedUser.getPhone());

        // Optional: If you want to update the password only if a new one is provided
        if (!updatedUser.getPassword().isEmpty()) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        return userRepository.save(existingUser);
    }

    // DELETE User
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }
}
