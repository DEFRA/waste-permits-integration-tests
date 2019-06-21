&ADMS_HEADER
Comment = "This is an ADMS parameter file"
Model = "ADMS"
Version = 5.2
FileVersion = 8
Complete = 1
/

&ADMS_PARAMETERS_SUP
SupSiteName                    = "Sample site"
SupProjectName                 = "Single point source, two pollutants"
SupUseAddInput                 = 0
SupAddInputPath                = " "
SupReleaseType                 = 0
SupModelBuildings              = 0
SupModelComplexTerrain         = 0
SupModelCoastline              = 0
SupPufType                     = 0
SupCalcChm                     = 0
SupCalcDryDep                  = 1
SupCalcWetDep                  = 1
SupCalcPlumeVisibility         = 0
SupModelFluctuations           = 0
SupModelRadioactivity          = 0
SupModelOdours                 = 0
SupOdourUnits                  = "ou_e"
SupPaletteType                 = 1
SupUseTimeVaryingEmissions     = 0
SupTimeVaryingEmissionsType    = 2
SupTimeVaryingVARPath          = " "
SupTimeVaryingFACPath          = " "
SupTimeVaryingEmissionFactorsWeekday =
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
SupTimeVaryingEmissionFactorsSaturday =
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
SupTimeVaryingEmissionFactorsSunday =
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
  1.0e+0 1.0e+0 1.0e+0 1.0e+0
/
&ADMS_PARAMETERS_MET
MetLatitude               = 5.2e+1
MetDataSource             = 0
MetDataFileWellFormedPath = "C:\Program Files (x86)\CERC\ADMS 5\Data\NSC.MET"
MetWindHeight             = 1.0e+1
MetWindInSectors          = 0
MetWindSectorSizeDegrees  = 1.0e+1
MetDataIsSequential       = 0
MetUseSubset              = 0
MetSubsetHourStart        = 0
MetSubsetDayStart         = 1
MetSubsetMonthStart       = 1
MetSubsetYearStart        = 2006
MetSubsetHourEnd          = 23
MetSubsetDayEnd           = 31
MetSubsetMonthEnd         = 12
MetSubsetYearEnd          = 2006
MetUseVerticalProfile     = 0
MetVerticalProfilePath    = " "
Met_DS_RoughnessMode      = 1
Met_DS_Roughness          = 1.0e-1
Met_DS_UseAdvancedMet     = 0
Met_DS_SurfaceAlbedoMode  = 0
Met_DS_SurfaceAlbedo      = 2.3e-1
Met_DS_PriestlyTaylorMode = 0
Met_DS_PriestlyTaylor     = 1.0e+0
Met_DS_MinLmoMode         = 0
Met_DS_MinLmo             = 1.0e+0
Met_DS_PrecipFactorMode   = 0
Met_DS_PrecipFactor       = 5.0e-1
Met_MS_RoughnessMode      = 3
Met_MS_Roughness          = 1.0e-1
Met_MS_UseAdvancedMet     = 1
Met_MS_SurfaceAlbedoMode  = 0
Met_MS_SurfaceAlbedo      = 2.3e-1
Met_MS_PriestlyTaylorMode = 0
Met_MS_PriestlyTaylor     = 1.0e+0
Met_MS_MinLmoMode         = 0
Met_MS_MinLmo             = 1.0e+0
MetHeatFluxType           = 0
MetInclBoundaryLyrHt      = 1
MetInclSurfaceTemp        = 0
MetInclLateralSpread      = 0
MetInclRelHumidity        = 0
MetHandNumEntries         = 0
/
&ADMS_PARAMETERS_BLD
BldNumBuildings = 0
/
&ADMS_PARAMETERS_HIL
HilGridSize          = 1
HilUseTerFile        = 0
HilUseRoughFile      = 0
HilTerrainPath       = " "
HilRoughPath         = " "
HilCreateFlowField   = 0
/
&ADMS_PARAMETERS_CST
CstPoint1X           = 0.0e+0
CstPoint1Y           = 0.0e+0
CstPoint2X           = -1.000e+3
CstPoint2Y           = 1.000e+3
CstLandPointX        = 5.00e+2
CstLandPointY        = 5.00e+2
/
&ADMS_PARAMETERS_FLC
FlcAvgTime           = 0.0e+0
FlcUnitsPollutants   = "ug/m3"
FlcUnitsIsotopes     = "Bq/m3"
FlcCalcToxicResponse = 0
FlcToxicExp          = 1.0e+0
FlcCalcPercentiles   = 0
FlcNumPercentiles    = 0
FlcCalcPDF           = 0
FlcPDFMode           = 0
FlcNumPDF            = 0
/
&ADMS_PARAMETERS_GRD
GrdType                = 0
GrdCoordSysType        = 0
GrdSpacingType         = 0
GrdRegularMin          = 
  0.0e+0 -1.000e+3 0.0e+0
  1.0e+1 0.0e+0 0.0e+0
GrdRegularMax          = 
  2.000e+3 1.000e+3 0.0e+0
  1.000e+3 3.30e+2 0.0e+0
GrdRegularNumPoints    = 
  21 21 1
  10 12 1
GrdVarSpaceNumPointsX  = 0
GrdVarSpaceNumPointsY  = 0
GrdVarSpaceNumPointsZ  = 1
GrdVarSpaceZ =
  0.0e+0
GrdVarSpaceNumPointsR  = 0
GrdVarSpaceNumPointsTh = 0
GrdVarSpaceNumPointsZp = 1
GrdVarSpaceZp =
  0.0e+0
GrdPtsNumPoints        = 0 0
GrdPolarCentreX = 0.0e+0
GrdPolarCentreY = 0.0e+0
GrdPtsUsePointsFile  = 0
GrdPtsPointsFilePath = " "
/
&ADMS_PARAMETERS_PUF
PufStart            = 1.00e+2
PufStep             = 1.00e+2
PufNumSteps         = 10
/
&ADMS_PARAMETERS_GAM
GamCalcDose         = 0
/
&ADMS_PARAMETERS_OPT
OptNumOutputs               = 2
OptPolName                  =
  "NOx" "SO2"
OptInclude                  =
  1 1
OptShortOrLong              =
  0 0
OptSamplingTime             =
  1.0e+0 1.0e+0
OptSamplingTimeUnits        =
  3 3
OptCondition                =
  0 0
OptNumPercentiles           =
  0 0
OptNumExceedences           =
  0 0
OptPercentiles              =
  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0
  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0  0.0e+0
OptExceedences              =
  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0
  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0  -1.0e+0
OptUnits                    =
  "ug/m3" "ug/m3"
OptGroupsOrSource           = 1
OptAllSources               = 1
OptNumGroups                = 0
OptIncludedSource           = "CHIMNEY1"
OptCreateComprehensiveFile  = 0
/
&ADMS_PARAMETERS_CHM
ChmScheme            = 2
/
&ADMS_PARAMETERS_BKG
BkgFilePath     = " "
BkgFixedLevels  = 2
/
&ADMS_PARAMETERS_ETC
SrcNumSources    = 1
PolNumPollutants = 8
PolNumIsotopes   = 1
/
&ADMS_COORDINATESYSTEM
ProjectedEPSG               = 0
/
&ADMS_MAPPERPROJECT
ProjectFilePath               = " "
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "NOx"
PolPollutantType         = 0
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 1.0e-2
PolGasType               = 0
PolParDepVelocityKnown   = 1
PolParTermVelocityKnown  = 1
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  0.0e+0
PolParTerminalVelocity =
  0.0e+0
PolParDiameter =
  1.0e-6
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 1.0e-4
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 5.2e-1
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ppb"
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "NO2"
PolPollutantType         = 0
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 0.0e+0
PolGasType               = 0
PolParDepVelocityKnown   = 1
PolParTermVelocityKnown  = 1
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  0.0e+0
PolParTerminalVelocity =
  0.0e+0
PolParDiameter =
  1.0e-6
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 0.0e+0
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 5.2e-1
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ppb"
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "NO"
PolPollutantType         = 0
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 0.0e+0
PolGasType               = 0
PolParDepVelocityKnown   = 1
PolParTermVelocityKnown  = 1
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  0.0e+0
PolParTerminalVelocity =
  0.0e+0
PolParDiameter =
  1.0e-6
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 0.0e+0
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 8.0e-1
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ppb"
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "O3"
PolPollutantType         = 0
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 0.0e+0
PolGasType               = 0
PolParDepVelocityKnown   = 1
PolParTermVelocityKnown  = 1
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  0.0e+0
PolParTerminalVelocity =
  0.0e+0
PolParDiameter =
  1.0e-6
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 0.0e+0
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 5.0e-1
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ppb"
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "VOC"
PolPollutantType         = 0
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 0.0e+0
PolGasType               = 0
PolParDepVelocityKnown   = 1
PolParTermVelocityKnown  = 1
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  0.0e+0
PolParTerminalVelocity =
  0.0e+0
PolParDiameter =
  1.0e-6
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 0.0e+0
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 3.0e-1
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ppb"
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "SO2"
PolPollutantType         = 0
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 1.0e-2
PolGasType               = 0
PolParDepVelocityKnown   = 1
PolParTermVelocityKnown  = 1
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  0.0e+0
PolParTerminalVelocity =
  0.0e+0
PolParDiameter =
  1.0e-6
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 1.0e-4
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 3.5e-1
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ppb"
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "CO"
PolPollutantType         = 0
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 0.0e+0
PolGasType               = 0
PolParDepVelocityKnown   = 1
PolParTermVelocityKnown  = 1
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  0.0e+0
PolParTerminalVelocity =
  0.0e+0
PolParDiameter =
  1.0e-6
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 0.0e+0
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 8.6e-1
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ppb"
/

&ADMS_POLLUTANT_DETAILS
PolName                  = "PM10"
PolPollutantType         = 1
PolGasDepVelocityKnown   = 1
PolGasDepositionVelocity = 0.0e+0
PolGasType               = 0
PolParDepVelocityKnown   = 0
PolParTermVelocityKnown  = 0
PolParNumDepositionData  = 1
PolParDepositionVelocity =
  1.0e+0
PolParTerminalVelocity =
  3.0e+0
PolParDiameter =
  1.0e-5
PolParDensity =
  1.000e+3
PolParMassFraction =
  1.0e+0
PolWetWashoutKnown = 1
PolWetWashout      = 0.0e+0
PolWetWashoutA     = 1.0e-4
PolWetWashoutB     = 6.4e-1
PolConvFactor      = 1.0e+0
PolBkgLevel        = 0.0e+0
PolBkgUnits        = "ug/m3"
/

&ADMS_ISOTOPE_DETAILS
IsoName                  = "SR-90"
IsoPollutantType         = 0
IsoGasDepVelocityKnown   = 1
IsoGasDepositionVelocity = 0.0e+0
IsoGasType               = 0
IsoParDepVelocityKnown   = 1
IsoParTermVelocityKnown  = 1
IsoParNumDepositionData  = 1
IsoParDepositionVelocity =
  0.0e+0
IsoParTerminalVelocity =
  0.0e+0
IsoParDiameter =
  1.0e-6
IsoParDensity =
  1.000e+3
IsoParMassFraction =
  1.0e+0
IsoWetWashoutKnown = 1
IsoWetWashout      = 0.0e+0
IsoWetWashoutA     = 1.0e-4
IsoWetWashoutB     = 6.4e-1
IsoConvFactor      = 1.0e+0
IsoBkgLevel        = 0.0e+0
IsoBkgUnits        = "Bq/m3"
/

&ADMS_SOURCE_DETAILS
SrcName          = "CHIMNEY1"
SrcMainBuilding  = "(Main)"
SrcHeight        = 5.0e+1
SrcDiameter      = 5.0e+0
SrcVolFlowRate   = 3.92699e+2
SrcVertVeloc     = 2.0e+1
SrcTemperature   = 1.5e+1
SrcMolWeight     = 2.896e+1
SrcDensity       = 1.225e+0
SrcSpecHeatCap   = 1.012e+3
SrcSourceType    = 0
SrcReleaseAtNTP  = 0
SrcEffluxType    = 0
SrcBuoyancyType  = 0
SrcPercentNOxAsNO2 = 1.0e+1
SrcX1            = 0.0e+0
SrcY1            = 0.0e+0
SrcL1            = 1.0e+0
SrcL2            = 1.0e+0
SrcFm            = 0.0e+0
SrcFb            = 0.0e+0
SrcMassFlux      = 0.0e+0
SrcAngle1        = 0.0e+0
SrcAngle2        = 0.0e+0
SrcMassH2O       = 0.0e+0
SrcUseVARFile    = 1
SrcNumGroups     = 1
SrcGroup =
  "All sources"
SrcNumVertices = 0
SrcTraNumTrafficFlows = 0
SrcNumPollutants      = 2
SrcPollutants =
  "NOx" "SO2"
SrcPolEmissionRate =
  1.4556e+2 1.50e+2
SrcPolTotalemission =
  1.0e+0 1.0e+0
SrcPolStartTime =
  0.0e+0 0.0e+0
SrcPolDuration =
  0.0e+0 0.0e+0
SrcNumIsotopes        = 0
/
