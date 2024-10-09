package com.librarysys.digital_library_system.feature_andy.models;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ratingId;
    private int userId;
    private int bookId;
    private float rating;
    @Column(name="date_posted", updatable = false, nullable = false)
    private LocalDate date;
}
