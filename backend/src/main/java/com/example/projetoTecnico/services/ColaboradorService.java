package com.example.projetoTecnico.services;

import com.example.projetoTecnico.dto.ColaboradorDTO;
import com.example.projetoTecnico.entities.Colaborador;
import com.example.projetoTecnico.repositories.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    @Transactional
    public void saveColaborador (ColaboradorDTO dto) {

        Colaborador colaborador = new Colaborador();

        colaborador.setNome(dto.getNome());
        colaborador.setTelefone(dto.getTelefone());
        colaborador.setCep(dto.getCep());
        colaborador.setRua(dto.getRua());
        colaborador.setBairro(dto.getBairro());
        colaborador.setCidade(dto.getCidade());
        colaborador.setUf(dto.getUf());

        colaborador = colaboradorRepository.saveAndFlush(colaborador);

    }

    @Transactional
    public List<Colaborador> findByList() {
        return colaboradorRepository.findAll();
    }
}
