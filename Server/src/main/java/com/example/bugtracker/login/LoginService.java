package com.example.bugtracker.login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
@Service

public class LoginService {
    private  final LoginRepository loginRepository;
    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }
    public List<Login> getLogins() {
        return loginRepository.findAll();
    }
    public void addNewLogin(Login login) {
        Optional<Login> loginOptional = loginRepository
                .findLoginByEmail(login.getEmail());
        if(loginOptional.isPresent()) {
            throw new IllegalStateException("Email taken");
        }
        loginRepository.save(login);
    }

    public void deleteLogin(Long loginId) {
        boolean exists = loginRepository.existsById(loginId);
        if(!exists){
            throw new IllegalStateException("login with id " + loginId + " does not exist");
        }
        loginRepository.deleteById(loginId);
    }
    @Transactional
    public void updateLogin(Long loginId,
                            String name,
                            String role,
                            String email,
                            String password){
        Login login = loginRepository.findById(loginId)
                .orElseThrow(() -> new IllegalStateException(
                        "login with id " + loginId + " does not exist"
                ));
        if(name != null && name.length() > 0 && !Objects.equals(
                login.getName(),
                name
        )){
            login.setName(name);
        };
        if(role != null && role.length() > 0 && !Objects.equals(
                login.getRole(),
                role
        )){
            login.setRole(role);
        };
        if(email != null && email.length() > 0 && !Objects.equals(
                login.getEmail(),
                email
        )){
            Optional<Login> loginOptional = loginRepository
                    .findLoginByEmail(email);
            if(loginOptional.isPresent()) {
                throw new IllegalStateException("Email Taken");
            }
            login.setEmail(email);
        };
        if(password != null && password.length() > 0 && !Objects.equals(
                login.getPassword(),
                password
        )){
            login.setPassword(password);
        };

    }


}
