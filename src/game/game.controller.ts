import {
  Body,
  Controller,
  UseInterceptors,
  Get,
  Post,
} from '@nestjs/common';
import { GameService } from 'src/game/gane.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { getBetDTO } from './dto/get-bet.dto';
import {
  ApiOperation, 
  ApiTags,
} from '@nestjs/swagger'


@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(
    private readonly gameService: GameService,
  ) {}

  @Get('init')
  @UseInterceptors(FileInterceptor('body'))
  @ApiOperation({description:"初始化"})
  async init() {
    const res = await this.gameService.init();
    return { success: true, content: res, msg: '初始化成功' };
  }
  @Post('bet')
  @UseInterceptors(FileInterceptor('body'))
  @ApiOperation({description:"下注"})
  async getBet(@Body() getBetDTO: getBetDTO) {
    const res = await this.gameService.getBet(getBetDTO);
    return { success: true, content: res, msg: '下注成功' };
  }
}
