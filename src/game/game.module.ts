import { Module } from '@nestjs/common';
import { GameController } from 'src/game/game.controller';
import { GameService } from 'src/game/gane.service';

@Module({
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
