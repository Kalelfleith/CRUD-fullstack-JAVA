package com.example.projetoTecnico.controllers;

import com.example.projetoTecnico.dto.ColaboradorDTO;
import com.example.projetoTecnico.services.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/colaborador")
public class ColaboradorController {

    @Autowired
    private ColaboradorService service;

    @PutMapping
    public void saveColaborador(@RequestBody ColaboradorDTO dto) {
        service.saveColaborador(dto);
    }
}
