package pl.psk.clinicmanagement.domain.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



import javax.persistence.*;

@Entity
@Data
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column
    protected String email;

    @Column
    @JsonIgnore
    protected String password;

    @Column(name = "first_name")
    protected String firstName;

    @Column(name = "last_name")
    protected String lastName;

    @Column
    protected String city;

    @Column
    protected String street;

    @Column(name = "house_number")
    protected String houseNumber;

    @Column(name = "phone_number")
    protected String phoneNumber;

    @Column
    protected String roles = "";


}

