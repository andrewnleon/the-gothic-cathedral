import { useEffect } from "react";

const useTransition = (currentState: any, setNextState: any, delay: any) => {
  useEffect(() => {
    if (!currentState) {
      const timer = setTimeout(() => {
        setNextState(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentState, setNextState, delay]);
};
export default useTransition;
