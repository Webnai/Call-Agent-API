import { Module } from "@nestjs/common";
import { CallController } from "./call.controller";
import { CallService } from "./call.service";

@Module({
  controllers: [CallController],
  providers: [CallService],
})
export class CallModule {}
