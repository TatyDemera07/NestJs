import { Controller,  Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelacionService } from './relacion.service';
import { CreateRelacionDto } from './dto/create-relacion.dto';
import { UpdateRelacionDto } from './dto/update-relacion.dto';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('relacion')
export class RelacionController {
  constructor(private readonly relacionService: RelacionService) {}

  @Post()
  create(@Body() createRelacionDto: CreateRelacionDto) {
    return this.relacionService.create(createRelacionDto);
  }

  @Get()
  findAll() {
    return this.relacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelacionDto: UpdateRelacionDto) {
    return this.relacionService.update(+id, updateRelacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relacionService.remove(+id);
  }
}
