package pl.psk.clinicmanagement.presentation.controllers;

import org.springframework.web.bind.annotation.*;
import pl.psk.clinicmanagement.domain.security.User;
import pl.psk.clinicmanagement.domain.security.UserRepository;
import pl.psk.clinicmanagement.infrastructure.exceptions.UserNotFoundException;


import java.security.Principal;

@RestController
public class AuthorizationController {
    final private UserRepository userRepository;

    AuthorizationController(
            UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

    @GetMapping("/user/current")
    public User current(Principal principal) throws UserNotFoundException {
        return userRepository.findByEmail(principal.getName())
                .orElseThrow(UserNotFoundException::new);
    }

}

