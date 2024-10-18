package com.mongocrud.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongocrud.app.model.Address;

public interface AddressRepository extends MongoRepository<Address, String>{

}
