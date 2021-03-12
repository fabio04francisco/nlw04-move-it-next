import { createContext, ReactNode, useState } from 'react';

export const ChallengesContext = createContext({} as ChallengesContextData );

interface ChallengesContextData {
  level: number; 
  currentExperience: number; 
  challengeCompleted: number;  
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

  function levelUp() {
    setLevel(prev => prev + 1);
  }

  function startNewChallenge() {
    console.log('New challenge')
  }

  return (
    <ChallengesContext.Provider
      value={{
        level, 
        currentExperience, 
        challengeCompleted, 
        levelUp,
        startNewChallenge}}>
      {children}
    </ChallengesContext.Provider>
  )
}