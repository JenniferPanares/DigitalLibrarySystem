package com.librarysys.digital_library_system.featureA1_andy.advice;

import java.time.LocalDate;

public class CustomException extends RuntimeException {
    private final String errorCode;

    public CustomException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public static CustomException invalidUserId(Integer user_id) {
        return new CustomException("User ID {" + user_id + "} is not valid. User ID can not be 0", "INVALID_USER_ID");
    }

    public static CustomException invalidBookId(Integer book_id) {
        return new CustomException("Book ID {" + book_id + "} is not valid. Book ID can not be 0", "INVALID_BOOK_ID");
    }

    public static CustomException invalidRating(Float rating) {
        return new CustomException("Rating {" + rating + "} is not valid. Rating should be between 0.5 and 5", "INVALID_RATING");
    }

    public static CustomException invalidDate(LocalDate date) {
        return new CustomException("Date {" + date + "} is not valid. Date can not be null", "INVALID_DATE");
    }

    public static CustomException ratingIdNotFound(Integer rating_id) {
        return new CustomException("Rating with ID {" + rating_id + "} not found.", "RATING_NOT_FOUND" );
    }

    public static CustomException immutableUserId() {
        return new CustomException("User IDs assigned to a rating can not be updated", "USER_ID_IMMUTABLE" );
    }

    public static CustomException immutableBookId() {
        return new CustomException("Book IDs assigned to a rating can not be updated", "BOOK_ID_IMMUTABLE" );
    }
}
