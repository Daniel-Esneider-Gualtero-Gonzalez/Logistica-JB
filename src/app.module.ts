import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CotizacionController } from './cotizacion/cotizacion.controller';
import { ServiceController } from './services/service.controller';



@Module({
  imports: [],
  controllers: [AppController,ServiceController,CotizacionController],
  providers: [AppService],
})
export class AppModule {
  
}
