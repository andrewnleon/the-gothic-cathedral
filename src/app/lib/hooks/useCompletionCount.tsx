import { useState, useEffect } from 'react';

const useCompletionCount = (
  isDroppedStates: boolean[], 
  onAllCompleted: () => void, 
  isContinue: boolean
): number => {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const count = isDroppedStates.filter(isDropped => isDropped).length;
    setCompletedCount(count);

    if (count === isDroppedStates.length && isContinue) {
      onAllCompleted();
    }
  }, [isDroppedStates, onAllCompleted, isContinue]);

  return completedCount;
};

export default useCompletionCount;
