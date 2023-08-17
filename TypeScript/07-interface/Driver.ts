import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let coaches: Coach[] = [cricketCoach, golfCoach];

for(let temp of coaches) console.log(temp.getDailyWorkout());