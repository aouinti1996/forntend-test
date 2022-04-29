package com.springheroes.wellco.repositories;

import com.springheroes.wellco.entities.Office;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface  OfficeRepo extends JpaRepository<Office,Integer> {

    @Query("select o from Office o where o.OfficeName =: officeNmae")
    Office findOfficeByOfficeName(@Param("officeNmae") String officeName);
}
