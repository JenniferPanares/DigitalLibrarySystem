package com.example.demo;

import com.example.demo.Service.BookService;
import com.example.demo.Model.Book;  // Use the correct Book class
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookBrowser implements CommandLineRunner {

    @Autowired
    private BookService bookService;  // Use BookService instead of BookRepository

    public static void main(String[] args) {
        SpringApplication.run(BookBrowser.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Use BookService to add books
        bookService.addBook(new Book("Java Programming", "Jen Can", 1925, "Programming", 4.5));
        bookService.addBook(new Book("Learn React", "Robert Smith", 1960, "Fiction", 4.9));
        bookService.addBook(new Book("Digital Marketing", "2q Press", 1949, "Dystopian", 4.8));
        bookService.addBook(new Book("What is Artificial Intelligence", "Andy Cristiano", 1851, "Adventure", 4.2));
        bookService.addBook(new Book("Information Technology", "Jon Snow", 1951, "Fiction", 4.0));

        System.out.println("Fake data inserted into the database");
    }
}
