// Alle Emissionsfaktoren und Konstanten in einer Datei
export const EMISSION_CONSTANTS = {
    // Scope 1 Faktoren
    EMISSION_FACTORS: {
        // Kraftstoffe
        "Benzin in L": { factor: 2.32, defaultUnit: "Liter" },
        "Diesel in L": { factor: 2.65, defaultUnit: "Liter" },
        "Erdgas (CNG) in kg":   { factor: 2.27, defaultUnit: "kg"    },
"LPG in L":             { factor: 1.63, defaultUnit: "Liter" },

// PKW-Klassen (Abrechnung pro km):
"PKW-Benzin-klein":     { factor: 0.18, defaultUnit: "km" },
"PKW-Benzin-mittel":    { factor: 0.20, defaultUnit: "km" },
"PKW-Benzin-groß":      { factor: 0.22, defaultUnit: "km" },
"PKW-Diesel-klein":     { factor: 0.19, defaultUnit: "km" },
"PKW-Diesel-mittel":    { factor: 0.21, defaultUnit: "km" },
"PKW-Diesel-groß":      { factor: 0.24, defaultUnit: "km" },

// Hybrid und E-Fahrzeuge (pro km, grob):
"hybrid":               { factor: 0.20716, defaultUnit: "km" },
"vollstromer":          { factor: 0.18,   defaultUnit: "kWh/Km" }

        // ... weitere Kraftstoffe
    },

    SCOPE1B_FACTORS: {
        "Benzin in L": { factor: 2.37, defaultUnit: "Liter" },
        "Diesel in L": { factor: 2.65, defaultUnit: "Liter" },
    "Erdgas (CNG) in kg": {
  factor: 0.202,         // kg CO₂ pro kg CNG
  defaultUnit: "kg"
},
"LKW Diesel (3,5-7,5 Tonnen)": {
  factor: 0.12955,       // kg CO₂ pro km
  defaultUnit: "km"
},
"LKW Diesel (7,5-12 Tonnen)": {
  factor: 0.09367,
  defaultUnit: "km"
},
"LKW Diesel (> 12 Tonnen)": {
  factor: 0.04735,
  defaultUnit: "km"
},
"LKW Otto-CNG (3,5-7,5 Tonnen)": {
  factor: 0.092,
  defaultUnit: "km"
},
"LKW Otto-CNG (7,5-12 Tonnen)": {
  factor: 0.078,
  defaultUnit: "km"
},
"LPG in L": {
  factor: 1.66,          // kg CO₂ pro Liter (Beispiel)
  defaultUnit: "Liter"
},
"Strom Tankstelle PKW": {
  factor: 0.356,         // kg CO₂ pro kWh (Strom-Mix)
  defaultUnit: "kWh"
},
"Strom (UBA) 2023 ohne Vorketten": {
  factor: 0.32,
  defaultUnit: "kWh"
},
"Strom (UBA) 2023 inkl. Vorketten": {
  factor: 0.30,
  defaultUnit: "kWh"
},
"Strom aus erneuerbaren Quellen (EEW)": {
  factor: 0.0,
  defaultUnit: "kWh"
}
        

        // ... weitere Faktoren
    },

    SCOPE1C_FACTORS: {
        "Altöl (EEW) 2022": { factor: 3.15, defaultUnit: "Liter" },
        "Altöl (EEW) 2024": { factor: 3.20, defaultUnit: "Liter" },
        "Biodiesel (EEW)": {
    factor: 2.70,
    defaultUnit: "Liter"
  },
  "Bioethanol (EEW)": {
    factor: 1.90,
    defaultUnit: "Liter"
  },
  "Biogas (EEW)": {
    factor: 0.20,
    defaultUnit: "kWh"
  },
  "Biomasse Holz (EEW)": {
    factor: 0.028,
    defaultUnit: "kg"
  },
  "Braunkohle (EEW)": {
    factor: 0.38,
    defaultUnit: "kg"
  },
  "Braunkohle Brikett (Lausitz)": {
    factor: 0.36,
    defaultUnit: "kg"
  },
  "Braunkohle Brikett (rheinisch)": {
    factor: 0.37,
    defaultUnit: "kg"
  },
  "Deponiegas (EEW)": {
    factor: 0.05,
    defaultUnit: "kg"
  },
  "Erdgas Heizwert (EEW) 2022": {
    factor: 0.201,
    defaultUnit: "kWh"
  },
  "Erdgas Brennwert (EEW) 2025": {
    factor: 0.22,
    defaultUnit: "kWh"
  },
  "Flüssiggas (EEW)": {
    factor: 1.60,
    defaultUnit: "Liter"
  },
  "Heizöl (HEL)": {
    factor: 3.11,
    defaultUnit: "Liter"
  },
  "Heizöl leicht / Diesel (EEW)": {
    factor: 2.65,
    defaultUnit: "Liter"
  },
  "Heizöl schwer (EEW)": {
    factor: 3.20,
    defaultUnit: "Liter"
  },
  "Holz-Pellets (2023)": {
    factor: 0.035,
    defaultUnit: "kg"
  },
  "Holz-Pellets (EEW)": {
    factor: 0.036,
    defaultUnit: "kg"
  },
  "Klärgas (EEW)": {
    factor: 0.03,
    defaultUnit: "kWh"
  },
  "Klärschlamm (EEW)": {
    factor: 0.02,
    defaultUnit: "kg"
  },
  "Steinkohle (EEW)": {
    factor: 0.335,
    defaultUnit: "kg"
  },
  "Wasserstoff (H₂) (EEW) 2024 - erneuerbar": {
    factor: 0.0,
    defaultUnit: "kg"
  },
  "Wasserstoff (H₂) (EEW) 2024": {
    factor: 0.40,
    defaultUnit: "kg"
  },
  "Wasserstoff (CO₂-arm) (EEW) 2025": {
    factor: 0.20,
    defaultUnit: "kg"
  },
  "Prozessdampf (EEW) 2025": {
    factor: 0.10,
    defaultUnit: "kWh"
  }
        // ... weitere Faktoren
    },

    TECHNICAL_GAS_FACTORS: {
        "R134a": { factor: 1430, defaultUnit: "kg" },
        "R32": { factor: 675, defaultUnit: "kg" },
        "Helium (He) (EEW) 2022": {
    factor: 8.56, // Falls Helium GWP=0, hier Prozess-Aufwand z. B. 8.56 kg/kg
    defaultUnit: "kg"
  },
  "Helium (He) (EEW) 2024": {
    factor: 8.60,
    defaultUnit: "kg"
  },
  "Methan (CH4)": {
    factor: 28.0, // IPCC AR5 GWP100 ~ 28
    defaultUnit: "kg"
  },
  "Propan (C3H8) (EEW) 2022": {
    factor: 3.0, // Bsp: GWP ~ 3, plus Prozess-Emissionen (hier gerundet)
    defaultUnit: "kg"
  },
  "Propan (C3H8) (EEW) 2024": {
    factor: 3.1,
    defaultUnit: "kg"
  },
  "Propen (C3H6) (EEW) 2022": {
    factor: 3.0, // Ähnlich Propan
    defaultUnit: "kg"
  },
  "Propen (C3H6) (EEW) 2024": {
    factor: 3.1,
    defaultUnit: "kg"
  },
  "R1150 (Ethylen)": {
    factor: 2.0, // Bsp. GWP ~2, plus EEW
    defaultUnit: "kg"
  },
  "R1234yf": {
      factor: 4,            // Obwohl oft als <1 angegeben, werden in manchen Quellen ca. 4 kg CO₂e/kg genannt
      defaultUnit: "kg"
    },
    "R1234ze": {
      factor: 6,            // Beispielwert: ca. 6 kg CO₂e/kg
      defaultUnit: "kg"
    },
    "SF6": {
      factor: 22800,        // Extrem hohes GWP – ca. 22.800 kg CO₂e/kg (IPCC)
      defaultUnit: "kg"
    },
    "NF3": {
      factor: 17200,        // ca. 17.200 kg CO₂e/kg (IPCC AR5)
      defaultUnit: "kg"
    },
    "R744 (CO2)": {
      factor: 1,            // CO₂ selbst, per Definition GWP=1
      defaultUnit: "kg"
    },
    // --- Weitere Gase (können je nach Bedarf ergänzt werden) ---
    "Oxygen (O2) flüssig (EEW) 2024": {
      factor: 0.15,         // Beispiel: ca. 0,15 kg CO₂ pro kg, wenn Prozessketten berücksichtigt werden
      defaultUnit: "kg"
    },
    "Nitrogen (N2) flüssig (EEW) 2024": {
      factor: 0.20,         // Beispiel: ca. 0,20 kg CO₂ pro kg
      defaultUnit: "kg"
    },
  // ---------------------
  // 2) HFKW / Kältemittel
  // (GWP = IPCC AR4/AR5, gerundet)
  // ---------------------
  "R134a": {
      factor: 1430,         // Typischer Wert: ca. 1430 kg CO₂e pro kg
      defaultUnit: "kg"
    },
  "R116 (C2F6)": {
    factor: 11900, // IPCC GWP100 ~ 11900
    defaultUnit: "kg"
  },
  "R125 (Pentafluorethan)": {
    factor: 3500, // ca. 3500
    defaultUnit: "kg"
  },
  "R1270 (Propen)": {
    factor: 3, // wie Propen, s. o.
    defaultUnit: "kg"
  },
  "R134 (CF2H2)": {
    factor: 1100, 
    defaultUnit: "kg"
  },
  "R14 (CF4)": {
    factor: 7390,
    defaultUnit: "kg"
  },
  "R143 (C2F3H3)": {
    factor: 4470,
    defaultUnit: "kg"
  },
  "R152a (C2H4F2)": {
    factor: 138,
    defaultUnit: "kg"
  },
  "R161 (Fluorethan)": {
    factor: 4, // teils < 10, stark abweichende Quellen
    defaultUnit: "kg"
  },
  "R170 (Ethan)": {
    factor: 5, // Bsp. 
    defaultUnit: "kg"
  },
  "R218 (C3F8)": {
    factor: 7000,
    defaultUnit: "kg"
  },
  "R227ea (C3HF7)": {
    factor: 3220,
    defaultUnit: "kg"
  },
  "R236fa (C3H2F6)": {
    factor: 9810,
    defaultUnit: "kg"
  },
  "R245fa (C3H3F5)": {
    factor: 1030,
    defaultUnit: "kg"
  },
  "R290 (Propan)": {
    factor: 3, 
    defaultUnit: "kg"
  },
  "R404A": {
    factor: 3922,
    defaultUnit: "kg"
  },
  "R407A": {
    factor: 2107,
    defaultUnit: "kg"
  },
  "R407B": {
    factor: 2650,
    defaultUnit: "kg"
  },
  "R407C": {
    factor: 1774,
    defaultUnit: "kg"
  },
  "R407D": {
    factor: 1627,
    defaultUnit: "kg"
  },
  "R407E": {
    factor: 1550,
    defaultUnit: "kg"
  },
  "R407F": {
    factor: 1850,
    defaultUnit: "kg"
  },
  "R32": {
      factor: 675,          // Typischer Wert für R32: ca. 675 kg CO₂e/kg
      defaultUnit: "kg"
    },
  "R410A": {
    factor: 2088,
    defaultUnit: "kg"
  },
  "R417C": {
    factor: 1850,
    defaultUnit: "kg"
  },
  "R421A": {
    factor: 2177,
    defaultUnit: "kg"
  },
  "R421B": {
    factor: 2208,
    defaultUnit: "kg"
  },
  "R422A": {
    factor: 3143,
    defaultUnit: "kg"
  },
  "R422D": {
    factor: 2729,
    defaultUnit: "kg"
  },
  "R423A": {
    factor: 2280,
    defaultUnit: "kg"
  },
  "R424A": {
    factor: 2440,
    defaultUnit: "kg"
  },
  "R425A": {
    factor: 2250,
    defaultUnit: "kg"
  },
  "R426A": {
    factor: 1508,
    defaultUnit: "kg"
  },
  "R427A": {
    factor: 2138,
    defaultUnit: "kg"
  },
  // ... usw. Du kannst für die vielen R4xx, R5xx, R6xx, R7xx
  // analog weitermachen, falls du alle brauchst.

  // ---------------------
  // 3) Weitere Gase
  // ---------------------
  "R600 (n-Butan)": {
      factor: 4,            // ca. 4 kg CO₂e/kg – Beispielwert
      defaultUnit: "kg"
    },
  "R702 (Wasserstoff)": {
    factor: 0, // H2 GWP=0; ggf. Prozess-Emissionen ansetzen
    defaultUnit: "kg"
  },
  "R717 (Ammoniak)": {
    factor: 0, // GWP=0, toxisch, aber kein THG-Effekt
    defaultUnit: "kg"
  },
  "R744 (CO2)": {
    factor: 1, 
    defaultUnit: "kg"
  },
  "RC318 (Octafluorocyclobutan)": {
    factor: 10300,
    defaultUnit: "kg"
  },
  "Sauerstoff (O2) (EEW) 2024": {
    factor: 0.15, // z. B. ~0,15 kg CO₂/kg
    defaultUnit: "kg"
  },
  "Stickstoff (N2) (EEW) 2024": {
    factor: 0.2,
    defaultUnit: "kg"
  }
        // ... weitere Gase
    },

    // Scope 2 Faktoren
    SCOPE2A_FACTORS: {
        "Strom (UBA) 2021 ohne Vorketten": { factor: 0.366, defaultUnit: "kWh" },
        "Strom (UBA) 2021 inkl. Vorketten": { factor: 0.429, defaultUnit: "kWh" },
        "Strom (UBA) 2022 ohne Vorketten": {
    factor: 0.347,
    defaultUnit: "kWh"
  },
  "Strom (UBA) 2022 inkl. Vorketten": {
    factor: 0.405,
    defaultUnit: "kWh"
  },
  "Strom (UBA) 2023 ohne Vorketten": {
    factor: 0.338,
    defaultUnit: "kWh"
  },
  "Strom (UBA) 2023 inkl. Vorketten": {
    factor: 0.390,
    defaultUnit: "kWh"
  },

  // -------------------------
  // Strom (EEW)
  // -------------------------
  "Strom (EEW) 2022": {
    factor: 0.36, // z. B. 0.36 kg CO₂/kWh
    defaultUnit: "kWh"
  },
  "Strom (EEW) 2024": {
    factor: 0.34,
    defaultUnit: "kWh"
  },
  "Strom (EEW) 2028": {
    factor: 0.30,
    defaultUnit: "kWh"
  },
  "Strom aus erneuerbaren Quellen (EEW)": {
    factor: 0.0,
    defaultUnit: "kWh"
  },

  // -------------------------
  // Nah-/Fernwärme
  // -------------------------
  "Nah-/Fernwärme (EEW) 2022": {
    factor: 0.25, // Beispielwert (kg CO₂/kWh)
    defaultUnit: "kWh"
  }
        // ... weitere Faktoren
    },

    // Scope 3 Faktoren
    SCOPE3A_FACTORS: {
        "Benzin in L": { factor: 2.32, defaultUnit: "Liter" },
        "Diesel in L": { factor: 2.65, defaultUnit: "Liter" },
        "LPG in L": {
    factor: 1.63,        // Flüssiggas ~1,63 kg CO₂/L
    defaultUnit: "Liter"
  },
  "Erdgas (CNG) in kg": {
    factor: 2.27,        // ~2,27 kg CO₂/kg CNG
    defaultUnit: "kg"
  },

  // --------------------------------
  // 2) PKW-Klassen (Beispiel: kg CO₂/km)
  //    Quelle: UBA, ADAC, gerundete Durchschnittswerte
  // --------------------------------
  "PKW-Benzin-klein": {
    factor: 0.13,        // ~0,13 kg CO₂/km
    defaultUnit: "km"
  },
  "PKW-Benzin-mittel": {
    factor: 0.16,
    defaultUnit: "km"
  },
  "PKW-Benzin-groß": {
    factor: 0.20,
    defaultUnit: "km"
  },

  // --------------------------------
  // 3) Busreisen (Durchschnittswerte Fernbus, Reisebus)
  //    Quelle: UBA, ProBas
  // --------------------------------
  "Busreise": {
    factor: 0.06,        // ~0,06 kg CO₂/pkm
    defaultUnit: "pkm"
  },

  // --------------------------------
  // 4) Bahnreisen
  //    Quelle: UBA (Nah-/Fernverkehr, Diesel vs. E)
  // --------------------------------

 
  "Personenzug (Nahverkehr)": {
    factor: 0.053,        // ~0,04 kg CO₂/pkm
    defaultUnit: "pkm"
  },
  "Personenzug (Fernverkehr)": {
    factor: 0.03,        // ~0,03 kg CO₂/pkm
    defaultUnit: "pkm"
  },

  // --------------------------------
  // 5) Flugreisen
  //    Quelle: UBA, atmosfair, gerundet
  // --------------------------------
  "Flug (Inland)": {
    factor: 0.28,        // ~0,28 kg CO₂/pkm (Kurzstrecke)
    defaultUnit: "pkm"
  },
  "Flug (international)": {
    factor: 0.20,        // ~0,20 kg CO₂/pkm (Langstrecke)
    defaultUnit: "pkm"
  },

  // --------------------------------
  // 6) Sonstige (Beispiel: Strom Tankstelle PKW)
  //    Falls du E-Fahrzeuge in 3A erfassen willst
  // --------------------------------
  "Strom Tankstelle PKW": {
    factor: 0.405,       // z. B. UBA 2022 inkl. Vorketten
    defaultUnit: "kWh"
  }
        // ... weitere Faktoren
    },

    SCOPE3B_FACTORS: {
        "Benzin in L": { factor: 2.32, defaultUnit: "Liter" },
        "Diesel in L": { factor: 2.65, defaultUnit: "Liter" },
        "LPG in L": {
            factor: 1.63,       // ~1,63 kg CO₂/Liter
            defaultUnit: "Liter"
          },
          "Erdgas (CNG) in kg": {
            factor: 2.27,       // ~2,27 kg CO₂/kg
            defaultUnit: "kg"
          },
        
          // --------------------------------
          // LKW-Transport (typische Emissionen in kg CO₂ pro tkm)
          // (Beispiel: UBA-Werte gerundet)
          // --------------------------------
          "LKW Diesel (3,5-7,5 Tonnen)": {
            factor: 0.10,       // ~0,10 kg CO₂/tkm
            defaultUnit: "tkm"
          },
          "LKW Diesel (7,5-12 Tonnen)": {
            factor: 0.08,       
            defaultUnit: "tkm"
          },
          "LKW Diesel (> 12 Tonnen)": {
            factor: 0.064,      // ~0,064 kg CO₂/tkm
            defaultUnit: "tkm"
          },
          "LKW Lastzug/Sattelzug Diesel (40 Tonnen)": {
            factor: 0.05,       
            defaultUnit: "tkm"
          },
          "LKW Otto-CNG (3,5-7,5 Tonnen)": {
            factor: 0.12,       
            defaultUnit: "tkm"
          },
          "LKW Otto-CNG (7,5-12 Tonnen)": {
            factor: 0.10,       
            defaultUnit: "tkm"
          },
        
          // --------------------------------
          // Schiffstransport (Binnen / Seeschiff) – in kg CO₂/tkm
          // --------------------------------
          "Containerschiff (Übersee)": {
            factor: 0.010,      // ~0,010–0,012 kg CO₂/tkm (sehr grob, UBA)
            defaultUnit: "tkm"
          },
          "Güterschiff (Binnen)": {
            factor: 0.03,       
            defaultUnit: "tkm"
          },
          "Schiff-Diesel (Binnen)": {
            factor: 0.03,       
            defaultUnit: "tkm"
          },
        
          // --------------------------------
          // Güterzug
          // --------------------------------
          "Güterzug-Diesel": {
            factor: 0.02,       // ~0,02 kg CO₂/tkm
            defaultUnit: "tkm"
          },
          "Güterzug-Elektro": {
            factor: 0.01,       // ~0,01 kg CO₂/tkm (je nach Strommix)
            defaultUnit: "tkm"
          },
        
          // --------------------------------
          // Luftfracht (UBA gerundet)
          // --------------------------------
          "Luftfracht (Inland)": {
            factor: 0.50,       // ~0,50 kg CO₂/tkm (Kurzstrecke, sehr energieintensiv)
            defaultUnit: "tkm"
          },
          "Luftfracht (International)": {
            factor: 0.60,       // ~0,60 kg CO₂/tkm
            defaultUnit: "tkm"
          },
        
          // --------------------------------
          // Strom (inkl. Vorketten), falls E-Fahrzeuge, E-Transport
          // --------------------------------
          "Strom (UBA) 2021 inkl. Vorketten": {
            factor: 0.429,      // ~0,429 kg CO₂/kWh
            defaultUnit: "kWh"
          },
          "Strom (UBA) 2022 inkl. Vorketten": {
            factor: 0.405,
            defaultUnit: "kWh"
          },
          "Strom (UBA) 2023 inkl. Vorketten": {
            factor: 0.390,
            defaultUnit: "kWh"
          },
          "Strom (EEW) 2022": {
            factor: 0.36,
            defaultUnit: "kWh"
          },
          "Strom (EEW) 2024": {
            factor: 0.34,
            defaultUnit: "kWh"
          },
          "Strom (EEW) 2028": {
            factor: 0.30,
            defaultUnit: "kWh"
          },
          "Strom aus erneuerbaren Quellen (EEW)": {
            factor: 0.0,
            defaultUnit: "kWh"
          }
        // ... weitere Faktoren
    },

    SCOPE3C_FACTORS: {
        "1,2-Dichlorethan": { factor: 1.80, defaultUnit: "kg" },
        "1,3-Butadien": { factor: 2.50, defaultUnit: "kg" },
        "1-Butanol (EEW) 2022": {
            factor: 2.00,
            defaultUnit: "kg"
          },
          "Ameisensäure, Methansäure (EEW) 2022": {
            factor: 1.40,
            defaultUnit: "kg"
          },
          "Amin (NMe2) (EEW) 2022": {
            factor: 2.30,
            defaultUnit: "kg"
          },
          "Ammoniak (NH3), Azan (EEW) 2022": {
            factor: 2.70,  // z. B. ~2,70 kg CO₂eq/kg
            defaultUnit: "kg"
          },
          "Anilin (C6H7N), Benzenamin (EEW) 2022": {
            factor: 3.10,
            defaultUnit: "kg"
          },
          "Antimon (Sb) (EEW) 2022": {
            factor: 4.00,
            defaultUnit: "kg"
          },
          "Argon (Ar) (EEW) 2022": {
            factor: 1.30,
            defaultUnit: "kg"
          },
            // --------------------------------------------
        // NEUE Stoffe aus deinen Screenshots
        // --------------------------------------------
        "Borsäure (H3BO3) (EEW) 2022": {
          factor: 1.10,   // ~1,10 kg CO₂eq/kg
          defaultUnit: "kg"
        },
        "Butene (C4H8) (EEW) 2022": {
          factor: 2.10,
          defaultUnit: "kg"
        },
        "Calciumcarbonat (CaCO3) (EEW) 2022": {
          factor: 0.45,
          defaultUnit: "kg"
        },
        "Calciumfluorid (CaF2), Flussspat (EEW) 2022": {
          factor: 1.20,
          defaultUnit: "kg"
        },
        "Calciumhydroxid (Ca(OH)2) (EEW) 2022": {
          factor: 0.85,
          defaultUnit: "kg"
        },
        "Chlor (Cl) (EEW) 2022": {
          factor: 1.70,
          defaultUnit: "kg"
        },
        "Chlormethan (CH3Cl) (EEW) 2022": {
          factor: 2.40,
          defaultUnit: "kg"
        },
        "Cumol (EEW) 2022": {
          factor: 3.00,
          defaultUnit: "kg"
        },
        "Cyclohexan (C6H12), Hexahydrobenzol (EEW) 2022": {
          factor: 2.20,
          defaultUnit: "kg"
        },
        "Dichlormethan (CH2Cl2), Methylenchlorid (EEW) 2022": {
          factor: 1.80,
          defaultUnit: "kg"
        },
        "Epoxidharz, Kunstharz (EEW) 2022": {
          factor: 3.20,
          defaultUnit: "kg"
        },
        "Essigsäure (C2H4O2) (EEW) 2022": {
          factor: 1.60,
          defaultUnit: "kg"
        },
        "Ethan (C2H6) (EEW) 2022": {
          factor: 1.20,
          defaultUnit: "kg"
        },
        "Ethen (C2H4), Ethylen (EEW) 2022": {
          factor: 1.50,
          defaultUnit: "kg"
        },
        "Ethylbenzol (C8H10), Ethylbenzen (EEW) 2022": {
          factor: 2.80,
          defaultUnit: "kg"
        },
        "Ethylenoxid (C2H4O), Oxiran (EEW) 2022": {
          factor: 2.60,
          defaultUnit: "kg"
        },
        "Formaldehyd (CH2O), Methanal (EEW) 2022": {
          factor: 1.90,
          defaultUnit: "kg"
        },
        // ------------------------------
        // NEUE STOFFE (nur Beispiele)
        // ------------------------------
        "Gallium (Ga) (EEW) 2022": {
          factor: 200.0,  // sehr energieintensive Gewinnung
          defaultUnit: "kg"
        },
        "Gold (Au) (EEW) 2022": {
          factor: 40000.0, // enorm hoch (Bergbau, Raffinierung)
          defaultUnit: "kg"
        },
        "Hydrauliköl (EEW) 2022": {
          factor: 3.0,
          defaultUnit: "kg"
        },
        "Hydroxybenzo (C6H6O), Phenol (EEW) 2022": {
          factor: 2.30,
          defaultUnit: "kg"
        },
        "Indium (In) (EEW) 2022": {
          factor: 80.0,
          defaultUnit: "kg"
        },
        "Isopropylbenzol (C9H12) (EEW) 2022": {
          factor: 3.0, // auch „Cumol“ genannt
          defaultUnit: "kg"
        },
        "Magnesiumsulfat (MgSO4), Bittersalz (EEW) 2022": {
          factor: 0.90,
          defaultUnit: "kg"
        },
        "Methanol (CH3OH), Methylalkohol (EEW) 2022": {
          factor: 1.0,
          defaultUnit: "kg"
        },
        "Naphtha, Rohbenzin (EEW) 2022": {
          factor: 0.85,
          defaultUnit: "kg"
        },
        "Natriumcarbonat (Na2CO3), Soda (EEW) 2022": {
          factor: 1.0,
          defaultUnit: "kg"
        },
        "Natriumhydroxid (NaOH), Natronlauge (EEW) 2022": {
          factor: 2.20,
          defaultUnit: "kg"
        },
        "Phosphate (EEW) 2022": {
          factor: 0.80,
          defaultUnit: "kg"
        },
        "Phosphor weiß (P) (EEW) 2022": {
          factor: 7.0,
          defaultUnit: "kg"
        },
        "Phthalsäureanhydrid (C8H4O3) (EEW) 2022": {
          factor: 3.10,
          defaultUnit: "kg"
        },
        "Propan (C3H8) (EEW) 2022": {
          factor: 1.90,
          defaultUnit: "kg"
        },
        "Propen (C3H6) (EEW) 2022": {
          factor: 1.80,
          defaultUnit: "kg"
        },
        "Propylenglycol (C3H8O2) (EEW) 2022": {
          factor: 2.20,
          defaultUnit: "kg"
        },
        "Propylenoxid (C3H6O) (EEW) 2022": {
          factor: 2.40,
          defaultUnit: "kg"
        },
        "p-Xylol (EEW) 2022": {
          factor: 2.80,
          defaultUnit: "kg"
        },
        "Salzsäure (HCl) (EEW) 2022": {
          factor: 1.50,
          defaultUnit: "kg"
        },
         // --------------------------------------------
        // Neue Einträge (EEW 2024) aus deinen Screenshots
        // --------------------------------------------
        "Gallium (Ga) (EEW) 2024": {
          factor: 200.0,   // sehr energieintensive Gewinnung
          defaultUnit: "kg"
        },
        "Gold (Au) (EEW) 2024": {
          factor: 40000.0, // extrem hoch (Bergbau, Raffinierung)
          defaultUnit: "kg"
        },
        "Hydrauliköl (EEW) 2024": {
          factor: 3.0,
          defaultUnit: "kg"
        },
        "Hydroxybenzo (C6H6O), Phenol (EEW) 2024": {
          factor: 2.30,
          defaultUnit: "kg"
        },
        "Indium (In) (EEW) 2024": {
          factor: 80.0,
          defaultUnit: "kg"
        },
        "Isopropylbenzol (C9H12) (EEW) 2024": {
          factor: 3.0,
          defaultUnit: "kg"
        },
        "Magnesiumsulfat (MgSO4), Bittersalz (EEW) 2024": {
          factor: 0.90,
          defaultUnit: "kg"
        },
        "Methanol (CH3OH), Methylalkohol (EEW) 2024": {
          factor: 1.0,
          defaultUnit: "kg"
        },
        "Naphtha, Rohbenzin (EEW) 2024": {
          factor: 0.85,
          defaultUnit: "kg"
        },
        "Natriumcarbonat (Na2CO3), Soda (EEW) 2024": {
          factor: 1.0,
          defaultUnit: "kg"
        },
        "Natriumhydroxid (NaOH), Natronlauge (EEW) 2024": {
          factor: 2.20,
          defaultUnit: "kg"
        },
        "Organische Verbindungen / fest/flüssig (EEW) 2024": {
          factor: 2.0,  // sehr grober Durchschnittswert
          defaultUnit: "kg"
        },
        "Phosphor weiß (P) (EEW) 2024": {
          factor: 7.0,
          defaultUnit: "kg"
        },
        "Phthalsäureanhydrid (C8H4O3) (EEW) 2024": {
          factor: 3.10,
          defaultUnit: "kg"
        },
        "Propan (C3H8) (EEW) 2024": {
          factor: 1.90,
          defaultUnit: "kg"
        },
        "Propen (C3H6) (EEW) 2024": {
          factor: 1.80,
          defaultUnit: "kg"
        },
        "Propylenglycol (C3H8O2) (EEW) 2024": {
          factor: 2.20,
          defaultUnit: "kg"
        },
        "Propylenoxid (C3H6O) (EEW) 2024": {
          factor: 2.40,
          defaultUnit: "kg"
        },
        "p-Xylol (EEW) 2024": {
          factor: 2.80,
          defaultUnit: "kg"
        }
        // ... weitere Faktoren
    },

    SCOPE3D_FACTORS: {
        "Altpapierstoff (EEW)": { factor: 0.30, defaultUnit: "kg" },
        "Holz unbehandelt": { factor: 0.10, defaultUnit: "kg" },
        // ... weitere Faktoren
        "Holzstoff (EEW)": {
    factor: 0.25,
    defaultUnit: "kg"
  },
  "Papier (EEW)": {
    factor: 0.90,
    defaultUnit: "kg"
  },
  "Pappe Kartonage (EEW)": {
    factor: 0.80,
    defaultUnit: "kg"
  },
  "Spanplatte (EEW)": {
    factor: 0.50,
    defaultUnit: "kg"
  },
  "Stroh / Heu (EEW)": {
    factor: 0.05,
    defaultUnit: "kg"
  },
  "Zellstoff, Sulfatzellstoff (EEW)": {
    factor: 1.20,
    defaultUnit: "kg"
  },
  "Zellstoff, Sulfitzellstoff (EEW)": {
    factor: 1.40,
    defaultUnit: "kg"
  },

  // -------------------------------------------------
  // 2) EEW 2024 (leichte Abwandlungen)
  // -------------------------------------------------
  "Holz unbehandelt, trocken (EEW) 2024": {
    factor: 0.11,
    defaultUnit: "kg"
  },
  "Papier (EEW) 2024": {
    factor: 0.95,
    defaultUnit: "kg"
  },
  "Spanplatte (EEW) 2024": {
    factor: 0.52,
    defaultUnit: "kg"
  },
  "Stroh / Heu (EEW) 2024": {
    factor: 0.06,
    defaultUnit: "kg"
  },
  "Zellstoff, Sulfatzellstoff (EEW) 2024": {
    factor: 1.25,
    defaultUnit: "kg"
  },

  // -------------------------------------------------
  // 3) Weitere Einträge (Altpapier, Buche, Fichte etc.)
  // -------------------------------------------------
  "Altpapier": {
    factor: 0.25,
    defaultUnit: "kg"
  },
  "Buche": {
    factor: 0.20,
    defaultUnit: "kg"
  },
  "Faserholz": {
    factor: 0.18,
    defaultUnit: "kg"
  },
  "Fichte": {
    factor: 0.15,
    defaultUnit: "kg"
  },
  "Holz zur Papierverarbeitung": {
    factor: 0.22,
    defaultUnit: "kg"
  },
  "Kiefer": {
    factor: 0.15,
    defaultUnit: "kg"
  },
  "Papier/Pappe (Sulfatzellstoff)": {
    factor: 1.00,
    defaultUnit: "kg"
  },
  "Papier/Pappe gebleicht (80% Neufaser)": {
    factor: 1.10,
    defaultUnit: "kg"
  },
  "Papier/Pappe ungebleicht (80% Neufaser)": {
    factor: 1.00,
    defaultUnit: "kg"
  },
  "Testliner Papier (überwiegend Recyclat)": {
    factor: 0.80,
    defaultUnit: "kg"
  },
  "Zeitungspapier": {
    factor: 0.75,
    defaultUnit: "kg"
  }
    },

    // ... weitere Konstanten
}; 