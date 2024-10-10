package com.librarysys.digital_library_system.featureA1_andy.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ratingId;

    @Column (updatable = false)
    private int userId;

    @Column (updatable = false)
    private int bookId;

    private float rating;

    @Column(name="date_posted", nullable = false)
    private LocalDate date;
}
