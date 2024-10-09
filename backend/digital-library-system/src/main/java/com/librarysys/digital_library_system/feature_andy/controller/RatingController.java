package com.librarysys.digital_library_system.feature_andy.controller;

import com.librarysys.digital_library_system.feature_andy.models.Rating;
import com.librarysys.digital_library_system.feature_andy.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rating")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping("/create")
    public Rating createRating(@RequestBody Rating rating) {
        return ratingService.saveRating(rating);
    }

    @GetMapping("/all")
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @GetMapping("/{id}")
    public Rating getRatingById(@PathVariable Integer id) {
        return ratingService.getRatingById(id);
    }

    @PutMapping("/{id}")
    public Rating updateRating(@PathVariable Integer id, @RequestBody Rating rating) {
        return ratingService.updateRating(id, rating);
    }

    @DeleteMapping("/{id}")
    public void deleteRating(@PathVariable Integer id) {
        ratingService.deleteRating(id);
    }
}
