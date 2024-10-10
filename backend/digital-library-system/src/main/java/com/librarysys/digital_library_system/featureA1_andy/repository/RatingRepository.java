package com.librarysys.digital_library_system.featureA1_andy.repository;

import com.librarysys.digital_library_system.featureA1_andy.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {
}
