import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateCursoDTO } from './dto/curso.dto';
import { CursoService } from './curso.service';
import { CursoEntity } from './curso.entity';
import { UpdateCursoDTO } from './dto/update-curso.dto';

@Controller('curso')
export class CursoController {

  constructor(private cursoService: CursoService){}  
  
  @Get()
  getCursos(): Promise<CursoEntity[]> {
    return this.cursoService.getCursos();
  }

  @Get(':id')
  getCurso(@Param('id', ParseIntPipe) id: number): Promise<CursoEntity> {
    console.log(id)
    console.log(typeof id)
    return this.cursoService.getCurso(id);
  }

  @Post('/create')
  createCurso(@Body() newCurso: CreateCursoDTO): Promise<CursoEntity>  {
    return this.cursoService.createCurso(newCurso)
  }

  @Delete(':id')
  deleteCurso(@Param('id', ParseIntPipe) id: number) {
    return this.cursoService.deleteCurso(id)
  }

  @Put(':id')
  updateCurso(@Param('id', ParseIntPipe) id:number, @Body()
  curso: UpdateCursoDTO){
    return this.cursoService.updateCurso(id, curso)
  }

  

}
