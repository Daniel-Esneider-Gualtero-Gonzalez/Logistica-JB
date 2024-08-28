import { Controller, Get, Render } from '@nestjs/common';


@Controller()
export class AppController {

  @Get("/")
  @Render("index")
  root(){
    return {namePage: "Inicio - Logistica JB"}
  }
  
}
