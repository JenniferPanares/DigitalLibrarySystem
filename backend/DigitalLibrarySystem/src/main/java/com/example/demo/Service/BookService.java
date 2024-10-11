package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(int id) {
        return bookRepository.findById(id);
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(int id, Book newBookData) {
        Optional<Book> existingBook = bookRepository.findById(id);
        if (existingBook.isPresent()) {
            Book book = existingBook.get();
            book.setTitle(newBookData.getTitle());
            book.setAuthor(newBookData.getAuthor());
            book.setGenre(newBookData.getGenre());
            book.setPublicationYear(newBookData.getPublicationYear());
            book.setRating(newBookData.getRating());
            return bookRepository.save(book);
        }
        return null;  // Handle error case (e.g., throw custom exception)
    }

    public void deleteBook(int id) {
        bookRepository.deleteById(id);
    }
}
