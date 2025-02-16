import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body('fullName') name: string,
    @Body('emailAddress') email: string,
    @Body('companyName') company: string,
  ): Promise<void> {
    await this.emailService.sendEmail(name, email, company);
  }
}