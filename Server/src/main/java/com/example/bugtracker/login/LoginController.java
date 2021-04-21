package com.example.bugtracker.login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/login")
public class LoginController {
    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<Login> getLogins() {
        return loginService.getLogins();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public void registerNewLogin(@RequestBody Login login){
        loginService.addNewLogin(login);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path = "{loginId}")
    public void deleteLogin(@PathVariable("loginId") Long loginId){
        loginService.deleteLogin(loginId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(path = "{loginId}")
    public void updateLogin(
            @PathVariable("loginId") Long loginId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String role,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String password) {
        loginService.updateLogin(loginId, name, role, email, password);
    }
}
