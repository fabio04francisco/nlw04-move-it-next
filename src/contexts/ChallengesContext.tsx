import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData );

interface Chanlenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;

}
interface ChallengesContextData {
  level: number; 
  currentExperience: number; 
  challengeCompleted: number;
  activeChallenge: Chanlenge;  
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(prev => prev + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level, 
        currentExperience, 
        challengeCompleted, 
        levelUp,
        startNewChallenge,
        activeChallenge}}>
      {children}
    </ChallengesContext.Provider>
  )
}