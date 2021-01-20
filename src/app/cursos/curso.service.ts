import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    cursos: string[] = ['Angular', 'React', 'Node', 'Java'];

    getCursos(): string[]{
        return this.cursos;
    }

    addCursos(curso: string):void {
        this.cursos.push(curso);
    }

}