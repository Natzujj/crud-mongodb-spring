package com.mongocrud.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mongocrud.app.model.Project;
import com.mongocrud.app.repository.ProjectRepository;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    public Project findById(String id) {
        return projectRepository.findById(id).orElseThrow(() -> new RuntimeException("Project not found!"));
    }

    public Project save(Project project) {
        return projectRepository.save(project);
    }

    public void deleteById(String id) {
        projectRepository.deleteById(id);
    }
}
