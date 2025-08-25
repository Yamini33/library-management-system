package com.js.library_management.dto;


import com.js.library_management.enums.Role;
 
public class UserResponseDTO {
    private Long id;
    private String name;
    private String email;
    private Role role;
 
    public UserResponseDTO(Long id, String name, String email, Role role) {
		this.id = id;
		this.name = name;
		this.email = email;
        this.role = role;
    }
 
    // Getters only (response shouldn’t be mutable)
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public Role getRole() { return role; }
}
