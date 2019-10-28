import gql from 'graphql-tag';

export type Tutoria = {
    id:number;
    materia: string;
    descripcion: string;
    cupos: number;
    idtutor: number;
    idtoken: string;
}


export type Query = {

    allTutorias: Tutoria[];
}

export const ALL_TUTORIAS = gql ` 
{
    allTutorias{
    id
    materia
    descripcion
    }
}
`

