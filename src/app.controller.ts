import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor() {}
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  @Get('login')
  getLoginPage(@Res() res: Response) {
    return res.sendFile('login.html', { root: 'public' }); // Trả về trang HTML từ thư mục public
  }
  @Get('api/login')
  async redirectToCiamLogin(@Res() res: Response) {
    const redirectUri = 'http://localhost:8000/';
    // Redirect user to the login endpoint of CIAM with callback URL
    return res.redirect(
      `http://localhost:3006/?redirect_uri=${encodeURIComponent(redirectUri)}`,
    );
  }
}
