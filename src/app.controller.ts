import { Controller, ExecutionContext, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from "@nestjs/passport"

@Controller("auth")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Get()
  getHostName(@Req() req:any ) {
    const host = req.headers.host
    return host
  }

  @Get("google")
  @UseGuards( AuthGuard("google") )
   async GooGle(){}

  @Get("google/callback")
  @UseGuards( AuthGuard("google") )
  async googleProdiver(@Req() req:any , @Res() res:any){
    return res.json({data:req.user})
  }

}
