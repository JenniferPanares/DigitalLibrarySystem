package com.librarysys.digital_library_system.feature_andy.service;


import com.librarysys.digital_library_system.feature_andy.models.Rating;
import com.librarysys.digital_library_system.feature_andy.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating saveRating(Rating rating) {
         return ratingRepository.save(rating);
    }

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Rating getRatingById(Integer id) {
        return ratingRepository.findById(id).orElse(null);
    }

    public Rating updateRating(Integer id, Rating rating) {
        rating.setRatingId(id);
        return ratingRepository.save(rating);
    }

    public void deleteRating(Integer id) {
        ratingRepository.deleteById(id);
    }
}
