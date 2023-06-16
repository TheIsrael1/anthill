import { useCallback } from "react";
import { planTypes } from "types"


interface IUsePlan{
currUserPlan: planTypes
}

const planLevels: Record<planTypes, number> = {
    starter: 1,
    student: 2,
    professional: 3,
    master: 4,
  };
  

function usePlan({currUserPlan}:IUsePlan ){

    const isAllowed = useCallback(
        (plan: planTypes) => {
          return planLevels[currUserPlan] >= planLevels[plan] ? true : false;
        },
        [currUserPlan],
      );

      return {isAllowed}
}


export default usePlan