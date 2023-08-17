import { Coach } from './Coach';
export class CricketCoach implements Coach {
    getDailyWorkout(): string {
        return "You have to work on cricket man, you have to!";
    }
}