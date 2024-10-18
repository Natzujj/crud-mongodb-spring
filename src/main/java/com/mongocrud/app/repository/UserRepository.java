package com.mongocrud.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongocrud.app.model.User;

public interface UserRepository extends MongoRepository<User, String> {

}
