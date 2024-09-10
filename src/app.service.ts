import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    getOpinions(){
        let opinions =  []
        for (let i = 0; i < 6; i++) {
            const textOpinion = "int in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur" 
            opinions.push({textOpinion : textOpinion})
    
        }
        return opinions
    }
 
}
