import useModifiedDragEnd from "../hooks/useDragHandler";

export const useHandlers = (dependencies: any) => {
  // Architecture
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

  // Flying Buttressess
  const handleDragEndFlyingButtressesSidingModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndFlyingButtressesSiding,
    targetRef: dependencies.flyingButtressesTargetRef,
    text: dependencies.flyingButtressesSideText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });
  const handleDragEndWoodFrameModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndWoodFrame,
    targetRef: dependencies.woodFrameTargetRef,
    text: dependencies.woodFrameText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  // Stained Windows
  const handleDragEndGlassLeftModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndGlassLeft,
    targetRef: dependencies.glassLeftTargetRef,
    text: dependencies.glassLeftText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });
  const handleDragEndGlassCenterModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndGlassMiddle,
    targetRef: dependencies.glassMiddleTargetRef,
    text: dependencies.glassMiddleText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });
  const handleDragEndGlassRightModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndGlassRight,
    targetRef: dependencies.glassRightTargetRef,
    text: dependencies.glassRightText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  // Gothic Vault
  const handleDragEndVaultAModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndVaultA,
    targetRef: dependencies.vaultATargetRef,
    text: dependencies.gothicVaultAText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });
  const handleDragEndVaultBModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndVaultB,
    targetRef: dependencies.vaultBTargetRef,
    text: dependencies.gothicVaultBText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });
  const handleDragEndVaultCModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndVaultC,
    targetRef: dependencies.vaultCTargetRef,
    text: dependencies.gothicVaultCText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });
  const handleDragEndVaultDModified = useModifiedDragEnd({
    handleDragEnd: dependencies.handleDragEndVaultD,
    targetRef: dependencies.vaultDTargetRef,
    text: dependencies.gothicVaultDText,
    setInfoWindowText: dependencies.setInfoWindowText,
  });

  return {
    handleDragEndGlassWindowModified,
    handleDragEndGargoyalesModified,
    handleDragEndFlyingButtressesModified,
    handleDragEndGothicVaultModified,
    handleDragEndRoofModified,
    // Flying Buttressess
    handleDragEndWoodFrameModified,
    handleDragEndFlyingButtressesSidingModified,
    // Stained Windows
    handleDragEndGlassLeftModified,
    handleDragEndGlassCenterModified,
    handleDragEndGlassRightModified,
    //Gothic Vault
    handleDragEndVaultAModified,
    handleDragEndVaultBModified,
    handleDragEndVaultCModified,
    handleDragEndVaultDModified,
  };
};