import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();

    cursos: string[] = ['Angular', 'React', 'Node', 'Java'];

    constructor(private logService: LogService){

    }

    getCursos(): string[]{
        this.logService.consoleLog('Obtendo lista de cursos...');
        return this.cursos;
    }

    addCursos(curso: string):void {
        this.logService.consoleLog(`Criando novo curso... ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }

}