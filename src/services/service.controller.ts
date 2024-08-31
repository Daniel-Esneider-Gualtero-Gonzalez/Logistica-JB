import { Controller, Get, Render } from '@nestjs/common';


@Controller()
export  class ServiceController {

  @Get("/services")
  @Render("services")
  root(){
    return {namePage: "Services - Logistica JB"}
  }
  
}
