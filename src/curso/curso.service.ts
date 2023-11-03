import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoEntity } from './curso.entity';
import {Repository} from 'typeorm'
import { CreateCursoDTO } from './dto/curso.dto';
import { UpdateCursoDTO } from './dto/update-curso.dto';

@Injectable()
export class CursoService {


   constructor(@InjectRepository(CursoEntity) private cursoRepository:
    Repository<CursoEntity> ) {}

     createCurso(curso: CreateCursoDTO){
        const newCurso = this.cursoRepository.create(curso)
        return this.cursoRepository.save(newCurso)
     }

     getCursos() {
       return this.cursoRepository.find()
     }

     getCurso(id: number){
      return this.cursoRepository.findOne({
         where: {
            id
         }
      })
     }

     deleteCurso(id: number){
      return this.cursoRepository.delete({ id });
     }

     updateCurso( id: number, curso: UpdateCursoDTO ){
       return this.cursoRepository.update({id}, curso)
     }

   


}
