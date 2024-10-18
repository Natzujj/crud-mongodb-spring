package com.mongocrud.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mongocrud.app.model.Address;
import com.mongocrud.app.repository.AddressRepository;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public List<Address> findAll() {
        return addressRepository.findAll();
    }

    public Address findById(String id) {
        return addressRepository.findById(id).orElseThrow(() -> new RuntimeException("Address not found!"));
    }

    public Address save(Address address) {
        return addressRepository.save(address);
    }

    public void deleteById(String id) {
        addressRepository.deleteById(id);
    }
}
