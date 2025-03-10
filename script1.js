const botKnowledge = {
    'scopes_general': {
        pattern: /was sind scopes|scopes erklären|scope bedeutung/i,
        response: `Die CO₂-Emissionen werden in drei Scopes eingeteilt:

        Scope 1 - Direkte Emissionen:
        • Emissionen aus eigenen Anlagen
        • Firmeneigene Fahrzeuge
        • Eigene Heizungsanlagen

        Scope 2 - Indirekte Energieemissionen:
        • Zugekaufter Strom
        • Fernwärme
        • Dampf und Kühlung

        Scope 3 - Sonstige indirekte Emissionen:
        • Geschäftsreisen
        • Pendeln der Mitarbeiter
        • Logistik & Transport
        • Abfälle & Materialien`
    },

    'scope1_details': {
        pattern: /scope 1|direkte emissionen|firmeneigene/i,
        response: `Scope 1 umfasst alle direkten Emissionen:

        1. Stationäre Verbrennung:
        • Heizungsanlagen
        • Produktionsanlagen
        • Notstromaggregate

        2. Mobile Verbrennung:
        • Firmenfahrzeuge
        • Gabelstapler
        • Baumaschinen

        3. Prozessemissionen:
        • Chemische Reaktionen
        • Produktion
        • Verarbeitung

        4. Flüchtige Emissionen:
        • Klimaanlagen
        • Kältemittel
        • Lecks`
    },

    'scope2_details': {
        pattern: /scope 2|indirekte energie|strom|fernwärme/i,
        response: `Scope 2 betrifft zugekaufte Energie:

        1. Stromverbrauch:
        • Bürogebäude
        • Produktionsanlagen
        • IT-Infrastruktur

        2. Fernwärme:
        • Heizung
        • Warmwasser
        • Prozesswärme

        3. Optimierungsmöglichkeiten:
        • Grünstrom-Bezug
        • Energieeffizienz
        • Eigenproduktion`
    },

    'scope3_details': {
        pattern: /scope 3|indirekte emissionen|lieferkette/i,
        response: `Scope 3 umfasst weitere indirekte Emissionen:

        1. Vorgelagerte Aktivitäten:
        • Rohstoffe & Materialien
        • Verpackung
        • Transport & Logistik

        2. Nachgelagerte Aktivitäten:
        • Produktnutzung
        • Entsorgung
        • Recycling

        3. Sonstige:
        • Geschäftsreisen
        • Pendeln
        • Abfallentsorgung`
    },

    'reduction_tips': {
        pattern: /reduzieren|einsparen|vermeiden|tipps/i,
        response: `Tipps zur CO₂-Reduktion:

        1. Energieeffizienz:
        • LED-Beleuchtung
        • Energieeffiziente Geräte
        • Intelligente Steuerung

        2. Mobilität:
        • E-Fahrzeuge
        • Fahrgemeinschaften
        • Video-Konferenzen

        3. Gebäude:
        • Dämmung verbessern
        • Heizungsoptimierung
        • Grünstrom nutzen

        4. Prozesse:
        • Digitalisierung
        • Materialeffizienz
        • Abfallvermeidung`
    },

    'calculation_help': {
        pattern: /berechnung|berechnen|kalkulation/i,
        response: `Hilfe zur CO₂-Berechnung:

        1. Emissionsfaktoren:
        • Strom: 0,420 kg CO₂/kWh
        • Erdgas: 0,201 kg CO₂/kWh
        • Diesel: 2,65 kg CO₂/L
        • Benzin: 2,37 kg CO₂/L

        2. Grundformel:
        Aktivitätsdaten × Emissionsfaktor = CO₂-Emissionen

        3. Beispiel:
        10.000 kWh Strom × 0,420 kg CO₂/kWh = 4.200 kg CO₂`
    },

    'best_practices': {
        pattern: /best practice|beispiele|erfolgsbeispiele/i,
        response: `Best Practices für Unternehmen:

        1. Energie:
        • Photovoltaik-Anlagen
        • Energiemanagementsysteme
        • Wärmerückgewinnung

        2. Mobilität:
        • E-Ladesäulen
        • Jobtickets
        • Homeoffice-Konzepte

        3. Materialien:
        • Kreislaufwirtschaft
        • Recycling-Konzepte
        • Verpackungsoptimierung`
    },

    'reporting': {
        pattern: /reporting|berichten|dokumentation/i,
        response: `CO₂-Berichterstattung:

        1. Standards:
        • GHG Protocol
        • ISO 14064
        • CDP

        2. Wichtige Elemente:
        • Systemgrenzen
        • Bezugsjahr
        • Vollständigkeit

        3. Dokumentation:
        • Datenquellen
        • Berechnungsmethoden
        • Annahmen`
    },

    'certification': {
        pattern: /zertifizierung|standard|iso/i,
        response: `Relevante Zertifizierungen:

        1. Umweltmanagement:
        • ISO 14001
        • EMAS
        • ISO 50001

        2. CO₂-Bilanzierung:
        • ISO 14064
        • PAS 2060
        • GHG Protocol

        3. Produkte:
        • Carbon Footprint
        • PCF (Product Carbon Footprint)
        • Klimaneutrale Produkte`
    },

    'funding': {
        pattern: /förderung|zuschüsse|unterstützung/i,
        response: `Fördermöglichkeiten:

        1. Energieeffizienz:
        • BAFA-Förderungen
        • KfW-Programme
        • Länderförderungen

        2. Erneuerbare Energien:
        • EEG-Vergütung
        • Investitionszuschüsse
        • Steuervorteile

        3. Beratung:
        • Energieberatung
        • Klimaschutzberatung
        • Transformationsberatung`
    }
};
function toggleChat() {
    document.getElementById('chatbot-bubble').classList.toggle('minimized');
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (message) {
        addMessage(message, 'user');
        processMessage(message);
        input.value = '';
    }
}

function sendQuickReply(message) {
    addMessage(message, 'user');
    processMessage(message);
}

function processMessage(message) {
    let response = "Tut mir leid, ich verstehe Ihre Frage nicht. Können Sie sie anders formulieren?";
    
    for (const key in botKnowledge) {
        if (botKnowledge[key].pattern.test(message)) {
            response = botKnowledge[key].response;
            break;
        }
    }

    setTimeout(() => addMessage(response, 'bot'), 500);
}

function addMessage(text, sender) {
    const messages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Emissionsfaktoren für verschiedene technische Gase


function addGas() {
    const gasFields = document.getElementById('gasFields');
    const gasId = 'gas-' + Date.now();
    
    const gasHtml = `
        <div class="dynamic-field" id="${gasId}">
            <div class="form-group">
                <label>Gas Type</label>
                <select name="gasType" class="gas-type" required onchange="updateGasFields('${gasId}')">
                    ${Object.keys(TECHNICAL_GAS_FACTORS).map(gas => 
                        `<option value="${gas}">${gas}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Standort</label>
                <input type="text" class="location" placeholder="Standort eingeben" required>
            </div>
            <div class="form-group">
                <label>Menge (kg)</label>
                <input type="number" class="amount" min="0" step="0.01" 
                       placeholder="Menge in kg" required onchange="calculateGasEmissions('${gasId}')">
            </div>
            <div class="form-group">
                <label>CO₂-Äquivalent (kg)</label>
                <input type="number" class="co2-equivalent" readonly>
            </div>
            <button type="button" class="remove-field" onclick="removeGas('${gasId}')">Entfernen</button>
        </div>
    `;
    
    gasFields.insertAdjacentHTML('beforeend', gasHtml);
}

function removeGas(gasId) {
    document.getElementById(gasId).remove();
    updateTotalEmissions();
}

function calculateGasEmissions(gasId) {
    const container = document.getElementById(gasId);
    const gasType = container.querySelector('.gas-type').value;
    const amount = parseFloat(container.querySelector('.amount').value) || 0;
    const factor = TECHNICAL_GAS_FACTORS[gasType];
    
    const co2Equivalent = amount * factor;
    container.querySelector('.co2-equivalent').value = co2Equivalent.toFixed(2);
    
    updateTotalEmissions();
}

function updateTotalEmissions() {
    const allGasFields = document.querySelectorAll('#gasFields .dynamic-field');
    let totalEmissions = 0;
    
    allGasFields.forEach(field => {
        const co2Value = parseFloat(field.querySelector('.co2-equivalent').value) || 0;
        totalEmissions += co2Value;
    });
    
    // Update the total emissions display
    const totalDisplay = document.getElementById('totalGasEmissions');
    if (totalDisplay) {
        totalDisplay.textContent = `Gesamt CO₂-Äquivalent: ${totalEmissions.toFixed(2)} kg`;
    }
}

function updateGasFields(gasId) {
    calculateGasEmissions(gasId);
}

// Funktion zum Exportieren der Daten


// Emissionsfaktoren für verschiedene Fahrzeugtypen (kg CO2/Einheit)
const EMISSION_FACTORS = {
    
'benzin': 0.18374,
'diesel': 0.20716,
'hybrid': 0.20716, // Basis-Diesel-Faktor, wird mit Stromanteil verrechnet
'vollstromer': 0.442, // Faktor für Strommix Deutschland
'PKW-Benzin-klein':   0.18,
'PKW-Benzin-mittel':  0.20,
'PKW-Benzin-groß':    0.22,
'PKW-Diesel-klein':   0.19,
'PKW-Diesel-mittel':  0.21,
'PKW-Diesel-groß':    0.24
};

// Funktion zum Hinzufügen eines neuen Fahrzeugs
function addVehicle() {
const vehicleFields = document.getElementById('vehicleFields');
const vehicleId = 'vehicle-' + Date.now();

const vehicleHtml = `
<div class="dynamic-field" id="${vehicleId}">
    <div class="form-group">
        <label>Mitarbeiternummer</label>
        <input type="number" class="employee-number" required>
    </div>
    <div class="form-group">
        <label>Fahrzeugtyp</label>
        <select class="vehicle-type" required onchange="updateVehicleFields('${vehicleId}')">
            <option value="benzin">Benzin</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="vollstromer">Vollstromer</option>
            <option value="PKW-Benzin-klein">PKW-Benzin-klein</option>
                <option value="PKW-Benzin-mittel">PKW-Benzin-mittel</option>
                <option value="PKW-Benzin-groß">PKW-Benzin-groß</option>
                <option value="PKW-Diesel-klein">PKW-Diesel-klein</option>
                <option value="PKW-Diesel-mittel">PKW-Diesel-mittel</option>
                <option value="PKW-Diesel-groß">PKW-Diesel-groß</option>
        </select>
    </div>
    <div class="form-group">
        <label>Jahresleistung (km)</label>
        <input type="number" class="annual-mileage" min="0" required 
               onchange="calculateVehicleEmissions('${vehicleId}')">
    </div>
    <div class="form-group">
        <label>Privatnutzung (%)</label>
        <input type="number" class="private-usage" min="0" max="100" required 
               onchange="calculateVehicleEmissions('${vehicleId}')">
    </div>
    <div class="hybrid-fields" style="display: none;">
        <div class="form-group">
            <label>Stromanteil (%)</label>
            <input type="number" class="electricity-share" min="0" max="100" 
                   onchange="calculateVehicleEmissions('${vehicleId}')">
        </div>
        <div class="form-group">
            <label>Stromverbrauch (kWh/100km)</label>
            <input type="number" class="electricity-consumption" min="0" 
                   onchange="calculateVehicleEmissions('${vehicleId}')">
        </div>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeVehicle('${vehicleId}')">Entfernen</button>
</div>
`;

vehicleFields.insertAdjacentHTML('beforeend', vehicleHtml);
}

// Aktualisiert die Felder basierend auf dem Fahrzeugtyp
function updateVehicleFields(vehicleId) {
const container = document.getElementById(vehicleId);
const vehicleType = container.querySelector('.vehicle-type').value;
const hybridFields = container.querySelector('.hybrid-fields');

hybridFields.style.display = (vehicleType === 'hybrid') ? 'block' : 'none';
calculateVehicleEmissions(vehicleId);
}

// Berechnet die CO2-Emissionen für ein einzelnes Fahrzeug
function calculateVehicleEmissions(vehicleId) {
const container = document.getElementById(vehicleId);
const vehicleType = container.querySelector('.vehicle-type').value;
const annualMileage = parseFloat(container.querySelector('.annual-mileage').value) || 0;
const privateUsage = parseFloat(container.querySelector('.private-usage').value) || 0;

let emissions = 0;
const businessUsageShare = (100 - privateUsage) / 100;

if (vehicleType === 'hybrid') {
const electricityShare = parseFloat(container.querySelector('.electricity-share').value) || 0;
const electricityConsumption = parseFloat(container.querySelector('.electricity-consumption').value) || 0;

// Berechnung für Hybridfahrzeuge
const electricKm = annualMileage * (electricityShare / 100);
const fuelKm = annualMileage * (1 - electricityShare / 100);

emissions = (
    (fuelKm * EMISSION_FACTORS.diesel / 100) +
    (electricKm * electricityConsumption / 100 * EMISSION_FACTORS.vollstromer)
) * businessUsageShare;
} else {
// Berechnung für andere Fahrzeugtypen
emissions = annualMileage * EMISSION_FACTORS[vehicleType] * businessUsageShare;
}

container.querySelector('.co2-emissions').value = emissions.toFixed(2);
updateTotalEmissions();
}

// Aktualisiert die Gesamtemissionen
function updateTotalEmissions() {
const allVehicles = document.querySelectorAll('#vehicleFields .dynamic-field');
let totalEmissions = {
benzin: 0,
diesel: 0,
hybrid: 0,
vollstromer: 0
};

allVehicles.forEach(vehicle => {
const type = vehicle.querySelector('.vehicle-type').value;
const emissions = parseFloat(vehicle.querySelector('.co2-emissions').value) || 0;
totalEmissions[type] += emissions;
});

// Aktualisiere die Summenanzeige
document.getElementById('totalVehicleEmissions').innerHTML = `
<div class="totals-grid">
    <div>Benzin: ${totalEmissions.benzin.toFixed(2)} kg CO₂</div>
    <div>Diesel: ${totalEmissions.diesel.toFixed(2)} kg CO₂</div>
    <div>Hybrid: ${totalEmissions.hybrid.toFixed(2)} kg CO₂</div>
    <div>Vollstromer: ${totalEmissions.vollstromer.toFixed(2)} kg CO₂</div>
    <div class="total-sum">Gesamt: ${Object.values(totalEmissions).reduce((a, b) => a + b, 0).toFixed(2)} kg CO₂</div>
</div>
`;
}

// Entfernt ein Fahrzeug
function removeVehicle(vehicleId) {
document.getElementById(vehicleId).remove();
updateTotalEmissions();
}

// Exportiert die Fahrzeugdaten
function exportVehicleData() {
const vehicleData = [];
const allVehicles = document.querySelectorAll('#vehicleFields .dynamic-field');

allVehicles.forEach(vehicle => {
vehicleData.push({
    employeeNumber: vehicle.querySelector('.employee-number').value,
    vehicleType: vehicle.querySelector('.vehicle-type').value,
    annualMileage: vehicle.querySelector('.annual-mileage').value,
    privateUsage: vehicle.querySelector('.private-usage').value,
    co2Emissions: vehicle.querySelector('.co2-emissions').value
});
});

return vehicleData;
}
// Emissionsfaktoren für verschiedene LKW-Typen (kg CO2/km)


function addTransport1B() {
    const container = document.getElementById("transport1BFields");
    const id = "transport1B-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="transport1b-date" required>
        </div>
        <div class="form-group">
          <label>Standort</label>
          <input type="text" class="transport1b-location" required placeholder="z.B. Dortmund">
        </div>
        <div class="form-group">
          <label>Emittent (1B)</label>
          <select class="transport1b-type" onchange="updateTransport1BFields('${id}')">
            ${Object.keys(SCOPE1B_FACTORS).map(type => `
              <option value="${type}">${type}</option>
            `).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="transport1b-unit" required onchange="calculateTransport1B('${id}')">
        </div>
        <div class="form-group">
          <label>Menge</label>
          <input type="number" class="transport1b-amount" min="0" step="0.1"
                 onchange="calculateTransport1B('${id}')"
                 placeholder="z.B. 100">
        </div>
        <div class="form-group">
          <label>Emissionsfaktor (kg CO₂ pro Einheit)</label>
          <input type="number" class="transport1b-factor" step="0.0001"
                 onchange="calculateTransport1B('${id}')"
                 required>
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="transport1b-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeTransport1B('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  
    // Sofort Standardwerte setzen
    updateTransport1BFields(id);
  }

  function updateTransport1BFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".transport1b-type").value;
    const data = SCOPE1B_FACTORS[selected];
  
    if (data) {
      // Einheit + Faktor automatisch setzen
      el.querySelector(".transport1b-unit").value = data.defaultUnit;
      el.querySelector(".transport1b-factor").value = data.factor;
    }
    calculateTransport1B(id);
  }

  function calculateTransport1B(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".transport1b-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".transport1b-factor").value) || 0;
  
    // CO₂ = Menge × Faktor
    const co2 = amount * factor;
    el.querySelector(".transport1b-co2").value = co2.toFixed(2);
  
    updateTotalTransport1B();
  }
  function updateTotalTransport1B() {
    const allFields = document.querySelectorAll("#transport1BFields .dynamic-field");
    let total = 0;
  
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".transport1b-co2").value) || 0;
      total += val;
    });
  
    // Anzeige aktualisieren (z.B. in <div id="totalTransport1B"></div>)
    document.getElementById("totalTransport1B").textContent =
      `Gesamt 1B-Emissionen: ${total.toFixed(2)} kg CO₂`;
  }

  function removeTransport1B(id) {
    document.getElementById(id).remove();
    updateTotalTransport1B();
  }
  function exportTransport1BData() {
    const data = [];
    const allFields = document.querySelectorAll("#transport1BFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".transport1b-date").value,
        location: field.querySelector(".transport1b-location").value,
        emitter: field.querySelector(".transport1b-type").value,
        unit: field.querySelector(".transport1b-unit").value,
        amount: field.querySelector(".transport1b-amount").value,
        factor: field.querySelector(".transport1b-factor").value,
        co2Emissions: field.querySelector(".transport1b-co2").value
      });
    });
  
    return data;
  }


// Emissionsfaktoren für verschiedene Energieträger (kg CO2/kWh)
const SCOPE1C_FACTORS = {
    "Altöl (EEW) 2022": {
      factor: 3.15,
      defaultUnit: "Liter"
    },
    "Altöl (EEW) 2024": {
      factor: 3.20,
      defaultUnit: "Liter"
    },
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
  };

  function addScope1C() {
    const container = document.getElementById("scope1CFields");
    const id = "scope1C-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope1c-date" required>
        </div>
        <div class="form-group">
          <label>Standort</label>
          <input type="text" class="scope1c-location" required placeholder="z.B. Dortmund">
        </div>
        <div class="form-group">
          <label>Emittent (1C)</label>
          <select class="scope1c-type" onchange="updateScope1CFields('${id}')">
            ${Object.keys(SCOPE1C_FACTORS).map(type => `
              <option value="${type}">${type}</option>
            `).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope1c-unit" required onchange="calculateScope1C('${id}')">
        </div>
        <div class="form-group">
          <label>Menge</label>
          <input type="number" class="scope1c-amount" min="0" step="0.1"
                 onchange="calculateScope1C('${id}')"
                 placeholder="z.B. 100">
        </div>
        <div class="form-group">
          <label>Emissionsfaktor (kg CO₂ pro Einheit)</label>
          <input type="number" class="scope1c-factor" step="0.0001"
                 onchange="calculateScope1C('${id}')"
                 required>
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope1c-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope1C('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  
    // Automatisch Standardwerte setzen
    updateScope1CFields(id);
  }



function updateScope1CFields(id) {
    const el = document.getElementById(id);
    const typeSelect = el.querySelector(".scope1c-type").value;
    const emitterData = SCOPE1C_FACTORS[typeSelect];
  
    if (emitterData) {
      // Einheit & Faktor automatisch belegen
      el.querySelector(".scope1c-unit").value = emitterData.defaultUnit;
      el.querySelector(".scope1c-factor").value = emitterData.factor;
    }
    calculateScope1C(id);
  }

  function calculateScope1C(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope1c-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope1c-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope1c-co2").value = emissions.toFixed(2);
  
    updateTotalScope1C();
  }

  function updateTotalScope1C() {
    const allFields = document.querySelectorAll("#scope1CFields .dynamic-field");
    let total = 0;
  
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope1c-co2").value) || 0;
      total += val;
    });
  
    // Ausgabe z.B. in <div id="totalScope1CEmissions"></div>
    document.getElementById("totalScope1CEmissions").textContent =
      `Gesamt 1C-Emissionen: ${total.toFixed(2)} kg CO₂`;
  }
  function removeScope1C(id) {
    document.getElementById(id).remove();
    updateTotalScope1C();
  }
  function exportScope1CData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope1CFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope1c-date").value,
        location: field.querySelector(".scope1c-location").value,
        emitter: field.querySelector(".scope1c-type").value,
        unit: field.querySelector(".scope1c-unit").value,
        amount: field.querySelector(".scope1c-amount").value,
        factor: field.querySelector(".scope1c-factor").value,
        co2Emissions: field.querySelector(".scope1c-co2").value
      });
    });
  
    return data;
  }


// Emissionsfaktoren für technische Gase (kg CO2/kg)
const SCOPE1D_FACTORS = {
    // ---------------------
    // 1) Inertgase & Basisstoffe (GWP ~ 0, aber EEW kann > 0 sein)
    // ---------------------
    "Ammoniak (NH3) (EEW) 2022": {
      factor: 2.7,  // z. B. 2.7 kg CO₂/kg (Prozesswert)
      defaultUnit: "kg"
    },
    "Argon (Ar) (EEW) 2024": {
      factor: 1.3,  // z. B. ~1,3 kg CO₂/kg für Produktion & Transport (ProBas)
      defaultUnit: "kg"
    },
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
  };



function addScope1D() {
  const container = document.getElementById("scope1DFields");
  const id = "scope1D-" + Date.now();
  const html = `
    <div class="dynamic-field" id="${id}">
      <div class="form-group">
        <label>Datum</label>
        <input type="date" class="scope1d-date" required>
      </div>
      <div class="form-group">
        <label>Standort</label>
        <input type="text" class="scope1d-location" required placeholder="z.B. Dortmund">
      </div>
      <div class="form-group">
        <label>Technisches Gas</label>
        <select class="scope1d-type" onchange="updateScope1DFields('${id}')">
          ${Object.keys(SCOPE1D_FACTORS).map(gas => `<option value="${gas}">${gas}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label>Einheit</label>
        <input type="text" class="scope1d-unit" required onchange="calculateScope1D('${id}')">
      </div>
      <div class="form-group">
        <label>Menge</label>
        <input type="number" class="scope1d-amount" min="0" step="0.1" onchange="calculateScope1D('${id}')" placeholder="z.B. 100">
      </div>
      <div class="form-group">
        <label>Emissionsfaktor (kg CO₂ pro Einheit)</label>
        <input type="number" class="scope1d-factor" step="0.0001" required onchange="calculateScope1D('${id}')">
      </div>
      <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="scope1d-co2" readonly>
      </div>
      <button type="button" class="remove-field" onclick="removeScope1D('${id}')">Entfernen</button>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", html);
  updateScope1DFields(id);
}

function calculateScope1D(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope1d-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope1d-factor").value) || 0;
    const co2 = amount * factor;
    el.querySelector(".scope1d-co2").value = co2.toFixed(2);
    updateTotalScope1D();
  }

function updateScope1DFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope1d-type").value;
    const data = SCOPE1D_FACTORS[selected];
    if (data) {
      el.querySelector(".scope1d-unit").value = data.defaultUnit;
      el.querySelector(".scope1d-factor").value = data.factor;
    }
    calculateScope1D(id);
  }


  function removeScope1D(id) {
    document.getElementById(id).remove();
    updateTotalScope1D();
  }

function updateTotalScope1D() {
    const allFields = document.querySelectorAll("#scope1DFields .dynamic-field");
    let total = 0;
    allFields.forEach(f => {
      const val = parseFloat(f.querySelector(".scope1d-co2").value) || 0;
      total += val;
    });
    document.getElementById("totalScope1DEmissions").textContent =
      "Gesamt 1D-Emissionen: " + total.toFixed(2) + " kg CO₂";
  }


// Funktion zum Exportieren der Gasdaten
function exportScope1DData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope1DFields .dynamic-field");
    allFields.forEach(f => {
      data.push({
        date: f.querySelector(".scope1d-date").value,
        location: f.querySelector(".scope1d-location").value,
        gas: f.querySelector(".scope1d-type").value,
        unit: f.querySelector(".scope1d-unit").value,
        amount: f.querySelector(".scope1d-amount").value,
        factor: f.querySelector(".scope1d-factor").value,
        co2Emissions: f.querySelector(".scope1d-co2").value
      });
    });
    return data;
  }

// Basis-Emissionsfaktoren als Beispiel
const DEFAULT_EMISSION_FACTORS = {
'Emittent 1': 0.33,
'Emittent 2': 0.25
};

function addScope1DOther() {
  const container = document.getElementById("scope1DOtherFields");
  const id = "scope1DOther-" + Date.now();

  const html = `
    <div class="dynamic-field" id="${id}">
      <div class="form-group">
        <label>Emittent (frei)</label>
        <input type="text" class="scope1d-other-name" required placeholder="z.B. Eigene Bezeichnung">
      </div>
      <div class="form-group">
        <label>Funktionelle Einheit</label>
        <input type="text" class="scope1d-other-unit" required placeholder="z.B. Liter, kg, kWh...">
      </div>
      <div class="form-group">
        <label>Menge</label>
        <input type="number" class="scope1d-other-amount" min="0" step="0.1"
               onchange="calculateScope1DOther('${id}')"
               placeholder="z.B. 100">
      </div>
      <div class="form-group">
        <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
        <input type="number" class="scope1d-other-factor" step="0.0001" required
               onchange="calculateScope1DOther('${id}')"
               placeholder="z.B. 2.65">
      </div>
      <div class="form-group">
        <label>kg CO₂e</label>
        <input type="number" class="scope1d-other-co2" readonly>
      </div>
      <div class="form-group">
        <label>Kommentar</label>
        <input type="text" class="scope1d-other-comment" placeholder="z.B. Notizen oder Besonderheiten">
      </div>
      <div class="form-group">
        <label>Datenquelle</label>
        <input type="text" class="scope1d-other-source" placeholder="z.B. IPCC, UBA, interne Messung...">
      </div>
      <button type="button" class="remove-field" onclick="removeScope1DOther('${id}')">Entfernen</button>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", html);
}

function calculateScope1DOther(id) {
  const el = document.getElementById(id);
  const amount = parseFloat(el.querySelector(".scope1d-other-amount").value) || 0;
  const factor = parseFloat(el.querySelector(".scope1d-other-factor").value) || 0;

  const co2 = amount * factor;
  el.querySelector(".scope1d-other-co2").value = co2.toFixed(2);

  updateTotalScope1DOther();
}

function updateTotalScope1DOther() {
  const allFields = document.querySelectorAll("#scope1DOtherFields .dynamic-field");
  let total = 0;
  allFields.forEach(field => {
    const val = parseFloat(field.querySelector(".scope1d-other-co2").value) || 0;
    total += val;
  });
  document.getElementById("totalScope1DOtherEmissions").textContent =
    "Gesamt (Sonstige) 1D-Emissionen: " + total.toFixed(2) + " kg CO₂";
}

function removeScope1DOther(id) {
  document.getElementById(id).remove();
  updateTotalScope1DOther();
}

// Export-Funktion für handleSubmit
function exportScope1DOtherData() {
  const data = [];
  const allFields = document.querySelectorAll("#scope1DOtherFields .dynamic-field");
  allFields.forEach(field => {
    data.push({
      name: field.querySelector(".scope1d-other-name").value,
      unit: field.querySelector(".scope1d-other-unit").value,
      amount: field.querySelector(".scope1d-other-amount").value,
      factor: field.querySelector(".scope1d-other-factor").value,
      co2Emissions: field.querySelector(".scope1d-other-co2").value,
      comment: field.querySelector(".scope1d-other-comment").value,
      source: field.querySelector(".scope1d-other-source").value
    });
  });
  return data;
}


// Emissionsfaktoren für verschiedene Energietypen (kg CO2/kWh)
const SCOPE2A_FACTORS = {
    // -------------------------
    // Strom (UBA) – Jahrgänge
    // -------------------------
    "Strom (UBA) 2021 ohne Vorketten": {
      factor: 0.366, // kg CO₂/kWh (gerundet)
      defaultUnit: "kWh"
    },
    "Strom (UBA) 2021 inkl. Vorketten": {
      factor: 0.429,
      defaultUnit: "kWh"
    },
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
  };


function addScope2A() {
  const container = document.getElementById("scope2AFields");
  const id = "scope2A-" + Date.now();

  const html = `
    <div class="dynamic-field" id="${id}">
      <div class="form-group">
        <label>Datum</label>
        <input type="date" class="scope2a-date" required>
      </div>
      <div class="form-group">
        <label>Standort</label>
        <input type="text" class="scope2a-location" required placeholder="z.B. Dortmund">
      </div>
      <div class="form-group">
        <label>Energietyp</label>
        <select class="scope2a-type" onchange="updateScope2AFields('${id}')">
          ${Object.keys(SCOPE2A_FACTORS).map(type => 
            `<option value="${type}">${type}</option>`
          ).join('')}
        </select>
      </div>
      <div class="form-group">
        <label>Verbrauch</label>
        <input type="number" class="scope2a-amount" min="0" step="0.1"
               onchange="calculateScope2A('${id}')"
               placeholder="z.B. 4000">
      </div>
      <div class="form-group">
        <label>Einheit</label>
        <input type="text" class="scope2a-unit" required>
      </div>
      <div class="form-group">
        <label>CO₂-Faktor (kg CO₂ pro Einheit)</label>
        <input type="number" class="scope2a-factor" step="0.0001" required
               onchange="calculateScope2A('${id}')"
               placeholder="z.B. 0.36">
      </div>
      <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="scope2a-co2" readonly>
      </div>
      <button type="button" class="remove-field" onclick="removeScope2A('${id}')">Entfernen</button>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", html);

  // Standardwerte setzen
  updateScope2AFields(id);
}
function calculateScope2A(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope2a-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope2a-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope2a-co2").value = emissions.toFixed(2);
  
    updateTotalScope2A();
  } 
  function updateTotalScope2A() {
    const allFields = document.querySelectorAll("#scope2AFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope2a-co2").value) || 0;
      total += val;
    });
    document.getElementById("totalScope2AEmissions").textContent =
      "Gesamt 2A-Emissionen: " + total.toFixed(2) + " kg CO₂";
  }

function updateScope2AFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope2a-type").value;
    const data = SCOPE2A_FACTORS[selected];
  
    if (data) {
      el.querySelector(".scope2a-unit").value = data.defaultUnit;
      el.querySelector(".scope2a-factor").value = data.factor;
    }
    calculateScope2A(id);
  }

  function removeScope2A(id) {
    document.getElementById(id).remove();
    updateTotalScope2A();
  }

// Funktion zum Exportieren der Energiedaten
function exportScope2AData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope2AFields .dynamic-field");
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope2a-date").value,
        location: field.querySelector(".scope2a-location").value,
        energyType: field.querySelector(".scope2a-type").value,
        amount: field.querySelector(".scope2a-amount").value,
        unit: field.querySelector(".scope2a-unit").value,
        factor: field.querySelector(".scope2a-factor").value,
        co2Emissions: field.querySelector(".scope2a-co2").value
      });
    });
    return data;
  }
// Basis-Emissionsfaktoren für häufige indirekte Emittenten
const INDIRECT_EMISSION_FACTORS = {
'Emittent 1': 0.33,
'Emittent 2': 0.25
};

function addIndirectEmitter() {
const emitterFields = document.getElementById('indirectEmitterFields');
const emitterId = 'indirect-emitter-' + Date.now();

const emitterHtml = `
<div class="dynamic-field" id="${emitterId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="emitter-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="emitter-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Name von Emittent</label>
        <input type="text" class="emitter-name" required placeholder="z.B. Emittent 1"
               list="indirect-emitter-suggestions">
        <datalist id="indirect-emitter-suggestions">
            ${Object.keys(INDIRECT_EMISSION_FACTORS).map(name => 
                `<option value="${name}">`
            ).join('')}
        </datalist>
    </div>
    <div class="form-group">
        <label>Menge</label>
        <input type="number" class="emitter-amount" min="0" step="0.1" required 
               onchange="calculateIndirectEmissions('${emitterId}')"
               placeholder="z.B. 2000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" step="0.01" required
               placeholder="z.B. 0.25" onchange="calculateIndirectEmissions('${emitterId}')">
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeIndirectEmitter('${emitterId}')">Entfernen</button>
</div>
`;

emitterFields.insertAdjacentHTML('beforeend', emitterHtml);

// Event Listener für vorhandene Emittenten
const container = document.getElementById(emitterId);
const nameInput = container.querySelector('.emitter-name');
const factorInput = container.querySelector('.emission-factor');

nameInput.addEventListener('change', () => {
const selectedName = nameInput.value;
if (INDIRECT_EMISSION_FACTORS[selectedName]) {
    factorInput.value = INDIRECT_EMISSION_FACTORS[selectedName];
    calculateIndirectEmissions(emitterId);
}
});
}

function calculateIndirectEmissions(emitterId) {
const container = document.getElementById(emitterId);
const amount = parseFloat(container.querySelector('.emitter-amount').value) || 0;
const factor = parseFloat(container.querySelector('.emission-factor').value) || 0;

// Berechne die Emissionen
const emissions = amount * factor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalIndirectEmissions();
}

function updateTotalIndirectEmissions() {
const allEmitters = document.querySelectorAll('#indirectEmitterFields .dynamic-field');
let totalEmissions = {};

// Sammle Emissionen pro Emittent
allEmitters.forEach(emitter => {
const name = emitter.querySelector('.emitter-name').value;
const emissions = parseFloat(emitter.querySelector('.co2-emissions').value) || 0;
const amount = parseFloat(emitter.querySelector('.emitter-amount').value) || 0;

if (!totalEmissions[name]) {
    totalEmissions[name] = {
        amount: 0,
        emissions: 0
    };
}
totalEmissions[name].amount += amount;
totalEmissions[name].emissions += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([name, data]) => {
if (data.emissions > 0) {
    summaryHtml += `
        <div class="emitter-summary">
            <div>${name}:</div>
            <div>Menge: ${data.amount.toFixed(2)} kg</div>
            <div>Emissionen: ${data.emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((sum, data) => sum + data.emissions, 0);
const totalAmount = Object.values(totalEmissions).reduce((sum, data) => sum + data.amount, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtmenge: ${totalAmount.toFixed(2)} kg</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalIndirectEmissions').innerHTML = summaryHtml;
}

function removeIndirectEmitter(emitterId) {
document.getElementById(emitterId).remove();
updateTotalIndirectEmissions();
}

// Funktion zum Exportieren der Daten
function exportIndirectEmitterData() {
const emitterData = [];
const allEmitters = document.querySelectorAll('#indirectEmitterFields .dynamic-field');

allEmitters.forEach(emitter => {
emitterData.push({
    date: emitter.querySelector('.emitter-date').value,
    location: emitter.querySelector('.emitter-location').value,
    name: emitter.querySelector('.emitter-name').value,
    amount: emitter.querySelector('.emitter-amount').value,
    emissionFactor: emitter.querySelector('.emission-factor').value,
    co2Emissions: emitter.querySelector('.co2-emissions').value
});
});

return emitterData;
}

// Emissionsfaktoren für verschiedene Transportmittel (kg CO2/km)
// Beispiel: Scope-1B-Fahrzeug-/Transporttypen
const SCOPE1B_FACTORS = {
  "Benzin in L": {
    factor: 2.37,          // kg CO₂ pro Liter Benzin
    defaultUnit: "Liter"
  },
  "Diesel in L": {
    factor: 2.65,          // kg CO₂ pro Liter Diesel
    defaultUnit: "Liter"
  },
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
  // ...usw. – füge weitere Einträge nach Bedarf hinzu
};
const SCOPE3A_FACTORS = {
    // --------------------------------
    // 1) Direkte Kraftstoffe (Verbrennung) 
    //    Quelle: UBA (gerundet), ProBas
    // --------------------------------
    "Benzin in L": {
      factor: 2.32,        // ~2,32 kg CO₂/L Benzin
      defaultUnit: "Liter"
    },
    "Diesel in L": {
      factor: 2.65,        // ~2,65 kg CO₂/L Diesel
      defaultUnit: "Liter"
    },
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
    "Personenzug (Diesel-Nahverkehr)": {
      factor: 0.08,        // ~0,08 kg CO₂/pkm
      defaultUnit: "pkm"
    },
    "Personenzug (Diesel-Fernverkehr)": {
      factor: 0.07,        // ~0,07 kg CO₂/pkm
      defaultUnit: "pkm"
    },
    "Personenzug (e-Nahverkehr)": {
      factor: 0.04,        // ~0,04 kg CO₂/pkm
      defaultUnit: "pkm"
    },
    "Personenzug (e-Fernverkehr)": {
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
  };

function addScope3A() {
    const container = document.getElementById("scope3AFields");
    const id = "scope3A-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3a-date" required>
        </div>
        <div class="form-group">
          <label>Emittent</label>
          <select class="scope3a-type" required onchange="updateScope3AFields('${id}')">
            ${Object.keys(SCOPE3A_FACTORS).map(type => 
              `<option value="${type}">${type}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge / Distanz</label>
          <input type="number" class="scope3a-amount" min="0" step="0.1"
                 placeholder="z.B. 100"
                 onchange="calculateScope3A('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3a-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
          <input type="number" class="scope3a-factor" step="0.0001" required
                 placeholder="z.B. 2.32"
                 onchange="calculateScope3A('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3a-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3A('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  
    // Standardwerte für neu erstelltes Feld setzen
    updateScope3AFields(id);
  }

  function calculateScope3A(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3a-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3a-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3a-co2").value = emissions.toFixed(2);
  
    updateTotalScope3A();
  }

function updateScope3AFields(id) {
  const el = document.getElementById(id);
  const selected = el.querySelector(".scope3a-type").value;
  const data = SCOPE3A_FACTORS[selected];

  if (data) {
    el.querySelector(".scope3a-unit").value = data.defaultUnit;
    el.querySelector(".scope3a-factor").value = data.factor;
  }
  calculateScope3A(id);
}
function updateTotalScope3A() {
    const allFields = document.querySelectorAll("#scope3AFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3a-co2").value) || 0;
      total += val;
    });
    document.getElementById("totalScope3AEmissions").textContent =
      "Gesamt 3A-Emissionen: " + total.toFixed(2) + " kg CO₂";
  }

  function removeScope3A(id) {
    document.getElementById(id).remove();
    updateTotalScope3A();
  }

// Funktion zum Exportieren der Reisedaten
function exportScope3AData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3AFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3a-date").value,
        emitter: field.querySelector(".scope3a-type").value,
        amount: field.querySelector(".scope3a-amount").value,
        unit: field.querySelector(".scope3a-unit").value,
        factor: field.querySelector(".scope3a-factor").value,
        co2Emissions: field.querySelector(".scope3a-co2").value
      });
    });
    return data;
  }

  const SCOPE3B_FACTORS = {
    // --------------------------------
    // Kraftstoffe (Verbrennung, ohne Vorketten)
    // --------------------------------
    "Benzin in L": {
      factor: 2.32,       // ~2,32 kg CO₂/Liter (UBA gerundet)
      defaultUnit: "Liter"
    },
    "Diesel in L": {
      factor: 2.65,       // ~2,65 kg CO₂/Liter
      defaultUnit: "Liter"
    },
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
  };


  function addScope3B() {
    const container = document.getElementById("scope3BFields");
    const id = "scope3B-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3b-date" required>
        </div>
        <div class="form-group">
          <label>Emittent</label>
          <select class="scope3b-type" required onchange="updateScope3BFields('${id}')">
            ${Object.keys(SCOPE3B_FACTORS).map(type => 
              `<option value="${type}">${type}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge / Distanz</label>
          <input type="number" class="scope3b-amount" min="0" step="0.1"
                 placeholder="z.B. 100"
                 onchange="calculateScope3B('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3b-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
          <input type="number" class="scope3b-factor" step="0.0001" required
                 placeholder="z.B. 0.05"
                 onchange="calculateScope3B('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3b-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3B('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  
    updateScope3BFields(id);
  }

  function updateScope3BFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3b-type").value;
    const data = SCOPE3B_FACTORS[selected];
  
    if (data) {
      el.querySelector(".scope3b-unit").value = data.defaultUnit;
      el.querySelector(".scope3b-factor").value = data.factor;
    }
    calculateScope3B(id);
  }
  function calculateScope3B(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3b-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3b-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3b-co2").value = emissions.toFixed(2);
  
    updateTotalScope3B();
  }


  function updateTotalScope3B() {
    const allFields = document.querySelectorAll("#scope3BFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3b-co2").value) || 0;
      total += val;
    });
    document.getElementById("totalScope3BEmissions").textContent =
      "Gesamt 3B-Emissionen: " + total.toFixed(2) + " kg CO₂";
  }

  function removeScope3B(id) {
    document.getElementById(id).remove();
    updateTotalScope3B();
  }

// Funktion zum Exportieren der Transportdaten
function exportScope3BData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3BFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3b-date").value,
        emitter: field.querySelector(".scope3b-type").value,
        amount: field.querySelector(".scope3b-amount").value,
        unit: field.querySelector(".scope3b-unit").value,
        factor: field.querySelector(".scope3b-factor").value,
        co2Emissions: field.querySelector(".scope3b-co2").value
      });
    });
    return data;
  }

// Emissionsfaktoren für verschiedene Sendungsarten (kg CO2/Stück)


// Emissionsfaktoren für chemische Produkte (kg CO2/kg)
const SCOPE3C_FACTORS = {
    "1,2-Dichlorethan, Chloräther (EEW) 2022": {
      factor: 1.80,  // ~1,80 kg CO₂eq/kg (gerundet, Bsp.)
      defaultUnit: "kg"
    },
    "1,3-Butadien, Vinyletthylen (EEW) 2022": {
      factor: 2.50,
      defaultUnit: "kg"
    },
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
  };

  function addScope3C() {
    const container = document.getElementById("scope3CFields");
    const id = "scope3C-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3c-date" required>
        </div>
        <div class="form-group">
          <label>Name / Emittent</label>
          <select class="scope3c-type" required onchange="updateScope3CFields('${id}')">
            ${Object.keys(SCOPE3C_FACTORS).map(type => 
              `<option value="${type}">${type}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge</label>
          <input type="number" class="scope3c-amount" min="0" step="0.1"
                 placeholder="z.B. 100"
                 onchange="calculateScope3C('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3c-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
          <input type="number" class="scope3c-factor" step="0.0001" required
                 placeholder="z.B. 2.70"
                 onchange="calculateScope3C('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3c-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3C('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  
    // Standardwerte setzen
    updateScope3CFields(id);
  }

  function updateScope3CFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3c-type").value;
    const data = SCOPE3C_FACTORS[selected];
  
    if (data) {
      el.querySelector(".scope3c-unit").value = data.defaultUnit;
      el.querySelector(".scope3c-factor").value = data.factor;
    }
    calculateScope3C(id);
  }
  function calculateScope3C(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3c-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3c-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3c-co2").value = emissions.toFixed(2);
  
    updateTotalScope3C();
  }

  function updateTotalScope3C() {
    const allFields = document.querySelectorAll("#scope3CFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3c-co2").value) || 0;
      total += val;
    });
    document.getElementById("totalScope3CEmissions").textContent =
      "Gesamt 3C-Emissionen: " + total.toFixed(2) + " kg CO₂";
  }

  function removeScope3C(id) {
    document.getElementById(id).remove();
    updateTotalScope3C();
  }

// Funktion zum Exportieren der Daten
function exportScope3CData() {
    const data = [];
    // Hier holen wir uns alle ".dynamic-field"-Container in #scope3CFields
    const allFields = document.querySelectorAll("#scope3CFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3c-date")?.value || "",
        substance: field.querySelector(".scope3c-type")?.value || "",
        amount: field.querySelector(".scope3c-amount")?.value || "",
        unit: field.querySelector(".scope3c-unit")?.value || "",
        factor: field.querySelector(".scope3c-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3c-co2")?.value || ""
      });
    });
  
    return data;
  }

// Emissionsfaktoren für Papierprodukte (kg CO2/Blatt)






// Emissionsfaktoren für verschiedene Papiertypen (kg CO2/Blatt)
const SCOPE3D_FACTORS = {
    // -------------------------------------------------
    // 1) EEW (ohne Jahresangabe oder 2022)
    // -------------------------------------------------
    "Altpapierstoff (EEW)": {
      factor: 0.30,
      defaultUnit: "kg"
    },
    "Holz unbehandelt, trocken (EEW)": {
      factor: 0.10,
      defaultUnit: "kg"
    },
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
  };

  function addScope3D() {
    const container = document.getElementById("scope3DFields");
    const id = "scope3D-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3d-date" required>
        </div>
        <div class="form-group">
          <label>Holz/Papier/Pappe Typ</label>
          <select class="scope3d-type" required onchange="updateScope3DFields('${id}')">
            ${Object.keys(SCOPE3D_FACTORS).map(type =>
              `<option value="${type}">${type}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge</label>
          <input type="number" class="scope3d-amount" min="0" step="0.1"
                 placeholder="z.B. 100"
                 onchange="calculateScope3D('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3d-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
          <input type="number" class="scope3d-factor" step="0.0001" required
                 placeholder="z.B. 0.90"
                 onchange="calculateScope3D('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3d-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3D('${id}')">Entfernen</button>
      </div>
    `;
    
    container.insertAdjacentHTML("beforeend", html);
  
    // Standardwerte sofort setzen
    updateScope3DFields(id);
  }

  function updateScope3DFields(id) {
    const el = document.getElementById(id);
    const selectedType = el.querySelector(".scope3d-type").value;
    const data = SCOPE3D_FACTORS[selectedType];
  
    if (data) {
      // Setze die Einheit (z.B. "kg")
      el.querySelector(".scope3d-unit").value = data.defaultUnit;
      // Setze den Emissionsfaktor
      el.querySelector(".scope3d-factor").value = data.factor;
    }
    calculateScope3D(id);
  }

  function calculateScope3D(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3d-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3d-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3d-co2").value = emissions.toFixed(2);
  
    updateTotalScope3D();
  }

  function updateTotalScope3D() {
    const allFields = document.querySelectorAll("#scope3DFields .dynamic-field");
    let total = 0;
  
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3d-co2").value) || 0;
      total += val;
    });
  
    const totalDisplay = document.getElementById("totalScope3DEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3D-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }

  function removeScope3D(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3D();
  }

// Funktion zum Exportieren der Daten
function exportScope3DData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3DFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3d-date")?.value || "",
        material: field.querySelector(".scope3d-type")?.value || "",
        amount: field.querySelector(".scope3d-amount")?.value || "",
        unit: field.querySelector(".scope3d-unit")?.value || "",
        factor: field.querySelector(".scope3d-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3d-co2")?.value || ""
      });
    });
    return data;
  }
// Emissionsfaktoren für verschiedene Kunststoffe (kg CO2/kg)
// Beispielhafte Emissionsfaktoren (Cradle-to-Gate) für Kunststoffe
const SCOPE3E_FACTORS = {
    // ------------------------------
    // 1) EEW 2022
    // ------------------------------
    "Fluorpolymere, PTFE (EEW) 2022": { factor: 8.0, defaultUnit: "kg" },
    "GFK, Glasfaserverstärkte Kunststoffe (EEW) 2022": { factor: 2.5, defaultUnit: "kg" },
    "Kohlenstofffaserverstärkte Kunststoffe (EEW) 2022": { factor: 7.0, defaultUnit: "kg" },
    "Naturkautschuk (EEW) 2022": { factor: 2.0, defaultUnit: "kg" },
    "Polyethylen HDPE (EEW) 2022": { factor: 1.8, defaultUnit: "kg" },
    "Polyethylen LDPE (EEW) 2022": { factor: 1.9, defaultUnit: "kg" },
    "Polyethylenterephthalat, PET, PETE, PETP (EEW) 2022": { factor: 2.4, defaultUnit: "kg" },
    "Polypropylen, PP (EEW) 2022": { factor: 1.7, defaultUnit: "kg" },
    "Polystyrol PS (EEW) 2022": { factor: 2.0, defaultUnit: "kg" },
    "Polystyrol, expandiertes EPS (EEW) 2022": { factor: 3.1, defaultUnit: "kg" },
    "Polyurethan, PUR (EEW) 2022": { factor: 2.7, defaultUnit: "kg" },
    "PVC (Polyvinylchlorid) (EEW) 2022": { factor: 2.0, defaultUnit: "kg" },
    "Recycling-Kunststoff (EEW) 2022": { factor: 1.1, defaultUnit: "kg" },
  
    // ------------------------------
    // 2) EEW 2024
    // ------------------------------
    "Fluorpolymere, PTFE (EEW) 2024": { factor: 8.5, defaultUnit: "kg" },
    "GFK, Glasfaserverstärkte Kunststoffe (EEW) 2024": { factor: 2.6, defaultUnit: "kg" },
    "Kohlenstofffaserverstärkte Kunststoffe (EEW) 2024": { factor: 7.2, defaultUnit: "kg" },
    "Naturkautschuk (EEW) 2024": { factor: 2.1, defaultUnit: "kg" },
    "Polyethylen HDPE (EEW) 2024": { factor: 1.85, defaultUnit: "kg" },
    "Polyethylen LDPE (EEW) 2024": { factor: 1.95, defaultUnit: "kg" },
    "Polyethylenterephthalat, PET, PETE, PETP (EEW) 2024": { factor: 2.5, defaultUnit: "kg" },
    "Polypropylen, PP (EEW) 2024": { factor: 1.75, defaultUnit: "kg" },
    "Polystyrol PS (EEW) 2024": { factor: 2.1, defaultUnit: "kg" },
    "Polystyrol, expandiertes EPS (EEW) 2024": { factor: 3.2, defaultUnit: "kg" },
    "Polyurethan, PUR (EEW) 2024": { factor: 2.8, defaultUnit: "kg" },
    "PVC (Polyvinylchlorid) (EEW) 2024": { factor: 2.1, defaultUnit: "kg" },
  
    // ------------------------------
    // 3) Weitere Kunststoffe
    // ------------------------------
    "Polyamid (PA 6) (EEW)": { factor: 3.3, defaultUnit: "kg" },
    "Polyamid (PA 66) (EEW)": { factor: 4.0, defaultUnit: "kg" },
    "Kunststoffe gemittelt (EEW) 2024": { factor: 2.0, defaultUnit: "kg" },
    "Nylon 6 + 30% Glasfaser": { factor: 4.5, defaultUnit: "kg" },
    "Nylon 66 / Glasfaser-Verbund": { factor: 5.0, defaultUnit: "kg" },
    "Polyethylenterephthalat (PET-Flasche)": { factor: 2.7, defaultUnit: "kg" },
    "Acrylnitril-Butadien-Styrol (ABS)": { factor: 2.8, defaultUnit: "kg" },
    "Ethylenvinylacetat (EVA)": { factor: 2.2, defaultUnit: "kg" },
    "Silicon-Kautschuk (SIR)": { factor: 3.5, defaultUnit: "kg" }
  };

  function addScope3E() {
    const container = document.getElementById("scope3EFields");
    const id = "scope3E-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3e-date" required>
        </div>
        <div class="form-group">
          <label>Kunststoff / Emittent</label>
          <select class="scope3e-type" required onchange="updateScope3EFields('${id}')">
            ${Object.keys(SCOPE3E_FACTORS).map(k => 
              `<option value="${k}">${k}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge (kg)</label>
          <input type="number" class="scope3e-amount" min="0" step="0.1"
                 placeholder="z.B. 100" onchange="calculateScope3E('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3e-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / kg)</label>
          <input type="number" class="scope3e-factor" step="0.0001" required
                 placeholder="z.B. 1.80" onchange="calculateScope3E('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3e-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3E('${id}')">Entfernen</button>
      </div>
    `;
  
    container.insertAdjacentHTML("beforeend", html);
  
    // Setze beim Erzeugen gleich die Standardwerte (erster Eintrag etc.)
    updateScope3EFields(id);
  }

  function updateScope3EFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3e-type").value;
    const data = SCOPE3E_FACTORS[selected];
  
    if (data) {
      // Einheit und Faktor aus Dictionary übernehmen
      el.querySelector(".scope3e-unit").value = data.defaultUnit;
      el.querySelector(".scope3e-factor").value = data.factor;
    }
    calculateScope3E(id);
  }

  function calculateScope3E(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3e-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3e-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3e-co2").value = emissions.toFixed(2);
  
    updateTotalScope3E();
  }

  function updateTotalScope3E() {
    const allFields = document.querySelectorAll("#scope3EFields .dynamic-field");
    let total = 0;
  
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3e-co2").value) || 0;
      total += val;
    });
  
    const totalDisplay = document.getElementById("totalScope3EEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3E-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }

  function removeScope3E(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3E();
  }
// Funktion zum Exportieren der Daten
function exportScope3EData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3EFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3e-date")?.value || "",
        plasticType: field.querySelector(".scope3e-type")?.value || "",
        amount: field.querySelector(".scope3e-amount")?.value || "",
        unit: field.querySelector(".scope3e-unit")?.value || "",
        factor: field.querySelector(".scope3e-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3e-co2")?.value || ""
      });
    });
    return data;
  }

// Beispiel mit einer einfachen JSON-Struktur für die Datenbank





// Emissionsfaktoren für Metalle (kg CO2/kg)
// Beispiel: Scope 3F (Metalle)
// Alle Zahlen sind ungefähre Cradle-to-Gate-Richtwerte in kg CO₂eq/kg
const SCOPE3F_FACTORS = {
    // -------------------------------------------------
    // 1) Metalle (EEW) 2022
    // -------------------------------------------------
    "Aluminium, Gusslegierung (EEW) 2022": { factor: 10.0, defaultUnit: "kg" },
    "Aluminium, Knetlegierung (EEW) 2022": { factor: 11.0, defaultUnit: "kg" },
    "Aluminium, primär (EEW) 2022": { factor: 16.0, defaultUnit: "kg" },
    "Aluminium, sekundär (EEW) 2022": { factor: 2.0, defaultUnit: "kg" },
    "Aluminiumblech, primär (EEW) 2022": { factor: 16.5, defaultUnit: "kg" },
    "Aluminiumblech, sekundär (EEW) 2022": { factor: 2.5, defaultUnit: "kg" },
  
    "Blei (Pb) (EEW) 2022": { factor: 1.8, defaultUnit: "kg" },
    "Blei, sekundär (Pb) (EEW) 2022": { factor: 0.7, defaultUnit: "kg" },
    "Bronze (EEW) 2022": { factor: 7.0, defaultUnit: "kg" },
    "Edelstahlblech (EEW) 2022": { factor: 6.5, defaultUnit: "kg" },
    "Eisen (Fe) (EEW) 2022": { factor: 1.5, defaultUnit: "kg" },
    "Eisenerz, Magnetit (EEW) 2022": { factor: 0.2, defaultUnit: "kg" },
    "Eisenerzkonzentrat (EEW) 2022": { factor: 0.25, defaultUnit: "kg" },
  
    "Indium (In) (EEW) 2022": { factor: 80.0, defaultUnit: "kg" },
    "Kobalt (Co) (EEW) 2022": { factor: 20.0, defaultUnit: "kg" },
    "Kupfer, primär (Cu) (EEW) 2022": { factor: 4.0, defaultUnit: "kg" },
    "Kupfer, sekundär (Cu) (EEW) 2022": { factor: 1.0, defaultUnit: "kg" },
    "Kupferblech, primär (EEW) 2022": { factor: 4.2, defaultUnit: "kg" },
    "Kupferblech, sekundär (EEW) 2022": { factor: 1.2, defaultUnit: "kg" },
    "Kupferkonzentrate (EEW) 2022": { factor: 2.0, defaultUnit: "kg" },
  
    "Lithium (Li) (EEW) 2022": { factor: 70.0, defaultUnit: "kg" },
    "Magnesium (Mg) (EEW) 2022": { factor: 25.0, defaultUnit: "kg" },
    "Mangan (Mn) (EEW) 2022": { factor: 2.9, defaultUnit: "kg" },
    "Manganerz, Braunstein (EEW) 2022": { factor: 0.4, defaultUnit: "kg" },
    "Messing (EEW) 2022": { factor: 4.0, defaultUnit: "kg" },
    "Nickel (Ni) (EEW) 2022": { factor: 19.0, defaultUnit: "kg" },
    "Nickel, sekundär (Ni) (EEW) 2022": { factor: 8.0, defaultUnit: "kg" },
    "Nickelerz (EEW) 2022": { factor: 0.5, defaultUnit: "kg" },
    "Niob-, TantalKonzentrate (EEW) 2022": { factor: 25.0, defaultUnit: "kg" },
    "Palladium (Pd) (EEW) 2022": { factor: 100.0, defaultUnit: "kg" },
    "Platin (EEW) 2022": { factor: 100.0, defaultUnit: "kg" },
    "Quecksilber (Hg) (EEW) 2022": { factor: 25.0, defaultUnit: "kg" },
    "Rhodium (Rh) (EEW) 2022": { factor: 150.0, defaultUnit: "kg" },
    "Silber (Ag) (EEW) 2022": { factor: 300.0, defaultUnit: "kg" },
  
    "Stahl, Elektrostahl (EEW) 2022": { factor: 1.2, defaultUnit: "kg" },
    "Stahl, Konverterstahl (EEW) 2022": { factor: 2.1, defaultUnit: "kg" },
    "Stahl, sekundär (EEW) 2022": { factor: 1.0, defaultUnit: "kg" },
    "Stahlblech verzinkt (EEW) 2022": { factor: 2.5, defaultUnit: "kg" },
    "Tantal (EEW) 2022": { factor: 90.0, defaultUnit: "kg" },
    "Thallium (Tl) (EEW) 2022": { factor: 300.0, defaultUnit: "kg" },
    "Titan (Ti) (EEW) 2022": { factor: 50.0, defaultUnit: "kg" },
    "Wismut (Bi) (EEW) 2022": { factor: 100.0, defaultUnit: "kg" },
    "Wolframerz, -mit, Scheelit (EEW) 2022": { factor: 80.0, defaultUnit: "kg" },
    "Zink (Zn) (EEW) 2022": { factor: 3.0, defaultUnit: "kg" },
    "Zinkerze, Zinksulfid (EEW) 2022": { factor: 0.5, defaultUnit: "kg" },
    "Zinn (Sn) (EEW) 2022": { factor: 15.0, defaultUnit: "kg" },
  
    // -------------------------------------------------
    // 2) Metalle (EEW) 2024 (leicht andere Werte)
    // -------------------------------------------------
    "Aluminium, Gusslegierung (EEW) 2024": { factor: 10.2, defaultUnit: "kg" },
    "Aluminium, Knetlegierung (EEW) 2024": { factor: 11.2, defaultUnit: "kg" },
    "Aluminium, primär (EEW) 2024": { factor: 16.5, defaultUnit: "kg" },
    "Aluminium, sekundär (EEW) 2024": { factor: 2.1, defaultUnit: "kg" },
    "Blei (Pb) (EEW) 2024": { factor: 1.85, defaultUnit: "kg" },
    "Bronze (EEW) 2024": { factor: 7.2, defaultUnit: "kg" },
    "Edelstahlblech (EEW) 2024": { factor: 6.6, defaultUnit: "kg" },
    "Eisen (Fe) (EEW) 2024": { factor: 1.55, defaultUnit: "kg" },
    "Kobalt (Co) (EEW) 2024": { factor: 20.5, defaultUnit: "kg" },
    "Kupfer, primär (Cu) (EEW) 2024": { factor: 4.1, defaultUnit: "kg" },
    "Nickel (Ni) (EEW) 2024": { factor: 20.0, defaultUnit: "kg" },
    "Stahl, Elektrostahl (EEW) 2024": { factor: 1.25, defaultUnit: "kg" },
    "Stahl, Konverterstahl (EEW) 2024": { factor: 2.2, defaultUnit: "kg" },
    "Metalle / Metalllegierungen gemittelt (EEW) 2024": { factor: 5.0, defaultUnit: "kg" },
    // ... ggf. weitere
  };

  function addScope3F() {
    const container = document.getElementById("scope3FFields");
    const id = "scope3F-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3f-date" required>
        </div>
        <div class="form-group">
          <label>Metall / Emittent</label>
          <select class="scope3f-type" required onchange="updateScope3FFields('${id}')">
            ${Object.keys(SCOPE3F_FACTORS).map(metal => 
              `<option value="${metal}">${metal}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge (kg)</label>
          <input type="number" class="scope3f-amount" min="0" step="0.1"
                 placeholder="z.B. 100" onchange="calculateScope3F('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3f-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / kg)</label>
          <input type="number" class="scope3f-factor" step="0.0001" required
                 placeholder="z.B. 16.0" onchange="calculateScope3F('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3f-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3F('${id}')">Entfernen</button>
      </div>
    `;
  
    container.insertAdjacentHTML("beforeend", html);
  
    // Setze direkt Standardwerte beim Anlegen
    updateScope3FFields(id);
  }

  function calculateScope3F(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3f-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3f-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3f-co2").value = emissions.toFixed(2);
  
    updateTotalScope3F();
  }

function updateScope3FFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3f-type").value;
    const data = SCOPE3F_FACTORS[selected];
  
    if (data) {
      // Einheit und Faktor übernehmen
      el.querySelector(".scope3f-unit").value = data.defaultUnit;
      el.querySelector(".scope3f-factor").value = data.factor;
    }
    calculateScope3F(id);
  }

  function updateTotalScope3F() {
    const allFields = document.querySelectorAll("#scope3FFields .dynamic-field");
    let total = 0;
  
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3f-co2").value) || 0;
      total += val;
    });
  
    const totalDisplay = document.getElementById("totalScope3FEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3F-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }

  function removeScope3F(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3F();
  }

// Funktion zum Exportieren der Daten
function exportScope3FData() {
  const data = [];
  const allFields = document.querySelectorAll("#scope3FFields .dynamic-field");

  allFields.forEach(field => {
    data.push({
      date: field.querySelector(".scope3f-date")?.value || "",
      metalType: field.querySelector(".scope3f-type")?.value || "",
      amount: field.querySelector(".scope3f-amount")?.value || "",
      unit: field.querySelector(".scope3f-unit")?.value || "",
      factor: field.querySelector(".scope3f-factor")?.value || "",
      co2Emissions: field.querySelector(".scope3f-co2")?.value || ""
    });
  });
  return data;
}

// Emissionsfaktoren für Mineralien und Baustoffe (kg CO2/kg)
const SCOPE3G_FACTORS = {
    // -------------------------
    // 2022-Varianten
    // -------------------------
    "Beton (EEW) 2022":           { factor: 0.11,  defaultUnit: "kg" },
    "Bimsstein (EEW) 2022":       { factor: 0.02,  defaultUnit: "kg" },
    "Borate (EEW) 2022":          { factor: 0.40,  defaultUnit: "kg" },
    "Calciumsulfat (CaSO4), Gips (EEW) 2022": { factor: 0.10, defaultUnit: "kg" },
    "Chrom (Cr) (EEW) 2022":      { factor: 6.0,   defaultUnit: "kg" },
    "Chromit (FeCr2O4), Chromerz (EEW) 2022": { factor: 1.5, defaultUnit: "kg" },
    "Dolomit (CaMg(CO3)2), Dolomitspat (EEW) 2022": { factor: 0.05, defaultUnit: "kg" },
    "Gesteinsmehl, Schluff (EEW) 2022": { factor: 0.02, defaultUnit: "kg" },
    "Glas, Behälterglas (EEW) 2022": { factor: 0.85, defaultUnit: "kg" },
    "Glas, Flachglas (EEW) 2022": { factor: 1.00, defaultUnit: "kg" },
    "Glaswolle (EEW) 2022":       { factor: 2.66,  defaultUnit: "kg" },
    "Graphit (EEW) 2022":         { factor: 0.07,  defaultUnit: "kg" },
    "Hüttensand, Schlackensand (EEW) 2022": { factor: 0.03, defaultUnit: "kg" },
    "Ilmenit [FeTiO3], Menaccanit (EEW) 2022": { factor: 2.5, defaultUnit: "kg" },
    "Kalisalz, Sylvin (EEW) 2022": { factor: 0.12, defaultUnit: "kg" },
    "Kaolin (EEW) 2022":          { factor: 0.08,  defaultUnit: "kg" },
    "Kies, Baukies (EEW) 2022":   { factor: 0.02,  defaultUnit: "kg" },
    "Kieselgur (EEW) 2022":       { factor: 0.15,  defaultUnit: "kg" },
    "Kryolith (Na2NaAlF6), Eisstein (EEW) 2022": { factor: 1.2, defaultUnit: "kg" },
    "Lack, Lösemittelbasis (EEW) 2022": { factor: 2.0, defaultUnit: "kg" },
    "Leim, Klebstoffe (EEW) 2022": { factor: 1.5, defaultUnit: "kg" },
    "Molybdän (Mo) (EEW) 2022":   { factor: 15.0, defaultUnit: "kg" },
    "Molybdänerz, Molybdänit (EEW) 2022": { factor: 2.0, defaultUnit: "kg" },
    "Perlit, Obsidian (EEW) 2022": { factor: 0.10, defaultUnit: "kg" },
    "Quarz, Quarzit (EEW) 2022":  { factor: 0.03,  defaultUnit: "kg" },
    "Ruß (EEW) 2022":             { factor: 2.5,   defaultUnit: "kg" },
    "Salz (NaCl) (EEW) 2022":     { factor: 0.27,  defaultUnit: "kg" },
    "Sand, Bausand (EEW) 2022":   { factor: 0.01,  defaultUnit: "kg" },
    "Schamottstein (EEW) 2022":   { factor: 0.10,  defaultUnit: "kg" },
    "Schiefer (EEW) 2022":        { factor: 0.05,  defaultUnit: "kg" },
    "Schleifmittel – Schmirgel, Korund, Granat (EEW) 2022": { factor: 1.2, defaultUnit: "kg" },
    "Si, Silizium (EEW) 2022":    { factor: 4.0,   defaultUnit: "kg" },
    "Siedesalz (EEW) 2022":       { factor: 0.30,  defaultUnit: "kg" },
    "Silicate, Glimmer (EEW) 2022": { factor: 0.05, defaultUnit: "kg" },
    "Siliciumdioxid (SiO2), Quarzsand (EEW) 2022": { factor: 0.03, defaultUnit: "kg" },
    "Sillimanit, Alumosilikat (EEW) 2022": { factor: 0.10, defaultUnit: "kg" },
    "Splitt (EEW) 2022":          { factor: 0.02,  defaultUnit: "kg" },
    "Steinwolle (EEW) 2022":      { factor: 1.6,   defaultUnit: "kg" },
    "Talk, Steatit (EEW) 2022":   { factor: 0.10,  defaultUnit: "kg" },
    "Torf (EEW) 2022":            { factor: 0.014, defaultUnit: "kg" },
    "Trass, Puzzolan (EEW) 2022": { factor: 0.05,  defaultUnit: "kg" },
    "Vermikulit (EEW) 2022":      { factor: 0.12,  defaultUnit: "kg" },
    "Wasserglas, Natronwasserglas (EEW) 2022": { factor: 0.25, defaultUnit: "kg" },
    "Zement (EEW) 2022":          { factor: 0.85,  defaultUnit: "kg" },
    "Zementklinker (EEW) 2022":   { factor: 0.90,  defaultUnit: "kg" },
  
    // -------------------------
    // 2024-Varianten
    // -------------------------
    "Beton (EEW) 2024":           { factor: 0.10, defaultUnit: "kg" },
    "Bimsstein (EEW) 2024":       { factor: 0.021, defaultUnit: "kg" },
    "Borate (EEW) 2024":          { factor: 0.42, defaultUnit: "kg" },
    "Calciumsulfat (CaSO4), Gips (EEW) 2024": { factor: 0.11, defaultUnit: "kg" },
    "Chrom (Cr) (EEW) 2024":      { factor: 6.1, defaultUnit: "kg" },
    "Chromit (FeCr2O4), Chromerz (EEW) 2024": { factor: 1.6, defaultUnit: "kg" },
    "Gesteinsmehl, Schluff (EEW) 2024": { factor: 0.02, defaultUnit: "kg" },
    "Glas, Behälterglas (EEW) 2024": { factor: 0.88, defaultUnit: "kg" },
    "Glas, Flachglas (EEW) 2024": { factor: 1.05, defaultUnit: "kg" },
    "Glaswolle (EEW) 2024":       { factor: 2.70, defaultUnit: "kg" },
    "Graphit (EEW) 2024":         { factor: 0.07, defaultUnit: "kg" },
    "Hüttensand, Schlackensand (EEW) 2024": { factor: 0.03, defaultUnit: "kg" },
    "Kalisalz, Sylvin (EEW) 2024": { factor: 0.13, defaultUnit: "kg" },
    "Kies, Baukies (EEW) 2024":   { factor: 0.02, defaultUnit: "kg" },
    "Kryolith (Na2NaAlF6), Eisstein (EEW) 2024": { factor: 1.25, defaultUnit: "kg" },
    "Lack, Lösemittelbasis (EEW) 2024": { factor: 2.1, defaultUnit: "kg" },
    "Leim, Klebstoffe (EEW) 2024": { factor: 1.6, defaultUnit: "kg" },
    "Mineralien gemittelt (EEW) 2024": { factor: 0.10, defaultUnit: "kg" },
    "Molybdän (Mo) (EEW) 2024":   { factor: 16.0, defaultUnit: "kg" },
    "Molybdänerz, Molybdänit (EEW) 2024": { factor: 2.1, defaultUnit: "kg" },
    // ... usw. – Liste kann erweitert werden
  };
  function addScope3G() {
    const container = document.getElementById("scope3GFields");
    const id = "scope3G-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3g-date" required>
        </div>
        <div class="form-group">
          <label>Material / Baustoff</label>
          <select class="scope3g-type" required onchange="updateScope3GFields('${id}')">
          ${Object.keys(SCOPE3G_FACTORS).map(item =>
            `<option value="${item}">${item}</option>`
          ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge (kg)</label>
          <input type="number" class="scope3g-amount" min="0" step="0.1" 
                 placeholder="z.B. 100" onchange="calculateScope3G('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3g-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂/kg)</label>
          <input type="number" class="scope3g-factor" step="0.0001" required
                 placeholder="z.B. 0.11" onchange="calculateScope3G('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3g-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3G('${id}')">Entfernen</button>
      </div>
    `;
  
    container.insertAdjacentHTML("beforeend", html);
    // Direkt Standardwerte setzen
    updateScope3GFields(id);
  }
  
  function updateScope3GFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3g-type").value;
    const data = SCOPE3G_FACTORS[selected];
  
    if (data) {
      el.querySelector(".scope3g-unit").value = data.defaultUnit;
      el.querySelector(".scope3g-factor").value = data.factor;
    }
    calculateScope3G(id);
  }
  
  function calculateScope3G(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3g-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3g-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3g-co2").value = emissions.toFixed(2);
  
    updateTotalScope3G();
  }
  
  function updateTotalScope3G() {
    const allFields = document.querySelectorAll("#scope3GFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3g-co2").value) || 0;
      total += val;
    });
  
    const totalDisplay = document.getElementById("totalScope3GEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3G-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }
  
  function removeScope3G(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3G();
  }
  
  function exportScope3GData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3GFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3g-date")?.value || "",
        material: field.querySelector(".scope3g-type")?.value || "",
        amount: field.querySelector(".scope3g-amount")?.value || "",
        unit: field.querySelector(".scope3g-unit")?.value || "",
        factor: field.querySelector(".scope3g-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3g-co2")?.value || ""
      });
    });
    return data;
  }




// Emissionsfaktoren für verschiedene Entsorgungsarten (kg CO2/Einheit)
// Beispiel: Scope 3H – Entsorgung / Abfälle
// Alle Werte sind ungefähre kg CO₂eq pro kg Abfall (sofern nicht anders angegeben).
const SCOPE3H_FACTORS = {
    "Abwasser (kommunal)": {
      factor: 0.00027,    // z. B. ~0.00027 kg CO₂eq pro Liter => 0.27 kg CO₂eq pro m³
      defaultUnit: "L"    // Einheit: Liter
    },
    "Hausmüll (Deponie)": {
      factor: 2.63,       // ~2.63 kg CO₂eq/kg (Deponierung)
      defaultUnit: "kg"
    },
    "MVA Hausmüll": {
      factor: 0.37,       // ~0.37 kg CO₂eq/kg (Müllverbrennungsanlage)
      defaultUnit: "kg"
    },
    "Schlacke (Deponie)": {
      factor: 0.00395,       // z. B. ~0.10 kg CO₂eq/kg
      defaultUnit: "kg"
    },
    "Altöl (EEW) 2025": {
      factor: 3.23,        // Beispielwert, z. B. 2.0 kg CO₂eq/kg
      defaultUnit: "kg"
    },
    // Ggf. weitere Beispiele:
    "Bioabfall (Kompostierung)": {
      factor: 0.06,       // ~0.06 kg CO₂eq/kg
      defaultUnit: "kg"
    },
    "Sondermüll (gefährlich)": {
      factor: 4.0,        // sehr grober Richtwert
      defaultUnit: "kg"
    },
    "Papierabfall (Recycling)": {
      factor: -0.71,      // z. B. ~-0.71 kg CO₂eq/kg (Netto-Einsparung), 
      defaultUnit: "kg"   //  falls du ein negatives Gutschrift-System verwenden möchtest
    }
  };

// 1) Neues Abfall-Eintrag-Feld hinzufügen
function addScope3H() {
    const container = document.getElementById("scope3HFields");
    const id = "scope3H-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3h-date" required>
        </div>
        <div class="form-group">
          <label>Entsorgungstyp</label>
          <select class="scope3h-type" required onchange="updateScope3HFields('${id}')">
            ${Object.keys(SCOPE3H_FACTORS).map(item =>
              `<option value="${item}">${item}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge</label>
          <input type="number" class="scope3h-amount" min="0" step="0.01" 
                 placeholder="z.B. 100" onchange="calculateScope3H('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3h-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂/Einheit)</label>
          <input type="number" class="scope3h-factor" step="0.0001" required
                 placeholder="z.B. 2.63" onchange="calculateScope3H('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3h-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3H('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
    updateScope3HFields(id);
  }
  
  // 2) Update-Funktion, um Standardwerte zu setzen, wenn der Nutzer einen Entsorgungstyp wählt
  function updateScope3HFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3h-type").value;
    const data = SCOPE3H_FACTORS[selected];
  
    if (data) {
      el.querySelector(".scope3h-unit").value = data.defaultUnit;
      el.querySelector(".scope3h-factor").value = data.factor;
    }
    calculateScope3H(id);
  }
  
  // 3) Berechnung pro Eintrag
  function calculateScope3H(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3h-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3h-factor").value) || 0;
  
    const emissions = amount * factor;
    el.querySelector(".scope3h-co2").value = emissions.toFixed(2);
  
    updateTotalScope3H();
  }
  
  // 4) Gesamtsumme aktualisieren
  function updateTotalScope3H() {
    const allFields = document.querySelectorAll("#scope3HFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3h-co2").value) || 0;
      total += val;
    });
    const totalDisplay = document.getElementById("totalScope3HEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3H-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }
  
  // 5) Eintrag entfernen
  function removeScope3H(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3H();
  }
  
  // 6) Daten-Export für die Submit-Funktion
  function exportScope3HData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3HFields .dynamic-field");
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3h-date")?.value || "",
        disposalType: field.querySelector(".scope3h-type")?.value || "",
        amount: field.querySelector(".scope3h-amount")?.value || "",
        unit: field.querySelector(".scope3h-unit")?.value || "",
        factor: field.querySelector(".scope3h-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3h-co2")?.value || ""
      });
    });
    return data;
  }

// Emissionsfaktoren für verschiedene Wassertypen (kg CO2/m³)
// Beispiel: Scope 3I – Wasser
// Alle Werte sind ungefähre kg CO₂eq pro m³ (sofern nicht anders angegeben).
const SCOPE3I_FACTORS = {
    "Abwasser": {
      factor: 0.27,          // z. B. ~0.27 kg CO₂eq pro m³ (Richtwert)
      defaultUnit: "m³"
    },
    "Trinkwasser": {
      factor: 0.23,          // z. B. ~0.23 kg CO₂eq pro m³ (Richtwert)
      defaultUnit: "m³"
    },
    "VE-Wasser, technisches Wasser (H2O) (EEW)": {
      factor: 0.30,          // Beispielwert, ~0.30 kg CO₂eq pro m³
      defaultUnit: "m³"
    },
    "VE-Wasser, technisches Wasser (H2O) (EEW) 2024": {
      factor: 0.28,          // leicht modifizierter Beispielwert
      defaultUnit: "m³"
    },
    "Wasser (H2O) (EEW)":{
        factor: 0.00033, 
        defaultUnit: "kg"
    }
  };

  function addScope3I() {
    const container = document.getElementById("scope3IFields");
    const id = "scope3I-" + Date.now();
  
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3i-date" required>
        </div>
        <div class="form-group">
          <label>Wassertyp</label>
          <select class="scope3i-type" required onchange="updateScope3IFields('${id}')">
            ${Object.keys(SCOPE3I_FACTORS).map(item =>
              `<option value="${item}">${item}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Verbrauch (m³)</label>
          <input type="number" class="scope3i-consumption" min="0" step="0.01" 
                 placeholder="z.B. 500" onchange="calculateScope3I('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3i-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂/m³)</label>
          <input type="number" class="scope3i-factor" step="0.0001" required
                 placeholder="z.B. 0.23" onchange="calculateScope3I('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3i-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3I('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
    updateScope3IFields(id);
  }
  
  function updateScope3IFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3i-type").value;
    const data = SCOPE3I_FACTORS[selected];
  
    if (data) {
      el.querySelector(".scope3i-unit").value = data.defaultUnit;
      el.querySelector(".scope3i-factor").value = data.factor;
    }
    calculateScope3I(id);
  }
  
  function calculateScope3I(id) {
    const el = document.getElementById(id);
    const consumption = parseFloat(el.querySelector(".scope3i-consumption").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3i-factor").value) || 0;
  
    const emissions = consumption * factor;
    el.querySelector(".scope3i-co2").value = emissions.toFixed(2);
  
    updateTotalScope3I();
  }
  
  function updateTotalScope3I() {
    const allFields = document.querySelectorAll("#scope3IFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3i-co2").value) || 0;
      total += val;
    });
    const totalDisplay = document.getElementById("totalScope3IEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3I-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }
  
  function removeScope3I(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3I();
  }
  
  function exportScope3IData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3IFields .dynamic-field");
  
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3i-date")?.value || "",
        waterType: field.querySelector(".scope3i-type")?.value || "",
        consumption: field.querySelector(".scope3i-consumption")?.value || "",
        unit: field.querySelector(".scope3i-unit")?.value || "",
        factor: field.querySelector(".scope3i-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3i-co2")?.value || ""
      });
    });
    return data;
  }


// Emissionsfaktoren und durchschnittliche Preise

const SCOPE3J_FACTORS = {
    // Kraftstoffe (kg CO₂e pro Einheit)
    "Benzin in L": { factor: 2.31, defaultUnit: "L" },
    "Diesel in L": { factor: 2.64, defaultUnit: "L" },
    "Erdgas (CNG) in kg": { factor: 2.75, defaultUnit: "kg" },
    
    // Fahrzeugbezogene Emissionen (kg CO₂e pro km)
    "PKW-Benzin-klein (pro km)": { factor: 0.16, defaultUnit: "km" },
    "PKW-Diesel-klein (pro km)": { factor: 0.17, defaultUnit: "km" },
    "Taxi (pro km)": { factor: 0.22, defaultUnit: "km" },
    "Motorrad (pro km)": { factor: 0.12, defaultUnit: "km" },
    
    // Öffentlicher Personennahverkehr (kg CO₂e pro Personenkilometer)
    "Busreise (pro pkm)": { factor: 0.089, defaultUnit: "pkm" },
    "Straßenbahn (pro pkm)": { factor: 0.05, defaultUnit: "pkm" },
    "Personenzug (Diesel-Nahverkehr, pro pkm)": { factor: 0.08, defaultUnit: "pkm" },
    "Personenzug (elektrisch, pro pkm)": { factor: 0.04, defaultUnit: "pkm" },
    
    // Flugreisen (kg CO₂e pro Personenkilometer)
    "Flug (Inland, pro pkm)": { factor: 0.25, defaultUnit: "pkm" },
    "Flug (international, pro pkm)": { factor: 0.20, defaultUnit: "pkm" },
    
    // Weitere Kategorien
    "Fähre (pro pkm)": { factor: 0.20, defaultUnit: "pkm" }, // Richtwert, abhängig von Schiffstyp und Auslastung
    "Carsharing (pro km)": { factor: 0.16, defaultUnit: "km" } // Annäherung an PKW-Durchschnitt
  };

  // Funktion zum Hinzufügen eines neuen Scope 3J Eintrags
function addScope3J() {
    const container = document.getElementById("scope3JFields");
    const id = "scope3J-" + Date.now();
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3j-date" required>
        </div>
        <div class="form-group">
          <label>Transport/Kraftstoff</label>
          <select class="scope3j-type" required onchange="updateScope3JFields('${id}')">
            ${Object.keys(SCOPE3J_FACTORS).map(item =>
              `<option value="${item}">${item}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge / Distanz</label>
          <input type="number" class="scope3j-amount" min="0" step="0.01" placeholder="z.B. 100" onchange="calculateScope3J('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3j-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
          <input type="number" class="scope3j-factor" step="0.0001" required placeholder="z.B. 2.31" onchange="calculateScope3J('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3j-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3J('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
    updateScope3JFields(id);
  }
  
  // Setzt Standardwerte, wenn ein Typ ausgewählt wird
  function updateScope3JFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3j-type").value;
    const data = SCOPE3J_FACTORS[selected];
    if (data) {
      el.querySelector(".scope3j-unit").value = data.defaultUnit;
      el.querySelector(".scope3j-factor").value = data.factor;
    }
    calculateScope3J(id);
  }
  
  // Berechnet die CO₂-Emissionen für einen Scope 3J Eintrag
  function calculateScope3J(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3j-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3j-factor").value) || 0;
    const emissions = amount * factor;
    el.querySelector(".scope3j-co2").value = emissions.toFixed(2);
    updateTotalScope3J();
  }
  
  // Aktualisiert die Gesamtemissionen aller Scope 3J Einträge
  function updateTotalScope3J() {
    const allFields = document.querySelectorAll("#scope3JFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3j-co2").value) || 0;
      total += val;
    });
    const totalDisplay = document.getElementById("totalScope3JEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3J-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }
  
  // Entfernt einen Scope 3J Eintrag
  function removeScope3J(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3J();
  }
  
  // Exportiert die Scope 3J Daten (z. B. für den Submit)
  function exportScope3JData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3JFields .dynamic-field");
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3j-date")?.value || "",
        transportOrFuel: field.querySelector(".scope3j-type")?.value || "",
        amount: field.querySelector(".scope3j-amount")?.value || "",
        unit: field.querySelector(".scope3j-unit")?.value || "",
        factor: field.querySelector(".scope3j-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3j-co2")?.value || ""
      });
    });
    return data;
  }

// Beispielhafte Emissionsfaktoren in kg CO₂eq pro kg Lebensmittel
const SCOPE3K_FOOD_FACTORS = {
    "Apfel (Tafeläpfel)":            { factor: 0.4,  defaultUnit: "kg" },
    "Backwaren":                     { factor: 1.1,  defaultUnit: "kg" },
    "Bananen":                       { factor: 0.9,  defaultUnit: "kg" },
    "Bohnen grün":                   { factor: 1.4,  defaultUnit: "kg" },
    "Brot (industriell)":            { factor: 1.2,  defaultUnit: "kg" },
    "Butter (Handel)":               { factor: 8.0,  defaultUnit: "kg" },
    "Eier (Handel)":                 { factor: 4.8,  defaultUnit: "kg" },
    "Fisch (Fang EU)":               { factor: 3.0,  defaultUnit: "kg" },
    "Fisch (Import EU)":             { factor: 6.0,  defaultUnit: "kg" },
    "Fisch (Konserve)":             { factor: 6.5,  defaultUnit: "kg" },
    "Gemüse (frisch - Handel)":      { factor: 0.5,  defaultUnit: "kg" },
    "Gemüse (Konserve - Handel)":    { factor: 1.0,  defaultUnit: "kg" },
    "Gemüse (Konserve - Herstellung)": { factor: 1.2, defaultUnit: "kg" },
    "Hühnfleisch (frisch - Handel)": { factor: 5.0,  defaultUnit: "kg" },
    "Hühnfleisch (Schlachthof)":     { factor: 4.5,  defaultUnit: "kg" },
    "Kartoffel (Feld)":             { factor: 0.3,  defaultUnit: "kg" },
    "Kartoffel (frisch - Handel)":   { factor: 0.5,  defaultUnit: "kg" },
    "Kartoffelstärke":              { factor: 0.8,  defaultUnit: "kg" },
    "Käse (Handel)":                { factor: 9.0,  defaultUnit: "kg" },
    "Käse (Herstellung)":           { factor: 8.5,  defaultUnit: "kg" },
    "Mais (Feld)":                  { factor: 1.0,  defaultUnit: "kg" },
    "Mais (Handel)":                { factor: 1.2,  defaultUnit: "kg" },
    "Milch (Erzeugung)":            { factor: 1.0,  defaultUnit: "kg" },
    "Milch (Handel)":               { factor: 1.2,  defaultUnit: "kg" },
    "Milch (Molkerei)":             { factor: 1.1,  defaultUnit: "kg" },
    "Milch-trocken":                { factor: 9.0,  defaultUnit: "kg" },
    "Milch-trocken-Molkerei":       { factor: 8.8,  defaultUnit: "kg" },
    "Muscheln (EU)":                { factor: 1.5,  defaultUnit: "kg" },
    "Obst (frisch - Handel)":       { factor: 0.4,  defaultUnit: "kg" },
    "Obst (Konserven - Herstellung)": { factor: 1.2, defaultUnit: "kg" },
    "Orangen":                      { factor: 0.7,  defaultUnit: "kg" },
    "Pflanzliche Öle (Handel)":     { factor: 3.0,  defaultUnit: "kg" },
    "Pommes-tiefgekühlt (Handel)":  { factor: 1.2,  defaultUnit: "kg" },
    "Pommes-tiefgekühlt (Kühllager)": { factor: 1.3, defaultUnit: "kg" },
    "Raps-Speiseöl (Handel)":       { factor: 3.2,  defaultUnit: "kg" },
    "Raps-Speiseöl (Herstellung)":  { factor: 3.0,  defaultUnit: "kg" },
    "Reis":                         { factor: 4.0,  defaultUnit: "kg" },
    "Rindfleisch - frisch":         { factor: 27.0, defaultUnit: "kg" },
    "Rindfleisch - Mastbulle":      { factor: 25.0, defaultUnit: "kg" },
    "Rindfleisch - Schlachterei":   { factor: 24.0, defaultUnit: "kg" },
    "Roggen - Feld":                { factor: 1.0,  defaultUnit: "kg" },
    "Roggen - Handel":              { factor: 1.2,  defaultUnit: "kg" },
    "Schwein - frisch (Handel)":    { factor: 6.0,  defaultUnit: "kg" },
    "Schweinefleisch (Schlachthof)": { factor: 5.5, defaultUnit: "kg" },
    "Sojaschrot (Fabrik)":          { factor: 3.0,  defaultUnit: "kg" },
    "Sojaschrot (Umschlag)":        { factor: 3.2,  defaultUnit: "kg" },
    "Tomaten - frisch (Handel)":    { factor: 1.5,  defaultUnit: "kg" },
    "Weißkohl":                     { factor: 0.4,  defaultUnit: "kg" }
  };

  // Funktion zum Hinzufügen eines neuen Lebensmittel-Eintrags
function addScope3KFood() {
    const container = document.getElementById("scope3KFoodFields");
    const id = "scope3KFood-" + Date.now();
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3kfood-date" required>
        </div>
        <div class="form-group">
          <label>Lebensmittel</label>
          <select class="scope3kfood-type" required onchange="updateScope3KFoodFields('${id}')">
            ${Object.keys(SCOPE3K_FOOD_FACTORS).map(item =>
              `<option value="${item}">${item}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge (kg)</label>
          <input type="number" class="scope3kfood-amount" min="0" step="0.01" placeholder="z.B. 5" onchange="calculateScope3KFood('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3kfood-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
          <input type="number" class="scope3kfood-factor" step="0.0001" required placeholder="z.B. 1.2" onchange="calculateScope3KFood('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3kfood-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3KFood('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
    updateScope3KFoodFields(id);
  }
  
  // Setzt Standardwerte, wenn ein Lebensmittel ausgewählt wird
  function updateScope3KFoodFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3kfood-type").value;
    const data = SCOPE3K_FOOD_FACTORS[selected];
    if (data) {
      el.querySelector(".scope3kfood-unit").value = data.defaultUnit; 
      el.querySelector(".scope3kfood-factor").value = data.factor;  
    }
    calculateScope3KFood(id);
  }
  
  // Berechnet die CO₂-Emissionen für einen Eintrag
  function calculateScope3KFood(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3kfood-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3kfood-factor").value) || 0;
    const emissions = amount * factor;
    el.querySelector(".scope3kfood-co2").value = emissions.toFixed(2);
    updateTotalScope3KFood();
  }
  
  // Aktualisiert die Gesamtemissionen aller Einträge
  function updateTotalScope3KFood() {
    const allFields = document.querySelectorAll("#scope3KFoodFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3kfood-co2").value) || 0;
      total += val;
    });
    const totalDisplay = document.getElementById("totalScope3KFoodEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt Lebensmittel-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }
  
  // Entfernt einen Eintrag
  function removeScope3KFood(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3KFood();
  }
  
  // Exportiert die Daten (z. B. für den Submit)
  function exportScope3KFoodData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3KFoodFields .dynamic-field");
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3kfood-date")?.value || "",
        foodItem: field.querySelector(".scope3kfood-type")?.value || "",
        amount: field.querySelector(".scope3kfood-amount")?.value || "",
        unit: field.querySelector(".scope3kfood-unit")?.value || "",
        factor: field.querySelector(".scope3kfood-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3kfood-co2")?.value || ""
      });
    });
    return data;
  }

  // Diese Werte sind Beispiel-Richtwerte basierend auf UBA ProBas und IPCC EFDB
// (Stand 2022/2023 – bitte prüfe die aktuellen Zahlen in den Originalquellen).
const SCOPE3L_FACTORS = {
    "Baumwollgewebe (EEW)": {
      factor: 3.2,          // kg CO₂eq pro kg (typischer Richtwert)
      defaultUnit: "kg"
    },
    "Koks": {
      factor: 2.9,          // kg CO₂eq pro kg (Richtwert aus UBA/IFEU)
      defaultUnit: "kg"
    },
    "Tiermehl": {
      factor: 2.7,          // kg CO₂eq pro kg
      defaultUnit: "kg"
    },
    "Photovoltaik-Vorkette": {
      factor: 50.0,         // kg CO₂eq pro kg PV-Modul (Herstellungsprozess)
      defaultUnit: "kg"
    },
    "Windkraft onshore": {
      factor: 40.0,         // kg CO₂eq pro kg (Herstellung von Turbinenkomponenten)
      defaultUnit: "kg"
    },
    "Windkraft offshore": {
      factor: 55.0,         // kg CO₂eq pro kg
      defaultUnit: "kg"
    },
    "Wasserkraft Laufwasser": {
      factor: 5.0,          // kg CO₂eq pro kg (sehr gering, da Wasserkraft sehr emissionsarm ist)
      defaultUnit: "kg"
    },
    "Wasserkraft Speicherwasser": {
      factor: 7.0,          // kg CO₂eq pro kg
      defaultUnit: "kg"
    },
    "Biogas (Energiepflanzen)": {
      factor: 25.0,         // kg CO₂eq pro kg (Herstellung und Transport der Energiepflanzen)
      defaultUnit: "kg"
    },
    "Organische Verbindungen (EEW)": {
      factor: 2.0,          // kg CO₂eq pro kg
      defaultUnit: "kg"
    },
    "Anorganische Verbindungen": {
      factor: 3.2,          // kg CO₂eq pro kg
      defaultUnit: "kg"
    },
    "Mineralien": {
      factor: 1.5,          // kg CO₂eq pro kg
      defaultUnit: "kg"
    },
    "Metalle/Legierungen": {
      factor: 5.5,          // kg CO₂eq pro kg (Durchschnittswert, variiert stark)
      defaultUnit: "kg"
    },
    "Kunststoffe": {
      factor: 3.8,          // kg CO₂eq pro kg (Durchschnittswert, abhängig vom Typ)
      defaultUnit: "kg"
    },
    "Holzpalette": {
      factor: 1.2,          // kg CO₂eq pro Stück (Herstellungs- und Transportfaktor)
      defaultUnit: "Stk"
    },
    "Pulverlack": {
      factor: 4.5,          // kg CO₂eq pro kg
      defaultUnit: "kg"
    }
  };

  // Funktion zum Hinzufügen eines neuen Scope 3L Eintrags
function addScope3L() {
    const container = document.getElementById("scope3LFields");
    const id = "scope3L-" + Date.now();
    const html = `
      <div class="dynamic-field" id="${id}">
        <div class="form-group">
          <label>Datum</label>
          <input type="date" class="scope3l-date" required>
        </div>
        <div class="form-group">
          <label>Material / Vorprodukt</label>
          <select class="scope3l-type" required onchange="updateScope3LFields('${id}')">
            ${Object.keys(SCOPE3L_FACTORS).map(item =>
              `<option value="${item}">${item}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Menge</label>
          <input type="number" class="scope3l-amount" min="0" step="0.01" placeholder="z.B. 100" onchange="calculateScope3L('${id}')">
        </div>
        <div class="form-group">
          <label>Einheit</label>
          <input type="text" class="scope3l-unit" required>
        </div>
        <div class="form-group">
          <label>CO₂-Faktor (kg CO₂ / Einheit)</label>
          <input type="number" class="scope3l-factor" step="0.0001" required placeholder="z.B. 3.2" onchange="calculateScope3L('${id}')">
        </div>
        <div class="form-group">
          <label>CO₂-Emissionen (kg)</label>
          <input type="number" class="scope3l-co2" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeScope3L('${id}')">Entfernen</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
    updateScope3LFields(id);
  }
  
  // Setzt Standardwerte, wenn ein Material ausgewählt wird
  function updateScope3LFields(id) {
    const el = document.getElementById(id);
    const selected = el.querySelector(".scope3l-type").value;
    const data = SCOPE3L_FACTORS[selected];
    if (data) {
      el.querySelector(".scope3l-unit").value = data.defaultUnit;
      el.querySelector(".scope3l-factor").value = data.factor;
    }
    calculateScope3L(id);
  }
  
  // Berechnet die CO₂-Emissionen für einen Scope 3L Eintrag
  function calculateScope3L(id) {
    const el = document.getElementById(id);
    const amount = parseFloat(el.querySelector(".scope3l-amount").value) || 0;
    const factor = parseFloat(el.querySelector(".scope3l-factor").value) || 0;
    const emissions = amount * factor;
    el.querySelector(".scope3l-co2").value = emissions.toFixed(2);
    updateTotalScope3L();
  }
  
  // Aktualisiert die Gesamtsumme aller Scope 3L Einträge
  function updateTotalScope3L() {
    const allFields = document.querySelectorAll("#scope3LFields .dynamic-field");
    let total = 0;
    allFields.forEach(field => {
      const val = parseFloat(field.querySelector(".scope3l-co2").value) || 0;
      total += val;
    });
    const totalDisplay = document.getElementById("totalScope3LEmissions");
    if (totalDisplay) {
      totalDisplay.textContent = "Gesamt 3L-Emissionen: " + total.toFixed(2) + " kg CO₂";
    }
  }
  
  // Entfernt einen Scope 3L Eintrag
  function removeScope3L(id) {
    document.getElementById(id)?.remove();
    updateTotalScope3L();
  }
  
  // Exportiert die Scope 3L Daten (z. B. für den Submit)
  function exportScope3LData() {
    const data = [];
    const allFields = document.querySelectorAll("#scope3LFields .dynamic-field");
    allFields.forEach(field => {
      data.push({
        date: field.querySelector(".scope3l-date")?.value || "",
        material: field.querySelector(".scope3l-type")?.value || "",
        amount: field.querySelector(".scope3l-amount")?.value || "",
        unit: field.querySelector(".scope3l-unit")?.value || "",
        factor: field.querySelector(".scope3l-factor")?.value || "",
        co2Emissions: field.querySelector(".scope3l-co2")?.value || ""
      });
    });
    return data;
  }


  function handleSubmit(event) {
    event.preventDefault(); // Standardformular-Submit verhindern
  
    // Erzeuge ein JSON-Objekt mit den gesammelten Daten
    const formData = {
      companyInfo: {
        name: document.getElementById('companyName').value,
        year: document.getElementById('year').value,
        date: new Date().toISOString()
      },
      scope1: {
        vehicles: exportVehicleData() || [],
        transport1B: exportTransport1BData() || [],
        scope1C: exportScope1CData() || [],
        scope1D: exportScope1DData() || [],
        scope1DOther: exportScope1DOtherData() || []
      },
      scope2: {
        energy: exportScope2AData() || [],
        indirectEmissions: exportIndirectEmitterData() || []
      },
      scope3: {
        businessTravel: exportScope3AData() || [],
        transport: exportScope3BData() || [],
        chemicals: exportScope3CData() || [],
        scope3D: exportScope3DData() || [],
        plastics: exportScope3EData() || [],
        metals: exportScope3FData() || [],
        minerals: exportScope3GData() || [],
        disposal: exportScope3HData() || [],
        water: exportScope3IData() || [],
        otherTransport: exportScope3JData() || [],
        food: exportScope3KFoodData() || [],
        paper: exportScope3LData() || []
      }
    };
  
    // Speichere das Ergebnis im localStorage (als String)
    localStorage.setItem('co2Data', JSON.stringify(formData));
  
    alert('Ihre CO₂-Bilanz wurde erfolgreich gespeichert!');
  
    // Weiterleitung zum Dashboard (oder eine andere Zielseite)
    window.location.href = 'Dashboard.html';
  }
