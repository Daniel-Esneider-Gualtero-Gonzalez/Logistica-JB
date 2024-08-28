import { Controller, Get, Render } from '@nestjs/common';


@Controller()
export class AppController {

  @Get()
  @Render("index")
  root(){
    return {saludo: "Hello Word"}
  }
  
}
