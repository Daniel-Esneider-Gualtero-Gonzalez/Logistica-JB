import { Module } from '@nestjs/common';
import { CotizacionController } from './cotizacion.controller';



@Module({
  imports: [],
  controllers: [CotizacionController],
  providers: [],
})
export class AppModule {
  
}
