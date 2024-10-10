package com.librarysys.digital_library_system.featureA1_andy.service;


import com.librarysys.digital_library_system.featureA1_andy.advice.CustomException;
import com.librarysys.digital_library_system.featureA1_andy.model.Rating;
import com.librarysys.digital_library_system.featureA1_andy.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating saveRating(Rating rating) {
        if (rating.getUserId() == 0) {
            throw CustomException.invalidUserId(rating.getUserId());
        }
        if (rating.getBookId() == 0) {
            throw CustomException.invalidBookId(rating.getBookId());
        }
        if (rating.getRating() < 0.5 || rating.getRating() > 5) {
            throw CustomException.invalidRating(rating.getRating());
        }
        if (rating.getDate() == null) {
            throw CustomException.invalidDate(rating.getDate());
        }
         return ratingRepository.save(rating);
    }

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Rating getRatingById(Integer id) {
        return ratingRepository.findById(id)
                .orElseThrow(() -> CustomException.ratingIdNotFound(id));
    }

    public Rating updateRating(Integer id, Rating rating) {
        Rating existingRating = ratingRepository.findById(id)
                .orElseThrow(() -> CustomException.ratingIdNotFound(id));

        if(rating.getUserId() != null && !rating.getUserId().equals(existingRating.getUserId())) {
            throw CustomException.immutableUserId();
        }
        if(rating.getBookId() != null && !rating.getBookId().equals(existingRating.getBookId())) {
            throw CustomException.immutableBookId();
        }
        if (rating.getRating() < 0.5 || rating.getRating() > 5) {
            throw CustomException.invalidRating(rating.getRating());
        }

        existingRating.setRating(rating.getRating());
        return ratingRepository.save(existingRating);
    }

    public void deleteRating(Integer id) {
        ratingRepository.deleteById(id);
    }
}
