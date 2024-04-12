import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { Perro } from './perro.entity';

@Injectable()
export class PerroService {
    constructor(
      @InjectRepository(Perro)
      private perroRepository: Repository<Perro>,
    ) {}
  
    async findAll(queryParams): Promise<Perro[]> {
      const options: FindManyOptions<Perro> = {};
  
      // Aplicar filtros si existen en los parámetros de consulta
      if (queryParams.nombre) {
        options.where = { ...options.where, nombre: queryParams.nombre };
      }
      if (queryParams.tamano) {
        options.where = { ...options.where, tamano: queryParams.tamano };
      }
      // Agregar más filtros para otros campos aquí...
  
      return this.perroRepository.find(options);
    }
  }
