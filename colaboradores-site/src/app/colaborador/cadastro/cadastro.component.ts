import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 
import {ColaboradorService} from '../../services/colaborador.service';
 
import {Colaborador} from '../../services/colaborador';
 
//import {Response} from '../../services/response';

 
@Component({
    selector: 'app-cadastro-colaborador',
    templateUrl: './cadastro.component.html',
    styleUrls:["./cadastro.component.css"]
  })
  export class CadastroComponent implements OnInit {
 
    private titulo:string;
    private colaborador:Colaborador = new Colaborador();
 
    constructor(private colaboradorService: ColaboradorService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
 
     /* this.activatedRoute.params.subscribe(parametro=>{
 
        if(parametro["idColaborador"] == undefined){
 
          this.titulo = "Novo Cadastro de Pessoa";
        }
        else{
 
          this.titulo = "Editar Cadastro de Pessoa";
          this.pessoaService.getPessoa(Number(parametro["codigo"])).subscribe(res => this.pessoa = res);
        }
 
 
      });  */    
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar():void {
 
      /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      //if(this.colaborador.idColaborador == undefined){
 
        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        //this.pessoaService.addPessoa(this.pessoa).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           //let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           //if(res.codigo == 1){
           // alert(res.mensagem);
           // this.pessoa = new Pessoa();
          // }
           //else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             //alert(res.mensagem);
          // }
        // },
         //(erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
         //   alert(erro);
         //});
 
      //}
      //else{
 
        /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
       // this.pessoaService.atualizarPessoa(this.pessoa).subscribe(response => {
 
        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
      //  let res:Response = <Response>response;
 
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
      //  if(res.codigo == 1){
      //    alert(res.mensagem);
      //    this.router.navigate(['/consulta-pessoa']);
      //  }
      //   else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
      //     alert(res.mensagem);
      //   }
      // },
     //  (erro) => {                    
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
          EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
      //    alert(erro);
      // });
     // }
 
    }
 
  }