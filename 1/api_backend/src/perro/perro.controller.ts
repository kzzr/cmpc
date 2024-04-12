import { Controller, Get, Query } from '@nestjs/common';
import { PerroService } from './perro.service';
import { Perro } from './perro.entity';

@Controller('perros')
export class PerroController {
    constructor(private readonly perroService: PerroService) {}
  
    @Get()
    async findAll(@Query() queryParams): Promise<Perro[]> {
      return this.perroService.findAll(queryParams);
    }
  }