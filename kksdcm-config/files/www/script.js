var userLevel =  "USER";
var activeIndex = -1;
var indexChanged = true;
var activeConfigBIT = 7;
var WEB_OFFLINE = 0;
var markingChanges = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
var MAX_GENERATORS = 16;
var generatorEnabled  = [1,0,1,0, 1,0,0,0, 0,0,0,0, 0,0,0,0];
var generatorSimulate = [0,1,2,0, 1,0,0,0, 0,0,0,0, 0,0,0,0];
var generatorIP = [
    "localhost",
    "192.168.2.91",
    "192.168.2.92",
    "192.168.2.93",
    
    "192.168.2.94",
    "192.168.2.94",
    "192.168.2.94",
    "192.168.2.94",
    
    "192.168.2.94",
    "192.168.2.94",
    "192.168.2.94",
    "192.168.2.94",
    
    "192.168.2.94",
    "192.168.2.94",
    "192.168.2.94",
    "192.168.2.94"
]

var b64_logo = "data:image/png;base64,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tzV5D7jcAYafdMmQHMlPUygUgPcz+qYcMHQL9K25vbX2cfoAZKir5Rvg4BAYL1L2use7A529/Xum1d8PgctyrfsL78EAAA+caVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6ZDZlOTJmMDAtMzliNi00NGEwLThmYmMtMDYxOGI2ZTQzOTc0IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU2YTZiMjYxLTNmOTctNDVlNy1hNmQ0LThiMWI5YTc1NDU5MiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkxNTE2NGI0LTU2N2MtNDRhMi04MDYxLWZlNDM4ZDM4NTc0NSIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NjMzMTg0MTgzNTEzOTgiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGQyNTVmNjEtYjViMy00YWJmLTg2NTQtYzZjNTJhNTk3MDZkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA5LTE2VDEwOjUzOjM4Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PkJUIFQAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmCRAINSYv73EiAAAgAElEQVR42u19aXRc5Znm892t6tamUm1SSZZsybJkC+8GjCEQx3TASWiSEAJkMMQQBgayzGR6Oqf7nJkz82NO98zp6enu5BCysATcQEhoSCeGIUDAMSRgbBljC7xgC9mytiotpdrv+s2Pa0t1Jevekl0qOe37nKNz7NKtq6rvvs/37u9Hent7KRw4cHBOMGf/oSsKQB2uOLjEQanBhekE0QoFqLmcs0AOLmmouRy0QmEmQVi3G/J4ClTXnVVycGkqD12HnEqBdbtnEoQRBGiFAqSREWelHFySkEZGoBcKYARhJkEAQKitRe7Yx6Cq5qyWg0tLe6gacsc+Bh+sPbeTbhAkCC2dQf70aWfFHFxSyJ8+DS2dgVAbnJ0ghOPAx6JI790HXVacVXNwSUBXFKT37gMfi4Jw3OwEAQBx0SIUDhxE/mSvs3IOLg3t0XsShQMHITY2zvjdDIIItUEIS5ox8Yd3oBWlMg04J3/i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";
var LNG = localStorage.getItem('languageIndex') || 0;
var testValue = localStorage.getItem('testValue') || 0;


/****
 * Parse dummy register structure for offline development
 */
var temp_mb_reg = "ConfigVers,Config-Version (major.minor),1,0,0,65535,1;ConfigVersPatch,Config-Version (patch),2,2,0,255,0;hwVers,Hardware-Version (major.minor),3,3,0,65535,65535;hwVersPatch,Hardware-Version (patch),4,5,0,255,255;swVersMcu,Software-Version MCU (major.minor),5,6,0,65535,1024;swVersPatchMcu,Software-Version MCU (patch),6,8,0,255,0;swVersFpga,Software-Version FPGA (major.minor),7,9,0,65535,1;swVersPatchFpga,Software-Version FPGA (patch),8,11,0,255,1;blVersMcu,Bootloader-Version MCU (major.minor),9,12,0,65535,513;blVersPatchMcu,Bootloader-Version MCU (patch),10,14,0,255,0;blVersFpga,Bootloader-Version FPGA (major.minor),11,15,0,65535,65535;blVersPatchFpga,Bootloader-Version FPGA (patch),12,17,0,255,255;modulAddr,Moduladresse (Drehschalter),13,18,0,255,2;status0,Zustand Ultraschallgenerierung,14,19,0,255,2;status1,Betriebszustand,15,20,0,255,2;error,Anzeige Fehlerabschaltung,16,21,0,255,0;warning,Anzeige Warnung,17,22,0,255,0;actualPower,Aktuelle Ist-Leistung,18,23,0,100,0 %;actualFrequency,Aktuelle Ist-Frequenz,19,24,0,400000,26400 Hz;actualPhase,Ist-Phasenlage,20,26,-90,90,0 �;temperaturQ1,Temperatur Schaltelement 1,21,27,0,127.5,21.5 �C;temperaturQ2,Temperatur Schaltelement 2,22,28,0,127.5,21.0 �C;temperaturQ3,Temperatur Schaltelement 3,23,29,0,127.5,21.5 �C;temperaturQ4,Temperatur Schaltelement 4,24,30,0,127.5,20.5 �C;temperaturPcb,Geh�use Innentemperatur,25,31,0,127.5,24.0 �C;powerP,Ist-Wirkleistung in Watt,26,32,1,3000,0 W;powerS,Ist-Scheinleistung in Watt,27,34,1,3000,130 VA;current,HF-Strom,28,36,0,25.5,0.0 A;voltagePowerStage,Spannung an Endstufe (Mittelwert),29,37,0,510,2 V;peakVoltagePowerStage,Spannung an Endstufe (Peak),30,38,0,510,4 V;pulsWidthPowerState,Stellwert Endstufe,31,39,0,255,0;serNr,Serienummer Ger�t,32,40,0,65535,0;control0,Kontrollregister,1,50,0,255,2;control1,Kontrollregister,2,51,0,255,0;targetPower,Sollleistung in %,3,52,10,100,20 %;targetPhase,Sollphase in �,4,53,-90,90,0 �;frqMin,Untere Grenze Frequenzband,5,54,0,400000,22500 Hz;frqMax,Obere Grenze Frequenzband,6,56,0,400000,28500 Hz;powerRange,Einstellung maximale Leistung,7,58,0,4000,2000 W;degasCycleTime,Degas Zykluszeit,8,60,0,255,200;degasTime,Degas Zeit,9,61,0,255,50;degasCycleCount,Degas Zyklusz�hler,10,62,0,255,30;fwOptions,Firmware-Optionen,11,63,0,65535,43;customNr,Kundenserienummer,12,65,0,65535,0;operatingTime,Betriebsdauer in Minuten,13,67,0,16777215,132 min;cntPowerUp,Powerup-Z�hler,16,70,0,65535,32;cntCrash,Absturzz�hler,17,72,0,65535,0;configSet1,Konfiguration zu Frequenzband 1,100,115,0,65535,47;frqMinSet1,Untere Grenze Frequenzband 1,101,117,0,400000,26500 Hz;frqMaxSet1,Obere Grenze Frequenzband 1,102,119,0,400000,28500 Hz;phaseSet1,Sollphase in �,103,121,-90,90,0 �;powerSet1,Startwert Sollleistung in %,104,122,1,100,10 %;powerRangeSet1,Einstellung maximale Leistung,105,123,0,4000,2000 W;frqSweepShapeSet1,Kurvenform Wobbelung (frqSweep),106,125,0,3,0;frqSweepModFrqSet1,Wobbelfrequenz (frqSweep),107,126,0,255,55 Hz;frqSweepRangeSet1,Wobbelamplitude (frqSweep),108,127,0,25500,2000 Hz;ampSweepShapeSet1,Kurvenform Wobbelung (ampSweep),109,128,0,3,1;ampSweepFrqSet1,Wobbelfrequenz (ampSweep),110,129,0,255,100 Hz;tempMaxQ1Set1,max. Temperatur Schaltelement 1,111,130,0,127.5,43.0 �C;tempMaxQ2Set1,max. Temperatur Schaltelement 2,112,131,0,127.5,43.0 �C;tempMaxQ3Set1,max. Temperatur Schaltelement 3,113,132,0,127.5,22.0 �C;tempMaxQ4Set1,max. Temperatur Schaltelement 4,114,133,0,127.5,20.5 �C;tempMaxPcbSet1,max. Temperatur PCB,115,134,0,127.5,31.0 �C;CntShortSet1,Z�hler Kurzschlussabschaltungen,116,135,0,65335,0;CntOverLoadSet1,Z�hler �berlastabschaltungen,117,137,0,65335,0;CntOpenLoadSet1,Z�hler Leerlaufabschaltungen,118,139,0,65335,3;CntOverVoltageSet1,Z�hler �berspannung,119,141,0,65335,0;CntOverTempSet1,Z�hler �bertemperatur,120,143,0,65335,0;CntNoFrqSet1,Z�hler kein Frequenzpunkt,121,145,0,65335,0;configSet2,Konfiguration zu Frequenzband 2,130,150,0,65535,303;frqMinSet2,Untere Grenze Frequenzband 2,131,152,0,400000,81000 Hz;frqMaxSet2,Obere Grenze Frequenzband 2,132,154,0,400000,85000 Hz;phaseSet2,Sollphase in �,133,156,-90,90,0 �;powerSet2,Startwert Sollleistung in %,134,157,1,100,100 %;powerRangeSet2,Einstellung maximale Leistung,135,158,0,4000,1000 W;frqSweepShapeSet2,Kurvenform Wobbelung (frqSweep),136,160,0,3,0;frqSweepModFrqSet2,Wobbelfrequenz (frqSweep),137,161,0,255,55 Hz;frqSweepRangeSet2,Wobbelamplitude (frqSweep),138,162,0,25500,2000 Hz;ampSweepShapeSet2,Kurvenform Wobbelung (ampSweep),139,163,0,3,1;ampSweepFrqSet2,Wobbelfrequenz (ampSweep),140,164,0,255,100 Hz;tempMaxQ1Set2,max. Temperatur Schaltelement 1,141,165,0,127.5,22.0 �C;tempMaxQ2Set2,max. Temperatur Schaltelement 2,142,166,0,127.5,22.5 �C;tempMaxQ3Set2,max. Temperatur Schaltelement 3,143,167,0,127.5,21.5 �C;tempMaxQ4Set2,max. Temperatur Schaltelement 4,144,168,0,127.5,20.0 �C;tempMaxPcbSet2,max. Temperatur PCB,145,169,0,127.5,28.5 �C;CntShortSet2,Z�hler Kurzschlussabschaltungen,146,170,0,65335,0;CntOverLoadSet2,Z�hler �berlastabschaltungen,147,172,0,65335,0;CntOpenLoadSet2,Z�hler Leerlaufabschaltungen,148,174,0,65335,0;CntOverVoltageSet2,Z�hler �berspannung,149,176,0,65335,0;CntOverTempSet2,Z�hler �bertemperatur,150,178,0,65335,0;CntNoFrqSet2,Z�hler kein Frequenzpunkt,151,180,0,65335,0;configSet3,Konfiguration zu Frequenzband 3,160,185,0,65535,559;frqMinSet3,Untere Grenze Frequenzband 3,161,187,0,400000,38000 Hz;frqMaxSet3,Obere Grenze Frequenzband 3,162,189,0,400000,42000 Hz;phaseSet3,Sollphase in �,163,191,-90,90,0 �;powerSet3,Startwert Sollleistung in %,164,192,1,100,100 %;powerRangeSet3,Einstellung maximale Leistung,165,193,0,4000,1000 W;frqSweepShapeSet3,Kurvenform Wobbelung (frqSweep),166,195,0,3,0;frqSweepModFrqSet3,Wobbelfrequenz (frqSweep),167,196,0,255,55 Hz;frqSweepRangeSet3,Wobbelamplitude (frqSweep),168,197,0,25500,1000 Hz;ampSweepShapeSet3,Kurvenform Wobbelung (ampSweep),169,198,0,3,1;ampSweepFrqSet3,Wobbelfrequenz (ampSweep),170,199,0,255,100 Hz;tempMaxQ1Set3,max. Temperatur Schaltelement 1,171,200,0,127.5,0.0 �C;tempMaxQ2Set3,max. Temperatur Schaltelement 2,172,201,0,127.5,0.0 �C;tempMaxQ3Set3,max. Temperatur Schaltelement 3,173,202,0,127.5,0.0 �C;tempMaxQ4Set3,max. Temperatur Schaltelement 4,174,203,0,127.5,0.0 �C;tempMaxPcbSet3,max. Temperatur PCB,175,204,0,127.5,0.0 �C;CntShortSet3,Z�hler Kurzschlussabschaltungen,176,205,0,65335,0;CntOverLoadSet3,Z�hler �berlastabschaltungen,177,207,0,65335,0;CntOpenLoadSet3,Z�hler Leerlaufabschaltungen,178,209,0,65335,0;CntOverVoltageSet3,Z�hler �berspannung,179,211,0,65335,0;CntOverTempSet3,Z�hler �bertemperatur,180,213,0,65335,0;CntNoFrqSet3,Z�hler kein Frequenzpunkt,181,215,0,65335,0;configSet4,Konfiguration zu Frequenzband 4,190,220,0,65535,1071;frqMinSet4,Untere Grenze Frequenzband 4,191,222,0,400000,100000 Hz;frqMaxSet4,Obere Grenze Frequenzband 4,192,224,0,400000,110000 Hz;phaseSet4,Sollphase in �,193,226,-90,90,0 �;powerSet4,Startwert Sollleistung in %,194,227,1,100,100 %;powerRangeSet4,Einstellung maximale Leistung,195,228,0,4000,500 W;frqSweepShapeSet4,Kurvenform Wobbelung (frqSweep),196,230,0,3,0;frqSweepModFrqSet4,Wobbelfrequenz (frqSweep),197,231,0,255,55 Hz;frqSweepRangeSet4,Wobbelamplitude (frqSweep),198,232,0,25500,4000 Hz;ampSweepShapeSet4,Kurvenform Wobbelung (ampSweep),199,233,0,3,1;ampSweepFrqSet4,Wobbelfrequenz (ampSweep),200,234,0,255,100 Hz;tempMaxQ1Set4,max. Temperatur Schaltelement 1,201,235,0,127.5,0.0 �C;tempMaxQ2Set4,max. Temperatur Schaltelement 2,202,236,0,127.5,0.0 �C;tempMaxQ3Set4,max. Temperatur Schaltelement 3,203,237,0,127.5,0.0 �C;tempMaxQ4Set4,max. Temperatur Schaltelement 4,204,238,0,127.5,0.0 �C;tempMaxPcbSet4,max. Temperatur PCB,205,239,0,127.5,0.0 �C;CntShortSet4,Z�hler Kurzschlussabschaltungen,206,240,0,65335,0;CntOverLoadSet4,Z�hler �berlastabschaltungen,207,242,0,65335,0;CntOpenLoadSet4,Z�hler Leerlaufabschaltungen,208,244,0,65335,0;CntOverVoltageSet4,Z�hler �berspannung,209,246,0,65335,0;CntOverTempSet4,Z�hler �bertemperatur,210,248,0,65335,0;CntNoFrqSet4,Z�hler kein Frequenzpunkt,211,250,0,65335,0";

var mb_response = [[],[],[],[], [],[],[],[], [],[],[],[], [],[],[],[]];
function refreshRegisterList() {

    for(var k=0;k<MAX_GENERATORS;k++) {
        if(generatorEnabled[k]) {       
            if(generatorSimulate[k] == 0) {
                // get modbus register contents
                let call = { "cmd": "list", "refresh":true };
                apiCall(call, 10000, true, "coreregs").done(function(response) {
                    var targetIndex = 0;
                    mb_response[targetIndex] = [];
                    response.forEach(function(reg, index, registers) {
                        var obj = {};
                        obj.regidx = reg.regidx;
                        obj.regname = reg.regname;
                        obj.description = reg.description;
                        obj.modbusreg = reg.modbusreg;
                        obj.spiaddr = reg.spiaddr;
                        obj.min = reg.min;
                        obj.max = reg.max;
                        obj.value = reg.value;
                        obj.formatted = reg.formatted;
                        obj.symbol = reg.symbol;
                        mb_response[targetIndex].push(obj);
                    });
                }).fail(function(domain, code, message) {
                    // API problem
                    alert('API error: ' + domain + '] Error ' + code.toString() + ': ' + message);
                });
            }
            else if(generatorSimulate[k] == 1) {
                if(isBackendConnected(0)) {
                    fetch("http://"+generatorIP[k]+"/mbRegisters").then(data => data.json(),id=k).then((json) => {
                        mb_response[id] = [];
                        for(var i=0;i<json.length;i++) {
                            var reg = {};
                            reg.regidx = i;
                            reg.regname = mb_response[0][i].regname;
                            reg.description = mb_response[0][i].description;
                            reg.modbusreg = mb_response[0][i].modbusreg;
                            reg.spiaddr =mb_response[0][i].spiaddr;
                            reg.min = mb_response[0][i].min;
                            reg.max = mb_response[0][i].max;
                            reg.symbol = mb_response[0][i].symbol;
                            reg.value = parseInt(json[i],16);
                            reg.formatted = reg.value + " " + reg.symbol;
                            mb_response[id].push(reg);
                        }
                    });
                }
            }
            else {
                var mb = temp_mb_reg.split(";").map(function(e) {
                    return e.split(",");
                })
                mb_response[k] = [];
                for(var i=0;i<mb.length;i++) {
                    var reg = {};
                    reg.regidx = i;
                    reg.regname = mb[i][0];
                    reg.description = mb[i][1];
                    reg.modbusreg = mb[i][2];
                    reg.spiaddr = mb[i][3];
                    reg.min = mb[i][4];
                    reg.max = mb[i][5];
                    reg.formatted = mb[i][6];
                    reg.value = parseFloat(reg.formatted); 
                    reg.symbol = "";
                    mb_response[k].push(reg);
                }
            }
            
        }
    }
}


function update_modbus_register() {
    testValue++;
    localStorage.setItem('testValue', testValue);
    refreshRegisterList();

    for(var i=0;i<MAX_GENERATORS;i++) {
        if(markingChanges[i] && generatorEnabled[i]) {
            // update generator modbus data here
            //alert("Changes in generator: "+(i+1));
            console.log("changes on: "+i);
            markingChanges[i] = 0;

        } 
    }
    
}

function end_of_update() {
    if(isBackendConnected(activeIndex)) {
        indexChanged = false;
    }
}

function read_generator() {
    console.log("read generator");
    indexChanged = true;
    update_modbus_register();
    writeMonitorExtended(userLevel,"update");
}

function save_generator() {
    if(isBackendConnected(activeIndex) && generatorSimulate[activeIndex] != 2) {
        var control0 = getMBregister(activeIndex,"control0").value & (0x70);
        if(isButtonState("btStatusConfig_USpower", lng.start[LNG])) { control0 |= (1 << 0); }
        control0 |= (document.getElementById("idFreqSelect").value) << 1;
        if(isButtonState("btStatusConfig_Degas", lng.on[LNG])) { control0 |= (1 << 7); }


        if(userLevel == "US-ENG") {

        }
        write_register("control0",control0);
        write_register("control1",1);       // errReset
        write_register("degasCycleTime",document.getElementById("par_DegasCycleTime").value);
        write_register("degasTime",document.getElementById("par_DegasTime").value);
        write_register("degasCycleCount",document.getElementById("par_DegasCycleCount").value);       

        for(var i=0;i<4;i++) {
            var configSet = getMBregister(activeIndex,"configSet"+(i+1)).value;
            if(userLevel == "US-ENG") {
                configSet &= (0x01);                            // all bits except usPower
                if(document.getElementById("configSet"+i.toString()+"1").checked) { configSet |= (1 << 1);}
                if(document.getElementById("configSet"+i.toString()+"2").checked) { configSet |= (1 << 2);}
                if(document.getElementById("configSet"+i.toString()+"3").checked) { configSet |= (1 << 3);}
                if(document.getElementById("configSet"+i.toString()+"5").checked) { configSet |= (1 << 5);}
                if(document.getElementById("configSet"+i.toString()+"6").checked) { configSet |= (1 << 6);}
            }
            else {
                configSet &= ~(1 << activeConfigBIT);           // activation bit only
            }
            if(document.getElementById("idCBsetActive"+i).checked) { configSet |= (1 << activeConfigBIT);}
            write_register("configSet"+(i+1),configSet);

            write_register("powerRangeSet"+(i+1),document.getElementById("powerRangeSet"+(i)).value);  
            write_register("powerSet"+(i+1),document.getElementById("powerSet"+(i)).value);  
            write_register("frqMinSet"+(i+1),document.getElementById("frqMinSet"+(i)).value);  
            if(userLevel == "US-ENG") {
                write_register("frqMaxSet"+(i+1),document.getElementById("frqMaxSet"+(i)).value);  
                write_register("phaseSet"+(i+1),document.getElementById("phaseSet"+(i)).value);  
                write_register("frqSweepShapeSet"+(i+1),document.getElementById("frqSweepShapeSet"+(i)).value);  
                write_register("frqSweepModFrqSet"+(i+1),document.getElementById("frqSweepModFrqSet"+(i)).value);  
                write_register("frqSweepRangeSet"+(i+1),document.getElementById("frqSweepRangeSet"+(i)).value);  
            }

        }
        var fwOptions = getMBregister(activeIndex,"fwOptions").value;
        fwOptions |= (1 << 4);      // save persistent
        write_register("fwOptions",fwOptions);
    }
}

function write_register(id,value) {
    if(generatorEnabled[activeIndex]) {
        if(generatorSimulate[activeIndex] == 0) {       
            let regidx = getMBregister(activeIndex,id).regidx;
            let newValue = value.toString();
            let call = { "cmd": "write", "index":regidx, "value": newValue};
            apiCall(call, 10000, true, "coreregs").done(function(response) {
                // also refresh data (but not from SPI, just modbus)
                //refreshValue(regidx, false);
            }).fail(function(domain, code, message) {
                // API problem
                alert('API error: ' + domain + '] Error ' + code.toString() + ': ' + message);
            });
        }
        else if(generatorSimulate[activeIndex] == 1) {
            let regidx = getMBregister(activeIndex,id).regidx.toString();
            let newValue = value.toString();
            fetch("http://"+generatorIP[activeIndex]+"/mbRegisters", {
                method: "POST",
                body: JSON.stringify({
                    regIndex: regidx,
                    regValue: newValue
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin":  "*",
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "*"
                }
            });
        }
    }
}

function resetCounterValue(id) {
    if(isBackendConnected(activeIndex)) {
        var index = document.getElementById("idFreqSelect").value;
        var regName = [];
        if(id == "btallCnt") {
            if(confirm(unescape(lng.reset_all_counters[LNG].replace("idx",index)))) {
                regName[0] = "operatingTime";
                regName[1] = "cntPowerUp";
                regName[2] = "cntCrash";  
                regName[3] = "CntOverTempSet"+index;
                regName[4] = "CntShortSet"+index;
                regName[5] = "CntOverLoadSet"+index;
                regName[6] = "CntOpenLoadSet"+index;
                regName[7] = "CntOverVoltageSet"+index;
                regName[8] = "CntNoFrqSet"+index;
                regName[9] = "tempMaxPcbSet"+index;
                regName[10] = "tempMaxQ1Set"+index;
                regName[11] = "tempMaxQ2Set"+index;
                regName[12] = "tempMaxQ3Set"+index;
                regName[13] = "tempMaxQ4Set"+index;
            }
        }
        else {
            if(id == "btoperatingTime" || id == "btcntPowerUp" || id == "btcntCrash") {
                regName[0] = id.substring(2);
            }
            else if(id == "bttempMaxPcbSet") {
                regName[0] = "tempMaxPcbSet"+index;
                regName[1] = "tempMaxQ1Set"+index;
                regName[2] = "tempMaxQ2Set"+index;
                regName[3] = "tempMaxQ3Set"+index;
                regName[4] = "tempMaxQ4Set"+index;
            }
            else {
                regName[0] = id.substring(2) + index;
            }           
        }
        for(var i=0;i<regName.length;i++) {
            if(regName[i] != "") {
                write_register(regName[i],0);  
            }
        }
    }

}


function writeNavMenu(level) {
    userLevel = level;
    document.write("<div class='navbar'>");

    if(userLevel == "USER") {
        document.write("<a href='login.html'>" + lng.login[LNG] + "</a>");
    }
    else  {
        document.write("<div class='subnav'>");
        if(userLevel == "ENG") {
            document.write("<button class='subnavbtn'>" + lng.engineer[LNG] + " <i class='fa fa-caret-down'></i></button>");
        }
        else if(userLevel == "US-ENG") {
            document.write("<button class='subnavbtn'>" + lng.us_engineer[LNG] + " <i class='fa fa-caret-down'></i></button>");
        }
        document.write("<div class='subnav-content'>");
        document.write("<a href='javascript:setLogout();'>" + lng.logout[LNG] + "</a>");
        if(userLevel == "US-ENG") {
            document.write("<a href='password_us-eng.html'>" + lng.password_change[LNG] + "</a>");
        }
        document.write("</div>");
        document.write("</div>");
    }


    if(userLevel == "ENG") {
        document.write("<a href='monitor_eng.html'>"+lng.monitor[LNG]+"</a>");
    }
    else if(userLevel == "US-ENG"){
        document.write("<a href='monitor_us-eng.html'>"+lng.monitor[LNG]+"</a>");
    }
    else {
        document.write("<a href='monitor.html'>"+lng.monitor[LNG]+"</a>");
    }

    document.write("<div class='subnav'>");
        document.write("<button class='subnavbtn'>"+lng.language[LNG]+" <i class='fa fa-caret-down'></i></button>");
        document.write("<div class='subnav-content'>");
            document.write("<a href='javascript:changeLanguage(1)'>Deutsch</a>");
            document.write("<a href='javascript:changeLanguage(0)'>English</a>");
        document.write("</div>");
    document.write("</div>");

    if(userLevel == "ENG") {
        document.write("<a href='info_eng.html'>"+lng.info[LNG]+"</a>");
    }
    else if(userLevel == "US-ENG"){
        document.write("<a href='info_us-eng.html'>"+lng.info[LNG]+"</a>");
    }
    else {
        document.write("<a href='info.html'>"+lng.info[LNG]+"</a>");
    }

    document.write("<a href='javascript:screenShot();'>"+lng.screenshot[LNG]+"</a>");
    document.write("<img src='"+b64_logo+"' id='idHeaderLogo'><a id='idHeaderLogoGradient'>&nbsp;</a>");
    document.write("</div>");
}

function setLogin(level) {
    update_modbus_register();
    if(document.getElementById("loginLevel").value == "ENG") {
        window.location.href = "monitor_eng.html";
    }
    if(document.getElementById("loginLevel").value == "US-ENG") {
        window.location.href = "monitor_us-eng.html";
    }
}

function setLogout() {
    localStorage.setItem('ubus_session', false);
    window.location.href = "index.html";
}

function setNewPassword() {
    alert("Function to update new password here.");
    window.location.href = "index.html";
}

function writePasswordSettings(level, init) {

    if(level == "US-ENG" && init == "init") {
        document.write("<div id='loginDialog'>");
        document.write("<div class='popup'>");
        document.write("<div class='content'>");
		document.write("<p id='loginMessage'>"+lng.msg_password_change[LNG]+"</p>");
		document.write("<label for='loginUser1'>"+lng.engineer[LNG]+":</label><br/>");
		document.write("<input type='text' name='loginPassword1' id='loginPassword1' value='KKS-1'><br/>");
		document.write("<label for='loginUser1'>"+lng.us_engineer[LNG]+":</label><br/>");
		document.write("<input type='text' name='loginPassword2' id='loginPassword2' value='KKS-US-2'><br/>");
		document.write("<button type='button' id='loginCheckNewPasswordButton' onclick='setNewPassword()'>"+lng.change[LNG]+"</button>");

        document.write("<button type='button' id='btCheckAccount' onclick='read_account_settings()'>Read Account</button>");

        document.write("</div></div></div>");



    }



}

function read_account_settings() {

    var jsonquery = {"path":"/flash/kks-pass-eng"};
    var timeout = 10000;
    var loginWhenNeeded = true;
  
    
    let call = { "cmd": "list", "refresh":true };
    apiCalKKS(jsonquery, 10000, true, "coreregs").done(function(response) {
        console.log(response);
    }).fail(function(domain, code, message) {
        // API problem
        alert('API error: ' + domain + '] Error ' + code.toString() + ': ' + message);
    });

}

function writeMonitorTable(level,init) {
    var tableHeader = ["#", lng.us_short[LNG], lng.power[LNG], lng.set_power_short[LNG], lng.degas[LNG], lng.frequency[LNG], lng.status[LNG]];
    var tableIds = ["monIndex", "monUS", "monActPower", "monSetPower", "monDegas", "monFreq", "monStatus"];
    var maxRow = MAX_GENERATORS + 1;
    var maxCol = tableIds.length;

    if(level == "ENG" || level == "US-ENG") {
        maxCol = 8;
    }

    if(init == "init") {
        document.write("<h3 class='contentHeader'><span>" + lng.overview[LNG] + "</span></h3>");
        document.write("<table id='idMonTable' class='monTable'>");
        document.write("<tbody>");
        for(var row=0;row<maxRow;row++) {
            document.write("<tr>");
            for(var col=0;col<maxCol;col++) {
                if(row == 0) {
                    if(col == 7) {
                        document.write("<td></td>");
                    }
                    else {
                        document.write("<td class='monTableHeader'>"+tableHeader[col]+"</td>");
                    }
                }
                else {
                    if(col == 7) {
                        document.write("<td class='engParam' onclick='updateExtMonitorInfo("+(row-1)+")'><i class='fa fa-plus-square' aria-hidden='true'></i></td>");
                    }
                    else {
                        document.write("<td id='"+tableIds[col]+(row-1)+"'></td>");
                    }
                }
            }
            document.write("</tr>");
        }
        document.write("</tbody></table>");
    }
    else {
        for(var index=0;index<MAX_GENERATORS;index++) {
            var id = 0;
            if(isBackendConnected(index)) {
                id = tableIds[0]+index; 
                addHTML(id,"CM "+(index+1).toString());
                status0 = getMBregister(index,"status0").value;
                id = tableIds[1] + index;
                if(status0 & (1 << 0)) {        // usPower
                    addHTML(id,lng.on[LNG]);
                    document.getElementById(id).className = "statusON";
                }
                else {
                    addHTML(id,lng.off[LNG]);
                    document.getElementById(id).className = "statusOFF";
                }
                addHTML(tableIds[2] + index,getMBregister(index,"actualPower").formatted.trim());
                addHTML(tableIds[3] + index,getMBregister(index,"targetPower").formatted.trim());
                id = tableIds[4] + index;
                if(status0 & (1 << 7)) {        // degas
                    addHTML(id,lng.on[LNG]);
                    document.getElementById(id).className = "statusON";
                }
                else {
                    addHTML(id,lng.off[LNG]);
                    document.getElementById(id).className = "statusOFF";
                }
                var freq = (status0 >> 1) & 0x7;
                addHTML(tableIds[5] + index,freq);

                var warningNumber = getMBregister(index,"warning").value;
                var errorNumber = getMBregister(index,"error").value;
                id = tableIds[6] + index;
                if(errorNumber) {
                    addHTML(id,lng.error[LNG] + " " + errorNumber);
                    document.getElementById(id).className = "statusERROR";
                }
                else if(warningNumber){
                    addHTML(id,lng.warning[LNG] + " " + warningNumber);
                    document.getElementById(id).className = "statusERROR";
                }
                else {
                    addHTML(id,"");
                    document.getElementById(id).className = "statusOFF";
                }

            }
            else {
                id = tableIds[0]+index; 
                addHTML(id,"CM "+(index+1).toString());
                
                for(var i=1;i<maxCol-1;i++) {
                    id = tableIds[i] + index;
                    document.getElementById(id).className = "statusOFF";
                    addHTML(id,"-");
                }              
            }

        }

    }
}

function writeLMparameter(level,init) {
    
    var tableContent = [
        ["label",lng.setting_number[LNG],         "",       "1", "2","3", "4"],
        ["checkbox",lng.active[LNG],              "idCBsetActive",      "0", "0", "0", "0"],
        ["text",lng.set_power_short[LNG],         "powerRangeSet",      "0", "0","0", "0"],
        ["text",lng.set_power_short[LNG],         "powerSet",      "0", "0","0", "0"],
        ["text",lng.freq_min[LNG],                "frqMinSet",     "0", "0","0", "0"],
        ["text",lng.freq_max[LNG],                "frqMaxSet",     "0", "0", "0","0"],
        ["text",lng.phase_set[LNG],               "phaseSet",  "0", "0", "0","0"],
        ["text",lng.wob_shap_set[LNG],            "frqSweepShapeSet",       "0", "0", "0","0"],
        ["text",lng.wob_freq_set[LNG],            "frqSweepModFrqSet",     "0", "0","0", "0"],
        ["text",lng.wob_ampl_set[LNG],            "frqSweepRangeSet",     "0", "0","0", "0"],
        ["checkbox",lng.freq_sweep[LNG],          "configSet",         "5", "5", "5", "5"],
        ["checkbox",lng.ampl_sweep[LNG],          "configSet",         "6", "6", "6", "6"],
        ["checkbox",lng.serial_resonance[LNG],    "configSet",         "3", "3", "3", "3"],
        ["checkbox",lng.phase_optimizing[LNG],    "configSet",         "1", "1", "1", "1"],
        ["checkbox",lng.freq_regulation_short[LNG],"configSet",         "2", "2", "2", "2"],

    ]

    var maxRow = 5;
    var maxCol = 7;
    if(level == "US-ENG") {
        maxRow = 15;
    }
    if(init == "init") {
        document.write("<div id='idLMparameter' class='LMparameter'>");

        document.write("<h3 class='contentHeader'><span id='paramActiveName'>" + lng.parameter[LNG] + "</span></h3>");

        document.write("<table class='paramTable'>");
        document.write("<tbody>");
        for(var row=0;row<maxRow;row++) {
            document.write("<tr>");
            var colType = tableContent[row][0];
            for(var col=1;col<maxCol;col++) {
                if(col >= 3) {
                    if(colType == "label") {
                        document.write("<td>");
                        document.write("<label class='LMparam'>"+tableContent[row][col]+"</label>");
                    }
                    if(colType == "text") {
                        document.write("<td>");
                        var elemID = "";
                        if(tableContent[row][2] != "") {
                            elemID = "id='"+tableContent[row][2]+(col - 3).toString()+"'";
                        }
                        document.write("<input type='text' "+elemID + " class='LMparam' value="+tableContent[row][col]+"></input>");
                    }
                    if(colType == "checkbox") {
                        document.write("<td>");
                        if(tableContent[row][col] != "") {
                            if(tableContent[row][2] == "idCBsetActive") {
                                document.write("<input type='checkbox' id='"+tableContent[row][2] +(col - 3).toString() + "' class='LMparamCheckbox' onchange='updateConfigSet(this.id)'></input>");
                            }
                            else {
                                if(tableContent[row][2] != "") {
                                    var bit =tableContent[row][col];
                                    document.write("<input type='checkbox' id='"+tableContent[row][2] +(col - 3).toString() + bit.toString() +"' class='LMparamCheckbox'></input>");
                                }
                            }
                        }
                    }
                }
                else {
                    document.write("<td>");
                    if(col == 2 && tableContent[row][2] != "") {
                        document.write("<span id='unit_"+tableContent[row][2]+"'></span>");
                    }
                    else {
                        document.write(tableContent[row][col]);  
                    }
                }
                document.write("</td>");
            }
            document.write("</tr>");
        }
        document.write("</tbody></table>");
        document.write("</div>");
        document.getElementById("idLMparameter").style.display = "none"; 
    }
    else {
        if(isBackendConnected(activeIndex)) {
            if(indexChanged) {
                var nbCheckbox = 0;
                for(var i=0;i<4;i++) {
                    document.getElementById("idCBsetActive"+i).disabled = false;
                    if(getMBregister(activeIndex,"configSet"+(i+1)).value & (1 << activeConfigBIT)) {
                        document.getElementById("idCBsetActive"+i).checked = true; 
                        nbCheckbox++;
                    }
                    else {
                        document.getElementById("idCBsetActive"+i).checked = false; 
                    }
                }
                if(nbCheckbox == 0) {
                    document.getElementById("idCBsetActive0").checked = true; 
                }

                for(var row=0;row<maxRow;row++) {
                    var colType = tableContent[row][0];
                    for(var i=0;i<4;i++) {
                        if(colType == "text" && tableContent[row][2] != "") {
                            var id = tableContent[row][2]+i;
                            var regName = tableContent[row][2] + (i+1);
                            document.getElementById(id).value  = getMBregister(activeIndex,regName).value;

                            if(i == 0) {
                                addHTML("unit_" + tableContent[row][2],"["+getMBregister(activeIndex,regName).symbol+"]"); 
                            }
                        }

                        if(colType == "checkbox" && tableContent[row][2] != "idCBsetActive" && tableContent[row][2] != "") {
                            var bit = parseInt(tableContent[row][3+i]);
                            var id = tableContent[row][2]+i.toString()+bit.toString();
                            var regName = tableContent[row][2] + (i+1);
                            var regValue = getMBregister(activeIndex,regName).value;
                            if(regValue & (1 << bit)) {
                                document.getElementById(id).checked = true; 
                            }
                            else {
                                document.getElementById(id).checked = false; 
                            }
                        }

                    }
                }  
                
            }
        }
        else {
            for(var i=0;i<4;i++) {
                document.getElementById("idCBsetActive"+i).checked = false; 
                document.getElementById("idCBsetActive"+i).disabled = true;
            }
        }
    }

    for(var row=0;row<maxRow;row++) {
        var colType = tableContent[row][0];
        for(var i=0;i<4;i++) {
            id = "idCBsetActive"+i;
            var setEnabled = false;
            if(document.getElementById(id)) {
                if(document.getElementById(id).checked) {
                    setEnabled = true;
                }
            }

            if(colType == "text") {
                id = tableContent[row][2]+i;
                if(document.getElementById(id)) {
                    document.getElementById(id).disabled = !setEnabled;
                }
                
            }
            if(colType == "checkbox" && tableContent[row][2] != "idCBsetActive" && tableContent[row][2] != "") {
                var bit = parseInt(tableContent[row][3+i]);
                var id = tableContent[row][2]+i.toString()+bit.toString();
                if(document.getElementById(id)) {
                    document.getElementById(id).disabled = !setEnabled;
                }

            }
        } 

    }


}

function screenShot() {
    var element = document.getElementById('monitorBody');
    var d = new Date();
    var strTime = d.getFullYear() + "_" + pad(d.getMonth(),2) + "_" + pad(d.getDay(),2) + "_" + pad(d.getHours(),2) + "_" + pad(d.getMinutes(),2) + "_" + pad(d.getSeconds(),2);

    var opt = {
        margin:       1,
        filename:     strTime+'.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        enableLinks:  false,
        jsPDF:        { unit: 'mm', format: 'a2', orientation: 'landscape' }
      };

    if(element) {
        var worker = html2pdf().set(opt).from(element).save();
    }

}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}


function updateExtMonitorInfo(index) {
    var symbol_min = "<i class='fa fa-minus-square' aria-hidden='true'></i>";
    var symbol_max = "<i class='fa fa-plus-square' aria-hidden='true'></i>";
    var eLMparam = document.getElementById("idLMparameter");
    var eExtMoni = document.getElementById("idExtMonitor");
    var eCntOver = document.getElementById("idCounterOverview");

    if(activeIndex == index) {          // extended info already shown
        if (eLMparam.style.display === "none") {
            eLMparam.style.display = "block";
            eExtMoni.style.display = "block";
            eCntOver.style.display = "block";
        }
        else {
            eLMparam.style.display = "none";
            eExtMoni.style.display = "none";
            eCntOver.style.display = "none";
        }
    }
    else {
        document.getElementById('paramActiveName').innerHTML = lng.parameter[LNG] + " CM"+(index+1).toString();
        document.getElementById('extMonitorActiveName').innerHTML = lng.settings[LNG] + " CM"+(index+1).toString();
        document.getElementById('idCounterOverviewName').innerHTML = lng.counter[LNG] + " CM"+(index+1).toString() + " - " + document.getElementById("idFreqSelect").value.toString();
        eLMparam.style.display = "block";
        eExtMoni.style.display = "block";
        eCntOver.style.display = "block";
    }
    if(index != activeIndex) {
        indexChanged = true;
    }
    activeIndex = index;

    for(var i=0;i<16;i++) {
        var symbol = document.getElementById('idMonTable').rows[i+1].cells.item(7);
        if(i==index && eLMparam.style.display == "block") {
            symbol.innerHTML = symbol_min;
        }
        else {
            symbol.innerHTML = symbol_max;
        }
    }


}

function writeMonitorExtended(level,init) {
    if(init == "init") {
        document.write("<div id='idExtMonitor' class='extMonitor'>");
        document.write("<h3 class='contentHeader'><span id='extMonitorActiveName'>"+lng.settings[LNG] +"</span></h3>");
        document.write("<table id='idExtMonTable' style='width:100%'><colgroup><col style='width:33%'><col style='width:33%'><col style='width:33%'></colgroup><tbody>");
        document.write("<tr><td>");
            extMonitorPower(init);
            extMonitorFrequency(init);
        document.write("</td><td>");
            extMonitorGeneratorInfo(init);
            extMonitorElectricalData(init);
            if(level == "US-ENG") {
                extMonitorTemperatures(init);
            }
        document.write("</td><td>");
            extMonitorStatusConfig(init,level);
        document.write("</td></tr></tbody></table>");
        document.write("</div>");
        document.getElementById("idExtMonitor").style.display = "none";
    }
    else {
        extMonitorPower(init);
        extMonitorFrequency(init);
        extMonitorGeneratorInfo(init);
        extMonitorElectricalData(init);
        extMonitorStatusConfig(init,level);
        if(level == "US-ENG") {
            extMonitorTemperatures(init);
        }
    }
}

function extMonitorPower(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.power[LNG] +"</span></h4>");
        document.write("<table style='width:100%'><colgroup><col style='width:80%'><col style='width:20%'></colgroup><tbody>");

        document.write("<tr><td><label>"+lng.actual_power[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValueActPower' style='width:0%'</div></div></td><td><span id='idPGBarActPower'></span></td></tr>");

        document.write("<tr><td><label>"+lng.set_power[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValueSetPower'style='width:0%'</div></div></td><td><span id='idPGBarSetPower'></span></td></tr>");

        document.write("<tr><td><label>"+lng.pulse_width_power_stage[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValuePulseWidthPowerStage' style='width:0%'</div></div></td><td><span id='idPGBarPulseWidthPowerStage'></span></td></tr>");

        document.write("<tr><td><label>"+lng.actual_power[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValueActPowerPercent' style='width:0%'</div></div></td><td><span id='idPGBarActPowerPercent'></span></td></tr>");

        document.write("</tbody></table>")
        document.write("<div style='width:400px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            addHTML("idPGBarActPower", getMBregister(activeIndex,"powerP").formatted.trim());
            var actPowerW = getMBregister(activeIndex,"powerP").value;
            var maxPowerW = getMBregister(activeIndex,"powerRange").value;
            var actPowerPercent = 0;
            if(maxPowerW != 0) {
                actPowerPercent =  actPowerW / maxPowerW * 100;
            }
            setProgBarValue("idPGBarValueActPower",actPowerPercent);

            addHTML("idPGBarSetPower", getMBregister(activeIndex,"targetPower").formatted.trim());
            setProgBarValue("idPGBarValueSetPower",getMBregister(activeIndex,"targetPower").value);
            
            addHTML("idPGBarPulseWidthPowerStage", getMBregister(activeIndex,"pulsWidthPowerState").formatted.trim());
            setProgBarValue("idPGBarValuePulseWidthPowerStage",getMBregister(activeIndex,"pulsWidthPowerState").value);

            addHTML("idPGBarActPowerPercent", getMBregister(activeIndex,"actualPower").formatted.trim());
            setProgBarValue("idPGBarValueActPowerPercent",getMBregister(activeIndex,"actualPower").value);
        }
        else {
            addHTML("idPGBarActPower", "-"); setProgBarValue("idPGBarValueActPower",0);
            addHTML("idPGBarSetPower", "-"); setProgBarValue("idPGBarValueSetPower",0);
            addHTML("idPGBarPulseWidthPowerStage", "-"); setProgBarValue("idPGBarValuePulseWidthPowerStage",0);
            addHTML("idPGBarActPowerPercent", "-"); setProgBarValue("idPGBarValueActPowerPercent",0);
        }

    }


}

function extMonitorFrequency(init) {
    if(init == "init")  {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.frequency[LNG] +"</span></h4>");
        document.write("<table id='extMonFreqTable' style='width:100%'><colgroup><col style='width:33%'><col style='width:33%'><col style='width:33%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.set_min[LNG] +"</td><td>"+lng.actual[LNG] +"</td><td>"+lng.set_max[LNG] +"</td></tr>");
        document.write("<tr><td><span id='idFreqSetMin'>-</span></td><td><span id='idActFreq'>-</span></td><td><span id='idFreqSetMax'>-</span></td></tr>");
        document.write("</tbody></table>")
        document.write("<div class='slidecontainer'><input type='range' disabled min='0' max='0' value='0' class='slider' id='sliderFreq' oninput="+"changeSliderValue(this.id,'idActFreq',false)"+"></div>");
        document.write("<div style='width:400px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            var elem = document.getElementById("sliderFreq");
            if(elem) {
                elem.min = getMBregister(activeIndex,"frqMin").value;
                elem.max = getMBregister(activeIndex,"frqMax").value;
                elem.value = getMBregister(activeIndex,"actualFrequency").value;
                changeSliderValue('sliderFreq','idActFreq',false); 
                addHTML("idFreqSetMin", elem.min); 
                addHTML("idFreqSetMax", elem.max); 
            }
        }
        else {
            var elem = document.getElementById("sliderFreq");
            if(elem) {
                elem.min = 0;
                elem.max = 0;
                elem.value = 0;
                addHTML("idFreqSetMin", '-'); 
                addHTML("idFreqSetMax", '-'); 
                addHTML("idActFreq", '-'); 
                
            }
        }
    }
}

function extMonitorStatusConfig(init,level) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.status[LNG] +" / "+lng.config[LNG] +"</span></h4>");
        document.write("<table id='extMonStatusConfigTable' style='width:100%'><colgroup><col style='width:70%'><col style='width:30%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.us_power[LNG] +"</td><td><input id='btStatusConfig_USpower' type='button' class='btOFF' value='"+lng.stop[LNG] +"' onclick="+"changeButtonState(this.id,'"+lng.start[LNG] +"','"+lng.stop[LNG] +"')"+"></input></td></tr>");
        document.write("<tr><td>"+lng.frequency[LNG] +"</td>");
        document.write("<td><select id='idFreqSelect' class=paramSelect onchange='setFreqSelection(this.id,false)'></select></tr>");
        document.write("<tr><td>"+lng.degas[LNG] +"</td><td><input id='btStatusConfig_Degas' type='button' class='btOFF' value='"+lng.off[LNG] +"' onclick="+"changeButtonState(this.id,'"+lng.on[LNG] +"','"+lng.off[LNG] +"')"+"></input></td></tr>");
        
        document.write("<tr><td>"+lng.degas_cycle_time[LNG] +"</td><td><input type='text' id='par_DegasCycleTime'  class='LMparam' value='0'></input></td></tr>");
        document.write("<tr><td>"+lng.degas_time[LNG] +"</td><td><input type='text' id='par_DegasTime'  class='LMparam' value='0'></input></td></tr>");
        document.write("<tr><td>"+lng.degas_cycle_count[LNG] +"</td><td><input type='text' id='par_DegasCycleCount'  class='LMparam' value='0'></input></td></tr>");

        document.write("<tr><td>"+lng.freq_sweep[LNG] +"</td><td><span id='idFreqSweep'>-</span></td></tr>");
        document.write("<tr><td>"+lng.ampl_sweep[LNG] +"</td><td><span id='idAmplSweep'>-</span></td></tr>");
        document.write("<tr><td>"+lng.resonance[LNG] +"</td><td><span id='idResonance'>-</span></td></tr>");
        document.write("<tr><td>"+lng.phase_optimizing_long[LNG] +"</td><td><span id='idPhaseOptimization'>-</span></td></tr>");
        document.write("<tr><td>"+lng.freq_regulation[LNG] +"</td><td><span id='idFreqRegulation'>-</span></td></tr>");
        document.write("<tr><td>"+lng.op_state[LNG] +"</td><td><span id='idOPstate'>-</span></td></tr>");
        document.write("<tr><td>"+lng.settling_status[LNG] +"</td><td><span id='idSettling'>-</span></td></tr>");

        document.write("<tr><td><input id='btReadGenerator' type='button' class='btnCounterReset' onclick='read_generator()' value='"+lng.read[LNG]+"'></input></td><td><input id='btSaveGenerator' type='button' class='btnCounterReset' onclick='save_generator()' value='"+lng.save[LNG]+"'></input></td></tr>");
        
        document.write("</tbody></table>")
        document.write("<div style='width:300px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        var control0 = 0;
        var status0 = 0;
        var status1 = 0;
        var configSet = 0;
        if(isBackendConnected(activeIndex)) {
            control0 = getMBregister(activeIndex,"control0").value;
            status0 = getMBregister(activeIndex,"status0").value;
            if(indexChanged) {
                if(setButtonState("btStatusConfig_USpower",status0 & (1 << 0),lng.start[LNG],lng.stop[LNG])) {
                    //markingChanges[activeIndex] = 1;
                }
                setFreqSelection("idFreqSelect","init");
                if(setButtonState("btStatusConfig_Degas",status0 & (1 << 7),lng.on[LNG],lng.off[LNG])) {
                    //markingChanges[activeIndex] = 1;
                }

                document.getElementById("par_DegasCycleTime").value = getMBregister(activeIndex,"degasCycleTime").value;
                document.getElementById("par_DegasTime").value = getMBregister(activeIndex,"degasTime").value;
                document.getElementById("par_DegasCycleCount").value = getMBregister(activeIndex,"degasCycleCount").value;

            }
            
            if(status0 & (1 << 5)) { addHTML("idFreqSweep", lng.on[LNG]); } else { addHTML("idFreqSweep", lng.off[LNG]);}
            if(status0 & (1 << 6)) { addHTML("idAmplSweep", lng.on[LNG]); } else { addHTML("idAmplSweep", lng.off[LNG]);}      
            if(status1 & (1 << 0)) { addHTML("idOPstate", lng.run[LNG]); } else { addHTML("idOPstate", lng.ready[LNG]);}     
            if(status1 & (1 << 1)) { addHTML("idSettling", lng.active[LNG]); } else { addHTML("idSettling", lng.inactive[LNG]);}     
    
            configSet = getMBregister(activeIndex,"configSet" + document.getElementById("idFreqSelect").value).value;
            if(configSet & (1 << 3)) { addHTML("idResonance", lng.serial[LNG]); } else { addHTML("idResonance", lng.parallel[LNG]);}  
            if(configSet & (1 << 1)) { addHTML("idPhaseOptimization", lng.on[LNG]); } else { addHTML("idPhaseOptimization", lng.off[LNG]);}
            if(configSet & (1 << 2)) { addHTML("idFreqRegulation", lng.on[LNG]); } else { addHTML("idFreqRegulation", lng.off[LNG]);}

            document.getElementById("btStatusConfig_USpower").disabled = false;
            document.getElementById("btStatusConfig_Degas").disabled = false;
            document.getElementById("par_DegasCycleTime").disabled = false;
            document.getElementById("par_DegasTime").disabled = false;
            document.getElementById("par_DegasCycleCount").disabled = false;
            document.getElementById("idFreqSelect").disabled = false;
            document.getElementById("btReadGenerator").disabled = false;
            document.getElementById("btSaveGenerator").disabled = false;

        }
        else {
            if(indexChanged) {
                setFreqSelection("idFreqSelect","init");
            }
            addHTML("idFreqSweep", "-");
            addHTML("idAmplSweep", "-");  
            addHTML("idResonance", "-");  
            addHTML("idPhaseOptimization", "-");  
            addHTML("idFreqRegulation", "-");  
            addHTML("idOPstate", "-");  
            addHTML("idSettling", "-");  
            
            document.getElementById("btStatusConfig_USpower").disabled = true;
            document.getElementById("btStatusConfig_Degas").disabled = true;
            document.getElementById("par_DegasCycleTime").disabled = true;
            document.getElementById("par_DegasTime").disabled = true;
            document.getElementById("par_DegasCycleCount").disabled = true;
            document.getElementById("idFreqSelect").disabled = true;
            document.getElementById("btReadGenerator").disabled = true;
            document.getElementById("btSaveGenerator").disabled = true;

        }        
    }
}

function extMonitorGeneratorInfo(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.generator_info[LNG] +"</span></h4>");
        document.write("<table id='extMonGenInfoTable' style='width:100%'><colgroup><col style='width:25%'><col style='width:75%'></colgroup><tbody>");

        document.write("<tr><td>SN Core</td><td><span id='serialNumberCore'></span></td></tr>");
        document.write("<tr><td>Config</td><td><span id='configVers'></span></td></tr>");
        document.write("<tr><td>HW Core</td><td><span id='hwVers'></span></td></tr>");
        document.write("<tr><td>SW MCU</td><td><span id='coreMCUVers'></span></td></tr>");
        document.write("<tr><td>SW FPGA</td><td><span id='coreFPGAVers'></span></td></tr>");
        document.write("<tr><td>SW DCM</td><td><span id='dcmVers'></span></td></tr>");
        
        document.write("<tr><td><span id='idInfoErrorTitle'>"+lng.error[LNG] +"</td><td><span id='idInfoError'></span></td></tr>");
        document.write("<tr><td colspan='2'><span id='idInfoErrorText'></span></td></tr>"); 
        document.write("</tbody></table>");
        document.write("<div style='width:350px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {

            addHTML("serialNumberCore", getMBregister(activeIndex,"serNr").formatted.trim());
            addHTML("configVers", getVersionString(activeIndex,"ConfigVers","ConfigVersPatch"));
            addHTML("hwVers", getVersionString(activeIndex,"hwVers","hwVersPatch"));
            addHTML("coreMCUVers", getVersionString(activeIndex,"swVersMcu","swVersPatchMcu"));
            addHTML("coreFPGAVers", getVersionString(activeIndex,"swVersFpga","swVersPatchFpga"));
            if(activeIndex == 0){
               addHTML("dcmVers", "V x.y.z"); 
            }
            else {
                addHTML("dcmVers", "V a.b.c"); 
            }

            var warningNumber = getMBregister(activeIndex,"warning").value;
            var warningText = "";
            switch(warningNumber) {
                case 0: warningText += lng.error_0[LNG]; break;
                case 1: warningText += lng.error_1[LNG]; break;
                case 2: warningText += lng.error_2[LNG]; break;
                case 3: warningText += lng.error_3[LNG]; break;
                case 4: warningText += lng.error_4[LNG]; break;
                case 5: warningText += lng.error_5[LNG]; break;
                case 6: warningText += lng.error_6[LNG]; break;
                case 7: warningText += lng.error_7[LNG]; break;
                case 8: warningText += lng.error_8[LNG]; break;
                case 9: warningText += lng.error_9[LNG]; break;

                default: warningText += lng.not_defined[LNG]; break;
            }
            var errorNumber = getMBregister(activeIndex,"error").value;
            var errorText = "";
            switch(errorNumber) {
                case 0: errorText += lng.error_0[LNG]; break;
                case 1: errorText += lng.error_1[LNG]; break;
                case 2: errorText += lng.error_2[LNG]; break;
                case 3: errorText += lng.error_3[LNG]; break;
                case 4: errorText += lng.error_4[LNG]; break;
                case 5: errorText += lng.error_5[LNG]; break;
                case 6: errorText += lng.error_6[LNG]; break;
                case 7: errorText += lng.error_7[LNG]; break;
                case 8: errorText += lng.error_8[LNG]; break;
                case 9: errorText += lng.error_9[LNG]; break;
                
                case 100: errorText += lng.error_100[LNG]; break;
                case 101: errorText += lng.error_101[LNG]; break;
                case 102: errorText += lng.error_102[LNG]; break;
                
                case 252: errorText += lng.error_252[LNG]; break;
                case 253: errorText += lng.error_253[LNG]; break;
                case 254: errorText += lng.error_254[LNG]; break;
                case 255: errorText += lng.error_255[LNG]; break;

                default: errorText += lng.not_defined[LNG]; break;
            }
            if(errorNumber) {
                addHTML("idInfoErrorTitle", lng.error[LNG]);
                addHTML("idInfoError", "#"+errorNumber);
                addHTML("idInfoErrorText", errorText);
            }
            else if(warningNumber){
                addHTML("idInfoErrorTitle", lng.warning[LNG]);
                addHTML("idInfoError", "#"+warningNumber);
                addHTML("idInfoErrorText", warningText);
            }
            else {
                addHTML("idInfoErrorTitle", lng.error[LNG]);
                addHTML("idInfoError", "");
                addHTML("idInfoErrorText", "&nbsp;");
            }
            
        }
        else {
            addHTML("serialNumberCore", "-");
            addHTML("configVers", "-");
            addHTML("hwVers", "-");
            addHTML("coreMCUVers", "-");
            addHTML("coreFPGAVers", "-");
            addHTML("dcmVers", "-");
            addHTML("idInfoError", "-");
            addHTML("idInfoErrorText", "-");
        }
    }
}

function extMonitorElectricalData(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.electrical_data[LNG] +"</span></h4>");
        document.write("<table id='extMonElecDataTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:40%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.hf_current[LNG] +"</td><td><span id='idHFcurrent'></span></td></tr>");
        document.write("<tr><td>"+lng.voltage_power_stage[LNG] +"</td><td><span id='idVoltPwrStage'></span></td></tr>");
        document.write("<tr><td>"+lng.power[LNG] +" P</td><td><span id='idPowerP'></span></td></tr>");
        document.write("<tr><td>"+lng.power[LNG] +" S</td><td><span id='idPowerS'></span></td></tr>");
        document.write("<tr><td>"+lng.actual_phase[LNG] +"</td><td><span id='idActPhase'></span></td></tr>");
        document.write("</tbody></table>")
        document.write("<div style='width:350px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            addHTML("idHFcurrent", getMBregister(activeIndex,"current").formatted.trim());
            addHTML("idVoltPwrStage", getMBregister(activeIndex,"voltagePowerStage").formatted.trim());
            addHTML("idPowerP", getMBregister(activeIndex,"powerP").formatted.trim());
            addHTML("idPowerS", getMBregister(activeIndex,"powerS").formatted.trim());
            addHTML("idActPhase", getMBregister(activeIndex,"actualPhase").formatted.trim());
        }
        else {
            addHTML("idHFcurrent", "-");
            addHTML("idVoltPwrStage", "-");
            addHTML("idPowerP", "-");
            addHTML("idPowerS", "-");
            addHTML("idActPhase", "-");
        }
    }
}

function extMonitorTemperatures(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.temperatures[LNG] +"</span></h4>");
        document.write("<table id='extMonTemperatureTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:40%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.pcb[LNG] +"</td><td><span id='idTempPCB'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q1</td><td><span id='idTempQ1'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q2</td><td><span id='idTempQ2'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q3</td><td><span id='idTempQ3'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q4</td><td><span id='idTempQ4'></span></td></tr>");
        document.write("<tr><td>"+lng.fan[LNG] +"</td><td><span id='idFan'></span></td></tr>");
        document.write("</tbody></table>")
        document.write("<div style='width:350px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            addHTML("idTempPCB", getMBregister(activeIndex,"temperaturPcb").formatted.trim());
            addHTML("idTempQ1", getMBregister(activeIndex,"temperaturQ1").formatted.trim());
            addHTML("idTempQ2", getMBregister(activeIndex,"temperaturQ2").formatted.trim());
            addHTML("idTempQ3", getMBregister(activeIndex,"temperaturQ3").formatted.trim());
            addHTML("idTempQ4", getMBregister(activeIndex,"temperaturQ4").formatted.trim());
            var fanActive = parseInt(getMBregister(activeIndex,"status0").value) & (1 << 6);
            if(fanActive) {
                addHTML("idFan", lng.on[LNG]);
            }
            else {
                addHTML("idFan", lng.off[LNG]);
            }
        }
        else {
            addHTML("idTempPCB", "-");
            addHTML("idTempQ1", "-");
            addHTML("idTempQ2", "-");
            addHTML("idTempQ3", "-");
            addHTML("idTempQ4", "-");
            addHTML("idFan", "-");
        }
    }
}

function extMonitorConfiguration() {
    /*
    document.write("<div class='extMonitorContent'>");
    document.write("<h4 class='contentHeader'><span>Configuration</span></h4>");
    document.write("<div style='width:400px;height:200px'></div>");
    document.write("</div>");
    */
}

function changeSliderValue(id,tarID,forceUpdate) {
    var elem = document.getElementById(id);
    var tar = document.getElementById(tarID);
    if(elem && tar) {
        if(tar.innerHTML !== elem.value) {
            tar.innerHTML = elem.value;
            if(isBackendConnected(activeIndex) && forceUpdate) {
                //markingChanges[activeIndex] = 1;        // marking selected generator value has changed if connected only
            }
        }
    }
}

function changeButtonState(id,strON,strOFF) {
    var element = document.getElementById(id);
    if(element) {
        if(element.value === strON) {
            element.value = strOFF;
            element.className = "btOFF";
        }
        else if(element.value === strOFF) {
            element.value = strON;
            element.className = "btON";
        }
        if(isBackendConnected(activeIndex)) {
            //markingChanges[activeIndex] = 1;        // marking selected generator value has changed if connected only
        }
    }
}

function setButtonState(id,value,strON,strOFF) {
    var element = document.getElementById(id);
    if(element) {
        if(element.value === strON && value) {
            return 0;       // already correct set
        }
        else if(element.value === strOFF && !value) {
            return 0;       // already correct cleared
        }
        else {
            if(value) {
                element.value = strON;
                element.className = "btON";
            }
            else {
                element.value = strOFF;
                element.className = "btOFF";
            }
            return 1;       // changed
        }
    }
}

function setFreqSelection(id,init) {
    var element = document.getElementById(id);
    if(element) {
        var length = element.options.length;
        if(init == "init" || init == "param") {
            for (i = length-1; i >= 0; i--) {
                element.options[i] = null;
            }
        }

        if(isBackendConnected(activeIndex)) {
            if(init == "init" || init == "param") {
                var supportedFreq = 0;
                for(var i=0;i<4;i++) {
                    if(init == "init") {
                        if(getMBregister(activeIndex,"configSet" + (i+1).toString()).value & (1 << activeConfigBIT)) {
                            supportedFreq |= (1 << i);
                        }
                    }
                    else {
                        if(document.getElementById("idCBsetActive"+i).checked) {
                            supportedFreq |= (1 << i);
                        }
                    }
                }
            
                var selectedFreq = (getMBregister(activeIndex,"status0").value >> 1) & 0x07;
                if(init == "param") {
                    for(var i=0;i<4;i++) {
                        if(document.getElementById("idCBsetActive"+i).checked) {
                            selectedFreq = i+1;
                            break;
                        }
                    }
                }

                var selectedIndex = 0;
                for(var i=0;i<4;i++) {
                    if(supportedFreq & (1 << i)) {
                        element.options[element.options.length] = new Option(i+1, i+1);
                    }   
                }
                for(var i=0;i<element.options.length;i++) {
                    if((selectedFreq) == parseInt(element.options[i].value)) {
                        selectedIndex = i;
                        break;
                    }  
                }
                element.options.selectedIndex = selectedIndex;
            }
            else {
                //markingChanges[activeIndex] = 1;
            }
            if(element.options.length == 0) {
                element.options[element.options.length] = new Option('1', '1');
            }
        }
        else {
            element.options[element.options.length] = new Option('1', '1');
        }

    }
}

function writeCounterOverview(level,init) {
    if(level == "ENG" || level == "US-ENG") {

        var tableContent = [
            [lng.operation_time[LNG],               "operatingTime",    "x"],
            ["",                                    "",                 ""],
            [lng.overtemperature[LNG],              "CntOverTempSet",    "x"],
            [lng.short_circuits[LNG],               "CntShortSet",   "x"],
            [lng.overload[LNG],                     "CntOverLoadSet",   "x"],
            [lng.idle_running[LNG],                 "CntOpenLoadSet",   "x"],
            [lng.overvoltage_shutdown[LNG],         "CntOverVoltageSet",    "x"],
            [lng.no_freq_point_found[LNG],          "CntNoFrqSet",    "x"],
            [lng.number_power_ups[LNG],             "cntPowerUp",  "x"],
            [lng.number_crashes[LNG],               "cntCrash",    "x"],
            [lng.max_cooling_temperature[LNG],      "tempMaxPcbSet",   "x"],
            ["",                                    "",     ""],
            [lng.reset[LNG],                        "allCnt",     lng.all[LNG]],
        ];

        if(level == "ENG") {
            tableContent[0][2] = "";
        }
        
        if(init == "init") {
            document.write("<div id='idCounterOverview' class='counterOverview'>");
            document.write("<h3 class='contentHeader'><span id='idCounterOverviewName'>" + lng.counter[LNG] + "</span></h3>");

            document.write("<table id='counterTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:30%'><col style='width:10%'></colgroup><tbody>");
            for(var i=0;i<tableContent.length;i++) {
                if(tableContent[i][1] != "") {
                   document.write("<tr><td>"+tableContent[i][0]+"</td><td><span id='"+tableContent[i][1]+"'></span></td>"); 
                }
                else {
                    document.write("<tr><td></td><td></td>"); 
                }
                
                if(tableContent[i][2] !="") {
                    document.write("<td><input type='button' class='btnCounterReset' id='bt"+tableContent[i][1]+"' onclick='resetCounterValue(this.id)' value="+tableContent[i][2]+"></input></td></tr>");
                }
                else {
                    document.write("<td>&nbsp;</td></tr>");
                }

            }
            document.write("</tbody></table>")
            document.write("</div>");
            document.getElementById("idCounterOverview").style.display = "none";
        }
        else {
            if(isBackendConnected(activeIndex)) {
                document.getElementById('idCounterOverviewName').innerHTML = lng.counter[LNG] + " CM"+(activeIndex+1).toString() + " - " + document.getElementById("idFreqSelect").value.toString();
                var index = document.getElementById("idFreqSelect").value;
                addHTML("operatingTime", getMBregister(activeIndex,"operatingTime").formatted.trim());

                addHTML("CntOverTempSet", getMBregister(activeIndex,"CntOverTempSet"+index).formatted.trim());
                addHTML("CntShortSet", getMBregister(activeIndex,"CntShortSet"+index).formatted.trim());
                addHTML("CntOverLoadSet", getMBregister(activeIndex,"CntOverLoadSet"+index).formatted.trim());
                addHTML("CntOpenLoadSet", getMBregister(activeIndex,"CntOpenLoadSet"+index).formatted.trim());
                addHTML("CntOverVoltageSet", getMBregister(activeIndex,"CntOverVoltageSet"+index).formatted.trim());
                addHTML("CntNoFrqSet", getMBregister(activeIndex,"CntNoFrqSet"+index).formatted.trim());

                addHTML("cntPowerUp", getMBregister(activeIndex,"cntPowerUp").formatted.trim());
                addHTML("cntCrash", getMBregister(activeIndex,"cntCrash").formatted.trim());
                var temperature = getMBregister(activeIndex,"tempMaxPcbSet"+index).value;
                var temp_unit = getMBregister(activeIndex,"tempMaxPcbSet"+index).symbol;
                for(var i=0;i<4;i++) {
                    var actTemp = getMBregister(activeIndex,"tempMaxQ"+(i+1).toString() + "Set"+index).value;
                    if(actTemp > temperature) {
                        temperature = actTemp;
                    }
                }
                addHTML("tempMaxPcbSet",temperature.toFixed(1) + " " + temp_unit);            
            }
            else {
                addHTML("operatingTime","-");   
                addHTML("CntOverTempSet","-");   
                addHTML("CntShortSet","-");   
                addHTML("CntOverLoadSet","-");   
                addHTML("CntOpenLoadSet","-");   
                addHTML("CntOverVoltageSet","-");   
                addHTML("CntNoFrqSet","-");   
                addHTML("cntPowerUp","-");   
                addHTML("cntCrash","-");   
                addHTML("tempMaxPcbSet","-");   
            }

        }
    }
}

function writeCommunicationOverview(level) {
    document.write("<div class='communicationOverview'>");
    document.write("<h3 class='contentHeader'><span>" + lng.communication_settings[LNG] + "</span></h3>");
    document.write("<table id='communicationTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:30%'><col style='width:10%'></colgroup><tbody>");
    document.write("<tr><td>" + lng.ip_address[LNG] + "</td><td><input type='text' class='comNetworkSettings' value=192.168.0></td><td>.101</td></tr>");
    document.write("<tr><td>" + lng.mask[LNG] + "</td><td><input type='text' class='comNetworkSettings' value=255.255.255></td><td>.0</td></tr>");
    document.write("<tr><td>" + lng.gateway[LNG] + "</td><td><input type='text' class='comNetworkSettings' value=192.168.0.1></td><td></td></tr>");
    document.write("<tr><td></td><td></td><td><input type='button' class='btnCounterReset' value='"+lng.save[LNG]+"'></input></td></tr>");
    document.write("</tbody></table>")
    document.write("</div>");
}

function writeSWUpdateOverview(level) {
    if(level == "US-ENG") {
        document.write("<div class='swUpdateOverview'>");
        document.write("<h3 class='contentHeader'><span>"+lng.software_update[LNG]+"</span></h3>");
        document.write("<table id='swupdateTable' style='width:100%'><colgroup><col style='width:30%'><col style='width:60%'><col style='width:10%'></colgroup><tbody>");
        document.write("<tr><td>DCM</td><td><input type='file' class='swupdateSettings'></td><td><input type='button' class='btnCounterReset' value='"+lng.start[LNG]+"'></td></tr>");
        document.write("<tr><td>CORE</td><td><input type='file' class='swupdateSettings'></td><td><input type='button' class='btnCounterReset' value='"+lng.start[LNG]+"'></td></tr>");
        document.write("</tbody></table>")
        document.write("</div>");
    }
}

function writeInfo(init) {
    var id;
    var genIndex = 0;
    if(init == "init") {
        document.write("<div class='infoOverview'>");
        document.write("<h3 class='contentHeader'><span>"+lng.information[LNG]+"</span></h3>");
        document.write("<br>DCM V1.1.0</br>");
        document.write("<br>Config <span id='configVers'></span></br>");
        document.write("<br>Hardware <span id='hwVers'></span></br>");
        document.write("<br>CORE MCU <span id='coreMCUVers'></span></br>");
        document.write("<br>CORE FPGA <span id='coreFPGAVers'></span></br>");
        document.write("<br>CORE Bootloader MCU <span id='coreBLMCUVers'></span></br>");
        document.write("<br>CORE Bootloader FPGA <span id='coreBLFPGAVers'></span></br>");

        document.write("<br>Test <span id='testval'></span></br>");

        document.write("<br></br>");
        document.write("<br>"+lng.msg_manu_info[LNG]+"</br>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(genIndex)) {
            addHTML("configVers", getVersionString(genIndex,"ConfigVers","ConfigVersPatch"));
            addHTML("hwVers", getVersionString(genIndex,"hwVers","hwVersPatch"));
            addHTML("coreMCUVers", getVersionString(genIndex,"swVersMcu","swVersPatchMcu"));
            addHTML("coreFPGAVers", getVersionString(genIndex,"swVersFpga","swVersPatchFpga"));
            addHTML("coreBLMCUVers", getVersionString(genIndex,"blVersMcu","blVersPatchMcu"));
            addHTML("coreBLFPGAVers", getVersionString(genIndex,"blVersFpga","blVersPatchFpga"));
            addHTML("testval", testValue);

            
            //document.getElementById(id).innerHTML = getMBregister(genIndex,"temperaturQ1").formatted.trim();
 
        }
    }

}

function updateConfigSet(id) {
    var number_of_checkboxes = 0;
    for(var i=0;i<4;i++) {
        if(document.getElementById("idCBsetActive"+i).checked) {
            number_of_checkboxes++;
        }
    }
    if(number_of_checkboxes == 0) {
        document.getElementById(id).checked = true;
    }
    setFreqSelection("idFreqSelect","param");
    writeLMparameter(userLevel,"parDisable");
}

function isBackendConnected(genIndex) {
    if(generatorEnabled[genIndex]) {        // modbus registers
        if(mb_response[genIndex].length > 0) {
            return 1;
        }
    }
    return 0;
}

function getMBregister(genIndex,name) {
    if(generatorEnabled[genIndex]) {        // modbus registers
       return mb_response[genIndex].find(({regname}) => regname === name);
    }
    return 0;
}

function getVersionString(genIndex,major_minor, patch) {
    var ver_major,ver_minor,ver_patch;
    ver_major = parseInt(getMBregister(genIndex,major_minor).formatted.trim() / 256);
    ver_minor = parseInt(getMBregister(genIndex,major_minor).formatted.trim() % 256);
    ver_patch = parseInt(getMBregister(genIndex,patch).formatted.trim());
    return "V "+ver_major+"."+ver_minor+"."+ver_patch;
}

function addHTML(id,text) {
    if(document.getElementById(id)) {
        document.getElementById(id).innerHTML = text; 
    } 
}

function setElemValue(id,value) {
    if(document.getElementById(id)) {
        document.getElementById(id).value = value; 
    } 
}

function setProgBarValue(id,value) {
    var elem = document.getElementById(id);
    if(elem) {
        if(value > 100) {
            value = 100;
        }
        if(value < 0) {
            value = 0;
        }
        elem.style.width = value + "%";
    }
}

function isButtonState(id,text) {
    var elem = document.getElementById(id);
    if(elem) {
        if(elem.value === text) {
            return 1;
        }
    }
    return 0;
}

//*****************************************************************************************************************************
// LANGUAGE SECTION
//*****************************************************************************************************************************
function changeLanguage(languagIndex) {
	LNG = parseInt(languagIndex);
	if(LNG < 0) { LNG = 0;}
	if(LNG > 1) { LNG = 1;}
	localStorage.setItem('languageIndex', LNG);
	location.replace(location.href);
}

var lng = {   					/* ENGLISH                          | DEUTSCH             */
  power: 					    ["Power",							"Leistung"],
  login:						["Login",							"Anmelden"],
  logout:                       ["Logout",                          "Abmelden"],
  password_change:              ["Change password",                 "Passwort &auml;ndern"],
  msg_password_change:          ["Customize the passwords.",        "Passen Sie die Passw&ouml;rter an."],
  communication:				["Communication",			        "Kommunikation"],
  monitor:						["Monitor",						    "Monitor"],
  language:						["Language",					    "Sprache"],
  info:							["Info",							"Info"],
  screenshot:					["Screenshot",				        "Screenshot"],
  engineer:						["Engineer",                        "Engineer"],
  us_engineer:					["US-Engineer",                     "US-Engineer"],
  sw_update:                    ["SW Update",                       "SW Update"],
  msg_set_credentials:          ["Enter user name and password.",   "Geben Sie Benutzername und Passwort ein."],
  username:                     ["User name",                       "Benutzername"],
  password:                     ["Password",                        "Passwort"],
  change:                       ["Change",                          "&Auml;ndern"],
  overview:                     ["Overview",                        "&Uuml;bersicht"],
  parameter:                    ["Parameter",                       "Parameter"],
  settings:                     ["Settings",                        "Einstellungen"],
  counter:                      ["Counter",                         "Z&auml;hler"],
  actual_power:                 ["Actual Power",                    "Aktuelle Leistung"],
  set_power:                    ["Set Power",                       "Eingestellte Leistung"],
  set_power_short:              ["Set Power",                       "Eing. Leistung"],
  pulse_width_power_stage:      ["Pulse width power stage",         "Stellwert Endstufe"],
  frequency:                    ["Frequency",                       "Frequenz"],
  frequency_short:              ["Freq",                            "Freq"],
  set_min:                      ["Set min",                         "Minimal"],
  set_max:                      ["Set max",                         "Maximum"],
  actual:                       ["Actual",                          "Aktuell"],
  status:                       ["Status",                          "Status"],
  config:                       ["Config",                          "Konfiguration"],
  us_power:                     ["US Power",                        "US Leistung"],
  freq_sweep:                   ["Freq Sweep",                      "Freq Sweep"],
  ampl_sweep:                   ["Ampl Sweep",                      "Ampl Sweep"],
  degas:                        ["DEGAS",                           "DEGAS"],
  resonance:                    ["Resonance",                       "Resonanz"],
  phase_optimizing_long:        ["Phase Optimization",              "Phasenoptimierung"],
  freq_regulation:              ["Freq Regulation",                 "Freq Regulation"],
  settling_status:              ["Settling Status",                 "Settling Status"],
  set_power_reached:            ["Set power reached",               "Eing. Leistung erreicht"],
  start:                        ["START",                           "START"],
  stop:                         ["STOP",                            "STOP"],
  disabled:                     ["disabled",                        "deaktiviert"],
  on:                           ["ON",                              "AN"],
  off:                          ["OFF",                             "AUS"],
  yes:                          ["Yes",                             "Ja"], 
  no:                           ["No",                              "Nein"], 
  generator_info:               ["Generator Info",                  "Generator Info"], 
  op_state:                     ["OP State",                        "Betriebszustand"], 
  ready:                        ["ready",                           "ready"], 
  run:                          ["run",                             "run"], 
  settling:                     ["Settling",                        "Einschwingen"], 
  active:                       ["active",                          "aktiv"], 
  inactive:                     ["inactive",                        "inaktiv"], 
  fan:                          ["Fan",                             "L&uuml;fter"],
  warning:                      ["Warning",                         "Warnung"], 
  error:                        ["Error",                           "Fehler"],
  electrical_data:              ["Electrical Data",                 "Elektrische Daten"],
  hf_current:                   ["HF current",                      "HF Strom"],
  voltage_power_stage:          ["Voltage Power Stage",             "Spannung Endstufe"],
  actual_phase:                 ["Actual Phase",                    "Aktuelle Phase"],
  temperatures:                 ["Temperatures",                    "Temperaturen"],
  pcb:                          ["PCB",                             "PCB"],
  power_stage:                  ["Power Stage",                     "Endstufe"],
  setting_number:               ["Setting number",                  "Einstellungsnummer"],
  active:                       ["Active",                          "Aktiv"],
  set_power_short:              ["Set power",                       "Eing. Leistung"],
  freq_min:                     ["Freq min",                        "Freq min"],
  freq_max:                     ["Freq max",                        "Freq max"],
  phase_set:                    ["Phase set",                       "Eing. Phase"],
  wob_shap_set:                 ["Wob Shap Set",                    "Eing. Wob Shap"],
  wob_freq_set:                 ["Wob Freq Set",                    "Eing. Wob Freq"],
  wob_ampl_set:                 ["Wob Ampl. Set",                   "Eing. Wob Ampl."],
  degas_cycle_time:             ["Degas Cycle Time [s]",            "Degas Zykluszeit [s]"],
  degas_time:                   ["Degas Time [s]",                  "Degas Zeit [s]"],
  degas_cycle_count:            ["Degas Cycle Count",               "Degas Zyklusz&auml;hler"],
  phase_optimizing:             ["phOptimisation",                  "phOptimierung"],
  freq_regulation_short:        ["freqRegulation",                  "freqRegulation"],
  serial_resonance:             ["Serial resonance",                "Serieresonanz"],
  operation_time:               ["Operating time",                  "Betriebszeit"],
  overtemperature:              ["Overtemperature",                 "&Uuml;bertemperatur"],
  short_circuits:               ["Short circuits",                  "Kurzschl&uuml;sse"],
  overload:                     ["Overload",                        "&Uuml;berlast"],
  idle_running:                 ["Idle running",                    "Leerlauf"],
  overcurrent_limitation:       ["Overcurrent limitation",          "&Uuml;berstrombegrenzung"],
  overvoltage_shutdown:         ["Overvoltage shutdown",            "&Uuml;berspannungsabschaltung"],
  generator_defective:          ["Generator defective",             "Generator defekt"],
  increased_temperature:        ["Increased temperature",           "Erh&ouml;hte Temperatur"],
  no_freq_point_found:          ["No frequency point found",        "Kein Frequenzpunkt gefunden"],
  number_power_ups:             ["Number of Power-UPs",             "Anzahl Power-UPs"],
  number_crashes:               ["Number of crashes",               "Anzahl Abst&uuml;rze"],
  max_cooling_temperature:      ["MAX cooling temperature",         "MAX-K&uuml;hltemperatur"],
  reset:                        ["Reset",                           "Reset"],
  all:                          ["ALL",                             "ALLE"],
  communication_settings:       ["Communication Settings",          "Kommunikationseinstellungen"],
  ip_address:                   ["IP address",                      "IP Adresse"],
  mask:                         ["Mask",                            "Maske"],
  gateway:                      ["Gateway",                         "Gateway"],
  save:                         ["Save",                            "Speichern"],
  software_update:              ["Software Update",                 "Software Update"],
  information:                  ["Information",                     "Information"],
  msg_manu_info:                ["Additional manufacture information","Zus&auml;tzliche Herstellerinformationen"],
  not_defined:                  ["Not defined",                     "Nicht definiert"],    
  read:                         ["Read",                            "Lesen"],  
  parallel:                     ["parallel",                        "parallel"],
  serial:                       ["serial",                          "serie"],
  reset_all_counters:           ["Delete all counter state from config set idx?","Alle Z%E4hlerst%E4nde aus dem Konfig-Set idx l%F6schen?"],
  us_short:                     ["US",                              "US"],

  //----Error text, keep order
  error_0:                      ["no error",                        "kein Fehler"],
  error_1:                      ["Overtemperature",                 "&Uuml;bertemperatur"],
  error_2:                      ["Overvoltage",                     "&Uuml;berspannung"],
  error_3:                      ["Undervoltage",                    "Unterspannung"],
  error_4:                      ["Secondary short circuit",         "Sekund&auml;rer Kurzschluss"],
  error_5:                      ["Excessive apparent current",      "&Uuml;berh&ouml;hter Scheinstrom"],
  error_6:                      ["Idle running",                    "Leerlauf"],
  error_7:                      ["Overload transformer",            "&Uuml;berlast Trafo"],
  error_8:                      ["Overload internal power stage",   "&Uuml;berlast intere Endstufe"],
  error_9:                      ["Overload external power stage",   "&Uuml;berlast externe Endstufe"],
  error_100:                    ["Test not finished",               "Test nicht abgeschlossen"],
  error_101:                    ["Unknown software status",         "Unbekannter Softwarestatus"],
  error_102:                    ["Saving to flash failed",          "Speicherung ins Flash fehlgeschlagen"],
  error_252:                    ["No comm. to ext. EEPROM",         "Keine Komm. zu ext. EEPROM"],
  error_253:                    ["No comm. to FPGA",                "Keine Komm. zu FPGA"],
  error_254:                    ["No comm. to remote display",      "Keine Komm. zu Fernbedienprint"],
  error_255:                    ["No comm. to DCM module",          "Keine Komm. zu DCM Modul"],
  
  
  
  
  
  

};

