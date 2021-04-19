package com.example.bugtracker.login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public interface LoginRepository extends
        JpaRepository<Login, Long> {

    @Query("SELECT s FROM Login s WHERE s.email =?1")
    Optional<Login> findLoginByEmail(String email);
}
