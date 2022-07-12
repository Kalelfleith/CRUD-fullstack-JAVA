package com.example.projetoTecnico.controllers;

import com.example.projetoTecnico.dto.ColaboradorDTO;
import com.example.projetoTecnico.entities.Colaborador;
import com.example.projetoTecnico.services.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/colaborador")
public class ColaboradorController {

    @Autowired
    private ColaboradorService service;

    @PutMapping
    public StringBuilder saveColaborador(@RequestBody ColaboradorDTO dto) {
        StringBuilder message = new StringBuilder();
        try {
            service.saveColaborador(dto);
            message.append("Colaborador cadastrado com SUCESSO.");
        } catch (Exception ex) {
            message.append(ex.getMessage() + "ERRO ao cadastrar colaborador.");
        }

        return message;

    }

    @GetMapping
    public List<Colaborador> findByList() {
        List<Colaborador> colaborador = new ArrayList<>();
        try {
            colaborador = service.findByList();
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex.getMessage());
        }
        return colaborador;
    }
}
