
import { getBetDTO } from './dto/get-bet.dto';


export class GameService {
  
  //status
  async init() {
    const spinNumArr = [
      [5,5,5,7,1,0,4,6,7],
      [5,5,5,8,3,0,4,6,7],
      [5,5,5,0,4,2,1,6,7],
    ]
    return spinNumArr    
  }

  async getBet(getBetDTO: getBetDTO) {
    const { bet } = getBetDTO;
    // return [this.getRandomInt(8),this.getRandomInt(8),this.getRandomInt(8)]    
    return [7,7,7]    
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
