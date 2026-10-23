import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FacilityDepartment {
  key: string;
  name: string;
  count: number;
}

interface FacilityEquipment {
  departmentKey: string;
  department: string;
  title: string;
  image: string;
  detailImage: string;
  make?: string;
  model?: string;
  specifications?: string[];
  purpose?: string;
}

@Component({
  selector: 'app-facilities-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './facilities-page.html',
  styleUrl: './facilities-page.css',
})
export class FacilitiesPageComponent {
  protected readonly departments: FacilityDepartment[] = [
  {
    "key": "nst",
    "name": "Nano Science and Technology",
    "count": 13
  },
  {
    "key": "mech",
    "name": "Mechanical Engineering",
    "count": 8
  },
  {
    "key": "eee",
    "name": "Electrical and Electronics Engineering",
    "count": 1
  },
  {
    "key": "food",
    "name": "Food Technology",
    "count": 10
  },
  {
    "key": "civil",
    "name": "Civil Engineering",
    "count": 22
  },
  {
    "key": "ece",
    "name": "Electronics and Communication Engineering",
    "count": 4
  },
  {
    "key": "textile",
    "name": "Textile Technology",
    "count": 3
  },
  {
    "key": "biotech",
    "name": "Biotechnology",
    "count": 7
  }
];

  private readonly equipment: FacilityEquipment[] = [
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Atomic Force Microscopy (AFM)",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/1.jpg",
    "make": "Innova",
    "model": "SPM System",
    "specifications": [
      "Thin films, Coated materials and fabricated fibers can be analyzed. Powder sample should be pelletized.",
      "Sample size - 10 mm x 10 mm.",
      "Surface morphology, Roughness and Topographical images can be measured.",
      "Highest resolution optics deliver better data and accurate probe positioning.",
      "Full range of SPM modes provides powerful research flexibility."
    ],
    "purpose": "Surface 3D Characterization"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "UV-Visible Spectro Photo Meter (UV-Vis)",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e2.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/2.jpg",
    "make": "Aligent Tech",
    "model": "8454 G",
    "specifications": [
      "Liquid samples only analyzed. For solid sample (powders, crystals) analysis, samples must be sonicated with suitable solvent to get uniform dispersion.",
      "Tungsten and Deuterium lamps are used as light sources.",
      "Analysis can be performed from 180 nm to 780 nm ranges in electromagnetic spectrum.",
      "Final spectra data is depicted as graph between Wavelength and absorbance of nanomaterial."
    ],
    "purpose": "Optical Absorption of Nanomaterials"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Fluorescence Spectro Photo Meter (PL)",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e3.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/3.jpg",
    "make": "Aligent Tech",
    "model": "8454 G",
    "specifications": [
      "Liquid and thin film samples can be analyzed. Powder samples should be dispersed with suitable solvent.",
      "He-Cd laser (325 nm) and xenon lamps used as light sources.",
      "Excitation spectra (Photoexcitation) can be performed from 190 nm to 800 nm.",
      "Emission spectra (Luminescence) can be measured from 190 nm to 1000 nm.",
      "Final PL result gives the intensity of emitted photons as function of stimulated wavelength (nm)."
    ],
    "purpose": "Photonic Excitation and Luminiscense"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Nano Indentation",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e4.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/4.jpg",
    "make": "Hysitron",
    "model": "TI-700",
    "specifications": [
      "Nanoindentation testing is a variety of indentation hardness tests applied to small volumes.",
      "It enables quantitative mapping of nano-mechanical properties.",
      "Elastic modulus and hardness can be determined by Nanoindentation."
    ],
    "purpose": "Nano-Mechanical Property Measurement"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Fourier Transform Infrared Spectroscopy (FTIR)",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e5.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/5.jpg",
    "make": "Perkin Elemer",
    "model": "Spectrum 100 Kbr System",
    "specifications": [
      "FTIR: Powder samples can be analyzed through pelletizing with KBr.",
      "Tungsten-halogen lamps are used as light sources.",
      "FTIR Spectral Ranges: Wavenumbers 400 ? 4000 cm??, Transmittance range is 100%.",
      "ATR-FTIR: Solid samples (Thin films, crystals, Fabricated materials) can be analyzed.",
      "ATR-FTIR Spectral Ranges: Wavenumbers 600 ? 4000 cm??, Reflectance range is 100%."
    ],
    "purpose": "Functional Group Identification"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Micro Vickers Hardness Tester",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e6.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/6.jpg",
    "make": "Shimadzu",
    "model": "HMV G2IST",
    "specifications": [
      "Solid samples (Thin films, Coated plates, Fabricated fiber) can be analyzed.",
      "Minimum sample size is 10 mm x 10 mm.",
      "Maximum 2 Kg (19.61 N) can be applied to sample surface.",
      "Optical microscope images can be captured with indented marks."
    ],
    "purpose": "Micro / Macro - Mechanical Properties"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Electrochemical Workstation (Autolab)",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e7.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/7.jpg",
    "make": "Metrohm",
    "model": "TI-700",
    "specifications": [
      "Two cell and Three cell setup used for analysis.",
      "Powder samples can be either coated or pelletized.",
      "Ag/AgCl - Reference electrode, Pt - Counter electrode, Sample - Working electrode.",
      "Acid, Neutral and alkaline solutions can be used as electrolyte.",
      "Impedance, Corrosion and Charge-Discharge properties can be measured."
    ],
    "purpose": "Electrochemical Analysis"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Contact Angle Meter",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e8.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/8.jpg",
    "make": "Data Physics",
    "model": "DCAT IIEC",
    "specifications": [
      "Contact angle meters allow direct measurements of surface tension, interfacial tension and contact angles.",
      "It quantifies the wettability and surface tension of a solid surface by a liquid.",
      "Measures the relative amounts of adhesive (liquid-to-solid) and cohesive (liquid-to-liquid) forces acting on a liquid.",
      "Learning the operation mechanism of contact angle."
    ],
    "purpose": "Indication of the Wettability Nature"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Spin Coating",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e9.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/9.jpg",
    "make": "Sawatec",
    "model": "SM 180BT",
    "specifications": [
      "Uniformly dispersed or homogeneous solutions with proper viscous condition needed.",
      "Flat and clean plates (Glass plates or Metallic substrates).",
      "Substrate size 10 mm x 100 mm.",
      "RPM - 100 to 6000 rpm.",
      "Time - 30 to 300 secs."
    ],
    "purpose": "Coating Process"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Ball Mill",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e10.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/10.jpg",
    "make": "Retsch",
    "model": "PM100",
    "specifications": [
      "One grinding station with 500 mL Zirconia jar and Balls.",
      "Samples: Powders / solids with size less than 10 mm.",
      "Grinding speed: 100 to 650 rpm.",
      "Adjustable Operating conditions: Speed, Rest time, total running time.",
      "Result: Fine nanoparticles with less than 100 nm size."
    ],
    "purpose": "Synthesis Process"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Energy Dispersive X-Ray Analysis (EDAX)",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e11.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/11.jpg",
    "make": "Shimadzu",
    "model": "EDA 720",
    "specifications": [
      "Solid, powder and liquid samples can be measured in air and vacuum.",
      "Measurement of Chemical elements from Na (Sodium) to Uranium (U).",
      "Liquid nitrogen is used as a cooler for the X-ray source and Detector.",
      "Qualitative and Quantitative measurements are performed separately.",
      "Large sample holder with automatic open and close doors.",
      "The result concludes with the total number of elements present and % of elements present."
    ],
    "purpose": "Elemental Analysis"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "Tubular Furnace (Three Zone)",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e12.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/12.jpg",
    "make": "Labtherm",
    "model": "Three Zone Tubular Furnace",
    "specifications": [
      "No. of Zone: 3 Zone.",
      "Voltage: AC 220 V Single Phase, 50/60 Hz. Operating Temperature: 1100?C.",
      "Heating Zone Length: 150 MM (Each Zone). Temp. Accuracy: +/- 1?C.",
      "Heating Element: Kanthal A-1. Furnace Voltage Rating: 4.5 kW Operating.",
      "Vacuum End: Water Jacketed Stainless Steel. Vacuum Pump: Oil sealed ? in built.",
      "Vacuum Range: 760 mm Hg."
    ],
    "purpose": "Thermal Treatment in Controlled Atmosphere"
  },
  {
    "departmentKey": "nst",
    "department": "Nano Science and Technology",
    "title": "High-Pressure Autoclave Reactor",
    "image": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/e13.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/NST - EQUIPMENT FACILITIES/13.jpg",
    "make": "Techinstro",
    "model": "Trolley Model",
    "specifications": [
      "Capacity of the reactor: 500 mL.",
      "Working pressure: 350 bar.",
      "Working Temperature: 50 to 300 degree Celsius with stirring.",
      "Reactor temperature with heating facility.",
      "Trolley Model for easy mobility."
    ],
    "purpose": "Synthesis of Nanomaterials"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Pin on Disc Tribometer",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/1.jpg",
    "make": "DUCOM",
    "model": "TR-20LE",
    "specifications": [
      "Pin Diameter: 3?12 mm (various holders for pins/bars)",
      "Ball Diameter (optional): ~10 mm (if testing balls)",
      "Disc: ?165 mm ? 8 mm thick (typically hardened steel)",
      "Wear Track Diameter: ~50?140 mm",
      "Normal Load Range: 5 ? 200 N",
      "Disc Rotational Speed: 200 ? 2000 rpm",
      "Sliding Velocity: ~0.5 ? 10 m/s",
      "Frictional Force Measurement: 0 ? 200 N",
      "Wear Measurement: 0 ? 2000 ?m (typical range)",
      "Operating Standards: Tests generally in accordance with ASTM G99 (pin-on-disc)"
    ],
    "purpose": "Fundamental wear & friction characterization"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Digital display impact tester",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me2.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/2.jpg",
    "make": "Jinan",
    "model": "TE ? TEXC-22D",
    "specifications": [
      "Impact Energy Range: Typically equipped with selectable pendulum hammers (common 5.5 J, 11 J, and 22 J options; this model generally uses a 22 J hammer)",
      "Impact Speed: Approximately 3.5 m/s",
      "Pendulum Pre-elevation (Lift Angle): About 150? before release",
      "Distance from Pendulum Center to Specimen Center: Roughly 335 mm",
      "Impact Blade Geometry: Blade radius about 0.8 mm ? 0.2 mm, with standard Izod spacing from jaw",
      "Energy Loss (Friction/Windage): Very low, typically ?0.05 J for 11 J range and ?0.10 J for 22 J range"
    ],
    "purpose": "Evaluate the Izod impact strength of plastics and non-metallic materials"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Coordinate Measuring Machine",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me3.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/3.jpg",
    "make": "Mitutoyo",
    "model": "Crysta Plus M443",
    "specifications": [
      "Effective table size = 624 mm ? 805 mm",
      "Workpiece clamping via threaded insert positions (M8?1.25)",
      "Maximum workpiece height = 480 mm",
      "Maximum workpiece mass = 180 kg",
      "Z-axis balanced by counterweight (adjustable)",
      "Machine overall size = 981 mm (W) ? 1047 mm (D) ? 1967 mm (H)",
      "Weight = 410 kg (including stand)",
      "Pressure: = 0.35 MPa (Pneumatic)",
      "Consumption = 50 L/min (normal conditions)"
    ],
    "purpose": "Precise 3D measurement of part geometry"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Bottom Pouring type Stir Casting cum Squeeze Casting machine",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me4.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/4.jpg",
    "make": "VB Ceramics",
    "model": "VB Ceramics",
    "specifications": [
      "Maximum operating temperature: up to ~1000 ?C suitable for aluminium alloys (can vary with design)",
      "Power Supply: Typically 220 V AC industrial supply (single or three phase depending on configuration)",
      "Temperature Control: High-precision PID digital controllers for furnace and die heaters with ?1 ?C control accuracy"
    ],
    "purpose": "To manufacture metal matrix composites"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Computerized Variable Compression Ratio Multi Fuel Engine Test Rig",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me5.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/5.jpg",
    "make": "Kirloskar",
    "model": "TV 1",
    "specifications": [
      "Bore dia: 100mm",
      "Stroke length : 87.5 mm",
      "Swept volume : 661 cc",
      "Compression ratio : 12 to 18"
    ],
    "purpose": "Emission and combustion characteristics"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Single cylinder four stroke diesel engine test rig with EGR",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me6.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/6.jpg",
    "make": "Kirloskar",
    "model": "TV 1",
    "specifications": [
      "Maximum speed: 3000 rpm",
      "Power: 5 HP",
      "Bore: 80mm",
      "Stroke: 110 mm",
      "Cubic capacity: 553"
    ],
    "purpose": "Emission and combustion characteristics with electronically controlled hot and cold EGR system"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Filament making machine",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me7.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/7.jpg",
    "make": "RP3D",
    "model": "FMM Line - 3",
    "specifications": [
      "Max Extrusion Speed 4800mm / min",
      "Operating temperature Maximum 450",
      "Temperature control accuracy ? 1?C",
      "Accuracy of filament ?0.05@1.75mm; ?0.13mm@3.00mm",
      "Power 220W-440W",
      "Nozzle 2 (1.8mm, 3.2mm)"
    ],
    "purpose": "Produce 3D printer filament"
  },
  {
    "departmentKey": "mech",
    "department": "Mechanical Engineering",
    "title": "Inverted Trinocular Microscope",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/me8.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/8.jpg",
    "make": "dmi victory",
    "model": "Inverted type",
    "specifications": [
      "Siedentopf observation head inclined at 45?",
      "Diopter adjustment ring on ocular tube (?5)",
      "Inter-pupillary distance is from 53mm to 75mm",
      "Focusable vertical tube for Digital Microphotography",
      "Wide field 10X (paired) F.O.V. 22mm"
    ],
    "purpose": "Examine the microstructure of metals and alloys"
  },
  {
    "departmentKey": "eee",
    "department": "Electrical and Electronics Engineering",
    "title": "Thermal Image Camera",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/eee1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/9.jpg",
    "make": "FLIR",
    "model": "T- 420",
    "specifications": [
      "High Thermal Sensitivity (N.E.T.D): <0.045?C @ 30?C",
      "Wide temperature range: -4?F to 1200?F (-20?C to 650?C) with ?2% or 2?C accuracy",
      "Focal Plane Array detector with 320 x 240 pixels infrared resolution (76,800 pixels)",
      "Measurement modes: Spot (up to 5), Area (up to 5), Isotherm, Hot/Cold, Delta T",
      "Manual/Automatic focus camera with laser pointer, 3.5\" multifunction Touch Screen LCD display and 120? swivel lens"
    ],
    "purpose": "To measure and visualize temperature variations of objects and surfaces for research, analysis, and fault detection"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "PC Based Double Beam UV-Spectrophotometer",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/10.jpg",
    "make": "Systronics",
    "model": "2202",
    "specifications": [
      "Double beam optical system",
      "Wavelength range: 190?1100 nm",
      "1 nm spectral bandwidth",
      "High wavelength accuracy",
      "PC-based operation with analysis software"
    ],
    "purpose": "Used for quantitative analysis of food components such as proteins, sugars, preservatives, color compounds, and DNA in quality control laboratories"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Visual Colorimeter",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft2.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/11.jpg",
    "make": "LABMAN",
    "model": "LMCR 80F",
    "specifications": [
      "Measures absorbance and transmittance",
      "Optical filter-based wavelength selection",
      "Digital LCD display",
      "Compact bench-top design",
      "Operates on 220V AC supply"
    ],
    "purpose": "Used for measuring color intensity and concentration of food and beverage samples in laboratory analysis"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Real Time PCR Machine",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft3.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/12.jpg",
    "make": "Bio-Rad",
    "model": "CFX Opus 96",
    "specifications": [
      "96-well real-time PCR system",
      "Multiplex detection (up to 5 targets)",
      "Temperature accuracy ?0.2?C",
      "Fast thermal cycling system",
      "Fluorescence detection with data analysis software"
    ],
    "purpose": "Used for rapid detection and quantification of food pathogens, GMOs, and adulterants through DNA/RNA amplification"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Deep Freezer",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft4.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/13.jpg",
    "make": "Blue Star",
    "model": "CF3-300MEW",
    "specifications": [
      "Capacity: ~300 litres",
      "Temperature range ?20?C to ?40?C",
      "Horizontal chest-type design",
      "Digital temperature controller",
      "CFC-free refrigeration system"
    ],
    "purpose": "Used for frozen storage of food samples, dairy products, and research materials at low temperatures"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Brookfield Viscometer",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft5.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/14.jpg",
    "make": "Brookfield",
    "model": "Not specified",
    "specifications": [
      "Rotational spindle system",
      "Wide viscosity measurement range",
      "Variable speed control",
      "Digital display",
      "High repeatability and accuracy"
    ],
    "purpose": "Used for measuring viscosity and flow properties of liquid and semi-solid food products"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Commercial Bakery Oven",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft6.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/15.jpg",
    "make": "Sri Sakthi Kitchen Equipments",
    "model": "SSE-2D",
    "specifications": [
      "Double deck electric oven with independent top and bottom heating controls",
      "Temperature range up to 300?C",
      "Separate thermostatic control for each deck",
      "Stone/heavy-duty deck plate for uniform heat distribution",
      "Stainless steel exterior with digital timer control"
    ],
    "purpose": "Used for baking bread, cakes, biscuits, and other bakery products under controlled deck heating conditions"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Milk Analyzer",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft7.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/16.jpg",
    "make": "Ekomilk",
    "model": "Ekomilk Ultra",
    "specifications": [
      "Measures fat, SNF, protein, lactose, and density",
      "Ultrasonic measurement principle",
      "Test time: 30?40 seconds",
      "LCD display with automatic calibration",
      "Requires ~20 ml sample volume"
    ],
    "purpose": "Used for rapid analysis of milk composition and quality parameters in dairy processing units"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Unibloc Moisture Analyzer",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft8.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/17.jpg",
    "make": "Shimadzu",
    "model": "MOC63U",
    "specifications": [
      "Halogen heating system",
      "Temperature range 50?C?200?C",
      "High-precision weighing system",
      "Real-time moisture percentage display",
      "Rapid loss-on-drying method"
    ],
    "purpose": "Used for rapid determination of moisture content in food grains, powders, and processed food products"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Freeze Dryer",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft9.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/18.jpg",
    "make": "Lark Innovative Fine Teknowledge",
    "model": "Penguin Classic",
    "specifications": [
      "Condenser temperature up to ?50?C/?80?C",
      "Vacuum pump system",
      "Multi-tray drying chamber",
      "Digital touchscreen control panel",
      "Data logging and safety alarm system"
    ],
    "purpose": "Used for dehydration and long-term preservation of food products and biological samples by freeze-drying"
  },
  {
    "departmentKey": "food",
    "department": "Food Technology",
    "title": "Ball Mill",
    "image": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/ft10.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/MECH, EEE, FT - EQUIPMENT FACILITIES/19.jpg",
    "make": "Secoa India",
    "model": "Not specified",
    "specifications": [
      "Rotating cylindrical grinding chamber",
      "Suitable for dry and wet grinding",
      "Adjustable speed operation",
      "Operates on 220V supply",
      "Produces uniform fine powder"
    ],
    "purpose": "Used for grinding and size reduction of food grains, spices, and powders for laboratory analysis and product development"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Digital Direct Shear Test Apparatus",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/1.jpg",
    "make": "LELE",
    "model": "LELE-DSA-A",
    "specifications": [
      "Type of shear: Direct / Residual measurement",
      "Operation: Motorized with selectable strain rates (0.0002 to 1.25 mm/min)",
      "Specimen size: 60 ? 60 ? 25 mm",
      "Proving ring capacity: 2 kN with dial gauge (0-25 mm ? 0.01 mm)"
    ],
    "purpose": "Shear strength parameters of soil"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "California Bearing Ratio Test Apparatus",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c2.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/2.jpg",
    "make": "LELE",
    "model": "LELE-CBR",
    "specifications": [
      "Motorized load frame, 50 kN capacity with constant penetration rate of 1.25 mm/min",
      "CBR mould: 150 mm diameter ? 175 mm height with extension collar and perforated base plate",
      "Penetration piston: 50 mm diameter with adjustable bracket",
      "Proving ring: 50 kN capacity with dial gauge (0.01 mm ? 25 mm travel)"
    ],
    "purpose": "Bearing capacity of subgrade soil"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Unconfined Compression Testing Machine",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c3.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/3.jpg",
    "make": "LELE",
    "model": "LELE-UCC-50",
    "specifications": [
      "Load Frame, Motorized three speed 50 kN",
      "Plain Platen with Adapter and Steel Ball",
      "High Sensitivity Proving Ring Capacity 2 kN",
      "Dial Gauge 25 mm travel, 0.01 mm least count",
      "Split Mould 38 mm dia x 76 mm long"
    ],
    "purpose": "Unconfined compressive strength"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Sieve Shaker ? Gyratory With Digital Timer",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c4.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/4.jpg",
    "make": "LELE",
    "model": "LELE-SS-G",
    "specifications": [
      "Capacity: Accommodates 6 sieves + lid and pan set",
      "Tapping action: 85?90 tappings per minute",
      "Digital timer: Pre-settable, 0?99 minutes range",
      "Power supply: 220/230 V, 50 Hz, single phase A.C., 1/4 HP motor"
    ],
    "purpose": "Particle size analysis of soil & fine aggregate"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Three Gang Consolidation Test",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c5.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/5.jpg",
    "make": "LELE",
    "model": "LELE-CTA-3G",
    "specifications": [
      "Fixed ring type consolidometer cell for 60 mm dia ? 20 mm thick specimen",
      "Suitable for specimen sizes ranging from 50 mm to 100 mm diameter",
      "Loading capacity up to 20 kg/cm? with standard and additional weight set",
      "Dial gauge measurement: 25 mm travel ? 0.002 mm least count"
    ],
    "purpose": "Consolidation characteristics and settlement of soil"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Infra-Red Moisture Meter",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c6.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/6.jpg",
    "make": "LELE",
    "model": "LELE-IRMM-G",
    "specifications": [
      "Capacity: Approximately 5 g sample with 10 mg sensitivity",
      "Moisture range: 0?100% (wet weight basis)",
      "Reading accuracy: ?0.2% with 0.2% graduations (estimated to 0.1%)",
      "Power supply: 220 V, 50 Hz, single phase A.C."
    ],
    "purpose": "Moisture content of soil samples"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Los Angeles Abrasion Testing Machine",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c7.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/7.jpg",
    "make": "LELE",
    "model": "LELE-LAATM",
    "specifications": [
      "Hollow steel drum mounted on ball bearings with internal detachable shelf",
      "Rotational speed: 30?33 rpm through heavy-duty reduction gear",
      "Abrasive charge: Set of 12 hardened steel balls, 48 mm diameter",
      "Power supply: 415 V, 3 Phase, 50 Hz A.C."
    ],
    "purpose": "Abrasion resistance of coarse aggregates"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Digital Rebound Hammer",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c8.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/8.jpg",
    "make": "AIMIL",
    "model": "AIM-388 - DG",
    "specifications": [
      "Impact energy: 2.207 Nm (for standard concrete testing)",
      "Measuring range: 10?100 N/mm? (approx.)",
      "Digital display with automatic data storage",
      "Lightweight, portable with built-in calibration facility"
    ],
    "purpose": "Non-destructive testing of concrete"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Ultrasonic Pulse Velocity Test Apparatus",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c9.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/9.jpg",
    "make": "PROCEQ",
    "model": "Pundit PL-200",
    "specifications": [
      "Pulse velocity measurement range: 0.5?15 km/s",
      "Transducer frequency: 20?150 kHz",
      "Digital display with time resolution up to 0.1 ?s",
      "Rechargeable battery operated portable unit"
    ],
    "purpose": "Identification of internal defects in concrete"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Concrete Core Cutter",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c10.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/10.jpg",
    "make": "HILTI",
    "model": "DD-120",
    "specifications": [
      "Internal diameter: 100 mm (standard size)",
      "Height: 130 mm (standard)",
      "Made of seamless steel with sharp cutting edge",
      "Capacity: Approximately 1000 cm? volume"
    ],
    "purpose": "Core sampling of concrete and road pavement"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Total Station",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c11.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/11.jpg",
    "make": "LEICA",
    "model": "PS-02",
    "specifications": [
      "Angular accuracy: 1\" to 5\"",
      "Distance measurement range: Up to 3?5 km (with prism)",
      "Electronic distance measurement (EDM) with laser technology",
      "Internal memory with USB/Bluetooth data transfer"
    ],
    "purpose": "Precise surveying and layout measurements"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Differential Global Positioning System (DGPS)",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c12.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/12.jpg",
    "make": "STERLING NAVIGATION",
    "model": "E300 Pro",
    "specifications": [
      "Positioning accuracy: Up to ?10 mm + 1 ppm (RTK mode)",
      "Multi-constellation support (GPS, GLONASS, etc.)",
      "Dual-frequency GNSS receiver",
      "Data logging with controller and wireless communication support"
    ],
    "purpose": "High-accuracy geospatial positioning data"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Universal Testing Machine 100 T",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c13.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/13.jpg",
    "make": "EIE",
    "model": "EIE MT-DC 1000SC",
    "specifications": [
      "Load capacity: 1000 kN with 0.01 kN load resolution",
      "Control range: 0?80 mm/min with displacement resolution of 0.1 mm",
      "Modes of operation: Displacement rate, load rate and strain rate control",
      "Clearances: Vertical 1000 mm, horizontal 750 mm, tensile 50?1000 mm, compression 0?900 mm (Stroke length: 250 mm)"
    ],
    "purpose": "Compressive, tensile, and flexural strength of materials"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Servo Controlled Compression Testing Machine 300 T",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c14.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/14.jpg",
    "make": "EIE",
    "model": "TM-042 - D.3000.1",
    "specifications": [
      "Load capacity: 3000 kN with 0.1 kN least count",
      "Rate of loading: 0.5 kN to 20 kN/sec",
      "Piston diameter: 300 mm with 50 mm stroke length",
      "7? touch screen display with USB connectivity and software support"
    ],
    "purpose": "Compressive strength of concrete and other blocks"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Loading frame with Servo Controlled Hydraulic Actuator 100T",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c15.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/15.jpg",
    "make": "LELE",
    "model": "SHA-100T",
    "specifications": [
      "Load capacity: 1000 kN with ?1% load accuracy and 150% safe overload capacity",
      "Stroke length: 250 mm (?100 mm) with LVDT stroke control (200 mm total)",
      "Double-ended, double-acting equal-area servo actuator with swivel base (both sides)",
      "PID controlled system with application software for amplitude, frequency, cycles and graphical display (Max. speed: 100 mm/sec)"
    ],
    "purpose": "Controlled static and dynamic loading for structural elements"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Universal Testing Machine - Three Load Cells - Servo Controlled System",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c16.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/16.jpg",
    "make": "LELE",
    "model": "EIE-2505226",
    "specifications": [
      "Equipped with three calibrated load cells with one-touch selection",
      "Servo motor-driven system with PLC & touch screen HMI for automatic load/strain rate control (0.01 mm/min to 500 mm/min)",
      "Cross-head automatic movement with overload, extension protection and emergency stop facility",
      "PC-based software with RS-232 interface for data acquisition and export to Excel, including auto stop/return and proximity-based extension indication"
    ],
    "purpose": "Tensile properties of geosynthetics"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Large Pull Out Tester 100 kN",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c17.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/17.jpg",
    "make": "LELE",
    "model": "LELE-23",
    "specifications": [
      "Normal load capacity: 250 kN and pull-out force capacity: 100 kN",
      "Displacement rate: 0?10 mm/min with 16-channel data acquisition system",
      "Test box size: 1000 mm ? 1000 mm ? 1000 mm",
      "Load cells: 250 kN & 100 kN with inclined loading facility (0??30?)"
    ],
    "purpose": "Pull-out resistance of geosynthetics"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "UV Accelerated Weathering Tester",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c18.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/18.jpg",
    "make": "QUV",
    "model": "QUVSPRAY 230G4",
    "specifications": [
      "Light source: UVA-340 and UVB-313 lamps with UV radiation, heat and water exposure",
      "Temperature range: RT+10?C to 70?C with ?0.5?C fluctuation and 0.1?C resolution",
      "Humidity control: ?93% RH with spray function and water-level display with adjuster",
      "Specimen distance: Adjustable from 100 mm to 350 mm (Chamber size: 1300 ? 1560 ? 600 mm)"
    ],
    "purpose": "Durability of materials under simulated UV exposure"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Geotextile Permeameter",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c19.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/19.jpg",
    "make": "AIMIL",
    "model": "AIM-254",
    "specifications": [
      "Integrated water pump mounted on main frame with bolted arrangement",
      "De-airing system for removal of entrapped air during testing",
      "Operates on single phase, 220 V, 50 Hz power supply",
      "Rigid structural frame for stable permeability testing setup"
    ],
    "purpose": "Permeability characteristics of geotextiles"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Hydro Dynamic Sieve for Geotextile",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c20.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/20.jpg",
    "make": "LELE",
    "model": "Not Specified",
    "specifications": [
      "Motorized double drum arrangement (14 cm & 7 cm diameter)",
      "Six variable speeds ranging from 5 rpm to 60 rpm with RPM indicator",
      "16 numbers of 4 mm diameter rods for uniform agitation",
      "Supplied with graded glass beads (1 mm to 75 micron range) and sieve set for fabric testing"
    ],
    "purpose": "Apparent opening size (AOS) under dynamic water flow"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "Gradient Ratio Test Apparatus",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c21.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/21.jpg",
    "make": "LELE",
    "model": "LELE-GRTA",
    "specifications": [
      "Permeameter cylinder with 100 mm internal diameter",
      "Multiple pressure tapping points at specific intervals",
      "Constant head tank with adjustable overflow",
      "Equipped with stand and manometer tubes for head loss measurement"
    ],
    "purpose": "Evaluate the clogging potential of geotextiles"
  },
  {
    "departmentKey": "civil",
    "department": "Civil Engineering",
    "title": "In-Plane Permeability Test Apparatus",
    "image": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/c22.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/CVIL - EQUIPMENT FACILITIES/22.jpg",
    "make": "LELE",
    "model": "LELE-IPPT",
    "specifications": [
      "Specimen size: 300 mm x 300 mm (standard)",
      "Normal compressive stress application via hydraulic or pneumatic system",
      "Parallel flow measurement under varied hydraulic gradients",
      "Stainless steel testing cell with high-precision flow control valves"
    ],
    "purpose": "Determine the transmissivity of geosynthetics"
  },
  {
    "departmentKey": "ece",
    "department": "Electronics and Communication Engineering",
    "title": "Zedboard",
    "image": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/ece1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/1.jpg",
    "make": "AVNET",
    "model": "zynq-7000",
    "specifications": [
      "512 MB DDR3",
      "256 Mb Quad-SPI Flash",
      "Funding Agency: UGC",
      "Year of Installation: 2016",
      "Current Status: Active"
    ],
    "purpose": "System on Chip application development"
  },
  {
    "departmentKey": "ece",
    "department": "Electronics and Communication Engineering",
    "title": "Altium Nano Board 3000",
    "image": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/ece2.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/2.jpg",
    "make": "Altium",
    "model": "Nano Board 3000",
    "specifications": [
      "NanoBoard 3000XN ? with fixed Xilinx Spartan-3AN device (XC3S1400AN-4FGG676C)",
      "Funding Agency: DBT - STAR",
      "Year of Installation: 2016",
      "Current Status: Active"
    ],
    "purpose": "EDA software and hardware package for PCB, FPGA and embedded software design, associated library and release management automation"
  },
  {
    "departmentKey": "ece",
    "department": "Electronics and Communication Engineering",
    "title": "GPU System",
    "image": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/ece3.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/3.jpg",
    "make": "NVIDIA",
    "model": "RTX2080",
    "specifications": [
      "Intel 9th Gen i9-9900",
      "RAM: 32GB DDR4",
      "HDD: 1TB, SSD: 500GB",
      "Graphics: RTX2080",
      "Funding Agency: AICTE - RPS",
      "Year of Installation: 2019",
      "Current Status: Active"
    ],
    "purpose": "Deep learning model training and deployment"
  },
  {
    "departmentKey": "ece",
    "department": "Electronics and Communication Engineering",
    "title": "Dell Power Edge T430",
    "image": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/ece4.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/ECE - EQUIPMENT FACILITIES/4.jpg",
    "make": "DELL",
    "model": "Power Edge T430Force",
    "specifications": [
      "Intel Xeon processor E5-2600 v4",
      "RAM: 16GB DIMM",
      "HDD: 1TB",
      "Funding Agency: DBT",
      "Year of Installation: 2017",
      "Current Status: Active"
    ],
    "purpose": "Deep learning model training and deployment"
  },
  {
    "departmentKey": "textile",
    "department": "Textile Technology",
    "title": "Scanning Electron Microscope [ SEM + EDAX ]",
    "image": "/legacy/Facilities/Sample/Facilities/TEXTILE - EQUIPMENT FACILITIES  (1)/txt1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/TEXTILE - EQUIPMENT FACILITIES  (1)/Coxem.jpg",
    "make": "COXEM",
    "model": "CX 200",
    "specifications": [
      "Magnification range: 10X to 3,00,000X",
      "Resolution: up to 1?5 nm for detailed surface imaging",
      "Accelerating Voltage: 1?30 kV adjustable",
      "Integrated EDAX for elemental composition analysis",
      "Operates under high vacuum with digital image acquisition system"
    ],
    "purpose": "Surface Morphology Analysis"
  },
  {
    "departmentKey": "textile",
    "department": "Textile Technology",
    "title": "Differential Scanning Calorimeter ( DSC )",
    "image": "/legacy/Facilities/Sample/Facilities/TEXTILE - EQUIPMENT FACILITIES  (1)/txt2.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/TEXTILE - EQUIPMENT FACILITIES  (1)/DSC.jpg",
    "make": "PerkinElmer",
    "model": "DSC 6000",
    "specifications": [
      "Temperature range: ?50?C to 600?C",
      "Temperature accuracy: ?0.1?C with high precision",
      "Heating rate: 0.1?100?C per minute programmable",
      "High sensitivity for melting and glass transition detection",
      "Operates under nitrogen or air atmosphere with 1?20 mg sample size"
    ],
    "purpose": "Thermal Transition Analysis"
  },
  {
    "departmentKey": "textile",
    "department": "Textile Technology",
    "title": "Thermogravimetric Analyzer ( TGA )",
    "image": "/legacy/Facilities/Sample/Facilities/TEXTILE - EQUIPMENT FACILITIES  (1)/txt3.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/TEXTILE - EQUIPMENT FACILITIES  (1)/Perkin Elmer.jpg",
    "make": "PerkinElmer",
    "model": "TGA 4000",
    "specifications": [
      "Temperature range: Ambient to 1050?C or higher",
      "Temperature accuracy: ?1?C with precise control",
      "Heating rate: 0.1?100?C per minute programmable",
      "Microbalance sensitivity up to 0.1 ?g for weight loss measurement",
      "Operates under nitrogen, air or oxygen atmospheres for thermal stability analysis"
    ],
    "purpose": "Thermal Stability Analysis"
  },
  {
    "departmentKey": "biotech",
    "department": "Biotechnology",
    "title": "Lyophilizer",
    "image": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/bt1.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/1.jpg",
    "make": "LARK",
    "model": "CL-52",
    "specifications": [
      "Designed for freeze-drying of biological samples, pharmaceuticals, and temperature-sensitive materials.",
      "Samples are first frozen and then subjected to vacuum sublimation to remove water content.",
      "Operates under low temperature and high vacuum conditions to preserve sample structure and activity.",
      "Equipped with condenser systems to trap sublimated moisture during the drying process.",
      "Ensures long-term storage stability of biological materials."
    ],
    "purpose": "Sample freeze drying"
  },
  {
    "departmentKey": "biotech",
    "department": "Biotechnology",
    "title": "Fluorescent Microplate Reader",
    "image": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/bt2.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/2.jpg",
    "make": "Biotek",
    "model": "Synergy HTX",
    "specifications": [
      "Designed for detection and quantification of fluorescence signals in microplate-based assays.",
      "Compatible with standard microplates (96-well, 384-well formats).",
      "Uses high-intensity Xenon flash lamp or LED as excitation light source.",
      "Excitation and emission wavelength ranges typically between 200 nm ? 850 nm depending on filters/monochromators.",
      "Supports temperature control and orbital shaking for enhanced assay performance."
    ],
    "purpose": "Fluorescence signal detection"
  },
  {
    "departmentKey": "biotech",
    "department": "Biotechnology",
    "title": "Biochemical Analyser",
    "image": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/bt3.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/3.jpg",
    "make": "Mindray",
    "model": "BS120",
    "specifications": [
      "Designed for automated quantitative analysis of biochemical parameters in serum, plasma, or urine samples.",
      "Uses photometric measurement principles including absorbance, turbidimetry, and colorimetry.",
      "Equipped with multiple wavelength filters typically ranging from 340 nm to 800 nm.",
      "Capable of performing routine biochemical tests such as glucose, cholesterol, enzymes, proteins, and electrolytes."
    ],
    "purpose": "Biochemical parameter analysis"
  },
  {
    "departmentKey": "biotech",
    "department": "Biotechnology",
    "title": "HPTLC Photo Documentation System",
    "image": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/bt4.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/4.jpg",
    "make": "Aetron Elite",
    "model": "Mini Luminaries",
    "specifications": [
      "Designed for documentation and analysis of chromatographic plates used in HPTLC applications.",
      "Compatible with HPTLC plates under UV (254 nm, 366 nm) and visible light illumination.",
      "Equipped with high-resolution CCD/CMOS digital camera for capturing chromatographic images.",
      "Includes UV lamps and white light sources for detection of fluorescent and non-fluorescent compounds.",
      "Supports image acquisition, densitometric analysis, and band quantification using dedicated software."
    ],
    "purpose": "Chromatogram image documentation"
  },
  {
    "departmentKey": "biotech",
    "department": "Biotechnology",
    "title": "UV Spectrophotometer",
    "image": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/bt5.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/5.jpg",
    "make": "Hitachi",
    "model": "MU-2900 2PI- 0003",
    "specifications": [
      "Liquid samples are primarily analyzed; for solid samples, suitable solvent extraction is required to obtain clear solutions.",
      "Deuterium and Tungsten lamps are used as light sources for UV and visible regions.",
      "Analysis can be performed within a wavelength range of 190 nm to 1100 nm in the electromagnetic spectrum.",
      "Operates based on absorbance and transmittance measurement principles.",
      "Suitable for quantitative analysis of nucleic acids, proteins, and chemical compounds."
    ],
    "purpose": "Absorbance measurement analysis"
  },
  {
    "departmentKey": "biotech",
    "department": "Biotechnology",
    "title": "Hematology Analyser",
    "image": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/bt6.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/6.jpg",
    "make": "Mindray",
    "model": "BC2800",
    "specifications": [
      "Designed for automated analysis of blood samples for hematological parameters.",
      "Requires whole blood samples collected in EDTA anticoagulant tubes.",
      "Operates using electrical impedance, flow cytometry, and colorimetric methods for cell counting and hemoglobin measurement.",
      "Capable of measuring parameters such as RBC, WBC, Platelets, Hemoglobin, Hematocrit, and differential leukocyte counts."
    ],
    "purpose": "Blood cell analysis"
  },
  {
    "departmentKey": "biotech",
    "department": "Biotechnology",
    "title": "High-Performance Liquid Chromatography (HPLC)",
    "image": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/bt7.png",
    "detailImage": "/legacy/Facilities/Sample/Facilities/BT - EQUIPMENT FACILITIES/7.jpg",
    "make": "Agilen",
    "model": "LC1220",
    "specifications": [
      "Designed for separation, identification, and quantification of chemical compounds in liquid samples.",
      "Samples must be dissolved in suitable solvents and filtered before injection.",
      "Consists of major components including solvent reservoir, pump, injector, column, detector, and data system.",
      "Operates at high pressures to push mobile phase through the chromatographic column.",
      "Suitable for pharmaceutical, biochemical, and environmental sample analysis."
    ],
    "purpose": "Compound separation analysis"
  }
];

  protected activeDepartment = 'all';
  protected selectedEquipment: FacilityEquipment | null = null;
  protected readonly pageUpdated = 'Dec 22nd, 2025';

  protected get visibleDepartments(): FacilityDepartment[] {
    if (this.activeDepartment === 'all') {
      return this.departments;
    }

    return this.departments.filter((department) => department.key === this.activeDepartment);
  }

  protected equipmentFor(department: FacilityDepartment): FacilityEquipment[] {
    return this.equipment.filter((equipment) => equipment.departmentKey === department.key);
  }

  protected setDepartment(key: string): void {
    this.activeDepartment = key;
  }

  protected onDepartmentChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      this.setDepartment(target.value);
    }
  }

  protected get totalEquipmentCount(): number {
    return this.equipment.length;
  }

  protected get currentEquipmentCount(): number {
    if (this.activeDepartment === 'all') {
      return this.equipment.length;
    }
    const dept = this.departments.find((d) => d.key === this.activeDepartment);
    return dept ? dept.count : 0;
  }

  protected openEquipment(equipment: FacilityEquipment): void {
    this.selectedEquipment = equipment;
  }

  protected closeEquipment(): void {
    this.selectedEquipment = null;
  }

  protected isGuidelinesOpen = false;
  protected isScholarsOpen = false;

  protected toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  protected toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }
}
