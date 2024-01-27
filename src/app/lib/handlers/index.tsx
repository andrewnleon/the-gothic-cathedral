import useModifiedDragEnd from "../hooks/useDragHandler";

export const useHandlers = (dependencies: any) => {

  //Gargoyales
  const handleDragEndLionModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndLion,
    targetRef: dependencies.lionTargetRef,
    text: dependencies.glassWindowText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  //Architecture
  const handleDragEndGlassWindowModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndGlassWindow,
    targetRef: dependencies.glassWindowTargetRef,
    text: dependencies.glassWindowText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  const handleDragEndGargoyalesModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndGargoyales,
    targetRef: dependencies.gargoyalesTargetRef,
    text: dependencies.gargoyaleText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  const handleDragEndFlyingButtressesModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndFlyingButtresses,
    targetRef: dependencies.flyingButtressesTargetRef,
    text: dependencies.flyingButtressesText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  const handleDragEndGothicVaultModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndGothicVault,
    targetRef: dependencies.gothicVaultTargetRef,
    text: dependencies.gothicVaultText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  const handleDragEndRoofModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndRoof,
    targetRef: dependencies.roofTargetRef,
    text: dependencies.roofText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  return {
    handleDragEndLionModified,
    handleDragEndGlassWindowModified,
    handleDragEndGargoyalesModified,
    handleDragEndFlyingButtressesModified,
    handleDragEndGothicVaultModified,
    handleDragEndRoofModified,
  };
};
