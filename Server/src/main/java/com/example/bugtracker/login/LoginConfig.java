package com.example.bugtracker.login;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.CommandLineRunner;
import java.util.List;


@Configuration
public class LoginConfig {
    @Bean
    CommandLineRunner commandLineRunner(LoginRepository repository) {
        return args -> {
            Login itamarPM = new Login(
                    "Itamar",
                    "Project Manager",
                    "itamar.tati1994@gmail.com",
                    "Password123!"
            );
            Login itamarTM = new Login(
                    "Itamar",
                    "Team Lead",
                    "itamar.softwaredeveloper@gmail.com",
                    "Password123!"
            );
            Login itamarDev = new Login(
                    "Itamar",
                    "Developer",
                    "itamar.dev@gmail.com",
                    "Password123!"
                    );

            repository.saveAll(
                    List.of(itamarPM, itamarTM, itamarDev)
            );

        };
    }

}
