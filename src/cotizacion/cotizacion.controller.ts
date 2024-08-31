import { Controller, Get, Render } from '@nestjs/common';


@Controller()
export  class CotizacionController {

  @Get("/cotizar")
  @Render("cotizar")
  root(){
    return {namePage: "Cotizar - Logistica JB"}
  }
  
}
