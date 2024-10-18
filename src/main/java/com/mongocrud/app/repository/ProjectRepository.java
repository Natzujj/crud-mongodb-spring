package com.mongocrud.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongocrud.app.model.Project;

public interface ProjectRepository extends MongoRepository<Project, String>{

}
