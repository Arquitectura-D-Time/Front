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

//export const ALL_TUTORIAS = gql ` 
//{
  //  allTutorias{
   // id
    //materia
    //descripcion
    //}
//}
//`;


export const CREATE_TUTORIA = gql`
  mutation createTutoria ($materia: String!, $descripcion: String!, $cupos: Int!, $idtutor: Int!,$idtoken:String!){
    createTutoria(tutoria: {
        materia: $materia,
        descripcion: $descripcion,
        cupos: $cupos,
        idtutor: $idtutor,
        idtoken: $idtoken
    }) {
      id
    }
  }
`;

