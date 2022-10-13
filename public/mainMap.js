// Initialize and add the map
let markerSpots = {
  0: {
    spot: { Lat: 16.89528333333333, Long: -24.992, spotName: "Laginha" },
  },
  1: {
    spot: { Lat: 0.32391666666666663, Long: 9.31125, spotName: "Gombé" },
  },
  2: {
    spot: {
      Lat: -4.773333333333333,
      Long: 11.825233333333333,
      spotName: "Le piege",
    },
  },
  3: {
    spot: { Lat: -11.226966666666666, Long: 13.83385, spotName: "Sumbe" },
  },
  4: {
    spot: {
      Lat: -9.359983333333334,
      Long: 13.152,
      spotName: "Barra da Kwanza",
    },
  },
  5: {
    spot: {
      Lat: -7.8482,
      Long: 13.100066666666667,
      spotName: "Ambriz Beach",
    },
  },
  6: {
    spot: {
      Lat: -11.317033333333333,
      Long: 13.811333333333334,
      spotName: "Quicombo",
    },
  },
  7: { spot: { Lat: -20.50335, Long: 57.4481, spotName: "Petit sancho" } },
  8: {
    spot: {
      Lat: -8.824016666666667,
      Long: 13.203033333333334,
      spotName: "Chicala",
    },
  },
  9: {
    spot: { Lat: -9.676566666666666, Long: 13.19895, spotName: "Cabo Ledo" },
  },
  10: {
    spot: {
      Lat: -9.027633333333334,
      Long: 13.001866666666666,
      spotName: "Buraco",
    },
  },
  11: {
    spot: { Lat: -0.2033333333333333, Long: 9.3054, spotName: "Ekwata" },
  },
  12: {
    spot: {
      Lat: -9.250383333333334,
      Long: 13.091933333333333,
      spotName: "Miradouro",
    },
  },
  13: {
    spot: { Lat: -23.115383333333334, Long: 43.52585, spotName: "Ifaty" },
  },
  14: { spot: { Lat: 33.5313, Long: -7.8172, spotName: "L'inter" } },
  15: { spot: { Lat: 33.6004, Long: -7.66905, spotName: "Pepsi" } },
  16: {
    spot: {
      Lat: 33.941433333333336,
      Long: -6.940266666666666,
      spotName: "Temara-Guivil",
    },
  },
  17: {
    spot: {
      Lat: 30.508933333333335,
      Long: -9.68765,
      spotName: "Devil's rock",
    },
  },
  18: {
    spot: { Lat: 5.497583333333333, Long: -0.35775, spotName: "Kokrobite" },
  },
  19: {
    spot: {
      Lat: 33.477266666666665,
      Long: -7.844233333333333,
      spotName: "Bouznika",
    },
  },
  20: {
    spot: { Lat: 32.39896666666667, Long: -9.26075, spotName: "Lalla fatna" },
  },
  21: {
    spot: {
      Lat: -23.789433333333335,
      Long: 35.51708333333333,
      spotName: "Barra",
    },
  },
  22: {
    spot: { Lat: -18.861233333333335, Long: 49.1488, spotName: "Corre" },
  },
  23: {
    spot: {
      Lat: 0.43596666666666667,
      Long: 9.416583333333334,
      spotName: "Guegue",
    },
  },
  24: {
    spot: {
      Lat: -20.452466666666666,
      Long: 57.31021666666667,
      spotName: "One eye",
    },
  },
  25: {
    spot: {
      Lat: 30.502116666666666,
      Long: -9.684816666666666,
      spotName: "Banana Point",
    },
  },
  26: {
    spot: {
      Lat: 30.843883333333334,
      Long: -9.823983333333333,
      spotName: "La Cathedrale",
    },
  },
  27: {
    spot: { Lat: 30.506116666666667, Long: -9.6859, spotName: "14th km." },
  },
  28: {
    spot: { Lat: 31.494816666666665, Long: -9.76885, spotName: "Essaouira" },
  },
  29: { spot: { Lat: 30.54885, Long: -9.7332, spotName: "La Source" } },
  30: {
    spot: { Lat: 30.19915, Long: -9.641616666666666, spotName: "Tifnit" },
  },
  31: {
    spot: {
      Lat: -18.832866666666668,
      Long: 12.387166666666667,
      spotName: "Ovahimba Point",
    },
  },
  32: { spot: { Lat: -21.75625, Long: 13.96575, spotName: "Cape Cross" } },
  33: {
    spot: {
      Lat: -0.6220833333333334,
      Long: 8.715666666666667,
      spotName: "Palplanche",
    },
  },
  34: {
    spot: {
      Lat: 32.32188333333333,
      Long: -9.255383333333333,
      spotName: "Safi - Garden (Le Jardin)",
    },
  },
  35: {
    spot: {
      Lat: 33.86428333333333,
      Long: -7.069016666666666,
      spotName: "Skhirat",
    },
  },
  36: { spot: { Lat: 33.8695, Long: -7.05705, spotName: "Skhirat plage" } },
  37: {
    spot: {
      Lat: 30.499316666666665,
      Long: -9.6772,
      spotName: "Banana Beach",
    },
  },
  38: {
    spot: { Lat: 31.3875, Long: -9.841266666666666, spotName: "Cap sim" },
  },
  39: { spot: { Lat: -24.07225, Long: 35.4994, spotName: "Guinjata Bay" } },
  40: {
    spot: {
      Lat: -24.51745,
      Long: 35.20516666666666,
      spotName: "Ponta Zavora",
    },
  },
  41: {
    spot: {
      Lat: -4.8132,
      Long: 11.843266666666667,
      spotName: "Cote sauvage",
    },
  },
  42: {
    spot: { Lat: -0.7574500000000001, Long: 8.74905, spotName: "PG2" },
  },
  43: {
    spot: {
      Lat: 4.915583333333333,
      Long: -6.147716666666667,
      spotName: "Grand Drewin",
    },
  },
  44: {
    spot: {
      Lat: -19.988716666666665,
      Long: 57.58931666666667,
      spotName: "Tailors-point",
    },
  },
  45: { spot: { Lat: 33.8296, Long: -7.12605, spotName: "Oued Cherrat" } },
  46: {
    spot: {
      Lat: 33.715983333333334,
      Long: -7.3467666666666664,
      spotName: "Sablettes beach",
    },
  },
  47: {
    spot: {
      Lat: 30.708966666666665,
      Long: -9.858333333333333,
      spotName: "Tamri",
    },
  },
  48: {
    spot: {
      Lat: 34.25678333333333,
      Long: -6.682783333333333,
      spotName: "Mehdya Beach",
    },
  },
  49: {
    spot: {
      Lat: 16.6125,
      Long: -22.932583333333334,
      spotName: "Ponta Preta",
    },
  },
  50: {
    spot: { Lat: 4.7899666666666665, Long: -1.9459, spotName: "Dixcove" },
  },
  51: {
    spot: {
      Lat: -23.626833333333334,
      Long: 43.58546666666667,
      spotName: "Flameballs",
    },
  },
  52: {
    spot: {
      Lat: 32.739133333333335,
      Long: -9.039433333333333,
      spotName: "Oualidia",
    },
  },
  53: {
    spot: {
      Lat: 31.36478333333333,
      Long: -9.804616666666666,
      spotName: "Sidi Kaouki",
    },
  },
  54: {
    spot: {
      Lat: -24.0728,
      Long: 35.49851666666667,
      spotName: "Jangamo Beach",
    },
  },
  55: {
    spot: {
      Lat: -27.663266666666665,
      Long: 15.524833333333333,
      spotName: "Panter Head",
    },
  },
  56: {
    spot: { Lat: -22.773416666666666, Long: 14.532, spotName: "Last toilet" },
  },
  57: {
    spot: {
      Lat: 0.5366666666666667,
      Long: 9.309066666666666,
      spotName: "La ferme aux Crocos",
    },
  },
  58: {
    spot: {
      Lat: 5.418933333333333,
      Long: -0.4629333333333333,
      spotName: "Fete",
    },
  },
  59: {
    spot: {
      Lat: 5.53125,
      Long: -0.21458333333333332,
      spotName: "Labadi Beach",
    },
  },
  60: {
    spot: {
      Lat: -20.318383333333333,
      Long: 57.36751666666667,
      spotName: "Black rocks",
    },
  },
  61: {
    spot: {
      Lat: -25.02495,
      Long: 47.00568333333333,
      spotName: "Monseigneur",
    },
  },
  62: {
    spot: {
      Lat: -20.064883333333334,
      Long: 57.51906666666667,
      spotName: "Tagore",
    },
  },
  63: {
    spot: {
      Lat: 33.92228333333333,
      Long: -6.961216666666667,
      spotName: "Contrebandier",
    },
  },
  64: {
    spot: {
      Lat: 33.533883333333335,
      Long: -7.818766666666667,
      spotName: "La Bobine",
    },
  },
  65: {
    spot: { Lat: 33.71106666666667, Long: -7.3617, spotName: "Monica beach" },
  },
  66: {
    spot: { Lat: 30.4503, Long: -9.663116666666667, spotName: "Anza" },
  },
  67: {
    spot: { Lat: 30.62445, Long: -9.878283333333334, spotName: "Boilers" },
  },
  68: {
    spot: {
      Lat: 30.542316666666668,
      Long: -9.706233333333333,
      spotName: "Panorama",
    },
  },
  69: {
    spot: {
      Lat: -26.84375,
      Long: 32.89491666666667,
      spotName: "Ponta do Ouro",
    },
  },
  70: {
    spot: { Lat: -22.632433333333335, Long: 14.52335, spotName: "Pebbles" },
  },
  71: { spot: { Lat: -20.3277, Long: 57.3746, spotName: "Tamarin Bay" } },
  72: {
    spot: {
      Lat: 34.03901666666667,
      Long: -6.833233333333333,
      spotName: "Salé (Doura)",
    },
  },
  73: { spot: { Lat: 30.08075, Long: -9.67045, spotName: "Sidi Rbat" } },
  74: { spot: { Lat: -3.19785, Long: 40.1255, spotName: "Malindi bay" } },
  75: {
    spot: { Lat: -20.444066666666668, Long: 57.30795, spotName: "Le Morne" },
  },
  76: {
    spot: {
      Lat: 34.89945,
      Long: -6.288983333333333,
      spotName: "Moulay Bousselham",
    },
  },
  77: {
    spot: {
      Lat: 30.837683333333334,
      Long: -9.8192,
      spotName: "Imessouane, the bay",
    },
  },
  78: {
    spot: { Lat: 29.38675, Long: -10.174033333333334, spotName: "Sidi ifni" },
  },
  79: {
    spot: {
      Lat: -27.930716666666665,
      Long: 15.675516666666667,
      spotName: "Affenrucken point",
    },
  },
  80: {
    spot: {
      Lat: 4.808016666666667,
      Long: -1.9339833333333334,
      spotName: "Busua Beach",
    },
  },
  81: { spot: { Lat: 6.32255, Long: -10.8151, spotName: "Mamba Point" } },
  82: {
    spot: {
      Lat: -20.451333333333334,
      Long: 57.709266666666664,
      spotName: "Darne",
    },
  },
  83: {
    spot: {
      Lat: 33.476416666666665,
      Long: -7.9726333333333335,
      spotName: "Jack beach",
    },
  },
  84: {
    spot: {
      Lat: 30.542833333333334,
      Long: -9.706366666666666,
      spotName: "Mystery Point",
    },
  },
  85: {
    spot: { Lat: 31.0955, Long: -9.825116666666666, spotName: "Tafadna" },
  },
  86: {
    spot: { Lat: -22.677666666666667, Long: 14.5192, spotName: "Lockjoint" },
  },
  87: {
    spot: {
      Lat: -18.859283333333334,
      Long: 49.149683333333336,
      spotName: "Ambila Lamentsa",
    },
  },
  88: {
    spot: { Lat: -25.038766666666668, Long: 46.97865, spotName: "Libanono" },
  },
  89: {
    spot: {
      Lat: -25.424766666666667,
      Long: 44.938516666666665,
      spotName: "Lavanono",
    },
  },
  90: {
    spot: { Lat: -23.865466666666666, Long: 35.55285, spotName: "Tofinho" },
  },
  91: {
    spot: {
      Lat: -27.748033333333332,
      Long: 15.546216666666666,
      spotName: "Angras Juntas left",
    },
  },
  92: {
    spot: {
      Lat: -25.438316666666665,
      Long: 14.84115,
      spotName: "East Hill Point",
    },
  },
  93: {
    spot: { Lat: -22.845016666666666, Long: 14.53645, spotName: "Guns" },
  },
  94: {
    spot: {
      Lat: 6.739833333333333,
      Long: -11.384116666666667,
      spotName: "Robertsport",
    },
  },
  95: {
    spot: {
      Lat: -4.087366666666667,
      Long: 39.68313333333333,
      spotName: "Mombasa Channel",
    },
  },
  96: {
    spot: {
      Lat: -20.50711666666667,
      Long: 57.44935,
      spotName: "Grand Sancho",
    },
  },
  97: {
    spot: {
      Lat: 33.73233333333334,
      Long: -7.3345,
      spotName: "Oubaha   camping mimosas",
    },
  },
  98: {
    spot: {
      Lat: 30.5452,
      Long: -9.726716666666666,
      spotName: "Anchor point",
    },
  },
  99: {
    spot: { Lat: 30.5443, Long: -9.711783333333333, spotName: "Hash Point" },
  },
  100: {
    spot: { Lat: -22.144633333333335, Long: 14.286, spotName: "Henties Bay" },
  },
  101: {
    spot: {
      Lat: -9.108883333333333,
      Long: 12.999566666666666,
      spotName: "Shipwreck",
    },
  },
  102: {
    spot: {
      Lat: -8.861666666666666,
      Long: 13.156133333333333,
      spotName: "Point of mussulo",
    },
  },
  103: {
    spot: { Lat: 5.12565, Long: -3.2908333333333335, spotName: "Assinie" },
  },
  104: {
    spot: {
      Lat: -26.944966666666666,
      Long: 15.22965,
      spotName: "Elizabeth Bay",
    },
  },
  105: {
    spot: { Lat: -0.62735, Long: 8.705633333333333, spotName: "Cap Lopez" },
  },
  106: { spot: { Lat: 4.85815, Long: -2.2458, spotName: "Axim" } },
  107: {
    spot: {
      Lat: -25.05325,
      Long: 46.999516666666665,
      spotName: "Vinanibe lake",
    },
  },
  108: {
    spot: { Lat: 30.495233333333335, Long: -9.67815, spotName: "K12" },
  },
  109: {
    spot: { Lat: 30.54756666666667, Long: -9.74255, spotName: "Killer" },
  },
  110: {
    spot: {
      Lat: -26.134866666666667,
      Long: 14.9439,
      spotName: "Hottentot Bay",
    },
  },
  111: {
    spot: {
      Lat: 6.4021333333333335,
      Long: 3.3947833333333333,
      spotName: "Tarkwa Bay",
    },
  },
  112: {
    spot: {
      Lat: -21.1118,
      Long: 55.25203333333333,
      spotName: "Trois Bassins Peak",
    },
  },
  113: {
    spot: {
      Lat: -22.644633333333335,
      Long: 14.52545,
      spotName: "Vineta Point",
    },
  },
  114: {
    spot: {
      Lat: -21.258133333333333,
      Long: 55.32821666666667,
      spotName: "Etang Sale Bridge - Le Tournant",
    },
  },
  115: {
    spot: {
      Lat: -21.165133333333333,
      Long: 55.284483333333334,
      spotName: "Saint Leu",
    },
  },
  116: {
    spot: {
      Lat: -21.373616666666667,
      Long: 55.587516666666666,
      spotName: "Manapany",
    },
  },
  117: {
    spot: {
      Lat: 14.754983333333334,
      Long: -17.496583333333334,
      spotName: "Le Virage",
    },
  },
  118: {
    spot: {
      Lat: 14.740533333333333,
      Long: -17.523783333333334,
      spotName: "No Return",
    },
  },
  119: {
    spot: {
      Lat: -34.34866666666667,
      Long: 18.987633333333335,
      spotName: "Kokkerot",
    },
  },
  120: {
    spot: {
      Lat: -34.23153333333333,
      Long: 18.843433333333333,
      spotName: "Koeelbay (caves)",
    },
  },
  121: {
    spot: {
      Lat: -33.89896666666667,
      Long: 18.40895,
      spotName: "Thermopylae",
    },
  },
  122: {
    spot: {
      Lat: -34.201633333333334,
      Long: 18.370533333333334,
      spotName: "Scarborough Point",
    },
  },
  123: {
    spot: { Lat: -29.8597, Long: 31.041866666666667, spotName: "New Pier" },
  },
  124: {
    spot: {
      Lat: -29.844216666666668,
      Long: 31.030716666666667,
      spotName: "North Beach",
    },
  },
  125: {
    spot: {
      Lat: -32.975433333333335,
      Long: 27.967483333333334,
      spotName: "Bonza Bay",
    },
  },
  126: {
    spot: {
      Lat: -33.80835,
      Long: 18.466616666666667,
      spotName: "Blaauwberg",
    },
  },
  127: {
    spot: {
      Lat: -33.88121666666667,
      Long: 18.485983333333333,
      spotName: "Milnerton",
    },
  },
  128: {
    spot: {
      Lat: -34.145316666666666,
      Long: 18.316266666666667,
      spotName: "Outer Kom",
    },
  },
  129: {
    spot: {
      Lat: -34.09773333333333,
      Long: 18.351283333333335,
      spotName: "The Hoek",
    },
  },
  130: { spot: { Lat: -29.2885, Long: 31.4399, spotName: "Zinkwazi" } },
  131: {
    spot: {
      Lat: -32.94083333333333,
      Long: 28.0367,
      spotName: "Gonubie Point",
    },
  },
  132: {
    spot: { Lat: -21.05575, Long: 55.2213, spotName: "Black Rocks Jetty" },
  },
  133: {
    spot: { Lat: 14.7406, Long: -17.528116666666666, spotName: "Club Med" },
  },
  134: {
    spot: {
      Lat: 14.72565,
      Long: -17.504683333333332,
      spotName: "Petites Mamelles",
    },
  },
  135: {
    spot: {
      Lat: -34.167183333333334,
      Long: 18.85525,
      spotName: "Gordon's Bay , Bikini beach",
    },
  },
  136: {
    spot: {
      Lat: -34.11233333333333,
      Long: 18.466683333333332,
      spotName: "Baileys cottage",
    },
  },
  137: {
    spot: { Lat: -34.1221, Long: 18.45645, spotName: "Dangers, reef" },
  },
  138: {
    spot: {
      Lat: -34.10985,
      Long: 18.468966666666667,
      spotName: "Muizenburg corner",
    },
  },
  139: { spot: { Lat: 14.7541, Long: -17.51725, spotName: "N'Gor right" } },
  140: { spot: { Lat: 14.71385, Long: -17.49175, spotName: "Ouakam" } },
  141: {
    spot: {
      Lat: -34.13511666666667,
      Long: 18.331366666666668,
      spotName: "Krans",
    },
  },
  142: {
    spot: { Lat: -34.14435, Long: 18.318466666666666, spotName: "Inner kom" },
  },
  143: {
    spot: {
      Lat: -32.935583333333334,
      Long: 28.036333333333335,
      spotName: "Gonubie Lefts",
    },
  },
  144: {
    spot: {
      Lat: -21.053483333333332,
      Long: 55.222516666666664,
      spotName: "Black Rocks right",
    },
  },
  145: {
    spot: {
      Lat: -21.02695,
      Long: 55.225116666666665,
      spotName: "Boucan Right",
    },
  },
  146: {
    spot: {
      Lat: -21.026083333333332,
      Long: 55.226016666666666,
      spotName: "Derrière la piscine",
    },
  },
  147: {
    spot: {
      Lat: -21.085516666666667,
      Long: 55.22235,
      spotName: "Hermitage Right",
    },
  },
  148: {
    spot: { Lat: -34.09676666666667, Long: 18.5107, spotName: "Cemetery" },
  },
  149: {
    spot: {
      Lat: -33.89098333333333,
      Long: 18.481066666666667,
      spotName: "Lagoon Mouth",
    },
  },
  150: {
    spot: { Lat: -34.2442, Long: 18.851566666666667, spotName: "Paranoia" },
  },
  151: {
    spot: {
      Lat: -29.925616666666667,
      Long: 31.019166666666667,
      spotName: "Ansteys Beach",
    },
  },
  152: {
    spot: {
      Lat: -29.72295,
      Long: 31.067666666666668,
      spotName: "Geteway Wavehouse",
    },
  },
  153: {
    spot: {
      Lat: -34.13276666666667,
      Long: 18.440716666666667,
      spotName: "Clovelly Wedge",
    },
  },
  154: {
    spot: {
      Lat: -34.12578333333333,
      Long: 18.45225,
      spotName: "Kalk Bay Reef",
    },
  },
  155: {
    spot: {
      Lat: -28.8052,
      Long: 32.09896666666667,
      spotName: "Richards Bay",
    },
  },
  156: {
    spot: {
      Lat: -21.1107,
      Long: 55.25066666666667,
      spotName: "Trois Bassins Reef",
    },
  },
  157: {
    spot: {
      Lat: -29.7273,
      Long: 31.088716666666667,
      spotName: "Umhlanga Rocks",
    },
  },
  158: {
    spot: {
      Lat: -29.866433333333333,
      Long: 31.05315,
      spotName: "Vetchies Reef",
    },
  },
  159: {
    spot: {
      Lat: -21.1128,
      Long: 55.252516666666665,
      spotName: "Trois Bassins Left",
    },
  },
  160: {
    spot: {
      Lat: -34.13228333333333,
      Long: 18.440633333333334,
      spotName: "Clovelly",
    },
  },
  161: {
    spot: {
      Lat: -34.108266666666665,
      Long: 18.351466666666667,
      spotName: "Dunes",
    },
  },
  162: {
    spot: { Lat: -33.920316666666665, Long: 18.37875, spotName: "Queens" },
  },
  163: {
    spot: {
      Lat: -30.07893333333333,
      Long: 30.872566666666668,
      spotName: "Baggies",
    },
  },
  164: {
    spot: { Lat: -29.8447, Long: 31.038466666666668, spotName: "Snake park" },
  },
  165: {
    spot: { Lat: -22.87095, Long: 14.44445, spotName: "Pelican point" },
  },
  166: {
    spot: { Lat: -21.038866666666667, Long: 55.7226, spotName: "Butor" },
  },
  167: {
    spot: {
      Lat: -21.33135,
      Long: 55.45301666666667,
      spotName: "Pointe du Diable (Evil Peak)",
    },
  },
  168: {
    spot: {
      Lat: 14.750316666666667,
      Long: -17.525416666666665,
      spotName: "La Baie des Carpes",
    },
  },
  169: {
    spot: {
      Lat: 14.734483333333333,
      Long: -17.51265,
      spotName: "Secret Spot",
    },
  },
  170: {
    spot: {
      Lat: -33.77276666666667,
      Long: 18.444333333333333,
      spotName: "3de Steen",
    },
  },
  171: {
    spot: { Lat: 6.400683333333333, Long: 3.13795, spotName: "Shipwreck" },
  },
  172: {
    spot: {
      Lat: -21.02835,
      Long: 55.224583333333335,
      spotName: "Boucan Left",
    },
  },
  173: {
    spot: { Lat: -22.6619, Long: 14.521966666666668, spotName: "Thicklip" },
  },
  174: {
    spot: {
      Lat: -21.346916666666665,
      Long: 55.47643333333333,
      spotName: "Le Jetty, St Pierre",
    },
  },
  175: {
    spot: {
      Lat: -21.155233333333335,
      Long: 55.28126666666667,
      spotName: "La Tortue (Turtle reef)",
    },
  },
  176: {
    spot: {
      Lat: -34.061766666666664,
      Long: 18.32656666666667,
      spotName: "Dungeons",
    },
  },
  177: {
    spot: { Lat: -29.67595, Long: 31.116333333333333, spotName: "Umdloti" },
  },
  178: {
    spot: {
      Lat: -22.686833333333333,
      Long: 14.51565,
      spotName: "Tiger Reef",
    },
  },
  179: {
    spot: {
      Lat: 14.751033333333334,
      Long: -17.525933333333334,
      spotName: "La gauche de loic",
    },
  },
  180: {
    spot: { Lat: -33.947, Long: 18.376383333333333, spotName: "Glen Beach" },
  },
  181: {
    spot: {
      Lat: -25.731483333333333,
      Long: 14.838066666666666,
      spotName: "Spencer Bay",
    },
  },
  182: {
    spot: {
      Lat: -21.263816666666667,
      Long: 55.32843333333334,
      spotName: "Étang sale",
    },
  },
  183: {
    spot: {
      Lat: -21.085883333333335,
      Long: 55.2231,
      spotName: "Hermitage Left",
    },
  },
  184: {
    spot: {
      Lat: 16.011966666666666,
      Long: -16.511233333333333,
      spotName: "Saint Louis",
    },
  },
  185: {
    spot: {
      Lat: -33.79226666666667,
      Long: 18.451066666666666,
      spotName: "Big Bay",
    },
  },
  186: {
    spot: {
      Lat: 14.740616666666666,
      Long: -17.521616666666667,
      spotName: "Vivier",
    },
  },
  187: {
    spot: {
      Lat: -34.181416666666664,
      Long: 18.342366666666667,
      spotName: "Crayfish Factory",
    },
  },
  188: {
    spot: {
      Lat: -33.79318333333333,
      Long: 18.361583333333332,
      spotName: "Madiba's Left",
    },
  },
  189: { spot: { Lat: -34.0066, Long: 18.34, spotName: "Llandudno" } },
  190: {
    spot: {
      Lat: -33.89833333333333,
      Long: 18.404083333333332,
      spotName: "Off The Wall",
    },
  },
  191: { spot: { Lat: -34.13615, Long: 18.32685, spotName: "Long Beach" } },
  192: {
    spot: {
      Lat: -34.1871,
      Long: 18.817866666666667,
      spotName: "Virgin Point",
    },
  },
  193: {
    spot: {
      Lat: -21.034466666666667,
      Long: 55.218066666666665,
      spotName: "Aigrettes Right",
    },
  },
  194: {
    spot: {
      Lat: -21.154333333333334,
      Long: 55.27823333333333,
      spotName: "Kelonia   la ferme corail",
    },
  },
  195: {
    spot: {
      Lat: -21.056866666666668,
      Long: 55.22131666666667,
      spotName: "Les Brisants",
    },
  },
  196: {
    spot: {
      Lat: 14.471983333333334,
      Long: -17.070516666666666,
      spotName: "Baobab",
    },
  },
  197: {
    spot: {
      Lat: 14.762433333333334,
      Long: -17.463116666666668,
      spotName: "Yoff Plage",
    },
  },
  198: {
    spot: {
      Lat: -34.103233333333336,
      Long: 18.811733333333333,
      spotName: "Strand (pipe)",
    },
  },
  199: { spot: { Lat: -34.3401, Long: 18.82825, spotName: "Pringle Bay" } },
  200: {
    spot: {
      Lat: -29.933983333333334,
      Long: 31.01406666666667,
      spotName: "Cave Rock",
    },
  },
  201: { spot: { Lat: -29.71805, Long: 31.094, spotName: "Bronze Beach" } },
  202: {
    spot: { Lat: -28.126066666666667, Long: 32.5577, spotName: "Cape Vidal" },
  },
  203: {
    spot: {
      Lat: -29.539166666666667,
      Long: 31.221,
      spotName: "Ballito - Surfers Point",
    },
  },
  204: {
    spot: {
      Lat: -21.037,
      Long: 55.216766666666665,
      spotName: "Aigrettes left",
    },
  },
  205: {
    spot: {
      Lat: -29.59401666666667,
      Long: 31.17095,
      spotName: "Tongaat - Westbrook",
    },
  },
  206: {
    spot: { Lat: -32.99636666666667, Long: 27.9533, spotName: "Nahoon Reef" },
  },
  207: {
    spot: {
      Lat: -30.27995,
      Long: 30.760316666666668,
      spotName: "Scottburgh",
    },
  },
  208: {
    spot: {
      Lat: -30.625516666666666,
      Long: 30.546266666666668,
      spotName: "Umzumbe",
    },
  },
  209: {
    spot: {
      Lat: -34.033566666666665,
      Long: 25.648116666666667,
      spotName: "Loch Ness",
    },
  },
  210: {
    spot: {
      Lat: -34.16295,
      Long: 24.8334,
      spotName: "Anne Avenue (St Francis Bay)",
    },
  },
  211: {
    spot: { Lat: 31.21215, Long: 29.915383333333335, spotName: "Shatby" },
  },
  212: {
    spot: { Lat: 31.280233333333335, Long: 30.0087, spotName: "Mandara" },
  },
  213: {
    spot: {
      Lat: -34.101933333333335,
      Long: 18.79945,
      spotName: "Blinkklip Reef",
    },
  },
  214: {
    spot: {
      Lat: -32.91031666666667,
      Long: 28.0805,
      spotName: "Yellowsands Point",
    },
  },
  215: {
    spot: {
      Lat: -34.03606666666666,
      Long: 22.764266666666668,
      spotName: "Gerickes Point (Left)",
    },
  },
  216: {
    spot: {
      Lat: -34.18751666666667,
      Long: 24.859483333333333,
      spotName: "Cape Saint Francis",
    },
  },
  217: {
    spot: {
      Lat: -32.20706666666667,
      Long: 28.949016666666665,
      spotName: "Ntlonyane",
    },
  },
  218: {
    spot: { Lat: 11.236166666666668, Long: -85.86545, spotName: "Tamarindo" },
  },
  219: {
    spot: {
      Lat: -21.1166,
      Long: 149.22488333333334,
      spotName: "South Wall Mackay Harbour",
    },
  },
  220: {
    spot: {
      Lat: -29.27235,
      Long: 16.867466666666665,
      spotName: "Port Nolloth Reef",
    },
  },
  221: {
    spot: {
      Lat: 18.406983333333333,
      Long: 109.95923333333333,
      spotName: "Ocean Bay Golf Club",
    },
  },
  222: {
    spot: {
      Lat: -33.98031666666667,
      Long: 25.663166666666665,
      spotName: "Millars Point",
    },
  },
  223: {
    spot: { Lat: -33.984, Long: 23.5631, spotName: "Nature's Valley" },
  },
  224: {
    spot: {
      Lat: -34.18096666666667,
      Long: 22.157916666666665,
      spotName: "Outer Pool",
    },
  },
  225: {
    spot: {
      Lat: -34.08605,
      Long: 22.97495,
      spotName: "Buffalo Bay beachbreak",
    },
  },
  226: {
    spot: { Lat: -6.770383333333333, Long: 39.28385, spotName: "Coco beach" },
  },
  227: {
    spot: {
      Lat: -34.355266666666665,
      Long: 18.481066666666667,
      spotName: "Dias Beach",
    },
  },
  228: {
    spot: {
      Lat: 22.477266666666665,
      Long: 114.53306666666667,
      spotName: "Xichong",
    },
  },
  229: {
    spot: {
      Lat: -33.971833333333336,
      Long: 25.64765,
      spotName: "King's Beach",
    },
  },
  230: {
    spot: { Lat: -34.0426, Long: 25.639583333333334, spotName: "Noordhoek" },
  },
  231: {
    spot: { Lat: -33.979816666666665, Long: 25.65915, spotName: "New Pier" },
  },
  232: {
    spot: {
      Lat: -34.20733333333333,
      Long: 24.836483333333334,
      spotName: "Seal Point",
    },
  },
  233: {
    spot: {
      Lat: 30.335083333333333,
      Long: -87.11486666666667,
      spotName: "17th Ave",
    },
  },
  234: { spot: { Lat: 31.24905, Long: 29.96805, spotName: "Ramadas" } },
  235: {
    spot: {
      Lat: 6.213266666666667,
      Long: -10.612566666666666,
      spotName: "Silver Beach",
    },
  },
  236: {
    spot: { Lat: 13.48295, Long: 144.75165, spotName: "Boat Basin Lefts" },
  },
  237: {
    spot: {
      Lat: -34.0366,
      Long: 25.492116666666668,
      spotName: "Doughnuts Backreef",
    },
  },
  238: {
    spot: {
      Lat: -31.987,
      Long: 29.155533333333334,
      spotName: "Coffee Bay point",
    },
  },
  239: {
    spot: {
      Lat: -6.7393833333333335,
      Long: 39.28633333333333,
      spotName: "Sea Cliff",
    },
  },
  240: { spot: { Lat: 6.24765, Long: -10.70705, spotName: "Fisherman's" } },
  241: {
    spot: {
      Lat: 13.444383333333333,
      Long: 144.64576666666667,
      spotName: "Gab Gab Beach",
    },
  },
  242: { spot: { Lat: 29.2521, Long: -13.51585, spotName: "El Pollon" } },
  243: {
    spot: {
      Lat: 34.26213333333333,
      Long: -6.6659500000000005,
      spotName: "Charatan",
    },
  },
  244: {
    spot: {
      Lat: -30.247216666666667,
      Long: 30.783366666666666,
      spotName: "Green Point",
    },
  },
  245: {
    spot: { Lat: -34.292033333333336, Long: 21.92605, spotName: "Vleesbaai" },
  },
  246: {
    spot: {
      Lat: -31.937966666666668,
      Long: 29.219683333333332,
      spotName: "Mdumbi",
    },
  },
  247: {
    spot: { Lat: 6.1166833333333335, Long: 116.10705, spotName: "Nexus" },
  },
  248: {
    spot: {
      Lat: 12.712316666666666,
      Long: 53.504783333333336,
      spotName: "qulansiyah",
    },
  },
  249: {
    spot: {
      Lat: 18.233333333333334,
      Long: 109.64638333333333,
      spotName: "JinZonglu",
    },
  },
  250: {
    spot: {
      Lat: -33.9872,
      Long: 25.674583333333334,
      spotName: "Pollock beach - pipe",
    },
  },
  251: {
    spot: {
      Lat: 36.83408333333333,
      Long: 11.117383333333333,
      spotName: "Kelibya",
    },
  },
  252: {
    spot: {
      Lat: -34.38021666666667,
      Long: 18.826233333333334,
      spotName: "Moonlight Bay",
    },
  },
  253: {
    spot: {
      Lat: 37.54173333333333,
      Long: 122.10048333333333,
      spotName: "Seal Tub Beach",
    },
  },
  254: {
    spot: {
      Lat: -31.897033333333333,
      Long: 29.248166666666666,
      spotName: "Lwandile",
    },
  },
  255: {
    spot: {
      Lat: -34.348483333333334,
      Long: 21.885233333333332,
      spotName: "Gouritsmouth",
    },
  },
  256: {
    spot: { Lat: -33.9825, Long: 25.669516666666667, spotName: "Avalanche" },
  },
  257: {
    spot: {
      Lat: -33.97801666666667,
      Long: 25.654516666666666,
      spotName: "Humewood",
    },
  },
  258: {
    spot: {
      Lat: -34.0282,
      Long: 24.930816666666665,
      spotName: "Supertubes (J-Bay)",
    },
  },
  259: {
    spot: { Lat: -34.02503333333333, Long: 24.931, spotName: "The Point" },
  },
  260: {
    spot: {
      Lat: -33.72468333333333,
      Long: 18.440016666666665,
      spotName: "Tube Wave",
    },
  },
  261: {
    spot: {
      Lat: -32.31405,
      Long: 18.328966666666666,
      spotName: "Elands Bay",
    },
  },
  262: {
    spot: {
      Lat: 16.752116666666666,
      Long: -22.9791,
      spotName: "Palmeira - ilha do sal",
    },
  },
  263: {
    spot: {
      Lat: -34.667183333333334,
      Long: 19.496433333333332,
      spotName: "Pearly Beach edit",
    },
  },
  264: { spot: { Lat: -32.084, Long: 18.31265, spotName: "Lamberts Bay" } },
  265: {
    spot: { Lat: -33.97845, Long: 25.655883333333332, spotName: "6 pillars" },
  },
  266: {
    spot: {
      Lat: -34.386516666666665,
      Long: 21.427366666666668,
      spotName: "Still Bay (Reef)",
    },
  },
  267: {
    spot: {
      Lat: -33.78381666666667,
      Long: 18.4494,
      spotName: "Horse Trails",
    },
  },
  268: {
    spot: {
      Lat: -33.603033333333336,
      Long: 26.902083333333334,
      spotName: "Port Alfred",
    },
  },
  269: {
    spot: {
      Lat: -34.17531666666667,
      Long: 24.841466666666665,
      spotName: "Bruce's Beauties",
    },
  },
  270: {
    spot: {
      Lat: 30.491466666666668,
      Long: -9.676766666666667,
      spotName: "K11",
    },
  },
  271: {
    spot: { Lat: -34.156, Long: 18.592983333333333, spotName: "Bellows" },
  },
  272: {
    spot: {
      Lat: -33.867466666666665,
      Long: 25.636183333333335,
      spotName: "The Mouth",
    },
  },
  273: {
    spot: {
      Lat: -34.05475,
      Long: 23.379716666666667,
      spotName: "Plett Wedge",
    },
  },
  274: { spot: { Lat: 23.66905, Long: 117.4562, spotName: "Dongshan Dao" } },
  275: {
    spot: {
      Lat: -30.078466666666667,
      Long: 30.873066666666666,
      spotName: "Baggies",
    },
  },
  276: {
    spot: {
      Lat: -30.820366666666665,
      Long: 30.406816666666668,
      spotName: "St Michaels",
    },
  },
  277: {
    spot: {
      Lat: -33.67178333333333,
      Long: 18.4076,
      spotName: "11th Ave Melkbos Strand",
    },
  },
  278: {
    spot: { Lat: 6.228883333333333, Long: 1.6068, spotName: "Aneho Beach" },
  },
  279: {
    spot: {
      Lat: -5.719116666666666,
      Long: 39.299816666666665,
      spotName: "Nungwi",
    },
  },
  280: {
    spot: {
      Lat: 7.9680333333333335,
      Long: 98.27703333333334,
      spotName: "leam sing",
    },
  },
  281: {
    spot: {
      Lat: -34.0078,
      Long: 22.55003333333333,
      spotName: "Victoria bay",
    },
  },
  282: {
    spot: {
      Lat: -33.608716666666666,
      Long: 18.37151666666667,
      spotName: "Gas Chambers",
    },
  },
  283: {
    spot: { Lat: 6.29035, Long: -10.788416666666667, spotName: "8th street" },
  },
  284: {
    spot: { Lat: -34.0283, Long: 25.678116666666668, spotName: "Noncom" },
  },
  285: {
    spot: {
      Lat: -33.96221666666667,
      Long: 25.645116666666667,
      spotName: "Fence",
    },
  },
  286: {
    spot: {
      Lat: -34.05831666666667,
      Long: 24.927116666666667,
      spotName: "Kitchen windows",
    },
  },
  287: {
    spot: {
      Lat: 16.863366666666668,
      Long: -24.87905,
      spotName: "Sandy Beach - Sao Vincente",
    },
  },
  288: {
    spot: { Lat: -32.703633333333336, Long: 17.96685, spotName: "Heaven" },
  },
  289: {
    spot: {
      Lat: 22.2329,
      Long: 113.95718333333333,
      spotName: "Cheung Sha Beach, Lantau",
    },
  },
  290: {
    spot: { Lat: 8.385316666666666, Long: 76.97835, spotName: "Kovalam" },
  },
  291: { spot: { Lat: 13.29715, Long: 144.6589, spotName: "Umatac Bay" } },
  292: {
    spot: {
      Lat: 22.407583333333335,
      Long: 114.37673333333333,
      spotName: "Ham Tin",
    },
  },
  293: {
    spot: {
      Lat: 22.220366666666667,
      Long: 113.88513333333333,
      spotName: "Tai Long Wan (Lantau)",
    },
  },
  294: {
    spot: { Lat: -8.66695, Long: 115.13861666666666, spotName: "Berawa" },
  },
  295: {
    spot: { Lat: -8.88355, Long: 116.45061666666666, spotName: "Ekas" },
  },
  296: {
    spot: {
      Lat: -8.675933333333333,
      Long: 115.44075,
      spotName: "Lacerations (Nusa Lembongan)",
    },
  },
  297: { spot: { Lat: 0.6008, Long: 97.8796, spotName: "Rockstar" } },
  298: {
    spot: { Lat: -8.4216, Long: 114.80466666666666, spotName: "Medewi" },
  },
  299: {
    spot: {
      Lat: -8.230983333333333,
      Long: 111.10151666666667,
      spotName: "Pacitan",
    },
  },
  300: {
    spot: { Lat: -6.61465, Long: 105.13066666666667, spotName: "Apocalypse" },
  },
  301: {
    spot: { Lat: -6.9629, Long: 106.47951666666667, spotName: "Cimaja" },
  },
  302: {
    spot: {
      Lat: -8.771333333333333,
      Long: 115.15758333333333,
      spotName: "Jimbaran Shorey",
    },
  },
  303: {
    spot: {
      Lat: -8.6388,
      Long: 115.29043333333334,
      spotName: "Padang Galak",
    },
  },
  304: {
    spot: {
      Lat: -8.360133333333334,
      Long: 116.04386666666667,
      spotName: "Gili Trawangan",
    },
  },
  305: {
    spot: {
      Lat: -8.925766666666666,
      Long: 116.35208333333334,
      spotName: "Grupuk",
    },
  },
  306: {
    spot: { Lat: -0.0659, Long: 98.25695, spotName: "Telos Island, Nias" },
  },
  307: {
    spot: { Lat: -1.83175, Long: 99.25298333333333, spotName: "Pitstops" },
  },
  308: {
    spot: { Lat: 0.8125333333333333, Long: 97.3472, spotName: "Bawa" },
  },
  309: {
    spot: {
      Lat: -5.349083333333334,
      Long: 104.03023333333333,
      spotName: "Way Jambu",
    },
  },
  310: {
    spot: {
      Lat: -5.956883333333334,
      Long: 105.85395,
      spotName: "Sanghyang Island",
    },
  },
  311: {
    spot: {
      Lat: 22.411983333333332,
      Long: 114.37935,
      spotName: "Tai Long Wan (Sai Kung)",
    },
  },
  312: {
    spot: {
      Lat: -8.651983333333334,
      Long: 115.12123333333334,
      spotName: "Pererenan",
    },
  },
  313: {
    spot: { Lat: -8.27945, Long: 111.07451666666667, spotName: "Puncher" },
  },
  314: {
    spot: {
      Lat: -1.8520833333333333,
      Long: 99.24473333333333,
      spotName: "Bankvaults",
    },
  },
  315: {
    spot: {
      Lat: -1.8994333333333333,
      Long: 99.29271666666666,
      spotName: "Kandui Left",
    },
  },
  316: {
    spot: {
      Lat: -5.3048166666666665,
      Long: 103.99186666666667,
      spotName: "Ujung Bocur",
    },
  },
  317: {
    spot: { Lat: -8.78465, Long: 118.35571666666667, spotName: "Periscopes" },
  },
  318: {
    spot: {
      Lat: -8.851483333333332,
      Long: 115.17011666666667,
      spotName: "Green ball",
    },
  },
  319: { spot: { Lat: 13.33705, Long: 144.762, spotName: "Talafofo Bay" } },
  320: {
    spot: {
      Lat: 22.332383333333333,
      Long: 114.29385,
      spotName: "Nw reef - shelter island, sai kung",
    },
  },
  321: {
    spot: {
      Lat: -8.810466666666667,
      Long: 115.0994,
      spotName: "padang padang",
    },
  },
  322: { spot: { Lat: -8.6657, Long: 115.44315, spotName: "Shipwrecks" } },
  323: {
    spot: {
      Lat: -8.788533333333334,
      Long: 115.23258333333334,
      spotName: "Sri Lanka",
    },
  },
  324: {
    spot: {
      Lat: -8.881983333333332,
      Long: 116.03626666666666,
      spotName: "Belongas",
    },
  },
  325: { spot: { Lat: -8.88775, Long: 116.1607, spotName: "Mawi" } },
  326: {
    spot: {
      Lat: -8.781733333333333,
      Long: 118.37158333333333,
      spotName: "Periscope Point",
    },
  },
  327: {
    spot: {
      Lat: -10.833483333333334,
      Long: 122.75303333333333,
      spotName: "Do'o Island",
    },
  },
  328: {
    spot: {
      Lat: -2.0658333333333334,
      Long: 99.54265,
      spotName: "Telescopes",
    },
  },
  329: {
    spot: {
      Lat: -9.954316666666667,
      Long: 119.90135,
      spotName: "Sumba - Miller's right",
    },
  },
  330: {
    spot: { Lat: 0.8673666666666667, Long: 97.33355, spotName: "Asu" },
  },
  331: {
    spot: {
      Lat: -8.826483333333334,
      Long: 118.38048333333333,
      spotName: "Lakey Peak",
    },
  },
  332: { spot: { Lat: -7.2778, Long: 106.36915, spotName: "Ombak Tujuh" } },
  333: {
    spot: {
      Lat: -8.524283333333333,
      Long: 114.98971666666667,
      spotName: "Balian",
    },
  },
  334: {
    spot: {
      Lat: -8.716366666666667,
      Long: 115.16693333333333,
      spotName: "Kuta Beach",
    },
  },
  335: {
    spot: {
      Lat: -8.918233333333333,
      Long: 116.32273333333333,
      spotName: "Tanjung A'an",
    },
  },
  336: {
    spot: { Lat: -2.1197, Long: 99.51861666666667, spotName: "Scarecrows" },
  },
  337: {
    spot: {
      Lat: -7.7482500000000005,
      Long: 108.50218333333333,
      spotName: "Batu Karas",
    },
  },
  338: {
    spot: {
      Lat: 34.3761,
      Long: 139.27663333333334,
      spotName: "Niijima - Habushiura",
    },
  },
  339: {
    spot: { Lat: -8.79225, Long: 115.11981666666667, spotName: "Balangan" },
  },
  340: {
    spot: {
      Lat: -8.67825,
      Long: 115.44121666666666,
      spotName: "Playgrounds (Nusa Lembongan)",
    },
  },
  341: {
    spot: {
      Lat: -8.890766666666666,
      Long: 116.73576666666666,
      spotName: "Benete",
    },
  },
  342: {
    spot: { Lat: -6.984366666666666, Long: 106.29555, spotName: "Sawarna" },
  },
  343: { spot: { Lat: -8.9097, Long: 116.2457, spotName: "Kuta" } },
  344: {
    spot: { Lat: -8.664183333333334, Long: 115.12625, spotName: "Canggu" },
  },
  345: {
    spot: {
      Lat: -8.424933333333334,
      Long: 114.81313333333334,
      spotName: "Pulakan (medewi) Rights",
    },
  },
  346: {
    spot: { Lat: -1.9091166666666666, Long: 99.31065, spotName: "4 Bobs" },
  },
  347: {
    spot: { Lat: -1.8145, Long: 99.26533333333333, spotName: "Beng Beng" },
  },
  348: {
    spot: { Lat: -1.9207, Long: 99.31941666666667, spotName: "Rifles" },
  },
  349: {
    spot: {
      Lat: -1.8457666666666666,
      Long: 99.25218333333333,
      spotName: "Nipussi",
    },
  },
  350: {
    spot: {
      Lat: -9.781433333333334,
      Long: 119.37306666666667,
      spotName: "Nihiwatu",
    },
  },
  351: {
    spot: {
      Lat: -5.123083333333334,
      Long: 103.84603333333334,
      spotName: "Banana Island",
    },
  },
  352: {
    spot: { Lat: -8.502933333333333, Long: 116.0448, spotName: "Senggigi" },
  },
  353: {
    spot: { Lat: -2.3756333333333335, Long: 99.85955, spotName: "HT's" },
  },
  354: {
    spot: {
      Lat: -0.9935666666666666,
      Long: 100.36135,
      spotName: "Pantai Air Manis",
    },
  },
  355: { spot: { Lat: -8.93595, Long: 116.74415, spotName: "Super Suck" } },
  356: {
    spot: { Lat: -8.8222, Long: 115.22746666666667, spotName: "Nusa dua" },
  },
  357: {
    spot: {
      Lat: -8.685583333333334,
      Long: 114.37333333333333,
      spotName: "Tiger Tracks",
    },
  },
  358: {
    spot: { Lat: -2.788733333333333, Long: 99.9919, spotName: "Macaronis" },
  },
  359: {
    spot: {
      Lat: -3.0546333333333333,
      Long: 100.17068333333333,
      spotName: "Thunders",
    },
  },
  360: {
    spot: { Lat: 0.56925, Long: 97.74656666666667, spotName: "Machines" },
  },
  361: {
    spot: {
      Lat: 22.245983333333335,
      Long: 114.24775,
      spotName: "Tai Long Wan (Hong-Kong)",
    },
  },
  362: {
    spot: {
      Lat: -8.804066666666667,
      Long: 115.11333333333333,
      spotName: "Bingin",
    },
  },
  363: {
    spot: {
      Lat: -8.59755,
      Long: 115.33908333333333,
      spotName: "Keramas Beach",
    },
  },
  364: {
    spot: {
      Lat: -8.69515,
      Long: 115.15808333333334,
      spotName: "Legian Beach",
    },
  },
  365: { spot: { Lat: -8.6915, Long: 115.2713, spotName: "Tandjungs" } },
  366: {
    spot: {
      Lat: -8.734283333333334,
      Long: 114.33973333333333,
      spotName: "Grajagan",
    },
  },
  367: {
    spot: {
      Lat: -10.893483333333334,
      Long: 122.81181666666667,
      spotName: "Roti Island - Nembrala - T Land",
    },
  },
  368: {
    spot: { Lat: 0.5645, Long: 97.72991666666667, spotName: "Lagundri" },
  },
  369: {
    spot: { Lat: -5.2366, Long: 103.90938333333334, spotName: "The Peak" },
  },
  370: {
    spot: {
      Lat: -8.971933333333334,
      Long: 116.72646666666667,
      spotName: "YO-YO'S",
    },
  },
  371: {
    spot: {
      Lat: -6.6554,
      Long: 105.17263333333334,
      spotName: "One Palm Point - Panaitan island",
    },
  },
  372: { spot: { Lat: -6.96125, Long: 106.47235, spotName: "Sunset" } },
  373: {
    spot: {
      Lat: 13.49775,
      Long: 144.76893333333334,
      spotName: "Rick's Reef",
    },
  },
  374: {
    spot: { Lat: -8.816633333333334, Long: 115.08625, spotName: "Uluwatu" },
  },
  375: {
    spot: {
      Lat: -8.750983333333334,
      Long: 115.82268333333333,
      spotName: "Desert Point (Bangko-Bangko)",
    },
  },
  376: {
    spot: {
      Lat: -8.441466666666667,
      Long: 116.03416666666666,
      spotName: "Sereweh",
    },
  },
  377: {
    spot: {
      Lat: -1.8289166666666667,
      Long: 99.25426666666667,
      spotName: "E-Bay",
    },
  },
  378: {
    spot: {
      Lat: -5.270366666666667,
      Long: 103.99873333333333,
      spotName: "Mandiri",
    },
  },
  379: {
    spot: { Lat: -7.335866666666667, Long: 106.39755, spotName: "Turtles" },
  },
  380: {
    spot: {
      Lat: 13.482666666666667,
      Long: 144.75288333333333,
      spotName: "Boat Basin Rights",
    },
  },
  381: {
    spot: {
      Lat: 12.618066666666667,
      Long: 80.19865,
      spotName: "Mahaballipuram",
    },
  },
  382: {
    spot: {
      Lat: -8.745116666666666,
      Long: 115.15031666666667,
      spotName: "Airport's",
    },
  },
  383: { spot: { Lat: -0, Long: -0, spotName: "Middles" } },
  384: {
    spot: {
      Lat: -8.740966666666667,
      Long: 115.24291666666667,
      spotName: "Serangan",
    },
  },
  385: {
    spot: {
      Lat: -8.707183333333333,
      Long: 114.37448333333333,
      spotName: "20-20s",
    },
  },
  386: {
    spot: {
      Lat: -2.3838666666666666,
      Long: 99.83756666666666,
      spotName: "Lances left",
    },
  },
  387: {
    spot: {
      Lat: -6.957766666666666,
      Long: 106.43555,
      spotName: "Karang Haji - OceanQueen Hotel",
    },
  },
  388: {
    spot: {
      Lat: -8.799083333333334,
      Long: 115.11708333333333,
      spotName: "Dreamland",
    },
  },
  389: {
    spot: {
      Lat: -8.687166666666666,
      Long: 115.15396666666666,
      spotName: "KU DE TA - Semyniak",
    },
  },
  390: { spot: { Lat: -8.80745, Long: 115.1085, spotName: "Impossibles" } },
  391: {
    spot: {
      Lat: -8.730483333333334,
      Long: 115.15588333333334,
      spotName: "Kuta Reef",
    },
  },
  392: {
    spot: {
      Lat: -8.843333333333334,
      Long: 115.10695,
      spotName: "Nyang-Nyang",
    },
  },
  393: {
    spot: {
      Lat: 0.8472833333333334,
      Long: 97.3502,
      spotName: "Hinako Islands",
    },
  },
  394: {
    spot: {
      Lat: -8.70355,
      Long: 115.44086666666666,
      spotName: "Ceningan Point",
    },
  },
  395: {
    spot: { Lat: -8.6468, Long: 115.28031666666666, spotName: "Ketewel" },
  },
  396: {
    spot: {
      Lat: -8.681633333333334,
      Long: 115.43295,
      spotName: "Mushroom beach (Nusa Lembongan)",
    },
  },
  397: {
    spot: {
      Lat: -8.669916666666667,
      Long: 115.26411666666667,
      spotName: "Sanur - Grand Hyatt",
    },
  },
  398: {
    spot: {
      Lat: -2.0183166666666668,
      Long: 99.54711666666667,
      spotName: "Icelands",
    },
  },
  399: {
    spot: {
      Lat: -5.038316666666667,
      Long: 103.76663333333333,
      spotName: "Jenny's right",
    },
  },
  400: { spot: { Lat: -8.8625, Long: 116.75555, spotName: "SCAR REEF" } },
  401: {
    spot: { Lat: 34.35595, Long: 139.2762, spotName: "Niijima - Habushiiso" },
  },
  402: { spot: { Lat: 34.6, Long: 137.2, spotName: "Akabane Long Beach" } },
  403: { spot: { Lat: 40.67155, Long: 141.43885, spotName: "Momoishi" } },
  404: {
    spot: {
      Lat: 4.124316666666667,
      Long: 103.39786666666667,
      spotName: "Cherating",
    },
  },
  405: { spot: { Lat: 4.3128, Long: 73.5838, spotName: "Honkey's" } },
  406: {
    spot: { Lat: 3.989516666666667, Long: 73.51975, spotName: "Gurus" },
  },
  407: {
    spot: {
      Lat: 4.453733333333333,
      Long: 73.71723333333334,
      spotName: "Meeru Reef",
    },
  },
  408: {
    spot: {
      Lat: 31.832566666666665,
      Long: 131.453,
      spotName: "Kizaki beach",
    },
  },
  409: {
    spot: {
      Lat: 26.386333333333333,
      Long: 128.00296666666668,
      spotName: "Ekie Island",
    },
  },
  410: {
    spot: {
      Lat: 26.730983333333334,
      Long: 128.31388333333334,
      spotName: "Aha-Yoko",
    },
  },
  411: {
    spot: {
      Lat: 33.54923333333333,
      Long: 134.31693333333334,
      spotName: "Takegashima",
    },
  },
  412: {
    spot: {
      Lat: 33.43436666666667,
      Long: 133.98196666666666,
      spotName: "Yasudagawakakou",
    },
  },
  413: {
    spot: {
      Lat: 38.259933333333336,
      Long: 141.02316666666667,
      spotName: "Sendai shinko",
    },
  },
  414: {
    spot: {
      Lat: 35.5448,
      Long: 134.21893333333333,
      spotName: "Tottori-sakyu",
    },
  },
  415: {
    spot: { Lat: 3.894, Long: 73.46593333333334, spotName: "Riptides" },
  },
  416: {
    spot: { Lat: 4.1704, Long: 73.48853333333334, spotName: "Villingili" },
  },
  417: {
    spot: {
      Lat: 1.7981666666666667,
      Long: 73.40778333333333,
      spotName: "Yin Yang",
    },
  },
  418: {
    spot: {
      Lat: 9.843683333333333,
      Long: 126.15738333333333,
      spotName: "Stimpy's",
    },
  },
  419: {
    spot: { Lat: 34.65806666666667, Long: 138.9265, spotName: "Irita Hama" },
  },
  420: { spot: { Lat: 34.958, Long: 138.6914, spotName: "Secret Spot 5" } },
  421: {
    spot: {
      Lat: 35.3048,
      Long: 139.51173333333332,
      spotName: "Shichirigahama",
    },
  },
  422: {
    spot: {
      Lat: 35.329966666666664,
      Long: 140.40046666666666,
      spotName: "Taito",
    },
  },
  423: {
    spot: {
      Lat: 32.96071666666667,
      Long: 132.99456666666666,
      spotName: "Hirano",
    },
  },
  424: {
    spot: {
      Lat: 33.53413333333334,
      Long: 133.68506666666667,
      spotName: "Monobegawakakou",
    },
  },
  425: { spot: { Lat: 32.9693, Long: 132.99885, spotName: "Futami" } },
  426: {
    spot: {
      Lat: 33.56668333333333,
      Long: 134.31066666666666,
      spotName: "Shishikui",
    },
  },
  427: {
    spot: {
      Lat: 4.3703666666666665,
      Long: 73.65508333333334,
      spotName: "Cokes",
    },
  },
  428: {
    spot: { Lat: -6.2356, Long: 105.82503333333334, spotName: "Pasauran" },
  },
  429: { spot: { Lat: 35.15815, Long: 129.16065, spotName: "Busan" } },
  430: {
    spot: { Lat: 2.03745, Long: 73.53578333333333, spotName: "Tsunamis" },
  },
  431: {
    spot: {
      Lat: 34.34336666666667,
      Long: 139.27661666666665,
      spotName: "Niijima - Secret",
    },
  },
  432: {
    spot: {
      Lat: 26.079216666666667,
      Long: 127.68601666666666,
      spotName: "Suicide Cliffs",
    },
  },
  433: {
    spot: {
      Lat: 26.40448333333333,
      Long: 127.84858333333334,
      spotName: "Tengan Pier",
    },
  },
  434: {
    spot: {
      Lat: 26.326033333333335,
      Long: 127.74078333333334,
      spotName: "Sunabe",
    },
  },
  435: {
    spot: { Lat: 4.312716666666667, Long: 73.5851, spotName: "Sultan's" },
  },
  436: { spot: { Lat: 26.33155, Long: 127.74185, spotName: "5 rocks" } },
  437: {
    spot: {
      Lat: 32.412283333333335,
      Long: 131.65251666666666,
      spotName: "Isegahama",
    },
  },
  438: {
    spot: { Lat: 16.65795, Long: 120.32046666666666, spotName: "San juan" },
  },
  439: {
    spot: {
      Lat: 9.810566666666666,
      Long: 126.16836666666667,
      spotName: "Cloud Nine",
    },
  },
  440: {
    spot: { Lat: 34.68955, Long: 138.97258333333335, spotName: "Shirahama" },
  },
  441: { spot: { Lat: 32.39875, Long: 131.64175, spotName: "Okuragahama" } },
  442: {
    spot: { Lat: 33.5945, Long: 134.3638, spotName: "Kaifu Rivermouth" },
  },
  443: {
    spot: { Lat: 4.30765, Long: 73.57676666666667, spotName: "Jails" },
  },
  444: {
    spot: {
      Lat: 16.651699999999998,
      Long: 120.31535,
      spotName: "Urbiztondo Beach",
    },
  },
  445: {
    spot: {
      Lat: 35.00718333333333,
      Long: 139.08788333333334,
      spotName: "Usami",
    },
  },
  446: {
    spot: { Lat: 35.31445, Long: 139.46856666666667, spotName: "Kugenuma" },
  },
  447: {
    spot: {
      Lat: 34.65368333333333,
      Long: 138.92006666666666,
      spotName: "Ohama Beach",
    },
  },
  448: {
    spot: {
      Lat: 36.22275,
      Long: 136.13441666666668,
      spotName: "Sunset beach",
    },
  },
  449: { spot: { Lat: 4.3382, Long: 103.47335, spotName: "Kijal" } },
  450: { spot: { Lat: 4.2521, Long: 73.5481, spotName: "Tombstones" } },
  451: {
    spot: {
      Lat: 15.014766666666667,
      Long: 120.06383333333333,
      spotName: "Crystal Beach Break",
    },
  },
  452: {
    spot: { Lat: 35.25985, Long: 139.18365, spotName: "Sakawa Rivermouth" },
  },
  453: {
    spot: {
      Lat: 35.15683333333333,
      Long: 129.16051666666667,
      spotName: "Hae un dae",
    },
  },
  454: {
    spot: {
      Lat: 33.244566666666664,
      Long: 126.41285,
      spotName: "Jeju Island - Jungmun Beach",
    },
  },
  455: {
    spot: { Lat: 35.1778, Long: 129.1999, spotName: "Song Jung Beach" },
  },
  456: {
    spot: {
      Lat: 13.692183333333332,
      Long: 124.3976,
      spotName: "Pururan Bay (Majestics)",
    },
  },
  457: {
    spot: {
      Lat: 31.955216666666665,
      Long: 131.4686,
      spotName: "Miyzaki Wave dome",
    },
  },
  458: {
    spot: { Lat: 33.36955, Long: 134.20683333333332, spotName: "Ozaki" },
  },
  459: {
    spot: {
      Lat: 1.5537666666666667,
      Long: 104.25931666666666,
      spotName: "Desaru",
    },
  },
  460: {
    spot: { Lat: 4.37525, Long: 73.66393333333333, spotName: "Chickens" },
  },
  461: {
    spot: {
      Lat: 3.8124833333333332,
      Long: 103.37315,
      spotName: "Teluk Cempedak",
    },
  },
  462: {
    spot: {
      Lat: 34.412683333333334,
      Long: 139.28675,
      spotName: "Niijima - Awaiura",
    },
  },
  463: {
    spot: {
      Lat: 35.30146666666667,
      Long: 139.52541666666667,
      spotName: "Inamuragasaki",
    },
  },
  464: {
    spot: {
      Lat: 34.60016666666667,
      Long: 138.20531666666668,
      spotName: "Omaezaki",
    },
  },
  465: {
    spot: { Lat: 43.62035, Long: 51.189233333333334, spotName: "Aktau" },
  },
  466: {
    spot: {
      Lat: 0.25589999999999996,
      Long: 73.35668333333334,
      spotName: "Five Islands",
    },
  },
  467: {
    spot: { Lat: 36.41935, Long: 136.41508333333334, spotName: "Ataka" },
  },
  468: {
    spot: {
      Lat: 4.171216666666667,
      Long: 73.51971666666667,
      spotName: "Lonuziyaarai Kolhu",
    },
  },
  469: {
    spot: {
      Lat: 15.060183333333333,
      Long: 120.05533333333334,
      spotName: "High 5 Lahar",
    },
  },
  470: {
    spot: { Lat: 14.915816666666666, Long: 120.06115, spotName: "Pundakit" },
  },
  471: {
    spot: { Lat: 18.3394, Long: 120.60461666666667, spotName: "Pagudpud" },
  },
  472: {
    spot: {
      Lat: 26.29465,
      Long: 127.91073333333334,
      spotName: "White Beach",
    },
  },
  473: {
    spot: {
      Lat: 33.320116666666664,
      Long: 134.19523333333333,
      spotName: "Shiina",
    },
  },
  474: {
    spot: {
      Lat: 33.65943333333333,
      Long: 134.40376666666666,
      spotName: "Uchizuma",
    },
  },
  475: { spot: { Lat: 38.5993, Long: 128.36975, spotName: "Songdojin-ni" } },
  476: {
    spot: {
      Lat: 15.753933333333332,
      Long: 121.56783333333334,
      spotName: "Baler",
    },
  },
  477: {
    spot: {
      Lat: 9.745633333333334,
      Long: 126.16636666666666,
      spotName: "Daku Island",
    },
  },
  478: {
    spot: { Lat: 35.2918, Long: 139.55741666666665, spotName: "Osaki" },
  },
  479: {
    spot: {
      Lat: 35.53341666666667,
      Long: 140.46123333333333,
      spotName: "Katagai",
    },
  },
  480: {
    spot: { Lat: 33.527766666666665, Long: 134.28495, spotName: "Ikumi" },
  },
  481: {
    spot: {
      Lat: 33.458933333333334,
      Long: 133.48098333333334,
      spotName: "Niyodogawakakou",
    },
  },
  482: {
    spot: {
      Lat: 40.7744,
      Long: 141.41258333333334,
      spotName: "Veedol Beach",
    },
  },
  483: {
    spot: { Lat: 34.7321, Long: 138.23391666666666, spotName: "Shizunami" },
  },
  484: {
    spot: { Lat: 4.34795, Long: 73.61783333333334, spotName: "Lohi`s" },
  },
  485: {
    spot: {
      Lat: 4.316766666666667,
      Long: 73.59028333333333,
      spotName: "Pasta Point",
    },
  },
  486: {
    spot: { Lat: 4.343566666666667, Long: 73.61295, spotName: "Ninjas" },
  },
  487: {
    spot: {
      Lat: 14.137566666666666,
      Long: 122.98421666666667,
      spotName: "Bagasbas Beach",
    },
  },
  488: { spot: { Lat: 32.36005, Long: 131.62495, spotName: "Kanegahama" } },
  489: {
    spot: {
      Lat: 31.745033333333332,
      Long: 131.4764,
      spotName: "Uchiumi - Curren's point",
    },
  },
  490: {
    spot: {
      Lat: 34.661033333333336,
      Long: 138.93241666666665,
      spotName: "Tadado Beach",
    },
  },
  491: {
    spot: { Lat: 9.78975, Long: 126.17203333333333, spotName: "Cemeteries" },
  },
  492: {
    spot: { Lat: 11.410266666666667, Long: 125.5497, spotName: "Llorente" },
  },
  493: {
    spot: {
      Lat: 6.125116666666667,
      Long: 80.10483333333333,
      spotName: "Hikkaduwa",
    },
  },
  494: {
    spot: {
      Lat: 6.785783333333333,
      Long: 81.82136666666666,
      spotName: "Peanuts Farm",
    },
  },
  495: {
    spot: {
      Lat: 5.942666666666667,
      Long: 80.45563333333334,
      spotName: "Mirissa",
    },
  },
  496: {
    spot: {
      Lat: 6.87625,
      Long: 81.84663333333333,
      spotName: "Pottuvil Point",
    },
  },
  497: {
    spot: {
      Lat: 23.825683333333334,
      Long: 121.58553333333333,
      spotName: "Gongs",
    },
  },
  498: { spot: { Lat: -28.6303, Long: 153.5965, spotName: "Belongil" } },
  499: {
    spot: {
      Lat: -28.333666666666666,
      Long: 153.57438333333334,
      spotName: "Cabarita",
    },
  },
  500: {
    spot: {
      Lat: -28.648033333333334,
      Long: 153.63083333333333,
      spotName: "Tallow beach",
    },
  },
  501: {
    spot: {
      Lat: -29.784033333333333,
      Long: 153.29755,
      spotName: "Corby's left",
    },
  },
  502: {
    spot: {
      Lat: -32.312083333333334,
      Long: 152.52336666666667,
      spotName: "Booti Booti National Park",
    },
  },
  503: {
    spot: {
      Lat: 21.943233333333332,
      Long: 120.74566666666666,
      spotName: "Houbihu",
    },
  },
  504: {
    spot: {
      Lat: 12.596966666666667,
      Long: 101.40891666666667,
      spotName: "RAYONG - Mae RAMPHUNG BEACH",
    },
  },
  505: { spot: { Lat: 31.8132, Long: 131.4594, spotName: "Kodomonokuni" } },
  506: {
    spot: { Lat: -29.4822, Long: 153.3661, spotName: "Angourie Point" },
  },
  507: {
    spot: {
      Lat: -28.360583333333334,
      Long: 153.57685,
      spotName: "Hastings Point",
    },
  },
  508: {
    spot: {
      Lat: -28.19921666666667,
      Long: 153.57041666666666,
      spotName: "Fingal Head",
    },
  },
  509: {
    spot: {
      Lat: -28.802266666666668,
      Long: 153.60053333333335,
      spotName: "Lennox Head",
    },
  },
  510: {
    spot: {
      Lat: -29.437516666666667,
      Long: 153.37251666666666,
      spotName: "Razors",
    },
  },
  511: {
    spot: {
      Lat: -34.780966666666664,
      Long: 150.795,
      spotName: "Seven Mile Beach",
    },
  },
  512: {
    spot: { Lat: -30.3018, Long: 153.14623333333333, spotName: "Coffs Reef" },
  },
  513: {
    spot: { Lat: 7.838766666666666, Long: 98.2894, spotName: "Karon Beach" },
  },
  514: {
    spot: {
      Lat: 7.982066666666666,
      Long: 98.27671666666667,
      spotName: "Pansea Beach",
    },
  },
  515: {
    spot: {
      Lat: 10.322883333333333,
      Long: 107.083,
      spotName: "Vung Tau left",
    },
  },
  516: {
    spot: {
      Lat: 43.19571666666667,
      Long: 132.12948333333333,
      spotName: "Shamora Beach",
    },
  },
  517: {
    spot: { Lat: -29.42035, Long: 153.3658, spotName: "North Wall - Iluka" },
  },
  518: {
    spot: {
      Lat: -28.811,
      Long: 153.60658333333333,
      spotName: "Boulder Beach",
    },
  },
  519: {
    spot: { Lat: -30.07645, Long: 153.20378333333332, spotName: "Mullaway" },
  },
  520: {
    spot: { Lat: 22.991816666666665, Long: 120.1431, spotName: "Anping" },
  },
  521: {
    spot: {
      Lat: 24.932366666666667,
      Long: 121.88641666666666,
      spotName: "Dashi - Honeymoon Bay",
    },
  },
  522: {
    spot: { Lat: 22.89855, Long: 121.259, spotName: "Donghe Rivermouth" },
  },
  523: {
    spot: {
      Lat: 8.644333333333334,
      Long: 98.24438333333333,
      spotName: "Khao lak",
    },
  },
  524: {
    spot: {
      Lat: 31.802716666666665,
      Long: 131.47793333333334,
      spotName: "Aoshima Reef",
    },
  },
  525: {
    spot: { Lat: 31.928116666666668, Long: 131.4705, spotName: "Hitotsuba" },
  },
  526: {
    spot: {
      Lat: -29.367116666666668,
      Long: 153.37036666666665,
      spotName: "Woody Head",
    },
  },
  527: {
    spot: {
      Lat: -28.17065,
      Long: 153.55676666666668,
      spotName: "Fingal Bomie",
    },
  },
  528: {
    spot: {
      Lat: -31.716633333333334,
      Long: 152.79636666666667,
      spotName: "Diamond Head",
    },
  },
  529: {
    spot: {
      Lat: 6.840083333333333,
      Long: 81.83948333333333,
      spotName: "Arugam Bay",
    },
  },
  530: {
    spot: {
      Lat: 6.119533333333333,
      Long: 80.11068333333333,
      spotName: "Main Point",
    },
  },
  531: {
    spot: {
      Lat: 10.946583333333333,
      Long: 125.83053333333334,
      spotName: "Calicoan Island",
    },
  },
  532: {
    spot: {
      Lat: -30.597433333333335,
      Long: 153.01473333333334,
      spotName: "Valla Beach",
    },
  },
  533: {
    spot: {
      Lat: 5.9671666666666665,
      Long: 80.36993333333334,
      spotName: "The Rock",
    },
  },
  534: { spot: { Lat: 9.74725, Long: 126.09893333333333, spotName: "G1" } },
  535: {
    spot: { Lat: 24.695416666666667, Long: 120.853, spotName: "Chunan" },
  },
  536: {
    spot: {
      Lat: 25.0219,
      Long: 121.94626666666667,
      spotName: "Fulong Beach",
    },
  },
  537: {
    spot: {
      Lat: 23.396833333333333,
      Long: 121.4812,
      spotName: "BashienDong",
    },
  },
  538: {
    spot: {
      Lat: 5.9731000000000005,
      Long: 80.43048333333333,
      spotName: "Weligama",
    },
  },
  539: {
    spot: {
      Lat: 8.738333333333333,
      Long: 98.22051666666667,
      spotName: "Cape Pakarang",
    },
  },
  540: {
    spot: { Lat: 43.07135, Long: 131.96338333333333, spotName: "Patrokl" },
  },
  541: {
    spot: { Lat: -28.634716666666666, Long: 153.63615, spotName: "Bullies" },
  },
  542: {
    spot: {
      Lat: -28.873983333333335,
      Long: 153.59243333333333,
      spotName: "Ballina North Wall",
    },
  },
  543: {
    spot: {
      Lat: -28.387616666666666,
      Long: 153.56826666666666,
      spotName: "Pottsville",
    },
  },
  544: {
    spot: {
      Lat: -28.202083333333334,
      Long: 153.57018333333335,
      spotName: "Dreamtime",
    },
  },
  545: {
    spot: {
      Lat: -30.503983333333334,
      Long: 153.03176666666667,
      spotName: "Urunga",
    },
  },
  546: {
    spot: {
      Lat: -32.673116666666665,
      Long: 152.1864,
      spotName: "Hawks Nest",
    },
  },
  547: {
    spot: { Lat: 24.7169, Long: 121.84386666666667, spotName: "Wai-ao" },
  },
  548: {
    spot: {
      Lat: 9.071583333333333,
      Long: 126.19101666666667,
      spotName: "Tandag",
    },
  },
  549: {
    spot: {
      Lat: -28.704433333333334,
      Long: 153.61668333333333,
      spotName: "Broken Head",
    },
  },
  550: {
    spot: { Lat: -28.1949, Long: 153.57725, spotName: "Needle dicks" },
  },
  551: {
    spot: {
      Lat: -30.273266666666668,
      Long: 153.14515,
      spotName: "Diggers Beach",
    },
  },
  552: {
    spot: {
      Lat: 25.240283333333334,
      Long: 121.63445,
      spotName: "Jin San (Golden Mountain)",
    },
  },
  553: {
    spot: {
      Lat: 7.817033333333333,
      Long: 98.29863333333333,
      spotName: "Kata Beach",
    },
  },
  554: { spot: { Lat: 12.5688, Long: 101.4538, spotName: "Ko Samet" } },
  555: {
    spot: { Lat: 16.07055, Long: 108.24658333333333, spotName: "Da Nang" },
  },
  556: {
    spot: {
      Lat: -28.19565,
      Long: 153.57818333333333,
      spotName: "Cooks Island",
    },
  },
  557: {
    spot: {
      Lat: 9.791783333333333,
      Long: 126.17051666666667,
      spotName: "Rock island",
    },
  },
  558: { spot: { Lat: 5.98785, Long: 80.32375, spotName: "Koggala Lefts" } },
  559: {
    spot: { Lat: 6.646916666666667, Long: 81.77755, spotName: "Okanda" },
  },
  560: {
    spot: {
      Lat: 6.006433333333334,
      Long: 80.24433333333333,
      spotName: "Unawatuna",
    },
  },
  561: {
    spot: {
      Lat: 24.872433333333333,
      Long: 121.84231666666666,
      spotName: "Wu-shi harbor",
    },
  },
  562: {
    spot: {
      Lat: 42.859516666666664,
      Long: 132.65651666666668,
      spotName: "Livadia",
    },
  },
  563: {
    spot: {
      Lat: -29.11235,
      Long: 153.43635,
      spotName: "Evans Head - Main Beach",
    },
  },
  564: {
    spot: {
      Lat: -28.253883333333334,
      Long: 153.5784,
      spotName: "Kingscliff",
    },
  },
  565: {
    spot: {
      Lat: -28.862983333333332,
      Long: 153.59818333333334,
      spotName: "North wall",
    },
  },
  566: {
    spot: {
      Lat: -30.064116666666667,
      Long: 153.20511666666667,
      spotName: "Mullawarra",
    },
  },
  567: {
    spot: {
      Lat: -30.300283333333333,
      Long: 153.14023333333333,
      spotName: "Park Beach Coffs Harbour SC",
    },
  },
  568: {
    spot: {
      Lat: -30.130066666666668,
      Long: 153.20398333333333,
      spotName: "Hearns",
    },
  },
  569: {
    spot: {
      Lat: 6.031466666666667,
      Long: 80.23755,
      spotName: "Dewata, Galle",
    },
  },
  570: {
    spot: { Lat: 6.8109, Long: 81.82398333333333, spotName: "Elephant rock" },
  },
  571: {
    spot: {
      Lat: 5.962933333333334,
      Long: 80.39065,
      spotName: "Midigama Left (market)",
    },
  },
  572: {
    spot: { Lat: 31.640233333333335, Long: 131.45635, spotName: "Kobukei" },
  },
  573: {
    spot: {
      Lat: -28.63825,
      Long: 153.60895,
      spotName: "Byron Bay - The Wreck",
    },
  },
  574: {
    spot: {
      Lat: -28.843466666666668,
      Long: 153.60788333333332,
      spotName: "Backsides",
    },
  },
  575: {
    spot: {
      Lat: 23.699733333333334,
      Long: 121.55103333333334,
      spotName: "Jici Beach",
    },
  },
  576: {
    spot: {
      Lat: 16.229633333333332,
      Long: 108.08951666666667,
      spotName: "Lang Co Beach",
    },
  },
  577: {
    spot: { Lat: -28.63275, Long: 153.62663333333333, spotName: "The Pass" },
  },
  578: {
    spot: {
      Lat: -28.635083333333334,
      Long: 153.63255,
      spotName: "Wategos  Beach",
    },
  },
  579: {
    spot: {
      Lat: -30.0587,
      Long: 153.20348333333334,
      spotName: "Arrawarra point",
    },
  },
  580: {
    spot: {
      Lat: -30.378116666666667,
      Long: 153.10135,
      spotName: "Southside - Sawtell",
    },
  },
  581: {
    spot: {
      Lat: 21.98735,
      Long: 120.84583333333333,
      spotName: "Jia le Shui",
    },
  },
  582: {
    spot: {
      Lat: 22.625966666666667,
      Long: 120.26283333333333,
      spotName: "Sun Yat Sen Beach",
    },
  },
  583: { spot: { Lat: 15, Long: 1, spotName: "Kamala" } },
  584: {
    spot: {
      Lat: -31.541083333333333,
      Long: 159.07105,
      spotName: "Anson Bay",
    },
  },
  585: {
    spot: {
      Lat: -28.841966666666668,
      Long: 153.60828333333333,
      spotName: "Flat rock",
    },
  },
  586: { spot: { Lat: 6.13875, Long: 80.0982, spotName: "Bennys" } },
  587: {
    spot: {
      Lat: 5.999583333333334,
      Long: 80.26208333333334,
      spotName: "Wijiya Beach",
    },
  },
  588: {
    spot: { Lat: 23.096033333333335, Long: 121.3687, spotName: "Cheng-Gong" },
  },
  589: {
    spot: {
      Lat: 21.958283333333334,
      Long: 120.76033333333334,
      spotName: "Nan Wan",
    },
  },
  590: {
    spot: { Lat: 7.80885, Long: 98.29768333333334, spotName: "Kata Noi" },
  },
  591: {
    spot: { Lat: 18.36075, Long: 121.62693333333333, spotName: "Aparri" },
  },
  592: {
    spot: {
      Lat: 31.7478,
      Long: 131.47256666666667,
      spotName: "Uchiumi reefs",
    },
  },
  593: {
    spot: {
      Lat: -28.5365,
      Long: 153.55728333333334,
      spotName: "Brunswick Heads North",
    },
  },
  594: {
    spot: {
      Lat: -28.878166666666665,
      Long: 153.58611666666667,
      spotName: "South wall",
    },
  },
  595: {
    spot: {
      Lat: -29.891283333333334,
      Long: 153.27333333333334,
      spotName: "Turtles",
    },
  },
  596: {
    spot: {
      Lat: 5.963583333333333,
      Long: 80.38375,
      spotName: "Midigama Right",
    },
  },
  597: {
    spot: {
      Lat: 9.679616666666666,
      Long: 100.07343333333333,
      spotName: "Koh phangan",
    },
  },
  598: {
    spot: {
      Lat: -28.862483333333333,
      Long: 153.59955,
      spotName: "Shelly beach",
    },
  },
  599: {
    spot: {
      Lat: -28.166533333333334,
      Long: 153.55263333333335,
      spotName: "Point Danger",
    },
  },
  600: {
    spot: {
      Lat: -30.74305,
      Long: 152.99728333333334,
      spotName: "Scotts head",
    },
  },
  601: { spot: { Lat: -30.64835, Long: 153.0206, spotName: "Black rock" } },
  602: {
    spot: {
      Lat: -30.28835,
      Long: 153.14066666666668,
      spotName: "North Beach",
    },
  },
  603: { spot: { Lat: 6.0907, Long: 80.1344, spotName: "Owerkanda" } },
  604: {
    spot: {
      Lat: 16.057233333333333,
      Long: 108.24766666666666,
      spotName: "My Khe Beach",
    },
  },
  605: {
    spot: {
      Lat: -29.400316666666665,
      Long: 153.37055,
      spotName: "Iluka Bluff",
    },
  },
  606: {
    spot: {
      Lat: -28.684866666666668,
      Long: 153.6165,
      spotName: "Suffolk Park",
    },
  },
  607: {
    spot: { Lat: -28.2343, Long: 153.56766666666667, spotName: "Womin Bay" },
  },
  608: {
    spot: {
      Lat: -31.4778,
      Long: 152.93338333333332,
      spotName: "Lighthouse Beach",
    },
  },
  609: {
    spot: {
      Lat: -32.33965,
      Long: 152.54138333333333,
      spotName: "Boomerang Beach",
    },
  },
  610: { spot: { Lat: -31.4543, Long: 152.9329, spotName: "Shelly beach" } },
  611: {
    spot: {
      Lat: -33.09941666666667,
      Long: 151.65918333333335,
      spotName: "Crabbes Creek",
    },
  },
  612: {
    spot: {
      Lat: -33.078583333333334,
      Long: 151.6589,
      spotName: "Blacksmiths beach",
    },
  },
  613: {
    spot: { Lat: -33.53155, Long: 151.36481666666666, spotName: "Killcare" },
  },
  614: {
    spot: { Lat: -33.290616666666665, Long: 151.5667, spotName: "Soldiers" },
  },
  615: {
    spot: {
      Lat: -33.666133333333335,
      Long: 151.32053333333334,
      spotName: "Bungan",
    },
  },
  616: {
    spot: {
      Lat: -32.94905,
      Long: 151.75753333333333,
      spotName: "Merewether - Ladies",
    },
  },
  617: {
    spot: {
      Lat: -33.112316666666665,
      Long: 151.64746666666667,
      spotName: "Caves point",
    },
  },
  618: {
    spot: {
      Lat: -32.170683333333336,
      Long: 152.50805,
      spotName: "Tuncurry main beach",
    },
  },
  619: {
    spot: {
      Lat: -32.329433333333334,
      Long: 152.53655,
      spotName: "Elizabeth Beach",
    },
  },
  620: {
    spot: {
      Lat: -32.930933333333336,
      Long: 151.78936666666667,
      spotName: "Newcastle beach",
    },
  },
  621: {
    spot: { Lat: -33.417116666666665, Long: 151.4639, spotName: "Banzai" },
  },
  622: {
    spot: { Lat: -33.29925, Long: 151.55141666666665, spotName: "Pellows" },
  },
  623: {
    spot: {
      Lat: -33.35511666666667,
      Long: 151.50198333333333,
      spotName: "Blue bay shorey",
    },
  },
  624: {
    spot: {
      Lat: -33.54483333333334,
      Long: 151.34388333333334,
      spotName: "Box Head - Umina",
    },
  },
  625: {
    spot: { Lat: -33.8003, Long: 151.30046666666667, spotName: "Deadmans" },
  },
  626: {
    spot: {
      Lat: -33.699733333333334,
      Long: 151.31006666666667,
      spotName: "Turrimetta",
    },
  },
  627: {
    spot: {
      Lat: -34.053016666666664,
      Long: 151.15711666666667,
      spotName: "Braymains",
    },
  },
  628: {
    spot: {
      Lat: -34.040033333333334,
      Long: 151.16865,
      spotName: "Greenhills",
    },
  },
  629: {
    spot: {
      Lat: -31.312583333333333,
      Long: 152.97163333333333,
      spotName: "Point Plomer",
    },
  },
  630: {
    spot: {
      Lat: -32.92171666666667,
      Long: 151.79753333333332,
      spotName: "Nobbys Beach",
    },
  },
  631: {
    spot: {
      Lat: -33.469633333333334,
      Long: 151.43765,
      spotName: "Avoca Point",
    },
  },
  632: {
    spot: {
      Lat: -33.35576666666667,
      Long: 151.50266666666667,
      spotName: "Blue Bay",
    },
  },
  633: {
    spot: {
      Lat: -33.44625,
      Long: 151.44993333333332,
      spotName: "Terrigal Haven",
    },
  },
  634: {
    spot: {
      Lat: -33.443133333333336,
      Long: 151.44628333333333,
      spotName: "The Bend",
    },
  },
  635: {
    spot: {
      Lat: -33.59928333333333,
      Long: 151.32903333333334,
      spotName: "Kiddies corner",
    },
  },
  636: {
    spot: {
      Lat: -34.059783333333336,
      Long: 151.16013333333333,
      spotName: "Shark Island",
    },
  },
  637: {
    spot: { Lat: -33.0692, Long: 151.65953333333334, spotName: "Maneela" },
  },
  638: {
    spot: { Lat: -33.51793333333333, Long: 151.40345, spotName: "Bugs" },
  },
  639: {
    spot: { Lat: -33.3434, Long: 151.50485, spotName: "The Entrance" },
  },
  640: {
    spot: {
      Lat: -33.5346,
      Long: 151.31461666666667,
      spotName: "Umina Point",
    },
  },
  641: {
    spot: {
      Lat: -33.772016666666666,
      Long: 151.29513333333333,
      spotName: "Castel corner- curl curl",
    },
  },
  642: {
    spot: {
      Lat: -33.70385,
      Long: 151.30941666666666,
      spotName: "North narrabeen point",
    },
  },
  643: {
    spot: {
      Lat: -31.634183333333333,
      Long: 152.83536666666666,
      spotName: "North Haven",
    },
  },
  644: {
    spot: {
      Lat: -31.589416666666665,
      Long: 152.84033333333332,
      spotName: "Rainbow Beach, Bonny Hills",
    },
  },
  645: {
    spot: {
      Lat: -31.183433333333333,
      Long: 152.97775,
      spotName: "Crescent Head",
    },
  },
  646: {
    spot: {
      Lat: -32.9165,
      Long: 151.80056666666667,
      spotName: "Newcastle harbour",
    },
  },
  647: {
    spot: { Lat: -32.94756666666667, Long: 151.7591, spotName: "Pogos" },
  },
  648: {
    spot: {
      Lat: -32.859316666666665,
      Long: 151.84481666666667,
      spotName: "Stockton - signa shipwreck",
    },
  },
  649: {
    spot: {
      Lat: -33.438516666666665,
      Long: 151.44436666666667,
      spotName: "The Ruins",
    },
  },
  650: {
    spot: {
      Lat: -33.79723333333333,
      Long: 151.28838333333334,
      spotName: "Manly Point",
    },
  },
  651: {
    spot: {
      Lat: -33.682066666666664,
      Long: 151.31375,
      spotName: "Mona Vale",
    },
  },
  652: {
    spot: {
      Lat: -33.7459,
      Long: 151.30836666666667,
      spotName: "Long Reef Bombie",
    },
  },
  653: {
    spot: {
      Lat: -33.783566666666665,
      Long: 151.29066666666668,
      spotName: "Queenscliff",
    },
  },
  654: {
    spot: {
      Lat: -33.7892,
      Long: 151.29486666666668,
      spotName: "Queensie bombie",
    },
  },
  655: {
    spot: {
      Lat: -32.35175,
      Long: 152.53713333333334,
      spotName: "Blueys Beach",
    },
  },
  656: {
    spot: {
      Lat: -33.415866666666666,
      Long: 151.46696666666668,
      spotName: "Lefts",
    },
  },
  657: {
    spot: { Lat: -33.278, Long: 151.56951666666666, spotName: "Rocky" },
  },
  658: {
    spot: {
      Lat: -33.4111,
      Long: 151.46831666666668,
      spotName: "Suck up (Forresters)",
    },
  },
  659: {
    spot: { Lat: -32.17885, Long: 152.51951666666668, spotName: "Pebbly" },
  },
  660: {
    spot: {
      Lat: -31.4424,
      Long: 152.92743333333334,
      spotName: "Flynn's Beach",
    },
  },
  661: {
    spot: {
      Lat: -32.94403333333333,
      Long: 151.76681666666667,
      spotName: "Dixon Park",
    },
  },
  662: {
    spot: {
      Lat: -33.08711666666667,
      Long: 151.67531666666667,
      spotName: "Moon island",
    },
  },
  663: {
    spot: {
      Lat: -33.63415,
      Long: 151.33521666666667,
      spotName: "Nth Avalon",
    },
  },
  664: {
    spot: {
      Lat: -32.92936666666667,
      Long: 151.79298333333332,
      spotName: "Flatrock",
    },
  },
  665: {
    spot: {
      Lat: -31.550883333333335,
      Long: 152.85956666666667,
      spotName: "Lake Cathie",
    },
  },
  666: {
    spot: {
      Lat: -32.007416666666664,
      Long: 152.56833333333333,
      spotName: "Saltwater Point",
    },
  },
  667: {
    spot: {
      Lat: -32.774,
      Long: 152.12631666666667,
      spotName: "One Mile Beach",
    },
  },
  668: {
    spot: {
      Lat: -33.501016666666665,
      Long: 151.42691666666667,
      spotName: "Mc Masters Point",
    },
  },
  669: {
    spot: {
      Lat: -33.821983333333336,
      Long: 151.25255,
      spotName: "Balmoral point",
    },
  },
  670: {
    spot: {
      Lat: -31.186116666666667,
      Long: 152.9796,
      spotName: "Cresent Head",
    },
  },
  671: {
    spot: {
      Lat: -32.92146666666667,
      Long: 151.80091666666667,
      spotName: "Nobbys Reef & Pipe",
    },
  },
  672: {
    spot: {
      Lat: -33.33443333333334,
      Long: 151.50711666666666,
      spotName: "North Ennie",
    },
  },
  673: {
    spot: { Lat: -33.39393333333334, Long: 151.4881, spotName: "Indies" },
  },
  674: {
    spot: {
      Lat: -33.79925,
      Long: 151.29856666666666,
      spotName: "Fairy Bower",
    },
  },
  675: {
    spot: {
      Lat: -31.423383333333334,
      Long: 152.91491666666667,
      spotName: "North Wall",
    },
  },
  676: {
    spot: {
      Lat: -32.97313333333334,
      Long: 151.73071666666667,
      spotName: "Dudley Beach",
    },
  },
  677: {
    spot: {
      Lat: -32.6033,
      Long: 152.26638333333332,
      spotName: "Little gibber - Dark Point",
    },
  },
  678: {
    spot: { Lat: -33.0196, Long: 151.71586666666667, spotName: "Redhead" },
  },
  679: {
    spot: {
      Lat: -33.777816666666666,
      Long: 151.29551666666666,
      spotName: "Freshwater beach",
    },
  },
  680: {
    spot: { Lat: -34.052366666666664, Long: 151.1583, spotName: "Cronulla" },
  },
  681: {
    spot: {
      Lat: -32.720166666666664,
      Long: 152.18553333333332,
      spotName: "Zenith Beach",
    },
  },
  682: {
    spot: {
      Lat: -33.66005,
      Long: 151.32756666666666,
      spotName: "Newport - Crosswaves",
    },
  },
  683: {
    spot: {
      Lat: -33.69201666666667,
      Long: 151.31006666666667,
      spotName: "Warriewood",
    },
  },
  684: {
    spot: { Lat: -33.7994, Long: 151.29813333333334, spotName: "Winkipop" },
  },
  685: {
    spot: {
      Lat: -31.427266666666668,
      Long: 152.9179,
      spotName: "Town Beach",
    },
  },
  686: {
    spot: {
      Lat: -32.176966666666665,
      Long: 152.51746666666668,
      spotName: "Haydens rock",
    },
  },
  687: {
    spot: {
      Lat: -32.942033333333335,
      Long: 151.76786666666666,
      spotName: "Bar Beach",
    },
  },
  688: {
    spot: {
      Lat: -33.647666666666666,
      Long: 151.32925,
      spotName: "Bilgola Beach - Bowles",
    },
  },
  689: {
    spot: { Lat: -33.737966666666665, Long: 151.312, spotName: "Long-Reef" },
  },
  690: {
    spot: {
      Lat: -33.91811666666667,
      Long: 151.26435,
      spotName: "Coogee Bombie",
    },
  },
  691: {
    spot: {
      Lat: -32.964333333333336,
      Long: 151.73696666666666,
      spotName: "Leggy  Point",
    },
  },
  692: { spot: { Lat: -32.7204, Long: 152.18545, spotName: "Box Beach" } },
  693: {
    spot: { Lat: -33.279266666666665, Long: 151.57285, spotName: "Backdoor" },
  },
  694: {
    spot: { Lat: -33.28391666666667, Long: 151.57705, spotName: "Iceys" },
  },
  695: {
    spot: { Lat: -33.79901666666667, Long: 151.2985, spotName: "Winki" },
  },
  696: {
    spot: {
      Lat: -33.89265,
      Long: 151.27598333333333,
      spotName: "South Bondi",
    },
  },
  697: {
    spot: {
      Lat: -32.172716666666666,
      Long: 152.51031666666665,
      spotName: "Tuncurry Breakwall",
    },
  },
  698: {
    spot: { Lat: -31.4272, Long: 152.92193333333333, spotName: "Middles" },
  },
  699: {
    spot: {
      Lat: -33.09838333333333,
      Long: 151.65985,
      spotName: "Frenchmans reef",
    },
  },
  700: {
    spot: {
      Lat: -32.900416666666665,
      Long: 151.78991666666667,
      spotName: "Stockton beach",
    },
  },
  701: {
    spot: { Lat: -32.698766666666664, Long: 152.19025, spotName: "Boulders" },
  },
  702: {
    spot: {
      Lat: -33.394083333333334,
      Long: 151.48326666666668,
      spotName: "Crackneck",
    },
  },
  703: {
    spot: {
      Lat: -33.242416666666664,
      Long: 151.56873333333334,
      spotName: "Lakes Beach",
    },
  },
  704: {
    spot: { Lat: -33.46868333333333, Long: 151.43515, spotName: "Pines" },
  },
  705: {
    spot: {
      Lat: -33.74508333333333,
      Long: 151.31696666666667,
      spotName: "Butterbox",
    },
  },
  706: {
    spot: {
      Lat: -33.590316666666666,
      Long: 151.32816666666668,
      spotName: "North Palm Beach",
    },
  },
  707: {
    spot: {
      Lat: -33.486466666666665,
      Long: 151.42825,
      spotName: "Copacabana Point",
    },
  },
  708: {
    spot: {
      Lat: -33.45811666666667,
      Long: 151.44225,
      spotName: "North Avoca Back Reef",
    },
  },
  709: {
    spot: {
      Lat: -33.75463333333333,
      Long: 151.29948333333334,
      spotName: "Dee why",
    },
  },
  710: {
    spot: {
      Lat: -33.63981666666667,
      Long: 151.33371666666667,
      spotName: "Little Avalon",
    },
  },
  711: {
    spot: {
      Lat: -34.05663333333333,
      Long: 151.15708333333333,
      spotName: "Cronulla Point",
    },
  },
  712: {
    spot: {
      Lat: -34.06381666666667,
      Long: 151.15651666666668,
      spotName: "Shelley",
    },
  },
  713: {
    spot: { Lat: -34.043533333333336, Long: 151.2085, spotName: "Voodoo" },
  },
  714: {
    spot: { Lat: -34.07025, Long: 151.15731666666667, spotName: "Sandshoes" },
  },
  715: {
    spot: {
      Lat: -33.94951666666667,
      Long: 151.25743333333332,
      spotName: "Maroubra Beach",
    },
  },
  716: {
    spot: { Lat: -34.04345, Long: 151.21263333333334, spotName: "Suckrock" },
  },
  717: {
    spot: {
      Lat: -34.34021666666667,
      Long: 150.92523333333332,
      spotName: "Bulli",
    },
  },
  718: {
    spot: {
      Lat: -35.30525,
      Long: 150.47561666666667,
      spotName: "Narrawallee Shelf",
    },
  },
  719: {
    spot: {
      Lat: -34.576966666666664,
      Long: 150.88691666666668,
      spotName: "Shatters",
    },
  },
  720: { spot: { Lat: -24.2083, Long: 151.90895, spotName: "Agnes Water" } },
  721: {
    spot: {
      Lat: -34.306733333333334,
      Long: 150.93571666666668,
      spotName: "Austinmer Beach",
    },
  },
  722: {
    spot: { Lat: -34.29651666666667, Long: 150.9428, spotName: "Sharkies" },
  },
  723: {
    spot: {
      Lat: -35.507083333333334,
      Long: 150.40111666666667,
      spotName: "Bawley Point",
    },
  },
  724: {
    spot: {
      Lat: -35.168483333333334,
      Long: 150.68453333333332,
      spotName: "Blackrock",
    },
  },
  725: {
    spot: {
      Lat: -37.053383333333336,
      Long: 149.91493333333332,
      spotName: "Asling's Beach",
    },
  },
  726: {
    spot: {
      Lat: -26.379333333333335,
      Long: 153.10021666666665,
      spotName: "Boiling Pot",
    },
  },
  727: {
    spot: {
      Lat: -26.740083333333335,
      Long: 153.1858,
      spotName: "Currimundi Reef",
    },
  },
  728: {
    spot: {
      Lat: -26.654283333333332,
      Long: 153.1053,
      spotName: "Maroochydore",
    },
  },
  729: {
    spot: {
      Lat: -33.94595,
      Long: 151.26008333333334,
      spotName: "Maroubra North End Point",
    },
  },
  730: {
    spot: {
      Lat: -34.42066666666667,
      Long: 150.90973333333332,
      spotName: "Whalebone",
    },
  },
  731: {
    spot: {
      Lat: -34.35236666666667,
      Long: 150.92021666666668,
      spotName: "Woonona",
    },
  },
  732: { spot: { Lat: -34.30045, Long: 150.9427, spotName: "Headlands" } },
  733: {
    spot: {
      Lat: -35.3443,
      Long: 150.47658333333334,
      spotName: "Golf course reef",
    },
  },
  734: {
    spot: {
      Lat: -35.95195,
      Long: 150.1628,
      spotName: "Congo Beach - The suck",
    },
  },
  735: {
    spot: {
      Lat: -35.90538333333333,
      Long: 150.15581666666668,
      spotName: "Moruya Rivermouth",
    },
  },
  736: {
    spot: { Lat: -35.79206666666666, Long: 150.23135, spotName: "Malua Bay" },
  },
  737: {
    spot: {
      Lat: -23.0032,
      Long: 150.77258333333333,
      spotName: "Farnborough",
    },
  },
  738: {
    spot: {
      Lat: -26.525733333333335,
      Long: 153.09336666666667,
      spotName: "Coolum Beach",
    },
  },
  739: {
    spot: {
      Lat: -26.52975,
      Long: 153.09275,
      spotName: "Coolum Beach Breaks",
    },
  },
  740: {
    spot: {
      Lat: -26.548233333333332,
      Long: 153.10233333333332,
      spotName: "Yaroomba",
    },
  },
  741: {
    spot: {
      Lat: -34.0665,
      Long: 151.1585,
      spotName: "Windy point, Cronulla",
    },
  },
  742: {
    spot: {
      Lat: -34.85243333333333,
      Long: 150.75096666666667,
      spotName: "Shoalhaven Heads",
    },
  },
  743: {
    spot: {
      Lat: -35.17255,
      Long: 150.72658333333334,
      spotName: "Steamers beach",
    },
  },
  744: {
    spot: { Lat: -36.8976, Long: 149.9239, spotName: "Merimbula bar" },
  },
  745: {
    spot: {
      Lat: -36.54398333333334,
      Long: 150.05853333333334,
      spotName: "Bunga Head",
    },
  },
  746: {
    spot: { Lat: -26.38365, Long: 153.08676666666668, spotName: "The Groin" },
  },
  747: {
    spot: { Lat: -34.411766666666665, Long: 150.9036, spotName: "Acids" },
  },
  748: {
    spot: {
      Lat: -34.28705,
      Long: 150.94978333333333,
      spotName: "Coledale Beach",
    },
  },
  749: {
    spot: { Lat: -34.33925, Long: 150.93071666666665, spotName: "Peggies" },
  },
  750: {
    spot: {
      Lat: -34.68098333333333,
      Long: 150.85555,
      spotName: "Kendalls Beach",
    },
  },
  751: {
    spot: {
      Lat: -35.16256666666666,
      Long: 150.66733333333335,
      spotName: "Cave Beach",
    },
  },
  752: {
    spot: { Lat: -34.64825, Long: 150.86048333333332, spotName: "Boneyard" },
  },
  753: {
    spot: {
      Lat: -35.203516666666665,
      Long: 150.55976666666666,
      spotName: "Cudmirrah reef",
    },
  },
  754: {
    spot: {
      Lat: -26.538566666666668,
      Long: 153.09613333333334,
      spotName: "Coolum - Point Perry",
    },
  },
  755: {
    spot: {
      Lat: -35.513533333333335,
      Long: 150.4033,
      spotName: "Gannet Point",
    },
  },
  756: {
    spot: {
      Lat: -26.806583333333332,
      Long: 153.13921666666667,
      spotName: "Kings Beach Groyne",
    },
  },
  757: {
    spot: {
      Lat: -35.8588,
      Long: 150.17993333333334,
      spotName: "Broulee South beach",
    },
  },
  758: {
    spot: { Lat: -26.625816666666665, Long: 153.10255, spotName: "Mudjimba" },
  },
  759: {
    spot: {
      Lat: -24.806366666666666,
      Long: 152.45668333333333,
      spotName: "Kelly's Beach",
    },
  },
  760: {
    spot: {
      Lat: -24.232833333333332,
      Long: 151.93615,
      spotName: "The Springs (Fraser Island)",
    },
  },
  761: { spot: { Lat: -26.67795, Long: 153.1207, spotName: "Dedis" } },
  762: {
    spot: { Lat: -26.4313, Long: 153.1083, spotName: "Castaways Beach" },
  },
  763: {
    spot: {
      Lat: -26.790333333333333,
      Long: 153.14686666666665,
      spotName: "Moffats",
    },
  },
  764: {
    spot: {
      Lat: -26.6147,
      Long: 153.11431666666667,
      spotName: "Old Woman Ledge",
    },
  },
  765: {
    spot: {
      Lat: -26.418733333333332,
      Long: 153.11068333333333,
      spotName: "Sunshine Beach",
    },
  },
  766: {
    spot: {
      Lat: -35.36926666666667,
      Long: 150.48016666666666,
      spotName: "Rennies beach - flat rock",
    },
  },
  767: {
    spot: {
      Lat: -35.804383333333334,
      Long: 150.22808333333333,
      spotName: "Ma0ckenzies",
    },
  },
  768: {
    spot: {
      Lat: -25.93235,
      Long: 153.18863333333334,
      spotName: "Double Island Point",
    },
  },
  769: {
    spot: {
      Lat: -26.784583333333334,
      Long: 153.14145,
      spotName: "Neill ST - Dicky Beach",
    },
  },
  770: {
    spot: {
      Lat: -26.384483333333332,
      Long: 153.0939,
      spotName: "Noosa first point",
    },
  },
  771: {
    spot: {
      Lat: -26.48068333333333,
      Long: 153.09976666666665,
      spotName: "Peregian",
    },
  },
  772: {
    spot: {
      Lat: -34.397283333333334,
      Long: 150.90668333333332,
      spotName: "Fairy Meadow",
    },
  },
  773: {
    spot: { Lat: -35.27315, Long: 150.51415, spotName: "Green Island" },
  },
  774: {
    spot: {
      Lat: -35.505183333333335,
      Long: 150.39751666666666,
      spotName: "Guillotines",
    },
  },
  775: {
    spot: { Lat: -34.60415, Long: 150.86838333333333, spotName: "The farm" },
  },
  776: {
    spot: {
      Lat: -26.77845,
      Long: 153.14011666666667,
      spotName: "Anne street reef",
    },
  },
  777: {
    spot: { Lat: -26.3781, Long: 153.11248333333333, spotName: "T-Tree Bay" },
  },
  778: {
    spot: {
      Lat: -34.24613333333333,
      Long: 150.97776666666667,
      spotName: "Coalcliff",
    },
  },
  779: {
    spot: { Lat: -33.89993333333334, Long: 151.27325, spotName: "Mckenzies" },
  },
  780: {
    spot: {
      Lat: -34.32345,
      Long: 150.92503333333335,
      spotName: "Macauley's",
    },
  },
  781: {
    spot: {
      Lat: -34.07723333333333,
      Long: 151.16996666666665,
      spotName: "Reef Power",
    },
  },
  782: {
    spot: {
      Lat: -34.3632,
      Long: 150.92343333333332,
      spotName: "bellambi point",
    },
  },
  783: {
    spot: {
      Lat: -33.90083333333333,
      Long: 151.27123333333333,
      spotName: "Tama Reef",
    },
  },
  784: { spot: { Lat: -34.5921, Long: 150.8887, spotName: "Redsands" } },
  785: {
    spot: {
      Lat: -34.364216666666664,
      Long: 150.92261666666667,
      spotName: "Belambi  A Frame",
    },
  },
  786: {
    spot: { Lat: -35.00795, Long: 150.72561666666667, spotName: "Callala" },
  },
  787: {
    spot: {
      Lat: -35.8469,
      Long: 150.17906666666667,
      spotName: "Broulee North",
    },
  },
  788: {
    spot: {
      Lat: -35.78113333333334,
      Long: 150.23483333333334,
      spotName: "Mosquito bay Bommie",
    },
  },
  789: {
    spot: {
      Lat: -26.387566666666668,
      Long: 153.11653333333334,
      spotName: "A-Bay",
    },
  },
  790: {
    spot: {
      Lat: -34.33065,
      Long: 150.92931666666667,
      spotName: "Sandon Point",
    },
  },
  791: {
    spot: {
      Lat: -34.42321666666667,
      Long: 150.90686666666667,
      spotName: "South beach",
    },
  },
  792: {
    spot: {
      Lat: -26.7827,
      Long: 153.13851666666667,
      spotName: "Dicky's shorey",
    },
  },
  793: {
    spot: {
      Lat: -26.68155,
      Long: 153.12173333333334,
      spotName: "Mooloolaba",
    },
  },
  794: {
    spot: { Lat: -34.31505, Long: 150.93013333333334, spotName: "Thirroul" },
  },
  795: {
    spot: {
      Lat: -35.66915,
      Long: 150.30751666666666,
      spotName: "Mills point",
    },
  },
  796: {
    spot: {
      Lat: -24.962633333333333,
      Long: 153.33945,
      spotName: "Fraser Island",
    },
  },
  797: {
    spot: {
      Lat: -26.796983333333333,
      Long: 153.14903333333334,
      spotName: "Kings Beach",
    },
  },
  798: {
    spot: {
      Lat: -26.518933333333333,
      Long: 153.09495,
      spotName: "Stummers Creek",
    },
  },
  799: {
    spot: {
      Lat: -34.30785,
      Long: 150.93586666666667,
      spotName: "Austinmer pools",
    },
  },
  800: {
    spot: {
      Lat: -34.22826666666667,
      Long: 150.99266666666668,
      spotName: "Stanwell park",
    },
  },
  801: {
    spot: {
      Lat: -34.279133333333334,
      Long: 150.95651666666666,
      spotName: "Wombarra reef",
    },
  },
  802: {
    spot: { Lat: -35.1637, Long: 150.67475, spotName: "Caves - cungee" },
  },
  803: {
    spot: { Lat: -36.9456, Long: 149.9161, spotName: "Pambula rivermouth" },
  },
  804: {
    spot: {
      Lat: -26.679266666666667,
      Long: 153.13735,
      spotName: "Point Cartwright, the rock",
    },
  },
  805: {
    spot: { Lat: -25.9371, Long: 153.18821666666668, spotName: "Teewah" },
  },
  806: {
    spot: { Lat: -37.17021666666667, Long: 150.00555, spotName: "Saltwater" },
  },
  807: {
    spot: { Lat: -26.67155, Long: 153.11293333333333, spotName: "The Bluff" },
  },
  808: {
    spot: {
      Lat: -26.542116666666665,
      Long: 153.09898333333334,
      spotName: "Three Bays Coolum",
    },
  },
  809: {
    spot: { Lat: -34.65743333333333, Long: 150.8552, spotName: "Bombo" },
  },
  810: {
    spot: {
      Lat: -34.577783333333336,
      Long: 150.87588333333332,
      spotName: "Cowries",
    },
  },
  811: {
    spot: {
      Lat: -34.740833333333335,
      Long: 150.83375,
      spotName: "Werri Beach",
    },
  },
  812: {
    spot: {
      Lat: -36.208416666666665,
      Long: 150.13311666666667,
      spotName: "Bar Beach",
    },
  },
  813: {
    spot: { Lat: -35.85531666666667, Long: 150.1916, spotName: "Pink rocks" },
  },
  814: {
    spot: {
      Lat: -26.6708,
      Long: 153.10963333333333,
      spotName: "Alexandra Headlands",
    },
  },
  815: {
    spot: {
      Lat: -34.049216666666666,
      Long: 151.15908333333334,
      spotName: "The Wall  ( North Cronulla)",
    },
  },
  816: {
    spot: {
      Lat: -34.492733333333334,
      Long: 150.90906666666666,
      spotName: "Port Kembla",
    },
  },
  817: { spot: { Lat: -36.721, Long: 149.98055, spotName: "Tathra" } },
  818: {
    spot: {
      Lat: -34.41421666666667,
      Long: 150.90168333333332,
      spotName: "North Beach",
    },
  },
  819: { spot: { Lat: -0, Long: -0, spotName: "Spookies" } },
  820: { spot: { Lat: -34.17495, Long: 151.0651, spotName: "Garie Beach" } },
  821: {
    spot: {
      Lat: -34.178716666666666,
      Long: 151.05883333333333,
      spotName: "North Era",
    },
  },
  822: {
    spot: {
      Lat: -34.624383333333334,
      Long: 150.8591,
      spotName: "Minamurra - Mystics",
    },
  },
  823: {
    spot: {
      Lat: -35.32941666666667,
      Long: 150.47665,
      spotName: "Mollymook Reef",
    },
  },
  824: {
    spot: {
      Lat: -36.378766666666664,
      Long: 150.07815,
      spotName: "Camel Rock",
    },
  },
  825: {
    spot: { Lat: -26.4986, Long: 153.09715, spotName: "Pitta Street" },
  },
  826: { spot: { Lat: -26.78375, Long: 153.1469, spotName: "The Reef" } },
  827: {
    spot: { Lat: -27.42295, Long: 153.53473333333332, spotName: "Cylinder" },
  },
  828: {
    spot: { Lat: -35.5235, Long: 138.77276666666666, spotName: "Goolwa" },
  },
  829: {
    spot: {
      Lat: -41.165733333333336,
      Long: 146.36508333333333,
      spotName: "Bora",
    },
  },
  830: {
    spot: {
      Lat: -39.02531666666667,
      Long: 146.3045,
      spotName: "Squeaky Beach",
    },
  },
  831: {
    spot: {
      Lat: -38.32933333333333,
      Long: 144.32763333333332,
      spotName: "Fishos",
    },
  },
  832: {
    spot: { Lat: -38.3465, Long: 144.31023333333334, spotName: "Jan juc" },
  },
  833: {
    spot: {
      Lat: -28.088416666666667,
      Long: 153.45393333333334,
      spotName: "Burleigh heads",
    },
  },
  834: { spot: { Lat: -26.77075, Long: 153.13825, spotName: "Wurtulla" } },
  835: { spot: { Lat: -27.9381, Long: 153.43165, spotName: "The Spit" } },
  836: {
    spot: {
      Lat: -37.86686666666667,
      Long: 148.06016666666667,
      spotName: "Red Bluff",
    },
  },
  837: { spot: { Lat: -38.54065, Long: 143.97755, spotName: "Lorne" } },
  838: {
    spot: {
      Lat: -38.637116666666664,
      Long: 143.89283333333333,
      spotName: "Wye River",
    },
  },
  839: {
    spot: { Lat: -38.35735, Long: 144.29716666666667, spotName: "Steps" },
  },
  840: { spot: { Lat: -28.16405, Long: 153.5447, spotName: "Greenmount" } },
  841: {
    spot: { Lat: -28.161566666666666, Long: 153.5463, spotName: "Kirra" },
  },
  842: {
    spot: { Lat: -35.285383333333336, Long: 136.8545, spotName: "Chinamans" },
  },
  843: {
    spot: {
      Lat: -35.26951666666667,
      Long: 136.84455,
      spotName: "Ethels wreck",
    },
  },
  844: {
    spot: {
      Lat: -37.8007,
      Long: 148.74406666666667,
      spotName: "Cape Conran",
    },
  },
  845: {
    spot: { Lat: -38.7504, Long: 143.67053333333334, spotName: "Apollo Bay" },
  },
  846: {
    spot: {
      Lat: -38.670716666666664,
      Long: 143.8672,
      spotName: "Kennett point",
    },
  },
  847: {
    spot: {
      Lat: -38.42348333333333,
      Long: 145.08021666666667,
      spotName: "Crunchie Pt",
    },
  },
  848: {
    spot: {
      Lat: -37.47748333333333,
      Long: 139.9962,
      spotName: "Kelps - Blowhole",
    },
  },
  849: {
    spot: {
      Lat: -35.533316666666664,
      Long: 138.68931666666666,
      spotName: "Knights",
    },
  },
  850: {
    spot: {
      Lat: -37.13353333333333,
      Long: 139.7957,
      spotName: "Robe Long Beach",
    },
  },
  851: {
    spot: {
      Lat: -41.93165,
      Long: 145.17316666666667,
      spotName: "Trial Harbour",
    },
  },
  852: {
    spot: {
      Lat: -27.9865,
      Long: 153.43128333333334,
      spotName: "Narrow Neck",
    },
  },
  853: {
    spot: { Lat: -28.00215, Long: 153.43255, spotName: "Surfers Paradise" },
  },
  854: {
    spot: {
      Lat: -35.183483333333335,
      Long: 138.46428333333333,
      spotName: "Seaford reef",
    },
  },
  855: {
    spot: {
      Lat: -38.34193333333333,
      Long: 144.32225,
      spotName: "Torquay Point",
    },
  },
  856: {
    spot: {
      Lat: -38.042966666666665,
      Long: 140.63606666666666,
      spotName: "Posties",
    },
  },
  857: {
    spot: {
      Lat: -35.63441666666667,
      Long: 138.49803333333332,
      spotName: "Waitpinga",
    },
  },
  858: {
    spot: {
      Lat: -35.63216666666667,
      Long: 138.47343333333333,
      spotName: "Parsons",
    },
  },
  859: {
    spot: {
      Lat: -37.88291666666667,
      Long: 147.99596666666667,
      spotName: "Lakes Entrance",
    },
  },
  860: { spot: { Lat: -39.03865, Long: 146.3209, spotName: "Tidal River" } },
  861: {
    spot: {
      Lat: -38.518233333333335,
      Long: 145.20105,
      spotName: "Berry's Beach",
    },
  },
  862: {
    spot: {
      Lat: -28.163216666666667,
      Long: 153.54986666666667,
      spotName: "Froggys",
    },
  },
  863: {
    spot: { Lat: -33.89613333333333, Long: 135.1848, spotName: "Sheringa" },
  },
  864: {
    spot: { Lat: -43.2088, Long: 147.75393333333332, spotName: "Shipstern" },
  },
  865: {
    spot: {
      Lat: -27.021816666666666,
      Long: 153.45428333333334,
      spotName: "Yellow Patch",
    },
  },
  866: {
    spot: {
      Lat: -28.1656,
      Long: 153.53986666666665,
      spotName: "Coolangatta",
    },
  },
  867: {
    spot: { Lat: -28.167316666666668, Long: 153.5522, spotName: "Duranbah" },
  },
  868: {
    spot: {
      Lat: -28.041683333333335,
      Long: 153.43608333333333,
      spotName: "Mermaid Beach",
    },
  },
  869: {
    spot: {
      Lat: -28.076633333333334,
      Long: 153.4493,
      spotName: "Miami State High School",
    },
  },
  870: {
    spot: {
      Lat: -27.930216666666666,
      Long: 153.42873333333333,
      spotName: "South Stradie",
    },
  },
  871: {
    spot: {
      Lat: -28.16385,
      Long: 153.54641666666666,
      spotName: "Rainbow bay",
    },
  },
  872: {
    spot: {
      Lat: -28.145866666666667,
      Long: 153.49583333333334,
      spotName: "Tugun",
    },
  },
  873: { spot: { Lat: -38.53805, Long: 145.3333, spotName: "Anzacs" } },
  874: {
    spot: {
      Lat: -28.163283333333332,
      Long: 153.54123333333334,
      spotName: "Superbanks",
    },
  },
  875: {
    spot: {
      Lat: -38.552733333333336,
      Long: 145.47718333333333,
      spotName: "Kilcunda",
    },
  },
  876: {
    spot: { Lat: -38.3561, Long: 144.29698333333334, spotName: "Bird Rock" },
  },
  877: {
    spot: {
      Lat: -38.4923,
      Long: 144.91173333333333,
      spotName: "Bushrangers bay",
    },
  },
  878: { spot: { Lat: -27.975, Long: 153.43025, spotName: "Main beach" } },
  879: {
    spot: {
      Lat: -34.899033333333335,
      Long: 137.01101666666668,
      spotName: "Berry Bay",
    },
  },
  880: {
    spot: { Lat: -35.536433333333335, Long: 138.66965, spotName: "Bullies" },
  },
  881: {
    spot: {
      Lat: -41.16623333333333,
      Long: 146.36606666666665,
      spotName: "Devonport Rivermouth",
    },
  },
  882: {
    spot: {
      Lat: -38.449283333333334,
      Long: 144.12105,
      spotName: "Sunnymead",
    },
  },
  883: {
    spot: {
      Lat: -38.307516666666665,
      Long: 144.3764,
      spotName: "Point Impossible",
    },
  },
  884: {
    spot: {
      Lat: -28.1615,
      Long: 153.54966666666667,
      spotName: "Snapper Rocks",
    },
  },
  885: { spot: { Lat: -35.5377, Long: 138.65, spotName: "Dump" } },
  886: {
    spot: { Lat: -35.2658, Long: 136.88828333333333, spotName: "Pondie" },
  },
  887: {
    spot: {
      Lat: -33.61998333333333,
      Long: 134.83053333333334,
      spotName: "Blackfellows",
    },
  },
  888: {
    spot: {
      Lat: -42.993633333333335,
      Long: 147.52578333333332,
      spotName: "Clifton Beach",
    },
  },
  889: { spot: { Lat: -39.01845, Long: 146.29155, spotName: "Picnic Bay" } },
  890: {
    spot: {
      Lat: -38.37181666666667,
      Long: 144.28105,
      spotName: "Bells Beach",
    },
  },
  891: {
    spot: { Lat: -38.50725, Long: 144.00435, spotName: "Cathedral Rock" },
  },
  892: {
    spot: {
      Lat: -38.29226666666667,
      Long: 144.40788333333333,
      spotName: "Bancoora",
    },
  },
  893: {
    spot: { Lat: -38.4851, Long: 145.01008333333334, spotName: "Big Left" },
  },
  894: {
    spot: {
      Lat: -28.094283333333333,
      Long: 153.46185,
      spotName: "Tallebudgera Creekmouth",
    },
  },
  895: {
    spot: { Lat: -35.2433, Long: 138.46378333333334, spotName: "Gull rock" },
  },
  896: {
    spot: {
      Lat: -34.91126666666667,
      Long: 135.68243333333334,
      spotName: "Fishery Bay",
    },
  },
  897: {
    spot: {
      Lat: -38.546483333333335,
      Long: 143.98613333333333,
      spotName: "Lorne Point",
    },
  },
  898: {
    spot: {
      Lat: -38.42851666666667,
      Long: 144.1862,
      spotName: "Roadnight point",
    },
  },
  899: {
    spot: {
      Lat: -38.27133333333333,
      Long: 144.52446666666665,
      spotName: "Ocean grove",
    },
  },
  900: {
    spot: {
      Lat: -38.04971666666667,
      Long: 140.78533333333334,
      spotName: "Browns Beach",
    },
  },
  901: {
    spot: {
      Lat: -35.177616666666665,
      Long: 138.46675,
      spotName: "3-poles reef",
    },
  },
  902: {
    spot: {
      Lat: -42.86828333333333,
      Long: 147.61398333333332,
      spotName: "Park beach",
    },
  },
  903: { spot: { Lat: -37.8083, Long: 148.7257, spotName: "Salmon rocks" } },
  904: {
    spot: {
      Lat: -38.28535,
      Long: 144.46163333333334,
      spotName: "13th beach",
    },
  },
  905: {
    spot: { Lat: -38.41565, Long: 144.18653333333333, spotName: "Anglesea" },
  },
  906: {
    spot: {
      Lat: -28.028866666666666,
      Long: 153.43616666666668,
      spotName: "Broadbeach",
    },
  },
  907: {
    spot: {
      Lat: -28.12548333333333,
      Long: 153.48596666666666,
      spotName: "Currumbin Alley",
    },
  },
  908: {
    spot: {
      Lat: -35.515,
      Long: 138.70848333333333,
      spotName: "Middleton Point",
    },
  },
  909: {
    spot: {
      Lat: -42.92413333333333,
      Long: 147.52115,
      spotName: "May's Point",
    },
  },
  910: {
    spot: { Lat: -38.7261, Long: 143.71138333333334, spotName: "Skenes Ck." },
  },
  911: {
    spot: { Lat: -38.36145, Long: 144.27331666666666, spotName: "Winki Pop" },
  },
  912: {
    spot: {
      Lat: -32.87878333333333,
      Long: 134.08216666666667,
      spotName: "Granites",
    },
  },
  913: {
    spot: {
      Lat: -41.866733333333336,
      Long: 148.29306666666668,
      spotName: "Carparks",
    },
  },
  914: {
    spot: {
      Lat: -38.28815,
      Long: 144.47983333333335,
      spotName: "Beacon Bommie",
    },
  },
  915: {
    spot: {
      Lat: -38.482866666666666,
      Long: 145.00403333333333,
      spotName: "Cyrils",
    },
  },
  916: {
    spot: {
      Lat: -38.39601666666667,
      Long: 144.79276666666667,
      spotName: "Lizard Heads",
    },
  },
  917: {
    spot: {
      Lat: -38.60431666666667,
      Long: 142.86146666666667,
      spotName: "The Well",
    },
  },
  918: {
    spot: {
      Lat: -33.958733333333335,
      Long: 114.97788333333334,
      spotName: "The box",
    },
  },
  919: {
    spot: {
      Lat: -32.60085,
      Long: 115.62826666666666,
      spotName: "Mandurah wedge",
    },
  },
  920: {
    spot: { Lat: -38.480466666666665, Long: 145.01755, spotName: "Sunset" },
  },
  921: {
    spot: {
      Lat: -38.40396666666667,
      Long: 142.52031666666667,
      spotName: "Japs",
    },
  },
  922: {
    spot: {
      Lat: -35.01233333333333,
      Long: 118.03156666666666,
      spotName: "Caseys",
    },
  },
  923: {
    spot: { Lat: -38.396033333333335, Long: 142.48985, spotName: "Flume" },
  },
  924: {
    spot: {
      Lat: -33.75695,
      Long: 114.98956666666666,
      spotName: "Moses Rock",
    },
  },
  925: {
    spot: {
      Lat: -33.633116666666666,
      Long: 115.02735,
      spotName: "Rabbit Hill",
    },
  },
  926: { spot: { Lat: -33.86265, Long: 114.9757, spotName: "South Point" } },
  927: {
    spot: { Lat: -32.5824, Long: 115.64861666666667, spotName: "Gearies" },
  },
  928: {
    spot: {
      Lat: -32.65298333333333,
      Long: 115.61446666666667,
      spotName: "Tims thicket",
    },
  },
  929: {
    spot: {
      Lat: -38.36371666666667,
      Long: 144.75091666666665,
      spotName: "Koonya  reef",
    },
  },
  930: {
    spot: {
      Lat: -35.096183333333336,
      Long: 117.97633333333333,
      spotName: "Miserys",
    },
  },
  931: {
    spot: {
      Lat: -32.50475,
      Long: 115.73548333333333,
      spotName: "4th groyne",
    },
  },
  932: {
    spot: {
      Lat: -33.304116666666665,
      Long: 115.64576666666666,
      spotName: "Bay (left wall)",
    },
  },
  933: { spot: { Lat: -38.32785, Long: 144.68625, spotName: "Spooks" } },
  934: {
    spot: { Lat: -38.46085, Long: 145.03411666666668, spotName: "The Farm" },
  },
  935: {
    spot: { Lat: -35.04005, Long: 116.8434, spotName: "Conspicuous Beach" },
  },
  936: {
    spot: {
      Lat: -33.6985,
      Long: 114.98736666666667,
      spotName: "Injidup Carparks",
    },
  },
  937: {
    spot: {
      Lat: -33.62765,
      Long: 115.02586666666667,
      spotName: "Mouse Traps",
    },
  },
  938: {
    spot: { Lat: -33.5331, Long: 115.02513333333333, spotName: "The Farm" },
  },
  939: {
    spot: {
      Lat: -33.548833333333334,
      Long: 115.00815,
      spotName: "Three Bears",
    },
  },
  940: {
    spot: {
      Lat: -33.65631666666667,
      Long: 115.01733333333334,
      spotName: "Smiths reef",
    },
  },
  941: {
    spot: { Lat: -38.3749, Long: 141.63978333333333, spotName: "Blacknose" },
  },
  942: {
    spot: {
      Lat: -33.54483333333334,
      Long: 115.04608333333333,
      spotName: "Bunker bay - Boneyards",
    },
  },
  943: {
    spot: {
      Lat: -33.65938333333333,
      Long: 115.01055,
      spotName: "Smiths Point - Left",
    },
  },
  944: {
    spot: { Lat: -32.88263333333333, Long: 115.6485, spotName: "Preston" },
  },
  945: {
    spot: {
      Lat: -38.51781666666667,
      Long: 145.30618333333334,
      spotName: "Forrest caves",
    },
  },
  946: {
    spot: {
      Lat: -38.43301666666667,
      Long: 145.0476,
      spotName: "Little Noosa",
    },
  },
  947: {
    spot: {
      Lat: -38.2998,
      Long: 144.64393333333334,
      spotName: "Quarantines",
    },
  },
  948: {
    spot: {
      Lat: -33.976533333333336,
      Long: 114.98248333333333,
      spotName: "Margaret River - Surfers Point",
    },
  },
  949: {
    spot: {
      Lat: -33.544183333333336,
      Long: 115.00806666666666,
      spotName: "Windmills",
    },
  },
  950: {
    spot: {
      Lat: -33.308616666666666,
      Long: 115.6366,
      spotName: "Bunbury - Surf Club (Backbeach)",
    },
  },
  951: {
    spot: {
      Lat: -33.308566666666664,
      Long: 115.63646666666666,
      spotName: "Bunbury - Fragles",
    },
  },
  952: {
    spot: { Lat: -38.4847, Long: 145.02528333333333, spotName: "Gunnery" },
  },
  953: {
    spot: {
      Lat: -38.50868333333333,
      Long: 145.24723333333333,
      spotName: "Papas",
    },
  },
  954: {
    spot: { Lat: -38.62505, Long: 142.97985, spotName: "Easter Reef" },
  },
  955: {
    spot: { Lat: -35.0041, Long: 116.53335, spotName: "Mandalay Beach" },
  },
  956: {
    spot: {
      Lat: -34.1658,
      Long: 115.02823333333333,
      spotName: "Boranup Beach",
    },
  },
  957: {
    spot: {
      Lat: -33.821583333333336,
      Long: 114.99496666666667,
      spotName: "Guillotines",
    },
  },
  958: {
    spot: {
      Lat: -33.54755,
      Long: 115.05913333333334,
      spotName: "Rocky point",
    },
  },
  959: {
    spot: {
      Lat: -32.60308333333333,
      Long: 115.62853333333334,
      spotName: "Pyramids",
    },
  },
  960: {
    spot: { Lat: -38.414316666666664, Long: 145.0755, spotName: "Pt. Leo" },
  },
  961: {
    spot: {
      Lat: -38.407133333333334,
      Long: 144.80685,
      spotName: "Rye Ocean Beach",
    },
  },
  962: {
    spot: {
      Lat: -34.998066666666666,
      Long: 118.06333333333333,
      spotName: "Nanarup beach",
    },
  },
  963: {
    spot: {
      Lat: -34.32458333333334,
      Long: 115.17955,
      spotName: "Augusta Rivermouth",
    },
  },
  964: {
    spot: {
      Lat: -34.00456666666667,
      Long: 114.99458333333334,
      spotName: "Gas Bay",
    },
  },
  965: {
    spot: {
      Lat: -33.80478333333333,
      Long: 114.99698333333333,
      spotName: "Gallows",
    },
  },
  966: {
    spot: {
      Lat: -33.90481666666667,
      Long: 114.9867,
      spotName: "Ellensbrook",
    },
  },
  967: {
    spot: {
      Lat: -33.32705,
      Long: 115.62898333333334,
      spotName: "Bunbury - Bay",
    },
  },
  968: {
    spot: {
      Lat: -33.31316666666667,
      Long: 115.63455,
      spotName: "Bunbury - BP Reef",
    },
  },
  969: {
    spot: {
      Lat: -35.075783333333334,
      Long: 117.5183,
      spotName: "Lowlands beach",
    },
  },
  970: {
    spot: {
      Lat: -33.8735,
      Long: 114.97923333333334,
      spotName: "Cobblestones",
    },
  },
  971: {
    spot: {
      Lat: -33.85961666666667,
      Long: 114.98393333333334,
      spotName: "North Point",
    },
  },
  972: {
    spot: { Lat: -32.30435, Long: 115.68853333333334, spotName: "Pengoes" },
  },
  973: {
    spot: {
      Lat: -33.51348333333333,
      Long: 115.5157,
      spotName: "Peppi Beach Reef - Capel Cut",
    },
  },
  974: { spot: { Lat: -32.4459, Long: 115.74775, spotName: "Singleton" } },
  975: {
    spot: {
      Lat: -38.51166666666666,
      Long: 145.15101666666666,
      spotName: "Summerlands",
    },
  },
  976: {
    spot: { Lat: -34.01076666666667, Long: 114.9975, spotName: "Boodjidup" },
  },
  977: { spot: { Lat: -34.37, Long: 115.1338, spotName: "Waterwheels" } },
  978: {
    spot: {
      Lat: -33.53395,
      Long: 115.00428333333333,
      spotName: "Lighthouse",
    },
  },
  979: {
    spot: {
      Lat: -32.199733333333334,
      Long: 115.67641666666667,
      spotName: "Garden Island",
    },
  },
  980: {
    spot: {
      Lat: -38.448483333333336,
      Long: 144.85525,
      spotName: "Gunnamatta",
    },
  },
  981: {
    spot: {
      Lat: -38.486216666666664,
      Long: 145.02813333333333,
      spotName: "Meanos",
    },
  },
  982: {
    spot: {
      Lat: -38.34676666666667,
      Long: 144.72671666666668,
      spotName: "Sorrento",
    },
  },
  983: {
    spot: {
      Lat: -33.97631666666667,
      Long: 114.98281666666666,
      spotName: "Margaret River - Suicides",
    },
  },
  984: {
    spot: {
      Lat: -33.32373333333334,
      Long: 115.62955,
      spotName: "Bunbury - Sidies",
    },
  },
  985: {
    spot: {
      Lat: -32.53411666666667,
      Long: 115.69005,
      spotName: "Hunchies hunchies bay",
    },
  },
  986: {
    spot: {
      Lat: -38.0076,
      Long: 145.08198333333334,
      spotName: "Mordialloc Beach",
    },
  },
  987: {
    spot: {
      Lat: -35.025216666666665,
      Long: 117.33845,
      spotName: "Ocean beach",
    },
  },
  988: {
    spot: {
      Lat: -33.769866666666665,
      Long: 114.99028333333334,
      spotName: "Honeycombs",
    },
  },
  989: {
    spot: {
      Lat: -33.302166666666665,
      Long: 115.66685,
      spotName: "Bunbury - Cut",
    },
  },
  990: {
    spot: {
      Lat: -33.30878333333333,
      Long: 115.63581666666667,
      spotName: "Bunbury - The Groyne",
    },
  },
  991: {
    spot: {
      Lat: -38.50516666666667,
      Long: 145.25456666666668,
      spotName: "Smiths Beach",
    },
  },
  992: {
    spot: {
      Lat: -38.4966,
      Long: 145.14656666666667,
      spotName: "Flynns Reef",
    },
  },
  993: {
    spot: { Lat: -38.42665, Long: 145.06805, spotName: "Second Reef" },
  },
  994: {
    spot: { Lat: -34.00095, Long: 114.99158333333334, spotName: "Grunters" },
  },
  995: {
    spot: {
      Lat: -33.65303333333333,
      Long: 115.01861666666667,
      spotName: "Super-tubes",
    },
  },
  996: {
    spot: {
      Lat: -32.5924,
      Long: 115.63801666666667,
      spotName: "Avalon Point",
    },
  },
  997: {
    spot: {
      Lat: -32.639716666666665,
      Long: 115.61703333333334,
      spotName: "Melros",
    },
  },
  998: {
    spot: {
      Lat: -38.335116666666664,
      Long: 144.7044,
      spotName: "Portsea Back Beach",
    },
  },
  999: {
    spot: { Lat: -38.54481666666667, Long: 145.3377, spotName: "Woolamai" },
  },
  1000: {
    spot: {
      Lat: -38.78273333333333,
      Long: 143.65611666666666,
      spotName: "Infinities",
    },
  },
  1001: { spot: { Lat: -33.98925, Long: 123.1014, spotName: "Cyclops" } },
  1002: { spot: { Lat: -34.04285, Long: 115.0002, spotName: "Redgate" } },
  1003: {
    spot: {
      Lat: -33.970416666666665,
      Long: 114.98505,
      spotName: "Margaret Rivermouth",
    },
  },
  1004: {
    spot: {
      Lat: -33.865566666666666,
      Long: 114.9814,
      spotName: "Huzzawouie (Huzzas)",
    },
  },
  1005: {
    spot: {
      Lat: -33.69663333333333,
      Long: 114.99008333333333,
      spotName: "Pea Break",
    },
  },
  1006: {
    spot: {
      Lat: -33.8533,
      Long: 114.98616666666666,
      spotName: "The Bommie - Cow Bombie",
    },
  },
  1007: {
    spot: {
      Lat: -33.63726666666667,
      Long: 115.02341666666666,
      spotName: "Yallingup",
    },
  },
  1008: {
    spot: {
      Lat: -38.509966666666664,
      Long: 145.26115,
      spotName: "Express Point",
    },
  },
  1009: {
    spot: {
      Lat: -38.50548333333333,
      Long: 145.14036666666667,
      spotName: "Right Point",
    },
  },
  1010: {
    spot: {
      Lat: -38.5101,
      Long: 145.28191666666666,
      spotName: "Surfies Point",
    },
  },
  1011: {
    spot: {
      Lat: -35.043733333333336,
      Long: 117.68783333333333,
      spotName: "Muttonbird island",
    },
  },
  1012: {
    spot: {
      Lat: -33.979166666666664,
      Long: 114.98191666666666,
      spotName: "Margaret River - bommie",
    },
  },
  1013: {
    spot: {
      Lat: -38.50553333333333,
      Long: 145.24996666666667,
      spotName: "YCW",
    },
  },
  1014: {
    spot: {
      Lat: -33.88741666666667,
      Long: 114.98291666666667,
      spotName: "Lefthanders",
    },
  },
  1015: {
    spot: { Lat: -33.65875, Long: 115.01535, spotName: "Smith Beach" },
  },
  1016: {
    spot: {
      Lat: -31.872716666666665,
      Long: 115.75183333333334,
      spotName: "Bennion Beach - cleggies",
    },
  },
  1017: {
    spot: {
      Lat: -32.01575,
      Long: 115.74841666666667,
      spotName: "Artificial reef",
    },
  },
  1018: {
    spot: {
      Lat: -31.8782,
      Long: 115.75123333333333,
      spotName: "Trigg 3rds - Serpintine",
    },
  },
  1019: {
    spot: { Lat: -31.758883333333333, Long: 115.72605, spotName: "Mossies" },
  },
  1020: {
    spot: {
      Lat: -27.147816666666667,
      Long: -109.43233333333333,
      spotName: "Papa Hanga Roa",
    },
  },
  1021: {
    spot: {
      Lat: -27.1699,
      Long: -109.38721666666666,
      spotName: "Papa Tangaroa",
    },
  },
  1022: {
    spot: {
      Lat: -21.908433333333335,
      Long: 165.75423333333333,
      spotName: "Ouano",
    },
  },
  1023: {
    spot: {
      Lat: -35.711283333333334,
      Long: 174.52296666666666,
      spotName: "Pataua",
    },
  },
  1024: {
    spot: {
      Lat: -36.080983333333336,
      Long: 174.59863333333334,
      spotName: "Mangawhai Heads",
    },
  },
  1025: {
    spot: {
      Lat: -31.86025,
      Long: 115.75133333333333,
      spotName: "North Beach - Tom's",
    },
  },
  1026: {
    spot: {
      Lat: -31.923766666666666,
      Long: 115.75468333333333,
      spotName: "Floreat Groyne",
    },
  },
  1027: {
    spot: {
      Lat: -31.866966666666666,
      Long: 115.7513,
      spotName: "Mettams pool",
    },
  },
  1028: {
    spot: {
      Lat: -31.8126,
      Long: 115.70808333333333,
      spotName: "Seal island",
    },
  },
  1029: {
    spot: {
      Lat: -18.1737,
      Long: 177.50926666666666,
      spotName: "Sigatoka Rivermouth",
    },
  },
  1030: {
    spot: {
      Lat: -36.17411666666667,
      Long: 174.65643333333333,
      spotName: "Forestry",
    },
  },
  1031: {
    spot: {
      Lat: -36.8799,
      Long: 175.82536666666667,
      spotName: "Hot water Beach",
    },
  },
  1032: {
    spot: {
      Lat: -31.990016666666666,
      Long: 115.7513,
      spotName: "Voodoos (north cott left)",
    },
  },
  1033: {
    spot: {
      Lat: -31.876166666666666,
      Long: 115.75011666666667,
      spotName: "Trigg point",
    },
  },
  1034: {
    spot: {
      Lat: -31.847966666666668,
      Long: 115.75173333333333,
      spotName: "Watermans",
    },
  },
  1035: {
    spot: {
      Lat: -28.794133333333335,
      Long: 114.61178333333334,
      spotName: "Back beach",
    },
  },
  1036: {
    spot: {
      Lat: -31.555716666666665,
      Long: 115.62616666666666,
      spotName: "Yanchep - doggies beach",
    },
  },
  1037: {
    spot: {
      Lat: -31.554033333333333,
      Long: 115.62655,
      spotName: "Yanchep - Locals",
    },
  },
  1038: {
    spot: {
      Lat: -35.83695,
      Long: 174.57358333333335,
      spotName: "Ocean Beach",
    },
  },
  1039: {
    spot: {
      Lat: -36.791216666666664,
      Long: 174.77986666666666,
      spotName: "Takapuna",
    },
  },
  1040: {
    spot: {
      Lat: -31.030066666666666,
      Long: 115.3245,
      spotName: "Lancelin Island",
    },
  },
  1041: {
    spot: {
      Lat: -28.793116666666666,
      Long: 114.59503333333333,
      spotName: "Separation Point",
    },
  },
  1042: {
    spot: { Lat: -27.140066666666666, Long: -109.42875, spotName: "Vai Uri" },
  },
  1043: {
    spot: {
      Lat: -18.296883333333334,
      Long: 177.93036666666666,
      spotName: "Serua Rights",
    },
  },
  1044: {
    spot: {
      Lat: -35.17763333333333,
      Long: 173.1193,
      spotName: "Shipwrecks Bay",
    },
  },
  1045: {
    spot: {
      Lat: -24.030916666666666,
      Long: 113.43943333333333,
      spotName: "Red Bluff",
    },
  },
  1046: {
    spot: {
      Lat: -35.16826666666667,
      Long: 173.08965,
      spotName: "Mukerau Beach",
    },
  },
  1047: {
    spot: {
      Lat: -36.04515,
      Long: 174.53456666666668,
      spotName: "Langs beach",
    },
  },
  1048: {
    spot: {
      Lat: -32.0235,
      Long: 115.75056666666667,
      spotName: "Leighton Beach",
    },
  },
  1049: {
    spot: { Lat: -28.7796, Long: 114.57143333333333, spotName: "Explosives" },
  },
  1050: { spot: { Lat: -36.36905, Long: 174.83745, spotName: "Tawharanui" } },
  1051: {
    spot: {
      Lat: -28.780283333333333,
      Long: 114.56988333333334,
      spotName: "Hells gates",
    },
  },
  1052: {
    spot: { Lat: -31.522283333333334, Long: 115.60405, spotName: "The spot" },
  },
  1053: {
    spot: { Lat: -31.8969, Long: 115.7544, spotName: "Brighton Beach" },
  },
  1054: {
    spot: {
      Lat: -31.934383333333333,
      Long: 115.75416666666666,
      spotName: "City Beach",
    },
  },
  1055: {
    spot: {
      Lat: -32.02075,
      Long: 115.44931666666666,
      spotName: "Cathedral rock",
    },
  },
  1056: {
    spot: {
      Lat: -32.01891666666667,
      Long: 115.4864,
      spotName: "Strickland Bay",
    },
  },
  1057: {
    spot: {
      Lat: -31.8911,
      Long: 115.75511666666667,
      spotName: "Scarborough",
    },
  },
  1058: {
    spot: {
      Lat: -31.828333333333333,
      Long: 115.74265,
      spotName: "Sorrento - Hungries",
    },
  },
  1059: {
    spot: {
      Lat: -31.73225,
      Long: 115.71873333333333,
      spotName: "Burns Beach Reefy",
    },
  },
  1060: {
    spot: {
      Lat: -31.03035,
      Long: 115.33936666666666,
      spotName: "Lancelin (back beach)",
    },
  },
  1061: {
    spot: {
      Lat: -17.841533333333334,
      Long: 177.16948333333335,
      spotName: "Wilkes Passage",
    },
  },
  1062: {
    spot: {
      Lat: -17.84435,
      Long: 177.18038333333334,
      spotName: "Namotu Lefts",
    },
  },
  1063: {
    spot: {
      Lat: -30.324283333333334,
      Long: 153.16176666666667,
      spotName: "Tavewa",
    },
  },
  1064: {
    spot: {
      Lat: -36.688316666666665,
      Long: 174.75278333333333,
      spotName: "Long Bay",
    },
  },
  1065: {
    spot: {
      Lat: -28.861866666666668,
      Long: 114.63425,
      spotName: "Greenough",
    },
  },
  1066: {
    spot: {
      Lat: 47.710683333333336,
      Long: -3.3748666666666667,
      spotName: "pic kipu",
    },
  },
  1067: {
    spot: {
      Lat: -31.999516666666665,
      Long: 115.75091666666667,
      spotName: "Isolator",
    },
  },
  1068: {
    spot: {
      Lat: -31.8269,
      Long: 115.74116666666667,
      spotName: "The Wall - Hillary's",
    },
  },
  1069: {
    spot: {
      Lat: -31.352833333333333,
      Long: 115.49918333333333,
      spotName: "Guilderton Rivermouth",
    },
  },
  1070: {
    spot: { Lat: -27.73425, Long: 114.14535, spotName: "Jakes Point" },
  },
  1071: { spot: { Lat: -17.88595, Long: 177.18645, spotName: "Cloudbreak" } },
  1072: {
    spot: {
      Lat: -36.269666666666666,
      Long: 174.79271666666668,
      spotName: "Goat Island Reef",
    },
  },
  1073: {
    spot: { Lat: -36.591, Long: 174.69978333333333, spotName: "Orewa Beach" },
  },
  1074: {
    spot: {
      Lat: -36.339016666666666,
      Long: 174.78188333333333,
      spotName: "Omaha",
    },
  },
  1075: {
    spot: {
      Lat: -36.165533333333336,
      Long: 174.65198333333333,
      spotName: "Te Arai Point",
    },
  },
  1076: {
    spot: {
      Lat: -31.753183333333332,
      Long: 115.72488333333334,
      spotName: "Big Rock",
    },
  },
  1077: {
    spot: { Lat: -32.02845, Long: 115.52605, spotName: "Chicken Reef" },
  },
  1078: {
    spot: { Lat: -32.02258333333333, Long: 115.44845, spotName: "Rotto Box" },
  },
  1079: {
    spot: { Lat: -31.4689, Long: 115.56836666666666, spotName: "Derrs" },
  },
  1080: {
    spot: {
      Lat: -28.187633333333334,
      Long: 114.23531666666666,
      spotName: "Port Gregory",
    },
  },
  1081: {
    spot: {
      Lat: -36.787083333333335,
      Long: 175.0843,
      spotName: "Waiheke Is",
    },
  },
  1082: {
    spot: {
      Lat: -31.997816666666665,
      Long: 115.75028333333333,
      spotName: "The Cove",
    },
  },
  1083: {
    spot: {
      Lat: -36.298833333333334,
      Long: 174.80376666666666,
      spotName: "Daniels Reef",
    },
  },
  1084: {
    spot: {
      Lat: -31.833666666666666,
      Long: 115.7469,
      spotName: "3rd Groyne",
    },
  },
  1085: {
    spot: {
      Lat: -31.995483333333333,
      Long: 115.75083333333333,
      spotName: "Cottesloe",
    },
  },
  1086: {
    spot: {
      Lat: -32.11196666666667,
      Long: 115.76251666666667,
      spotName: "coogee beach (miracles)",
    },
  },
  1087: { spot: { Lat: -31.6959, Long: 115.70225, spotName: "Claytons" } },
  1088: {
    spot: {
      Lat: -19.128333333333334,
      Long: 177.94166666666666,
      spotName: "King Kong Left",
    },
  },
  1089: {
    spot: {
      Lat: -18.201266666666665,
      Long: 177.64863333333332,
      spotName: "Hideaway",
    },
  },
  1090: {
    spot: {
      Lat: -22.3615,
      Long: 166.25748333333334,
      spotName: "Dumbéa Right",
    },
  },
  1091: {
    spot: {
      Lat: -34.99386666666667,
      Long: 173.71183333333335,
      spotName: "Taupo Bay",
    },
  },
  1092: { spot: { Lat: -31.77335, Long: 115.73175, spotName: "Mullaz" } },
  1093: {
    spot: {
      Lat: -32.04043333333333,
      Long: 115.74128333333333,
      spotName: "Sandtrax",
    },
  },
  1094: {
    spot: {
      Lat: -35.55681666666667,
      Long: 174.47661666666667,
      spotName: "Sandy Bay",
    },
  },
  1095: {
    spot: {
      Lat: -37.642916666666665,
      Long: 176.2026,
      spotName: "Mount Maunganui",
    },
  },
  1096: {
    spot: { Lat: -36.99525, Long: 175.86188333333334, spotName: "Tairua" },
  },
  1097: {
    spot: {
      Lat: -37.74385,
      Long: 176.47098333333332,
      spotName: "Newdicks Beach",
    },
  },
  1098: {
    spot: {
      Lat: -37.871066666666664,
      Long: 176.71096666666668,
      spotName: "Matata",
    },
  },
  1099: {
    spot: {
      Lat: -39.051383333333334,
      Long: 174.0423,
      spotName: "Break water",
    },
  },
  1100: {
    spot: {
      Lat: -36.90063333333333,
      Long: 174.44538333333333,
      spotName: "Bethells",
    },
  },
  1101: {
    spot: {
      Lat: -39.016133333333336,
      Long: 177.88746666666665,
      spotName: "Mahanga",
    },
  },
  1102: {
    spot: {
      Lat: -39.597633333333334,
      Long: 176.94631666666666,
      spotName: "Haumoana",
    },
  },
  1103: {
    spot: {
      Lat: -39.068266666666666,
      Long: 174.01506666666666,
      spotName: "Back Beach",
    },
  },
  1104: { spot: { Lat: -39.63365, Long: 176.98425, spotName: "Teawanga" } },
  1105: {
    spot: { Lat: -37.39635, Long: 175.69885, spotName: "Whangamata Beach" },
  },
  1106: {
    spot: {
      Lat: -37.95543333333333,
      Long: 177.0252,
      spotName: "Ohope Beach West End",
    },
  },
  1107: { spot: { Lat: -37.1048, Long: 175.88675, spotName: "Opotere" } },
  1108: {
    spot: {
      Lat: -39.05428333333333,
      Long: 174.02931666666666,
      spotName: "Mikotai",
    },
  },
  1109: {
    spot: {
      Lat: -39.226933333333335,
      Long: 173.77453333333332,
      spotName: "Stent Road",
    },
  },
  1110: {
    spot: {
      Lat: -37.04723333333333,
      Long: 174.50546666666668,
      spotName: "Whatipu",
    },
  },
  1111: { spot: { Lat: -38.67175, Long: 178.0131, spotName: "Roberts rd" } },
  1112: { spot: { Lat: -38.7115, Long: 177.9471, spotName: "Big River" } },
  1113: {
    spot: { Lat: -39.75155, Long: 177.02545, spotName: "Ocean  beach" },
  },
  1114: {
    spot: {
      Lat: -41.10561666666667,
      Long: 174.83453333333333,
      spotName: "Titahi Bay",
    },
  },
  1115: {
    spot: { Lat: -37.39975, Long: 175.94605, spotName: "Waihi Beach" },
  },
  1116: {
    spot: {
      Lat: -36.59803333333333,
      Long: 175.5253,
      spotName: "Waikawau Bay",
    },
  },
  1117: { spot: { Lat: -38.6779, Long: 178.0817, spotName: "Pines" } },
  1118: {
    spot: {
      Lat: -38.675466666666665,
      Long: 178.001,
      spotName: "The pipe (midway beach)",
    },
  },
  1119: {
    spot: {
      Lat: -41.50723333333333,
      Long: 175.51526666666666,
      spotName: "Tora",
    },
  },
  1120: {
    spot: {
      Lat: -40.907833333333336,
      Long: 176.22233333333332,
      spotName: "The Gap",
    },
  },
  1121: {
    spot: {
      Lat: -39.04305,
      Long: 174.09656666666666,
      spotName: "Fitzroy Beach",
    },
  },
  1122: {
    spot: {
      Lat: -36.83016666666666,
      Long: 174.43405,
      spotName: "Muriwai Beach",
    },
  },
  1123: {
    spot: {
      Lat: -37.82131666666667,
      Long: 174.81445,
      spotName: "Raglan - Manu Bay",
    },
  },
  1124: {
    spot: {
      Lat: -38.685316666666665,
      Long: 178.07825,
      spotName: "Wainui Beach",
    },
  },
  1125: {
    spot: { Lat: -38.7003, Long: 178.05101666666667, spotName: "The rock" },
  },
  1126: {
    spot: { Lat: -39.3019, Long: 176.97701666666666, spotName: "Waipatiki" },
  },
  1127: {
    spot: { Lat: -37.63013333333333, Long: 176.1842, spotName: "Blowhole" },
  },
  1128: {
    spot: {
      Lat: -38.70005,
      Long: 178.05796666666666,
      spotName: "Sponge bay",
    },
  },
  1129: {
    spot: {
      Lat: -40.758916666666664,
      Long: 175.1006,
      spotName: "Otaki River mouth",
    },
  },
  1130: {
    spot: { Lat: -38.23181666666667, Long: 178.3115, spotName: "Anaura Bay" },
  },
  1131: {
    spot: { Lat: -40.50378333333333, Long: 172.66705, spotName: "Wairaiki" },
  },
  1132: {
    spot: { Lat: -37.018316666666664, Long: 175.87025, spotName: "pauanui" },
  },
  1133: {
    spot: {
      Lat: -38.66343333333333,
      Long: 178.10765,
      spotName: "Makarori Point",
    },
  },
  1134: {
    spot: {
      Lat: -41.34981666666667,
      Long: 174.7755,
      spotName: "The Island (Island Bay)",
    },
  },
  1135: {
    spot: {
      Lat: -39.07678333333333,
      Long: 177.79998333333333,
      spotName: "Blacks",
    },
  },
  1136: {
    spot: {
      Lat: -36.98911666666667,
      Long: 174.47146666666666,
      spotName: "Karekare",
    },
  },
  1137: {
    spot: { Lat: -37.6471, Long: 176.19966666666667, spotName: "Tay street" },
  },
  1138: {
    spot: {
      Lat: -41.335033333333335,
      Long: 174.80346666666668,
      spotName: "Lyall Bay",
    },
  },
  1139: { spot: { Lat: -39.81395, Long: 177.0028, spotName: "Waimarama" } },
  1140: {
    spot: {
      Lat: -41.33286666666667,
      Long: 174.8315,
      spotName: "Breaker Bay",
    },
  },
  1141: {
    spot: {
      Lat: -37.8229,
      Long: 174.79291666666666,
      spotName: "Raglan - Indicators",
    },
  },
  1142: {
    spot: { Lat: -43.77766666666667, Long: 173.109, spotName: "Hickory Bay" },
  },
  1143: {
    spot: {
      Lat: -37.36225,
      Long: 175.93746666666667,
      spotName: "Homunga Bay",
    },
  },
  1144: {
    spot: {
      Lat: -37.2133,
      Long: 175.89343333333332,
      spotName: "Clark Island",
    },
  },
  1145: {
    spot: {
      Lat: -38.70601666666666,
      Long: 178.04721666666666,
      spotName: "The Island",
    },
  },
  1146: {
    spot: {
      Lat: -41.3372,
      Long: 174.80711666666667,
      spotName: "Airport Rights",
    },
  },
  1147: {
    spot: { Lat: -36.83388333333333, Long: 174.4216, spotName: "Maori bay" },
  },
  1148: {
    spot: { Lat: -36.956066666666665, Long: 174.46735, spotName: "Piha" },
  },
  1149: {
    spot: {
      Lat: -37.28381666666667,
      Long: 174.65445,
      spotName: "Karioitahi",
    },
  },
  1150: {
    spot: { Lat: -38.68651666666667, Long: 178.0377, spotName: "Cliffs" },
  },
  1151: {
    spot: { Lat: -37.2032, Long: 175.8803, spotName: "Whangamata Estuary" },
  },
  1152: {
    spot: {
      Lat: -41.34226666666667,
      Long: 174.78501666666668,
      spotName: "Houghton Bay",
    },
  },
  1153: {
    spot: {
      Lat: -40.982483333333334,
      Long: 174.96001666666666,
      spotName: "Paekakariki",
    },
  },
  1154: {
    spot: {
      Lat: -37.823,
      Long: 174.79883333333333,
      spotName: "Raglan - Whale Bay",
    },
  },
  1155: {
    spot: { Lat: -36.72923333333333, Long: 175.6566, spotName: "Matarangi" },
  },
  1156: {
    spot: { Lat: -38.6732, Long: 178.00036666666668, spotName: "Gizzy Pipe" },
  },
  1157: {
    spot: {
      Lat: -38.12598333333333,
      Long: 178.32398333333333,
      spotName: "Farmers - Tokomaru Bay",
    },
  },
  1158: {
    spot: {
      Lat: -37.939283333333336,
      Long: 174.77973333333333,
      spotName: "Ruapuke",
    },
  },
  1159: {
    spot: { Lat: -41.43996666666666, Long: 174.03185, spotName: "Diversion" },
  },
  1160: {
    spot: { Lat: -39.0738, Long: 177.82975, spotName: "Waikokopu bay" },
  },
  1161: {
    spot: {
      Lat: -43.84343333333333,
      Long: 172.74053333333333,
      spotName: "Magnet Bay",
    },
  },
  1162: {
    spot: {
      Lat: -42.43266666666667,
      Long: 173.58973333333333,
      spotName: "Kahutara",
    },
  },
  1163: {
    spot: {
      Lat: -46.654383333333335,
      Long: 169.105,
      spotName: "Porpoise Bay",
    },
  },
  1164: {
    spot: {
      Lat: -17.515316666666667,
      Long: -149.50753333333333,
      spotName: "Taharaa Reef",
    },
  },
  1165: {
    spot: {
      Lat: -45.7613,
      Long: 170.67218333333332,
      spotName: "Murdering Bay",
    },
  },
  1166: {
    spot: { Lat: -17.8014, Long: -149.31333333333333, spotName: "Vairao" },
  },
  1167: {
    spot: {
      Lat: -45.18313333333333,
      Long: 170.90546666666665,
      spotName: "Kakanui",
    },
  },
  1168: { spot: { Lat: -17.4861, Long: -149.8645, spotName: "Papetoai" } },
  1169: {
    spot: {
      Lat: -46.57808333333333,
      Long: 169.47336666666666,
      spotName: "Papatowai",
    },
  },
  1170: {
    spot: {
      Lat: -19.14835,
      Long: 146.86911666666666,
      spotName: "Magnetic island - arcadia beach",
    },
  },
  1171: {
    spot: {
      Lat: -21.801416666666668,
      Long: 114.13923333333334,
      spotName: "Dunes - Exmouth",
    },
  },
  1172: {
    spot: {
      Lat: -33.635666666666665,
      Long: 115.02733333333333,
      spotName: "Yallingup Shorebreak",
    },
  },
  1173: {
    spot: {
      Lat: -33.65266666666667,
      Long: 115.31555,
      spotName: "West-Busso Point",
    },
  },
  1174: {
    spot: {
      Lat: -23.881283333333332,
      Long: 113.48773333333334,
      spotName: "Tombstones",
    },
  },
  1175: {
    spot: {
      Lat: -43.56036666666667,
      Long: 172.76223333333334,
      spotName: "Sumner Bar",
    },
  },
  1176: {
    spot: {
      Lat: -17.8005,
      Long: 168.37401666666668,
      spotName: "Efate - Teouma Bay",
    },
  },
  1177: {
    spot: { Lat: -34.77715, Long: 150.81928333333335, spotName: "Chips" },
  },
  1178: {
    spot: { Lat: -17.490833333333335, Long: -149.7537, spotName: "Temae" },
  },
  1179: {
    spot: {
      Lat: -45.77611666666667,
      Long: 170.71058333333335,
      spotName: "Aramoana",
    },
  },
  1180: { spot: { Lat: -17.77245, Long: -149.4803, spotName: "Paparaa" } },
  1181: {
    spot: {
      Lat: -31.907833333333333,
      Long: 115.75485,
      spotName: "Peasholm Dog Beach",
    },
  },
  1182: {
    spot: {
      Lat: -44.43185,
      Long: 171.26216666666667,
      spotName: "Jacks Point",
    },
  },
  1183: {
    spot: {
      Lat: -43.85111666666667,
      Long: 169.01608333333334,
      spotName: "Haast Beach",
    },
  },
  1184: {
    spot: {
      Lat: -17.507633333333334,
      Long: -149.46141666666668,
      spotName: "Orofara",
    },
  },
  1185: {
    spot: {
      Lat: -14.9363,
      Long: -147.71006666666668,
      spotName: "Avatoru Pass, Rangiroa",
    },
  },
  1186: {
    spot: {
      Lat: -16.7215,
      Long: -150.97631666666666,
      spotName: "Motu Mahara",
    },
  },
  1187: {
    spot: {
      Lat: -16.630733333333332,
      Long: 145.55308333333335,
      spotName: "Ratchet",
    },
  },
  1188: {
    spot: {
      Lat: -21.0988,
      Long: 149.22618333333332,
      spotName: "North Wall Mackay Harbour Beach",
    },
  },
  1189: {
    spot: { Lat: -33.3744, Long: 151.48841666666667, spotName: "Muncha" },
  },
  1190: {
    spot: {
      Lat: -17.603633333333335,
      Long: -149.62236666666666,
      spotName: "Taapuna",
    },
  },
  1191: { spot: { Lat: -45.9305, Long: 170.42455, spotName: "Blackhead" } },
  1192: {
    spot: {
      Lat: -17.51265,
      Long: -149.41811666666666,
      spotName: "Papenoo Rivermouth",
    },
  },
  1193: {
    spot: {
      Lat: -17.522433333333332,
      Long: -149.51501666666667,
      spotName: "La Fayette Reef",
    },
  },
  1194: {
    spot: {
      Lat: -17.477666666666668,
      Long: -149.82716666666667,
      spotName: "Cook bay left",
    },
  },
  1195: {
    spot: {
      Lat: -16.745283333333333,
      Long: -151.42026666666666,
      spotName: "Teavapiti",
    },
  },
  1196: {
    spot: {
      Lat: -17.930066666666665,
      Long: 122.20916666666666,
      spotName: "Cable Beach",
    },
  },
  1197: {
    spot: { Lat: -24.80635, Long: 152.4567, spotName: "Nielsen's Beach" },
  },
  1198: {
    spot: {
      Lat: -33.45895,
      Long: 151.44046666666668,
      spotName: "North avoca",
    },
  },
  1199: {
    spot: { Lat: -46.6723, Long: 169.02375, spotName: "Dinner Plates" },
  },
  1200: { spot: { Lat: -24.84695, Long: 152.478, spotName: "Archies" } },
  1201: {
    spot: {
      Lat: -34.7811,
      Long: 150.79576666666668,
      spotName: "Gerroa - Seven Miles Beach",
    },
  },
  1202: {
    spot: { Lat: -43.6626, Long: 173.03973333333334, spotName: "Raupo Bay" },
  },
  1203: {
    spot: { Lat: -17.6324, Long: -149.615, spotName: "Sapinus Beach Break" },
  },
  1204: {
    spot: {
      Lat: -17.507816666666667,
      Long: -149.43761666666666,
      spotName: "Rocky Point",
    },
  },
  1205: {
    spot: {
      Lat: -17.52425,
      Long: -149.38998333333333,
      spotName: "Trou du Souffleur",
    },
  },
  1206: {
    spot: {
      Lat: -17.778333333333332,
      Long: 168.29591666666667,
      spotName: "Efate - Breakas",
    },
  },
  1207: {
    spot: {
      Lat: -43.582683333333335,
      Long: 172.77706666666666,
      spotName: "Taylors mistake",
    },
  },
  1208: {
    spot: { Lat: -17.507916666666667, Long: -149.4392, spotName: "PK15" },
  },
  1209: {
    spot: {
      Lat: -17.50883333333333,
      Long: -149.43133333333333,
      spotName: "Papenoo",
    },
  },
  1210: {
    spot: {
      Lat: -17.77575,
      Long: -149.48355,
      spotName: "Paparaa - Outer Reefs",
    },
  },
  1211: {
    spot: {
      Lat: -17.572683333333334,
      Long: -149.87866666666667,
      spotName: "Haapiti",
    },
  },
  1212: {
    spot: {
      Lat: -16.708183333333334,
      Long: -151.04388333333333,
      spotName: "Fare Right",
    },
  },
  1213: {
    spot: {
      Lat: -39.05421666666667,
      Long: 174.06185,
      spotName: "Aquatic centre",
    },
  },
  1214: {
    spot: {
      Lat: -45.9125,
      Long: 170.48918333333333,
      spotName: "Saint clair beach",
    },
  },
  1215: {
    spot: {
      Lat: -45.948433333333334,
      Long: 170.33763333333334,
      spotName: "Brighton",
    },
  },
  1216: {
    spot: {
      Lat: -17.866733333333332,
      Long: -149.25381666666667,
      spotName: "Teahupoo",
    },
  },
  1217: {
    spot: {
      Lat: -33.15796666666667,
      Long: 151.63098333333335,
      spotName: "Catherine Hill Bay",
    },
  },
  1218: {
    spot: {
      Lat: -17.82225,
      Long: 177.13256666666666,
      spotName: "Desperations",
    },
  },
  1219: {
    spot: {
      Lat: -34.55161666666667,
      Long: 150.87051666666667,
      spotName: "Warilla beach",
    },
  },
  1220: { spot: { Lat: -42.00265, Long: 174.0122, spotName: "Kekerengu" } },
  1221: {
    spot: { Lat: -17.75, Long: -149.58108333333334, spotName: "Maraa" },
  },
  1222: {
    spot: { Lat: -17.634, Long: -149.62056666666666, spotName: "Sapinus" },
  },
  1223: {
    spot: {
      Lat: -17.784383333333334,
      Long: 168.28396666666666,
      spotName: "Efate - Pango Point",
    },
  },
  1224: {
    spot: {
      Lat: -35.445116666666664,
      Long: 150.41021666666666,
      spotName: "Dum Dums",
    },
  },
  1225: {
    spot: {
      Lat: -42.30466666666667,
      Long: 173.75208333333333,
      spotName: "Mangamaunu",
    },
  },
  1226: {
    spot: {
      Lat: -43.51231666666666,
      Long: 172.73471666666666,
      spotName: "Lone Pine - Brighton",
    },
  },
  1227: {
    spot: {
      Lat: -42.44283333333333,
      Long: 171.19308333333333,
      spotName: "Blaketown wedge",
    },
  },
  1228: {
    spot: {
      Lat: -17.5315,
      Long: -149.51203333333333,
      spotName: "La Fayette",
    },
  },
  1229: {
    spot: {
      Lat: -17.495183333333333,
      Long: -149.50105,
      spotName: "Point Venus",
    },
  },
  1230: { spot: { Lat: -16.7125, Long: -151.0459, spotName: "Fare" } },
  1231: {
    spot: {
      Lat: -16.723583333333334,
      Long: -151.04956666666666,
      spotName: "Fitii",
    },
  },
  1232: {
    spot: { Lat: -24.78895, Long: 152.43833333333333, spotName: "Bundaberg" },
  },
  1233: {
    spot: { Lat: -34.380916666666664, Long: 150.9191, spotName: "Corrimal" },
  },
  1234: {
    spot: {
      Lat: -45.951933333333336,
      Long: 170.33091666666667,
      spotName: "Brighton Beach",
    },
  },
  1235: {
    spot: {
      Lat: -17.53461666666667,
      Long: -149.58443333333332,
      spotName: "Papeete Harbour",
    },
  },
  1236: {
    spot: {
      Lat: -35.55798333333333,
      Long: 138.87798333333333,
      spotName: "Goolwa Rivermouth",
    },
  },
  1237: {
    spot: {
      Lat: -34.01051666666667,
      Long: 151.23073333333335,
      spotName: "Cape Solander",
    },
  },
  1238: {
    spot: {
      Lat: -43.50255,
      Long: 172.73203333333333,
      spotName: "New Brighton",
    },
  },
  1239: {
    spot: {
      Lat: -43.55715,
      Long: 172.75998333333334,
      spotName: "Eddies - South Shore",
    },
  },
  1240: {
    spot: { Lat: -17.674766666666667, Long: -149.3054, spotName: "Faaone" },
  },
  1241: {
    spot: {
      Lat: -21.072266666666668,
      Long: 149.22931666666668,
      spotName: "Lamberts Beach",
    },
  },
  1242: {
    spot: {
      Lat: -19.123233333333335,
      Long: 146.87868333333333,
      spotName: "Florence bay",
    },
  },
  1243: {
    spot: {
      Lat: -23.17331666666667,
      Long: 150.79185,
      spotName: "Kemp Beach",
    },
  },
  1244: {
    spot: {
      Lat: -31.99935,
      Long: 152.57641666666666,
      spotName: "Wallabi point",
    },
  },
  1245: {
    spot: {
      Lat: -31.993983333333333,
      Long: 115.75068333333333,
      spotName: "Slimeys",
    },
  },
  1246: {
    spot: {
      Lat: -28.376933333333334,
      Long: 153.57275,
      spotName: "Blackrocks",
    },
  },
  1247: {
    spot: {
      Lat: 51.3497,
      Long: 3.278433333333333,
      spotName: "Knokke Casino break",
    },
  },
  1248: {
    spot: {
      Lat: 51.210966666666664,
      Long: 2.8625333333333334,
      spotName: "Raversijde",
    },
  },
  1249: {
    spot: { Lat: -37.65976666666667, Long: 140.2197, spotName: "cullens" },
  },
  1250: {
    spot: {
      Lat: -33.42381666666667,
      Long: 151.45666666666668,
      spotName: "Spoon Bay - Centres",
    },
  },
  1251: {
    spot: { Lat: -33.69755, Long: 114.97645, spotName: "Injidup Point" },
  },
  1252: {
    spot: {
      Lat: -35.37218333333333,
      Long: 138.38318333333333,
      spotName: "Myponga",
    },
  },
  1253: {
    spot: {
      Lat: -34.050716666666666,
      Long: 151.15786666666668,
      spotName: "The Ally",
    },
  },
  1254: {
    spot: { Lat: -29.27455, Long: 114.91055, spotName: "Dongara Point" },
  },
  1255: {
    spot: {
      Lat: -38.39175,
      Long: 144.78508333333335,
      spotName: "Supertubes",
    },
  },
  1256: {
    spot: {
      Lat: 38.67693333333333,
      Long: -27.062066666666666,
      spotName: "Porto Martins",
    },
  },
  1257: {
    spot: {
      Lat: 29.25026666666667,
      Long: -81.01736666666666,
      spotName: "Carpet Muncher",
    },
  },
  1258: {
    spot: { Lat: 42.41576666666667, Long: 27.70145, spotName: "Harmani" },
  },
  1259: {
    spot: {
      Lat: 37.81885,
      Long: -25.544316666666667,
      spotName: "Praia Santa Barbara (Ribeira Grande)",
    },
  },
  1260: { spot: { Lat: 51.21865, Long: 2.87465, spotName: "Ollies point" } },
  1261: {
    spot: { Lat: 51.370916666666666, Long: 3.36285, spotName: "'t Zwin" },
  },
  1262: {
    spot: {
      Lat: -31.446583333333333,
      Long: 152.93226666666666,
      spotName: "Nobbys beach",
    },
  },
  1263: {
    spot: {
      Lat: -33.18756666666667,
      Long: 151.62283333333335,
      spotName: "Frazer Park",
    },
  },
  1264: {
    spot: {
      Lat: -33.2055,
      Long: 151.60763333333333,
      spotName: "Birdie beach",
    },
  },
  1265: {
    spot: { Lat: -34.980666666666664, Long: 138.5092, spotName: "Glenelg" },
  },
  1266: {
    spot: { Lat: -38.7593, Long: 143.21108333333333, spotName: "Luna Park" },
  },
  1267: {
    spot: {
      Lat: -36.019816666666664,
      Long: 136.85686666666666,
      spotName: "Hanson Bay",
    },
  },
  1268: {
    spot: {
      Lat: -33.40646666666667,
      Long: 151.47783333333334,
      spotName: "Perfects",
    },
  },
  1269: { spot: { Lat: 38.55555, Long: -28.60865, spotName: "Almoxarife" } },
  1270: {
    spot: {
      Lat: 37.83938333333333,
      Long: -25.368466666666666,
      spotName: "Baixa da Viola",
    },
  },
  1271: {
    spot: { Lat: 37.82658333333333, Long: -25.47145, spotName: "Santa Iria" },
  },
  1272: {
    spot: { Lat: -17.845533333333332, Long: 177.18785, spotName: "Canoes" },
  },
  1273: {
    spot: {
      Lat: -35.96501666666666,
      Long: 136.65301666666667,
      spotName: "Sandy Creek",
    },
  },
  1274: {
    spot: {
      Lat: -37.21823333333333,
      Long: 175.89308333333332,
      spotName: "Donut Island",
    },
  },
  1275: {
    spot: {
      Lat: -33.859833333333334,
      Long: 135.15058333333334,
      spotName: "Sheringa Left",
    },
  },
  1276: {
    spot: {
      Lat: 39.45008333333333,
      Long: -31.268133333333335,
      spotName: "Fajã Grande",
    },
  },
  1277: {
    spot: {
      Lat: 51.3445,
      Long: 3.2314166666666666,
      spotName: "Bay of Heist",
    },
  },
  1278: {
    spot: {
      Lat: 51.360933333333335,
      Long: 3.3244833333333332,
      spotName: "Knokke Surfers Paradise",
    },
  },
  1279: {
    spot: { Lat: 42.1009, Long: 27.94315, spotName: "Ahtony/Ahtopol" },
  },
  1280: {
    spot: { Lat: -37.48036666666667, Long: 140.0167, spotName: "Beachport" },
  },
  1281: {
    spot: {
      Lat: -33.767383333333335,
      Long: 151.2989,
      spotName: "North Curl Curl",
    },
  },
  1282: {
    spot: {
      Lat: 38.628166666666665,
      Long: -27.927466666666668,
      spotName: "Caldeira",
    },
  },
  1283: {
    spot: {
      Lat: -38.49548333333333,
      Long: 144.88481666666667,
      spotName: "U-Turns",
    },
  },
  1284: {
    spot: {
      Lat: 38.79128333333333,
      Long: -27.127516666666665,
      spotName: "Baixa da Vila Nova",
    },
  },
  1285: {
    spot: {
      Lat: 51.166216666666664,
      Long: 2.7636666666666665,
      spotName: "Westende",
    },
  },
  1286: {
    spot: {
      Lat: -33.788,
      Long: 151.28851666666668,
      spotName: "North Steyne",
    },
  },
  1287: {
    spot: {
      Lat: -35.66656666666667,
      Long: 137.0723,
      spotName: "Middle river wedge",
    },
  },
  1288: {
    spot: {
      Lat: 38.79306666666667,
      Long: -27.228133333333332,
      spotName: "Baia das Quatro Ribeiras",
    },
  },
  1289: {
    spot: {
      Lat: -32.77945,
      Long: 152.12013333333334,
      spotName: "One mile point",
    },
  },
  1290: {
    spot: {
      Lat: -32.09558333333333,
      Long: 132.99573333333333,
      spotName: "Cactus",
    },
  },
  1291: {
    spot: {
      Lat: -35.52688333333333,
      Long: 138.6951,
      spotName: "chicken run (bashams beach)",
    },
  },
  1292: {
    spot: {
      Lat: -37.488033333333334,
      Long: 140.00203333333334,
      spotName: "Salmon Hole",
    },
  },
  1293: {
    spot: {
      Lat: 38.71925,
      Long: -27.060466666666667,
      spotName: "Praia da Vitoria",
    },
  },
  1294: { spot: { Lat: 51.3454, Long: 3.2436, spotName: "Li'l J-Bay" } },
  1295: {
    spot: { Lat: 42.02265, Long: 28.012566666666668, spotName: "Silistar" },
  },
  1296: {
    spot: {
      Lat: -28.271883333333335,
      Long: 153.58131666666668,
      spotName: "Casuarina Beach",
    },
  },
  1297: {
    spot: {
      Lat: -19.536583333333333,
      Long: 169.26446666666666,
      spotName: "Tanna - Lenakel",
    },
  },
  1298: {
    spot: {
      Lat: -34.080466666666666,
      Long: 115.00188333333334,
      spotName: "Conto springs",
    },
  },
  1299: {
    spot: {
      Lat: -35.641666666666666,
      Long: 150.30498333333333,
      spotName: "Durras Beach",
    },
  },
  1300: {
    spot: {
      Lat: -35.854,
      Long: 137.74486666666667,
      spotName: "Pennington Bay",
    },
  },
  1301: {
    spot: {
      Lat: 37.74993333333333,
      Long: -25.623933333333333,
      spotName: "Populo",
    },
  },
  1302: { spot: { Lat: 51.2477, Long: 2.9497, spotName: "Twins Bredene" } },
  1303: { spot: { Lat: -16.76135, Long: -151.5049, spotName: "Miri miri" } },
  1304: {
    spot: {
      Lat: -34.8997,
      Long: 150.75988333333333,
      spotName: "Comerong island",
    },
  },
  1305: {
    spot: { Lat: -33.81665, Long: 151.26343333333332, spotName: "Washaway" },
  },
  1306: {
    spot: {
      Lat: -35.9432,
      Long: 137.59851666666665,
      spotName: "D'estrees Bay",
    },
  },
  1307: {
    spot: {
      Lat: 38.767833333333336,
      Long: -27.37475,
      spotName: "Ponta do Queimado",
    },
  },
  1308: {
    spot: {
      Lat: 37.81778333333333,
      Long: -25.54853333333333,
      spotName: "Areias",
    },
  },
  1309: {
    spot: { Lat: 51.22065, Long: 2.8822666666666668, spotName: "Mariakerke" },
  },
  1310: {
    spot: { Lat: 51.33213333333333, Long: 3.16575, spotName: "Zeebrugge" },
  },
  1311: {
    spot: {
      Lat: -31.991183333333332,
      Long: 115.54875,
      spotName: "Transit reef",
    },
  },
  1312: {
    spot: {
      Lat: -26.383916666666668,
      Long: 153.08598333333333,
      spotName: "Noosa Groyne",
    },
  },
  1313: {
    spot: {
      Lat: -33.79208333333333,
      Long: 114.99793333333334,
      spotName: "Willyabrup",
    },
  },
  1314: { spot: { Lat: -16.7873, Long: -151.38175, spotName: "faaroa" } },
  1315: {
    spot: {
      Lat: 52.3876,
      Long: -9.836533333333334,
      spotName: "ballyheigue ireland southwest",
    },
  },
  1316: {
    spot: {
      Lat: -33.77976666666667,
      Long: 151.29638333333332,
      spotName: "Diggers Rights",
    },
  },
  1317: { spot: { Lat: 51.2797, Long: 3.0332, spotName: "De Haan" } },
  1318: {
    spot: {
      Lat: 51.2261,
      Long: 2.8987166666666666,
      spotName: "Oostende surfclub",
    },
  },
  1319: {
    spot: {
      Lat: -36.19553333333333,
      Long: 150.13675,
      spotName: "Narooma breakwall",
    },
  },
  1320: {
    spot: { Lat: -38.3836, Long: 144.77606666666668, spotName: "Tiber" },
  },
  1321: {
    spot: { Lat: -38.67256666666667, Long: 145.63985, spotName: "the oaks" },
  },
  1322: {
    spot: {
      Lat: 51.315266666666666,
      Long: 3.1105,
      spotName: "Blankenberge Oosterstaketsel",
    },
  },
  1323: {
    spot: {
      Lat: 51.185583333333334,
      Long: 2.821083333333333,
      spotName: "Middelkerke",
    },
  },
  1324: {
    spot: { Lat: 51.2242, Long: 2.8932, spotName: "Oostende Roje meur" },
  },
  1325: {
    spot: {
      Lat: -35.251216666666664,
      Long: 150.53588333333335,
      spotName: "Bendalong",
    },
  },
  1326: {
    spot: {
      Lat: -41.87298333333333,
      Long: 148.31345,
      spotName: "Governors Island",
    },
  },
  1327: {
    spot: { Lat: -33.5571, Long: 151.2685, spotName: "Patonga point" },
  },
  1328: {
    spot: {
      Lat: -36.052283333333335,
      Long: 136.69558333333333,
      spotName: "Rockys",
    },
  },
  1329: {
    spot: {
      Lat: -36.04266666666667,
      Long: 136.70496666666668,
      spotName: "Spooks",
    },
  },
  1330: {
    spot: {
      Lat: -34.970166666666664,
      Long: 136.10781666666668,
      spotName: "Thistle Island",
    },
  },
  1331: {
    spot: { Lat: -35.6213, Long: 137.20876666666666, spotName: "Stokes Bay" },
  },
  1332: {
    spot: {
      Lat: 36.95106666666667,
      Long: -25.098366666666667,
      spotName: "Praia Formosa",
    },
  },
  1333: {
    spot: {
      Lat: 51.32136666666667,
      Long: 3.1366,
      spotName: "Blankenberge Pier",
    },
  },
  1334: {
    spot: {
      Lat: 43.545183333333334,
      Long: 28.605133333333335,
      spotName: "Shabla",
    },
  },
  1335: {
    spot: {
      Lat: -38.64958333333333,
      Long: 145.69896666666668,
      spotName: "Inverloch",
    },
  },
  1336: {
    spot: {
      Lat: -32.023633333333336,
      Long: 115.75098333333334,
      spotName: "Leighton Bridge",
    },
  },
  1337: {
    spot: {
      Lat: 38.61176666666667,
      Long: -28.758516666666665,
      spotName: "Praia do Norte",
    },
  },
  1338: {
    spot: {
      Lat: 38.707283333333336,
      Long: -27.045166666666667,
      spotName: "Santa Catarina",
    },
  },
  1339: {
    spot: {
      Lat: 37.00541666666667,
      Long: -25.156566666666667,
      spotName: "Anjos",
    },
  },
  1340: {
    spot: {
      Lat: -38.05925,
      Long: 140.65928333333332,
      spotName: "Cape Northumberland",
    },
  },
  1341: {
    spot: {
      Lat: 37.888333333333335,
      Long: -25.82515,
      spotName: "Praia dos Mosteiros",
    },
  },
  1342: {
    spot: {
      Lat: -34.86001666666667,
      Long: 135.74638333333334,
      spotName: "wreck beach",
    },
  },
  1343: {
    spot: { Lat: 51.235, Long: 2.91305, spotName: "Oostende centrum" },
  },
  1344: {
    spot: {
      Lat: 38.64293333333333,
      Long: -27.963366666666666,
      spotName: "Faja dos Cubres",
    },
  },
  1345: {
    spot: {
      Lat: 51.14031666666666,
      Long: 2.685433333333333,
      spotName: "Nieuwpoort",
    },
  },
  1346: {
    spot: { Lat: 39.05895, Long: -27.975683333333333, spotName: "Lagoa" },
  },
  1347: {
    spot: {
      Lat: 51.23935,
      Long: 2.9288833333333333,
      spotName: "Oostende 't Ooster",
    },
  },
  1348: {
    spot: {
      Lat: 37.81681666666667,
      Long: -25.590416666666666,
      spotName: "Rabo de Peixe",
    },
  },
  1349: {
    spot: { Lat: 28.67395, Long: -14.01005, spotName: "Cotillo beach" },
  },
  1350: {
    spot: {
      Lat: 28.739233333333335,
      Long: -13.9553,
      spotName: "Derecha de los Alemanes",
    },
  },
  1351: {
    spot: {
      Lat: 28.131033333333335,
      Long: -15.447833333333334,
      spotName: "La Cicer",
    },
  },
  1352: {
    spot: {
      Lat: 28.702633333333335,
      Long: -14.025166666666667,
      spotName: "Spew pits",
    },
  },
  1353: { spot: { Lat: 28.4745, Long: -13.8658, spotName: "Playa blanca" } },
  1354: {
    spot: {
      Lat: 29.1174,
      Long: -13.639566666666667,
      spotName: "Caleta de caballo",
    },
  },
  1355: { spot: { Lat: 28.7404, Long: -13.95465, spotName: "Hierro(left)" } },
  1356: {
    spot: { Lat: 28.214933333333335, Long: -14.2226, spotName: "La Pared" },
  },
  1357: {
    spot: {
      Lat: 29.109883333333332,
      Long: -13.666633333333333,
      spotName: "El Quemao",
    },
  },
  1358: {
    spot: {
      Lat: 28.413516666666666,
      Long: -16.559183333333333,
      spotName: "Puerto de la Cruz - Playa Jardín",
    },
  },
  1359: {
    spot: { Lat: 56.09305, Long: 12.462883333333334, spotName: "Hornbaek" },
  },
  1360: {
    spot: {
      Lat: 43.378166666666665,
      Long: -1.7629666666666668,
      spotName: "Hendaye",
    },
  },
  1361: { spot: { Lat: 48.58345, Long: -4.67515, spotName: "Anaël" } },
  1362: { spot: { Lat: 28.1582, Long: -15.43445, spotName: "El Confital" } },
  1363: {
    spot: {
      Lat: 56.960033333333335,
      Long: 8.368916666666667,
      spotName: "Vorupør",
    },
  },
  1364: {
    spot: {
      Lat: 43.437083333333334,
      Long: -1.5967500000000001,
      spotName: "Bidart - Plage centrale",
    },
  },
  1365: {
    spot: {
      Lat: 43.47905,
      Long: -1.5671833333333334,
      spotName: "Biarritz - Cote des Basques",
    },
  },
  1366: {
    spot: {
      Lat: 28.050766666666668,
      Long: -14.3557,
      spotName: "Playa de Salinas",
    },
  },
  1367: {
    spot: {
      Lat: 27.75261666666667,
      Long: -15.56715,
      spotName: "Playa del Inglés",
    },
  },
  1368: {
    spot: {
      Lat: 29.112083333333334,
      Long: -13.663016666666667,
      spotName: "El centro",
    },
  },
  1369: {
    spot: { Lat: 28.555983333333334, Long: -16.34175, spotName: "El Lobo" },
  },
  1370: {
    spot: { Lat: 55.25266666666667, Long: 12.3791, spotName: "Rødvig" },
  },
  1371: {
    spot: { Lat: 43.415733333333336, Long: -1.62965, spotName: "Lafiténia" },
  },
  1372: {
    spot: {
      Lat: 43.419066666666666,
      Long: -1.6263333333333332,
      spotName: "Plage de Mayarco",
    },
  },
  1373: {
    spot: {
      Lat: 48.16895,
      Long: -4.556383333333334,
      spotName: "Cap de la Chevre",
    },
  },
  1374: {
    spot: { Lat: 48.685633333333335, Long: -2.3188, spotName: "Cap frehel" },
  },
  1375: {
    spot: { Lat: 48.65545, Long: -4.4028833333333335, spotName: "Kerlouan" },
  },
  1376: {
    spot: {
      Lat: 48.63615,
      Long: -2.1356333333333333,
      spotName: "La Garde Guérin",
    },
  },
  1377: {
    spot: {
      Lat: 29.207766666666668,
      Long: -13.497566666666666,
      spotName: "El Risco",
    },
  },
  1378: {
    spot: {
      Lat: 28.726016666666666,
      Long: -13.990233333333334,
      spotName: "Punta Blanca",
    },
  },
  1379: { spot: { Lat: 55.25706666666667, Long: 12.402, spotName: "D´Bay" } },
  1380: {
    spot: { Lat: 29.128116666666667, Long: -13.4642, spotName: "Arrieta" },
  },
  1381: {
    spot: { Lat: 29.12698333333333, Long: -13.57355, spotName: "San Juan" },
  },
  1382: {
    spot: {
      Lat: 28.558633333333333,
      Long: -16.333183333333334,
      spotName: "El Arenal",
    },
  },
  1383: {
    spot: { Lat: 43.45505, Long: -1.5846166666666668, spotName: "IIbarritz" },
  },
  1384: {
    spot: {
      Lat: 28.419733333333333,
      Long: -16.51268333333333,
      spotName: "Los Patos - La Orrotava",
    },
  },
  1385: {
    spot: {
      Lat: 43.39058333333333,
      Long: -1.6812666666666667,
      spotName: "La bougie",
    },
  },
  1386: {
    spot: { Lat: 48.57925, Long: -4.6328, spotName: "Aber wrac'h point" },
  },
  1387: { spot: { Lat: 48.2614, Long: -4.61275, spotName: "Le Veryac'h" } },
  1388: {
    spot: { Lat: 48.24823333333333, Long: -4.55435, spotName: "Goulien" },
  },
  1389: {
    spot: {
      Lat: 48.20511666666667,
      Long: -4.553233333333333,
      spotName: "La Palue",
    },
  },
  1390: {
    spot: {
      Lat: 28.720716666666668,
      Long: -13.99985,
      spotName: "Punta Gorda",
    },
  },
  1391: {
    spot: { Lat: 28.1293, Long: -15.451983333333333, spotName: "El Lloret" },
  },
  1392: {
    spot: {
      Lat: 28.515033333333335,
      Long: -17.875666666666667,
      spotName: "La zamora",
    },
  },
  1393: {
    spot: {
      Lat: 43.456066666666665,
      Long: -1.5820500000000002,
      spotName: "BidartII",
    },
  },
  1394: {
    spot: {
      Lat: 56.12886666666667,
      Long: 12.312766666666667,
      spotName: "Gilleleje havn",
    },
  },
  1395: {
    spot: {
      Lat: 48.553466666666665,
      Long: -4.733083333333333,
      spotName: "La Chapelle",
    },
  },
  1396: {
    spot: { Lat: 57.03885, Long: 8.467133333333333, spotName: "Bunker" },
  },
  1397: {
    spot: { Lat: 57.043483333333334, Long: 8.49295, spotName: "Klitmoller" },
  },
  1398: {
    spot: {
      Lat: 61.562533333333334,
      Long: 21.52241666666667,
      spotName: "Yyteri",
    },
  },
  1399: {
    spot: {
      Lat: 43.42885,
      Long: -1.6095166666666665,
      spotName: "Parlementia",
    },
  },
  1400: {
    spot: { Lat: 48.3418, Long: -4.6329666666666665, spotName: "Dalbos" },
  },
  1401: {
    spot: { Lat: 28.687033333333332, Long: -13.83, spotName: "El Burro" },
  },
  1402: {
    spot: {
      Lat: 28.7365,
      Long: -13.855483333333334,
      spotName: "Rocky Point Outside",
    },
  },
  1403: {
    spot: {
      Lat: 28.733533333333334,
      Long: -13.85575,
      spotName: "Rocky point",
    },
  },
  1404: {
    spot: { Lat: 28.1465, Long: -15.552166666666666, spotName: "Los Enanos" },
  },
  1405: {
    spot: {
      Lat: 28.05765,
      Long: -15.417983333333334,
      spotName: "Playa la laja",
    },
  },
  1406: {
    spot: {
      Lat: 28.215966666666667,
      Long: -16.83725,
      spotName: "Punta blanca",
    },
  },
  1407: {
    spot: {
      Lat: 28.417483333333333,
      Long: -16.5411,
      spotName: "Puerto De La Cruz - Martiánez",
    },
  },
  1408: {
    spot: {
      Lat: 43.526516666666666,
      Long: -1.5251333333333332,
      spotName: "Anglet - La Barre",
    },
  },
  1409: {
    spot: {
      Lat: 43.38133333333333,
      Long: -1.7575,
      spotName: "Les deux jumeaux",
    },
  },
  1410: {
    spot: { Lat: 28.742483333333332, Long: -13.86295, spotName: "El muelle" },
  },
  1411: {
    spot: { Lat: 28.6485, Long: -14.021433333333333, spotName: "Escalera" },
  },
  1412: {
    spot: { Lat: 28.754683333333332, Long: -13.88555, spotName: "Generoso" },
  },
  1413: { spot: { Lat: 29.1171, Long: -13.63535, spotName: "Ghost town" } },
  1414: {
    spot: {
      Lat: 29.114283333333333,
      Long: -13.662033333333333,
      spotName: "Morro Negro",
    },
  },
  1415: {
    spot: {
      Lat: 29.140166666666666,
      Long: -13.45225,
      spotName: "Punta Mujeres",
    },
  },
  1416: {
    spot: {
      Lat: 28.571983333333332,
      Long: -14.048716666666667,
      spotName: "Tindaya",
    },
  },
  1417: {
    spot: {
      Lat: 28.005733333333332,
      Long: -16.656983333333333,
      spotName: "Las Galletas",
    },
  },
  1418: {
    spot: {
      Lat: 29.120816666666666,
      Long: -13.660133333333333,
      spotName: "Boca del Abajo",
    },
  },
  1419: {
    spot: { Lat: 59.43233333333333, Long: 24.3457, spotName: "Vaana" },
  },
  1420: {
    spot: { Lat: 28.0556, Long: -16.738766666666667, spotName: "El dedo" },
  },
  1421: {
    spot: {
      Lat: 57.376466666666666,
      Long: 9.714233333333333,
      spotName: "Loekken",
    },
  },
  1422: {
    spot: {
      Lat: 43.41453333333333,
      Long: -1.7059666666666666,
      spotName: "Belharra",
    },
  },
  1423: {
    spot: {
      Lat: 43.455733333333335,
      Long: -1.5837833333333333,
      spotName: "Bidart - Pavillon Royal",
    },
  },
  1424: {
    spot: { Lat: 28.523, Long: -16.154716666666666, spotName: "Igueste" },
  },
  1425: {
    spot: {
      Lat: 43.389466666666664,
      Long: -1.6715166666666668,
      spotName: "Le Port",
    },
  },
  1426: {
    spot: { Lat: 48.664883333333336, Long: -1.99075, spotName: "Le sillon" },
  },
  1427: {
    spot: {
      Lat: 28.753133333333334,
      Long: -13.923733333333333,
      spotName: "Mejillones",
    },
  },
  1428: {
    spot: {
      Lat: 48.636716666666665,
      Long: -2.1415,
      spotName: "Dame jouanne",
    },
  },
  1429: {
    spot: { Lat: 28.748816666666666, Long: -13.8357, spotName: "Los Lobos" },
  },
  1430: {
    spot: {
      Lat: 28.16508333333333,
      Long: -15.654233333333334,
      spotName: "El Frontón",
    },
  },
  1431: {
    spot: {
      Lat: 27.7944,
      Long: -15.470783333333333,
      spotName: "Juan Grande",
    },
  },
  1432: {
    spot: {
      Lat: 28.99845,
      Long: -13.487383333333334,
      spotName: "Las Cucharas",
    },
  },
  1433: {
    spot: { Lat: 29.111583333333332, Long: -13.6648, spotName: "La Santa" },
  },
  1434: {
    spot: {
      Lat: 28.039566666666666,
      Long: -16.542083333333334,
      spotName: "El Medano",
    },
  },
  1435: {
    spot: {
      Lat: 28.029066666666665,
      Long: -16.566816666666668,
      spotName: "La Machacona",
    },
  },
  1436: { spot: { Lat: 56.72476666666667, Long: 8.2212, spotName: "Agger" } },
  1437: {
    spot: {
      Lat: 43.427,
      Long: -1.6118999999999999,
      spotName: "Les Alcyons Avalanche",
    },
  },
  1438: {
    spot: {
      Lat: 43.39738333333333,
      Long: -1.6661333333333332,
      spotName: "Sainte Barbe Inside",
    },
  },
  1439: {
    spot: { Lat: 43.399166666666666, Long: -1.667, spotName: "Sainte Barbe" },
  },
  1440: {
    spot: { Lat: 48.34505, Long: -4.640483333333333, spotName: "Deolen" },
  },
  1441: {
    spot: {
      Lat: 28.63575,
      Long: -14.026566666666668,
      spotName: "Playa de Esquinzo",
    },
  },
  1442: {
    spot: {
      Lat: 28.14666666666667,
      Long: -15.560883333333333,
      spotName: "Boquines",
    },
  },
  1443: { spot: { Lat: 28.17955, Long: -17.1795, spotName: "Hermigua" } },
  1444: {
    spot: {
      Lat: 28.063,
      Long: -16.734733333333335,
      spotName: "La Izquierda (Spanish Left)",
    },
  },
  1445: {
    spot: {
      Lat: 55.998266666666666,
      Long: 8.119983333333334,
      spotName: "Hvide Sande",
    },
  },
  1446: { spot: { Lat: 43.4232, Long: -1.62215, spotName: "Cenitz" } },
  1447: {
    spot: { Lat: 43.3957, Long: -1.7547166666666667, spotName: "Vanthrax" },
  },
  1448: {
    spot: {
      Lat: 28.742133333333335,
      Long: -13.951483333333334,
      spotName: "The Bubble",
    },
  },
  1449: {
    spot: {
      Lat: 27.755266666666667,
      Long: -15.679016666666667,
      spotName: "Arguineguin",
    },
  },
  1450: {
    spot: {
      Lat: 29.154233333333334,
      Long: -13.429383333333334,
      spotName: "Jameos del Agua",
    },
  },
  1451: {
    spot: {
      Lat: 27.67875,
      Long: -18.030233333333335,
      spotName: "La laja de Tecoron",
    },
  },
  1452: {
    spot: {
      Lat: 28.572066666666668,
      Long: -16.192616666666666,
      spotName: "Almáciga",
    },
  },
  1453: {
    spot: {
      Lat: 28.5562,
      Long: -16.3432,
      spotName: "El Charco - La Piscina",
    },
  },
  1454: {
    spot: {
      Lat: 28.057083333333335,
      Long: -16.737466666666666,
      spotName: "El Conquistador",
    },
  },
  1455: {
    spot: {
      Lat: 28.51325,
      Long: -16.175883333333335,
      spotName: "Las Gaviotas",
    },
  },
  1456: {
    spot: {
      Lat: 28.0296,
      Long: -16.551933333333334,
      spotName: "La Tejita (El Medano)",
    },
  },
  1457: {
    spot: {
      Lat: 43.469116666666665,
      Long: -1.57455,
      spotName: "Biarritz - Plage de Marbella",
    },
  },
  1458: {
    spot: {
      Lat: 43.48546666666667,
      Long: -1.5592000000000001,
      spotName: "Biarritz - Grande Plage",
    },
  },
  1459: {
    spot: {
      Lat: 43.50176666666667,
      Long: -1.5419,
      spotName: "Anglet - Les Sables d'Or",
    },
  },
  1460: {
    spot: {
      Lat: 48.36671666666667,
      Long: -4.767766666666667,
      spotName: "Les Blancs Sablons",
    },
  },
  1461: {
    spot: { Lat: 48.69616666666667, Long: -4.06065, spotName: "Dossen" },
  },
  1462: { spot: { Lat: 28.74395, Long: -13.93595, spotName: "Majanicho" } },
  1463: { spot: { Lat: 27.735, Long: -15.5982, spotName: "Maspalomas" } },
  1464: {
    spot: {
      Lat: 27.834566666666667,
      Long: -15.41835,
      spotName: "Mosca Point",
    },
  },
  1465: {
    spot: {
      Lat: 29.225583333333333,
      Long: -13.462033333333334,
      spotName: "Orzola(playa canteria)",
    },
  },
  1466: {
    spot: {
      Lat: 29.12615,
      Long: -13.538766666666668,
      spotName: "Playa de Famara",
    },
  },
  1467: {
    spot: {
      Lat: 28.574583333333333,
      Long: -16.188683333333334,
      spotName: "Benijo",
    },
  },
  1468: {
    spot: {
      Lat: 28.35225,
      Long: -16.369516666666666,
      spotName: "Candelaria",
    },
  },
  1469: {
    spot: { Lat: 28.058516666666666, Long: -16.7369, spotName: "La Derecha" },
  },
  1470: {
    spot: {
      Lat: 57.59596666666667,
      Long: 9.956483333333333,
      spotName: "Hirtshals",
    },
  },
  1471: {
    spot: {
      Lat: 43.527966666666664,
      Long: -1.5265333333333333,
      spotName: "Anglet - Le Furoncle",
    },
  },
  1472: {
    spot: { Lat: 48.25776666666667, Long: -4.5583, spotName: "Kerloc'h" },
  },
  1473: {
    spot: {
      Lat: 28.755583333333334,
      Long: -13.895083333333334,
      spotName: "Suicidios",
    },
  },
  1474: {
    spot: {
      Lat: 28.39525,
      Long: -16.602383333333332,
      spotName: "Playa socorro",
    },
  },
  1475: {
    spot: {
      Lat: 43.52325,
      Long: -1.5264166666666665,
      spotName: "Anglet - Les Cavaliers",
    },
  },
  1476: {
    spot: {
      Lat: 48.74365,
      Long: -3.5526666666666666,
      spotName: "Beg Léguer",
    },
  },
  1477: {
    spot: {
      Lat: 48.2311,
      Long: -4.5671333333333335,
      spotName: "Pointe de Dinan",
    },
  },
  1478: {
    spot: { Lat: 29.11805, Long: -13.56185, spotName: "Caleta de Famara" },
  },
  1479: {
    spot: {
      Lat: 29.239866666666668,
      Long: -13.525416666666667,
      spotName: "La graciosa",
    },
  },
  1480: {
    spot: {
      Lat: 28.16125,
      Long: -16.428083333333333,
      spotName: "Porís de Abona",
    },
  },
  1481: {
    spot: {
      Lat: 43.49458333333333,
      Long: -1.5477833333333333,
      spotName: "Anglet - Chambre d Amour",
    },
  },
  1482: {
    spot: {
      Lat: 43.504983333333335,
      Long: -1.5398333333333334,
      spotName: "Anglet - Marinella",
    },
  },
  1483: {
    spot: {
      Lat: 48.252116666666666,
      Long: -4.5522833333333335,
      spotName: "Kersiguennoù",
    },
  },
  1484: {
    spot: {
      Lat: 48.69453333333333,
      Long: -3.6489666666666665,
      spotName: "Pors-ar-Villec",
    },
  },
  1485: {
    spot: {
      Lat: 48.81828333333333,
      Long: -3.4488833333333333,
      spotName: "Pors-Nevez",
    },
  },
  1486: {
    spot: {
      Lat: 47.75451666666667,
      Long: -3.5156666666666667,
      spotName: "Guidel",
    },
  },
  1487: {
    spot: { Lat: 48.34968333333333, Long: -4.7006, spotName: "Trez-Hir" },
  },
  1488: {
    spot: {
      Lat: 48.06248333333333,
      Long: -4.67305,
      spotName: "Pors Theolen",
    },
  },
  1489: {
    spot: {
      Lat: 46.25536666666667,
      Long: -1.5216333333333334,
      spotName: "Ile de Ré - Petit bec",
    },
  },
  1490: {
    spot: {
      Lat: 45.87521666666667,
      Long: -1.2686166666666667,
      spotName: "Oléron - Vert bois - Les Allassins",
    },
  },
  1491: {
    spot: { Lat: 48.0478, Long: -4.7067, spotName: "Baie des Trépassés" },
  },
  1492: {
    spot: {
      Lat: 45.597316666666664,
      Long: -0.9964166666666666,
      spotName: "St Georges de Didonne - la jetee",
    },
  },
  1493: {
    spot: {
      Lat: 45.840333333333334,
      Long: -1.2562166666666665,
      spotName: "Oléron - Saint Trojan",
    },
  },
  1494: {
    spot: {
      Lat: 44.71511666666667,
      Long: -1.2504166666666667,
      spotName: "Le Truc Vert",
    },
  },
  1495: {
    spot: {
      Lat: 45.37753333333333,
      Long: -1.1612833333333334,
      spotName: "Montalivet",
    },
  },
  1496: {
    spot: {
      Lat: 43.57815,
      Long: -1.4902833333333334,
      spotName: "Ondres-Plage",
    },
  },
  1497: {
    spot: {
      Lat: 44.62188333333334,
      Long: -1.2538166666666666,
      spotName: "Cap Ferret Chenal",
    },
  },
  1498: { spot: { Lat: 44.79755, Long: -1.23425, spotName: "Grand Crohot" } },
  1499: {
    spot: {
      Lat: 44.985933333333335,
      Long: -1.2059166666666667,
      spotName: "Lacanau Supersud",
    },
  },
  1500: {
    spot: {
      Lat: 44.0919,
      Long: -1.3257333333333334,
      spotName: "Contis plage",
    },
  },
  1501: {
    spot: { Lat: 43.95325, Long: -1.36415, spotName: "St. Girons Plage" },
  },
  1502: {
    spot: {
      Lat: 48.81636666666667,
      Long: -3.4555166666666666,
      spotName: "Trestraou",
    },
  },
  1503: {
    spot: {
      Lat: 48.67045,
      Long: -2.8621166666666666,
      spotName: "Port Goret (Treveneuc)",
    },
  },
  1504: {
    spot: {
      Lat: 47.73166666666667,
      Long: -3.4981999999999998,
      spotName: "Les moules",
    },
  },
  1505: {
    spot: {
      Lat: 47.86128333333333,
      Long: -4.090416666666667,
      spotName: "Le Letty",
    },
  },
  1506: {
    spot: { Lat: 47.76795, Long: -3.5637333333333334, spotName: "Le kerou" },
  },
  1507: {
    spot: {
      Lat: 44.21463333333333,
      Long: -1.2990833333333334,
      spotName: "Mimizan",
    },
  },
  1508: {
    spot: {
      Lat: 43.7956,
      Long: -1.4125666666666667,
      spotName: "Vieux Boucau (north beach)",
    },
  },
  1509: {
    spot: {
      Lat: 48.09458333333333,
      Long: -4.306633333333333,
      spotName: "Anse du Ris",
    },
  },
  1510: {
    spot: {
      Lat: 47.638216666666665,
      Long: -3.209216666666667,
      spotName: "Barre d'étel",
    },
  },
  1511: { spot: { Lat: 47.72405, Long: -3.49355, spotName: "Kaolins" } },
  1512: {
    spot: {
      Lat: 47.599133333333334,
      Long: -3.1519666666666666,
      spotName: "Ste Barbe",
    },
  },
  1513: {
    spot: {
      Lat: 48.108983333333335,
      Long: -4.361833333333333,
      spotName: "Les Roches Blanches - le Leyde",
    },
  },
  1514: {
    spot: {
      Lat: 45.708216666666665,
      Long: -1.2428333333333335,
      spotName: "Côte sauvage - Le 46",
    },
  },
  1515: {
    spot: {
      Lat: 46.00488333333333,
      Long: -1.3928666666666667,
      spotName: "Oléron - Les huttes",
    },
  },
  1516: { spot: { Lat: 45.63865, Long: -1.07735, spotName: "Nauzan" } },
  1517: { spot: { Lat: 42.58278333333333, Long: 8.8, spotName: "Lumio" } },
  1518: {
    spot: {
      Lat: 45.43456666666667,
      Long: -1.1554166666666665,
      spotName: "Le Gurp",
    },
  },
  1519: {
    spot: { Lat: 43.91158333333333, Long: -1.3769, spotName: "Arna plage" },
  },
  1520: {
    spot: { Lat: 47.840066666666665, Long: -4.34965, spotName: "La Torche" },
  },
  1521: {
    spot: { Lat: 48.0327, Long: -4.853166666666667, spotName: "Sein Island" },
  },
  1522: {
    spot: {
      Lat: 48.34791666666667,
      Long: -4.7023166666666665,
      spotName: "Trez-hir",
    },
  },
  1523: {
    spot: { Lat: 45.516083333333334, Long: -1.1297, spotName: "Soulac" },
  },
  1524: {
    spot: {
      Lat: 43.67733333333334,
      Long: -1.4430333333333334,
      spotName: "La Graviere",
    },
  },
  1525: {
    spot: { Lat: 43.71041666666667, Long: -1.43815, spotName: "Le Penon" },
  },
  1526: {
    spot: {
      Lat: 48.69493333333333,
      Long: -3.6504666666666665,
      spotName: "Locquirec",
    },
  },
  1527: {
    spot: { Lat: 48.1384, Long: -4.2758, spotName: "Ste Anne La Palud" },
  },
  1528: { spot: { Lat: 47.9917, Long: -4.47985, spotName: "Gwendrez" } },
  1529: {
    spot: {
      Lat: 48,
      Long: -4.558983333333334,
      spotName: "L'île aux vaches - Lervily",
    },
  },
  1530: {
    spot: {
      Lat: 48.10665,
      Long: -4.353983333333334,
      spotName: "Rocher de Coulinec",
    },
  },
  1531: {
    spot: {
      Lat: 46.15821666666667,
      Long: -1.3584666666666667,
      spotName: "Ile de Ré - Les Grenettes",
    },
  },
  1532: {
    spot: { Lat: 45.62591666666667, Long: -1.05315, spotName: "Pontaillac" },
  },
  1533: {
    spot: { Lat: 42.56695, Long: 8.7999, spotName: "Sainte-Restitude" },
  },
  1534: {
    spot: { Lat: 44.514966666666666, Long: -1.256, spotName: "La Salie" },
  },
  1535: {
    spot: {
      Lat: 43.66525,
      Long: -1.4438833333333334,
      spotName: "Les Culs Nuls",
    },
  },
  1536: {
    spot: {
      Lat: 43.64756666666667,
      Long: -1.4464666666666668,
      spotName: "Le Santocha",
    },
  },
  1537: {
    spot: {
      Lat: 48.45733333333333,
      Long: -4.771516666666667,
      spotName: "Le Gouérou",
    },
  },
  1538: {
    spot: {
      Lat: 48.21098333333333,
      Long: -4.555766666666667,
      spotName: "Lostmarc'h",
    },
  },
  1539: {
    spot: { Lat: 48.2811, Long: -4.614433333333333, spotName: "Porz Naye" },
  },
  1540: {
    spot: { Lat: 48.352666666666664, Long: -4.66695, spotName: "Tregana" },
  },
  1541: {
    spot: {
      Lat: 47.706966666666666,
      Long: -3.377466666666667,
      spotName: "Toulhars",
    },
  },
  1542: {
    spot: {
      Lat: 43.69801666666667,
      Long: -1.4409,
      spotName: "Les Bourdaines",
    },
  },
  1543: {
    spot: {
      Lat: 43.54705,
      Long: 6.98005,
      spotName: "Cannes  l'Aérospatiale",
    },
  },
  1544: {
    spot: {
      Lat: 48.532183333333336,
      Long: -4.752366666666667,
      spotName: "Penfoul",
    },
  },
  1545: {
    spot: {
      Lat: 48.35528333333333,
      Long: -4.678816666666666,
      spotName: "Porsmilin",
    },
  },
  1546: {
    spot: {
      Lat: 47.3262,
      Long: -3.2388166666666667,
      spotName: "Belle Ile en Mer - Donnant",
    },
  },
  1547: {
    spot: { Lat: 48.0133, Long: -4.595716666666666, spotName: "Saint Tugen" },
  },
  1548: {
    spot: {
      Lat: 42.56948333333333,
      Long: 8.80395,
      spotName: "Le pain de sucre",
    },
  },
  1549: {
    spot: { Lat: 42.6618, Long: 9.060366666666667, spotName: "L'Ostriconi" },
  },
  1550: {
    spot: {
      Lat: 44.85726666666667,
      Long: -1.2240333333333333,
      spotName: "La Jenny",
    },
  },
  1551: {
    spot: {
      Lat: 44.89431666666667,
      Long: -1.2205166666666667,
      spotName: "Le Porge",
    },
  },
  1552: {
    spot: {
      Lat: 45.67215,
      Long: -1.1554,
      spotName: "Grande Côte - Saint Palais",
    },
  },
  1553: {
    spot: { Lat: 46.1731, Long: -1.38565, spotName: "Ile de Ré - Le gouyot" },
  },
  1554: {
    spot: {
      Lat: 46.25791666666667,
      Long: -1.5178666666666667,
      spotName: "Ile de Ré - Le lizay",
    },
  },
  1555: {
    spot: { Lat: 42.6087, Long: 8.868366666666667, spotName: "Algajola" },
  },
  1556: {
    spot: {
      Lat: 42.70033333333333,
      Long: 3.039416666666667,
      spotName: "Canet plage",
    },
  },
  1557: {
    spot: {
      Lat: 48.63653333333333,
      Long: -2.1244833333333335,
      spotName: "Longchamps",
    },
  },
  1558: {
    spot: {
      Lat: 47.77451666666666,
      Long: -3.6388833333333332,
      spotName: "Beg An Tour",
    },
  },
  1559: {
    spot: {
      Lat: 48.338816666666666,
      Long: -4.616233333333334,
      spotName: "Le Petit Minou",
    },
  },
  1560: {
    spot: {
      Lat: 48.009283333333336,
      Long: -4.5475666666666665,
      spotName: "Audierne - La Gamelle",
    },
  },
  1561: {
    spot: { Lat: 47.2638, Long: -2.3471333333333333, spotName: "Pornichet" },
  },
  1562: {
    spot: {
      Lat: 45.69305,
      Long: -1.2375,
      spotName: "Côte sauvage - Phare de la Coubre  (lighthouse)",
    },
  },
  1563: {
    spot: {
      Lat: 44.63153333333333,
      Long: -1.2595666666666667,
      spotName: "Cap Ferret",
    },
  },
  1564: {
    spot: { Lat: 41.832033333333335, Long: 8.78425, spotName: "Ruppione" },
  },
  1565: {
    spot: { Lat: 45.00335, Long: -1.2044666666666668, spotName: "Lacanau" },
  },
  1566: {
    spot: {
      Lat: 45.268483333333336,
      Long: -1.1662666666666666,
      spotName: "Le Pin Sec",
    },
  },
  1567: {
    spot: {
      Lat: 44.039233333333335,
      Long: -1.3427333333333333,
      spotName: "Cap de l´Homy",
    },
  },
  1568: {
    spot: { Lat: 44.52093333333333, Long: -1.2593, spotName: "Dead Zone" },
  },
  1569: {
    spot: { Lat: 43.81605, Long: -1.4052166666666666, spotName: "Messanges" },
  },
  1570: {
    spot: { Lat: 43.067883333333334, Long: 5.8689, spotName: "Fabregas" },
  },
  1571: {
    spot: {
      Lat: 43.258583333333334,
      Long: 5.374883333333333,
      spotName: "Epluchures Beach",
    },
  },
  1572: {
    spot: {
      Lat: 47.984716666666664,
      Long: -4.465033333333333,
      spotName: "Pors Poulhan",
    },
  },
  1573: { spot: { Lat: 47.7937, Long: -4.23025, spotName: "Le goudoul" } },
  1574: {
    spot: {
      Lat: 47.52171666666667,
      Long: -3.1547,
      spotName: "Saint Pierre Quiberon - Port Blanc",
    },
  },
  1575: { spot: { Lat: 47.85245, Long: -4.3511, spotName: "Tronoen" } },
  1576: {
    spot: {
      Lat: 46.04841666666667,
      Long: -1.42175,
      spotName: "Oléron - Chassiron",
    },
  },
  1577: {
    spot: {
      Lat: 43.65058333333333,
      Long: -1.4466833333333333,
      spotName: "Capbreton - Le Prevent",
    },
  },
  1578: {
    spot: {
      Lat: 43.60038333333333,
      Long: -1.4739666666666666,
      spotName: "Labenne-ocean",
    },
  },
  1579: {
    spot: {
      Lat: 43.852916666666665,
      Long: -1.3931166666666668,
      spotName: "Moliets",
    },
  },
  1580: {
    spot: {
      Lat: 48.69186666666667,
      Long: -4.086016666666667,
      spotName: "Mauvaise Grève",
    },
  },
  1581: {
    spot: {
      Lat: 47.782333333333334,
      Long: -4.287116666666667,
      spotName: "Karek hir",
    },
  },
  1582: {
    spot: {
      Lat: 47.55845,
      Long: -3.1359166666666667,
      spotName: "Saint Pierre Quiberon - L'isthme de Penthièvre",
    },
  },
  1583: {
    spot: { Lat: 48.27461666666667, Long: -4.62005, spotName: "Pen had" },
  },
  1584: { spot: { Lat: 48.82015, Long: -3.43215, spotName: "Trestrignel" } },
  1585: {
    spot: { Lat: 47.79695, Long: -4.208283333333333, spotName: "Lesconil" },
  },
  1586: {
    spot: { Lat: 47.694833333333335, Long: -3.33415, spotName: "Gavres" },
  },
  1587: {
    spot: {
      Lat: 46.132,
      Long: -1.1487833333333333,
      spotName: "Aytré - lopette beach",
    },
  },
  1588: { spot: { Lat: 44.4473, Long: -1.2569, spotName: "Biscarrosse" } },
  1589: {
    spot: {
      Lat: 44.548516666666664,
      Long: -1.2515833333333333,
      spotName: "La Lagune",
    },
  },
  1590: {
    spot: {
      Lat: 44.5815,
      Long: -1.2181166666666667,
      spotName: "Dune du Pyla",
    },
  },
  1591: {
    spot: { Lat: 43.66495, Long: -1.4454500000000001, spotName: "La Nord" },
  },
  1592: {
    spot: {
      Lat: 46.0105,
      Long: -1.3328666666666666,
      spotName: "Oléron - Les Boulassiers",
    },
  },
  1593: {
    spot: {
      Lat: 45.2235,
      Long: -1.1733833333333332,
      spotName: "Hourtin Plage",
    },
  },
  1594: {
    spot: {
      Lat: 44.676066666666664,
      Long: -1.2577166666666666,
      spotName: "La Torchere",
    },
  },
  1595: {
    spot: {
      Lat: 43.90278333333333,
      Long: -1.3778833333333333,
      spotName: "La Lette Blanche",
    },
  },
  1596: {
    spot: { Lat: 43.66185, Long: -1.4472833333333333, spotName: "La Sud" },
  },
  1597: {
    spot: { Lat: 43.2732, Long: 6.588216666666667, spotName: "Galiote" },
  },
  1598: {
    spot: {
      Lat: 45.8496,
      Long: -1.2580166666666668,
      spotName: "Oleron - Grand-Village",
    },
  },
  1599: {
    spot: {
      Lat: 46.16396666666667,
      Long: -1.2531666666666665,
      spotName: "Ile de ré- rivedoux",
    },
  },
  1600: { spot: { Lat: 45.56575, Long: -1.08885, spotName: "Le Verdon" } },
  1601: {
    spot: {
      Lat: 43.62628333333333,
      Long: -1.4568833333333333,
      spotName: "Capbreton - La pointe",
    },
  },
  1602: {
    spot: {
      Lat: 43.644016666666666,
      Long: -1.4470166666666666,
      spotName: "La Piste",
    },
  },
  1603: {
    spot: {
      Lat: 43.558283333333335,
      Long: -1.5020833333333332,
      spotName: "Tarnos",
    },
  },
  1604: {
    spot: { Lat: 43.17635, Long: 5.6716, spotName: "Cap Saint Louis" },
  },
  1605: {
    spot: {
      Lat: 48.281016666666666,
      Long: -4.6149000000000004,
      spotName: "Pointe du Toulinguet",
    },
  },
  1606: {
    spot: {
      Lat: 48.16688333333333,
      Long: -4.294116666666667,
      spotName: "Pors Ar Vag",
    },
  },
  1607: {
    spot: {
      Lat: 48.693666666666665,
      Long: -3.6626333333333334,
      spotName: "Les Sables Blancs",
    },
  },
  1608: {
    spot: {
      Lat: 47.83136666666667,
      Long: -4.354283333333333,
      spotName: "Pors Carn",
    },
  },
  1609: {
    spot: {
      Lat: 47.85498333333334,
      Long: -4.143383333333333,
      spotName: "Treustel",
    },
  },
  1610: {
    spot: {
      Lat: 45.868116666666666,
      Long: -1.26395,
      spotName: "Passe du Trillou",
    },
  },
  1611: {
    spot: {
      Lat: 45.083333333333336,
      Long: -1.1923666666666666,
      spotName: "Carcans",
    },
  },
  1612: {
    spot: {
      Lat: 44.65501666666667,
      Long: -1.2588833333333334,
      spotName: "Le petit train",
    },
  },
  1613: {
    spot: {
      Lat: 45.549549999999996,
      Long: -1.05525,
      spotName: "La Chambrette",
    },
  },
  1614: {
    spot: {
      Lat: 44.91218333333333,
      Long: -0.31611666666666666,
      spotName: "Mascaret St Pardon",
    },
  },
  1615: {
    spot: { Lat: 44.4959, Long: -1.2499500000000001, spotName: "Bobby's" },
  },
  1616: {
    spot: {
      Lat: 48.69781666666667,
      Long: -3.66445,
      spotName: "Les Sables Blancs - La Plate",
    },
  },
  1617: {
    spot: {
      Lat: 47.513,
      Long: -3.1504833333333333,
      spotName: "Saint Pierre Quiberon - Port Bara",
    },
  },
  1618: {
    spot: {
      Lat: 47.58671666666667,
      Long: -3.1407166666666666,
      spotName: "Plouharnel - La Guérite Tata beach",
    },
  },
  1619: {
    spot: {
      Lat: 45.48526666666667,
      Long: -1.1524666666666668,
      spotName: "Amélie",
    },
  },
  1620: { spot: { Lat: 43.6869, Long: -1.44135, spotName: "Les Estagnots" } },
  1621: {
    spot: {
      Lat: 42.52673333333333,
      Long: 3.0861833333333335,
      spotName: "Collioure bay",
    },
  },
  1622: {
    spot: {
      Lat: 50.7649,
      Long: 1.6050833333333334,
      spotName: "Wimereux plage",
    },
  },
  1623: {
    spot: {
      Lat: 46.34406666666667,
      Long: -1.4277333333333333,
      spotName: "La Tranche sur Mer",
    },
  },
  1624: {
    spot: {
      Lat: 43.699983333333336,
      Long: 7.320883333333334,
      spotName: "Villefranche sur mer",
    },
  },
  1625: {
    spot: {
      Lat: 46.480666666666664,
      Long: -1.7621,
      spotName: "Tanchet (Les Sables d'Olonne)",
    },
  },
  1626: {
    spot: {
      Lat: 50.821583333333336,
      Long: 1.5920333333333332,
      spotName: "Audreselles",
    },
  },
  1627: {
    spot: {
      Lat: 54.585766666666665,
      Long: 10.028416666666667,
      spotName: "Damp 2000",
    },
  },
  1628: {
    spot: {
      Lat: 50.4086,
      Long: 1.5578666666666667,
      spotName: "Berck sur mer",
    },
  },
  1629: {
    spot: {
      Lat: 50.943783333333336,
      Long: 1.7431333333333332,
      spotName: "Sangatte",
    },
  },
  1630: {
    spot: { Lat: 37.17865, Long: 25.5547, spotName: "Naxos apollonas" },
  },
  1631: {
    spot: {
      Lat: 49.63256666666667,
      Long: -1.8502166666666666,
      spotName: "Vauville",
    },
  },
  1632: {
    spot: {
      Lat: 39.28425,
      Long: 20.396583333333332,
      spotName: "Kastro Point",
    },
  },
  1633: {
    spot: {
      Lat: 46.77376666666667,
      Long: -2.060583333333333,
      spotName: "St jean de monts",
    },
  },
  1634: {
    spot: { Lat: 46.5529, Long: -1.8338833333333333, spotName: "Sauveterre" },
  },
  1635: {
    spot: {
      Lat: 52.703916666666665,
      Long: 4.635966666666667,
      spotName: "Hargen",
    },
  },
  1636: {
    spot: {
      Lat: 53.61115,
      Long: 6.643816666666667,
      spotName: "Borkum, Nordstrand",
    },
  },
  1637: {
    spot: {
      Lat: 52.21301666666667,
      Long: 4.3974,
      spotName: "Katwijk  watering",
    },
  },
  1638: {
    spot: {
      Lat: 52.09786666666667,
      Long: 4.253133333333333,
      spotName: "Scheveningen'Zuid'",
    },
  },
  1639: {
    spot: { Lat: 37.21561666666667, Long: 21.5971, spotName: "Agrili" },
  },
  1640: {
    spot: {
      Lat: 53.304383333333334,
      Long: 5.050016666666667,
      spotName: "Vlieland",
    },
  },
  1641: {
    spot: {
      Lat: 52.51381666666666,
      Long: -9.677083333333334,
      spotName: "Ballybunion",
    },
  },
  1642: {
    spot: {
      Lat: 52.0115,
      Long: 4.142833333333333,
      spotName: "'s-Gravenzande",
    },
  },
  1643: {
    spot: {
      Lat: 51.468666666666664,
      Long: -9.77525,
      spotName: "Barley Cove",
    },
  },
  1644: {
    spot: {
      Lat: 63.83043333333333,
      Long: -22.45275,
      spotName: "Grindavik Antenas",
    },
  },
  1645: {
    spot: {
      Lat: 52.93606666666667,
      Long: -9.357683333333334,
      spotName: "Lahinch beach",
    },
  },
  1646: {
    spot: { Lat: 64.08328333333333, Long: -22.6938, spotName: "Garður" },
  },
  1647: {
    spot: {
      Lat: 55.248983333333335,
      Long: -7.7027833333333335,
      spotName: "Ballyheirnan Bay",
    },
  },
  1648: {
    spot: { Lat: 55.206516666666666, Long: -6.6121, spotName: "White Rocks" },
  },
  1649: {
    spot: {
      Lat: 54.78961666666667,
      Long: -8.51295,
      spotName: "Loughros point",
    },
  },
  1650: {
    spot: {
      Lat: 43.86226666666666,
      Long: 10.233333333333333,
      spotName: "Bocchetta ( Viareggio )",
    },
  },
  1651: {
    spot: {
      Lat: 44.30996666666667,
      Long: 9.3313,
      spotName: "Chiavari-Entella",
    },
  },
  1652: {
    spot: {
      Lat: 49.559066666666666,
      Long: -1.8545500000000001,
      spotName: "Dielette Shore Break",
    },
  },
  1653: {
    spot: {
      Lat: 50.42413333333333,
      Long: 1.5650499999999998,
      spotName: "Terminus berck",
    },
  },
  1654: {
    spot: {
      Lat: 47.12981666666666,
      Long: -2.226183333333333,
      spotName: "Préfailles",
    },
  },
  1655: {
    spot: { Lat: 48.14351666666666, Long: 11.5878, spotName: "Eisbach" },
  },
  1656: {
    spot: {
      Lat: 54.75286666666667,
      Long: 8.277683333333334,
      spotName: "Sylt - Hörnum",
    },
  },
  1657: {
    spot: { Lat: 52.09343333333333, Long: 4.2508, spotName: "Duindorp" },
  },
  1658: {
    spot: {
      Lat: 52.45708333333334,
      Long: 4.552416666666667,
      spotName: "Ijmuiden",
    },
  },
  1659: {
    spot: {
      Lat: 52.61951666666667,
      Long: 4.620016666666666,
      spotName: "Egmond aan Zee",
    },
  },
  1660: {
    spot: { Lat: 63.85985, Long: -22.700066666666668, spotName: "Sandvik" },
  },
  1661: {
    spot: { Lat: 54.481116666666665, Long: -8.28455, spotName: "Bundoran" },
  },
  1662: {
    spot: {
      Lat: 52.137883333333335,
      Long: -7.366766666666667,
      spotName: "Bunmahon",
    },
  },
  1663: {
    spot: {
      Lat: 51.64195,
      Long: -8.577583333333333,
      spotName: "Garretstown",
    },
  },
  1664: {
    spot: {
      Lat: 51.78581666666667,
      Long: -8.290516666666667,
      spotName: "Fennels Bay",
    },
  },
  1665: {
    spot: {
      Lat: 51.54716666666667,
      Long: -8.926816666666667,
      spotName: "Red Strand",
    },
  },
  1666: {
    spot: {
      Lat: 43.519616666666664,
      Long: 10.312683333333334,
      spotName: "bagni Fiume ( Livorno )",
    },
  },
  1667: {
    spot: {
      Lat: 49.96918333333333,
      Long: 1.1952166666666666,
      spotName: "Berneval",
    },
  },
  1668: {
    spot: {
      Lat: 49.335816666666666,
      Long: -0.4462,
      spotName: "Courseulles sur mer",
    },
  },
  1669: {
    spot: {
      Lat: 49.48011666666667,
      Long: -1.8462999999999998,
      spotName: "Le Rozel",
    },
  },
  1670: {
    spot: {
      Lat: 49.50391666666667,
      Long: -1.8497333333333335,
      spotName: "Sciotot",
    },
  },
  1671: {
    spot: {
      Lat: 50.873583333333336,
      Long: 1.6194666666666666,
      spotName: "Tardinghen",
    },
  },
  1672: {
    spot: {
      Lat: 46.33936666666666,
      Long: -1.4599833333333334,
      spotName: "Le Phare du Groin du Cou",
    },
  },
  1673: {
    spot: {
      Lat: 46.63641666666667,
      Long: -1.8924666666666667,
      spotName: "La Sauzaie",
    },
  },
  1674: {
    spot: {
      Lat: 53.585633333333334,
      Long: 6.65535,
      spotName: "Borkum, Weststrand",
    },
  },
  1675: {
    spot: {
      Lat: 54.306216666666664,
      Long: 10.755633333333334,
      spotName: "Weissenhäuser Strand",
    },
  },
  1676: {
    spot: {
      Lat: 35.17678333333333,
      Long: 25.709716666666665,
      spotName: "Almiros",
    },
  },
  1677: {
    spot: {
      Lat: 39.282516666666666,
      Long: 20.40445,
      spotName: "Krioneri PARGA",
    },
  },
  1678: {
    spot: {
      Lat: 52.06988333333334,
      Long: 4.220783333333333,
      spotName: "Kijkduin",
    },
  },
  1679: {
    spot: {
      Lat: 53.40871666666666,
      Long: 5.285116666666666,
      spotName: "Terschelling",
    },
  },
  1680: {
    spot: {
      Lat: 52.770983333333334,
      Long: 4.658516666666666,
      spotName: "Petten",
    },
  },
  1681: {
    spot: {
      Lat: 55.20915,
      Long: -6.642266666666667,
      spotName: "East Strand",
    },
  },
  1682: {
    spot: {
      Lat: 52.15076666666667,
      Long: -7.111933333333333,
      spotName: "Tramore",
    },
  },
  1683: {
    spot: {
      Lat: 52.34631666666667,
      Long: -9.835383333333333,
      spotName: "Banna Strand",
    },
  },
  1684: {
    spot: {
      Lat: 52.28941666666667,
      Long: -10.032766666666667,
      spotName: "Brandon Bay",
    },
  },
  1685: {
    spot: { Lat: 52.30825, Long: -10.06, spotName: "Gary William Point" },
  },
  1686: {
    spot: {
      Lat: 52.8455,
      Long: -9.442450000000001,
      spotName: "Spanish Point Reefs",
    },
  },
  1687: {
    spot: {
      Lat: 43.24058333333333,
      Long: 5.361933333333333,
      spotName: "Marseille - La digue de la pointe rouge",
    },
  },
  1688: {
    spot: {
      Lat: 43.5282,
      Long: 3.935766666666667,
      spotName: "Palavas les Flots",
    },
  },
  1689: {
    spot: {
      Lat: 49.70656666666667,
      Long: -1.8891,
      spotName: "Anse st Martin",
    },
  },
  1690: {
    spot: {
      Lat: 50.931216666666664,
      Long: 1.7152333333333334,
      spotName: "Cap Blanc Nez",
    },
  },
  1691: {
    spot: {
      Lat: 49.37181666666667,
      Long: -1.7976333333333332,
      spotName: "Cap de carteret",
    },
  },
  1692: {
    spot: {
      Lat: 50.7877,
      Long: 1.6009666666666666,
      spotName: "Pointe aux Oies",
    },
  },
  1693: {
    spot: {
      Lat: 49.916983333333334,
      Long: 1.0282666666666667,
      spotName: "Pourville",
    },
  },
  1694: {
    spot: { Lat: 49.5677, Long: -1.8462999999999998, spotName: "Siouville" },
  },
  1695: {
    spot: {
      Lat: 49.87756666666667,
      Long: 0.7988333333333333,
      spotName: "Veules les Roses",
    },
  },
  1696: {
    spot: {
      Lat: 46.35456666666666,
      Long: -1.4767166666666667,
      spotName: "La Terriere",
    },
  },
  1697: {
    spot: {
      Lat: 46.38961666666667,
      Long: -1.4933333333333334,
      spotName: "Les Conches",
    },
  },
  1698: {
    spot: { Lat: 35.002433333333336, Long: 25.7674, spotName: "Peristeras" },
  },
  1699: {
    spot: {
      Lat: 39.12846666666667,
      Long: 20.588033333333332,
      spotName: "Ligia reef",
    },
  },
  1700: {
    spot: {
      Lat: 52.1259,
      Long: -9.96735,
      spotName: "Inch Strand (Kerry spot)",
    },
  },
  1701: {
    spot: {
      Lat: 49.429316666666665,
      Long: -1.8237333333333332,
      spotName: "Baubigny",
    },
  },
  1702: {
    spot: {
      Lat: 47.20645,
      Long: -2.15975,
      spotName: "St Brévin - l'Ermitage",
    },
  },
  1703: {
    spot: {
      Lat: 47.546166666666664,
      Long: 9.68325,
      spotName: "Lindau Insel",
    },
  },
  1704: {
    spot: { Lat: 54.189733333333336, Long: 7.91475, spotName: "Helgoland" },
  },
  1705: {
    spot: { Lat: 38.9829, Long: 20.707166666666666, spotName: "Shark reef" },
  },
  1706: {
    spot: {
      Lat: 52.55746666666667,
      Long: 4.605333333333333,
      spotName: "Castricum Aan Zee",
    },
  },
  1707: {
    spot: {
      Lat: 51.98793333333333,
      Long: 4.104533333333333,
      spotName: "Hoek van Holland",
    },
  },
  1708: {
    spot: {
      Lat: 52.6316,
      Long: 5.119633333333334,
      spotName: "Schellinkhout",
    },
  },
  1709: {
    spot: { Lat: 52.24361666666667, Long: 4.43015, spotName: "Noordwijk" },
  },
  1710: {
    spot: { Lat: 63.85035, Long: -21.36155, spotName: "Porlackshöfn" },
  },
  1711: {
    spot: {
      Lat: 51.793216666666666,
      Long: -8.182366666666667,
      spotName: "Inch (Cork Area)",
    },
  },
  1712: {
    spot: {
      Lat: 44.377383333333334,
      Long: 9.069216666666666,
      spotName: "Bogliasco",
    },
  },
  1713: {
    spot: {
      Lat: 43.56133333333333,
      Long: 13.601933333333333,
      spotName: "Portonovo ( Ancona )",
    },
  },
  1714: {
    spot: {
      Lat: 43.9513,
      Long: 10.154116666666667,
      spotName: "Lido di Camaiore",
    },
  },
  1715: {
    spot: {
      Lat: 50.87063333333333,
      Long: 1.5907666666666667,
      spotName: "Cap Griz Nez",
    },
  },
  1716: {
    spot: { Lat: 51.05806666666667, Long: 2.36245, spotName: "Dunkerque" },
  },
  1717: {
    spot: {
      Lat: 50.068783333333336,
      Long: 1.3850166666666666,
      spotName: "Mers-Les-Bains",
    },
  },
  1718: { spot: { Lat: 49.31965, Long: -0.3519, spotName: "Luc sur mer" } },
  1719: { spot: { Lat: 50.88825, Long: 1.65975, spotName: "Wissant" } },
  1720: {
    spot: {
      Lat: 54.15091666666667,
      Long: 11.775416666666667,
      spotName: "Kühlungsborn",
    },
  },
  1721: {
    spot: { Lat: 54.35155, Long: 12.385616666666667, spotName: "Wustrow" },
  },
  1722: {
    spot: {
      Lat: 37.631083333333336,
      Long: 26.090633333333333,
      spotName: "Ikaria - Armenistis",
    },
  },
  1723: {
    spot: {
      Lat: 52.30096666666667,
      Long: 4.4736666666666665,
      spotName: "Langevelderslag",
    },
  },
  1724: {
    spot: { Lat: 51.93585, Long: 3.9748166666666664, spotName: "Maasvlakte" },
  },
  1725: {
    spot: { Lat: 51.592216666666666, Long: -8.8627, spotName: "Inchydoney" },
  },
  1726: {
    spot: {
      Lat: 52.57833333333333,
      Long: -9.629516666666667,
      spotName: "Beale",
    },
  },
  1727: {
    spot: { Lat: 52.868716666666664, Long: -9.4485, spotName: "Cream point" },
  },
  1728: {
    spot: { Lat: 41.9254, Long: 16.109216666666665, spotName: "Capo Vieste" },
  },
  1729: {
    spot: {
      Lat: 49.55145,
      Long: -1.8642666666666667,
      spotName: "Dielette Harbour",
    },
  },
  1730: {
    spot: { Lat: 49.48815, Long: -1.8454, spotName: "Le Grand Large" },
  },
  1731: {
    spot: { Lat: 39.45435, Long: 23.122183333333332, spotName: "Chorefto" },
  },
  1732: {
    spot: {
      Lat: 35.332233333333335,
      Long: 25.249583333333334,
      spotName: "Konaki Beach",
    },
  },
  1733: {
    spot: {
      Lat: 37.61096666666667,
      Long: 25.238166666666668,
      spotName: "Tinos-Leivada",
    },
  },
  1734: {
    spot: { Lat: 52.737516666666664, Long: 4.64095, spotName: "Camperduin" },
  },
  1735: { spot: { Lat: 51.5556, Long: 3.4703, spotName: "Domburg" } },
  1736: {
    spot: { Lat: 52.163333333333334, Long: 4.34775, spotName: "Wassenaar" },
  },
  1737: {
    spot: {
      Lat: 55.20065,
      Long: -6.6569666666666665,
      spotName: "West Strand",
    },
  },
  1738: {
    spot: {
      Lat: 52.107933333333335,
      Long: -10.466716666666667,
      spotName: "Coumeenole",
    },
  },
  1739: { spot: { Lat: 52.7478, Long: -9.5494, spotName: "Killard" } },
  1740: {
    spot: {
      Lat: 49.60926666666667,
      Long: -1.8432833333333334,
      spotName: "Biville",
    },
  },
  1741: {
    spot: {
      Lat: 49.36278333333333,
      Long: 0.06695000000000001,
      spotName: "Deauville",
    },
  },
  1742: {
    spot: {
      Lat: 49.65731666666667,
      Long: -1.5680333333333334,
      spotName: "Collignon",
    },
  },
  1743: {
    spot: { Lat: 49.6904, Long: -1.9360333333333333, spotName: "Ecalgrain" },
  },
  1744: {
    spot: {
      Lat: 46.51206666666667,
      Long: -1.8235166666666667,
      spotName: "L'Aubraie",
    },
  },
  1745: {
    spot: {
      Lat: 35.14236666666667,
      Long: 24.477533333333334,
      spotName: "Preveli",
    },
  },
  1746: {
    spot: { Lat: 51.4492, Long: 3.5518, spotName: "Vlissingen Windorgel" },
  },
  1747: {
    spot: {
      Lat: 55.222516666666664,
      Long: -6.535666666666667,
      spotName: "Portballintrae",
    },
  },
  1748: {
    spot: { Lat: 54.29473333333333, Long: -8.95815, spotName: "Easky" },
  },
  1749: {
    spot: { Lat: 54.285666666666664, Long: -9.245, spotName: "Lacken" },
  },
  1750: {
    spot: {
      Lat: 52.742466666666665,
      Long: -9.537483333333334,
      spotName: "Doonbeg castle",
    },
  },
  1751: {
    spot: {
      Lat: 52.92668333333334,
      Long: -9.352533333333334,
      spotName: "Lahinch Left",
    },
  },
  1752: {
    spot: {
      Lat: 52.83808333333333,
      Long: -9.434766666666667,
      spotName: "Spanish Point Beach",
    },
  },
  1753: {
    spot: {
      Lat: 44.16708333333333,
      Long: 8.34185,
      spotName: "Finale Ligure",
    },
  },
  1754: {
    spot: {
      Lat: 43.2819,
      Long: 3.4448166666666666,
      spotName: "La Guillotine (DEAD SPOT)",
    },
  },
  1755: {
    spot: {
      Lat: 49.71876666666667,
      Long: -1.9006833333333333,
      spotName: "Fort de saint germain des vaux",
    },
  },
  1756: {
    spot: { Lat: 49.47018333333333, Long: -1.84145, spotName: "Le Poux" },
  },
  1757: {
    spot: { Lat: 49.72691666666667, Long: -1.9379, spotName: "Nez Bayard" },
  },
  1758: {
    spot: {
      Lat: 46.60718333333333,
      Long: -1.8554166666666667,
      spotName: "Les Dunes",
    },
  },
  1759: {
    spot: { Lat: 47.27935, Long: -2.4966, spotName: "Plage valentin" },
  },
  1760: {
    spot: { Lat: 38.63171666666667, Long: 24.1266, spotName: "Evia - Kimi" },
  },
  1761: {
    spot: {
      Lat: 51.97813333333333,
      Long: 3.975033333333333,
      spotName: "Maasvlakte Blokken",
    },
  },
  1762: {
    spot: {
      Lat: 53.10146666666667,
      Long: 4.753866666666667,
      spotName: "Texel Kogerstrand",
    },
  },
  1763: {
    spot: { Lat: 52.031983333333336, Long: 4.16725, spotName: "Ter Heijde" },
  },
  1764: {
    spot: { Lat: 54.26948333333333, Long: -8.61045, spotName: "Strandhill" },
  },
  1765: {
    spot: { Lat: 53.01286666666667, Long: -9.4068, spotName: "Doolin point" },
  },
  1766: {
    spot: { Lat: 43.55566666666667, Long: 7.13655, spotName: "Keller" },
  },
  1767: {
    spot: {
      Lat: 43.65436666666667,
      Long: 7.197166666666667,
      spotName: "Nice",
    },
  },
  1768: {
    spot: {
      Lat: 37.63075,
      Long: 25.14255,
      spotName: "Tinos island - Kolimbithres",
    },
  },
  1769: {
    spot: {
      Lat: 35.4808,
      Long: 23.560183333333335,
      spotName: "Falasarna Reef",
    },
  },
  1770: {
    spot: {
      Lat: 39.17958333333333,
      Long: 20.539633333333335,
      spotName: "Loutsa",
    },
  },
  1771: {
    spot: {
      Lat: 52.837466666666664,
      Long: 4.691016666666666,
      spotName: "Callantsoog",
    },
  },
  1772: {
    spot: {
      Lat: 54.292183333333334,
      Long: -9.235383333333333,
      spotName: "Kilcummin",
    },
  },
  1773: {
    spot: {
      Lat: 44.38838333333333,
      Long: 8.645066666666667,
      spotName: "Clotilde Cangemi",
    },
  },
  1774: {
    spot: { Lat: 43.327666666666666, Long: 5.1187, spotName: "L'Hermitage" },
  },
  1775: {
    spot: { Lat: 50.9624, Long: 1.8294000000000001, spotName: "Calais" },
  },
  1776: {
    spot: { Lat: 46.38186666666667, Long: -1.4892, spotName: "Bud Bud" },
  },
  1777: {
    spot: {
      Lat: 46.493516666666665,
      Long: -1.7847166666666667,
      spotName: "La Baie des Sables",
    },
  },
  1778: {
    spot: {
      Lat: 53.714816666666664,
      Long: 7.158366666666667,
      spotName: "Norderney",
    },
  },
  1779: { spot: { Lat: 37.09035, Long: 21.582, spotName: "Lakouvardos" } },
  1780: { spot: { Lat: 52.2044, Long: 4.39225, spotName: "Katwijk" } },
  1781: {
    spot: {
      Lat: 52.467983333333336,
      Long: 4.566283333333333,
      spotName: "Wijk aan zee-Noordpier",
    },
  },
  1782: {
    spot: {
      Lat: 63.821783333333336,
      Long: -22.40525,
      spotName: "Grindavik Lighthouse",
    },
  },
  1783: {
    spot: { Lat: 54.544983333333334, Long: -8.2315, spotName: "Rossnowlagh" },
  },
  1784: {
    spot: {
      Lat: 51.786116666666665,
      Long: -8.287233333333333,
      spotName: "Fennels Bay Reef",
    },
  },
  1785: {
    spot: {
      Lat: 51.84511666666667,
      Long: -10.337283333333334,
      spotName: "St. Finnians Bay",
    },
  },
  1786: {
    spot: {
      Lat: 42.833333333333336,
      Long: 12.833333333333334,
      spotName: "Adria",
    },
  },
  1787: {
    spot: {
      Lat: 43.35288333333333,
      Long: 5.02265,
      spotName: "Les Laurons - centrale EDF",
    },
  },
  1788: {
    spot: {
      Lat: 43.7231,
      Long: -1.4330666666666667,
      spotName: "Plage des Casernes",
    },
  },
  1789: {
    spot: {
      Lat: 43.32828333333333,
      Long: 5.0830166666666665,
      spotName: "Tamaris",
    },
  },
  1790: { spot: { Lat: 48.4274, Long: 2.1624, spotName: "Etampes" } },
  1791: {
    spot: {
      Lat: 47.23945,
      Long: -2.2721999999999998,
      spotName: "La Courance",
    },
  },
  1792: {
    spot: {
      Lat: 46.68848333333333,
      Long: -1.93995,
      spotName: "Saint gilles croix de vie",
    },
  },
  1793: {
    spot: {
      Lat: 54.91263333333333,
      Long: 8.299083333333334,
      spotName: "Brandenburg (Sylt, Westerland)",
    },
  },
  1794: {
    spot: {
      Lat: 48.09023333333333,
      Long: 11.545283333333334,
      spotName: "Flosslände (River)",
    },
  },
  1795: {
    spot: {
      Lat: 39.14058333333333,
      Long: 20.576533333333334,
      spotName: "Ligia - Preveza",
    },
  },
  1796: {
    spot: { Lat: 37.81256666666667, Long: 23.77695, spotName: "Vouliagmeni" },
  },
  1797: {
    spot: { Lat: 51.9829, Long: 4.044316666666667, spotName: "Maasexpress" },
  },
  1798: {
    spot: {
      Lat: 52.11678333333333,
      Long: 4.281766666666667,
      spotName: "Scheveningen Pier",
    },
  },
  1799: {
    spot: {
      Lat: 63.93416666666667,
      Long: -22.691866666666666,
      spotName: "Hafnir",
    },
  },
  1800: {
    spot: {
      Lat: 53.85816666666667,
      Long: -6.242216666666667,
      spotName: "Clogherhead",
    },
  },
  1801: {
    spot: { Lat: 54.2953, Long: -8.949966666666667, spotName: "Easky right" },
  },
  1802: {
    spot: {
      Lat: 54.20823333333333,
      Long: -9.107666666666667,
      spotName: "Inishcrone",
    },
  },
  1803: {
    spot: {
      Lat: 43.976533333333336,
      Long: 10.139683333333334,
      spotName: "Cinquale",
    },
  },
  1804: {
    spot: {
      Lat: 43.95706666666667,
      Long: 10.165333333333333,
      spotName: "Forte dei Marmi (pontile)",
    },
  },
  1805: {
    spot: {
      Lat: 45.66713333333333,
      Long: 13.115266666666667,
      spotName: "Lignano Pineta",
    },
  },
  1806: {
    spot: {
      Lat: 43.13421666666667,
      Long: 6.37225,
      spotName: "Le Lavandou - Front de mer",
    },
  },
  1807: {
    spot: { Lat: 43.092083333333335, Long: 5.80405, spotName: "Six fours" },
  },
  1808: {
    spot: {
      Lat: 49.49965,
      Long: 0.08875000000000001,
      spotName: "Le Havre beach",
    },
  },
  1809: {
    spot: {
      Lat: 49.70851666666667,
      Long: 0.20153333333333334,
      spotName: "Etretat",
    },
  },
  1810: {
    spot: {
      Lat: 53.0389,
      Long: 4.713183333333333,
      spotName: "Texel Paal 12",
    },
  },
  1811: { spot: { Lat: 52.37225, Long: 4.52525, spotName: "Zandvoort" } },
  1812: {
    spot: {
      Lat: 54.46863333333334,
      Long: -8.444533333333334,
      spotName: "Mullaghmore",
    },
  },
  1813: {
    spot: {
      Lat: 54.50095,
      Long: -8.268933333333333,
      spotName: "Tullan Strand",
    },
  },
  1814: {
    spot: { Lat: 52.13433333333333, Long: -7.2829, spotName: "Annestown" },
  },
  1815: {
    spot: {
      Lat: 53.015616666666666,
      Long: -9.415116666666666,
      spotName: "Crab Island",
    },
  },
  1816: {
    spot: {
      Lat: 44.041266666666665,
      Long: 8.223783333333333,
      spotName: "Albenga",
    },
  },
  1817: {
    spot: {
      Lat: 43.498333333333335,
      Long: 10.31945,
      spotName: "Il Sale  ( Livorno )",
    },
  },
  1818: {
    spot: {
      Lat: 49.66883333333333,
      Long: -1.4872166666666666,
      spotName: "Anse du Brick",
    },
  },
  1819: {
    spot: {
      Lat: 48.758316666666666,
      Long: -1.5729666666666666,
      spotName: "Carolles",
    },
  },
  1820: {
    spot: {
      Lat: 51.001016666666665,
      Long: 2.0352166666666665,
      spotName: "Oye plage (escardines)",
    },
  },
  1821: {
    spot: {
      Lat: 50.772416666666665,
      Long: 1.6054499999999998,
      spotName: "Wimereux reef",
    },
  },
  1822: {
    spot: { Lat: 47.26473333333333, Long: -2.4545, spotName: "La Govelle" },
  },
  1823: {
    spot: {
      Lat: 54.372033333333334,
      Long: 10.914666666666667,
      spotName: "Dazendorf",
    },
  },
  1824: {
    spot: {
      Lat: 54.324533333333335,
      Long: 8.6016,
      spotName: "St. Peter Ording",
    },
  },
  1825: {
    spot: {
      Lat: 54.912533333333336,
      Long: 8.299133333333334,
      spotName: "Sylt - Westerland",
    },
  },
  1826: {
    spot: {
      Lat: 40.72768333333333,
      Long: 24.759916666666665,
      spotName: "Golden Beach, Thassos",
    },
  },
  1827: {
    spot: {
      Lat: 39.0885,
      Long: 20.647433333333332,
      spotName: "Kastrosikia spot",
    },
  },
  1828: { spot: { Lat: 39.2377, Long: 20.478, spotName: "Amoudia Left" } },
  1829: {
    spot: {
      Lat: 52.66088333333333,
      Long: 4.62795,
      spotName: "Bergen aan zee",
    },
  },
  1830: {
    spot: {
      Lat: 52.102783333333335,
      Long: 4.262016666666667,
      spotName: "Scheveningen",
    },
  },
  1831: {
    spot: {
      Lat: 64.16433333333333,
      Long: -22.024266666666666,
      spotName: "Grótta",
    },
  },
  1832: {
    spot: { Lat: 63.412333333333336, Long: -19.0088, spotName: "Vik" },
  },
  1833: {
    spot: {
      Lat: 44.03725,
      Long: 10.0324,
      spotName: "Marina di Carrara-Idrovora",
    },
  },
  1834: {
    spot: {
      Lat: 42.414633333333335,
      Long: 11.27745,
      spotName: "Ansedonia - Il Cartello",
    },
  },
  1835: {
    spot: {
      Lat: 49.56073333333333,
      Long: -1.8597833333333333,
      spotName: "Dielette Left",
    },
  },
  1836: {
    spot: {
      Lat: 49.73793333333333,
      Long: 0.2905833333333333,
      spotName: "Vaucotte",
    },
  },
  1837: {
    spot: {
      Lat: 49.365883333333336,
      Long: 0.08101666666666667,
      spotName: "Trouville",
    },
  },
  1838: {
    spot: {
      Lat: 49.740766666666666,
      Long: 0.3062833333333333,
      spotName: "Yport",
    },
  },
  1839: {
    spot: {
      Lat: 36.80608333333333,
      Long: 21.72135,
      spotName: "Agamemnon/Kouloura Island",
    },
  },
  1840: {
    spot: { Lat: 63.40615, Long: -20.272516666666668, spotName: "Brimurð" },
  },
  1841: {
    spot: {
      Lat: 51.84158333333333,
      Long: -10.217116666666668,
      spotName: "Ballinskelligs",
    },
  },
  1842: {
    spot: {
      Lat: 51.55266666666667,
      Long: -8.958833333333333,
      spotName: "Long Strand",
    },
  },
  1843: {
    spot: {
      Lat: 53.11711666666667,
      Long: -9.257016666666667,
      spotName: "Fanore",
    },
  },
  1844: {
    spot: {
      Lat: 44.00496666666667,
      Long: 8.172816666666666,
      spotName: "Alassio",
    },
  },
  1845: {
    spot: {
      Lat: 42.02836666666666,
      Long: 11.83935,
      spotName: "Banzai ( S. Marinella )",
    },
  },
  1846: {
    spot: {
      Lat: 44.17028333333333,
      Long: 9.607566666666667,
      spotName: "Levanto",
    },
  },
  1847: {
    spot: {
      Lat: 41.21033333333333,
      Long: 13.56635,
      spotName: "Sant'Agostino",
    },
  },
  1848: {
    spot: {
      Lat: 43.3798,
      Long: 10.434933333333333,
      spotName: "Lillatro ( Rosignano LI )",
    },
  },
  1849: {
    spot: { Lat: 44.42415, Long: 8.823966666666667, spotName: "Multedo" },
  },
  1850: {
    spot: {
      Lat: 38.193733333333334,
      Long: 13.242983333333333,
      spotName: "Isola Delle Femmine(PA)-LA BAIA (Sicily)",
    },
  },
  1851: {
    spot: { Lat: 41.1731, Long: 9.167916666666667, spotName: "Rena Majore" },
  },
  1852: {
    spot: {
      Lat: 37.045116666666665,
      Long: -8.878233333333334,
      spotName: "Ingrina",
    },
  },
  1853: {
    spot: {
      Lat: 37.04821666666667,
      Long: -8.064733333333333,
      spotName: "Vale do Lobo",
    },
  },
  1854: {
    spot: { Lat: 39.10961666666667, Long: 8.3648, spotName: "Maresciallo" },
  },
  1855: {
    spot: {
      Lat: 44.047983333333335,
      Long: 9.994916666666667,
      spotName: "Marinella di Sarzana",
    },
  },
  1856: {
    spot: {
      Lat: 42.77928333333333,
      Long: 10.785133333333333,
      spotName: "Rocchette",
    },
  },
  1857: {
    spot: {
      Lat: 42.0365,
      Long: 11.875466666666666,
      spotName: "Porto di Santa Marinella",
    },
  },
  1858: {
    spot: {
      Lat: 37.02571666666667,
      Long: -8.965533333333333,
      spotName: "Beliche",
    },
  },
  1859: {
    spot: {
      Lat: 32.851016666666666,
      Long: -17.150116666666666,
      spotName: "Ribeira da Janela",
    },
  },
  1860: {
    spot: { Lat: 37.29443333333333, Long: -8.87125, spotName: "Arrifana" },
  },
  1861: {
    spot: {
      Lat: 58.79943333333333,
      Long: 5.549216666666666,
      spotName: "Bore",
    },
  },
  1862: {
    spot: {
      Lat: 37.32106666666667,
      Long: -8.87955,
      spotName: "Lage do Pescador",
    },
  },
  1863: {
    spot: { Lat: 37.0649, Long: -8.825083333333334, spotName: "Salema" },
  },
  1864: {
    spot: { Lat: 44.0017, Long: 12.662083333333333, spotName: "Riccione" },
  },
  1865: {
    spot: {
      Lat: 44.240033333333336,
      Long: 9.481416666666666,
      spotName: "Moneglia",
    },
  },
  1866: {
    spot: {
      Lat: 43.84588333333333,
      Long: 13.028583333333334,
      spotName: "Fano-Sassonia",
    },
  },
  1867: {
    spot: { Lat: 39.20545, Long: 9.312716666666667, spotName: "Racca Point" },
  },
  1868: {
    spot: {
      Lat: 39.8876,
      Long: 8.431883333333333,
      spotName: "San Giovanni di Sinis",
    },
  },
  1869: {
    spot: {
      Lat: 32.646166666666666,
      Long: -16.901666666666667,
      spotName: "Cais do funchal",
    },
  },
  1870: {
    spot: {
      Lat: 62.488533333333336,
      Long: 5.9666,
      spotName: "Alnes Lighthouse (Godoy)",
    },
  },
  1871: {
    spot: {
      Lat: 37.122416666666666,
      Long: -8.596466666666666,
      spotName: "Alvor",
    },
  },
  1872: { spot: { Lat: 62.69181666666667, Long: 6.1984, spotName: "Ulla" } },
  1873: {
    spot: {
      Lat: 37.11488333333333,
      Long: -8.533033333333334,
      spotName: "Praia da Rocha",
    },
  },
  1874: { spot: { Lat: 37.04565, Long: -8.87265, spotName: "Zavial" } },
  1875: { spot: { Lat: 41.24865, Long: 13.03365, spotName: "Saporetti" } },
  1876: {
    spot: {
      Lat: 44.358266666666665,
      Long: 8.577633333333333,
      spotName: "Varazze",
    },
  },
  1877: {
    spot: {
      Lat: 42.03841666666667,
      Long: 11.917033333333332,
      spotName: "La Toscana",
    },
  },
  1878: {
    spot: {
      Lat: 40.029383333333335,
      Long: 8.392183333333334,
      spotName: "Minicapo",
    },
  },
  1879: {
    spot: {
      Lat: 40.10321666666667,
      Long: 8.489516666666667,
      spotName: "Santa Caterina",
    },
  },
  1880: {
    spot: {
      Lat: 32.73766666666667,
      Long: -17.213233333333335,
      spotName: "Jardim do mar",
    },
  },
  1881: {
    spot: {
      Lat: 32.808816666666665,
      Long: -17.050066666666666,
      spotName: "São Vicente",
    },
  },
  1882: {
    spot: { Lat: 37.06555, Long: -8.7948, spotName: "Cabanas Velhas" },
  },
  1883: {
    spot: {
      Lat: 38.942283333333336,
      Long: -9.417,
      spotName: "Foz do Lizandro",
    },
  },
  1884: {
    spot: {
      Lat: 40.047583333333336,
      Long: 8.398783333333334,
      spotName: "Sa mesa longa",
    },
  },
  1885: {
    spot: { Lat: 32.71713333333334, Long: -16.76385, spotName: "Machico" },
  },
  1886: {
    spot: { Lat: 62.1246, Long: 5.158766666666667, spotName: "Hoddevik" },
  },
  1887: {
    spot: {
      Lat: 37.19995,
      Long: -8.906216666666667,
      spotName: "Carrapateira",
    },
  },
  1888: {
    spot: { Lat: 37.11215, Long: -7.62245, spotName: "Ilha de Tavira" },
  },
  1889: { spot: { Lat: 44.35995, Long: 9.1412, spotName: "Recco" } },
  1890: {
    spot: {
      Lat: 41.45135,
      Long: 12.637033333333333,
      spotName: "Marinaretti  (Anzio )",
    },
  },
  1891: {
    spot: { Lat: 37.1051, Long: -8.941816666666666, spotName: "Cordoama" },
  },
  1892: {
    spot: { Lat: 37.247483333333335, Long: -8.87, spotName: "Vale Figueira" },
  },
  1893: {
    spot: { Lat: 39.1224, Long: 9.525666666666666, spotName: "Porto Giunco" },
  },
  1894: {
    spot: {
      Lat: 32.67875,
      Long: -17.087733333333333,
      spotName: "Lugar de baixo",
    },
  },
  1895: {
    spot: {
      Lat: 32.65545,
      Long: -17.025033333333333,
      spotName: "Fajã dos Padres",
    },
  },
  1896: {
    spot: {
      Lat: 62.983783333333335,
      Long: 7.15055,
      spotName: "Farstadstranda-Farstad",
    },
  },
  1897: {
    spot: {
      Lat: 58.81366666666667,
      Long: 5.542066666666667,
      spotName: "Sele",
    },
  },
  1898: {
    spot: { Lat: 38.93293333333333, Long: -9.41995, spotName: "Limipicos" },
  },
  1899: {
    spot: {
      Lat: 43.86395,
      Long: 10.239433333333332,
      spotName: "Viareggio Tito del Molo (Ala Moana)",
    },
  },
  1900: { spot: { Lat: 40.9821, Long: 8.8536, spotName: "Badesi" } },
  1901: {
    spot: {
      Lat: 39.13698333333333,
      Long: 9.429016666666667,
      spotName: "Solanas",
    },
  },
  1902: {
    spot: {
      Lat: 58.821983333333336,
      Long: 5.537266666666667,
      spotName: "Reve Havn",
    },
  },
  1903: {
    spot: {
      Lat: 36.97233333333333,
      Long: -7.8652999999999995,
      spotName: "Ilha do farol",
    },
  },
  1904: {
    spot: {
      Lat: 37.170316666666665,
      Long: -7.498366666666667,
      spotName: "Praia de Altura",
    },
  },
  1905: {
    spot: {
      Lat: 37.16665,
      Long: -8.904466666666666,
      spotName: "Praia do amado",
    },
  },
  1906: {
    spot: {
      Lat: 39.00058333333333,
      Long: -9.426916666666667,
      spotName: "Coxos",
    },
  },
  1907: {
    spot: {
      Lat: 43.822183333333335,
      Long: 7.813866666666667,
      spotName: "Tre Ponti (La Scaletta)",
    },
  },
  1908: {
    spot: {
      Lat: 38.16065,
      Long: 13.084383333333333,
      spotName: "Magaggiari (Sicily)",
    },
  },
  1909: {
    spot: {
      Lat: 32.768683333333335,
      Long: -16.820966666666667,
      spotName: "Porto da cruz",
    },
  },
  1910: {
    spot: { Lat: 35.9341, Long: 14.342616666666666, spotName: "Golden bay" },
  },
  1911: {
    spot: {
      Lat: 58.536316666666664,
      Long: 5.7396666666666665,
      spotName: "Brusand",
    },
  },
  1912: { spot: { Lat: 38.8945, Long: 8.879016666666667, spotName: "Chia" } },
  1913: {
    spot: { Lat: 58.8336, Long: 5.553466666666667, spotName: "Bybergsanden" },
  },
  1914: {
    spot: {
      Lat: 58.085366666666665,
      Long: 6.611366666666667,
      spotName: "Renna",
    },
  },
  1915: {
    spot: {
      Lat: 37.085633333333334,
      Long: -8.248683333333334,
      spotName: "Albufeira",
    },
  },
  1916: {
    spot: { Lat: 37.04213333333333, Long: -8.8949, spotName: "Barranco" },
  },
  1917: {
    spot: {
      Lat: 37.00638333333333,
      Long: -8.948216666666667,
      spotName: "Tonel",
    },
  },
  1918: {
    spot: {
      Lat: 38.99653333333333,
      Long: -9.426833333333333,
      spotName: "Cave",
    },
  },
  1919: { spot: { Lat: 40.03005, Long: 8.3834, spotName: "Capo Mannu 2" } },
  1920: { spot: { Lat: 40.0292, Long: 8.389, spotName: "Capo mannu 1" } },
  1921: {
    spot: { Lat: 39.4409, Long: 8.409133333333333, spotName: "Portixeddu" },
  },
  1922: {
    spot: {
      Lat: 39.20506666666667,
      Long: 9.166816666666668,
      spotName: "Poetto-Cagliari",
    },
  },
  1923: {
    spot: { Lat: 32.652566666666665, Long: -17.0058, spotName: "Cabo Girão" },
  },
  1924: {
    spot: {
      Lat: 32.64423333333333,
      Long: -16.969283333333333,
      spotName: "Pizo",
    },
  },
  1925: {
    spot: {
      Lat: 36.061366666666665,
      Long: 14.283366666666666,
      spotName: "Gozo - Ramla Bay",
    },
  },
  1926: {
    spot: { Lat: 58.9644, Long: 9.855333333333334, spotName: "Saltstein" },
  },
  1927: {
    spot: { Lat: 37.350033333333336, Long: -8.8455, spotName: "Amoreira" },
  },
  1928: {
    spot: {
      Lat: 36.96436666666666,
      Long: -7.87745,
      spotName: "Ilha Deserta",
    },
  },
  1929: {
    spot: {
      Lat: 37.03948333333334,
      Long: -8.050783333333333,
      spotName: "Julias",
    },
  },
  1930: {
    spot: {
      Lat: 42.092166666666664,
      Long: 11.798366666666666,
      spotName: "Marangone",
    },
  },
  1931: {
    spot: { Lat: 40.6848, Long: 8.203016666666667, spotName: "Porto Ferro" },
  },
  1932: { spot: { Lat: 37.0861, Long: -8.7255, spotName: "Luz" } },
  1933: {
    spot: {
      Lat: 38.94446666666666,
      Long: -9.418116666666666,
      spotName: "Malhadinha",
    },
  },
  1934: {
    spot: {
      Lat: 41.24261666666666,
      Long: 9.400466666666667,
      spotName: "Bassa Trinita",
    },
  },
  1935: {
    spot: {
      Lat: 45.43508333333333,
      Long: 12.42965,
      spotName: "Punta sabbioni ( Venezia )",
    },
  },
  1936: {
    spot: {
      Lat: 45.52053333333333,
      Long: 8.746783333333333,
      spotName: "Turbigo-l'onda - Turbo Wave",
    },
  },
  1937: {
    spot: {
      Lat: 39.248866666666665,
      Long: 8.391316666666667,
      spotName: "Guruneddu",
    },
  },
  1938: {
    spot: {
      Lat: 37.469433333333335,
      Long: 15.085433333333333,
      spotName: "Playa (Sicily)",
    },
  },
  1939: {
    spot: {
      Lat: 32.85106666666667,
      Long: -17.220083333333335,
      spotName: "Achadas da Cruz",
    },
  },
  1940: {
    spot: {
      Lat: 33.050716666666666,
      Long: -16.343616666666666,
      spotName: "Porto Santo",
    },
  },
  1941: {
    spot: {
      Lat: 35.96915,
      Long: 14.352566666666666,
      spotName: "Mellieha bay",
    },
  },
  1942: {
    spot: { Lat: 58.8461, Long: 5.559816666666666, spotName: "Hellesto" },
  },
  1943: {
    spot: { Lat: 37.0194, Long: -8.925583333333334, spotName: "Martinhal" },
  },
  1944: {
    spot: { Lat: 37.108383333333336, Long: -8.66195, spotName: "Meia Praia" },
  },
  1945: {
    spot: {
      Lat: 37.34453333333333,
      Long: -8.854166666666666,
      spotName: "Monte Clerigo",
    },
  },
  1946: {
    spot: {
      Lat: 37.09061666666667,
      Long: -8.4,
      spotName: "Pirata or Ponta do Levante",
    },
  },
  1947: {
    spot: {
      Lat: 37.00548333333333,
      Long: -8.938916666666668,
      spotName: "Mareta",
    },
  },
  1948: {
    spot: {
      Lat: 37.06925,
      Long: -8.966083333333334,
      spotName: "Ponta Ruiva",
    },
  },
  1949: { spot: { Lat: 38.98256666666666, Long: -9.4227, spotName: "Reef" } },
  1950: {
    spot: {
      Lat: 44.07908333333334,
      Long: 12.576016666666666,
      spotName: "Rock island ( Rimini )",
    },
  },
  1951: {
    spot: {
      Lat: 41.157016666666664,
      Long: 9.153066666666666,
      spotName: "Lu Litarroni",
    },
  },
  1952: {
    spot: { Lat: 39.52138333333333, Long: 8.43115, spotName: "Piscinas" },
  },
  1953: {
    spot: {
      Lat: 39.48886666666667,
      Long: 8.404033333333333,
      spotName: "Scivu",
    },
  },
  1954: {
    spot: {
      Lat: 32.7597,
      Long: -17.232316666666666,
      spotName: "Paul do Mar",
    },
  },
  1955: {
    spot: {
      Lat: 62.157333333333334,
      Long: 5.099033333333334,
      spotName: "Ervika",
    },
  },
  1956: {
    spot: {
      Lat: 68.27193333333334,
      Long: 13.574983333333334,
      spotName: "Unstad",
    },
  },
  1957: {
    spot: {
      Lat: 37.10166666666667,
      Long: -8.36235,
      spotName: "Armação de pêra",
    },
  },
  1958: {
    spot: {
      Lat: 37.101083333333335,
      Long: -8.945366666666667,
      spotName: "Castelejo",
    },
  },
  1959: {
    spot: { Lat: 39.4045, Long: 8.401316666666666, spotName: "Buggerru" },
  },
  1960: {
    spot: {
      Lat: 41.01708333333333,
      Long: 8.884683333333333,
      spotName: "Isola Rossa",
    },
  },
  1961: {
    spot: { Lat: 38.9964, Long: 9.019116666666667, spotName: "Il Convento" },
  },
  1962: {
    spot: {
      Lat: 32.8306,
      Long: -16.991333333333333,
      spotName: "Ponta Delgada",
    },
  },
  1963: {
    spot: {
      Lat: 59.44656666666667,
      Long: 9.073416666666667,
      spotName: "Bo Sommerland -  flow rider",
    },
  },
  1964: {
    spot: {
      Lat: 38.97976666666667,
      Long: -9.423866666666667,
      spotName: "Pedra Branca",
    },
  },
  1965: {
    spot: { Lat: 38.9561, Long: -9.417066666666667, spotName: "Papuços" },
  },
  1966: {
    spot: {
      Lat: 38.68873333333333,
      Long: -9.359666666666667,
      spotName: "Parede",
    },
  },
  1967: {
    spot: {
      Lat: 39.263866666666665,
      Long: -9.337183333333334,
      spotName: "Praia da Areia Branca",
    },
  },
  1968: {
    spot: {
      Lat: 38.96665,
      Long: -9.420433333333333,
      spotName: "Praia do Norte",
    },
  },
  1969: {
    spot: {
      Lat: 38.5793,
      Long: -9.202416666666666,
      spotName: "Fonte da Telha",
    },
  },
  1970: {
    spot: {
      Lat: 38.644616666666664,
      Long: -9.242433333333333,
      spotName: "Praia CDS",
    },
  },
  1971: {
    spot: { Lat: 38.70015, Long: -9.389466666666667, spotName: "Poça" },
  },
  1972: {
    spot: { Lat: 38.45375, Long: -8.863483333333333, spotName: "Troia" },
  },
  1973: {
    spot: { Lat: 39.32468333333333, Long: -9.36245, spotName: "Mini pipe" },
  },
  1974: {
    spot: {
      Lat: 40.14001666666667,
      Long: -8.863216666666666,
      spotName: "Cabedelo",
    },
  },
  1975: {
    spot: {
      Lat: 40.64476666666667,
      Long: -8.762633333333333,
      spotName: "Praia da Barra",
    },
  },
  1976: {
    spot: {
      Lat: 41.173366666666666,
      Long: -8.690833333333334,
      spotName: "Matosinhos",
    },
  },
  1977: {
    spot: { Lat: 38.30635, Long: -8.780416666666667, spotName: "Carvalhal" },
  },
  1978: {
    spot: {
      Lat: 38.29206666666666,
      Long: -8.776566666666668,
      spotName: "Praia do PEGO",
    },
  },
  1979: {
    spot: {
      Lat: 38.70191666666667,
      Long: -9.399166666666666,
      spotName: "Tamariz",
    },
  },
  1980: {
    spot: {
      Lat: 39.36148333333333,
      Long: -9.355633333333333,
      spotName: "Baleal Sul",
    },
  },
  1981: {
    spot: { Lat: 39.37425, Long: -9.335833333333333, spotName: "Lagide" },
  },
  1982: { spot: { Lat: 39.3493, Long: -9.36795, spotName: "Molhe Leste" } },
  1983: {
    spot: { Lat: 40.99758333333333, Long: -8.6484, spotName: "Cagalhotos" },
  },
  1984: { spot: { Lat: 38.1761, Long: -8.78215, spotName: "Aberta-A-Nova" } },
  1985: {
    spot: { Lat: 36.42926666666666, Long: -6.2359, spotName: "Camposoto" },
  },
  1986: {
    spot: {
      Lat: 39.34481666666667,
      Long: -9.364516666666667,
      spotName: "Supertubos",
    },
  },
  1987: {
    spot: { Lat: 41.30708333333333, Long: -8.7402, spotName: "Mindelo" },
  },
  1988: {
    spot: {
      Lat: 41.355666666666664,
      Long: -8.755366666666667,
      spotName: "praia do rock",
    },
  },
  1989: {
    spot: {
      Lat: 41.664766666666665,
      Long: -8.8228,
      spotName: "Viana do castelo",
    },
  },
  1990: {
    spot: { Lat: 41.2094, Long: -8.715583333333333, spotName: "Sacor" },
  },
  1991: {
    spot: {
      Lat: 37.006816666666666,
      Long: -7.9956499999999995,
      spotName: "Praia de Faro",
    },
  },
  1992: {
    spot: {
      Lat: 36.689,
      Long: -6.419616666666666,
      spotName: "Costa Ballena",
    },
  },
  1993: {
    spot: { Lat: 37.4425, Long: -8.799666666666667, spotName: "Odeceixe" },
  },
  1994: {
    spot: { Lat: 38.42285, Long: -9.218916666666667, spotName: "Bicas" },
  },
  1995: {
    spot: {
      Lat: 38.50821666666667,
      Long: -9.1838,
      spotName: "Lagoa de Albufeira",
    },
  },
  1996: {
    spot: {
      Lat: 39.37903333333333,
      Long: -9.314633333333333,
      spotName: "Almagreira",
    },
  },
  1997: {
    spot: {
      Lat: 39.32256666666667,
      Long: -9.359133333333332,
      spotName: "Porto Batel",
    },
  },
  1998: {
    spot: {
      Lat: 40.3291,
      Long: -8.843633333333333,
      spotName: "Praia da Tocha",
    },
  },
  1999: {
    spot: {
      Lat: 40.87303333333333,
      Long: -8.679283333333334,
      spotName: "Furadouro",
    },
  },
  2000: {
    spot: {
      Lat: 36.51626666666667,
      Long: -6.284183333333333,
      spotName: "Cadiz",
    },
  },
  2001: { spot: { Lat: 36.01265, Long: -5.6032, spotName: "Tarifa" } },
  2002: {
    spot: {
      Lat: 38.692233333333334,
      Long: -9.366166666666667,
      spotName: "Bafureira",
    },
  },
  2003: {
    spot: {
      Lat: 41.52348333333333,
      Long: -8.791383333333334,
      spotName: "Ofir",
    },
  },
  2004: {
    spot: {
      Lat: 41.81003333333334,
      Long: -8.86855,
      spotName: "Vila Praia de Ancora",
    },
  },
  2005: {
    spot: {
      Lat: 36.183616666666666,
      Long: -6.036233333333334,
      spotName: "Faro de Trafalgar",
    },
  },
  2006: {
    spot: {
      Lat: 38.641016666666665,
      Long: -9.241566666666667,
      spotName: "Praia do Barbas",
    },
  },
  2007: {
    spot: {
      Lat: 38.44498333333333,
      Long: -9.107666666666667,
      spotName: "Sesimbra",
    },
  },
  2008: {
    spot: {
      Lat: 38.988216666666666,
      Long: -9.421066666666666,
      spotName: "Ribeira D'Ilhas",
    },
  },
  2009: {
    spot: {
      Lat: 38.86383333333333,
      Long: -9.449333333333334,
      spotName: "Magoito",
    },
  },
  2010: {
    spot: {
      Lat: 38.82035,
      Long: -9.474383333333334,
      spotName: "Praia Pequena",
    },
  },
  2011: {
    spot: {
      Lat: 41.009116666666664,
      Long: -8.647933333333333,
      spotName: "Espinho",
    },
  },
  2012: {
    spot: {
      Lat: 40.97848333333334,
      Long: -8.650066666666667,
      spotName: "Capela de Paramos",
    },
  },
  2013: {
    spot: {
      Lat: 37.90598333333333,
      Long: -8.802616666666667,
      spotName: "Sanguessuga",
    },
  },
  2014: {
    spot: { Lat: 38.692483333333335, Long: -9.3718, spotName: "Bica" },
  },
  2015: {
    spot: { Lat: 38.6754, Long: -9.323116666666667, spotName: "Torre" },
  },
  2016: {
    spot: {
      Lat: 39.14058333333333,
      Long: -9.378216666666667,
      spotName: "Santa Cruz",
    },
  },
  2017: {
    spot: { Lat: 40.16331666666667, Long: -8.8803, spotName: "Buarcos" },
  },
  2018: {
    spot: {
      Lat: 39.01221666666667,
      Long: -9.422283333333333,
      spotName: "Sao Lourenco",
    },
  },
  2019: {
    spot: {
      Lat: 38.97865,
      Long: -9.423216666666667,
      spotName: "Sanguessuga",
    },
  },
  2020: {
    spot: { Lat: 38.69753333333333, Long: -9.2771, spotName: "Caxias" },
  },
  2021: {
    spot: {
      Lat: 38.81483333333333,
      Long: -9.478533333333333,
      spotName: "Praia Grande",
    },
  },
  2022: {
    spot: {
      Lat: 38.69068333333333,
      Long: -9.297133333333333,
      spotName: "Paço D´arcos",
    },
  },
  2023: {
    spot: {
      Lat: 38.490183333333334,
      Long: -9.18595,
      spotName: "Praia do meco",
    },
  },
  2024: {
    spot: {
      Lat: 39.32358333333333,
      Long: -9.361333333333333,
      spotName: "Consolaçao",
    },
  },
  2025: {
    spot: { Lat: 39.416516666666666, Long: -9.25265, spotName: "Belgas" },
  },
  2026: {
    spot: {
      Lat: 39.43268333333333,
      Long: -9.234016666666667,
      spotName: "Foz do Arelho",
    },
  },
  2027: {
    spot: {
      Lat: 39.924483333333335,
      Long: -8.952483333333333,
      spotName: "Pedrogão",
    },
  },
  2028: {
    spot: {
      Lat: 40.20645,
      Long: -8.900466666666667,
      spotName: "Murtinheira",
    },
  },
  2029: {
    spot: {
      Lat: 41.18918333333333,
      Long: -8.707616666666667,
      spotName: "Leça",
    },
  },
  2030: {
    spot: { Lat: 39.5998, Long: -9.0757, spotName: "Praia da Nazaré" },
  },
  2031: {
    spot: {
      Lat: 43.56008333333333,
      Long: -6.675866666666667,
      spotName: "Frejulfe",
    },
  },
  2032: {
    spot: { Lat: 40.9397, Long: -8.658166666666666, spotName: "Cortegaça" },
  },
  2033: {
    spot: {
      Lat: 41.209383333333335,
      Long: -8.715566666666666,
      spotName: "Praia do aterro",
    },
  },
  2034: {
    spot: {
      Lat: 37.52511666666667,
      Long: -8.7882,
      spotName: "Zambujeira do Mar",
    },
  },
  2035: {
    spot: {
      Lat: 43.55501666666667,
      Long: -6.116716666666667,
      spotName: "Aguilar",
    },
  },
  2036: {
    spot: { Lat: 38.7076, Long: -9.490383333333334, spotName: "Cabo Raso" },
  },
  2037: {
    spot: {
      Lat: 39.36966666666667,
      Long: -9.3398,
      spotName: "Cantinho da Baia",
    },
  },
  2038: {
    spot: {
      Lat: 41.84786666666667,
      Long: -8.86705,
      spotName: "Praia de Moledo",
    },
  },
  2039: {
    spot: {
      Lat: 37.89501666666666,
      Long: -8.797416666666667,
      spotName: "Praia da Vieirinha",
    },
  },
  2040: {
    spot: {
      Lat: 38.82516666666667,
      Long: -9.470383333333332,
      spotName: "Praia das Maçãs",
    },
  },
  2041: {
    spot: { Lat: 39.366483333333335, Long: -9.3558, spotName: "Baía" },
  },
  2042: { spot: { Lat: 39.10955, Long: -9.39555, spotName: "Praia Azul" } },
  2043: {
    spot: {
      Lat: 40.961533333333335,
      Long: -8.655066666666666,
      spotName: "Esmoriz",
    },
  },
  2044: {
    spot: {
      Lat: 41.66931666666667,
      Long: -8.824083333333334,
      spotName: "Amorosa",
    },
  },
  2045: { spot: { Lat: 37.89605, Long: -8.79915, spotName: "Burrinho" } },
  2046: {
    spot: {
      Lat: 37.109366666666666,
      Long: -8.519983333333334,
      spotName: "Molhe de Ferragudo",
    },
  },
  2047: {
    spot: { Lat: 38.12891666666667, Long: -8.79275, spotName: "Melides" },
  },
  2048: {
    spot: { Lat: 36.186083333333336, Long: -5.9468, spotName: "Barbate" },
  },
  2049: {
    spot: { Lat: 36.28455, Long: -6.104883333333333, spotName: "Conil" },
  },
  2050: {
    spot: { Lat: 36.23355, Long: -6.073683333333333, spotName: "El Palmar" },
  },
  2051: {
    spot: { Lat: 36.362966666666665, Long: -6.1817, spotName: "La Barrosa" },
  },
  2052: {
    spot: {
      Lat: 38.63778333333333,
      Long: -9.2356,
      spotName: "Costa da Caparica",
    },
  },
  2053: {
    spot: {
      Lat: 38.803266666666666,
      Long: -9.485316666666666,
      spotName: "Adraga",
    },
  },
  2054: { spot: { Lat: 38.9319, Long: -9.4199, spotName: "São Julião" } },
  2055: {
    spot: {
      Lat: 38.73011666666667,
      Long: -9.475366666666666,
      spotName: "Guincho",
    },
  },
  2056: {
    spot: {
      Lat: 40.12638333333334,
      Long: -8.865366666666667,
      spotName: "Cova Gala",
    },
  },
  2057: {
    spot: {
      Lat: 39.61058333333333,
      Long: -9.08595,
      spotName: "Praia do Norte",
    },
  },
  2058: {
    spot: {
      Lat: 39.70098333333333,
      Long: -9.048783333333333,
      spotName: "Praia Paredes",
    },
  },
  2059: {
    spot: { Lat: 38.38035, Long: -8.803483333333334, spotName: "Comporta" },
  },
  2060: {
    spot: {
      Lat: 37.09128333333334,
      Long: -8.182966666666667,
      spotName: "Barranco da Belharucas",
    },
  },
  2061: {
    spot: { Lat: 37.855, Long: -8.794383333333334, spotName: "Porto Covo" },
  },
  2062: {
    spot: {
      Lat: 37.72103333333333,
      Long: -8.79485,
      spotName: "Vila Nova de Milfontes",
    },
  },
  2063: {
    spot: {
      Lat: 39.367216666666664,
      Long: -9.342416666666667,
      spotName: "Baleal",
    },
  },
  2064: {
    spot: { Lat: 40.92078333333333, Long: -8.66265, spotName: "Maceda" },
  },
  2065: {
    spot: {
      Lat: 41.11686666666667,
      Long: -8.66615,
      spotName: "Praia da Sereia",
    },
  },
  2066: {
    spot: { Lat: 37.78795, Long: -8.803133333333333, spotName: "Malhão" },
  },
  2067: {
    spot: {
      Lat: 38.6163,
      Long: -9.218516666666666,
      spotName: "Praia da Rainha",
    },
  },
  2068: {
    spot: {
      Lat: 38.68145,
      Long: -9.313649999999999,
      spotName: "Santo Amaro",
    },
  },
  2069: {
    spot: {
      Lat: 40.55858333333333,
      Long: -8.771933333333333,
      spotName: "Praia da Vagueira",
    },
  },
  2070: {
    spot: { Lat: 40.0563, Long: -8.89245, spotName: "Praia da leirosa" },
  },
  2071: {
    spot: {
      Lat: 41.430366666666664,
      Long: -8.787683333333334,
      spotName: "Aguçadoura",
    },
  },
  2072: {
    spot: {
      Lat: 41.139433333333336,
      Long: -8.668333333333333,
      spotName: "Cabedelo do douro",
    },
  },
  2073: {
    spot: { Lat: 36.3096, Long: -6.153366666666667, spotName: "Roche" },
  },
  2074: {
    spot: {
      Lat: 38.701566666666665,
      Long: -9.394283333333334,
      spotName: "Bolina",
    },
  },
  2075: {
    spot: { Lat: 38.67868333333333, Long: -9.3352, spotName: "Carcavelos" },
  },
  2076: {
    spot: { Lat: 38.67888333333333, Long: -9.31595, spotName: "Inatel" },
  },
  2077: {
    spot: {
      Lat: 39.757016666666665,
      Long: -9.034533333333334,
      spotName: "Sao Pedro de Moel",
    },
  },
  2078: {
    spot: {
      Lat: 39.81923333333334,
      Long: -8.997966666666667,
      spotName: "Samouco",
    },
  },
  2079: {
    spot: {
      Lat: 39.8745,
      Long: -8.971916666666667,
      spotName: "Praia da Vieira",
    },
  },
  2080: {
    spot: { Lat: 41.33893333333333, Long: -8.7447, spotName: "Azurara" },
  },
  2081: {
    spot: {
      Lat: 36.1836,
      Long: -6.0277666666666665,
      spotName: "Caños de la Meca",
    },
  },
  2082: {
    spot: {
      Lat: 36.70376666666667,
      Long: -6.4304,
      spotName: "Las Tres Piedras",
    },
  },
  2083: { spot: { Lat: 43.44435, Long: -4.02375, spotName: "Los Caballos" } },
  2084: {
    spot: {
      Lat: 43.58238333333333,
      Long: -5.9492666666666665,
      spotName: "Salinas   San juan",
    },
  },
  2085: {
    spot: {
      Lat: 43.54351666666667,
      Long: -5.647133333333334,
      spotName: "La Roca",
    },
  },
  2086: {
    spot: { Lat: 43.38995, Long: -4.288316666666667, spotName: "Comillas" },
  },
  2087: { spot: { Lat: 43.4387, Long: -4.04775, spotName: "Los Locos" } },
  2088: {
    spot: { Lat: 43.32346666666667, Long: -8.81425, spotName: "Malpica" },
  },
  2089: {
    spot: {
      Lat: 43.32888333333333,
      Long: -8.508766666666666,
      spotName: "Sabon",
    },
  },
  2090: {
    spot: {
      Lat: 36.48351666666667,
      Long: -4.741883333333333,
      spotName: "Cabopino",
    },
  },
  2091: { spot: { Lat: 39.5347, Long: 2.45615, spotName: "Paguera -Tora-" } },
  2092: {
    spot: {
      Lat: 43.544916666666666,
      Long: -5.660083333333334,
      spotName: "San lorenzo - san pedro",
    },
  },
  2093: {
    spot: {
      Lat: 43.464483333333334,
      Long: -3.4639166666666665,
      spotName: "Berria",
    },
  },
  2094: {
    spot: {
      Lat: 43.47015,
      Long: -3.7312166666666666,
      spotName: "Isla Santa Marina",
    },
  },
  2095: {
    spot: { Lat: 43.39095, Long: -4.380966666666667, spotName: "Meron" },
  },
  2096: {
    spot: {
      Lat: 41.13746666666667,
      Long: 1.4054833333333334,
      spotName: "Torre Bank",
    },
  },
  2097: {
    spot: {
      Lat: 43.38196666666666,
      Long: -3.016783333333333,
      spotName: "Aizkorri",
    },
  },
  2098: {
    spot: { Lat: 43.43225, Long: -2.805016666666667, spotName: "Bakio" },
  },
  2099: { spot: { Lat: 43.3714, Long: -3.0383, spotName: "La Galea" } },
  2100: {
    spot: { Lat: 43.41126666666667, Long: -2.9468, spotName: "Plentzia" },
  },
  2101: { spot: { Lat: 43.5796, Long: -6.0124, spotName: "Munielles" } },
  2102: {
    spot: {
      Lat: 43.438266666666664,
      Long: -3.4369833333333335,
      spotName: "La Fortaleza",
    },
  },
  2103: { spot: { Lat: 43.4757, Long: -3.68945, spotName: "De langre" } },
  2104: {
    spot: { Lat: 43.311883333333334, Long: -8.54865, spotName: "Barrañán" },
  },
  2105: {
    spot: {
      Lat: 39.34105,
      Long: 2.9889666666666668,
      spotName: "Mallorca - Es Trenc",
    },
  },
  2106: {
    spot: { Lat: 39.86555, Long: 3.1352166666666665, spotName: "Malpas" },
  },
  2107: {
    spot: {
      Lat: 41.2592,
      Long: 1.9304833333333333,
      spotName: "Port Ginesta",
    },
  },
  2108: {
    spot: {
      Lat: 36.06666666666667,
      Long: -5.69555,
      spotName: "Punta Paloma",
    },
  },
  2109: {
    spot: {
      Lat: 38.354366666666664,
      Long: -0.42739999999999995,
      spotName: "Calita",
    },
  },
  2110: { spot: { Lat: 36.71585, Long: -4.35015, spotName: "El chanquete" } },
  2111: {
    spot: {
      Lat: 36.532466666666664,
      Long: -4.622883333333333,
      spotName: "Fuengirola",
    },
  },
  2112: { spot: { Lat: 43.2951, Long: -2.1911, spotName: "Karramarro" } },
  2113: {
    spot: {
      Lat: 43.32683333333333,
      Long: -1.9758833333333334,
      spotName: "Playa de Gros",
    },
  },
  2114: {
    spot: { Lat: 43.3728, Long: -2.5456166666666666, spotName: "Ogella" },
  },
  2115: {
    spot: {
      Lat: 43.41076666666667,
      Long: -4.708583333333333,
      spotName: "Playa de la Andrin",
    },
  },
  2116: {
    spot: {
      Lat: 43.541333333333334,
      Long: -5.65435,
      spotName: "Playa San Lorenzo",
    },
  },
  2117: {
    spot: { Lat: 43.5645, Long: -6.9564, spotName: "Tapia de Casariego" },
  },
  2118: {
    spot: {
      Lat: 43.47946666666667,
      Long: -3.7882166666666666,
      spotName: "El Muro",
    },
  },
  2119: {
    spot: { Lat: 43.48585, Long: -3.788133333333333, spotName: "Matalenas" },
  },
  2120: {
    spot: {
      Lat: 43.58273333333333,
      Long: -8.216083333333334,
      spotName: "Campelo",
    },
  },
  2121: {
    spot: { Lat: 42.7726, Long: -9.12365, spotName: "Larino -El faro" },
  },
  2122: {
    spot: {
      Lat: 43.612716666666664,
      Long: -8.164216666666666,
      spotName: "Valdovino",
    },
  },
  2123: {
    spot: {
      Lat: 43.39573333333333,
      Long: -2.9865666666666666,
      spotName: "El Sitio",
    },
  },
  2124: {
    spot: {
      Lat: 43.409016666666666,
      Long: -2.6564833333333335,
      spotName: "Laga",
    },
  },
  2125: {
    spot: {
      Lat: 43.473733333333335,
      Long: -3.9093166666666668,
      spotName: "Covachos",
    },
  },
  2126: {
    spot: {
      Lat: 43.48035,
      Long: -3.6798333333333333,
      spotName: "Galizano Point",
    },
  },
  2127: {
    spot: { Lat: 43.43485, Long: -4.0347, spotName: "Ria de Suances" },
  },
  2128: {
    spot: {
      Lat: 43.39463333333333,
      Long: -4.336083333333334,
      spotName: "Oyambre",
    },
  },
  2129: {
    spot: { Lat: 43.32265, Long: -8.520916666666666, spotName: "La Cueva" },
  },
  2130: {
    spot: { Lat: 38.6409, Long: 0.04738333333333333, spotName: "Calpe Rock" },
  },
  2131: {
    spot: { Lat: 36.6963, Long: -3.4604833333333334, spotName: "The chucha" },
  },
  2132: {
    spot: { Lat: 43.434266666666666, Long: -2.86755, spotName: "La central" },
  },
  2133: {
    spot: { Lat: 43.28913333333333, Long: -2.16955, spotName: "Zarautz" },
  },
  2134: {
    spot: { Lat: 43.457033333333335, Long: -3.7444, spotName: "Somo" },
  },
  2135: {
    spot: {
      Lat: 43.34331666666667,
      Long: -8.36355,
      spotName: "Bastiagueiro",
    },
  },
  2136: {
    spot: { Lat: 42.2532, Long: -8.871983333333333, spotName: "Cabo Home" },
  },
  2137: {
    spot: {
      Lat: 43.37173333333333,
      Long: -8.456733333333334,
      spotName: "Coprino's left",
    },
  },
  2138: {
    spot: {
      Lat: 42.75055,
      Long: -9.094783333333334,
      spotName: "Louro (Ancoradoiro)",
    },
  },
  2139: {
    spot: {
      Lat: 42.211666666666666,
      Long: -8.775766666666666,
      spotName: "Samil",
    },
  },
  2140: {
    spot: {
      Lat: 43.01193333333333,
      Long: -9.266666666666667,
      spotName: "Nemiña",
    },
  },
  2141: {
    spot: { Lat: 39.51, Long: -0.3192833333333333, spotName: "Port saplaya" },
  },
  2142: {
    spot: { Lat: 43.40745, Long: -2.6941333333333333, spotName: "Mundaka" },
  },
  2143: {
    spot: { Lat: 43.2915, Long: -2.1300333333333334, spotName: "Orio" },
  },
  2144: {
    spot: {
      Lat: 43.38921666666667,
      Long: -2.9947833333333334,
      spotName: "Sopelana",
    },
  },
  2145: {
    spot: {
      Lat: 43.475566666666666,
      Long: -3.7838833333333333,
      spotName: "El sardinero",
    },
  },
  2146: { spot: { Lat: 43.5519, Long: -5.6238, spotName: "Peñarrubia" } },
  2147: { spot: { Lat: 43.3085, Long: -8.64285, spotName: "Leira" } },
  2148: {
    spot: {
      Lat: 43.56143333333333,
      Long: -7.113183333333334,
      spotName: "Rinlo",
    },
  },
  2149: {
    spot: {
      Lat: 39.74613333333333,
      Long: 3.4322,
      spotName: "Cala Mesquida ( Palma)",
    },
  },
  2150: {
    spot: {
      Lat: 39.55178333333333,
      Long: 2.60655,
      spotName: "Mallorca - Cala Major",
    },
  },
  2151: { spot: { Lat: 43.3421, Long: -3.01485, spotName: "Ereaga" } },
  2152: {
    spot: {
      Lat: 43.397016666666666,
      Long: -2.986866666666667,
      spotName: "Meniakos",
    },
  },
  2153: {
    spot: {
      Lat: 43.49166666666667,
      Long: -3.5282833333333334,
      spotName: "Playa de Noja",
    },
  },
  2154: {
    spot: {
      Lat: 43.49418333333333,
      Long: -3.5372166666666667,
      spotName: "Ris",
    },
  },
  2155: {
    spot: {
      Lat: 43.481766666666665,
      Long: -5.142283333333333,
      spotName: "Playa de Vega",
    },
  },
  2156: { spot: { Lat: 43.54535, Long: -5.529, spotName: "Playa Espana" } },
  2157: {
    spot: { Lat: 43.480216666666664, Long: -3.67565, spotName: "Galizano" },
  },
  2158: {
    spot: { Lat: 43.42263333333333, Long: -3.44335, spotName: "Laredo" },
  },
  2159: {
    spot: {
      Lat: 42.156333333333336,
      Long: -8.826766666666666,
      spotName: "Patos",
    },
  },
  2160: {
    spot: {
      Lat: 43.565216666666664,
      Long: -7.226133333333333,
      spotName: "Peizas",
    },
  },
  2161: {
    spot: { Lat: 38.009, Long: -0.6512666666666667, spotName: "La Mata" },
  },
  2162: {
    spot: {
      Lat: 37.707116666666664,
      Long: -0.7384000000000001,
      spotName: "La Manga",
    },
  },
  2163: {
    spot: {
      Lat: 41.537366666666664,
      Long: 2.455,
      spotName: "Port de mataró",
    },
  },
  2164: {
    spot: { Lat: 43.3037, Long: -2.353133333333333, spotName: "Deba" },
  },
  2165: {
    spot: {
      Lat: 43.401183333333336,
      Long: -2.6872333333333334,
      spotName: "Playa Laida",
    },
  },
  2166: {
    spot: { Lat: 43.61865, Long: -5.7877833333333335, spotName: "Luanco" },
  },
  2167: {
    spot: { Lat: 43.4536, Long: -3.9621166666666667, spotName: "Liencres" },
  },
  2168: {
    spot: {
      Lat: 43.49153333333334,
      Long: -8.321633333333333,
      spotName: "Doninos",
    },
  },
  2169: {
    spot: { Lat: 43.414116666666665, Long: -3.3371, spotName: "Sonabia" },
  },
  2170: {
    spot: { Lat: 43.7132, Long: -7.853183333333334, spotName: "Fornos" },
  },
  2171: {
    spot: {
      Lat: 41.37885,
      Long: 2.1926666666666668,
      spotName: "Barceloneta",
    },
  },
  2172: {
    spot: {
      Lat: 41.11118333333334,
      Long: 1.2571333333333334,
      spotName: "Comandancia",
    },
  },
  2173: {
    spot: {
      Lat: 38.6634,
      Long: 1.5124833333333334,
      spotName: "Platja de Migjorn",
    },
  },
  2174: { spot: { Lat: -0, Long: -0, spotName: "Mojacar" } },
  2175: {
    spot: { Lat: 43.602516666666666, Long: -5.9206, spotName: "Xagó" },
  },
  2176: {
    spot: {
      Lat: 43.465516666666666,
      Long: -5.071083333333333,
      spotName: "Ribadesella",
    },
  },
  2177: {
    spot: {
      Lat: 43.56956666666667,
      Long: -5.716316666666667,
      spotName: "Xivares",
    },
  },
  2178: {
    spot: {
      Lat: 43.498916666666666,
      Long: -3.6132333333333335,
      spotName: "Ajo",
    },
  },
  2179: {
    spot: {
      Lat: 42.454616666666666,
      Long: -8.881416666666667,
      spotName: "A Lanzada",
    },
  },
  2180: {
    spot: { Lat: 43.64576666666667, Long: -8.10255, spotName: "El Baleo" },
  },
  2181: {
    spot: {
      Lat: 43.56248333333333,
      Long: -7.203166666666666,
      spotName: "Foz Area",
    },
  },
  2182: {
    spot: {
      Lat: 42.42678333333333,
      Long: -8.874766666666666,
      spotName: "Foxos",
    },
  },
  2183: {
    spot: {
      Lat: 43.37381666666667,
      Long: -8.405466666666667,
      spotName: "Playa del Orzan",
    },
  },
  2184: {
    spot: { Lat: 42.647283333333334, Long: -9.0338, spotName: "Río Sieira" },
  },
  2185: {
    spot: { Lat: 43.645583333333335, Long: -8.0765, spotName: "Villarrube" },
  },
  2186: {
    spot: { Lat: 41.3928, Long: 2.2073666666666667, spotName: "BOGATELL" },
  },
  2187: {
    spot: {
      Lat: 39.001783333333336,
      Long: 1.5787499999999999,
      spotName: "Ibiza - Cala Nova",
    },
  },
  2188: {
    spot: { Lat: 57.33625, Long: 12.093883333333334, spotName: "Åsa (Aasa)" },
  },
  2189: {
    spot: {
      Lat: 43.29123333333333,
      Long: -8.702633333333333,
      spotName: "Razo",
    },
  },
  2190: {
    spot: {
      Lat: 43.55571666666667,
      Long: -8.269166666666667,
      spotName: "Ponzos",
    },
  },
  2191: { spot: { Lat: 39.4656, Long: -0.3219, spotName: "Malva-rosa" } },
  2192: {
    spot: {
      Lat: 36.7507,
      Long: -3.8151833333333336,
      spotName: "Molino de papel",
    },
  },
  2193: {
    spot: {
      Lat: 41.18833333333333,
      Long: 1.6099333333333332,
      spotName: "Segur de Calafell",
    },
  },
  2194: { spot: { Lat: 43.42515, Long: -2.68595, spotName: "Izaro" } },
  2195: {
    spot: { Lat: 43.55355, Long: -6.597416666666667, spotName: "Otur" },
  },
  2196: {
    spot: {
      Lat: 42.391133333333336,
      Long: -8.777566666666667,
      spotName: "Playa Areas - Los Muertos",
    },
  },
  2197: {
    spot: {
      Lat: 42.39788333333333,
      Long: -8.8485,
      spotName: "Montalvo Beach",
    },
  },
  2198: {
    spot: {
      Lat: 43.55623333333333,
      Long: -8.290816666666666,
      spotName: "Santa Comba",
    },
  },
  2199: {
    spot: {
      Lat: 38.52755,
      Long: -0.16088333333333335,
      spotName: "Derecha de la cala",
    },
  },
  2200: {
    spot: { Lat: 39.27936666666667, Long: -0.2744, spotName: "El Perelló" },
  },
  2201: {
    spot: {
      Lat: 38.79261666666667,
      Long: 0.18288333333333334,
      spotName: "La Siesta",
    },
  },
  2202: {
    spot: {
      Lat: 38.787733333333335,
      Long: 0.18286666666666665,
      spotName: "Montgo di Bongo",
    },
  },
  2203: {
    spot: { Lat: 43.34871666666667, Long: -3.11685, spotName: "La arena" },
  },
  2204: {
    spot: { Lat: 43.5339, Long: -5.383766666666666, spotName: "Rodiles" },
  },
  2205: {
    spot: {
      Lat: 43.401383333333335,
      Long: -4.652166666666667,
      spotName: "Playa de Vidiago",
    },
  },
  2206: {
    spot: {
      Lat: 43.44351666666667,
      Long: -4.868483333333334,
      spotName: "San Antolin",
    },
  },
  2207: {
    spot: { Lat: 43.4703, Long: -3.4825833333333334, spotName: "El Brusco" },
  },
  2208: {
    spot: { Lat: 43.4362, Long: -4.04145, spotName: "Playa de La Concha" },
  },
  2209: { spot: { Lat: 43.53848333333333, Long: -8.298, spotName: "Cobas" } },
  2210: {
    spot: {
      Lat: 43.31536666666667,
      Long: -8.610066666666667,
      spotName: "Cayon",
    },
  },
  2211: {
    spot: { Lat: 43.293683333333334, Long: -8.74025, spotName: "Aviño" },
  },
  2212: {
    spot: {
      Lat: 43.536033333333336,
      Long: -8.295533333333333,
      spotName: "San Xurxo (San Jorge)",
    },
  },
  2213: {
    spot: { Lat: 39.15293333333333, Long: -0.2384, spotName: "Jucar" },
  },
  2214: {
    spot: {
      Lat: 36.59981666666667,
      Long: -4.50885,
      spotName: "Puerto marina",
    },
  },
  2215: {
    spot: {
      Lat: 43.553133333333335,
      Long: -6.995316666666667,
      spotName: "Peñarronda",
    },
  },
  2216: {
    spot: {
      Lat: 43.637933333333336,
      Long: -7.333466666666666,
      spotName: "La machacona",
    },
  },
  2217: {
    spot: { Lat: 43.63965, Long: -8.113533333333333, spotName: "Pantin" },
  },
  2218: {
    spot: {
      Lat: 41.9985,
      Long: -8.884533333333334,
      spotName: "Santa María de Oya",
    },
  },
  2219: {
    spot: {
      Lat: 43.31603333333333,
      Long: -8.533816666666667,
      spotName: "Valcobo",
    },
  },
  2220: {
    spot: {
      Lat: 42.197433333333336,
      Long: -8.808666666666667,
      spotName: "Toraya",
    },
  },
  2221: {
    spot: { Lat: 41.473733333333335, Long: 2.29855, spotName: "Masnou" },
  },
  2222: {
    spot: {
      Lat: 38.37383333333333,
      Long: -0.4098,
      spotName: "Playa San Juan",
    },
  },
  2223: {
    spot: {
      Lat: 43.384366666666665,
      Long: -3.0067,
      spotName: "Playa Salvaje",
    },
  },
  2224: {
    spot: {
      Lat: 49.169333333333334,
      Long: -2.084966666666667,
      spotName: "Jersey - La mare",
    },
  },
  2225: {
    spot: {
      Lat: 49.46085,
      Long: -2.6555666666666666,
      spotName: "Guernsey - Suckers",
    },
  },
  2226: {
    spot: { Lat: 50.52603333333333, Long: -5.02315, spotName: "Treyarnon" },
  },
  2227: {
    spot: { Lat: 50.54355, Long: -4.979216666666667, spotName: "Trevone" },
  },
  2228: {
    spot: { Lat: 50.44518333333333, Long: -5.04315, spotName: "Watergate" },
  },
  2229: {
    spot: {
      Lat: 50.645783333333334,
      Long: -4.764683333333333,
      spotName: "Trebarwith Strand",
    },
  },
  2230: {
    spot: { Lat: 50.26125, Long: -5.289233333333334, spotName: "Portreath" },
  },
  2231: {
    spot: { Lat: 63.4581, Long: 19.268466666666665, spotName: "Salusand" },
  },
  2232: {
    spot: { Lat: 50.53875, Long: -4.997583333333333, spotName: "Harlyn" },
  },
  2233: {
    spot: { Lat: 50.082, Long: -5.321233333333334, spotName: "Porthleven" },
  },
  2234: {
    spot: { Lat: 50.408516666666664, Long: -5.12495, spotName: "Crantock" },
  },
  2235: {
    spot: { Lat: 50.21586666666666, Long: -5.4827, spotName: "Porthmeor" },
  },
  2236: {
    spot: {
      Lat: 50.35028333333333,
      Long: -5.15735,
      spotName: "Droskyn, Perranporth",
    },
  },
  2237: {
    spot: { Lat: 50.23446666666667, Long: -5.3984, spotName: "Gwithian" },
  },
  2238: {
    spot: {
      Lat: 58.79898333333333,
      Long: 17.809516666666667,
      spotName: "Torö Stenstrand",
    },
  },
  2239: {
    spot: {
      Lat: 47.355866666666664,
      Long: 8.340533333333333,
      spotName: "River reuss",
    },
  },
  2240: {
    spot: {
      Lat: 55.89255,
      Long: -2.1304833333333333,
      spotName: "Coldingham Bay",
    },
  },
  2241: {
    spot: {
      Lat: 55.02595,
      Long: -1.4258166666666667,
      spotName: "Tynemouth (Longsands)",
    },
  },
  2242: { spot: { Lat: 50.2156, Long: -5.47545, spotName: "Breakwater" } },
  2243: {
    spot: {
      Lat: 50.41738333333333,
      Long: -5.101983333333333,
      spotName: "Fistral",
    },
  },
  2244: {
    spot: {
      Lat: 55.39431666666667,
      Long: 14.058383333333333,
      spotName: "Kåseberga",
    },
  },
  2245: {
    spot: { Lat: 57.09225, Long: 12.222633333333333, spotName: "Kåsa" },
  },
  2246: {
    spot: {
      Lat: 55.612049999999996,
      Long: -1.7166166666666667,
      spotName: "Bamburgh",
    },
  },
  2247: {
    spot: {
      Lat: 55.93246666666667,
      Long: -2.3332166666666665,
      spotName: "Pease Bay",
    },
  },
  2248: {
    spot: {
      Lat: 50.790933333333335,
      Long: -4.560016666666667,
      spotName: "Widemouth Bay",
    },
  },
  2249: {
    spot: { Lat: 50.1018, Long: -5.388233333333333, spotName: "Praa sands" },
  },
  2250: {
    spot: { Lat: 50.55993333333333, Long: -4.926, spotName: "Daymer Point" },
  },
  2251: {
    spot: {
      Lat: 50.741616666666665,
      Long: -4.633916666666667,
      spotName: "Crackington Haven",
    },
  },
  2252: {
    spot: { Lat: 50.465583333333335, Long: -5.032, spotName: "Mawgan Porth" },
  },
  2253: {
    spot: {
      Lat: 50.54545,
      Long: -5.018183333333333,
      spotName: "Mother Ivey's (spot M)",
    },
  },
  2254: {
    spot: { Lat: 50.28496666666667, Long: -5.2469, spotName: "Porthtowan" },
  },
  2255: {
    spot: {
      Lat: 55.1103,
      Long: -1.4973166666666666,
      spotName: "Blyth Beach",
    },
  },
  2256: {
    spot: {
      Lat: 50.53613333333333,
      Long: -5.024183333333333,
      spotName: "Boobies",
    },
  },
  2257: {
    spot: {
      Lat: 50.08121666666667,
      Long: -5.537883333333333,
      spotName: "Mousehole Reef",
    },
  },
  2258: {
    spot: {
      Lat: 50.08266666666667,
      Long: -5.6985166666666665,
      spotName: "Sennen",
    },
  },
  2259: { spot: { Lat: 62.5992, Long: 18.03215, spotName: "Smitingen" } },
  2260: {
    spot: {
      Lat: 50.57508333333333,
      Long: -4.916766666666667,
      spotName: "Polzeath",
    },
  },
  2261: {
    spot: {
      Lat: 50.422016666666664,
      Long: -5.063983333333334,
      spotName: "Lusty Glaze",
    },
  },
  2262: {
    spot: {
      Lat: 46.994933333333336,
      Long: 8.598783333333333,
      spotName: "AlterSteinbeisser",
    },
  },
  2263: {
    spot: { Lat: 50.77151666666666, Long: -4.58265, spotName: "Milbrook" },
  },
  2264: {
    spot: { Lat: 50.198766666666664, Long: -5.4612, spotName: "Carbis Bay" },
  },
  2265: { spot: { Lat: 55.63923333333334, Long: 14.28635, spotName: "Vik" } },
  2266: {
    spot: {
      Lat: 54.667183333333334,
      Long: -1.1879,
      spotName: "Seaton Carew",
    },
  },
  2267: {
    spot: { Lat: 50.58305, Long: -4.884916666666666, spotName: "Lundy Bay" },
  },
  2268: {
    spot: {
      Lat: 50.04281666666667,
      Long: -5.650066666666667,
      spotName: "Porthcurno and Logan Rock",
    },
  },
  2269: {
    spot: {
      Lat: 50.39391666666667,
      Long: -5.143133333333333,
      spotName: "Penhale",
    },
  },
  2270: {
    spot: { Lat: 54.93765, Long: -1.3664166666666666, spotName: "Seaburn" },
  },
  2271: {
    spot: {
      Lat: 49.467616666666665,
      Long: -2.61625,
      spotName: "Guernsey - Centres",
    },
  },
  2272: {
    spot: {
      Lat: 54.99543333333333,
      Long: -1.4035,
      spotName: "South Shields",
    },
  },
  2273: {
    spot: {
      Lat: 50.57228333333333,
      Long: -4.9243500000000004,
      spotName: "Death Bay",
    },
  },
  2274: {
    spot: {
      Lat: 51.23178333333333,
      Long: -3.8310333333333335,
      spotName: "Lynmouth",
    },
  },
  2275: {
    spot: { Lat: 50.32125, Long: -5.201083333333333, spotName: "St Agnes" },
  },
  2276: {
    spot: { Lat: 54.491083333333336, Long: -0.616, spotName: "Whitby Beach" },
  },
  2277: { spot: { Lat: 58.59935, Long: -3.51545, spotName: "Thurso beach" } },
  2278: {
    spot: {
      Lat: 50.76025,
      Long: -0.8606833333333334,
      spotName: "Bracklesham Bay",
    },
  },
  2279: { spot: { Lat: 51.35735, Long: 1.4429, spotName: "Broadstairs" } },
  2280: {
    spot: { Lat: 50.8279, Long: -0.22843333333333332, spotName: "Hot pipe" },
  },
  2281: {
    spot: {
      Lat: 51.379416666666664,
      Long: 1.4465333333333334,
      spotName: "Joss Bay",
    },
  },
  2282: {
    spot: {
      Lat: 51.177616666666665,
      Long: -4.216866666666666,
      spotName: "Coombesgate Beach",
    },
  },
  2283: {
    spot: { Lat: 57.13323333333334, Long: -2.05865, spotName: "Nigg Bay" },
  },
  2284: {
    spot: {
      Lat: 51.33166666666666,
      Long: 1.4229666666666667,
      spotName: "The Wall",
    },
  },
  2285: {
    spot: { Lat: 50.82095, Long: -0.1532, spotName: "Brighton (West Pier)" },
  },
  2286: {
    spot: {
      Lat: 51.566766666666666,
      Long: -4.032333333333334,
      spotName: "Caswell Bay",
    },
  },
  2287: {
    spot: { Lat: 50.278283333333334, Long: -3.88515, spotName: "Bantham" },
  },
  2288: {
    spot: { Lat: 50.41595, Long: -5.084733333333333, spotName: "Towan" },
  },
  2289: {
    spot: {
      Lat: 50.309266666666666,
      Long: -3.9527666666666668,
      spotName: "Mothecombe",
    },
  },
  2290: {
    spot: {
      Lat: 53.31333333333333,
      Long: 0.28375,
      spotName: "Sutton on sea",
    },
  },
  2291: {
    spot: {
      Lat: 50.66426666666667,
      Long: -1.4824666666666666,
      spotName: "Compton",
    },
  },
  2292: {
    spot: {
      Lat: 50.288466666666665,
      Long: -3.898766666666667,
      spotName: "Challabrough",
    },
  },
  2293: { spot: { Lat: 54.58595, Long: -0.9695, spotName: "Saltburn" } },
  2294: {
    spot: {
      Lat: 50.828066666666665,
      Long: -0.22821666666666665,
      spotName: "Shoreham",
    },
  },
  2295: {
    spot: {
      Lat: 57.68258333333333,
      Long: -2.7439999999999998,
      spotName: "Sandend",
    },
  },
  2296: {
    spot: {
      Lat: 51.50963333333333,
      Long: -3.7474833333333333,
      spotName: "Sker",
    },
  },
  2297: {
    spot: {
      Lat: 51.090266666666665,
      Long: 1.2049833333333333,
      spotName: "Folkestone East Cliff Sands",
    },
  },
  2298: {
    spot: {
      Lat: 51.21981666666667,
      Long: -3.626316666666667,
      spotName: "Porlock Weir Somerset",
    },
  },
  2299: {
    spot: {
      Lat: 58.542633333333335,
      Long: -5.0574,
      spotName: "Sandwood Bay",
    },
  },
  2300: {
    spot: {
      Lat: 52.812416666666664,
      Long: -4.578216666666666,
      spotName: "Hells Mouth",
    },
  },
  2301: {
    spot: {
      Lat: 50.61015,
      Long: -2.1339166666666665,
      spotName: "Kimmeridge Bay (Bench)",
    },
  },
  2302: {
    spot: {
      Lat: 50.933083333333336,
      Long: 0.7848333333333334,
      spotName: "Camber sands",
    },
  },
  2303: {
    spot: {
      Lat: 50.77755,
      Long: -0.9112833333333333,
      spotName: "West Wittering",
    },
  },
  2304: {
    spot: {
      Lat: 50.42575,
      Long: -5.103583333333333,
      spotName: "The Cribber",
    },
  },
  2305: {
    spot: {
      Lat: 50.431383333333336,
      Long: -5.05345,
      spotName: "Whipsiderry",
    },
  },
  2306: {
    spot: {
      Lat: 56.29773333333333,
      Long: -2.635283333333333,
      spotName: "Kingsbarns",
    },
  },
  2307: {
    spot: {
      Lat: 50.717933333333335,
      Long: -1.7876333333333334,
      spotName: "Southbourne",
    },
  },
  2308: {
    spot: { Lat: 54.2793, Long: -0.39768333333333333, spotName: "South Bay" },
  },
  2309: {
    spot: {
      Lat: 51.537616666666665,
      Long: -4.2118166666666665,
      spotName: "Boiler Reef",
    },
  },
  2310: {
    spot: {
      Lat: 51.46738333333333,
      Long: -3.6417333333333333,
      spotName: "Ogmore",
    },
  },
  2311: {
    spot: {
      Lat: 51.169466666666665,
      Long: -4.216083333333334,
      spotName: "Woolacombe bay",
    },
  },
  2312: {
    spot: { Lat: 54.56101666666667, Long: -0.78535, spotName: "Staithes" },
  },
  2313: {
    spot: {
      Lat: 50.715066666666665,
      Long: -1.87565,
      spotName: "Bournemouth Pier",
    },
  },
  2314: {
    spot: { Lat: 51.4885, Long: -3.7249333333333334, spotName: "Rest Bay" },
  },
  2315: { spot: { Lat: 50.42535, Long: -5.06255, spotName: "Porth Beach" } },
  2316: {
    spot: {
      Lat: 50.2114,
      Long: -5.4759166666666665,
      spotName: "St. Ives harbour wall.",
    },
  },
  2317: {
    spot: {
      Lat: 50.41408333333333,
      Long: -5.118833333333333,
      spotName: "Zorbas Reef",
    },
  },
  2318: {
    spot: { Lat: 51.1286, Long: -4.244116666666667, spotName: "Croyde" },
  },
  2319: {
    spot: {
      Lat: 50.98965,
      Long: -4.346383333333334,
      spotName: "Buck's Mill",
    },
  },
  2320: {
    spot: {
      Lat: 50.60645,
      Long: -2.13075,
      spotName: "Kimmeridge (The Ledges)",
    },
  },
  2321: {
    spot: {
      Lat: 50.849466666666665,
      Long: 0.5344833333333334,
      spotName: "Stamco",
    },
  },
  2322: {
    spot: {
      Lat: 51.56791666666667,
      Long: -4.0117666666666665,
      spotName: "Langland bay",
    },
  },
  2323: {
    spot: {
      Lat: 50.41815,
      Long: -5.073816666666667,
      spotName: "Tolcarne, The Wedge",
    },
  },
  2324: {
    spot: {
      Lat: 51.109766666666665,
      Long: -4.226983333333333,
      spotName: "Saunton Sands",
    },
  },
  2325: {
    spot: { Lat: 51.04581666666667, Long: -4.2318, spotName: "Westward Ho!" },
  },
  2326: {
    spot: {
      Lat: 54.24443333333333,
      Long: -0.3558833333333334,
      spotName: "Cayton Bay",
    },
  },
  2327: {
    spot: {
      Lat: 57.68185,
      Long: -1.9969333333333332,
      spotName: "Fraserburgh",
    },
  },
  2328: { spot: { Lat: 52.5853, Long: -4.0925, spotName: "Tywyn" } },
  2329: { spot: { Lat: 50.7188, Long: -1.8436, spotName: "Boscombe Pier" } },
  2330: {
    spot: {
      Lat: 50.736783333333335,
      Long: -1.6966999999999999,
      spotName: "Highcliffe",
    },
  },
  2331: {
    spot: {
      Lat: 50.852066666666666,
      Long: 0.5743166666666667,
      spotName: "Hastings pier",
    },
  },
  2332: {
    spot: {
      Lat: 56.336483333333334,
      Long: -2.7812166666666664,
      spotName: "St Andrews East Sands",
    },
  },
  2333: {
    spot: {
      Lat: 58.60243333333333,
      Long: -3.5080666666666667,
      spotName: "Thurso East",
    },
  },
  2334: {
    spot: { Lat: 50.762, Long: 0.28678333333333333, spotName: "Eastbourne" },
  },
  2335: {
    spot: {
      Lat: 51.14398333333333,
      Long: -4.220983333333334,
      spotName: "Putsborough Beach",
    },
  },
  2336: {
    spot: {
      Lat: 54.29038333333333,
      Long: -0.40116666666666667,
      spotName: "North bay",
    },
  },
  2337: {
    spot: {
      Lat: 57.164633333333335,
      Long: -2.0793333333333335,
      spotName: "Aberdeen",
    },
  },
  2338: {
    spot: {
      Lat: 57.717816666666664,
      Long: -3.27745,
      spotName: "Lossie East Beach",
    },
  },
  2339: {
    spot: {
      Lat: 50.76533333333333,
      Long: -0.8775333333333334,
      spotName: "East Witterings",
    },
  },
  2340: {
    spot: {
      Lat: 51.58533333333333,
      Long: -3.810966666666667,
      spotName: "Aberavon",
    },
  },
  2341: {
    spot: {
      Lat: 54.489266666666666,
      Long: -0.5904333333333334,
      spotName: "Admirals",
    },
  },
  2342: {
    spot: {
      Lat: 58.56836666666667,
      Long: -4.000233333333333,
      spotName: "Strathy bay",
    },
  },
  2343: {
    spot: {
      Lat: 50.608666666666664,
      Long: -3.3699666666666666,
      spotName: "BoneYard Exmouth",
    },
  },
  2344: {
    spot: {
      Lat: 50.742533333333334,
      Long: 0.20033333333333334,
      spotName: "Birling gap",
    },
  },
  2345: {
    spot: {
      Lat: 51.44595,
      Long: -3.605766666666667,
      spotName: "Southerndown",
    },
  },
  2346: {
    spot: { Lat: 39.1724, Long: 9.571583333333333, spotName: "Cala Pira" },
  },
  2347: {
    spot: {
      Lat: 51.89576666666667,
      Long: -5.2998666666666665,
      spotName: "Whitesands",
    },
  },
  2348: {
    spot: {
      Lat: 38.87863333333333,
      Long: 8.854516666666667,
      spotName: "Cala Cipolla",
    },
  },
  2349: {
    spot: {
      Lat: 50.278016666666666,
      Long: -3.8869333333333334,
      spotName: "Bantham Rivermouth",
    },
  },
  2350: {
    spot: {
      Lat: 52.408566666666665,
      Long: -4.0906666666666665,
      spotName: "The Trap - Aberystwyth",
    },
  },
  2351: {
    spot: {
      Lat: 51.850566666666666,
      Long: -5.123483333333334,
      spotName: "Newgale",
    },
  },
  2352: {
    spot: {
      Lat: 38.881083333333336,
      Long: 8.8597,
      spotName: "Cipolla - Pipeline",
    },
  },
  2353: {
    spot: {
      Lat: 40.57236666666667,
      Long: 8.3,
      spotName: "Reef La Maddalenetta",
    },
  },
  2354: {
    spot: { Lat: 39.40463333333334, Long: 8.40025, spotName: "Porticciolo" },
  },
  2355: {
    spot: { Lat: 43.2372, Long: -77.5676, spotName: "Durand Eastman Beach" },
  },
  2356: {
    spot: {
      Lat: 51.56293333333333,
      Long: -8.993633333333333,
      spotName: "Ownahincha",
    },
  },
  2357: {
    spot: { Lat: 13.0979, Long: -59.45203333333333, spotName: "Foul bay" },
  },
  2358: {
    spot: {
      Lat: 18.398466666666668,
      Long: -64.6893,
      spotName: "Tortola - Apple Bay",
    },
  },
  2359: {
    spot: {
      Lat: 13.219116666666666,
      Long: -59.64248333333333,
      spotName: "Tropicana",
    },
  },
  2360: {
    spot: {
      Lat: 12.616266666666666,
      Long: -70.04448333333333,
      spotName: "Dooms",
    },
  },
  2361: {
    spot: {
      Lat: 18.454216666666667,
      Long: -64.5779,
      spotName: "Josiahs Bay",
    },
  },
  2362: {
    spot: { Lat: 18.450216666666666, Long: -64.60665, spotName: "Lava Flow" },
  },
  2363: { spot: { Lat: 23.9465, Long: -74.5204, spotName: "French Bay" } },
  2364: {
    spot: {
      Lat: 13.172583333333334,
      Long: -59.637766666666664,
      spotName: "Sandy Lane",
    },
  },
  2365: {
    spot: {
      Lat: 13.045116666666667,
      Long: -59.528866666666666,
      spotName: "South Point",
    },
  },
  2366: {
    spot: {
      Lat: 9.655583333333333,
      Long: -82.75606666666667,
      spotName: "Salsa Brava",
    },
  },
  2367: {
    spot: {
      Lat: 51.553383333333336,
      Long: -4.154516666666667,
      spotName: "Oxwich Bay",
    },
  },
  2368: {
    spot: {
      Lat: 12.620066666666666,
      Long: -70.05398333333333,
      spotName: "Arashi",
    },
  },
  2369: {
    spot: {
      Lat: 13.218816666666667,
      Long: -59.529333333333334,
      spotName: "Cattlewash",
    },
  },
  2370: {
    spot: { Lat: 51.54645, Long: -4.183983333333333, spotName: "Slade" },
  },
  2371: {
    spot: {
      Lat: 51.65881666666667,
      Long: -5.0624666666666664,
      spotName: "Fresh Water West",
    },
  },
  2372: {
    spot: { Lat: 38.88341666666667, Long: 8.86365, spotName: "L'isoletto" },
  },
  2373: {
    spot: {
      Lat: 39.20505,
      Long: 9.312516666666667,
      spotName: "Porto Armando",
    },
  },
  2374: { spot: { Lat: 52.12065, Long: -10.20585, spotName: "Inch Reef" } },
  2375: {
    spot: {
      Lat: 37.171366666666664,
      Long: -7.412716666666666,
      spotName: "Vila Real Santo Antonio",
    },
  },
  2376: {
    spot: { Lat: 13.0772, Long: -59.60836666666667, spotName: "Brandon" },
  },
  2377: {
    spot: {
      Lat: 19.951333333333334,
      Long: -155.86383333333333,
      spotName: "suicides",
    },
  },
  2378: {
    spot: { Lat: 23.795633333333335, Long: -106.882, spotName: "Milagro" },
  },
  2379: {
    spot: {
      Lat: 13.072666666666667,
      Long: -59.59003333333333,
      spotName: "Accra Beach - Rockley Beach",
    },
  },
  2380: {
    spot: {
      Lat: 41.68996666666666,
      Long: 9.393133333333333,
      spotName: "Punta di Testa",
    },
  },
  2381: {
    spot: { Lat: 51.55401666666667, Long: -8.959, spotName: "Longstrand" },
  },
  2382: {
    spot: {
      Lat: 35.19316666666667,
      Long: 139.60121666666666,
      spotName: "Nagai",
    },
  },
  2383: {
    spot: {
      Lat: 51.471383333333335,
      Long: -9.422233333333333,
      spotName: "Sherkin Island",
    },
  },
  2384: {
    spot: {
      Lat: 26.514383333333335,
      Long: -76.97073333333333,
      spotName: "Rights",
    },
  },
  2385: {
    spot: {
      Lat: 13.214366666666667,
      Long: -59.52258333333333,
      spotName: "Soup Bowl",
    },
  },
  2386: {
    spot: {
      Lat: 19.272366666666667,
      Long: -81.32343333333333,
      spotName: "Mariner's Cove",
    },
  },
  2387: {
    spot: {
      Lat: 50.140233333333335,
      Long: -5.0762,
      spotName: "Falmouth Beaches (Gylly,Swanpool,Maenporth)",
    },
  },
  2388: {
    spot: { Lat: 12.616733333333332, Long: -70.06025, spotName: "West punt" },
  },
  2389: {
    spot: {
      Lat: 13.282283333333334,
      Long: -59.649883333333335,
      spotName: "Maycocks",
    },
  },
  2390: {
    spot: { Lat: 9.67115, Long: -82.78748333333333, spotName: "Black Beach" },
  },
  2391: {
    spot: {
      Lat: 51.56746666666667,
      Long: -4.11485,
      spotName: "Three cliffs",
    },
  },
  2392: {
    spot: { Lat: 39.803266666666666, Long: 9.67235, spotName: "Foddini" },
  },
  2393: {
    spot: {
      Lat: 26.507466666666666,
      Long: -76.97308333333334,
      spotName: "Garbanzo",
    },
  },
  2394: {
    spot: {
      Lat: 13.09975,
      Long: -59.449933333333334,
      spotName: "Crane Beach",
    },
  },
  2395: {
    spot: {
      Lat: 9.651583333333333,
      Long: -82.73795,
      spotName: "Playa cocles",
    },
  },
  2396: {
    spot: {
      Lat: 51.781216666666666,
      Long: -5.105216666666666,
      spotName: "Broadhaven (North)",
    },
  },
  2397: {
    spot: {
      Lat: 53.73531666666667,
      Long: -9.893883333333333,
      spotName: "Carrowniskey",
    },
  },
  2398: {
    spot: {
      Lat: 51.644816666666664,
      Long: -4.860383333333333,
      spotName: "Freshwater East",
    },
  },
  2399: {
    spot: { Lat: 50.68546666666667, Long: -3.0954, spotName: "Beer Point" },
  },
  2400: {
    spot: { Lat: 13.315533333333333, Long: -59.64435, spotName: "Duppies" },
  },
  2401: {
    spot: {
      Lat: 52.758116666666666,
      Long: -9.497,
      spotName: "Doughmore Beach",
    },
  },
  2402: { spot: { Lat: 62.40655, Long: 5.852666666666667, spotName: "Flø" } },
  2403: {
    spot: { Lat: 13.05875, Long: -59.53808333333333, spotName: "Freights" },
  },
  2404: {
    spot: {
      Lat: 13.046383333333333,
      Long: -59.518633333333334,
      spotName: "Silver Sands",
    },
  },
  2405: {
    spot: { Lat: 38.31795, Long: 21.426083333333334, spotName: "alykes" },
  },
  2406: {
    spot: {
      Lat: 36.96326666666667,
      Long: 21.658766666666665,
      spotName: "Voidokoilia",
    },
  },
  2407: {
    spot: {
      Lat: 37.806266666666666,
      Long: -8.797383333333334,
      spotName: "Aivados",
    },
  },
  2408: {
    spot: { Lat: 26.515983333333335, Long: -76.96875, spotName: "Indicas" },
  },
  2409: { spot: { Lat: 13.13505, Long: -59.63635, spotName: "Batts Rock" } },
  2410: {
    spot: {
      Lat: 18.451483333333332,
      Long: -64.43865,
      spotName: "Spanish town",
    },
  },
  2411: {
    spot: { Lat: 9.6351, Long: -82.63778333333333, spotName: "Manzanillo" },
  },
  2412: {
    spot: {
      Lat: 13.19135,
      Long: -59.640483333333336,
      spotName: "Church Point",
    },
  },
  2413: {
    spot: {
      Lat: 13.285616666666666,
      Long: -59.64995,
      spotName: "Fryers Well",
    },
  },
  2414: {
    spot: { Lat: 18.179333333333332, Long: -63.1453, spotName: "Dolphins" },
  },
  2415: {
    spot: { Lat: 12.55955, Long: -69.98793333333333, spotName: "Wariruri" },
  },
  2416: {
    spot: {
      Lat: 12.41545,
      Long: -69.88961666666667,
      spotName: "Outside Rodger's Beach",
    },
  },
  2417: {
    spot: {
      Lat: 13.1656,
      Long: -59.43183333333333,
      spotName: "Ragged Point",
    },
  },
  2418: {
    spot: {
      Lat: 13.053316666666667,
      Long: -59.5041,
      spotName: "Surfer's Point",
    },
  },
  2419: {
    spot: {
      Lat: 18.429133333333333,
      Long: -64.6615,
      spotName: "Tortola - Cane Garden Bay, Tortola",
    },
  },
  2420: {
    spot: { Lat: 36.09625, Long: 28.085383333333333, spotName: "Acropolis" },
  },
  2421: {
    spot: {
      Lat: 26.513183333333334,
      Long: -76.96813333333333,
      spotName: "Rush Reef",
    },
  },
  2422: {
    spot: {
      Lat: 25.38275,
      Long: -76.52518333333333,
      spotName: "Surfers beach",
    },
  },
  2423: {
    spot: {
      Lat: 10.073566666666666,
      Long: -85.77236666666667,
      spotName: "Marbella",
    },
  },
  2424: {
    spot: {
      Lat: 10.435983333333333,
      Long: -85.79253333333334,
      spotName: "Flamingo Point",
    },
  },
  2425: {
    spot: {
      Lat: 9.944583333333334,
      Long: -85.67243333333333,
      spotName: "Playa Nosara",
    },
  },
  2426: {
    spot: {
      Lat: 10.31635,
      Long: -85.84158333333333,
      spotName: "Playa Grande",
    },
  },
  2427: {
    spot: { Lat: 9.8622, Long: -85.44418333333333, spotName: "Camaronal" },
  },
  2428: {
    spot: {
      Lat: 9.982816666666666,
      Long: -85.69561666666667,
      spotName: "Nosara  Beach",
    },
  },
  2429: {
    spot: {
      Lat: 8.384833333333333,
      Long: -83.27988333333333,
      spotName: "Matapalo",
    },
  },
  2430: {
    spot: {
      Lat: 13.169966666666667,
      Long: -88.11533333333334,
      spotName: "Las Flores",
    },
  },
  2431: {
    spot: { Lat: 9.2486, Long: -83.86173333333333, spotName: "Dominical" },
  },
  2432: {
    spot: { Lat: 19.6791, Long: -70.00323333333333, spotName: "La Preciosa" },
  },
  2433: {
    spot: {
      Lat: 16.429683333333333,
      Long: -61.53948333333334,
      spotName: "Port louis",
    },
  },
  2434: {
    spot: { Lat: 10.4053, Long: -85.80298333333333, spotName: "Brasilito" },
  },
  2435: {
    spot: {
      Lat: 9.527533333333333,
      Long: -84.49918333333333,
      spotName: "Esterillos Oeste",
    },
  },
  2436: {
    spot: {
      Lat: 8.395283333333333,
      Long: -83.27701666666667,
      spotName: "Pan Dulce",
    },
  },
  2437: { spot: { Lat: 19.7428, Long: -70.39215, spotName: "Cabarete" } },
  2438: {
    spot: {
      Lat: 16.472716666666667,
      Long: -61.51193333333333,
      spotName: "Anse Bertrand",
    },
  },
  2439: {
    spot: {
      Lat: 13.925316666666667,
      Long: -90.72158333333333,
      spotName: "Iztapa",
    },
  },
  2440: {
    spot: {
      Lat: 9.626816666666667,
      Long: -85.15211666666667,
      spotName: "Mal Pais- Santa Teresa",
    },
  },
  2441: {
    spot: {
      Lat: 9.94725,
      Long: -85.67351666666667,
      spotName: "Playa Guiones",
    },
  },
  2442: {
    spot: {
      Lat: 9.959216666666666,
      Long: -84.7403,
      spotName: "Boca Barranca",
    },
  },
  2443: {
    spot: { Lat: 9.5181, Long: -84.43611666666666, spotName: "Bejuco" },
  },
  2444: { spot: { Lat: 19.41495, Long: -69.85965, spotName: "El Broke" } },
  2445: {
    spot: {
      Lat: 13.916566666666666,
      Long: -91.07013333333333,
      spotName: "El Paredon",
    },
  },
  2446: {
    spot: {
      Lat: 10.286116666666667,
      Long: -85.85136666666666,
      spotName: "Playa Langosta",
    },
  },
  2447: {
    spot: { Lat: 9.59855, Long: -84.62158333333333, spotName: "Jaco Beach" },
  },
  2448: {
    spot: {
      Lat: 13.499116666666666,
      Long: -89.47358333333334,
      spotName: "K59",
    },
  },
  2449: {
    spot: { Lat: 13.492166666666666, Long: -89.38995, spotName: "Zunzal" },
  },
  2450: {
    spot: {
      Lat: 15.999666666666666,
      Long: -61.602133333333335,
      spotName: "Bananier",
    },
  },
  2451: {
    spot: {
      Lat: 9.637216666666667,
      Long: -85.16816666666666,
      spotName: "Santa Teresa",
    },
  },
  2452: { spot: { Lat: 19.7667, Long: -70.51575, spotName: "Sosua" } },
  2453: {
    spot: {
      Lat: 13.480033333333333,
      Long: -89.32756666666667,
      spotName: "Punta Roca La Libertad",
    },
  },
  2454: {
    spot: {
      Lat: 13.70595,
      Long: -90.03936666666667,
      spotName: "Barra de Santiago",
    },
  },
  2455: {
    spot: {
      Lat: 14.292783333333333,
      Long: -91.91553333333333,
      spotName: "Champerico",
    },
  },
  2456: {
    spot: {
      Lat: 9.565716666666667,
      Long: -84.59198333333333,
      spotName: "The Tree",
    },
  },
  2457: {
    spot: {
      Lat: 19.296083333333332,
      Long: -69.59873333333333,
      spotName: "El Coson",
    },
  },
  2458: {
    spot: {
      Lat: 16.33716666666667,
      Long: -61.361983333333335,
      spotName: "Le Moule - Damencourt",
    },
  },
  2459: {
    spot: {
      Lat: 16.210216666666668,
      Long: -61.42713333333333,
      spotName: "Petit Havre",
    },
  },
  2460: {
    spot: {
      Lat: 10.168316666666666,
      Long: -85.81353333333334,
      spotName: "Junquillal",
    },
  },
  2461: {
    spot: {
      Lat: 9.880416666666667,
      Long: -85.52663333333334,
      spotName: "Playa samara",
    },
  },
  2462: {
    spot: {
      Lat: 10.301916666666667,
      Long: -85.84231666666666,
      spotName: "Tamarindo",
    },
  },
  2463: {
    spot: { Lat: 8.39285, Long: -83.13936666666666, spotName: "Pavones" },
  },
  2464: {
    spot: { Lat: 20.71245, Long: -69.71511666666666, spotName: "Shipwreck" },
  },
  2465: {
    spot: { Lat: 13.4932, Long: -89.42216666666667, spotName: "Palmarcito" },
  },
  2466: { spot: { Lat: 15.5, Long: -90.25, spotName: "Hawaii" } },
  2467: {
    spot: {
      Lat: 13.889366666666668,
      Long: -90.48261666666667,
      spotName: "Monterrico",
    },
  },
  2468: {
    spot: {
      Lat: 10.823766666666666,
      Long: -85.80066666666667,
      spotName: "Laverinto (Laverint)",
    },
  },
  2469: {
    spot: { Lat: 10.039683333333333, Long: -85.74555, spotName: "Ostional" },
  },
  2470: {
    spot: {
      Lat: 10.302766666666667,
      Long: -85.84113333333333,
      spotName: "Pico Grande",
    },
  },
  2471: {
    spot: { Lat: 10.2982, Long: -85.84768333333334, spotName: "Suizo" },
  },
  2472: {
    spot: {
      Lat: 8.391466666666666,
      Long: -83.27911666666667,
      spotName: "Backwash",
    },
  },
  2473: { spot: { Lat: 9.59025, Long: -84.6264, spotName: "Perro Fino" } },
  2474: { spot: { Lat: 18.43295, Long: -69.6317, spotName: "La Boya" } },
  2475: {
    spot: {
      Lat: 13.160116666666667,
      Long: -88.20871666666666,
      spotName: "Punta Mango",
    },
  },
  2476: {
    spot: {
      Lat: 16.215783333333334,
      Long: -61.394666666666666,
      spotName: "Caravelle",
    },
  },
  2477: {
    spot: {
      Lat: 10.85245,
      Long: -85.80253333333333,
      spotName: "Ollie´s Point",
    },
  },
  2478: {
    spot: {
      Lat: 9.512383333333334,
      Long: -84.41911666666667,
      spotName: "Playa Bejuca",
    },
  },
  2479: {
    spot: {
      Lat: 9.6605,
      Long: -84.67428333333334,
      spotName: "Playa escondida",
    },
  },
  2480: {
    spot: { Lat: 9.5895, Long: -84.62528333333333, spotName: "Roca Loca" },
  },
  2481: {
    spot: {
      Lat: 16.4342,
      Long: -61.53966666666667,
      spotName: "Antigues Cape",
    },
  },
  2482: {
    spot: {
      Lat: 9.789583333333333,
      Long: -85.28275,
      spotName: "Playa Coyote",
    },
  },
  2483: {
    spot: {
      Lat: 10.780533333333333,
      Long: -85.68306666666666,
      spotName: "Roca Bruja",
    },
  },
  2484: {
    spot: { Lat: 9.7227, Long: -84.65393333333333, spotName: "Agujas" },
  },
  2485: {
    spot: { Lat: 9.396283333333333, Long: -84.16215, spotName: "Playitas" },
  },
  2486: { spot: { Lat: 13.49465, Long: -89.43855, spotName: "El Zonte" } },
  2487: {
    spot: {
      Lat: 16.333483333333334,
      Long: -61.332116666666664,
      spotName: "Anse à la Bouelle",
    },
  },
  2488: {
    spot: { Lat: 9.901383333333333, Long: -84.72845, spotName: "Corralillo" },
  },
  2489: {
    spot: {
      Lat: 9.38945,
      Long: -84.14858333333333,
      spotName: "Manuel Antonio",
    },
  },
  2490: {
    spot: {
      Lat: 9.953216666666666,
      Long: -85.67618333333333,
      spotName: "Pelada",
    },
  },
  2491: {
    spot: {
      Lat: 10.306916666666666,
      Long: -85.83878333333334,
      spotName: "El Estero- Tamarindo",
    },
  },
  2492: {
    spot: {
      Lat: 9.527033333333334,
      Long: -84.50323333333333,
      spotName: "Esterillos",
    },
  },
  2493: {
    spot: {
      Lat: 18.4198,
      Long: -70.01118333333334,
      spotName: "El chinchorro",
    },
  },
  2494: {
    spot: {
      Lat: 18.773883333333334,
      Long: -68.53623333333333,
      spotName: "Macao",
    },
  },
  2495: {
    spot: {
      Lat: 16.240716666666668,
      Long: -61.321133333333336,
      spotName: "Anse à la barque",
    },
  },
  2496: {
    spot: {
      Lat: 13.492333333333333,
      Long: -89.38168333333333,
      spotName: "La Bocana",
    },
  },
  2497: {
    spot: {
      Lat: 16.247716666666665,
      Long: -61.272983333333336,
      spotName: "St Francois Harbour",
    },
  },
  2498: {
    spot: { Lat: 13.92265, Long: -90.77473333333333, spotName: "La barra" },
  },
  2499: { spot: { Lat: 9.85885, Long: -84.70115, spotName: "Bajamar" } },
  2500: {
    spot: {
      Lat: 10.228066666666667,
      Long: -85.83756666666666,
      spotName: "Playa Avellana",
    },
  },
  2501: {
    spot: {
      Lat: 10.195866666666667,
      Long: -85.83228333333334,
      spotName: "Playa Negra",
    },
  },
  2502: {
    spot: {
      Lat: 9.575183333333333,
      Long: -84.60656666666667,
      spotName: "Hermosa",
    },
  },
  2503: {
    spot: { Lat: 19.7825, Long: -70.44778333333333, spotName: "Encuentro" },
  },
  2504: {
    spot: {
      Lat: 13.510033333333332,
      Long: -89.59591666666667,
      spotName: "Mizata",
    },
  },
  2505: {
    spot: {
      Lat: 16.340883333333334,
      Long: -61.779583333333335,
      spotName: "La Perle",
    },
  },
  2506: {
    spot: {
      Lat: 13.917483333333333,
      Long: -90.82175,
      spotName: "Puerto San Jose",
    },
  },
  2507: {
    spot: {
      Lat: 14.406666666666666,
      Long: -60.84871666666667,
      spotName: "Anse Trabaud",
    },
  },
  2508: {
    spot: { Lat: 19.173866666666665, Long: -96.11835, spotName: "Martí" },
  },
  2509: {
    spot: {
      Lat: 21.187566666666665,
      Long: -105.22988333333333,
      spotName: "Chacala",
    },
  },
  2510: {
    spot: {
      Lat: 19.163333333333334,
      Long: -104.41406666666667,
      spotName: "Boca de Apisa",
    },
  },
  2511: {
    spot: { Lat: 15.967566666666666, Long: -97.67685, spotName: "Chacahua" },
  },
  2512: {
    spot: {
      Lat: 20.900766666666666,
      Long: -105.41715,
      spotName: "San Pancho",
    },
  },
  2513: {
    spot: {
      Lat: 11.998766666666667,
      Long: -68.6483,
      spotName: "Klein Curaçao Rights",
    },
  },
  2514: { spot: { Lat: 8.45645, Long: -79.97145, spotName: "Riomar" } },
  2515: {
    spot: {
      Lat: 18.454316666666667,
      Long: -65.96478333333333,
      spotName: "Chatarras",
    },
  },
  2516: {
    spot: { Lat: 18.355233333333334, Long: -67.27025, spotName: "Dogmans" },
  },
  2517: {
    spot: {
      Lat: 25.147166666666667,
      Long: 55.192933333333336,
      spotName: "Sunset Beach",
    },
  },
  2518: {
    spot: {
      Lat: 44.64215,
      Long: -63.342016666666666,
      spotName: "Lawrencetown",
    },
  },
  2519: {
    spot: {
      Lat: 34.00443333333333,
      Long: -118.49298333333333,
      spotName: "Bay Street, Santa Monica",
    },
  },
  2520: {
    spot: {
      Lat: 36.281083333333335,
      Long: -121.85778333333333,
      spotName: "Andrew molera state beach",
    },
  },
  2521: {
    spot: {
      Lat: 36.549083333333336,
      Long: -121.92936666666667,
      spotName: "Carmel",
    },
  },
  2522: {
    spot: {
      Lat: 34.435183333333335,
      Long: -119.92868333333334,
      spotName: "Driftwoods",
    },
  },
  2523: {
    spot: { Lat: 34.5062, Long: -120.49886666666667, spotName: "Jalama" },
  },
  2524: {
    spot: { Lat: 34.40496666666667, Long: -119.6883, spotName: "Sandspit" },
  },
  2525: {
    spot: {
      Lat: 34.46358333333333,
      Long: -120.10143333333333,
      spotName: "Tajuigas Ranch",
    },
  },
  2526: {
    spot: {
      Lat: 34.495333333333335,
      Long: -120.49606666666666,
      spotName: "Tarantulas",
    },
  },
  2527: {
    spot: {
      Lat: 36.96066666666667,
      Long: -122.00051666666667,
      spotName: "Murph Bar",
    },
  },
  2528: {
    spot: {
      Lat: 36.9515,
      Long: -122.02561666666666,
      spotName: "Steamer Lane",
    },
  },
  2529: {
    spot: { Lat: 33.0651, Long: -117.30473333333333, spotName: "Beacons" },
  },
  2530: {
    spot: {
      Lat: 33.096666666666664,
      Long: -117.31593333333333,
      spotName: "Ponto",
    },
  },
  2531: {
    spot: {
      Lat: 23.11945,
      Long: -109.52806666666666,
      spotName: "Shipwrecks",
    },
  },
  2532: {
    spot: {
      Lat: 15.847166666666666,
      Long: -97.05511666666666,
      spotName: "Puerto Escondido",
    },
  },
  2533: { spot: { Lat: 21.5158, Long: -105.24705, spotName: "las islitas" } },
  2534: {
    spot: {
      Lat: 8.557083333333333,
      Long: -79.84073333333333,
      spotName: "Malibu",
    },
  },
  2535: {
    spot: {
      Lat: 7.272233333333333,
      Long: -80.42026666666666,
      spotName: "Playa guanico",
    },
  },
  2536: { spot: { Lat: 17.95555, Long: -66.8573, spotName: "Ballenas" } },
  2537: {
    spot: {
      Lat: 18.456966666666666,
      Long: -66.06368333333333,
      spotName: "La Bomba",
    },
  },
  2538: { spot: { Lat: 18.25, Long: -66.5, spotName: "Middles" } },
  2539: {
    spot: {
      Lat: 18.331833333333332,
      Long: -67.25301666666667,
      spotName: "Sea Beach",
    },
  },
  2540: {
    spot: { Lat: 13.13035, Long: -59.63718333333333, spotName: "Paradise" },
  },
  2541: {
    spot: { Lat: -34.1192, Long: 114.98978333333334, spotName: "Magics" },
  },
  2542: {
    spot: { Lat: 32.167033333333336, Long: 34.7967, spotName: "Marina" },
  },
  2543: {
    spot: { Lat: 38.23905, Long: 26.31063333333333, spotName: "Alacati" },
  },
  2544: {
    spot: {
      Lat: 44.648133333333334,
      Long: -63.27438333333333,
      spotName: "Fisherman's Reserve",
    },
  },
  2545: {
    spot: { Lat: 45.5881, Long: -60.67955, spotName: "Point Michaud" },
  },
  2546: {
    spot: {
      Lat: 40.76715,
      Long: -124.24078333333334,
      spotName: "Harbor  Entrance",
    },
  },
  2547: {
    spot: { Lat: 33.90411666666667, Long: -118.4249, spotName: "El Porto" },
  },
  2548: {
    spot: {
      Lat: 33.82341666666667,
      Long: -118.3899,
      spotName: "Torrance Beach The Avenues",
    },
  },
  2549: {
    spot: {
      Lat: 34.003416666666666,
      Long: -118.81158333333333,
      spotName: "Westward Beach",
    },
  },
  2550: {
    spot: {
      Lat: 34.01795,
      Long: -118.78633333333333,
      spotName: "The Hut - Paradise Cove",
    },
  },
  2551: { spot: { Lat: 33.6173, Long: -117.9389, spotName: "40th Street" } },
  2552: {
    spot: {
      Lat: 33.38013333333333,
      Long: -117.57988333333333,
      spotName: "Church (Trestles)",
    },
  },
  2553: {
    spot: {
      Lat: 34.406016666666666,
      Long: -119.8502,
      spotName: "Depressions",
    },
  },
  2554: {
    spot: {
      Lat: 34.96638333333333,
      Long: -120.65531666666666,
      spotName: "Main Street",
    },
  },
  2555: {
    spot: {
      Lat: 32.825066666666665,
      Long: -117.28151666666666,
      spotName: "Big Rock",
    },
  },
  2556: {
    spot: {
      Lat: 32.83055,
      Long: -117.21863333333333,
      spotName: "Crystal Pier",
    },
  },
  2557: {
    spot: {
      Lat: 32.73993333333333,
      Long: -117.25548333333333,
      spotName: "Pescedero (Pesky)",
    },
  },
  2558: {
    spot: {
      Lat: 14.773983333333334,
      Long: -60.894,
      spotName: "Pelle à Tarte",
    },
  },
  2559: {
    spot: {
      Lat: 32.25245,
      Long: -116.96233333333333,
      spotName: "Las Gaviotas",
    },
  },
  2560: {
    spot: {
      Lat: 14.478433333333333,
      Long: -61.02746666666667,
      spotName: "Diam's",
    },
  },
  2561: { spot: { Lat: 17.91645, Long: -101.86905, spotName: "The Ranch" } },
  2562: {
    spot: {
      Lat: 21.131216666666667,
      Long: -86.74663333333334,
      spotName: "Chacmool",
    },
  },
  2563: {
    spot: {
      Lat: 14.72185,
      Long: -92.42801666666666,
      spotName: "Puerto Madero",
    },
  },
  2564: {
    spot: { Lat: 7.249666666666666, Long: -80.4885, spotName: "Cambutal" },
  },
  2565: {
    spot: {
      Lat: 7.6343499999999995,
      Long: -81.27916666666667,
      spotName: "Punta Roca",
    },
  },
  2566: {
    spot: { Lat: 8.5069, Long: -79.91713333333334, spotName: "Tetas" },
  },
  2567: {
    spot: {
      Lat: 18.343916666666665,
      Long: -67.26065,
      spotName: "Little Malibu",
    },
  },
  2568: {
    spot: {
      Lat: 18.376366666666666,
      Long: -65.71366666666667,
      spotName: "Luquillo - La Pared",
    },
  },
  2569: {
    spot: {
      Lat: 18.068233333333332,
      Long: -65.79611666666666,
      spotName: "The Search",
    },
  },
  2570: {
    spot: {
      Lat: 39.36275,
      Long: -9.368616666666666,
      spotName: "Praia do Cerro",
    },
  },
  2571: {
    spot: {
      Lat: 17.7778,
      Long: -64.74573333333333,
      spotName: "Judiths Fancy",
    },
  },
  2572: {
    spot: {
      Lat: 32.06381666666667,
      Long: 34.75578333333333,
      spotName: "Dolfinraium",
    },
  },
  2573: {
    spot: {
      Lat: 44.613933333333335,
      Long: -63.429566666666666,
      spotName: "Cow Bay - Moose Rocks",
    },
  },
  2574: {
    spot: {
      Lat: 41.03131666666667,
      Long: -124.11701666666667,
      spotName: "Moonstone",
    },
  },
  2575: {
    spot: {
      Lat: 33.71743333333333,
      Long: -118.32353333333333,
      spotName: "TCs",
    },
  },
  2576: {
    spot: {
      Lat: 33.623216666666664,
      Long: -117.94518333333333,
      spotName: "56th St.",
    },
  },
  2577: {
    spot: {
      Lat: 33.655633333333334,
      Long: -118.00341666666667,
      spotName: "Huntington Beach",
    },
  },
  2578: {
    spot: { Lat: 33.59396666666667, Long: -117.8824, spotName: "The Wedge" },
  },
  2579: {
    spot: {
      Lat: 34.40685,
      Long: -119.84318333333333,
      spotName: "Campus Point",
    },
  },
  2580: {
    spot: {
      Lat: 34.457766666666664,
      Long: -120.02231666666667,
      spotName: "El Capitan",
    },
  },
  2581: {
    spot: {
      Lat: 36.957883333333335,
      Long: -122.02433333333333,
      spotName: "Cowells cove",
    },
  },
  2582: {
    spot: {
      Lat: 33.0019,
      Long: -117.27816666666666,
      spotName: "Seaside Reef",
    },
  },
  2583: {
    spot: {
      Lat: 31.80895,
      Long: -116.80968333333334,
      spotName: "Isla de Todos Santos",
    },
  },
  2584: {
    spot: {
      Lat: 16.688233333333333,
      Long: -99.62981666666667,
      spotName: "Barra Vieja",
    },
  },
  2585: {
    spot: {
      Lat: 21.34648333333333,
      Long: -105.24681666666666,
      spotName: "Punta Custodio",
    },
  },
  2586: {
    spot: {
      Lat: 18.457283333333333,
      Long: -67.16426666666666,
      spotName: "Crashboats",
    },
  },
  2587: { spot: { Lat: 17.9768, Long: -65.9657, spotName: "California" } },
  2588: {
    spot: {
      Lat: 18.490933333333334,
      Long: -66.61093333333334,
      spotName: "Hallows",
    },
  },
  2589: {
    spot: { Lat: 18.470366666666667, Long: -66.47565, spotName: "Los Tubos" },
  },
  2590: {
    spot: {
      Lat: 18.381733333333333,
      Long: -65.61451666666666,
      spotName: "El Misto",
    },
  },
  2591: {
    spot: { Lat: 18.4762, Long: -67.16923333333334, spotName: "Wilderness" },
  },
  2592: {
    spot: {
      Lat: 18.319516666666665,
      Long: -64.94508333333333,
      spotName: "Sprat Bay",
    },
  },
  2593: {
    spot: {
      Lat: 32.83551666666666,
      Long: 34.97951666666667,
      spotName: "BackDoor (Haifa)",
    },
  },
  2594: {
    spot: {
      Lat: 32.122733333333336,
      Long: 34.781983333333336,
      spotName: "Tel-Baruch",
    },
  },
  2595: {
    spot: {
      Lat: 32.09191666666667,
      Long: 34.76963333333333,
      spotName: "Topsy",
    },
  },
  2596: {
    spot: {
      Lat: 57.43646666666667,
      Long: -152.40626666666665,
      spotName: "Three Mile",
    },
  },
  2597: {
    spot: { Lat: 44.6529, Long: -63.264433333333336, spotName: "Killaz" },
  },
  2598: {
    spot: {
      Lat: 45.41931666666667,
      Long: -73.60306666666666,
      spotName: "Vague à Guy - Lasalle",
    },
  },
  2599: { spot: { Lat: 6, Long: -95, spotName: "Pachina Bay" } },
  2600: {
    spot: {
      Lat: 33.82725,
      Long: -118.39198333333333,
      spotName: "Redondo Beach",
    },
  },
  2601: {
    spot: {
      Lat: 36.42163333333333,
      Long: -121.91896666666666,
      spotName: "Garrapata",
    },
  },
  2602: {
    spot: { Lat: 33.400666666666666, Long: -117.604, spotName: "State park" },
  },
  2603: {
    spot: {
      Lat: 32.990966666666665,
      Long: -117.27543333333334,
      spotName: "Fletchers Cove",
    },
  },
  2604: {
    spot: {
      Lat: 32.85861666666667,
      Long: -117.25835,
      spotName: "La Jolla Shores",
    },
  },
  2605: {
    spot: {
      Lat: 32.85446666666667,
      Long: -117.27775,
      spotName: "La Jolla Cove",
    },
  },
  2606: {
    spot: {
      Lat: 17.620449999999998,
      Long: -101.55351666666667,
      spotName: "Las Gatas",
    },
  },
  2607: {
    spot: {
      Lat: 17.663883333333334,
      Long: -101.65308333333333,
      spotName: "Playa Linda",
    },
  },
  2608: {
    spot: {
      Lat: 21.095383333333334,
      Long: -86.76418333333334,
      spotName: "Playa Delphine",
    },
  },
  2609: {
    spot: {
      Lat: 18.855283333333333,
      Long: -103.96105,
      spotName: "Pascuales",
    },
  },
  2610: { spot: { Lat: 23.23785, Long: -106.4473, spotName: "El Camaron" } },
  2611: {
    spot: {
      Lat: 23.23755,
      Long: -106.44678333333333,
      spotName: "Valentinos",
    },
  },
  2612: {
    spot: { Lat: 9.61835, Long: -79.53811666666667, spotName: "EL Playon" },
  },
  2613: {
    spot: {
      Lat: 12.175583333333334,
      Long: -68.8585,
      spotName: "Sint Joris Baai",
    },
  },
  2614: {
    spot: { Lat: 18.4555, Long: -66.17978333333333, spotName: "Cochino" },
  },
  2615: {
    spot: {
      Lat: 18.365266666666667,
      Long: -67.26966666666667,
      spotName: "Domes",
    },
  },
  2616: {
    spot: { Lat: 18.4487, Long: -66.01531666666666, spotName: "Islitas" },
  },
  2617: {
    spot: { Lat: 18.5085, Long: -67.13701666666667, spotName: "Survival" },
  },
  2618: {
    spot: {
      Lat: 32.30233333333334,
      Long: 34.8407,
      spotName: "Argaman's Beach",
    },
  },
  2619: {
    spot: {
      Lat: 31.798483333333333,
      Long: 34.631166666666665,
      spotName: "Hakshatot (Ashdod)",
    },
  },
  2620: {
    spot: {
      Lat: 34.115183333333334,
      Long: 35.64751666666667,
      spotName: "Tam tam",
    },
  },
  2621: {
    spot: {
      Lat: 25.231383333333333,
      Long: 55.25995,
      spotName: "Russian Beach",
    },
  },
  2622: { spot: { Lat: 43.9288, Long: -59.876, spotName: "Sable Island" } },
  2623: {
    spot: {
      Lat: 48.43343333333333,
      Long: -124.09358333333333,
      spotName: "China Beach",
    },
  },
  2624: {
    spot: { Lat: 33.8005, Long: -118.40468333333334, spotName: "Exiles" },
  },
  2625: {
    spot: {
      Lat: 33.383183333333335,
      Long: -118.47253333333333,
      spotName: "Shark Harbor",
    },
  },
  2626: {
    spot: { Lat: 34.04195, Long: -118.91593333333333, spotName: "Zeroes" },
  },
  2627: { spot: { Lat: 39.3016, Long: -123.7978, spotName: "Big River" } },
  2628: {
    spot: { Lat: 36.61801666666667, Long: -121.94275, spotName: "Asilomar" },
  },
  2629: {
    spot: {
      Lat: 33.535916666666665,
      Long: -117.77856666666666,
      spotName: "Thaila Street",
    },
  },
  2630: {
    spot: {
      Lat: 34.057066666666664,
      Long: -120.45273333333333,
      spotName: "Shark park",
    },
  },
  2631: {
    spot: {
      Lat: 36.971516666666666,
      Long: -121.91391666666667,
      spotName: "Seacliff Beach",
    },
  },
  2632: {
    spot: { Lat: 32.68403333333333, Long: -117.1915, spotName: "Coronado" },
  },
  2633: { spot: { Lat: 33.0455, Long: -117.2983, spotName: "D Street" } },
  2634: {
    spot: {
      Lat: 32.666983333333334,
      Long: -117.24551666666666,
      spotName: "Donuts",
    },
  },
  2635: {
    spot: {
      Lat: 32.719316666666664,
      Long: -117.25775,
      spotName: "Sunset Cliffs - Osprey",
    },
  },
  2636: {
    spot: { Lat: 32.25893333333333, Long: -116.98635, spotName: "K-38" },
  },
  2637: {
    spot: { Lat: 23.024516666666667, Long: -109.7138, spotName: "The rock" },
  },
  2638: {
    spot: {
      Lat: 23.342566666666666,
      Long: -110.1884,
      spotName: "Playa Los Cerritos",
    },
  },
  2639: {
    spot: {
      Lat: 17.41515,
      Long: -101.18588333333334,
      spotName: "La Barrita",
    },
  },
  2640: {
    spot: {
      Lat: 19.220233333333333,
      Long: -96.15663333333333,
      spotName: "Playa norte",
    },
  },
  2641: {
    spot: {
      Lat: 20.874533333333332,
      Long: -105.45158333333333,
      spotName: "Sayulita",
    },
  },
  2642: {
    spot: { Lat: 18.45415, Long: -103.55856666666666, spotName: "La Ticla" },
  },
  2643: {
    spot: {
      Lat: 19.239683333333332,
      Long: -104.73533333333333,
      spotName: "Ranchito",
    },
  },
  2644: {
    spot: { Lat: 9.42385, Long: -82.25616666666667, spotName: "BLUFF" },
  },
  2645: {
    spot: {
      Lat: 15.830566666666666,
      Long: -97.04676666666667,
      spotName: "La Punta",
    },
  },
  2646: {
    spot: {
      Lat: 7.652816666666666,
      Long: -81.29341666666667,
      spotName: "Santa Catalina",
    },
  },
  2647: {
    spot: { Lat: 15.658, Long: -96.52621666666667, spotName: "Zipolite" },
  },
  2648: {
    spot: {
      Lat: 9.361116666666666,
      Long: -82.20471666666667,
      spotName: "Silver Back",
    },
  },
  2649: {
    spot: {
      Lat: 15.855166666666667,
      Long: -97.05798333333334,
      spotName: "Puerto Escondido Left",
    },
  },
  2650: { spot: { Lat: 17.9702, Long: -65.96125, spotName: "Inches" } },
  2651: {
    spot: {
      Lat: 18.357433333333333,
      Long: -67.26936666666667,
      spotName: "Maria's",
    },
  },
  2652: {
    spot: { Lat: 18.01475, Long: -65.84451666666666, spotName: "El cocal" },
  },
  2653: {
    spot: {
      Lat: 18.378316666666667,
      Long: -64.99648333333333,
      spotName: "Hull bay",
    },
  },
  2654: {
    spot: {
      Lat: 18.514483333333335,
      Long: -67.07741666666666,
      spotName: "Jobo's",
    },
  },
  2655: {
    spot: {
      Lat: 18.451383333333332,
      Long: -65.95463333333333,
      spotName: "TOCONES",
    },
  },
  2656: {
    spot: {
      Lat: 11.451416666666667,
      Long: -86.10631666666667,
      spotName: "Popoyo",
    },
  },
  2657: {
    spot: { Lat: 32.05811666666666, Long: 34.7563, spotName: "Maravi" },
  },
  2658: {
    spot: {
      Lat: 32.27336666666667,
      Long: 34.83343333333333,
      spotName: "Netanya(poleg)",
    },
  },
  2659: {
    spot: {
      Lat: 34.310633333333335,
      Long: 35.71495,
      spotName: "Sandy Beach - Chekka",
    },
  },
  2660: {
    spot: {
      Lat: 20.282816666666665,
      Long: 58.73153333333333,
      spotName: "Masirah Island",
    },
  },
  2661: {
    spot: {
      Lat: 60.2787,
      Long: -396.19303333333335,
      spotName: "AlMina Spot",
    },
  },
  2662: {
    spot: { Lat: 36.4584, Long: 34.14491666666667, spotName: "Castles" },
  },
  2663: {
    spot: {
      Lat: 25.148533333333333,
      Long: 55.1948,
      spotName: "Jumeirah Beach (Dubai)",
    },
  },
  2664: {
    spot: { Lat: 57.821, Long: -152.35136666666668, spotName: "Mill Bay" },
  },
  2665: {
    spot: {
      Lat: 46.647016666666666,
      Long: -60.38755,
      spotName: "Ingonish Beach",
    },
  },
  2666: {
    spot: {
      Lat: 33.792566666666666,
      Long: -118.41046666666666,
      spotName: "Palos Verde - Bluff Cove",
    },
  },
  2667: {
    spot: { Lat: 49.77095, Long: -124.38626666666667, spotName: "Hansons" },
  },
  2668: {
    spot: {
      Lat: 33.859366666666666,
      Long: -118.40343333333334,
      spotName: "Hermosa Beach Pier",
    },
  },
  2669: {
    spot: {
      Lat: 34.01083333333333,
      Long: -118.79248333333334,
      spotName: "Point Dume - Little Dume",
    },
  },
  2670: {
    spot: {
      Lat: 33.993966666666665,
      Long: -118.48093333333334,
      spotName: "Venice - Rose Avenue",
    },
  },
  2671: { spot: { Lat: 33.7393, Long: -118.1174, spotName: "Ray Bay" } },
  2672: {
    spot: {
      Lat: 36.561883333333334,
      Long: -121.95155,
      spotName: "Ghost tree",
    },
  },
  2673: {
    spot: {
      Lat: 33.47355,
      Long: -117.72151666666667,
      spotName: "Salt Creek : Gravels",
    },
  },
  2674: {
    spot: { Lat: 36.62635, Long: -121.9149, spotName: "Lover's Point" },
  },
  2675: {
    spot: {
      Lat: 33.49828333333333,
      Long: -117.74158333333334,
      spotName: "Thousand steps",
    },
  },
  2676: {
    spot: { Lat: 33.3725, Long: -117.56576666666666, spotName: "San Onofre" },
  },
  2677: {
    spot: {
      Lat: 33.38556666666667,
      Long: -117.59438333333334,
      spotName: "Upper Trestles",
    },
  },
  2678: {
    spot: {
      Lat: 34.4156,
      Long: -119.63766666666666,
      spotName: "Hammonds Reef",
    },
  },
  2679: {
    spot: { Lat: 36.956133333333334, Long: -121.9807, spotName: "26th Ave." },
  },
  2680: {
    spot: {
      Lat: 36.982366666666664,
      Long: -122.1564,
      spotName: "Laguna Creek",
    },
  },
  2681: {
    spot: {
      Lat: 33.045766666666665,
      Long: -117.29686666666667,
      spotName: "Encinitas - D Street",
    },
  },
  2682: {
    spot: {
      Lat: 32.879583333333336,
      Long: -117.25383333333333,
      spotName: "Blacks Beach",
    },
  },
  2683: {
    spot: {
      Lat: 32.83293333333334,
      Long: -117.28298333333333,
      spotName: "Little Point",
    },
  },
  2684: {
    spot: {
      Lat: 32.795766666666665,
      Long: -117.25916666666667,
      spotName: "PB Pier",
    },
  },
  2685: {
    spot: { Lat: 32.74901666666667, Long: -117.25535, spotName: "O.B." },
  },
  2686: {
    spot: {
      Lat: 33.14618333333333,
      Long: -117.34628333333333,
      spotName: "Tamarack st.",
    },
  },
  2687: {
    spot: { Lat: 14.4872, Long: -61.08363333333333, spotName: "Petite Anse" },
  },
  2688: {
    spot: {
      Lat: 31.900666666666666,
      Long: -116.73031666666667,
      spotName: "San miguel",
    },
  },
  2689: {
    spot: { Lat: 18.8647, Long: -95.80078333333333, spotName: "Camaronera" },
  },
  2690: {
    spot: { Lat: 22.266066666666667, Long: -97.7833, spotName: "Escolleras" },
  },
  2691: {
    spot: {
      Lat: 19.317216666666667,
      Long: -104.94571666666667,
      spotName: "Arroyo seco",
    },
  },
  2692: {
    spot: {
      Lat: 20.763983333333332,
      Long: -105.54188333333333,
      spotName: "Punta Mita",
    },
  },
  2693: {
    spot: { Lat: 9.61825, Long: -79.60093333333333, spotName: "Isla mamey" },
  },
  2694: {
    spot: {
      Lat: 18.45985,
      Long: -67.16556666666666,
      spotName: "Gas Chambers",
    },
  },
  2695: {
    spot: { Lat: 11.4373, Long: -86.08448333333334, spotName: "Santana" },
  },
  2696: {
    spot: {
      Lat: 31.773183333333332,
      Long: 34.616616666666665,
      spotName: "Igolim ashdod",
    },
  },
  2697: {
    spot: {
      Lat: 21.950533333333333,
      Long: 59.6458,
      spotName: "Point nth of Al Ashkarah",
    },
  },
  2698: {
    spot: {
      Lat: 25.230733333333333,
      Long: 55.257533333333335,
      spotName: "Moscow Beach",
    },
  },
  2699: {
    spot: {
      Lat: 33.90508333333333,
      Long: -118.42313333333334,
      spotName: "Hammerland",
    },
  },
  2700: {
    spot: { Lat: 34.04545, Long: -118.94496666666667, spotName: "Heavens" },
  },
  2701: {
    spot: {
      Lat: 34.00456666666667,
      Long: -118.49235,
      spotName: "Santa Monica - Samo 20",
    },
  },
  2702: {
    spot: {
      Lat: 33.765883333333335,
      Long: -118.42351666666667,
      spotName: "Wallys",
    },
  },
  2703: {
    spot: { Lat: 36.60545, Long: -121.8693, spotName: "Del Monte Beach" },
  },
  2704: {
    spot: {
      Lat: 33.61515,
      Long: -117.93721666666667,
      spotName: "36th street",
    },
  },
  2705: {
    spot: {
      Lat: 33.61925,
      Long: -117.94025,
      spotName: "Newport Beach River Jetties",
    },
  },
  2706: {
    spot: {
      Lat: 34.39158333333334,
      Long: -119.52198333333334,
      spotName: "Carpinteria Beach",
    },
  },
  2707: {
    spot: {
      Lat: 34.40305,
      Long: -119.7436,
      spotName: "Hendry's beach - arroyo burro",
    },
  },
  2708: { spot: { Lat: -0, Long: -0, spotName: "St Augustine Point" } },
  2709: {
    spot: {
      Lat: 36.950066666666665,
      Long: -122.04298333333334,
      spotName: "Mitchell's Cove",
    },
  },
  2710: {
    spot: {
      Lat: 36.95661666666667,
      Long: -121.9709,
      spotName: "Pleasure Point",
    },
  },
  2711: { spot: { Lat: 36.9511, Long: -122.02835, spotName: "The Wedge" } },
  2712: {
    spot: {
      Lat: 33.015166666666666,
      Long: -117.28338333333333,
      spotName: "Cardiff reef",
    },
  },
  2713: {
    spot: {
      Lat: 32.719633333333334,
      Long: -117.25688333333333,
      spotName: "Garbage",
    },
  },
  2714: {
    spot: {
      Lat: 32.57843333333334,
      Long: -117.13425,
      spotName: "Imperial Beach",
    },
  },
  2715: { spot: { Lat: 32.4195, Long: -117.09575, spotName: "Baja Malibu" } },
  2716: { spot: { Lat: 29.953, Long: -115.7547, spotName: "Punta Baja" } },
  2717: {
    spot: { Lat: 23.0293, Long: -109.71408333333333, spotName: "Zippers" },
  },
  2718: {
    spot: {
      Lat: 17.839216666666665,
      Long: -101.77181666666667,
      spotName: "Saladita",
    },
  },
  2719: {
    spot: { Lat: 20.7887, Long: -105.50668333333333, spotName: "Veneros" },
  },
  2720: {
    spot: {
      Lat: 21.527616666666667,
      Long: -105.28431666666667,
      spotName: "San Blas",
    },
  },
  2721: {
    spot: {
      Lat: 9.348266666666667,
      Long: -82.22883333333333,
      spotName: "Carenerro Point Break",
    },
  },
  2722: {
    spot: { Lat: 8.30425, Long: -82.57766666666667, spotName: "La Barqueta" },
  },
  2723: {
    spot: {
      Lat: 7.42775,
      Long: -80.19616666666667,
      spotName: "Playa Venado",
    },
  },
  2724: {
    spot: {
      Lat: 18.487033333333333,
      Long: -66.34328333333333,
      spotName: "Las Pasas",
    },
  },
  2725: {
    spot: { Lat: 18.4926, Long: -66.39643333333333, spotName: "La peinilla" },
  },
  2726: {
    spot: {
      Lat: 31.791933333333333,
      Long: 34.626916666666666,
      spotName: "Dromi(Ashdod)",
    },
  },
  2727: {
    spot: {
      Lat: 36.092666666666666,
      Long: 32.93581666666667,
      spotName: "Anamur",
    },
  },
  2728: {
    spot: {
      Lat: 57.426566666666666,
      Long: -152.35311666666666,
      spotName: "Fossil Beach (Kodiak)",
    },
  },
  2729: {
    spot: {
      Lat: 49.11776666666667,
      Long: -125.89928333333333,
      spotName: "Chestermans beach - north",
    },
  },
  2730: {
    spot: {
      Lat: 34.02616666666667,
      Long: -118.75446666666667,
      spotName: "Latigo Point",
    },
  },
  2731: {
    spot: { Lat: 33.80233333333334, Long: -118.3992, spotName: "Haggarty's" },
  },
  2732: {
    spot: {
      Lat: 34.04558333333333,
      Long: -118.93075,
      spotName: "Leo Carillo",
    },
  },
  2733: {
    spot: {
      Lat: 34.037366666666664,
      Long: -118.58308333333333,
      spotName: "Topanga Point",
    },
  },
  2734: {
    spot: {
      Lat: 34.027766666666665,
      Long: -118.84108333333333,
      spotName: "Zuma Beach",
    },
  },
  2735: {
    spot: {
      Lat: 36.602133333333335,
      Long: -121.88801666666667,
      spotName: "The Wharf",
    },
  },
  2736: {
    spot: {
      Lat: 33.66341666666667,
      Long: -118.01431666666667,
      spotName: "17th Street",
    },
  },
  2737: {
    spot: {
      Lat: 33.69663333333333,
      Long: -118.04946666666666,
      spotName: "Bolsa Chica",
    },
  },
  2738: {
    spot: { Lat: 33.62005, Long: -117.9403, spotName: "Newport beach" },
  },
  2739: {
    spot: {
      Lat: 34.420316666666665,
      Long: -119.90021666666667,
      spotName: "Rockpile",
    },
  },
  2740: {
    spot: {
      Lat: 34.37303333333333,
      Long: -119.47808333333333,
      spotName: "Rincon",
    },
  },
  2741: {
    spot: {
      Lat: 34.75025,
      Long: -120.63305,
      spotName: "Purisima Point Peak",
    },
  },
  2742: {
    spot: {
      Lat: 36.97116666666667,
      Long: -121.9477,
      spotName: "Capitola jetty",
    },
  },
  2743: {
    spot: {
      Lat: 36.95986666666667,
      Long: -121.96476666666666,
      spotName: "The Hook",
    },
  },
  2744: {
    spot: {
      Lat: 33.07613333333333,
      Long: -117.31191666666666,
      spotName: "Grandview",
    },
  },
  2745: {
    spot: { Lat: 33.0755, Long: -117.31026666666666, spotName: "Leucadia" },
  },
  2746: {
    spot: { Lat: 13.922666666666666, Long: -91.1467, spotName: "Zipacate" },
  },
  2747: {
    spot: { Lat: 14.77085, Long: -60.89986666666667, spotName: "Tartane" },
  },
  2748: {
    spot: {
      Lat: 14.844,
      Long: -61.21946666666667,
      spotName: "Anse Couleuvre",
    },
  },
  2749: {
    spot: {
      Lat: 23.015133333333335,
      Long: -109.71693333333333,
      spotName: "Costa Azul",
    },
  },
  2750: {
    spot: {
      Lat: 15.858683333333333,
      Long: -97.079,
      spotName: "Carrizalillo",
    },
  },
  2751: {
    spot: { Lat: 21.513266666666667, Long: -105.26185, spotName: "Stoners" },
  },
  2752: {
    spot: {
      Lat: 8.465533333333333,
      Long: -79.95853333333334,
      spotName: "El palmar point",
    },
  },
  2753: {
    spot: {
      Lat: 8.548083333333333,
      Long: -79.86803333333333,
      spotName: "Serena",
    },
  },
  2754: {
    spot: { Lat: 18.42585, Long: -67.15588333333334, spotName: "Bridges" },
  },
  2755: { spot: { Lat: 32.9833, Long: 35.0814, spotName: "Shavei Tzion" } },
  2756: { spot: { Lat: 32.8069, Long: 34.9548, spotName: "TE PEAK" } },
  2757: {
    spot: { Lat: 48.49733333333333, Long: -123.33295, spotName: "Midgets" },
  },
  2758: {
    spot: {
      Lat: 48.382866666666665,
      Long: -123.51375,
      spotName: "Witty's Lagoon",
    },
  },
  2759: {
    spot: {
      Lat: 40.76773333333333,
      Long: -124.23528333333333,
      spotName: "North jetty",
    },
  },
  2760: {
    spot: {
      Lat: 36.20758333333333,
      Long: -121.74453333333334,
      spotName: "Fullers",
    },
  },
  2761: { spot: { Lat: 33.60905, Long: -117.93205, spotName: "Blackies" } },
  2762: {
    spot: { Lat: 33.41525, Long: -117.61851666666666, spotName: "T Street" },
  },
  2763: {
    spot: { Lat: 34.4079, Long: -119.87483333333333, spotName: "Devereux" },
  },
  2764: {
    spot: { Lat: 36.9615, Long: -122.11733333333333, spotName: "3 Mile" },
  },
  2765: { spot: { Lat: 32.71391666666667, Long: -117.257, spotName: "Ab" } },
  2766: {
    spot: { Lat: 32.9588, Long: -117.26961666666666, spotName: "15th St." },
  },
  2767: {
    spot: { Lat: 32.814283333333336, Long: -117.275, spotName: "Birdrock" },
  },
  2768: {
    spot: {
      Lat: 32.83685,
      Long: -117.28088333333334,
      spotName: "Marine Street (shorebreak)",
    },
  },
  2769: {
    spot: {
      Lat: 32.05683333333333,
      Long: -116.88243333333334,
      spotName: "Las Salinas (Marina)",
    },
  },
  2770: {
    spot: { Lat: 32.16595, Long: -116.90453333333333, spotName: "La fonda" },
  },
  2771: {
    spot: { Lat: 31.34755, Long: -116.4574, spotName: "Punta Cabras" },
  },
  2772: {
    spot: {
      Lat: 20.738133333333334,
      Long: -105.40283333333333,
      spotName: "Puerto Vallarta",
    },
  },
  2773: {
    spot: { Lat: 23.743483333333334, Long: -106.8453, spotName: "Patoles" },
  },
  2774: {
    spot: {
      Lat: 21.43545,
      Long: -105.20388333333334,
      spotName: "Santa Cruz",
    },
  },
  2775: {
    spot: {
      Lat: 20.748333333333335,
      Long: -105.44196666666667,
      spotName: "La lancha",
    },
  },
  2776: { spot: { Lat: 18.50155, Long: -67.0239, spotName: "Isabela" } },
  2777: {
    spot: { Lat: 18.363, Long: -67.27156666666667, spotName: "Indicators" },
  },
  2778: {
    spot: { Lat: 18.4688, Long: -66.09211666666667, spotName: "La Ocho" },
  },
  2779: {
    spot: { Lat: 18.464283333333334, Long: -67.1686, spotName: "Manglito" },
  },
  2780: {
    spot: {
      Lat: 25.492783333333332,
      Long: 56.36318333333333,
      spotName: "Tim's Reef",
    },
  },
  2781: {
    spot: {
      Lat: 49.130066666666664,
      Long: -125.90606666666666,
      spotName: "Tofino",
    },
  },
  2782: {
    spot: { Lat: 50.5865, Long: -128.23756666666668, spotName: "Raft Cove" },
  },
  2783: {
    spot: {
      Lat: 33.70421666666667,
      Long: -118.2907,
      spotName: "Cabrillo Point",
    },
  },
  2784: {
    spot: {
      Lat: 33.88321666666667,
      Long: -118.41426666666666,
      spotName: "Manhattan Beach Pier",
    },
  },
  2785: {
    spot: {
      Lat: 33.92308333333333,
      Long: -118.43396666666666,
      spotName: "Pipe",
    },
  },
  2786: {
    spot: {
      Lat: 36.817433333333334,
      Long: -121.79336666666667,
      spotName: "Moss Landing",
    },
  },
  2787: {
    spot: {
      Lat: 33.53286666666666,
      Long: -117.77735,
      spotName: "Brooks Street",
    },
  },
  2788: {
    spot: {
      Lat: 33.72286666666667,
      Long: -118.08086666666667,
      spotName: "Anderson Street",
    },
  },
  2789: {
    spot: {
      Lat: 33.46306666666667,
      Long: -117.71348333333333,
      spotName: "Dana Point",
    },
  },
  2790: {
    spot: { Lat: 33.460166666666666, Long: -117.68895, spotName: "Doheny" },
  },
  2791: {
    spot: {
      Lat: 33.47363333333333,
      Long: -117.7222,
      spotName: "Salt Creek Point",
    },
  },
  2792: {
    spot: {
      Lat: 34.44906666666667,
      Long: -119.98778333333334,
      spotName: "ED's",
    },
  },
  2793: { spot: { Lat: 34.68295, Long: -120.60595, spotName: "Surf beach" } },
  2794: {
    spot: {
      Lat: 36.960033333333335,
      Long: -121.98948333333334,
      spotName: "Santa Cruz - Sunny Cove",
    },
  },
  2795: {
    spot: {
      Lat: 33.037216666666666,
      Long: -117.29773333333333,
      spotName: "Boneyards",
    },
  },
  2796: {
    spot: {
      Lat: 32.80133333333333,
      Long: -117.26113333333333,
      spotName: "Law Street",
    },
  },
  2797: {
    spot: {
      Lat: 33.193333333333335,
      Long: -117.38766666666666,
      spotName: "Oceanside Pier",
    },
  },
  2798: {
    spot: { Lat: 32.72736666666667, Long: -117.2561, spotName: "No Surf" },
  },
  2799: {
    spot: {
      Lat: 32.997566666666664,
      Long: -117.27931666666667,
      spotName: "Tabletops  Playgrounds",
    },
  },
  2800: {
    spot: {
      Lat: 18.085516666666667,
      Long: -102.79113333333333,
      spotName: "Rio Nexpa (Nexpa River)",
    },
  },
  2801: {
    spot: {
      Lat: 23.208916666666667,
      Long: -106.42831666666666,
      spotName: "Los pinos",
    },
  },
  2802: {
    spot: { Lat: 23.30355, Long: -106.49185, spotName: "Playa Brueha" },
  },
  2803: {
    spot: {
      Lat: 7.6154166666666665,
      Long: -81.23738333333333,
      spotName: "Punta Brava",
    },
  },
  2804: {
    spot: { Lat: 18.461866666666666, Long: -66.00465, spotName: "Caballos" },
  },
  2805: {
    spot: {
      Lat: 18.344916666666666,
      Long: -67.26193333333333,
      spotName: "Tres palmas",
    },
  },
  2806: {
    spot: {
      Lat: 31.817383333333332,
      Long: 34.64013333333333,
      spotName: "Ashdod -hshover",
    },
  },
  2807: {
    spot: {
      Lat: 25.16485,
      Long: 55.20741666666667,
      spotName: "Surfer's Beach",
    },
  },
  2808: {
    spot: {
      Lat: 41.05818333333333,
      Long: -124.15056666666666,
      spotName: "Trinidad State Beach",
    },
  },
  2809: {
    spot: {
      Lat: 33.88438333333333,
      Long: -118.41236666666667,
      spotName: "Manhattan 26th street",
    },
  },
  2810: {
    spot: {
      Lat: 33.80526666666667,
      Long: -118.39486666666667,
      spotName: "Rat Beach",
    },
  },
  2811: {
    spot: {
      Lat: 38.966883333333335,
      Long: -123.72046666666667,
      spotName: "Manchester Beach",
    },
  },
  2812: {
    spot: {
      Lat: 33.37625,
      Long: -118.47915,
      spotName: "Ben weston (Catalina Island)",
    },
  },
  2813: {
    spot: { Lat: 33.216, Long: -117.4058, spotName: "Camp Pendelton" },
  },
  2814: {
    spot: {
      Lat: 33.382783333333336,
      Long: -117.58868333333334,
      spotName: "Trestles",
    },
  },
  2815: {
    spot: { Lat: 32.75213333333333, Long: -117.2553, spotName: "Avalanche" },
  },
  2816: {
    spot: {
      Lat: 32.3962,
      Long: -119.11651666666667,
      spotName: "Cortez Bank",
    },
  },
  2817: { spot: { Lat: 32.96395, Long: -117.2694, spotName: "Del Mar" } },
  2818: {
    spot: {
      Lat: 32.86771666666667,
      Long: -117.25531666666667,
      spotName: "North Scripps",
    },
  },
  2819: {
    spot: {
      Lat: 32.70693333333333,
      Long: -117.25578333333333,
      spotName: "Pianos",
    },
  },
  2820: {
    spot: {
      Lat: 32.7597,
      Long: -117.25388333333333,
      spotName: "South Mission beach",
    },
  },
  2821: {
    spot: {
      Lat: 32.26808333333334,
      Long: -117.02338333333333,
      spotName: "Mushrooms",
    },
  },
  2822: {
    spot: { Lat: 18.0998, Long: -76.31213333333334, spotName: "Long bay" },
  },
  2823: {
    spot: {
      Lat: 30.9335,
      Long: -116.24221666666666,
      spotName: "Cuatro Casas",
    },
  },
  2824: {
    spot: {
      Lat: 22.89816666666667,
      Long: -109.87031666666667,
      spotName: "Monuments",
    },
  },
  2825: {
    spot: {
      Lat: 22.875366666666668,
      Long: -109.89755,
      spotName: "Lovers Shore Break",
    },
  },
  2826: {
    spot: {
      Lat: 23.023933333333332,
      Long: -109.71586666666667,
      spotName: "Old Man's",
    },
  },
  2827: {
    spot: {
      Lat: 26.233833333333333,
      Long: -112.48541666666667,
      spotName: "Scorpion Bay",
    },
  },
  2828: {
    spot: {
      Lat: 17.794416666666667,
      Long: -101.74753333333334,
      spotName: "Troncones point",
    },
  },
  2829: {
    spot: { Lat: 20.23765, Long: -105.57383333333334, spotName: "El Tecuan" },
  },
  2830: {
    spot: { Lat: 21.18705, Long: -105.22996666666667, spotName: "Lola's" },
  },
  2831: {
    spot: {
      Lat: 23.442033333333335,
      Long: -106.58158333333333,
      spotName: "Rucos",
    },
  },
  2832: {
    spot: { Lat: 8.167933333333334, Long: -81.8662, spotName: "Las Lajas" },
  },
  2833: { spot: { Lat: 18.4527, Long: -65.9569, spotName: "Aviones" } },
  2834: {
    spot: {
      Lat: 18.36895,
      Long: -65.69341666666666,
      spotName: "Luquillo - La Selva",
    },
  },
  2835: {
    spot: {
      Lat: -33.44113333333333,
      Long: 151.44298333333333,
      spotName: "South Pacific",
    },
  },
  2836: {
    spot: { Lat: -30.716683333333332, Long: 30.4783, spotName: "Umtentweni" },
  },
  2837: {
    spot: { Lat: 18.32565, Long: -64.79658333333333, spotName: "Turner Bay" },
  },
  2838: {
    spot: {
      Lat: 32.36618333333333,
      Long: 34.8572,
      spotName: "Neurim  (youth)  beach",
    },
  },
  2839: {
    spot: {
      Lat: 34.243633333333335,
      Long: 35.65866666666667,
      spotName: "Batroun",
    },
  },
  2840: {
    spot: {
      Lat: 44.644216666666665,
      Long: -63.35945,
      spotName: "Lawrencetown - Plan B",
    },
  },
  2841: {
    spot: {
      Lat: 49.65898333333333,
      Long: -126.84433333333334,
      spotName: "Nootka Island",
    },
  },
  2842: {
    spot: {
      Lat: 48.56735,
      Long: -124.41003333333333,
      spotName: "Port Renfrew",
    },
  },
  2843: {
    spot: {
      Lat: 41.03521666666666,
      Long: -124.12345,
      spotName: "Camel Rock",
    },
  },
  2844: {
    spot: {
      Lat: 48.4942,
      Long: -124.29623333333333,
      spotName: "Sombrio Beach",
    },
  },
  2845: {
    spot: { Lat: 33.42055, Long: -117.68623333333333, spotName: "Birdhits" },
  },
  2846: { spot: { Lat: 34.03275, Long: -118.6787, spotName: "Malibu" } },
  2847: {
    spot: {
      Lat: 33.98493333333333,
      Long: -118.47681666666666,
      spotName: "Venice Breakwater",
    },
  },
  2848: {
    spot: {
      Lat: 33.97806666666666,
      Long: -118.46891666666667,
      spotName: "Venice Pier",
    },
  },
  2849: {
    spot: {
      Lat: 33.73835,
      Long: -118.11013333333334,
      spotName: "Seal Beach",
    },
  },
  2850: {
    spot: {
      Lat: 33.492733333333334,
      Long: -117.73486666666666,
      spotName: "Three Arch Bay",
    },
  },
  2851: { spot: { Lat: 37.0094, Long: -122.19165, spotName: "Davenport" } },
  2852: {
    spot: {
      Lat: 32.6681,
      Long: -117.23661666666666,
      spotName: "Point Loma (Ralph's)",
    },
  },
  2853: {
    spot: {
      Lat: 32.7823,
      Long: -117.25588333333333,
      spotName: "Santa Clara Court",
    },
  },
  2854: {
    spot: { Lat: 33.020466666666664, Long: -117.2863, spotName: "Suckouts" },
  },
  2855: {
    spot: {
      Lat: 29.61425,
      Long: -115.49973333333334,
      spotName: "Punta San Carlos",
    },
  },
  2856: {
    spot: {
      Lat: 31.97683333333333,
      Long: -116.79058333333333,
      spotName: "Salsipuedes",
    },
  },
  2857: {
    spot: {
      Lat: 26.709266666666668,
      Long: -113.57596666666667,
      spotName: "Punta Abreojos",
    },
  },
  2858: {
    spot: {
      Lat: 19.104616666666665,
      Long: -96.09673333333333,
      spotName: "Costalitos",
    },
  },
  2859: {
    spot: {
      Lat: 21.225066666666667,
      Long: -86.72985,
      spotName: "Isla Mujeres",
    },
  },
  2860: {
    spot: { Lat: 17.617733333333334, Long: -63.25545, spotName: "Fort Bay" },
  },
  2861: {
    spot: { Lat: 9.635333333333334, Long: -79.5569, spotName: "Isla Grande" },
  },
  2862: {
    spot: {
      Lat: 9.340983333333334,
      Long: -82.23928333333333,
      spotName: "Punch Reef",
    },
  },
  2863: {
    spot: {
      Lat: 18.468316666666666,
      Long: -66.23708333333333,
      spotName: "El Unico",
    },
  },
  2864: {
    spot: { Lat: 18.44445, Long: -66.01116666666667, spotName: "Pine Grove" },
  },
  2865: {
    spot: {
      Lat: 18.399066666666666,
      Long: -67.18988333333333,
      spotName: "Table Rock",
    },
  },
  2866: {
    spot: {
      Lat: 32.251933333333334,
      Long: -64.82131666666666,
      spotName: "Horseshoe Bay Beach",
    },
  },
  2867: {
    spot: {
      Lat: 11.406266666666667,
      Long: -86.04801666666667,
      spotName: "Colorado",
    },
  },
  2868: {
    spot: { Lat: 32.38518333333333, Long: 34.8618, spotName: "Bet Yanay" },
  },
  2869: {
    spot: {
      Lat: 32.18058333333333,
      Long: 34.80125,
      spotName: "Zvulun Beach",
    },
  },
  2870: { spot: { Lat: 31.61295, Long: 34.50435, spotName: "Ziqim Beach" } },
  2871: {
    spot: {
      Lat: 33.66643333333333,
      Long: 35.416383333333336,
      spotName: "Mostafa Spot",
    },
  },
  2872: { spot: { Lat: 44.14015, Long: -64.50665, spotName: "Cherry Hill" } },
  2873: {
    spot: {
      Lat: 49.00185,
      Long: -125.63973333333334,
      spotName: "Jackie's Hole - No Rooks",
    },
  },
  2874: {
    spot: {
      Lat: 49.07091666666667,
      Long: -125.76521666666666,
      spotName: "Long Beach",
    },
  },
  2875: {
    spot: {
      Lat: 48.419866666666664,
      Long: -124.05621666666667,
      spotName: "Jordan river",
    },
  },
  2876: {
    spot: {
      Lat: 33.93006666666667,
      Long: -118.43663333333333,
      spotName: "Dockweiler Beach",
    },
  },
  2877: {
    spot: {
      Lat: 33.911633333333334,
      Long: -118.42733333333334,
      spotName: "El Segundo Beach Jetty",
    },
  },
  2878: { spot: { Lat: -0, Long: -0, spotName: "Dominators" } },
  2879: {
    spot: {
      Lat: 33.78788333333333,
      Long: -118.41656666666667,
      spotName: "Indicator",
    },
  },
  2880: {
    spot: {
      Lat: 38.91448333333334,
      Long: -123.711,
      spotName: "Point Arena Cove",
    },
  },
  2881: {
    spot: {
      Lat: 36.699133333333336,
      Long: -121.80993333333333,
      spotName: "Marina",
    },
  },
  2882: {
    spot: {
      Lat: 33.419783333333335,
      Long: -117.62148333333333,
      spotName: "San Clemente Pier",
    },
  },
  2883: {
    spot: {
      Lat: 34.39918333333333,
      Long: -119.70168333333334,
      spotName: "Leadbetter",
    },
  },
  2884: {
    spot: {
      Lat: 34.407716666666666,
      Long: -119.88073333333334,
      spotName: "Sands",
    },
  },
  2885: {
    spot: {
      Lat: 34.40806666666667,
      Long: -119.55161666666666,
      spotName: "Santa Clause",
    },
  },
  2886: {
    spot: {
      Lat: 36.96435,
      Long: -121.95876666666666,
      spotName: "Santa Cruz - 41st privates",
    },
  },
  2887: {
    spot: {
      Lat: 36.953716666666665,
      Long: -121.9759,
      spotName: "Santa Cruz - RockView St",
    },
  },
  2888: {
    spot: {
      Lat: 32.93593333333333,
      Long: -117.26293333333334,
      spotName: "North Torrey Pines",
    },
  },
  2889: {
    spot: {
      Lat: 33.03446666666667,
      Long: -117.29231666666666,
      spotName: "Swamis",
    },
  },
  2890: {
    spot: {
      Lat: 14.807833333333333,
      Long: -61.01473333333333,
      spotName: "Anse Charpentier (right)",
    },
  },
  2891: {
    spot: {
      Lat: 32.26766666666666,
      Long: -117.01933333333334,
      spotName: "Calafia",
    },
  },
  2892: {
    spot: {
      Lat: 27.85755,
      Long: -115.16078333333333,
      spotName: "Isla Natividad",
    },
  },
  2893: { spot: { Lat: 15.87515, Long: -95.7771, spotName: "La jolla" } },
  2894: {
    spot: {
      Lat: 7.2385166666666665,
      Long: -80.51965,
      spotName: "411 (quatro-once)",
    },
  },
  2895: {
    spot: {
      Lat: 18.490883333333333,
      Long: -66.86778333333334,
      spotName: "El Peñon Amador",
    },
  },
  2896: { spot: { Lat: 32.8122, Long: 34.9543, spotName: "The Reef" } },
  2897: {
    spot: {
      Lat: 34.06053333333333,
      Long: 35.641816666666664,
      spotName: "Nahr brahim",
    },
  },
  2898: {
    spot: {
      Lat: 36.47003333333333,
      Long: 34.169533333333334,
      spotName: "Stone Tombs",
    },
  },
  2899: {
    spot: {
      Lat: 25.139716666666665,
      Long: 55.189,
      spotName: "Dubai Wave Pool",
    },
  },
  2900: {
    spot: { Lat: 44.25885, Long: -64.27036666666666, spotName: "Hirtles" },
  },
  2901: {
    spot: {
      Lat: 49.10196666666667,
      Long: -125.88031666666667,
      spotName: "Cox Bay",
    },
  },
  2902: {
    spot: {
      Lat: 49.06851666666667,
      Long: -125.80356666666667,
      spotName: "Chesterman Beach",
    },
  },
  2903: {
    spot: { Lat: 40.77428333333334, Long: -124.2255, spotName: "Bunkers" },
  },
  2904: {
    spot: {
      Lat: 33.737766666666666,
      Long: -118.37601666666667,
      spotName: "Abalone Cove",
    },
  },
  2905: {
    spot: {
      Lat: 33.722366666666666,
      Long: -118.33735,
      spotName: "Japs Cove",
    },
  },
  2906: {
    spot: {
      Lat: 33.77133333333333,
      Long: -118.42603333333334,
      spotName: "Lunada Bay",
    },
  },
  2907: {
    spot: { Lat: 34.03855, Long: -118.55278333333334, spotName: "Sunset" },
  },
  2908: {
    spot: {
      Lat: 33.553416666666664,
      Long: -117.82768333333334,
      spotName: "Scotchmans Cove",
    },
  },
  2909: {
    spot: { Lat: 37.114466666666665, Long: -122.3113, spotName: "Ano Nuevo" },
  },
  2910: {
    spot: { Lat: 36.96556666666667, Long: -122.12505, spotName: "4 Mile" },
  },
  2911: {
    spot: {
      Lat: 33.2177,
      Long: -117.40691666666666,
      spotName: "Del Mar Jetties",
    },
  },
  2912: {
    spot: {
      Lat: 32.86566666666667,
      Long: -117.25636666666666,
      spotName: "Scripps",
    },
  },
  2913: {
    spot: {
      Lat: 31.258566666666667,
      Long: -116.37453333333333,
      spotName: "K-181",
    },
  },
  2914: {
    spot: {
      Lat: 31.46388333333333,
      Long: -116.59068333333333,
      spotName: "Punta San Jose",
    },
  },
  2915: {
    spot: { Lat: 32.2478, Long: -116.94883333333334, spotName: "Raul's" },
  },
  2916: {
    spot: { Lat: 19.16325, Long: -96.09603333333334, spotName: "Destapador" },
  },
  2917: {
    spot: {
      Lat: 15.931033333333334,
      Long: -93.80865,
      spotName: "Puerto Arista",
    },
  },
  2918: {
    spot: {
      Lat: 11.1967,
      Long: -60.797383333333336,
      spotName: "Mount Irvine Bay",
    },
  },
  2919: {
    spot: {
      Lat: -20.319066666666668,
      Long: 13.233466666666667,
      spotName: "Torra Bay",
    },
  },
  2920: {
    spot: {
      Lat: 32.473616666666665,
      Long: 34.883833333333335,
      spotName: "HA-ARUBOT",
    },
  },
  2921: {
    spot: {
      Lat: 32.08871666666667,
      Long: 34.76871666666667,
      spotName: "Hilton",
    },
  },
  2922: {
    spot: {
      Lat: 32.32471666666667,
      Long: 34.849666666666664,
      spotName: "Sironit Beach",
    },
  },
  2923: {
    spot: {
      Lat: 25.142966666666666,
      Long: 56.35735,
      spotName: "Fujairah Port",
    },
  },
  2924: {
    spot: {
      Lat: 57.006166666666665,
      Long: -135.63995,
      spotName: "Shoals Reef",
    },
  },
  2925: {
    spot: {
      Lat: 33.78263333333334,
      Long: -118.42296666666667,
      spotName: "Pipes & Turbos",
    },
  },
  2926: { spot: { Lat: 39.4183, Long: -123.81385, spotName: "Hare Creek" } },
  2927: {
    spot: {
      Lat: 34.396566666666665,
      Long: -119.73128333333334,
      spotName: "Mesa Lane",
    },
  },
  2928: {
    spot: { Lat: 34.460766666666665, Long: -120.07315, spotName: "Refugio" },
  },
  2929: {
    spot: {
      Lat: 37.07783333333333,
      Long: -122.26766666666667,
      spotName: "Greyhound Rock",
    },
  },
  2930: {
    spot: {
      Lat: 36.931666666666665,
      Long: -121.86348333333333,
      spotName: "Manresa",
    },
  },
  2931: {
    spot: { Lat: 32.72946666666667, Long: -117.2566, spotName: "Bird Shit" },
  },
  2932: {
    spot: { Lat: 32.69055, Long: -117.28805, spotName: "Little Waimea" },
  },
  2933: {
    spot: { Lat: 32.8387, Long: -117.28228333333334, spotName: "Horseshoe" },
  },
  2934: {
    spot: { Lat: 32.7478, Long: -117.25393333333334, spotName: "OB pier" },
  },
  2935: {
    spot: {
      Lat: 33.0258,
      Long: -117.28788333333334,
      spotName: "Pipes - San elijo state beach",
    },
  },
  2936: {
    spot: { Lat: 32.55455, Long: -117.13003333333333, spotName: "Sloughs" },
  },
  2937: { spot: { Lat: 35.37165, Long: -120.86675, spotName: "The Pit" } },
  2938: {
    spot: {
      Lat: 35.290016666666666,
      Long: -120.88505,
      spotName: "Hazard Canyon",
    },
  },
  2939: {
    spot: {
      Lat: 35.13826666666667,
      Long: -120.64468333333333,
      spotName: "Pismo Beach",
    },
  },
  2940: {
    spot: { Lat: 35.30393333333333, Long: -120.8767, spotName: "Sand Spit" },
  },
  2941: {
    spot: {
      Lat: 37.46456666666667,
      Long: -122.447,
      spotName: "Francis Beach",
    },
  },
  2942: {
    spot: {
      Lat: 34.12071666666667,
      Long: -119.15921666666667,
      spotName: "Arnold",
    },
  },
  2943: { spot: { Lat: 34.06235, Long: -118.9897, spotName: "Deer Creek" } },
  2944: {
    spot: {
      Lat: 34.15448333333333,
      Long: -119.21886666666667,
      spotName: "Silverstrand",
    },
  },
  2945: {
    spot: {
      Lat: 34.17016666666667,
      Long: -119.23358333333333,
      spotName: "Hollywood Beach",
    },
  },
  2946: {
    spot: {
      Lat: 34.096133333333334,
      Long: -119.1135,
      spotName: "Point Mugu",
    },
  },
  2947: {
    spot: { Lat: 35.10131666666667, Long: -120.63275, spotName: "Oceano" },
  },
  2948: {
    spot: { Lat: 37.59825, Long: -122.50313333333334, spotName: "Linda Mar" },
  },
  2949: {
    spot: { Lat: 37.9038, Long: -122.68373333333334, spotName: "Bolinas" },
  },
  2950: {
    spot: {
      Lat: 37.830866666666665,
      Long: -122.5397,
      spotName: "Fort Cronkite (Rodeo Beach)",
    },
  },
  2951: {
    spot: { Lat: 35.2821, Long: -120.88801666666667, spotName: "Left Spot" },
  },
  2952: {
    spot: {
      Lat: 34.286516666666664,
      Long: -119.32868333333333,
      spotName: "Emma Wood",
    },
  },
  2953: {
    spot: {
      Lat: 34.0846,
      Long: -119.04946666666666,
      spotName: "Super Tubes",
    },
  },
  2954: {
    spot: {
      Lat: 32.93006666666667,
      Long: -117.26285,
      spotName: "Torrey Pines State Beach",
    },
  },
  2955: {
    spot: {
      Lat: 33.12865,
      Long: -117.3336,
      spotName: "Terra Mar Cove + Point",
    },
  },
  2956: {
    spot: { Lat: 35.44486666666667, Long: -120.9067, spotName: "Mouse Rock" },
  },
  2957: {
    spot: {
      Lat: 34.351083333333335,
      Long: -119.4419,
      spotName: "Little Rincon",
    },
  },
  2958: { spot: { Lat: 37.599, Long: -122.50185, spotName: "Linda Mar" } },
  2959: {
    spot: {
      Lat: 27.532783333333334,
      Long: -82.74318333333333,
      spotName: "Anna Maria Island - Beach Streets",
    },
  },
  2960: { spot: { Lat: 32.8046, Long: -117.2638, spotName: "Tourmaline" } },
  2961: {
    spot: { Lat: 33.02195, Long: -117.28846666666666, spotName: "Turtles" },
  },
  2962: {
    spot: {
      Lat: 32.829433333333334,
      Long: -117.28266666666667,
      spotName: "Windansea",
    },
  },
  2963: { spot: { Lat: -0, Long: -0, spotName: "Martins beach" } },
  2964: {
    spot: { Lat: 37.49305, Long: -122.49948333333333, spotName: "Mavericks" },
  },
  2965: {
    spot: {
      Lat: 37.942883333333334,
      Long: -122.77676666666666,
      spotName: "Double point",
    },
  },
  2966: { spot: { Lat: 37.75355, Long: -122.5119, spotName: "Ocean Beach" } },
  2967: {
    spot: {
      Lat: 37.565333333333335,
      Long: -122.51536666666667,
      spotName: "Gray Whale Cove",
    },
  },
  2968: {
    spot: {
      Lat: 33.33485,
      Long: -117.50795,
      spotName: "Trails - San Onofre State Beach",
    },
  },
  2969: { spot: { Lat: 34.3739, Long: -119.4743, spotName: "Rincon" } },
  2970: {
    spot: { Lat: 35.445566666666664, Long: -120.90415, spotName: "Cayucos" },
  },
  2971: {
    spot: {
      Lat: 35.56928333333333,
      Long: -121.11208333333333,
      spotName: "Moonstone",
    },
  },
  2972: {
    spot: {
      Lat: 37.81066666666667,
      Long: -122.47636666666666,
      spotName: "Fort Point",
    },
  },
  2973: {
    spot: { Lat: 34.319916666666664, Long: -119.3776, spotName: "Faria" },
  },
  2974: {
    spot: {
      Lat: 37.55226666666667,
      Long: -122.51406666666666,
      spotName: "Montara",
    },
  },
  2975: {
    spot: {
      Lat: 37.500683333333335,
      Long: -122.47103333333334,
      spotName: "Princeton Breakwater",
    },
  },
  2976: {
    spot: {
      Lat: 38.31138333333333,
      Long: -123.04481666666666,
      spotName: "Doran Beach",
    },
  },
  2977: {
    spot: {
      Lat: 34.051966666666665,
      Long: -118.96086666666666,
      spotName: "County Line",
    },
  },
  2978: {
    spot: {
      Lat: 37.60978333333333,
      Long: -122.49738333333333,
      spotName: "Rockaway Beach",
    },
  },
  2979: {
    spot: {
      Lat: 38.25163333333333,
      Long: -122.97023333333334,
      spotName: "Dillon Beach",
    },
  },
  2980: { spot: { Lat: 38.3558, Long: -123.0696, spotName: "Salmon Creek" } },
  2981: {
    spot: { Lat: 35.403166666666664, Long: -120.86955, spotName: "A-Beach" },
  },
  2982: {
    spot: { Lat: 37.8954, Long: -122.70046666666667, spotName: "RCA" },
  },
  2983: {
    spot: {
      Lat: 37.599133333333334,
      Long: -122.51781666666666,
      spotName: "Pedro Point",
    },
  },
  2984: {
    spot: { Lat: 34.2734, Long: -119.30475, spotName: "Ventura Point" },
  },
  2985: {
    spot: {
      Lat: 38.07801666666667,
      Long: -122.97535,
      spotName: "North beach, pt reyes",
    },
  },
  2986: {
    spot: {
      Lat: 34.18995,
      Long: -119.24461666666667,
      spotName: "Oxnard Shores",
    },
  },
  2987: {
    spot: {
      Lat: 27.92435,
      Long: -82.84253333333334,
      spotName: "Bellair Beach",
    },
  },
  2988: {
    spot: {
      Lat: 30.12545,
      Long: -85.73498333333333,
      spotName: "St. Andrews State Park",
    },
  },
  2989: {
    spot: {
      Lat: 29.17675,
      Long: -94.97063333333334,
      spotName: "Jamaica Beach",
    },
  },
  2990: {
    spot: {
      Lat: 28.124216666666666,
      Long: -82.82523333333333,
      spotName: "Honeymoon island",
    },
  },
  2991: {
    spot: {
      Lat: 27.810033333333333,
      Long: -82.81171666666667,
      spotName: "Redington Breakwater",
    },
  },
  2992: {
    spot: {
      Lat: 26.093783333333334,
      Long: -97.16583333333334,
      spotName: "South Padre Island",
    },
  },
  2993: {
    spot: {
      Lat: 20.227883333333335,
      Long: -155.74646666666666,
      spotName: "Keokea beach park",
    },
  },
  2994: {
    spot: {
      Lat: 20.938616666666668,
      Long: -156.26083333333332,
      spotName: "Jaws",
    },
  },
  2995: {
    spot: {
      Lat: 21.292666666666666,
      Long: -157.86566666666667,
      spotName: "Flies (incinerators)",
    },
  },
  2996: {
    spot: {
      Lat: 27.743883333333333,
      Long: -82.76005,
      spotName: "Sunset Beach",
    },
  },
  2997: { spot: { Lat: 26.2877, Long: -81.83135, spotName: "Wiggins Pass" } },
  2998: {
    spot: { Lat: 29.84765, Long: -88.83545, spotName: "Chandeleur Islands" },
  },
  2999: {
    spot: {
      Lat: 22.223166666666668,
      Long: -159.49603333333334,
      spotName: "Pu`u poa",
    },
  },
  3000: {
    spot: {
      Lat: 20.933366666666668,
      Long: -156.35885,
      spotName: "Hookipa beach",
    },
  },
  3001: {
    spot: { Lat: 21.6242, Long: -158.08151666666666, spotName: "Chuns Reef" },
  },
  3002: {
    spot: {
      Lat: 21.666066666666666,
      Long: -158.05103333333332,
      spotName: "Ehukai",
    },
  },
  3003: {
    spot: {
      Lat: 30.3936,
      Long: -86.60093333333333,
      spotName: "Fort Walton Pier",
    },
  },
  3004: {
    spot: {
      Lat: 30.331916666666668,
      Long: -87.13926666666667,
      spotName: "Pensacola beach",
    },
  },
  3005: {
    spot: { Lat: 29.265, Long: -94.82616666666667, spotName: "Galveston" },
  },
  3006: {
    spot: {
      Lat: 20.254333333333335,
      Long: -155.88523333333333,
      spotName: "Coast Guard",
    },
  },
  3007: {
    spot: {
      Lat: 28.939816666666665,
      Long: -95.293,
      spotName: "Surfside beach - Octagone",
    },
  },
  3008: {
    spot: {
      Lat: 29.517983333333333,
      Long: -94.89125,
      spotName: "Refish Island",
    },
  },
  3009: {
    spot: {
      Lat: 20.242216666666668,
      Long: -155.77416666666667,
      spotName: "Kohala lighthouse",
    },
  },
  3010: {
    spot: {
      Lat: 22.147616666666668,
      Long: -159.30501666666666,
      spotName: "Anahola Bay",
    },
  },
  3011: {
    spot: {
      Lat: 19.755966666666666,
      Long: -155.09013333333334,
      spotName: "Honolii",
    },
  },
  3012: {
    spot: {
      Lat: 22.227783333333335,
      Long: -159.44866666666667,
      spotName: "Anini Beach- Wires",
    },
  },
  3013: {
    spot: {
      Lat: 21.957633333333334,
      Long: -159.35006666666666,
      spotName: "Kalapaki Beach",
    },
  },
  3014: {
    spot: {
      Lat: 19.695116666666667,
      Long: -156.04533333333333,
      spotName: "Pine Trees",
    },
  },
  3015: { spot: { Lat: 21.93385, Long: -159.651, spotName: "Pakala" } },
  3016: {
    spot: {
      Lat: 22.209616666666665,
      Long: -159.50745,
      spotName: "Hanalei Bay",
    },
  },
  3017: { spot: { Lat: 22.213, Long: -159.51715, spotName: "Waikokos" } },
  3018: {
    spot: {
      Lat: 21.36253333333333,
      Long: -157.70933333333335,
      spotName: "Bellows",
    },
  },
  3019: {
    spot: { Lat: 21.667683333333333, Long: -158.0521, spotName: "Backdoor" },
  },
  3020: {
    spot: {
      Lat: 21.280883333333332,
      Long: -157.84388333333334,
      spotName: "Ala Moana Bowls",
    },
  },
  3021: { spot: { Lat: 21.27625, Long: -157.82925, spotName: "Canoe's" } },
  3022: {
    spot: {
      Lat: 21.252533333333332,
      Long: -157.80411666666666,
      spotName: "Cliffs",
    },
  },
  3023: {
    spot: {
      Lat: 27.9812,
      Long: -82.82903333333333,
      spotName: "Clearwater beach - The Waffle House",
    },
  },
  3024: {
    spot: {
      Lat: 29.656733333333335,
      Long: -84.8814,
      spotName: "St. George Island",
    },
  },
  3025: {
    spot: {
      Lat: 30.12545,
      Long: -85.73498333333333,
      spotName: "The Pass(Amazons)",
    },
  },
  3026: {
    spot: {
      Lat: 19.581183333333332,
      Long: -155.96801666666667,
      spotName: "Kahalu'u",
    },
  },
  3027: {
    spot: {
      Lat: 19.810316666666665,
      Long: -156.00688333333332,
      spotName: "Kua Bay",
    },
  },
  3028: {
    spot: {
      Lat: 20.883633333333332,
      Long: -156.68908333333334,
      spotName: "Mala wharf",
    },
  },
  3029: {
    spot: {
      Lat: 19.602833333333333,
      Long: -155.97631666666666,
      spotName: "Lymans",
    },
  },
  3030: {
    spot: {
      Lat: 22.218216666666667,
      Long: -159.38488333333333,
      spotName: "Kilauea Bay Beach (Rock Quarry)",
    },
  },
  3031: { spot: { Lat: 22.09945, Long: -159.3041, spotName: "Kealia" } },
  3032: {
    spot: { Lat: 20.809233333333335, Long: -156.6152, spotName: "Olowalu" },
  },
  3033: {
    spot: {
      Lat: 29.287016666666666,
      Long: -94.7913,
      spotName: "Galveston - Flagship",
    },
  },
  3034: {
    spot: { Lat: 30.3859, Long: -86.43288333333334, spotName: "Destin" },
  },
  3035: {
    spot: {
      Lat: 29.086716666666668,
      Long: -90.22206666666666,
      spotName: "Fourchon",
    },
  },
  3036: {
    spot: {
      Lat: 19.594116666666668,
      Long: -155.97176666666667,
      spotName: "Magics",
    },
  },
  3037: {
    spot: {
      Lat: 21.880766666666666,
      Long: -159.47563333333332,
      spotName: "PK's",
    },
  },
  3038: {
    spot: { Lat: 21.874916666666667, Long: -159.45945, spotName: "Poipu" },
  },
  3039: {
    spot: {
      Lat: 20.869516666666666,
      Long: -156.67933333333335,
      spotName: "Lahaina Harbor - Break Wall",
    },
  },
  3040: {
    spot: {
      Lat: 20.593216666666667,
      Long: -156.41445,
      spotName: "La Perouse Bay",
    },
  },
  3041: {
    spot: {
      Lat: 20.634333333333334,
      Long: -156.45181666666667,
      spotName: "Little beach",
    },
  },
  3042: {
    spot: {
      Lat: 20.85868333333333,
      Long: -156.66988333333333,
      spotName: "Puamana",
    },
  },
  3043: {
    spot: {
      Lat: 21.2962,
      Long: -158.07336666666666,
      spotName: "Barber's Point - Coast Guard Jetty",
    },
  },
  3044: {
    spot: {
      Lat: 21.263833333333334,
      Long: -157.71175,
      spotName: "China walls",
    },
  },
  3045: {
    spot: {
      Lat: 27.827533333333335,
      Long: -97.05266666666667,
      spotName: "Horace Caldwell Pier",
    },
  },
  3046: {
    spot: { Lat: 28.59675, Long: -95.97673333333333, spotName: "Matagorda" },
  },
  3047: {
    spot: {
      Lat: 22.164933333333334,
      Long: -159.3082,
      spotName: "Flags - aliomanu reef",
    },
  },
  3048: {
    spot: {
      Lat: 21.315816666666667,
      Long: -157.66545,
      spotName: "Baby Makapuu",
    },
  },
  3049: {
    spot: { Lat: 21.28275, Long: -157.84873333333334, spotName: "Bomboras" },
  },
  3050: {
    spot: {
      Lat: 28.203683333333334,
      Long: -82.82523333333333,
      spotName: "Anclote Island",
    },
  },
  3051: {
    spot: {
      Lat: 30.328516666666665,
      Long: -87.15825,
      spotName: "The Cross (Pensacola Beach)",
    },
  },
  3052: {
    spot: {
      Lat: 27.113116666666667,
      Long: -82.4693,
      spotName: "Venice North Jetty",
    },
  },
  3053: {
    spot: {
      Lat: 27.5823,
      Long: -97.21823333333333,
      spotName: "Bob Hall Pier",
    },
  },
  3054: {
    spot: {
      Lat: 19.992016666666668,
      Long: -155.82651666666666,
      spotName: "Hapuna",
    },
  },
  3055: {
    spot: { Lat: 28.941083333333335, Long: -95.29275, spotName: "Surfside" },
  },
  3056: {
    spot: { Lat: 19.628416666666666, Long: -155.98925, spotName: "Honls" },
  },
  3057: {
    spot: {
      Lat: 19.623933333333333,
      Long: -155.98616666666666,
      spotName: "Kona Tiki",
    },
  },
  3058: {
    spot: { Lat: 22.2201, Long: -159.4262, spotName: "Kalihiwai point" },
  },
  3059: {
    spot: { Lat: 22.2284, Long: -159.56313333333333, spotName: "Tunnels" },
  },
  3060: {
    spot: {
      Lat: 20.86253333333333,
      Long: -156.1655,
      spotName: "Honomanu Bay",
    },
  },
  3061: {
    spot: {
      Lat: 20.791316666666667,
      Long: -156.50905,
      spotName: "Ma'alaea - Freight trains",
    },
  },
  3062: {
    spot: {
      Lat: 27.4599,
      Long: -82.69705,
      spotName: "Bradenton- twin piers",
    },
  },
  3063: {
    spot: {
      Lat: 27.735533333333333,
      Long: -82.75121666666666,
      spotName: "Upham Beach",
    },
  },
  3064: {
    spot: {
      Lat: 29.519916666666667,
      Long: -94.46551666666667,
      spotName: "Bolivar",
    },
  },
  3065: {
    spot: {
      Lat: 27.615099999999998,
      Long: -97.20016666666666,
      spotName: "Corpus Christi",
    },
  },
  3066: { spot: { Lat: 28.9332, Long: -95.3021, spotName: "Quintanas" } },
  3067: {
    spot: { Lat: 22.224533333333333, Long: -159.57125, spotName: "Cannons" },
  },
  3068: {
    spot: { Lat: 20.93315, Long: -156.35821666666666, spotName: "Hookipa" },
  },
  3069: {
    spot: {
      Lat: 20.8293,
      Long: -156.36703333333332,
      spotName: "Ka'anapali coast",
    },
  },
  3070: { spot: { Lat: 21.59415, Long: -158.10815, spotName: "Haleiwa" } },
  3071: {
    spot: {
      Lat: 29.306116666666668,
      Long: -94.77128333333333,
      spotName: "Galveston - Stewart Beach",
    },
  },
  3072: {
    spot: {
      Lat: 26.143416666666667,
      Long: -81.79836666666667,
      spotName: "Naples Pier",
    },
  },
  3073: {
    spot: {
      Lat: 27.616083333333332,
      Long: -97.20016666666666,
      spotName: "Packery Channel",
    },
  },
  3074: {
    spot: {
      Lat: 22.225233333333332,
      Long: -159.57778333333334,
      spotName: "Bobo's Haena",
    },
  },
  3075: {
    spot: {
      Lat: 27.817816666666666,
      Long: -97.05871666666667,
      spotName: "Port Aransas",
    },
  },
  3076: {
    spot: {
      Lat: 19.754783333333332,
      Long: -155.09118333333333,
      spotName: "Honoli'i",
    },
  },
  3077: {
    spot: {
      Lat: 21.87345,
      Long: -159.43561666666668,
      spotName: "Shipwrecks - Hyatt beach",
    },
  },
  3078: {
    spot: {
      Lat: 20.727766666666668,
      Long: -156.4504,
      spotName: "Kihei Cove",
    },
  },
  3079: {
    spot: { Lat: 29.81205, Long: -85.30275, spotName: "Port st.joe cape" },
  },
  3080: {
    spot: {
      Lat: 27.951116666666667,
      Long: -82.83305,
      spotName: "Sand Key Park",
    },
  },
  3081: {
    spot: {
      Lat: 26.5655,
      Long: -97.27638333333333,
      spotName: "Mansfield Jetty",
    },
  },
  3082: {
    spot: {
      Lat: 19.778216666666665,
      Long: -155.08888333333334,
      spotName: "Papaikou Mill",
    },
  },
  3083: {
    spot: {
      Lat: 20.843083333333333,
      Long: -156.65301666666667,
      spotName: "Launiupoko Beach Park",
    },
  },
  3084: {
    spot: {
      Lat: 27.893933333333333,
      Long: -82.84825,
      spotName: "Indian Rocks Beach",
    },
  },
  3085: {
    spot: {
      Lat: 19.606616666666667,
      Long: -155.97711666666666,
      spotName: "Banyons",
    },
  },
  3086: {
    spot: {
      Lat: 19.457483333333332,
      Long: -154.84276666666668,
      spotName: "Pohoiki",
    },
  },
  3087: {
    spot: {
      Lat: 21.015116666666668,
      Long: -156.6398,
      spotName: "Honolua Bay",
    },
  },
  3088: {
    spot: { Lat: 20.89935, Long: -156.4752, spotName: "Kahului Harbor" },
  },
  3089: {
    spot: { Lat: 21.28005, Long: -157.84078333333332, spotName: "Kaisers" },
  },
  3090: {
    spot: { Lat: 21.3615, Long: -158.13275, spotName: "Nanakuli tracks" },
  },
  3091: {
    spot: {
      Lat: 21.4543,
      Long: -157.74851666666666,
      spotName: "North Beach Pyramid Rock",
    },
  },
  3092: {
    spot: { Lat: 21.66785, Long: -158.05056666666667, spotName: "Pipeline" },
  },
  3093: {
    spot: {
      Lat: 41.03875,
      Long: -71.91378333333333,
      spotName: "Ditch Plains",
    },
  },
  3094: {
    spot: {
      Lat: 40.931916666666666,
      Long: -72.22953333333334,
      spotName: "Georgica pond",
    },
  },
  3095: {
    spot: {
      Lat: 40.787866666666666,
      Long: -72.66283333333334,
      spotName: "Jetty 4",
    },
  },
  3096: {
    spot: {
      Lat: 41.03908333333333,
      Long: -71.91053333333333,
      spotName: "Trailor Park",
    },
  },
  3097: {
    spot: {
      Lat: 39.27543333333333,
      Long: -74.5662,
      spotName: "Ocean City - 7th Street",
    },
  },
  3098: {
    spot: {
      Lat: 40.01266666666667,
      Long: -74.05601666666666,
      spotName: "Normandy Beach - 7th Street",
    },
  },
  3099: {
    spot: { Lat: 21.6303, Long: -157.92096666666666, spotName: "Pounders" },
  },
  3100: {
    spot: { Lat: 21.271766666666668, Long: -157.8233, spotName: "Walls" },
  },
  3101: {
    spot: {
      Lat: 21.601533333333332,
      Long: -158.10511666666667,
      spotName: "Puaena Point",
    },
  },
  3102: {
    spot: {
      Lat: 40.7721,
      Long: -72.73026666666667,
      spotName: "Cupsogue beach",
    },
  },
  3103: {
    spot: {
      Lat: 40.58233333333333,
      Long: -73.69965,
      spotName: "Connecticut Street Jetty",
    },
  },
  3104: {
    spot: {
      Lat: 40.84035,
      Long: -72.47958333333334,
      spotName: "Ponquogue- the bowl",
    },
  },
  3105: {
    spot: {
      Lat: 40.83088333333333,
      Long: -72.48255,
      spotName: "Outside Ponquogue",
    },
  },
  3106: {
    spot: {
      Lat: 40.620216666666664,
      Long: -73.3066,
      spotName: "Democrat Point (Robert Moses)",
    },
  },
  3107: {
    spot: {
      Lat: 40.58886666666667,
      Long: -73.73036666666667,
      spotName: "Jones Beach",
    },
  },
  3108: {
    spot: {
      Lat: 40.62515,
      Long: -73.26661666666666,
      spotName: "Robert Moses",
    },
  },
  3109: {
    spot: {
      Lat: 40.73555,
      Long: -72.85446666666667,
      spotName: "Smith point",
    },
  },
  3110: {
    spot: {
      Lat: 21.273183333333332,
      Long: -157.83731666666668,
      spotName: "Three's",
    },
  },
  3111: {
    spot: { Lat: 21.641766666666665, Long: -158.063, spotName: "Waimea Bay" },
  },
  3112: {
    spot: {
      Lat: 21.303566666666665,
      Long: -158.0453,
      spotName: "White Plains Beach",
    },
  },
  3113: {
    spot: {
      Lat: 40.616816666666665,
      Long: -73.39743333333334,
      spotName: "Gilgo",
    },
  },
  3114: {
    spot: { Lat: 40.83285, Long: -72.51146666666666, spotName: "Road K" },
  },
  3115: {
    spot: {
      Lat: 41.06986666666667,
      Long: -71.85748333333333,
      spotName: "Montauk point - Turtles",
    },
  },
  3116: {
    spot: { Lat: 21.290116666666666, Long: -157.8593, spotName: "Kewalo's" },
  },
  3117: {
    spot: { Lat: 21.31025, Long: -157.65621666666667, spotName: "Makapuu" },
  },
  3118: {
    spot: {
      Lat: 21.704283333333333,
      Long: -157.99966666666666,
      spotName: "Turtle Bay",
    },
  },
  3119: {
    spot: {
      Lat: 40.583333333333336,
      Long: -73.81205,
      spotName: "92nd Street",
    },
  },
  3120: {
    spot: {
      Lat: 21.445316666666667,
      Long: -158.18985,
      spotName: "Rec. Center - Pokai Bay",
    },
  },
  3121: {
    spot: {
      Lat: 40.64951666666666,
      Long: -73.12826666666666,
      spotName: "Fire Island Point of Woods",
    },
  },
  3122: {
    spot: { Lat: 40.59126666666667, Long: -73.6072, spotName: "Lido" },
  },
  3123: {
    spot: { Lat: 41.033183333333334, Long: -71.9373, spotName: "Terrace" },
  },
  3124: {
    spot: { Lat: -0, Long: -0, spotName: "Ocean City - 8th Ave Jetty" },
  },
  3125: {
    spot: { Lat: 21.274216666666668, Long: -157.8272, spotName: "Queens" },
  },
  3126: {
    spot: { Lat: 40.581716666666665, Long: -73.653, spotName: "Lincoln" },
  },
  3127: {
    spot: {
      Lat: 40.62028333333333,
      Long: -73.30668333333334,
      spotName: "Robert Moses (democrat point)",
    },
  },
  3128: {
    spot: {
      Lat: 21.6761,
      Long: -158.04043333333334,
      spotName: "Sunset beach",
    },
  },
  3129: {
    spot: {
      Lat: 21.618483333333334,
      Long: -158.08741666666666,
      spotName: "Laniakea",
    },
  },
  3130: {
    spot: {
      Lat: 21.684283333333333,
      Long: -158.03233333333333,
      spotName: "Velzy Land",
    },
  },
  3131: {
    spot: {
      Lat: 40.64951666666666,
      Long: -73.1283,
      spotName: "Point o' Woods",
    },
  },
  3132: {
    spot: {
      Lat: 21.279183333333332,
      Long: -157.84251666666665,
      spotName: "In Betweens",
    },
  },
  3133: { spot: { Lat: 21.47785, Long: -158.22305, spotName: "Makaha" } },
  3134: {
    spot: { Lat: 21.28725, Long: -157.66925, spotName: "Sandy Beach" },
  },
  3135: {
    spot: {
      Lat: 21.5467,
      Long: -158.24046666666666,
      spotName: "Yokohama Bay",
    },
  },
  3136: { spot: { Lat: 40.5879, Long: -73.6169, spotName: "Lido West" } },
  3137: {
    spot: { Lat: 40.6086, Long: -73.42948333333334, spotName: "Tobay beach" },
  },
  3138: {
    spot: {
      Lat: 40.17208333333333,
      Long: -74.01543333333333,
      spotName: "Belmar - 16 th Street",
    },
  },
  3139: {
    spot: {
      Lat: 40.01473333333333,
      Long: -74.05486666666667,
      spotName: "Brick Beach 2",
    },
  },
  3140: {
    spot: {
      Lat: 40.23885,
      Long: -73.99103333333333,
      spotName: "Loch Arbor,Darlington,Deal",
    },
  },
  3141: {
    spot: { Lat: 39.18225, Long: -74.67021666666666, spotName: "Chodes" },
  },
  3142: {
    spot: {
      Lat: 40.254016666666665,
      Long: -73.98911666666666,
      spotName: "Phillips Pump House",
    },
  },
  3143: {
    spot: {
      Lat: 38.92863333333333,
      Long: -74.93468333333334,
      spotName: "The Cove, Cape May",
    },
  },
  3144: {
    spot: {
      Lat: 39.274683333333336,
      Long: -74.5683,
      spotName: "Ocean City - 8th Street",
    },
  },
  3145: {
    spot: {
      Lat: 41.32386666666667,
      Long: -71.79628333333334,
      spotName: "Misquamicut State Beach",
    },
  },
  3146: {
    spot: {
      Lat: 42.22063333333333,
      Long: -70.74465000000001,
      spotName: "Egypt beach",
    },
  },
  3147: {
    spot: {
      Lat: 41.24465,
      Long: -70.06686666666667,
      spotName: "Madaquecham (Nantucket Island)",
    },
  },
  3148: {
    spot: { Lat: 39.362833333333334, Long: -74.408, spotName: "Crystals" },
  },
  3149: {
    spot: {
      Lat: 40.102666666666664,
      Long: -74.03275,
      spotName: "Manasquan Inlet",
    },
  },
  3150: {
    spot: { Lat: 43.5599, Long: -70.27785, spotName: "Higgins Beach" },
  },
  3151: {
    spot: {
      Lat: 41.48721666666667,
      Long: -71.29153333333333,
      spotName: "1st beach",
    },
  },
  3152: {
    spot: {
      Lat: 41.37251666666667,
      Long: -71.53636666666667,
      spotName: "Matunuck",
    },
  },
  3153: {
    spot: { Lat: 39.968333333333334, Long: -74.0653, spotName: "Lavallette" },
  },
  3154: {
    spot: {
      Lat: 39.91296666666667,
      Long: -74.07633333333334,
      spotName: "Seaside Park",
    },
  },
  3155: {
    spot: {
      Lat: 42.48965,
      Long: -70.85036666666667,
      spotName: "Deveraux Beach",
    },
  },
  3156: {
    spot: {
      Lat: 40.417683333333336,
      Long: -73.97926666666666,
      spotName: "Sandy Hook The Cove",
    },
  },
  3157: {
    spot: {
      Lat: 39.19813333333333,
      Long: -74.65583333333333,
      spotName: "Strathmere, 7th street",
    },
  },
  3158: {
    spot: {
      Lat: 42.984833333333334,
      Long: -70.76236666666667,
      spotName: "Jenness Beach, NH",
    },
  },
  3159: {
    spot: {
      Lat: 41.32485,
      Long: -71.75198333333333,
      spotName: "Panic Point",
    },
  },
  3160: {
    spot: { Lat: 42.11895, Long: -70.67153333333333, spotName: "Rexhame" },
  },
  3161: {
    spot: {
      Lat: 39.564433333333334,
      Long: -74.23316666666666,
      spotName: "5th Street Beach Haven",
    },
  },
  3162: {
    spot: {
      Lat: 39.33573333333333,
      Long: -74.47686666666667,
      spotName: "Ventnor Pier",
    },
  },
  3163: {
    spot: {
      Lat: 42.629416666666664,
      Long: -70.61771666666667,
      spotName: "Long Beach",
    },
  },
  3164: {
    spot: {
      Lat: 39.042883333333336,
      Long: -74.7633,
      spotName: "Stone Harbor 110",
    },
  },
  3165: {
    spot: { Lat: 39.29175, Long: -74.55183333333333, spotName: "Waverly" },
  },
  3166: {
    spot: {
      Lat: 41.42243333333333,
      Long: -71.4543,
      spotName: "Monahans Dock",
    },
  },
  3167: {
    spot: {
      Lat: 42.26983333333333,
      Long: -70.85426666666666,
      spotName: "Nantasket Beach",
    },
  },
  3168: {
    spot: {
      Lat: 41.90546666666667,
      Long: -69.9669,
      spotName: "Marconi Beach",
    },
  },
  3169: {
    spot: {
      Lat: 39.658566666666665,
      Long: -74.15976666666667,
      spotName: "LBI - Long Beach Island",
    },
  },
  3170: {
    spot: {
      Lat: 38.96726666666667,
      Long: -74.83276666666667,
      spotName: "Diamond Beach",
    },
  },
  3171: {
    spot: { Lat: 39.28328333333333, Long: -74.55645, spotName: "North St." },
  },
  3172: {
    spot: { Lat: 41.32833333333333, Long: -71.7618, spotName: "Fenway" },
  },
  3173: {
    spot: {
      Lat: 39.04298333333333,
      Long: -74.76346666666667,
      spotName: "Nuns beach",
    },
  },
  3174: { spot: { Lat: 39.1175, Long: -74.70965, spotName: "St Phillip's" } },
  3175: {
    spot: {
      Lat: 43.34943333333333,
      Long: -70.47395,
      spotName: "Kennebunk beach",
    },
  },
  3176: {
    spot: {
      Lat: 42.61995,
      Long: -70.63151666666667,
      spotName: "Good Harbor Beach",
    },
  },
  3177: {
    spot: {
      Lat: 38.995533333333334,
      Long: -74.79253333333334,
      spotName: "North Wildwood",
    },
  },
  3178: {
    spot: {
      Lat: 39.84676666666667,
      Long: -74.08493333333334,
      spotName: "Tices Sholls",
    },
  },
  3179: {
    spot: {
      Lat: 39.530966666666664,
      Long: -74.26261666666667,
      spotName: "Wooden Jetty",
    },
  },
  3180: {
    spot: { Lat: 43.7339, Long: -69.79545, spotName: "Popham - Read" },
  },
  3181: {
    spot: {
      Lat: 41.323933333333336,
      Long: -71.79568333333333,
      spotName: "Dickeys",
    },
  },
  3182: {
    spot: {
      Lat: 39.27011666666667,
      Long: -74.5802,
      spotName: "Ocean City - 14th 15th St",
    },
  },
  3183: {
    spot: {
      Lat: 38.93931666666667,
      Long: -74.86213333333333,
      spotName: "Trestles",
    },
  },
  3184: {
    spot: { Lat: 41.48775, Long: -71.25841666666666, spotName: "2nd Beach" },
  },
  3185: {
    spot: {
      Lat: 41.84621666666666,
      Long: -69.94818333333333,
      spotName: "Coast Guard beach",
    },
  },
  3186: {
    spot: { Lat: 40.22813333333333, Long: -73.9953, spotName: "Asbury Park" },
  },
  3187: {
    spot: {
      Lat: 39.32743333333333,
      Long: -74.49446666666667,
      spotName: "Margate Pier",
    },
  },
  3188: {
    spot: {
      Lat: 40.25418333333333,
      Long: -73.98986666666667,
      spotName: "Ocean Lane, Deal",
    },
  },
  3189: {
    spot: {
      Lat: 40.236333333333334,
      Long: -73.99491666666667,
      spotName: "Allenhurst",
    },
  },
  3190: {
    spot: { Lat: 40.07698333333333, Long: -74.0395, spotName: "Bay Head" },
  },
  3191: {
    spot: {
      Lat: 40.197916666666664,
      Long: -74.00605,
      spotName: "Bradley Beach",
    },
  },
  3192: {
    spot: {
      Lat: 39.68971666666667,
      Long: -74.14285,
      spotName: "Cape May Ave.",
    },
  },
  3193: {
    spot: {
      Lat: 39.60791666666667,
      Long: -74.20256666666667,
      spotName: "L.B.I - 82st",
    },
  },
  3194: {
    spot: {
      Lat: 41.252383333333334,
      Long: -70.15671666666667,
      spotName: "Cisco Beach (Nantucket Island)",
    },
  },
  3195: {
    spot: { Lat: 42.9637, Long: -70.76808333333334, spotName: "Fox Hill" },
  },
  3196: {
    spot: {
      Lat: 41.49933333333333,
      Long: -71.05258333333333,
      spotName: "Horseneck Beach",
    },
  },
  3197: {
    spot: {
      Lat: 41.437583333333336,
      Long: -71.4507,
      spotName: "Naragansett",
    },
  },
  3198: {
    spot: {
      Lat: 38.932233333333336,
      Long: -74.9441,
      spotName: "Poverty Beach",
    },
  },
  3199: {
    spot: {
      Lat: 40.37096666666667,
      Long: -73.97363333333334,
      spotName: "Sands",
    },
  },
  3200: {
    spot: {
      Lat: 41.27471666666667,
      Long: -70.21448333333333,
      spotName: "Madaket",
    },
  },
  3201: {
    spot: {
      Lat: 39.092666666666666,
      Long: -74.71851666666667,
      spotName: "Avalon - 30th Street",
    },
  },
  3202: {
    spot: {
      Lat: 41.50823333333334,
      Long: -71.06903333333334,
      spotName: "Baker's beach",
    },
  },
  3203: {
    spot: {
      Lat: 41.45568333333333,
      Long: -71.31198333333333,
      spotName: "Bailey's Beach",
    },
  },
  3204: {
    spot: {
      Lat: 41.79925,
      Long: -69.94231666666667,
      spotName: "Nauset Light Beach",
    },
  },
  3205: {
    spot: {
      Lat: 41.35935,
      Long: -71.48538333333333,
      spotName: "Point Judith Lighthouse",
    },
  },
  3206: {
    spot: {
      Lat: 38.37323333333333,
      Long: -75.06695,
      spotName: "48th Street (Ocean City)",
    },
  },
  3207: {
    spot: {
      Lat: 36.830416666666665,
      Long: -75.96776666666666,
      spotName: "1st Street Jetty",
    },
  },
  3208: {
    spot: {
      Lat: 36.861216666666664,
      Long: -75.97561666666667,
      spotName: "Virginia Beach",
    },
  },
  3209: {
    spot: {
      Lat: 42.0779,
      Long: -124.32318333333333,
      spotName: "Rainbow Rock",
    },
  },
  3210: {
    spot: {
      Lat: 41.934216666666664,
      Long: -69.9787,
      spotName: "Whitecrest Beach",
    },
  },
  3211: {
    spot: {
      Lat: 44.30818333333333,
      Long: -124.10868333333333,
      spotName: "Yachats",
    },
  },
  3212: {
    spot: {
      Lat: 42.043866666666666,
      Long: -124.26953333333333,
      spotName: "Brookings Sporthaven Beach",
    },
  },
  3213: { spot: { Lat: 48.14795, Long: -123.5666, spotName: "Elwha" } },
  3214: {
    spot: {
      Lat: 48.2026,
      Long: -124.09606666666667,
      spotName: "Pillar Point",
    },
  },
  3215: { spot: { Lat: 38.2069, Long: -75.14675, spotName: "Assateague" } },
  3216: { spot: { Lat: 38.6979, Long: -75.0716, spotName: "Dewey Beach" } },
  3217: {
    spot: { Lat: 36.78185, Long: -75.95615, spotName: "Damneck Naval Base" },
  },
  3218: {
    spot: {
      Lat: 45.21501666666666,
      Long: -123.97316666666667,
      spotName: "Pacific City - Gas Chambers",
    },
  },
  3219: {
    spot: {
      Lat: 46.97298333333333,
      Long: -124.17435,
      spotName: "Ocean Shores",
    },
  },
  3220: {
    spot: {
      Lat: 48.11933333333333,
      Long: -123.28263333333334,
      spotName: "Super Green",
    },
  },
  3221: {
    spot: { Lat: 36.9068, Long: -75.98918333333333, spotName: "81st Street" },
  },
  3222: {
    spot: {
      Lat: 38.60843333333333,
      Long: -75.05928333333334,
      spotName: "Indian River Inlet",
    },
  },
  3223: {
    spot: {
      Lat: 43.76351666666667,
      Long: -87.69595,
      spotName: "North Point",
    },
  },
  3224: {
    spot: {
      Lat: 44.775933333333334,
      Long: -124.07353333333333,
      spotName: "Otter Rock",
    },
  },
  3225: {
    spot: { Lat: 46.93748333333333, Long: -124.134, spotName: "Damon Point" },
  },
  3226: {
    spot: {
      Lat: 48.32816666666667,
      Long: -124.66135,
      spotName: "Neah Bay - Hobuck",
    },
  },
  3227: {
    spot: { Lat: 46.4913, Long: -124.05968333333334, spotName: "Ocean Park" },
  },
  3228: {
    spot: {
      Lat: 38.71525,
      Long: -75.07781666666666,
      spotName: "Rehoboth - Main",
    },
  },
  3229: {
    spot: {
      Lat: 38.315083333333334,
      Long: -75.09843333333333,
      spotName: "Wedge",
    },
  },
  3230: {
    spot: {
      Lat: 44.949666666666666,
      Long: -124.02633333333333,
      spotName: "Lincolne City - Nelscott Reef",
    },
  },
  3231: {
    spot: {
      Lat: 45.21863333333334,
      Long: -123.97246666666666,
      spotName: "Pacific City - Point Break, Cape Kiwanda",
    },
  },
  3232: {
    spot: {
      Lat: 43.24928333333333,
      Long: -70.59468333333334,
      spotName: "Ogunquit Rivermouth",
    },
  },
  3233: {
    spot: {
      Lat: 38.537483333333334,
      Long: -75.05333333333333,
      spotName: "Bethany Hollywood St",
    },
  },
  3234: {
    spot: {
      Lat: 41.471666666666664,
      Long: -71.2472,
      spotName: "Sakonnet River Break",
    },
  },
  3235: {
    spot: {
      Lat: 43.304066666666664,
      Long: -70.56213333333334,
      spotName: "Wells Beach",
    },
  },
  3236: {
    spot: {
      Lat: 48.2568,
      Long: -124.24781666666667,
      spotName: "Hoko river  Kydaka",
    },
  },
  3237: {
    spot: {
      Lat: 42.18918333333333,
      Long: -70.71616666666667,
      spotName: "Peggoty",
    },
  },
  3238: {
    spot: {
      Lat: 38.40383333333333,
      Long: -75.07266666666666,
      spotName: "Ocean City",
    },
  },
  3239: {
    spot: { Lat: 38.7673, Long: -75.08166666666666, spotName: "Naval Jetty" },
  },
  3240: {
    spot: {
      Lat: 45.94371666666667,
      Long: -123.99131666666666,
      spotName: "Indian Head",
    },
  },
  3241: {
    spot: {
      Lat: 42.2533,
      Long: -72.61208333333333,
      spotName: "Wave O Saurus - Connecticut River",
    },
  },
  3242: {
    spot: {
      Lat: 44.63356666666667,
      Long: -86.24971666666667,
      spotName: "Frankfort - North Pier",
    },
  },
  3243: {
    spot: {
      Lat: 41.48826666666667,
      Long: -81.74085,
      spotName: "Edgwater Park",
    },
  },
  3244: {
    spot: {
      Lat: 36.69416666666667,
      Long: -75.92228333333334,
      spotName: "Sandbridge",
    },
  },
  3245: {
    spot: { Lat: 44.83076666666667, Long: -124.0626, spotName: "Boiler bay" },
  },
  3246: {
    spot: { Lat: 45.8821, Long: -123.96711666666667, spotName: "Needles" },
  },
  3247: {
    spot: {
      Lat: 45.961533333333335,
      Long: -123.9759,
      spotName: "Seaside Point",
    },
  },
  3248: {
    spot: {
      Lat: 48.224516666666666,
      Long: -122.77091666666666,
      spotName: "Fort. Ebey",
    },
  },
  3249: {
    spot: {
      Lat: 47.90121666666667,
      Long: -124.63208333333333,
      spotName: "La Push",
    },
  },
  3250: {
    spot: {
      Lat: 48.98968333333333,
      Long: -123.05305,
      spotName: "Point roberts point",
    },
  },
  3251: {
    spot: {
      Lat: 42.88675,
      Long: -70.81846666666667,
      spotName: "Seabrook Beach",
    },
  },
  3252: {
    spot: {
      Lat: 42.973816666666664,
      Long: -70.76443333333333,
      spotName: "The Wall",
    },
  },
  3253: {
    spot: {
      Lat: 44.65363333333333,
      Long: -124.06293333333333,
      spotName: "Agate Beach",
    },
  },
  3254: {
    spot: {
      Lat: 45.33505,
      Long: -123.97373333333333,
      spotName: "Cape Lookout",
    },
  },
  3255: {
    spot: {
      Lat: 46.905516666666664,
      Long: -124.12336666666667,
      spotName: "Half Moon Bay",
    },
  },
  3256: {
    spot: {
      Lat: 46.97603333333333,
      Long: -91.7434,
      spotName: "Stoney Point",
    },
  },
  3257: {
    spot: {
      Lat: 45.910583333333335,
      Long: -123.96925,
      spotName: "Cannon beach",
    },
  },
  3258: {
    spot: {
      Lat: 45.73291666666667,
      Long: -123.94951666666667,
      spotName: "Neakahine point",
    },
  },
  3259: {
    spot: {
      Lat: 44.97378333333333,
      Long: -124.01718333333334,
      spotName: "Lincoln City",
    },
  },
  3260: {
    spot: {
      Lat: 45.75991666666667,
      Long: -123.96663333333333,
      spotName: "Short Sands",
    },
  },
  3261: {
    spot: {
      Lat: 48.16373333333333,
      Long: -123.70828333333333,
      spotName: "Crescent",
    },
  },
  3262: {
    spot: {
      Lat: 41.468016666666664,
      Long: -71.29623333333333,
      spotName: "Ruggles",
    },
  },
  3263: {
    spot: {
      Lat: 38.46105,
      Long: -75.04868333333333,
      spotName: "Fenwick Island",
    },
  },
  3264: {
    spot: {
      Lat: 46.91135,
      Long: -124.11511666666667,
      spotName: "The Groins",
    },
  },
  3265: {
    spot: {
      Lat: 36.87093333333333,
      Long: -75.982,
      spotName: "42nd St. VA Beach",
    },
  },
  3266: {
    spot: {
      Lat: 44.61063333333333,
      Long: -124.07555,
      spotName: "Newport The Box",
    },
  },
  3267: {
    spot: {
      Lat: 42.400133333333336,
      Long: -86.28525,
      spotName: "South Haven",
    },
  },
  3268: {
    spot: {
      Lat: 44.02466666666667,
      Long: -124.13966666666667,
      spotName: "Florence North Jetty",
    },
  },
  3269: { spot: { Lat: 48.1725, Long: -124.02465, spotName: "Deep Creek" } },
  3270: {
    spot: {
      Lat: 48.36768333333333,
      Long: -124.57361666666667,
      spotName: "Neah Bay -3rd Beach",
    },
  },
  3271: {
    spot: { Lat: 29.858983333333335, Long: -81.2663, spotName: "FA's" },
  },
  3272: {
    spot: {
      Lat: 30.293366666666667,
      Long: -81.38895,
      spotName: "Jax Beach Pier",
    },
  },
  3273: {
    spot: {
      Lat: 29.22725,
      Long: -81.00508333333333,
      spotName: "Mainstreet pier",
    },
  },
  3274: {
    spot: {
      Lat: 29.064266666666665,
      Long: -80.90641666666667,
      spotName: "New Smyrna Inlet",
    },
  },
  3275: {
    spot: {
      Lat: 25.769483333333334,
      Long: -80.1302,
      spotName: "South Beach",
    },
  },
  3276: {
    spot: {
      Lat: 33.47535,
      Long: -117.72371666666666,
      spotName: "Salt Creek- Middles",
    },
  },
  3277: {
    spot: {
      Lat: 42.30701666666667,
      Long: -70.88195,
      spotName: "allerton point",
    },
  },
  3278: {
    spot: {
      Lat: 41.482033333333334,
      Long: -71.41816666666666,
      spotName: "Bonnet Shores Point",
    },
  },
  3279: {
    spot: {
      Lat: 47.35305,
      Long: -124.31341666666667,
      spotName: "Cape Elizabeth",
    },
  },
  3280: {
    spot: {
      Lat: -27.430966666666666,
      Long: -48.47966666666667,
      spotName: "Canasvieiras",
    },
  },
  3281: {
    spot: {
      Lat: -27.755133333333333,
      Long: -48.49851666666667,
      spotName: "Matadeiro",
    },
  },
  3282: {
    spot: {
      Lat: -8.525433333333334,
      Long: -35.00626666666667,
      spotName: "Maracaipe",
    },
  },
  3283: {
    spot: {
      Lat: -23.343983333333334,
      Long: -44.71178333333334,
      spotName: "Ponta do Cepílio",
    },
  },
  3284: {
    spot: {
      Lat: 28.25273333333333,
      Long: -80.60333333333334,
      spotName: "2nd Light",
    },
  },
  3285: {
    spot: {
      Lat: 27.876133333333332,
      Long: -80.45556666666667,
      spotName: "Spanish house",
    },
  },
  3286: {
    spot: {
      Lat: 33.77021666666667,
      Long: -78.77031666666667,
      spotName: "8th Ave n.",
    },
  },
  3287: {
    spot: {
      Lat: 26.18895,
      Long: -80.09418333333333,
      spotName: "Commercial Pier",
    },
  },
  3288: {
    spot: {
      Lat: 33.48345,
      Long: -117.72923333333334,
      spotName: "Salt Creek Heroins",
    },
  },
  3289: {
    spot: {
      Lat: -7.692616666666667,
      Long: 108.6541,
      spotName: "pangandaran",
    },
  },
  3290: {
    spot: {
      Lat: -36.38811666666667,
      Long: -56.69356666666667,
      spotName: "San clemente del tuyu",
    },
  },
  3291: {
    spot: { Lat: -44.34153333333333, Long: -65.2478, spotName: "Cabo Raso" },
  },
  3292: {
    spot: { Lat: -45.92978333333333, Long: -67.5515, spotName: "Rada Tilly" },
  },
  3293: {
    spot: {
      Lat: -27.693866666666665,
      Long: -48.482683333333334,
      spotName: "Campeche Rights",
    },
  },
  3294: {
    spot: { Lat: -27.68551666666667, Long: -48.4796, spotName: "Riozinho" },
  },
  3295: {
    spot: {
      Lat: -23.049133333333334,
      Long: -43.526666666666664,
      spotName: "Grumari",
    },
  },
  3296: {
    spot: { Lat: -22.98755, Long: -43.205416666666665, spotName: "Ipanema" },
  },
  3297: {
    spot: {
      Lat: -23.034083333333335,
      Long: -43.47273333333333,
      spotName: "Macumba (Curvão)",
    },
  },
  3298: {
    spot: {
      Lat: -22.963633333333334,
      Long: -43.166666666666664,
      spotName: "Leme",
    },
  },
  3299: {
    spot: { Lat: -22.906616666666668, Long: -43.1197, spotName: "Itapuca" },
  },
  3300: {
    spot: {
      Lat: 35.58533333333333,
      Long: -75.46095,
      spotName: "Rhodanthe Pier",
    },
  },
  3301: {
    spot: {
      Lat: 34.03941666666667,
      Long: -77.88771666666666,
      spotName: "Carolina Beach",
    },
  },
  3302: {
    spot: {
      Lat: 33.908316666666664,
      Long: -78.32188333333333,
      spotName: "Holden Beach",
    },
  },
  3303: {
    spot: {
      Lat: 32.668816666666665,
      Long: -79.90805,
      spotName: "The Washout",
    },
  },
  3304: {
    spot: {
      Lat: 27.9711,
      Long: -82.83141666666667,
      spotName: "Clearwater Pass",
    },
  },
  3305: {
    spot: {
      Lat: -3.7266833333333333,
      Long: -38.45701666666667,
      spotName: "Futuro",
    },
  },
  3306: { spot: { Lat: -3.8351, Long: -32.40335, spotName: "Biboca" } },
  3307: {
    spot: {
      Lat: -3.84895,
      Long: -32.43953333333333,
      spotName: "Cacimba do Padre",
    },
  },
  3308: {
    spot: { Lat: -3.8396, Long: -32.41328333333333, spotName: "Meio" },
  },
  3309: {
    spot: {
      Lat: -27.396433333333334,
      Long: -48.41413333333333,
      spotName: "Praia Brava",
    },
  },
  3310: {
    spot: {
      Lat: -25.548333333333332,
      Long: -48.295383333333334,
      spotName: "Ilha do Mel",
    },
  },
  3311: {
    spot: {
      Lat: 30.382766666666665,
      Long: -81.39221666666667,
      spotName: "The Mayport Poles",
    },
  },
  3312: {
    spot: {
      Lat: 27.190216666666668,
      Long: -80.161,
      spotName: "Stuart Rocks",
    },
  },
  3313: {
    spot: {
      Lat: 43.313433333333336,
      Long: -81.75921666666666,
      spotName: "Grand Bend",
    },
  },
  3314: {
    spot: {
      Lat: 45.760333333333335,
      Long: -123.96938333333334,
      spotName: "smugglers cove",
    },
  },
  3315: {
    spot: { Lat: -38.27433333333333, Long: -57.82955, spotName: "Miramar" },
  },
  3316: {
    spot: { Lat: -27.723683333333334, Long: -48.5046, spotName: "Caldeirao" },
  },
  3317: {
    spot: {
      Lat: 28.138683333333333,
      Long: -80.5797,
      spotName: "Canova Beach",
    },
  },
  3318: {
    spot: {
      Lat: 28.158433333333335,
      Long: -80.58483333333334,
      spotName: "Hess",
    },
  },
  3319: {
    spot: {
      Lat: 30.331183333333332,
      Long: -87.14106666666666,
      spotName: "Pensacola Beach Pier",
    },
  },
  3320: {
    spot: { Lat: 30.43188333333333, Long: -81.4005, spotName: "The Shoals" },
  },
  3321: {
    spot: {
      Lat: 34.19128333333333,
      Long: -77.8093,
      spotName: "Mason's Inlet",
    },
  },
  3322: {
    spot: {
      Lat: 34.214416666666665,
      Long: -77.79086666666667,
      spotName: "Wrightsville beach",
    },
  },
  3323: {
    spot: {
      Lat: 32.65405,
      Long: -79.93901666666666,
      spotName: "Folly Beach Pier",
    },
  },
  3324: {
    spot: {
      Lat: 33.57608333333334,
      Long: -78.99761666666667,
      spotName: "Garden City Pier",
    },
  },
  3325: {
    spot: {
      Lat: 42.85328333333333,
      Long: -79.53438333333334,
      spotName: "D-Land",
    },
  },
  3326: {
    spot: {
      Lat: -51.69298333333333,
      Long: -57.7771,
      spotName: "Falkland Islands",
    },
  },
  3327: {
    spot: {
      Lat: -20.635266666666666,
      Long: -40.42573333333333,
      spotName: "Setiba Pina",
    },
  },
  3328: {
    spot: { Lat: -3.8411166666666667, Long: -32.4185, spotName: "Conceição" },
  },
  3329: {
    spot: {
      Lat: -27.773583333333335,
      Long: -48.486533333333334,
      spotName: "Lagoinha do Leste",
    },
  },
  3330: {
    spot: { Lat: 48.165533333333336, Long: -123.95035, spotName: "Twins" },
  },
  3331: {
    spot: { Lat: 34.59478333333333, Long: -76.539, spotName: "cape lookout" },
  },
  3332: {
    spot: { Lat: 30.66745, Long: -81.42585, spotName: "Fernandina Pier" },
  },
  3333: {
    spot: {
      Lat: 27.88296666666667,
      Long: -80.45893333333333,
      spotName: "Long Point",
    },
  },
  3334: {
    spot: {
      Lat: 33.486466666666665,
      Long: -79.08121666666666,
      spotName: "North Litchfield",
    },
  },
  3335: {
    spot: {
      Lat: 27.538683333333335,
      Long: -82.74435,
      spotName: "Anna Maria Island",
    },
  },
  3336: {
    spot: { Lat: 35.08226666666667, Long: -120.6376, spotName: "Hippo Rock" },
  },
  3337: {
    spot: {
      Lat: 43.2587,
      Long: -70.58973333333333,
      spotName: "Ogunquit Beach",
    },
  },
  3338: {
    spot: {
      Lat: -38.206966666666666,
      Long: -57.688183333333335,
      spotName: "Chapadmalal",
    },
  },
  3339: {
    spot: {
      Lat: -3.70735,
      Long: -38.467816666666664,
      spotName: "Titanzinho",
    },
  },
  3340: {
    spot: {
      Lat: -27.572816666666668,
      Long: -48.42438333333333,
      spotName: "Barra da Lagoa",
    },
  },
  3341: {
    spot: {
      Lat: -27.715516666666666,
      Long: -48.50225,
      spotName: "Morro das Pedras",
    },
  },
  3342: {
    spot: {
      Lat: -27.602483333333332,
      Long: -48.43258333333333,
      spotName: "Praia Mole",
    },
  },
  3343: {
    spot: { Lat: -2.358983333333333, Long: -43.2439, spotName: "Travosa" },
  },
  3344: {
    spot: {
      Lat: 31.177566666666667,
      Long: -81.34878333333333,
      spotName: "Sea Island",
    },
  },
  3345: {
    spot: { Lat: 35.60783333333333, Long: -75.4649, spotName: "S-Turns" },
  },
  3346: {
    spot: {
      Lat: 34.6605,
      Long: -77.03403333333333,
      spotName: "Emerald Isle",
    },
  },
  3347: {
    spot: { Lat: 26.61215, Long: -80.03535, spotName: "Lake Worth Pier" },
  },
  3348: {
    spot: {
      Lat: 44.177683333333334,
      Long: -81.64375,
      spotName: "Kincardine",
    },
  },
  3349: {
    spot: {
      Lat: -38.016083333333334,
      Long: -57.524883333333335,
      spotName: "Cabo corrientes",
    },
  },
  3350: {
    spot: {
      Lat: -38.03093333333333,
      Long: -57.529266666666665,
      spotName: "El Yacht",
    },
  },
  3351: {
    spot: {
      Lat: -38.98983333333334,
      Long: -61.29821666666667,
      spotName: "Monte Hermoso",
    },
  },
  3352: {
    spot: {
      Lat: -12.674933333333334,
      Long: -38.085166666666666,
      spotName: "Scar Reef",
    },
  },
  3353: {
    spot: {
      Lat: -3.4067166666666666,
      Long: -39.03261666666667,
      spotName: "Paracuru",
    },
  },
  3354: {
    spot: { Lat: -27.4821, Long: -48.3809, spotName: "Ponta das Aranhas" },
  },
  3355: {
    spot: {
      Lat: -25.817816666666666,
      Long: -48.5297,
      spotName: "Pico de Matinhos",
    },
  },
  3356: {
    spot: { Lat: 35.22488333333333, Long: -75.6361, spotName: "Frisco Pier" },
  },
  3357: {
    spot: {
      Lat: 27.4745,
      Long: -80.29066666666667,
      spotName: "Fort Pierce North Jetty",
    },
  },
  3358: {
    spot: {
      Lat: 28.164933333333334,
      Long: -80.58651666666667,
      spotName: "Peg Leg's",
    },
  },
  3359: {
    spot: {
      Lat: 28.669966666666667,
      Long: -80.64203333333333,
      spotName: "Playa Linda",
    },
  },
  3360: {
    spot: { Lat: 29.706416666666666, Long: -81.22285, spotName: "Peanuts" },
  },
  3361: {
    spot: {
      Lat: 28.178066666666666,
      Long: -80.58978333333333,
      spotName: "R.C.'s",
    },
  },
  3362: {
    spot: {
      Lat: 26.458466666666666,
      Long: -80.05751666666667,
      spotName: "Delray public beach",
    },
  },
  3363: {
    spot: {
      Lat: 25.9012,
      Long: -80.12143333333333,
      spotName: "Haulover Inlet North Side",
    },
  },
  3364: { spot: { Lat: 25.8991, Long: -80.12105, spotName: "Harbor House" } },
  3365: {
    spot: {
      Lat: 26.943783333333332,
      Long: -80.06951666666667,
      spotName: "Jupiter Inlet North South Side",
    },
  },
  3366: {
    spot: {
      Lat: 26.763383333333334,
      Long: -80.03758333333333,
      spotName: "Reef Road",
    },
  },
  3367: {
    spot: { Lat: -37.1235, Long: -56.86103333333333, spotName: "Pinamar" },
  },
  3368: {
    spot: {
      Lat: -20.348966666666666,
      Long: -40.27066666666666,
      spotName: "D2",
    },
  },
  3369: {
    spot: {
      Lat: -27.78475,
      Long: -48.525983333333336,
      spotName: "Praia dos Açores",
    },
  },
  3370: {
    spot: {
      Lat: -8.499616666666666,
      Long: -35.00313333333333,
      spotName: "Borete",
    },
  },
  3371: {
    spot: { Lat: -23.02926666666667, Long: -44.52, spotName: "Mambucaba" },
  },
  3372: {
    spot: {
      Lat: 35.95118333333333,
      Long: -75.61941666666667,
      spotName: "Nags Head",
    },
  },
  3373: {
    spot: {
      Lat: 29.874966666666666,
      Long: -81.26728333333334,
      spotName: "Blowhole",
    },
  },
  3374: {
    spot: {
      Lat: 28.367633333333334,
      Long: -80.60126666666666,
      spotName: "Cocoa Beach Pier",
    },
  },
  3375: {
    spot: {
      Lat: 26.3165,
      Long: -80.07411666666667,
      spotName: "Deerfield Beach Pier",
    },
  },
  3376: {
    spot: { Lat: -30.3629, Long: 153.10591666666667, spotName: "Murrays" },
  },
  3377: {
    spot: {
      Lat: 42.799683333333334,
      Long: -70.80723333333333,
      spotName: "Plum Island",
    },
  },
  3378: {
    spot: {
      Lat: 48.155833333333334,
      Long: -123.78063333333333,
      spotName: "Whiskey Creek",
    },
  },
  3379: {
    spot: {
      Lat: -38.081266666666664,
      Long: -57.536433333333335,
      spotName: "Waikiki",
    },
  },
  3380: {
    spot: {
      Lat: -20.13565,
      Long: -40.18063333333333,
      spotName: "Jacaraípe- Solemar",
    },
  },
  3381: { spot: { Lat: -3.84545, Long: -32.4317, spotName: "Boldró" } },
  3382: {
    spot: {
      Lat: -27.457933333333333,
      Long: -48.37263333333333,
      spotName: "Santinho",
    },
  },
  3383: {
    spot: { Lat: 1.2426, Long: -50.29196666666667, spotName: "Pororoca" },
  },
  3384: {
    spot: { Lat: -22.98795, Long: -43.21953333333333, spotName: "Leblon" },
  },
  3385: {
    spot: {
      Lat: -22.989966666666668,
      Long: -43.226483333333334,
      spotName: "Pontão do leblon",
    },
  },
  3386: {
    spot: {
      Lat: -23.30405,
      Long: -44.55348333333333,
      spotName: "Martim de Sa",
    },
  },
  3387: {
    spot: {
      Lat: 35.22841666666667,
      Long: -75.52753333333334,
      spotName: "Hatteras Light House",
    },
  },
  3388: {
    spot: {
      Lat: 30.162133333333333,
      Long: -81.35566666666666,
      spotName: "Crossroads",
    },
  },
  3389: {
    spot: { Lat: 28.2427, Long: -80.60141666666667, spotName: "Hangers" },
  },
  3390: {
    spot: { Lat: 26.058, Long: -80.10883333333334, spotName: "Dania  Beach" },
  },
  3391: {
    spot: {
      Lat: 28.200783333333334,
      Long: -80.59558333333334,
      spotName: "Perkins",
    },
  },
  3392: {
    spot: {
      Lat: 34.56086666666667,
      Long: -77.28435,
      spotName: "Onslow Beach",
    },
  },
  3393: {
    spot: {
      Lat: 33.59518333333333,
      Long: -78.98088333333334,
      spotName: "13th ave south surfside",
    },
  },
  3394: {
    spot: {
      Lat: 33.017316666666666,
      Long: -117.28398333333334,
      spotName: "Tippers",
    },
  },
  3395: {
    spot: {
      Lat: 43.39435,
      Long: -70.39858333333333,
      spotName: "Timber Island",
    },
  },
  3396: {
    spot: { Lat: -38.02725, Long: -57.52863333333333, spotName: "Biología" },
  },
  3397: {
    spot: {
      Lat: -12.734416666666666,
      Long: -38.14445,
      spotName: "Praia do forte",
    },
  },
  3398: {
    spot: { Lat: -3.8276, Long: -32.40058333333333, spotName: "Abras" },
  },
  3399: {
    spot: {
      Lat: -27.429833333333335,
      Long: -48.390566666666665,
      spotName: "Ingleses",
    },
  },
  3400: {
    spot: {
      Lat: -23.064016666666667,
      Long: -43.56936666666667,
      spotName: "Barra de Guaratiba",
    },
  },
  3401: {
    spot: { Lat: 46.90055, Long: -124.13288333333334, spotName: "Westport" },
  },
  3402: {
    spot: {
      Lat: 48.389266666666664,
      Long: -124.66381666666666,
      spotName: "The Dump",
    },
  },
  3403: {
    spot: { Lat: 30.2962, Long: -81.38903333333333, spotName: "7th Avenue" },
  },
  3404: {
    spot: { Lat: 28.950816666666668, Long: -80.8387, spotName: "Bethune" },
  },
  3405: {
    spot: {
      Lat: 30.680616666666666,
      Long: -81.42843333333333,
      spotName: "Hooks",
    },
  },
  3406: {
    spot: {
      Lat: 29.781483333333334,
      Long: -81.25536666666666,
      spotName: "Lighthouse",
    },
  },
  3407: {
    spot: {
      Lat: 28.055033333333334,
      Long: -80.55096666666667,
      spotName: "Spessard holland",
    },
  },
  3408: {
    spot: {
      Lat: 33.86728333333333,
      Long: -78.50666666666666,
      spotName: "Sunset Beach",
    },
  },
  3409: {
    spot: {
      Lat: 32.50513333333333,
      Long: -80.2933,
      spotName: "Edisto Beach",
    },
  },
  3410: {
    spot: {
      Lat: 26.14575,
      Long: -80.1014,
      spotName: "Fort Lauderdale - 14th Street",
    },
  },
  3411: {
    spot: {
      Lat: 41.14556666666667,
      Long: -71.58623333333334,
      spotName: "Block Island",
    },
  },
  3412: {
    spot: { Lat: -38.284, Long: -57.833416666666665, spotName: "El muelle" },
  },
  3413: {
    spot: { Lat: -38.1685, Long: -57.63368333333333, spotName: "La Paloma" },
  },
  3414: {
    spot: {
      Lat: -38.16526666666667,
      Long: -57.62886666666667,
      spotName: "Off the Wall",
    },
  },
  3415: {
    spot: {
      Lat: -23.014833333333332,
      Long: -43.30185,
      spotName: "Tropical (posto 1)",
    },
  },
  3416: {
    spot: {
      Lat: 35.35321666666667,
      Long: -75.542,
      spotName: "Outer Banks Beach Club",
    },
  },
  3417: {
    spot: {
      Lat: 27.866316666666666,
      Long: -80.4298,
      spotName: "Monster hole",
    },
  },
  3418: {
    spot: {
      Lat: 33.88751666666667,
      Long: -78.43631666666667,
      spotName: "Ocean Isle",
    },
  },
  3419: {
    spot: {
      Lat: 33.75503333333333,
      Long: -78.79478333333333,
      spotName: "The Dunes Club, Myrtle Beach",
    },
  },
  3420: {
    spot: {
      Lat: 33.60861666666667,
      Long: -78.97761666666666,
      spotName: "Surfside Pier",
    },
  },
  3421: {
    spot: { Lat: 26.3924, Long: -80.06541666666666, spotName: "Jap Rock" },
  },
  3422: { spot: { Lat: -0, Long: -0, spotName: "the hill" } },
  3423: {
    spot: {
      Lat: 42.00083333333333,
      Long: -70.02115,
      spotName: "Ballston Beach",
    },
  },
  3424: {
    spot: { Lat: -38.17348333333333, Long: -57.6393, spotName: "Luna Roja" },
  },
  3425: {
    spot: {
      Lat: -36.710483333333336,
      Long: -56.67393333333333,
      spotName: "Mar de Ajo",
    },
  },
  3426: {
    spot: { Lat: -3.6702833333333333, Long: -38.66945, spotName: "Icarai" },
  },
  3427: {
    spot: {
      Lat: -20.356916666666667,
      Long: -40.289633333333335,
      spotName: "Pompeia",
    },
  },
  3428: {
    spot: { Lat: -3.8389, Long: -32.41113333333333, spotName: "Cachorro" },
  },
  3429: {
    spot: {
      Lat: -27.793516666666665,
      Long: -48.53345,
      spotName: "Solidao - Caladinho",
    },
  },
  3430: {
    spot: {
      Lat: -22.972616666666667,
      Long: -43.03345,
      spotName: "Itacoatiara",
    },
  },
  3431: {
    spot: { Lat: -23.0152, Long: -43.29108333333333, spotName: "Joatinga" },
  },
  3432: {
    spot: {
      Lat: 34.70055,
      Long: -76.74083333333333,
      spotName: "Atlantic Beach",
    },
  },
  3433: {
    spot: { Lat: 35.71655, Long: -75.49213333333333, spotName: "Boiler" },
  },
  3434: {
    spot: {
      Lat: 29.339166666666667,
      Long: -81.06213333333334,
      spotName: "Bicentenial Park",
    },
  },
  3435: {
    spot: {
      Lat: 27.987583333333333,
      Long: -82.82798333333334,
      spotName: "Clearwater",
    },
  },
  3436: {
    spot: { Lat: 29.17225, Long: -80.9792, spotName: "Daytona Beach" },
  },
  3437: {
    spot: {
      Lat: 29.707433333333334,
      Long: -81.2251,
      spotName: "Matanzas Inlet",
    },
  },
  3438: {
    spot: {
      Lat: 30.3905,
      Long: -86.59341666666667,
      spotName: "Okaloosa Pier",
    },
  },
  3439: {
    spot: {
      Lat: 28.25875,
      Long: -80.60383333333333,
      spotName: "Patricks Air Force Base",
    },
  },
  3440: {
    spot: {
      Lat: 33.85131666666667,
      Long: -77.98885,
      spotName: "Bald Head Island- Point",
    },
  },
  3441: {
    spot: {
      Lat: 32.757733333333334,
      Long: -79.83621666666667,
      spotName: "Berts Bar",
    },
  },
  3442: {
    spot: { Lat: 36.11505, Long: -75.71758333333334, spotName: "Chicahauk" },
  },
  3443: { spot: { Lat: 29.9167, Long: -81.28835, spotName: "Beacon point" } },
  3444: {
    spot: {
      Lat: 29.815716666666667,
      Long: -81.26146666666666,
      spotName: "D-Country",
    },
  },
  3445: {
    spot: { Lat: 29.079, Long: -80.91841666666667, spotName: "Ponce Inlet" },
  },
  3446: {
    spot: {
      Lat: 27.862966666666665,
      Long: -80.4465,
      spotName: "Sebastian Inlet",
    },
  },
  3447: {
    spot: {
      Lat: 46.73093333333333,
      Long: -92.05183333333333,
      spotName: "Park Point",
    },
  },
  3448: {
    spot: {
      Lat: 47.3035,
      Long: -124.26523333333333,
      spotName: "Point Grenville",
    },
  },
  3449: {
    spot: {
      Lat: 33.642066666666665,
      Long: -78.88733333333333,
      spotName: "Springmaid Pier",
    },
  },
  3450: {
    spot: {
      Lat: -43.33016666666666,
      Long: -65.05073333333333,
      spotName: "Playa Unión",
    },
  },
  3451: {
    spot: {
      Lat: -22.968066666666665,
      Long: -43.04816666666667,
      spotName: "Canal de Camboinhas",
    },
  },
  3452: {
    spot: {
      Lat: 26.335233333333335,
      Long: -80.07046666666666,
      spotName: "Boca Inlet",
    },
  },
  3453: {
    spot: {
      Lat: 26.094866666666668,
      Long: -80.10468333333333,
      spotName: "Spoils",
    },
  },
  3454: {
    spot: {
      Lat: 8.015716666666666,
      Long: -81.69648333333333,
      spotName: "Rio Tabasara'",
    },
  },
  3455: {
    spot: {
      Lat: 41.36051666666667,
      Long: -71.48048333333334,
      spotName: "Point Judith",
    },
  },
  3456: {
    spot: {
      Lat: -38.58173333333333,
      Long: -58.70283333333333,
      spotName: "Escollera Necochea",
    },
  },
  3457: {
    spot: {
      Lat: -4.150766666666667,
      Long: -38.10973333333333,
      spotName: "Morro Branco",
    },
  },
  3458: {
    spot: {
      Lat: -19.659233333333333,
      Long: -39.84158333333333,
      spotName: "Regencia",
    },
  },
  3459: {
    spot: {
      Lat: -27.741616666666665,
      Long: -48.508116666666666,
      spotName: "Armação",
    },
  },
  3460: {
    spot: {
      Lat: -27.525316666666665,
      Long: -48.41056666666667,
      spotName: "Mocambique",
    },
  },
  3461: {
    spot: {
      Lat: -27.629583333333333,
      Long: -48.448766666666664,
      spotName: "Joaquina",
    },
  },
  3462: {
    spot: {
      Lat: -22.983916666666666,
      Long: -43.18845,
      spotName: "Posto 5 - Copacabana",
    },
  },
  3463: {
    spot: { Lat: 30.7439, Long: -81.4626, spotName: "Cumberland Island" },
  },
  3464: {
    spot: {
      Lat: 34.66795,
      Long: -76.59478333333334,
      spotName: "Shackleford Banks",
    },
  },
  3465: {
    spot: {
      Lat: 29.81126666666667,
      Long: -81.26103333333333,
      spotName: "Backyard OG (ocean gallery)",
    },
  },
  3466: {
    spot: {
      Lat: 28.092116666666666,
      Long: -80.56523333333334,
      spotName: "Boardwalk",
    },
  },
  3467: { spot: { Lat: 30.6385, Long: -81.436, spotName: "Corners" } },
  3468: {
    spot: {
      Lat: 29.480516666666666,
      Long: -81.12463333333334,
      spotName: "Flagler",
    },
  },
  3469: {
    spot: {
      Lat: 28.266783333333333,
      Long: -80.60506666666667,
      spotName: "Tables",
    },
  },
  3470: {
    spot: {
      Lat: 32.7867,
      Long: -79.77756666666667,
      spotName: "Isle of Palms Pier",
    },
  },
  3471: {
    spot: {
      Lat: 33.71581666666667,
      Long: -78.85011666666666,
      spotName: "Myrtle Beach  (42st - 46 st)",
    },
  },
  3472: {
    spot: {
      Lat: 26.545283333333334,
      Long: -80.04236666666667,
      spotName: "Boynton - tortuga beach",
    },
  },
  3473: {
    spot: {
      Lat: -13.009766666666666,
      Long: -38.52696666666667,
      spotName: "Barravento",
    },
  },
  3474: {
    spot: {
      Lat: -3.7182166666666667,
      Long: -38.518,
      spotName: "Iracema (ponte metalica)",
    },
  },
  3475: {
    spot: { Lat: -22.989916666666666, Long: -43.19165, spotName: "Arpoador" },
  },
  3476: {
    spot: {
      Lat: -22.995666666666665,
      Long: -43.23125,
      spotName: "Laje do sheraton",
    },
  },
  3477: {
    spot: { Lat: 31.9917, Long: -80.84576666666666, spotName: "Tybee pier" },
  },
  3478: {
    spot: {
      Lat: 36.101683333333334,
      Long: -75.71116666666667,
      spotName: "Kitty Hawk Pier",
    },
  },
  3479: {
    spot: {
      Lat: 28.178066666666666,
      Long: -80.58976666666666,
      spotName: "Buccaneer",
    },
  },
  3480: {
    spot: {
      Lat: 30.477933333333333,
      Long: -81.41131666666666,
      spotName: "Little Talbot",
    },
  },
  3481: {
    spot: {
      Lat: 28.173416666666668,
      Long: -80.5873,
      spotName: "Satellite Beach",
    },
  },
  3482: {
    spot: {
      Lat: 33.73455,
      Long: -78.82626666666667,
      spotName: "Myrtle Beach 64th Ave.",
    },
  },
  3483: {
    spot: {
      Lat: 27.365783333333333,
      Long: -80.24828333333333,
      spotName: "Walton Rocks",
    },
  },
  3484: { spot: { Lat: -12.95575, Long: -38.385, spotName: "Jaguaribe" } },
  3485: {
    spot: {
      Lat: -37.99386666666667,
      Long: -57.542633333333335,
      spotName: "Alfonsina",
    },
  },
  3486: {
    spot: { Lat: -38.28498333333334, Long: -57.8343, spotName: "El Pomol" },
  },
  3487: {
    spot: {
      Lat: -38.57876666666667,
      Long: -58.69291666666667,
      spotName: "La Virazon",
    },
  },
  3488: {
    spot: {
      Lat: -12.9361,
      Long: -38.32371666666667,
      spotName: "Stella Maris",
    },
  },
  3489: {
    spot: {
      Lat: -27.59348333333333,
      Long: -48.425216666666664,
      spotName: "Galheta",
    },
  },
  3490: {
    spot: {
      Lat: -22.966616666666667,
      Long: -43.05258333333333,
      spotName: "Camboinhas",
    },
  },
  3491: {
    spot: {
      Lat: -23.01085,
      Long: -43.361866666666664,
      spotName: "Barra da Tijuca - Posto 8",
    },
  },
  3492: {
    spot: {
      Lat: -22.98603333333333,
      Long: -43.18201666666667,
      spotName: "Shore break  expresso escorpiao",
    },
  },
  3493: { spot: { Lat: -6.22105, Long: -35.068, spotName: "Madeiro" } },
  3494: {
    spot: { Lat: -23.0333, Long: -43.4675, spotName: "Canto do recreio" },
  },
  3495: {
    spot: {
      Lat: -22.988816666666665,
      Long: -43.18915,
      spotName: "Praia do Diabo",
    },
  },
  3496: { spot: { Lat: -0, Long: -0, spotName: "Imbé" } },
  3497: {
    spot: {
      Lat: -22.779066666666665,
      Long: -41.910516666666666,
      spotName: "Geriba",
    },
  },
  3498: { spot: { Lat: -29.3578, Long: -49.734, spotName: "Guarita" } },
  3499: {
    spot: {
      Lat: -22.958183333333334,
      Long: -42.69735,
      spotName: "Ponta Negra - Maricá - RJ",
    },
  },
  3500: {
    spot: { Lat: -28.607516666666665, Long: -48.823, spotName: "Cardozo" },
  },
  3501: {
    spot: { Lat: -23.97175, Long: -46.34721666666667, spotName: "Santos" },
  },
  3502: { spot: { Lat: -28.1354, Long: -48.6427, spotName: "Rosa Sul" } },
  3503: {
    spot: { Lat: -27.1665, Long: -48.49483333333333, spotName: "Mariscal" },
  },
  3504: {
    spot: {
      Lat: -9.772383333333334,
      Long: -35.845166666666664,
      spotName: "Praia  Do  Francês",
    },
  },
  3505: {
    spot: { Lat: -33.4456, Long: -71.68361666666667, spotName: "Isla Negra" },
  },
  3506: {
    spot: {
      Lat: -33.36553333333333,
      Long: -71.69433333333333,
      spotName: "La Peña",
    },
  },
  3507: {
    spot: { Lat: -32.91713333333333, Long: -71.51335, spotName: "La  Boca" },
  },
  3508: {
    spot: {
      Lat: -18.481333333333332,
      Long: -70.33285,
      spotName: "El Gringo",
    },
  },
  3509: {
    spot: {
      Lat: -33.96086666666667,
      Long: -71.87936666666667,
      spotName: "Matanzas",
    },
  },
  3510: {
    spot: { Lat: -18.5081, Long: -70.31828333333333, spotName: "El Rancio" },
  },
  3511: {
    spot: {
      Lat: 12.480216666666667,
      Long: -81.72863333333333,
      spotName: "Punta Sur",
    },
  },
  3512: {
    spot: {
      Lat: 6.031316666666667,
      Long: -77.39868333333334,
      spotName: "Playa El Almejal, El Valle",
    },
  },
  3513: { spot: { Lat: -1.7155, Long: -80.79895, spotName: "La Rinconada" } },
  3514: { spot: { Lat: -1.7959, Long: -80.7641, spotName: "Olon" } },
  3515: { spot: { Lat: 0.50975, Long: -80.02875, spotName: "Mompiche" } },
  3516: {
    spot: { Lat: -2.29045, Long: -80.91465, spotName: "Punta Carnero" },
  },
  3517: {
    spot: {
      Lat: -2.1998333333333333,
      Long: -80.95695,
      spotName: "Paco illescas",
    },
  },
  3518: {
    spot: {
      Lat: -2.1851666666666665,
      Long: -80.9873,
      spotName: "La Chocolatera",
    },
  },
  3519: {
    spot: {
      Lat: -12.158966666666666,
      Long: -77.02768333333333,
      spotName: "Ala Moana",
    },
  },
  3520: {
    spot: {
      Lat: -12.340416666666666,
      Long: -76.82258333333333,
      spotName: "La Isla",
    },
  },
  3521: {
    spot: { Lat: -12.38335, Long: -76.78936666666667, spotName: "El Huayco" },
  },
  3522: {
    spot: {
      Lat: -12.384566666666666,
      Long: -76.78975,
      spotName: "Pena Rosa",
    },
  },
  3523: {
    spot: { Lat: -29.993083333333335, Long: -50.1255, spotName: "Tramandai" },
  },
  3524: {
    spot: { Lat: -29.32731666666667, Long: -49.712, spotName: "Molhes" },
  },
  3525: {
    spot: {
      Lat: -29.784716666666668,
      Long: -50.02255,
      spotName: "Atlântida - Pier",
    },
  },
  3526: {
    spot: { Lat: -28.077733333333335, Long: -48.6266, spotName: "Ferrugem" },
  },
  3527: {
    spot: {
      Lat: -27.905533333333334,
      Long: -48.58678333333334,
      spotName: "Guarda do embau",
    },
  },
  3528: {
    spot: {
      Lat: -27.140116666666668,
      Long: -48.50678333333333,
      spotName: "Bombas",
    },
  },
  3529: {
    spot: {
      Lat: -23.796033333333334,
      Long: -45.991166666666665,
      spotName: "Itaguaré",
    },
  },
  3530: {
    spot: {
      Lat: -34.38766666666667,
      Long: -72.02381666666666,
      spotName: "Infernillo",
    },
  },
  3531: {
    spot: {
      Lat: -33.453116666666666,
      Long: -71.67711666666666,
      spotName: "La Castilla-El Tabo",
    },
  },
  3532: {
    spot: { Lat: -33.17378333333333, Long: -71.6847, spotName: "Quintay" },
  },
  3533: {
    spot: { Lat: -2.64495, Long: -80.41908333333333, spotName: "La Posada" },
  },
  3534: {
    spot: {
      Lat: -12.130433333333333,
      Long: -77.03678333333333,
      spotName: "Makaha",
    },
  },
  3535: {
    spot: {
      Lat: -22.982966666666666,
      Long: -42.021683333333335,
      spotName: "Praia Brava - Pontal do Atalaia",
    },
  },
  3536: {
    spot: {
      Lat: -22.936166666666665,
      Long: -42.495216666666664,
      spotName: "Saquarema - Praia da Vila",
    },
  },
  3537: {
    spot: {
      Lat: -32.00808333333333,
      Long: -52.018883333333335,
      spotName: "Sao Jose do Norte",
    },
  },
  3538: {
    spot: {
      Lat: -26.2306,
      Long: -48.49888333333333,
      spotName: "Praia da Saudade",
    },
  },
  3539: {
    spot: {
      Lat: -27.1562,
      Long: -48.48291666666667,
      spotName: "Quatro Ilhas",
    },
  },
  3540: {
    spot: {
      Lat: -23.778833333333335,
      Long: -45.64913333333333,
      spotName: "Camburi",
    },
  },
  3541: {
    spot: {
      Lat: -32.99255,
      Long: -71.54873333333333,
      spotName: "Los Marineros",
    },
  },
  3542: {
    spot: {
      Lat: -18.488683333333334,
      Long: -70.32906666666666,
      spotName: "El Buey",
    },
  },
  3543: {
    spot: {
      Lat: -22.405116666666668,
      Long: -41.798366666666666,
      spotName: "Cavaleiros",
    },
  },
  3544: {
    spot: {
      Lat: -20.225533333333335,
      Long: -70.15216666666667,
      spotName: "Colegio",
    },
  },
  3545: {
    spot: {
      Lat: 10.398566666666667,
      Long: -75.56446666666666,
      spotName: "Cartagena Jetty",
    },
  },
  3546: {
    spot: {
      Lat: -28.536683333333333,
      Long: -48.76551666666667,
      spotName: "Ipoa",
    },
  },
  3547: {
    spot: {
      Lat: -23.857583333333334,
      Long: -45.2889,
      spotName: "Castelhanos",
    },
  },
  3548: {
    spot: { Lat: -22.938833333333335, Long: -42.4762, spotName: "Itauna" },
  },
  3549: {
    spot: { Lat: -26.6239, Long: -48.67998333333333, spotName: "Barrinha" },
  },
  3550: {
    spot: {
      Lat: -9.6789,
      Long: -35.70251666666667,
      spotName: "Pedra Virada",
    },
  },
  3551: {
    spot: {
      Lat: -33.39896666666667,
      Long: -71.70168333333334,
      spotName: "Ahogados",
    },
  },
  3552: {
    spot: {
      Lat: -1.8282333333333334,
      Long: -80.7538,
      spotName: "Montañita-beachbreak",
    },
  },
  3553: {
    spot: {
      Lat: -29.346883333333334,
      Long: -49.70441666666667,
      spotName: "Ilha dos Lobos",
    },
  },
  3554: {
    spot: { Lat: -33.5001, Long: -71.62463333333334, spotName: "Las Cruces" },
  },
  3555: {
    spot: {
      Lat: -28.039066666666667,
      Long: -48.60686666666667,
      spotName: "Praia do Silveira",
    },
  },
  3556: {
    spot: { Lat: -11.668383333333333, Long: -77.2059, spotName: "Pasamayo" },
  },
  3557: {
    spot: {
      Lat: -24.007733333333334,
      Long: -46.266466666666666,
      spotName: "Astúrias",
    },
  },
  3558: {
    spot: { Lat: 11.044833333333333, Long: -74.9129, spotName: "Punta Roca" },
  },
  3559: {
    spot: { Lat: -12.365, Long: -76.79966666666667, spotName: "Explosivos" },
  },
  3560: {
    spot: { Lat: -27.321983333333332, Long: -48.53545, spotName: "Palmas" },
  },
  3561: {
    spot: {
      Lat: -26.941666666666666,
      Long: -48.628233333333334,
      spotName: "Praia Brava",
    },
  },
  3562: {
    spot: {
      Lat: -2.203333333333333,
      Long: -80.99756666666667,
      spotName: "FAE",
    },
  },
  3563: {
    spot: {
      Lat: -12.180283333333334,
      Long: -77.03778333333334,
      spotName: "La Herradura",
    },
  },
  3564: {
    spot: { Lat: -23.791533333333334, Long: -45.57345, spotName: "Maresias" },
  },
  3565: {
    spot: {
      Lat: -9.776266666666666,
      Long: -78.24591666666667,
      spotName: "Playa Grande",
    },
  },
  3566: {
    spot: { Lat: -23.896733333333334, Long: -46.15135, spotName: "Taguaíba" },
  },
  3567: {
    spot: { Lat: -29.91855, Long: -71.2767, spotName: "Avenida del mar" },
  },
  3568: {
    spot: {
      Lat: -12.334066666666667,
      Long: -76.83303333333333,
      spotName: "Pico Alto",
    },
  },
  3569: {
    spot: { Lat: -0.62895, Long: -80.46078333333334, spotName: "La bellaca" },
  },
  3570: {
    spot: {
      Lat: -12.386533333333333,
      Long: -76.78345,
      spotName: "San Bartolo",
    },
  },
  3571: {
    spot: {
      Lat: -2.638333333333333,
      Long: -80.39858333333333,
      spotName: "Playas",
    },
  },
  3572: {
    spot: { Lat: -12.3475, Long: -76.82353333333333, spotName: "Kon Tiki" },
  },
  3573: {
    spot: {
      Lat: -12.122366666666666,
      Long: -77.04598333333334,
      spotName: "Punta Roquitas",
    },
  },
  3574: {
    spot: { Lat: -29.349416666666666, Long: -49.72985, spotName: "Cal" },
  },
  3575: {
    spot: {
      Lat: -29.324166666666667,
      Long: -49.71241666666667,
      spotName: "Passo de Torres",
    },
  },
  3576: {
    spot: { Lat: -28.60045, Long: -48.81665, spotName: "Prainha do Farol" },
  },
  3577: {
    spot: {
      Lat: -23.521333333333335,
      Long: -45.205216666666665,
      spotName: "Lagoinha",
    },
  },
  3578: {
    spot: {
      Lat: -23.531966666666666,
      Long: -45.2223,
      spotName: "Praia do sape",
    },
  },
  3579: {
    spot: { Lat: -23.972333333333335, Long: -46.362, spotName: "Itarare" },
  },
  3580: {
    spot: { Lat: -24.014983333333333, Long: -46.2727, spotName: "Tombo" },
  },
  3581: {
    spot: { Lat: -10.987666666666666, Long: -37.04115, spotName: "Aracaju" },
  },
  3582: {
    spot: {
      Lat: -33.462516666666666,
      Long: -71.65961666666666,
      spotName: "Chepica",
    },
  },
  3583: {
    spot: {
      Lat: -34.37971666666667,
      Long: -72.01331666666667,
      spotName: "La Puntilla",
    },
  },
  3584: {
    spot: {
      Lat: -34.42373333333333,
      Long: -72.04783333333333,
      spotName: "Punta de Lobos",
    },
  },
  3585: { spot: { Lat: -34.0871, Long: -71.96355, spotName: "Puertecillo" } },
  3586: {
    spot: {
      Lat: -30.071766666666665,
      Long: -71.37683333333334,
      spotName: "Totoralillo",
    },
  },
  3587: {
    spot: { Lat: -20.21785, Long: -70.15861666666666, spotName: "Punta 2" },
  },
  3588: {
    spot: {
      Lat: -2.2085666666666666,
      Long: -80.88631666666667,
      spotName: "Chulluipe",
    },
  },
  3589: {
    spot: { Lat: -1.6309, Long: -80.82573333333333, spotName: "Puerto Rico" },
  },
  3590: {
    spot: { Lat: -12.35325, Long: -76.81795, spotName: "Punta Rocas" },
  },
  3591: {
    spot: { Lat: -28.524983333333335, Long: -48.76245, spotName: "Teresa" },
  },
  3592: {
    spot: {
      Lat: -27.104816666666668,
      Long: -48.60901666666667,
      spotName: "Meia Praia",
    },
  },
  3593: {
    spot: {
      Lat: -24.000933333333332,
      Long: -46.26076666666667,
      spotName: "Pitangueiras Beach",
    },
  },
  3594: {
    spot: {
      Lat: -32.6428,
      Long: -71.43358333333333,
      spotName: "Maitencillo",
    },
  },
  3595: {
    spot: {
      Lat: -32.11148333333333,
      Long: -71.52056666666667,
      spotName: "Punta Quelen",
    },
  },
  3596: { spot: { Lat: -32.96415, Long: -71.54825, spotName: "Reñaca" } },
  3597: {
    spot: { Lat: -12.3399, Long: -76.82653333333333, spotName: "El Paso" },
  },
  3598: {
    spot: {
      Lat: -12.386283333333333,
      Long: -76.78958333333334,
      spotName: "Penascal",
    },
  },
  3599: {
    spot: { Lat: -22.525116666666666, Long: -41.92035, spotName: "Costazul" },
  },
  3600: {
    spot: { Lat: -6.225933333333334, Long: -35.05025, spotName: "Lajão" },
  },
  3601: {
    spot: {
      Lat: -28.24115,
      Long: -48.65388333333333,
      spotName: "Praia da Vila",
    },
  },
  3602: {
    spot: {
      Lat: -26.897583333333333,
      Long: -48.6387,
      spotName: "Navegantes",
    },
  },
  3603: { spot: { Lat: -28.19175, Long: -48.66135, spotName: "Ribanceira" } },
  3604: {
    spot: {
      Lat: -23.402333333333335,
      Long: -45.001466666666666,
      spotName: "Itamambuca",
    },
  },
  3605: {
    spot: {
      Lat: -24.036433333333335,
      Long: -45.84595,
      spotName: "Pitangueiras",
    },
  },
  3606: {
    spot: {
      Lat: -32.77896666666667,
      Long: -71.53961666666666,
      spotName: "Punta Liles",
    },
  },
  3607: {
    spot: {
      Lat: -33.6332,
      Long: -71.63558333333333,
      spotName: "Santo Domingo",
    },
  },
  3608: {
    spot: {
      Lat: -41.737766666666666,
      Long: -73.73336666666667,
      spotName: "Carelmapu",
    },
  },
  3609: {
    spot: {
      Lat: -20.218983333333334,
      Long: -70.15711666666667,
      spotName: "Intendencia",
    },
  },
  3610: {
    spot: {
      Lat: 11.006966666666667,
      Long: -74.9524,
      spotName: "El bolsillo",
    },
  },
  3611: {
    spot: {
      Lat: -23.180133333333334,
      Long: -44.304433333333336,
      spotName: "Aventureiro",
    },
  },
  3612: {
    spot: {
      Lat: -0.4602833333333333,
      Long: -80.45366666666666,
      spotName: "Canoa",
    },
  },
  3613: {
    spot: {
      Lat: -6.211533333333334,
      Long: -35.0775,
      spotName: "Cacimbinhas",
    },
  },
  3614: {
    spot: {
      Lat: -28.613533333333333,
      Long: -48.84538333333333,
      spotName: "Cigana",
    },
  },
  3615: {
    spot: { Lat: -2.16145, Long: -80.82343333333333, spotName: "Coito" },
  },
  3616: {
    spot: { Lat: -2.5594, Long: -80.51116666666667, spotName: "Engabao" },
  },
  3617: {
    spot: {
      Lat: -9.6312,
      Long: -35.69606666666667,
      spotName: "Cruz das Almas",
    },
  },
  3618: {
    spot: {
      Lat: -12.588916666666666,
      Long: -76.70723333333333,
      spotName: "Puerto Viejo",
    },
  },
  3619: {
    spot: {
      Lat: -18.479633333333332,
      Long: -70.3341,
      spotName: "El Toro viejo",
    },
  },
  3620: {
    spot: {
      Lat: -2.6441833333333333,
      Long: -80.40663333333333,
      spotName: "Olas Verdes",
    },
  },
  3621: {
    spot: { Lat: -0.91, Long: -89.62776666666667, spotName: "Tongo Reef" },
  },
  3622: {
    spot: {
      Lat: -12.778316666666667,
      Long: -76.60818333333333,
      spotName: "Asia - Palmas",
    },
  },
  3623: {
    spot: { Lat: -28.342316666666665, Long: -48.7078, spotName: "Itapirubá" },
  },
  3624: {
    spot: { Lat: -28.473966666666666, Long: -48.76265, spotName: "Laguna" },
  },
  3625: {
    spot: {
      Lat: -28.93725,
      Long: -49.32965,
      spotName: "Morro dos Conventos",
    },
  },
  3626: {
    spot: {
      Lat: -28.124366666666667,
      Long: -48.637683333333335,
      spotName: "Rosa Norte",
    },
  },
  3627: {
    spot: {
      Lat: -26.987716666666667,
      Long: -48.62995,
      spotName: "Balneário Camboriú",
    },
  },
  3628: {
    spot: { Lat: -23.7776, Long: -45.67021666666667, spotName: "Baleia" },
  },
  3629: {
    spot: {
      Lat: -23.802816666666665,
      Long: -45.55316666666667,
      spotName: "Paúba",
    },
  },
  3630: {
    spot: { Lat: -23.456316666666666, Long: -45.02125, spotName: "Patiero" },
  },
  3631: {
    spot: {
      Lat: -23.484733333333335,
      Long: -45.073766666666664,
      spotName: "Toninhas",
    },
  },
  3632: {
    spot: {
      Lat: -9.526283333333334,
      Long: -35.583016666666666,
      spotName: "New Orleans",
    },
  },
  3633: {
    spot: {
      Lat: -32.990066666666664,
      Long: -71.5488,
      spotName: "Las Salinas",
    },
  },
  3634: {
    spot: {
      Lat: -33.38976666666667,
      Long: -71.69461666666666,
      spotName: "El Quisco Point",
    },
  },
  3635: {
    spot: { Lat: -33.35845, Long: -71.671, spotName: "El Mejoral-Algarrobo" },
  },
  3636: {
    spot: {
      Lat: -32.410666666666664,
      Long: -71.41465,
      spotName: "Salinas de Pullalli",
    },
  },
  3637: {
    spot: {
      Lat: -2.641783333333333,
      Long: -80.40486666666666,
      spotName: "Pelado",
    },
  },
  3638: {
    spot: { Lat: -12.2528, Long: -76.93215000000001, spotName: "Conchan" },
  },
  3639: {
    spot: {
      Lat: -12.165933333333333,
      Long: -77.03533333333333,
      spotName: "Regatas",
    },
  },
  3640: {
    spot: {
      Lat: -23.032033333333334,
      Long: -43.4756,
      spotName: "Praia da Macumba",
    },
  },
  3641: { spot: { Lat: -22.9998, Long: -43.25435, spotName: "Sao Conrado" } },
  3642: {
    spot: {
      Lat: -28.153733333333335,
      Long: -48.6459,
      spotName: "Ibiraquera",
    },
  },
  3643: {
    spot: { Lat: -28.833849999999998, Long: -49.216, spotName: "Rincão" },
  },
  3644: {
    spot: { Lat: -23.768066666666666, Long: -45.73815, spotName: "Juquehy" },
  },
  3645: {
    spot: {
      Lat: -23.416983333333334,
      Long: -45.03588333333333,
      spotName: "Vermelha do Norte",
    },
  },
  3646: { spot: { Lat: -9.56805, Long: -35.6468, spotName: "Riacho Doce" } },
  3647: {
    spot: {
      Lat: 11.320366666666667,
      Long: -74.09846666666667,
      spotName: "7 olas",
    },
  },
  3648: {
    spot: {
      Lat: 10.394983333333334,
      Long: -75.55536666666667,
      spotName: "Castillogrande",
    },
  },
  3649: {
    spot: {
      Lat: 10.989733333333334,
      Long: -74.96461666666667,
      spotName: "EL muelle",
    },
  },
  3650: {
    spot: { Lat: -0.8905, Long: -89.61438333333334, spotName: "Carola" },
  },
  3651: {
    spot: {
      Lat: -2.269633333333333,
      Long: -80.92848333333333,
      spotName: "Ecuasal",
    },
  },
  3652: {
    spot: {
      Lat: -2.7312166666666666,
      Long: -80.24688333333333,
      spotName: "5 1 2km  &  8 1 2km",
    },
  },
  3653: {
    spot: { Lat: -2.321, Long: -80.89853333333333, spotName: "La Diablica" },
  },
  3654: {
    spot: {
      Lat: -11.066483333333334,
      Long: -77.63755,
      spotName: "Centinela",
    },
  },
  3655: { spot: { Lat: -13.028, Long: -76.48425, spotName: "Cerro Azul" } },
  3656: {
    spot: { Lat: -13.142, Long: -76.39396666666667, spotName: "Pepinos" },
  },
  3657: {
    spot: {
      Lat: -26.915166666666668,
      Long: -48.63936666666667,
      spotName: "Atalaia",
    },
  },
  3658: {
    spot: { Lat: -23.8199, Long: -45.54141666666666, spotName: "Santiago" },
  },
  3659: {
    spot: {
      Lat: -32.92261666666667,
      Long: -71.52598333333333,
      spotName: "Playa Amarilla",
    },
  },
  3660: {
    spot: {
      Lat: -18.479916666666668,
      Long: -70.32926666666667,
      spotName: "El Brazo",
    },
  },
  3661: {
    spot: {
      Lat: -2.195333333333333,
      Long: -80.86143333333334,
      spotName: "Capaes",
    },
  },
  3662: {
    spot: {
      Lat: -0.9286333333333334,
      Long: -89.61245,
      spotName: "La Loberia",
    },
  },
  3663: {
    spot: {
      Lat: -2.2015666666666664,
      Long: -80.96251666666667,
      spotName: "Playero de miramar",
    },
  },
  3664: {
    spot: {
      Lat: -11.742166666666666,
      Long: -77.16925,
      spotName: "Conchitas",
    },
  },
  3665: {
    spot: { Lat: -28.63515, Long: -48.94821666666667, spotName: "Jaguaruna" },
  },
  3666: {
    spot: {
      Lat: -27.095533333333332,
      Long: -48.60973333333333,
      spotName: "Itapema",
    },
  },
  3667: {
    spot: { Lat: -11.21195, Long: -77.62991666666667, spotName: "Paraiso" },
  },
  3668: {
    spot: {
      Lat: -26.957183333333333,
      Long: -48.629216666666665,
      spotName: "Praia dos Amores",
    },
  },
  3669: {
    spot: { Lat: -23.51135, Long: -45.12943333333333, spotName: "Sununga" },
  },
  3670: {
    spot: {
      Lat: -23.808666666666667,
      Long: -46.02206666666667,
      spotName: "Riviera de São Lourenço",
    },
  },
  3671: {
    spot: {
      Lat: -23.46313333333333,
      Long: -45.04935,
      spotName: "Vermelha do Centro",
    },
  },
  3672: {
    spot: {
      Lat: -33.01936666666667,
      Long: -71.56236666666666,
      spotName: "Cap Ducal",
    },
  },
  3673: {
    spot: {
      Lat: -33.36031666666667,
      Long: -71.67528333333334,
      spotName: "La Chilena-Algarrobo",
    },
  },
  3674: {
    spot: {
      Lat: -32.713816666666666,
      Long: -71.48065,
      spotName: "El Claron",
    },
  },
  3675: {
    spot: { Lat: -32.92581666666667, Long: -71.52855, spotName: "Negra" },
  },
  3676: {
    spot: {
      Lat: -32.50391666666667,
      Long: -71.44421666666666,
      spotName: "Papudo",
    },
  },
  3677: {
    spot: {
      Lat: -20.224316666666667,
      Long: -70.153,
      spotName: "Las Urracas",
    },
  },
  3678: {
    spot: { Lat: -20.226666666666667, Long: -70.15065, spotName: "Mauro" },
  },
  3679: {
    spot: { Lat: -1.6799, Long: -80.81576666666666, spotName: "Ayampe" },
  },
  3680: {
    spot: {
      Lat: -1.6603333333333334,
      Long: -80.81671666666666,
      spotName: "Las Tunas",
    },
  },
  3681: { spot: { Lat: -1.73215, Long: -80.784, spotName: "La entrada" } },
  3682: {
    spot: {
      Lat: -0.9382666666666667,
      Long: -80.73036666666667,
      spotName: "Manta - El Escondido",
    },
  },
  3683: {
    spot: {
      Lat: -10.564016666666667,
      Long: -77.90783333333333,
      spotName: "Bermejo",
    },
  },
  3684: {
    spot: {
      Lat: -12.171416666666667,
      Long: -77.03573333333334,
      spotName: "Caplina",
    },
  },
  3685: {
    spot: {
      Lat: -12.074516666666666,
      Long: -77.18226666666666,
      spotName: "Camotal",
    },
  },
  3686: {
    spot: {
      Lat: -6.2277000000000005,
      Long: -35.04463333333333,
      spotName: "Pipa",
    },
  },
  3687: {
    spot: { Lat: -29.342433333333332, Long: -49.7245, spotName: "Prainha" },
  },
  3688: {
    spot: { Lat: -28.11445, Long: -48.63556666666667, spotName: "Vermelha" },
  },
  3689: {
    spot: {
      Lat: -27.148366666666668,
      Long: -48.489533333333334,
      spotName: "Bombinhas",
    },
  },
  3690: {
    spot: {
      Lat: -23.917383333333333,
      Long: -45.34778333333333,
      spotName: "Bonete",
    },
  },
  3691: {
    spot: { Lat: -23.819116666666666, Long: -45.4662, spotName: "Guaecá" },
  },
  3692: {
    spot: { Lat: -32.58838333333333, Long: -71.44825, spotName: "Cachagua" },
  },
  3693: {
    spot: {
      Lat: -31.002483333333334,
      Long: -71.63351666666667,
      spotName: "Teniente",
    },
  },
  3694: {
    spot: {
      Lat: -20.228566666666666,
      Long: -70.14871666666667,
      spotName: "Cavancha",
    },
  },
  3695: {
    spot: { Lat: -20.22735, Long: -70.14981666666667, spotName: "Punta 1" },
  },
  3696: {
    spot: {
      Lat: -20.234233333333332,
      Long: -70.15501666666667,
      spotName: "La Bestia",
    },
  },
  3697: {
    spot: { Lat: 10.394, Long: -75.55748333333334, spotName: "Hilton" },
  },
  3698: {
    spot: { Lat: 11.004716666666667, Long: -74.9528, spotName: "Pradomar" },
  },
  3699: {
    spot: {
      Lat: 3.9053666666666667,
      Long: -77.31903333333334,
      spotName: "Juanchaco",
    },
  },
  3700: {
    spot: {
      Lat: -2.6398333333333333,
      Long: -80.40156666666667,
      spotName: "Chabela",
    },
  },
  3701: {
    spot: { Lat: -1.8194833333333333, Long: -80.7574, spotName: "Montañita" },
  },
  3702: {
    spot: {
      Lat: -1.6255833333333332,
      Long: -80.84418333333333,
      spotName: "Río Chico",
    },
  },
  3703: {
    spot: {
      Lat: -2.644683333333333,
      Long: -80.41223333333333,
      spotName: "Sharkbay",
    },
  },
  3704: {
    spot: {
      Lat: -11.74125,
      Long: -77.15651666666666,
      spotName: "Infiernillo",
    },
  },
  3705: {
    spot: {
      Lat: -23.040766666666666,
      Long: -43.505266666666664,
      spotName: "Prainha",
    },
  },
  3706: {
    spot: {
      Lat: -5.879266666666666,
      Long: -35.17126666666667,
      spotName: "Ponta negra",
    },
  },
  3707: {
    spot: {
      Lat: -23.389333333333333,
      Long: -44.9724,
      spotName: "Praia do Felix",
    },
  },
  3708: {
    spot: {
      Lat: -23.478833333333334,
      Long: -45.067283333333336,
      spotName: "Praia Grande (PG)",
    },
  },
  3709: {
    spot: {
      Lat: -23.9022,
      Long: -46.15271666666667,
      spotName: "Praia de Iporanga",
    },
  },
  3710: {
    spot: { Lat: -34.4351, Long: -72.04806666666667, spotName: "Pancora" },
  },
  3711: {
    spot: {
      Lat: -32.78281666666667,
      Long: -71.542,
      spotName: "Puntilla Sanfuentes",
    },
  },
  3712: {
    spot: { Lat: -32.829483333333336, Long: -71.52615, spotName: "Ritoque" },
  },
  3713: {
    spot: {
      Lat: -21.826183333333333,
      Long: -70.14403333333334,
      spotName: "Barrancon",
    },
  },
  3714: {
    spot: {
      Lat: -0.9528666666666666,
      Long: -80.81368333333333,
      spotName: "San Mateo",
    },
  },
  3715: {
    spot: {
      Lat: -12.145216666666666,
      Long: -77.02648333333333,
      spotName: "Barranquito",
    },
  },
  3716: {
    spot: {
      Lat: -12.324916666666667,
      Long: -76.8382,
      spotName: "Caballeros",
    },
  },
  3717: {
    spot: {
      Lat: -12.124266666666667,
      Long: -77.04131666666666,
      spotName: "La Pampilla",
    },
  },
  3718: {
    spot: {
      Lat: -12.571733333333333,
      Long: -76.7165,
      spotName: "Puerto Nuevo",
    },
  },
  3719: {
    spot: { Lat: -12.382, Long: -76.78911666666667, spotName: "Santa Rosa" },
  },
  3720: { spot: { Lat: -12.1296, Long: -77.0375, spotName: "Waikiki" } },
  3721: { spot: { Lat: -3.9801, Long: -80.9799, spotName: "Punta Sal" } },
  3722: {
    spot: {
      Lat: -12.335083333333333,
      Long: -76.83061666666667,
      spotName: "Playa Norte",
    },
  },
  3723: {
    spot: {
      Lat: 10.500033333333333,
      Long: -67.69413333333334,
      spotName: "Cuyagua (Toda San)",
    },
  },
  3724: {
    spot: {
      Lat: -27.049116666666666,
      Long: -48.58678333333334,
      spotName: "Estaleirinho",
    },
  },
  3725: {
    spot: {
      Lat: -26.566916666666668,
      Long: -48.657516666666666,
      spotName: "Foz do Itapocu",
    },
  },
  3726: {
    spot: {
      Lat: -12.401283333333334,
      Long: -76.77855,
      spotName: "Santa Maria",
    },
  },
  3727: {
    spot: { Lat: -4.45175, Long: -81.28616666666667, spotName: "Lobitos" },
  },
  3728: {
    spot: {
      Lat: -34.9088,
      Long: -54.826816666666666,
      spotName: "Bikini Beach (Left Reef Break)",
    },
  },
  3729: {
    spot: {
      Lat: -4.566116666666667,
      Long: 55.45388333333333,
      spotName: "Carana beach",
    },
  },
  3730: {
    spot: { Lat: -33.974833333333336, Long: -53.5309, spotName: "La Moza" },
  },
  3731: {
    spot: {
      Lat: -30.079066666666666,
      Long: 30.872416666666666,
      spotName: "Warner Beach",
    },
  },
  3732: {
    spot: {
      Lat: -0.7633500000000001,
      Long: -90.33285,
      spotName: "Tortuga Bay",
    },
  },
  3733: {
    spot: {
      Lat: -34.04895,
      Long: -53.539883333333336,
      spotName: "Punta del Diablo",
    },
  },
  3734: {
    spot: {
      Lat: -30.039816666666667,
      Long: -50.14726666666667,
      spotName: "Oasis Sul",
    },
  },
  3735: {
    spot: {
      Lat: 10.62545,
      Long: -66.71496666666667,
      spotName: "Camuri Grande",
    },
  },
  3736: {
    spot: {
      Lat: 10.628533333333333,
      Long: -66.57455,
      spotName: "Los Caracas",
    },
  },
  3737: {
    spot: { Lat: 10.5086, Long: -68.17361666666666, spotName: "Palma Sola" },
  },
  3738: {
    spot: {
      Lat: 11.060066666666666,
      Long: -63.817233333333334,
      spotName: "Piedras negras",
    },
  },
  3739: {
    spot: {
      Lat: 10.623066666666666,
      Long: -66.69293333333333,
      spotName: "Punta care",
    },
  },
  3740: {
    spot: {
      Lat: -29.785983333333334,
      Long: -50.024633333333334,
      spotName: "Xangri-lá",
    },
  },
  3741: {
    spot: { Lat: -33.720983333333336, Long: 18.4396, spotName: "Slabberts" },
  },
  3742: {
    spot: {
      Lat: -38.57568333333333,
      Long: -58.688316666666665,
      spotName: "Quequen",
    },
  },
  3743: {
    spot: {
      Lat: -4.250333333333334,
      Long: -81.23583333333333,
      spotName: "Cabo Blanco",
    },
  },
  3744: {
    spot: {
      Lat: -8.182983333333333,
      Long: -79.0153,
      spotName: "Las Delicias",
    },
  },
  3745: {
    spot: {
      Lat: -7.41345,
      Long: -79.58968333333334,
      spotName: "El Faro - Pacasmayo",
    },
  },
  3746: {
    spot: {
      Lat: 10.614383333333333,
      Long: -66.37338333333334,
      spotName: "La Sabana (Baja)",
    },
  },
  3747: {
    spot: {
      Lat: -30.410783333333335,
      Long: -50.29266666666667,
      spotName: "Quintão",
    },
  },
  3748: {
    spot: {
      Lat: -34.79976666666666,
      Long: -55.87311666666667,
      spotName: "El Pinar",
    },
  },
  3749: {
    spot: { Lat: 18.458366666666667, Long: -69.9057, spotName: "Guibia" },
  },
  3750: {
    spot: { Lat: -34.957883333333335, Long: -54.936, spotName: "Los Dedos" },
  },
  3751: {
    spot: {
      Lat: -3.6050833333333334,
      Long: -38.762,
      spotName: "Pico das Almas",
    },
  },
  3752: {
    spot: {
      Lat: 28.144616666666668,
      Long: -15.600333333333333,
      spotName: "Vagabundos",
    },
  },
  3753: {
    spot: { Lat: -23.58515, Long: -45.238283333333335, spotName: "Simão" },
  },
  3754: {
    spot: { Lat: -4.106133333333333, Long: -81.0597, spotName: "Mancora" },
  },
  3755: {
    spot: {
      Lat: -4.263683333333334,
      Long: -81.24681666666666,
      spotName: "Panic Point",
    },
  },
  3756: {
    spot: {
      Lat: -16.727666666666668,
      Long: -72.42013333333334,
      spotName: "San Maloy",
    },
  },
  3757: {
    spot: { Lat: -34.89306666666667, Long: -55.2658, spotName: "El Pehue" },
  },
  3758: {
    spot: {
      Lat: 10.710166666666666,
      Long: -62.98815,
      spotName: "Chaguarama de sotillo",
    },
  },
  3759: {
    spot: {
      Lat: -24.095716666666668,
      Long: -46.61855,
      spotName: "Pier de Mongaguá",
    },
  },
  3760: {
    spot: {
      Lat: 38.69306666666667,
      Long: -9.371633333333333,
      spotName: "Sao Pedro",
    },
  },
  3761: {
    spot: { Lat: -12.22015, Long: -77.00226666666667, spotName: "Villa" },
  },
  3762: {
    spot: {
      Lat: -12.160333333333334,
      Long: -77.02766666666666,
      spotName: "Triangulo",
    },
  },
  3763: {
    spot: { Lat: -7.5193666666666665, Long: -79.54185, spotName: "Puemape" },
  },
  3764: {
    spot: {
      Lat: -34.919016666666664,
      Long: -54.853716666666664,
      spotName: "La Boya",
    },
  },
  3765: {
    spot: { Lat: 10.480633333333333, Long: -67.8088, spotName: "La Cienaga" },
  },
  3766: {
    spot: {
      Lat: 10.594933333333334,
      Long: -66.11581666666666,
      spotName: "Majagua",
    },
  },
  3767: {
    spot: {
      Lat: -23.17145,
      Long: -44.12898333333333,
      spotName: "Lopes Mendes",
    },
  },
  3768: {
    spot: {
      Lat: -7.705016666666666,
      Long: -79.45228333333333,
      spotName: "Chicama",
    },
  },
  3769: {
    spot: {
      Lat: -4.667583333333333,
      Long: -81.32536666666667,
      spotName: "Balconies",
    },
  },
  3770: {
    spot: {
      Lat: -17.103466666666666,
      Long: -71.90991666666666,
      spotName: "Mejia",
    },
  },
  3771: {
    spot: {
      Lat: -34.897166666666664,
      Long: -56.0945,
      spotName: "Playa Honda",
    },
  },
  3772: {
    spot: {
      Lat: 10.510466666666666,
      Long: -67.60593333333334,
      spotName: "Choroni (Malecon)",
    },
  },
  3773: {
    spot: { Lat: 10.700433333333333, Long: -62.9672, spotName: "Pui Pui" },
  },
  3774: {
    spot: {
      Lat: -22.9547,
      Long: -43.095666666666666,
      spotName: "Piratininga",
    },
  },
  3775: {
    spot: {
      Lat: -4.598233333333333,
      Long: -81.29483333333333,
      spotName: "El Golf",
    },
  },
  3776: {
    spot: { Lat: -4.457316666666666, Long: -81.29925, spotName: "Baterias" },
  },
  3777: {
    spot: {
      Lat: -5.129683333333333,
      Long: -81.16963333333334,
      spotName: "Yacila",
    },
  },
  3778: {
    spot: {
      Lat: -3.8511166666666665,
      Long: -80.83328333333333,
      spotName: "Peña Redonda",
    },
  },
  3779: {
    spot: { Lat: -5.8417666666666666, Long: -81.1075, spotName: "Nonura" },
  },
  3780: {
    spot: { Lat: -34.962783333333334, Long: -54.94, spotName: "El Emir" },
  },
  3781: {
    spot: { Lat: -34.91956666666667, Long: -54.866, spotName: "La Barra" },
  },
  3782: {
    spot: { Lat: -34.9441, Long: -54.91426666666667, spotName: "La Plage" },
  },
  3783: {
    spot: {
      Lat: -34.662416666666665,
      Long: -54.17576666666667,
      spotName: "Los Botes",
    },
  },
  3784: { spot: { Lat: 10.6222, Long: -66.19525, spotName: "Chirere" } },
  3785: {
    spot: {
      Lat: 10.617966666666666,
      Long: -66.83838333333334,
      spotName: "Los Coquitos",
    },
  },
  3786: {
    spot: {
      Lat: 10.464133333333333,
      Long: -67.93058333333333,
      spotName: "La bocaina",
    },
  },
  3787: { spot: { Lat: 11.1307, Long: -63.84395, spotName: "Parguito" } },
  3788: {
    spot: {
      Lat: 10.456883333333334,
      Long: -67.92233333333333,
      spotName: "Patanemo",
    },
  },
  3789: {
    spot: {
      Lat: -29.758683333333334,
      Long: -50.01096666666667,
      spotName: "Capao da Canoa",
    },
  },
  3790: {
    spot: { Lat: -27.080183333333334, Long: -48.58845, spotName: "Mocó" },
  },
  3791: {
    spot: {
      Lat: -26.21955,
      Long: -48.5021,
      spotName: "Sao Francisco do Sul",
    },
  },
  3792: {
    spot: {
      Lat: -18.739383333333333,
      Long: -39.746383333333334,
      spotName: "Guriri",
    },
  },
  3793: {
    spot: {
      Lat: 39.38791666666667,
      Long: -74.38631666666667,
      spotName: "38th St. Beach",
    },
  },
  3794: {
    spot: {
      Lat: -4.177833333333333,
      Long: -81.14143333333334,
      spotName: "Organos",
    },
  },
  3795: {
    spot: {
      Lat: 11.147,
      Long: -63.864216666666664,
      spotName:
        "Isla Margerita - Playa Parguito (Playa Parguito (Isla de Margarita))",
    },
  },
  3796: {
    spot: { Lat: 11.0548, Long: -63.815266666666666, spotName: "Guacuco" },
  },
  3797: {
    spot: { Lat: 10.6239, Long: -66.74461666666667, spotName: "Puerto Azul" },
  },
  3798: {
    spot: {
      Lat: -27.958933333333334,
      Long: -48.62466666666667,
      spotName: "Gamboa",
    },
  },
  3799: {
    spot: {
      Lat: -14.051166666666667,
      Long: -171.69035,
      spotName: "devils island",
    },
  },
  3800: {
    spot: {
      Lat: -34.76643333333333,
      Long: -55.711416666666665,
      spotName: "Parque del plata",
    },
  },
  3801: {
    spot: {
      Lat: -34.91648333333333,
      Long: -54.84778333333333,
      spotName: "Montoya",
    },
  },
  3802: {
    spot: {
      Lat: -34.954883333333335,
      Long: -54.929233333333336,
      spotName: "Zorba",
    },
  },
  3803: {
    spot: {
      Lat: 10.617483333333332,
      Long: -66.83808333333333,
      spotName: "Los Cocos, Venezuela.",
    },
  },
  3804: {
    spot: {
      Lat: -34.58755,
      Long: -54.12178333333333,
      spotName: "El desplayado",
    },
  },
  3805: {
    spot: { Lat: -34.64318333333333, Long: -54.1542, spotName: "La Aguada" },
  },
  3806: {
    spot: { Lat: -34.95835, Long: -54.92751666666667, spotName: "La Olla" },
  },
  3807: {
    spot: {
      Lat: 20.459866666666667,
      Long: -86.80383333333333,
      spotName: "El Galeon",
    },
  },
  3808: {
    spot: { Lat: -12.3384, Long: -76.82216666666666, spotName: "Puntilla" },
  },
  3809: {
    spot: { Lat: -4.4456, Long: -81.27608333333333, spotName: "Piscinas" },
  },
  3810: {
    spot: {
      Lat: -16.701133333333335,
      Long: -72.45933333333333,
      spotName: "Playuela",
    },
  },
  3811: {
    spot: {
      Lat: -34.00395,
      Long: -53.52996666666667,
      spotName: "Los Pesqueros",
    },
  },
  3812: {
    spot: {
      Lat: -32.178333333333335,
      Long: -52.14215,
      spotName: "Praia do Cassino",
    },
  },
  3813: {
    spot: { Lat: -28.085383333333333, Long: -48.6309, spotName: "Barrinha" },
  },
  3814: {
    spot: {
      Lat: -12.132066666666667,
      Long: -77.03451666666666,
      spotName: "Redondo",
    },
  },
  3815: {
    spot: {
      Lat: -8.081916666666666,
      Long: -79.12491666666666,
      spotName: "Huanchaco",
    },
  },
  3816: {
    spot: { Lat: -4.4497, Long: -81.27926666666667, spotName: "Los muelles" },
  },
  3817: {
    spot: {
      Lat: -34.66353333333333,
      Long: -54.18371666666667,
      spotName: "Zanja Honda",
    },
  },
  3818: {
    spot: {
      Lat: -28.419033333333335,
      Long: -48.744283333333335,
      spotName: "Cavalinho",
    },
  },
  3819: { spot: { Lat: -28.61595, Long: -48.8595, spotName: "Camacho" } },
  3820: {
    spot: {
      Lat: -12.328683333333334,
      Long: -76.83555,
      spotName: "Señoritas",
    },
  },
  3821: {
    spot: {
      Lat: -4.451933333333334,
      Long: -81.29041666666667,
      spotName: "El Hueco",
    },
  },
  3822: {
    spot: {
      Lat: 11.126533333333333,
      Long: -63.92296666666667,
      spotName: "Puerto Cruz",
    },
  },
  3823: {
    spot: {
      Lat: -23.026216666666667,
      Long: -43.45803333333333,
      spotName: "Posto 10 - Recreio",
    },
  },
  3824: {
    spot: { Lat: -28.49735, Long: -48.74875, spotName: "Praia de Cima" },
  },
  3825: {
    spot: {
      Lat: 32.778216666666665,
      Long: -117.25343333333333,
      spotName: "El Carmel Point",
    },
  },
  3826: {
    spot: {
      Lat: -22.928833333333333,
      Long: -43.17026666666667,
      spotName: "Flamengo",
    },
  },
  3827: {
    spot: { Lat: -34.0358, Long: 22.75835, spotName: "Gerickes back reef" },
  },
  3828: {
    spot: {
      Lat: 14.758133333333333,
      Long: -17.490033333333333,
      spotName: "Vivier 2",
    },
  },
  3829: {
    spot: { Lat: 9.719216666666666, Long: 98.39355, spotName: "Koh Phayam" },
  },
  3830: {
    spot: {
      Lat: -34.309866666666665,
      Long: 18.46175,
      spotName: "Black Rocks",
    },
  },
  3831: {
    spot: {
      Lat: -28.256233333333334,
      Long: -48.6727,
      spotName: "Castelinho",
    },
  },
  3832: {
    spot: {
      Lat: 47.93911666666666,
      Long: -4.404216666666667,
      spotName: "Penhors Reef",
    },
  },
  3833: {
    spot: {
      Lat: 51.12506666666667,
      Long: -4.2457,
      spotName: "Down End Point",
    },
  },
  3834: {
    spot: {
      Lat: -30.474716666666666,
      Long: 17.35565,
      spotName: "Wallekraal Point",
    },
  },
  3835: {
    spot: { Lat: -33.572433333333336, Long: 115.08685, spotName: "Meelup" },
  },
  3836: {
    spot: {
      Lat: -29.44771666666667,
      Long: 16.9665,
      spotName: "Suicide Reef",
    },
  },
  3837: {
    spot: {
      Lat: -34.06045,
      Long: 18.326166666666666,
      spotName: "Dungeons (The Slab section)",
    },
  },
  3838: {
    spot: {
      Lat: 54.76703333333333,
      Long: 17.544133333333335,
      spotName: "Leba",
    },
  },
  3839: {
    spot: {
      Lat: 38.678066666666666,
      Long: -75.07026666666667,
      spotName: "Tower Road",
    },
  },
  3840: {
    spot: {
      Lat: 41.30608333333333,
      Long: -71.855,
      spotName: "east beach lighthouse",
    },
  },
  3841: {
    spot: { Lat: -32.59455, Long: 115.63301666666666, spotName: "Egg Farms" },
  },
  3842: {
    spot: { Lat: -12.556333333333333, Long: -37.98835, spotName: "Casinha" },
  },
  3843: {
    spot: {
      Lat: -17.482983333333333,
      Long: -149.89325,
      spotName: "Taotai - Club Med right",
    },
  },
  3844: {
    spot: {
      Lat: -33.410666666666664,
      Long: 151.46833333333333,
      spotName: "wamberal.winston street",
    },
  },
  3845: {
    spot: {
      Lat: 34.31726666666667,
      Long: -119.3899,
      spotName: "Pitas Point",
    },
  },
  3846: {
    spot: { Lat: 47.93861666666667, Long: -4.4008, spotName: "Penhors" },
  },
  3847: {
    spot: {
      Lat: -25.515316666666667,
      Long: -48.286116666666665,
      spotName: "Farolete",
    },
  },
  3848: {
    spot: {
      Lat: -2.679483333333333,
      Long: -80.35718333333334,
      spotName: "Los Patios",
    },
  },
  3849: {
    spot: {
      Lat: 11.1496,
      Long: -63.857683333333334,
      spotName: "Isla Margarita - playa el agua",
    },
  },
  3850: {
    spot: {
      Lat: -34.0514,
      Long: 23.378816666666665,
      spotName: "Lookout beach",
    },
  },
  3851: {
    spot: {
      Lat: -33.848216666666666,
      Long: 151.28781666666666,
      spotName: "vaucliff reef",
    },
  },
  3852: {
    spot: {
      Lat: -27.834733333333332,
      Long: -48.56675,
      spotName: "Naufragados",
    },
  },
  3853: {
    spot: {
      Lat: 23.224016666666667,
      Long: -16.118816666666667,
      spotName: "Bing's Point",
    },
  },
  3854: {
    spot: {
      Lat: -34.16193333333333,
      Long: 18.327633333333335,
      spotName: "I&J's",
    },
  },
  3855: {
    spot: {
      Lat: -30.313883333333333,
      Long: 17.272100000000002,
      spotName: "Hondeklip Bay Reef",
    },
  },
  3856: {
    spot: {
      Lat: -33.99731666666667,
      Long: 22.568583333333333,
      spotName: "Wilderness Beach",
    },
  },
  3857: {
    spot: { Lat: 31.89725, Long: -116.71371666666667, spotName: "3 emes" },
  },
  3858: {
    spot: {
      Lat: -34.055033333333334,
      Long: 23.379633333333334,
      spotName: "The Wedge",
    },
  },
  3859: {
    spot: {
      Lat: -33.30128333333333,
      Long: 115.64638333333333,
      spotName: "Bunbury - The Wall",
    },
  },
  3860: {
    spot: {
      Lat: -30.612466666666666,
      Long: 17.4344,
      spotName: "Langberg Point",
    },
  },
  3861: {
    spot: {
      Lat: 38.690866666666665,
      Long: -9.3658,
      spotName: "Esquerda da Bafureira",
    },
  },
  3862: {
    spot: { Lat: 31.89255, Long: -116.69666666666667, spotName: "staks" },
  },
  3863: {
    spot: { Lat: 21.6524, Long: -158.06296666666665, spotName: "Log Cabins" },
  },
  3864: {
    spot: {
      Lat: -22.94435,
      Long: -42.468183333333336,
      spotName: "Lage de fora",
    },
  },
  3865: {
    spot: {
      Lat: -3.5056666666666665,
      Long: -38.90526666666667,
      spotName: "Taiba",
    },
  },
  3866: {
    spot: {
      Lat: 41.49366666666667,
      Long: -71.1327,
      spotName: "Cutty wow Reef",
    },
  },
  3867: {
    spot: { Lat: 49.6917, Long: -1.4555833333333332, spotName: "La Mondrée" },
  },
  3868: {
    spot: {
      Lat: 53.971383333333335,
      Long: -10.06185,
      spotName: "Keel beach",
    },
  },
  3869: {
    spot: {
      Lat: -35.63721666666667,
      Long: 138.27118333333334,
      spotName: "Tunkalilla",
    },
  },
  3870: {
    spot: { Lat: -34.09575, Long: 23.376333333333335, spotName: "The Wreck" },
  },
  3871: {
    spot: {
      Lat: -34.798883333333336,
      Long: 20.0635,
      spotName: "Struisbaai Back Reef",
    },
  },
  3872: {
    spot: { Lat: -34.150533333333335, Long: 18.317, spotName: "K 365" },
  },
  3873: { spot: { Lat: -34.179, Long: 18.35245, spotName: "Witsands" } },
  3874: {
    spot: {
      Lat: -14.297733333333333,
      Long: -38.981033333333336,
      spotName: "Prainha",
    },
  },
  3875: {
    spot: {
      Lat: -22.938416666666665,
      Long: -42.472316666666664,
      spotName: "Backdoor",
    },
  },
  3876: {
    spot: {
      Lat: 32.79878333333333,
      Long: -117.25991666666667,
      spotName: "Diamond Street",
    },
  },
  3877: {
    spot: {
      Lat: 46.584583333333335,
      Long: -1.8517166666666667,
      spotName: "Plage des Granges",
    },
  },
  3878: {
    spot: { Lat: 28.04955, Long: -16.5298, spotName: "Atlantic Playa" },
  },
  3879: {
    spot: {
      Lat: -30.062483333333333,
      Long: 17.177966666666666,
      spotName: "Skulpfontein Reef",
    },
  },
  3880: {
    spot: {
      Lat: -31.693166666666666,
      Long: 18.1825,
      spotName: "Olifants Rivermouth",
    },
  },
  3881: {
    spot: {
      Lat: -30.357866666666666,
      Long: 30.718666666666667,
      spotName: "Happy Wanderers",
    },
  },
  3882: {
    spot: {
      Lat: -34.077733333333335,
      Long: 23.057616666666668,
      spotName: "The Heads",
    },
  },
  3883: {
    spot: {
      Lat: -0.5439666666666666,
      Long: 166.95258333333334,
      spotName: "Menen",
    },
  },
  3884: {
    spot: {
      Lat: -30.791983333333334,
      Long: 152.99766666666667,
      spotName: "Grassy Head",
    },
  },
  3885: {
    spot: {
      Lat: -34.427483333333335,
      Long: 21.340133333333334,
      spotName: "Jongensfontein",
    },
  },
  3886: {
    spot: {
      Lat: -34.04703333333333,
      Long: 18.354416666666665,
      spotName: "Hout Bay",
    },
  },
  3887: {
    spot: {
      Lat: -38.83195,
      Long: 146.11971666666668,
      spotName: "Sandy Point",
    },
  },
  3888: {
    spot: {
      Lat: -2.028016666666667,
      Long: 99.55441666666667,
      spotName: "Rikas rights",
    },
  },
  3889: {
    spot: {
      Lat: -38.551383333333334,
      Long: 146.96411666666665,
      spotName: "Woodside Beach",
    },
  },
  3890: {
    spot: {
      Lat: 45.50026666666667,
      Long: -73.54235,
      spotName: "Habitat '67 - Montreal",
    },
  },
  3891: {
    spot: { Lat: 40.0892, Long: 23.978983333333332, spotName: "Sarti Beach" },
  },
  3892: {
    spot: { Lat: -26.93105, Long: -48.62521666666667, spotName: "Morcego" },
  },
  3893: {
    spot: {
      Lat: 32.829616666666666,
      Long: -117.2824,
      spotName: "Emery's Left",
    },
  },
  3894: {
    spot: {
      Lat: 40.496183333333335,
      Long: 8.368233333333333,
      spotName: "La Speranza",
    },
  },
  3895: {
    spot: { Lat: 34.35498333333334, Long: 130.85695, spotName: "Tsunoshima" },
  },
  3896: {
    spot: {
      Lat: 41.30988333333333,
      Long: -71.86318333333334,
      spotName: "Napatree Jetty",
    },
  },
  3897: {
    spot: { Lat: -32.03965, Long: 115.73993333333334, spotName: "Dingoes" },
  },
  3898: {
    spot: {
      Lat: 46.71071666666667,
      Long: -1.9819666666666667,
      spotName: "Sion",
    },
  },
  3899: {
    spot: { Lat: 37.24778333333333, Long: -8.8694, spotName: "Figueiros" },
  },
  3900: {
    spot: {
      Lat: 18.122033333333334,
      Long: -63.019466666666666,
      spotName: "Garbage Heap",
    },
  },
  3901: {
    spot: {
      Lat: -33.566,
      Long: 115.08401666666667,
      spotName: "Point Picquet",
    },
  },
  3902: { spot: { Lat: -30.2686, Long: 30.76655, spotName: "Black Rock" } },
  3903: { spot: { Lat: 54.2792, Long: -8.6059, spotName: "Bay Break" } },
  3904: {
    spot: {
      Lat: 49.657066666666665,
      Long: -1.5236666666666667,
      spotName: "Bretteville",
    },
  },
  3905: {
    spot: {
      Lat: -34.029016666666664,
      Long: 22.7753,
      spotName: "Swartvlei Beach",
    },
  },
  3906: {
    spot: { Lat: -5.88345, Long: -81.14811666666667, spotName: "punta faro" },
  },
  3907: {
    spot: {
      Lat: -34.16665,
      Long: 22.120783333333332,
      spotName: "Inner Pool",
    },
  },
  3908: {
    spot: {
      Lat: -24.898033333333334,
      Long: 153.27386666666666,
      spotName: "North Ngala Rocks",
    },
  },
  3909: {
    spot: { Lat: -10.42925, Long: 105.66933333333333, spotName: "Jetty's" },
  },
  3910: {
    spot: { Lat: -29.164833333333334, Long: -49.58215, spotName: "Gaivota" },
  },
  3911: {
    spot: {
      Lat: -29.269883333333333,
      Long: 114.92201666666666,
      spotName: "denison surf beach",
    },
  },
  3912: {
    spot: {
      Lat: -34.654266666666665,
      Long: 150.86145,
      spotName: "pump rock",
    },
  },
  3913: { spot: { Lat: -34.08415, Long: 22.9595, spotName: "Fish Boma" } },
  3914: {
    spot: { Lat: -34.5803, Long: 19.3405, spotName: "Gansbaai Reefs" },
  },
  3915: {
    spot: {
      Lat: -19.37238333333333,
      Long: 12.703866666666666,
      spotName: "Mowe Bay",
    },
  },
  3916: {
    spot: { Lat: -26.30445, Long: 14.953, spotName: "Luderitz Wedge" },
  },
  3917: {
    spot: {
      Lat: 5.9334,
      Long: 116.04663333333333,
      spotName: "Tanjung Aru beach 3",
    },
  },
  3918: {
    spot: {
      Lat: -34.055616666666666,
      Long: 22.391266666666667,
      spotName: "Herolds Bay",
    },
  },
  3919: {
    spot: {
      Lat: -29.372983333333334,
      Long: -49.748416666666664,
      spotName: "Itapeva",
    },
  },
  3920: {
    spot: { Lat: 43.75653333333333, Long: -87.69355, spotName: "Sheboygan" },
  },
  3921: {
    spot: {
      Lat: 38.83501666666667,
      Long: 20.6579,
      spotName: "tis poutanas to kangelo",
    },
  },
  3922: {
    spot: {
      Lat: -26.383366666666667,
      Long: 153.09583333333333,
      spotName: "Little Cove",
    },
  },
  3923: {
    spot: {
      Lat: -28.255566666666667,
      Long: 153.58771666666667,
      spotName: "Kingscliff - inner bombie",
    },
  },
  3924: {
    spot: {
      Lat: 32.64013333333333,
      Long: -16.953016666666667,
      spotName: "Praia Formosa",
    },
  },
  3925: { spot: { Lat: -34.0136, Long: 18.33465, spotName: "Sandy Bay" } },
  3926: {
    spot: { Lat: -21.516666666666666, Long: 13.85, spotName: "Bocock's Bay" },
  },
  3927: {
    spot: {
      Lat: -0.6885166666666667,
      Long: -48.483266666666665,
      spotName: "Araruna",
    },
  },
  3928: { spot: { Lat: 33.4058, Long: -117.6084, spotName: "Riviera" } },
  3929: {
    spot: {
      Lat: -34.10175,
      Long: 18.351033333333334,
      spotName: "Noordhoek Beach",
    },
  },
  3930: {
    spot: {
      Lat: -34.816766666666666,
      Long: 116.00653333333334,
      spotName: "Salmon beach",
    },
  },
  3931: {
    spot: {
      Lat: 42.11933333333333,
      Long: 27.907933333333332,
      spotName: "Varvara",
    },
  },
  3932: {
    spot: {
      Lat: 53.72535,
      Long: -9.905716666666667,
      spotName: "Carrownisky",
    },
  },
  3933: {
    spot: {
      Lat: -17.482733333333332,
      Long: -149.89496666666668,
      spotName: "Taotai - Club Med left",
    },
  },
  3934: {
    spot: {
      Lat: 11.2833,
      Long: -85.90411666666667,
      spotName: "Playa Maderas",
    },
  },
  3935: {
    spot: {
      Lat: -33.346066666666665,
      Long: 18.146766666666668,
      spotName: "Yzerfontein",
    },
  },
  3936: {
    spot: { Lat: 32.81055, Long: -17.03905, spotName: "Faja da Areia" },
  },
  3937: {
    spot: { Lat: -28.9938, Long: -49.4153, spotName: "Arroio do Silva" },
  },
  3938: { spot: { Lat: -21.0633, Long: 149.2241, spotName: "Slade Point" } },
  3939: { spot: { Lat: -34.32425, Long: 18.466, spotName: "Buffels Bay" } },
  3940: {
    spot: {
      Lat: -34.200516666666665,
      Long: 18.37076666666667,
      spotName: "Scarborough Beach",
    },
  },
  3941: {
    spot: {
      Lat: -38.42666666666667,
      Long: 145.06763333333333,
      spotName: "One and a Half",
    },
  },
  3942: {
    spot: { Lat: -33.676316666666665, Long: 151.316, spotName: "Wamp!" },
  },
  3943: {
    spot: { Lat: -34.55876666666666, Long: 19.35065, spotName: "De Kelders" },
  },
  3944: {
    spot: {
      Lat: -7.045016666666666,
      Long: -34.84141666666667,
      spotName: "Mar do Macaco",
    },
  },
  3945: {
    spot: {
      Lat: -32.76433333333333,
      Long: 152.12776666666667,
      spotName: "Samurai",
    },
  },
  3946: {
    spot: {
      Lat: 53.99485,
      Long: -3.6474666666666664,
      spotName: "The Point (isle of man)",
    },
  },
  3947: {
    spot: {
      Lat: -32.94948333333333,
      Long: 17.884533333333334,
      spotName: "Swartriet beach",
    },
  },
  3948: {
    spot: {
      Lat: -3.7140833333333334,
      Long: -38.540483333333334,
      spotName: "Leste-Oeste",
    },
  },
  3949: {
    spot: {
      Lat: 30.26885,
      Long: -87.57958333333333,
      spotName: "Terry's Cove",
    },
  },
  3950: {
    spot: {
      Lat: 21.188916666666668,
      Long: -157.25085,
      spotName: "Kepuhi Beach - Molokai",
    },
  },
  3951: {
    spot: {
      Lat: 29.857583333333334,
      Long: -81.26488333333333,
      spotName: "St Augustine Pier",
    },
  },
  3952: {
    spot: {
      Lat: -27.0576,
      Long: 153.19988333333333,
      spotName: "Bribie Island",
    },
  },
  3953: {
    spot: {
      Lat: -36.32025,
      Long: 150.12696666666668,
      spotName: "tilba point",
    },
  },
  3954: {
    spot: {
      Lat: 20.1201,
      Long: -155.59013333333334,
      spotName: "Waipio Valley",
    },
  },
  3955: {
    spot: {
      Lat: -36.71725,
      Long: 174.75001666666665,
      spotName: "Browns Bay Bar",
    },
  },
  3956: {
    spot: {
      Lat: 29.816883333333333,
      Long: -81.26226666666666,
      spotName: "Dondanville Road",
    },
  },
  3957: {
    spot: {
      Lat: 30.250066666666665,
      Long: -88.07543333333334,
      spotName: "Dauphin Island Pier",
    },
  },
  3958: {
    spot: {
      Lat: 29.844633333333334,
      Long: -81.26473333333334,
      spotName: "St Augustine A-Street",
    },
  },
  3959: {
    spot: {
      Lat: -9.609383333333334,
      Long: 118.98446666666666,
      spotName: "Pero",
    },
  },
  3960: {
    spot: {
      Lat: 18.124166666666667,
      Long: -63.02721666666667,
      spotName: "Wilderness",
    },
  },
  3961: {
    spot: {
      Lat: 5.976766666666666,
      Long: 116.00613333333334,
      spotName: "Pulau Manukan",
    },
  },
  3962: {
    spot: {
      Lat: -30.04525,
      Long: -50.15003333333333,
      spotName: "Nova Tramandaí",
    },
  },
  3963: {
    spot: {
      Lat: 21.3001,
      Long: -157.87481666666667,
      spotName: "Sand Island",
    },
  },
  3964: {
    spot: {
      Lat: -23.506066666666666,
      Long: 43.70876666666667,
      spotName: "TT s",
    },
  },
  3965: {
    spot: { Lat: -1.8497666666666666, Long: 99.3025, spotName: "Hideaways" },
  },
  3966: {
    spot: {
      Lat: -33.38138333333333,
      Long: 151.48883333333333,
      spotName: "Blue Lagoon Point",
    },
  },
  3967: { spot: { Lat: -34.3459, Long: 19.0034, spotName: "Kleinmond" } },
  3968: {
    spot: {
      Lat: -29.686966666666667,
      Long: -49.97255,
      spotName: "Capao Novo",
    },
  },
  3969: {
    spot: {
      Lat: -33.37096666666667,
      Long: 151.49108333333334,
      spotName: "Shelly Beach",
    },
  },
  3970: {
    spot: {
      Lat: -34.79891666666666,
      Long: 20.058816666666665,
      spotName: "Struisbaai Reef",
    },
  },
  3971: { spot: { Lat: -34.4499, Long: 150.90145, spotName: "Oilies" } },
  3972: {
    spot: {
      Lat: 37.18001666666667,
      Long: 25.5542,
      spotName: "Apollonas. Naxos",
    },
  },
  3973: {
    spot: {
      Lat: 32.75451666666667,
      Long: -117.25501666666666,
      spotName: "O.B. Jetty",
    },
  },
  3974: {
    spot: { Lat: -35.01826666666667, Long: 118.009, spotName: "Punchbowls" },
  },
  3975: {
    spot: { Lat: 21.525516666666668, Long: -105.29055, spotName: "El Faro" },
  },
  3976: {
    spot: {
      Lat: -38.487183333333334,
      Long: 144.9404,
      spotName: "Cape Flinders",
    },
  },
  3977: {
    spot: {
      Lat: 33.10073333333333,
      Long: -117.32021666666667,
      spotName: "South Carlsbad State Beach",
    },
  },
  3978: {
    spot: {
      Lat: -28.336783333333333,
      Long: -48.70471666666667,
      spotName: "Itapirubá Norte",
    },
  },
  3979: {
    spot: {
      Lat: 2.0558833333333335,
      Long: 97.31861666666667,
      spotName: "Bay of Plenty",
    },
  },
  3980: {
    spot: {
      Lat: 49.64281666666667,
      Long: -1.8552666666666666,
      spotName: "La Crecque",
    },
  },
  3981: {
    spot: { Lat: 8.73185, Long: 76.70583333333333, spotName: "Varkala" },
  },
  3982: { spot: { Lat: 43.3037, Long: -2.20615, spotName: "Gaztetape" } },
  3983: {
    spot: {
      Lat: -16.666116666666667,
      Long: -151.53665,
      spotName: "Plei Plei",
    },
  },
  3984: {
    spot: {
      Lat: -31.750316666666667,
      Long: 18.224216666666667,
      spotName: "Strandfontein beachbreak",
    },
  },
  3985: {
    spot: { Lat: 38.62995, Long: -9.22755, spotName: "Praia da saude" },
  },
  3986: {
    spot: {
      Lat: 18.477616666666666,
      Long: -66.26246666666667,
      spotName: "kikita beach",
    },
  },
  3987: {
    spot: { Lat: 54.769016666666666, Long: 18.4845, spotName: "Chalupy" },
  },
  3988: {
    spot: {
      Lat: -34.41996666666667,
      Long: 19.178433333333334,
      spotName: "Onrus",
    },
  },
  3989: {
    spot: { Lat: -26.3705, Long: 153.07595, spotName: "Noosa Main Beach" },
  },
  3990: {
    spot: {
      Lat: -2.62035,
      Long: 151.97578333333334,
      spotName: "simberi island",
    },
  },
  3991: {
    spot: {
      Lat: 42.74745,
      Long: 10.240966666666667,
      spotName: "Marina di Campo  ( Elba island )",
    },
  },
  3992: {
    spot: {
      Lat: 8.081266666666666,
      Long: -81.81768333333333,
      spotName: "Leftovers",
    },
  },
  3993: {
    spot: {
      Lat: 42.80435,
      Long: 10.268616666666667,
      spotName: "Scaglieri  ( Elba island )",
    },
  },
  3994: {
    spot: { Lat: 34.03045, Long: -118.52735, spotName: "Will Rogers" },
  },
  3995: { spot: { Lat: 50.6626, Long: -1.585, spotName: "Needles" } },
  3996: {
    spot: {
      Lat: -34.426066666666664,
      Long: 20.86553333333333,
      spotName: "Cape Infanta",
    },
  },
  3997: {
    spot: { Lat: -0.04395, Long: 98.30566666666667, spotName: "suicide" },
  },
  3998: { spot: { Lat: 11.5124, Long: -86.1717, spotName: "Astillero" } },
  3999: { spot: { Lat: -6.367, Long: -35.0148, spotName: "Baia Formosa" } },
  4000: {
    spot: {
      Lat: 39.91266666666667,
      Long: -74.0762,
      spotName: "Seaside Park, NJ",
    },
  },
  4001: {
    spot: { Lat: -30.85725, Long: 30.380916666666668, spotName: "Lucien" },
  },
  4002: {
    spot: {
      Lat: 13.967833333333333,
      Long: -61.02745,
      spotName: "Marigot Bay",
    },
  },
  4003: {
    spot: {
      Lat: -33.733983333333335,
      Long: 151.30603333333335,
      spotName: "Collaroy End",
    },
  },
  4004: {
    spot: { Lat: -33.2726, Long: 151.56663333333333, spotName: "JD reef" },
  },
  4005: {
    spot: {
      Lat: -38.46958333333333,
      Long: 144.08491666666666,
      spotName: "Fairhaven",
    },
  },
  4006: {
    spot: {
      Lat: 36.78455,
      Long: 25.277483333333333,
      spotName: "IOS Plakoto",
    },
  },
  4007: {
    spot: {
      Lat: 30.27091666666667,
      Long: -87.5594,
      spotName: "Alabama Point",
    },
  },
  4008: {
    spot: {
      Lat: 51.592216666666666,
      Long: -4.296683333333333,
      spotName: "Llangennith",
    },
  },
  4009: {
    spot: {
      Lat: -30.096616666666666,
      Long: 153.19998333333334,
      spotName: "Safety Beach",
    },
  },
  4010: {
    spot: { Lat: 20.9058, Long: -156.44016666666667, spotName: "Kanaha" },
  },
  4011: {
    spot: { Lat: -30.03105, Long: 153.1961, spotName: "Corindi Beach" },
  },
  4012: {
    spot: {
      Lat: 46.509966666666664,
      Long: 6.614933333333333,
      spotName: "Bellerive",
    },
  },
  4013: {
    spot: {
      Lat: 24.891733333333335,
      Long: 118.87361666666666,
      spotName: "Qingshan Wan, Fujian",
    },
  },
  4014: {
    spot: {
      Lat: 21.40585,
      Long: -157.73891666666665,
      spotName: "Shorebreaks",
    },
  },
  4015: {
    spot: {
      Lat: 33.99863333333333,
      Long: -118.48748333333333,
      spotName: "Ocean Park, Santa Monica",
    },
  },
  4016: {
    spot: {
      Lat: -31.816383333333334,
      Long: 18.232833333333332,
      spotName: "Doring Bay",
    },
  },
  4017: {
    spot: {
      Lat: 21.005683333333334,
      Long: -156.6604,
      spotName: "Ironwood Beach",
    },
  },
  4018: {
    spot: { Lat: -34.3345, Long: 21.907516666666666, spotName: "Kanon" },
  },
  4019: {
    spot: {
      Lat: -37.844566666666665,
      Long: -57.50111666666667,
      spotName: "Santa Clara del Mar",
    },
  },
  4020: {
    spot: {
      Lat: -34.386383333333335,
      Long: 150.91491666666667,
      spotName: "Towradgi",
    },
  },
  4021: {
    spot: { Lat: -34.40358333333333, Long: 19.11715, spotName: "Hawston" },
  },
  4022: {
    spot: {
      Lat: 36.56556666666667,
      Long: 35.38936666666667,
      spotName: "Karatas",
    },
  },
  4023: {
    spot: {
      Lat: -33.892583333333334,
      Long: 151.27881666666667,
      spotName: "Bondi Beach",
    },
  },
  4024: { spot: { Lat: -41.5646, Long: 175.21975, spotName: "Ning Nong" } },
  4025: {
    spot: {
      Lat: -32.910866666666664,
      Long: 17.865,
      spotName: "Groot Trekoskraal",
    },
  },
  4026: {
    spot: {
      Lat: 8.491066666666667,
      Long: -13.290883333333333,
      spotName: "Aberdeen Area Beach",
    },
  },
  4027: { spot: { Lat: -32.0017, Long: 115.4838, spotName: "Stark Bay" } },
  4028: {
    spot: {
      Lat: 48.09648333333333,
      Long: -4.467116666666667,
      spotName: "Pointe du Milier",
    },
  },
  4029: {
    spot: {
      Lat: -29.851416666666665,
      Long: 31.040583333333334,
      spotName: "Dairy Beach",
    },
  },
  4030: { spot: { Lat: 46.27445, Long: 6.1719, spotName: "Embouch point" } },
  4031: {
    spot: {
      Lat: -32.49543333333333,
      Long: 152.40775,
      spotName: "Back Bommie",
    },
  },
  4032: {
    spot: {
      Lat: -29.859483333333333,
      Long: -50.064566666666664,
      spotName: "Rainha do Mar",
    },
  },
  4033: {
    spot: { Lat: -33.97281666666667, Long: 18.3705, spotName: "Bali Bay" },
  },
  4034: {
    spot: { Lat: 38.155233333333335, Long: 13.07985, spotName: "Praiola" },
  },
  4035: {
    spot: {
      Lat: 17.928966666666668,
      Long: -66.92188333333333,
      spotName: "Punta de Brea",
    },
  },
  4036: {
    spot: { Lat: 27.115316666666665, Long: -80.14105, spotName: "Stumps" },
  },
  4037: {
    spot: {
      Lat: 42.7583,
      Long: 10.29985,
      spotName: "Lacona  ( Elba island )",
    },
  },
  4038: {
    spot: {
      Lat: -21.207733333333334,
      Long: -159.82358333333335,
      spotName: "Black Rock",
    },
  },
  4039: {
    spot: {
      Lat: -33.303666666666665,
      Long: 115.64641666666667,
      spotName: "The Wall",
    },
  },
  4040: {
    spot: {
      Lat: 18.074666666666666,
      Long: -63.01526666666667,
      spotName: "Galion",
    },
  },
  4041: {
    spot: {
      Lat: 1.2597166666666666,
      Long: 97.22986666666667,
      spotName: "Afulu",
    },
  },
  4042: {
    spot: {
      Lat: -32.49028333333333,
      Long: 152.40826666666666,
      spotName: "suck rock",
    },
  },
  4043: { spot: { Lat: 39.3741, Long: -74.4034, spotName: "The Jetty" } },
  4044: {
    spot: {
      Lat: -34.953633333333336,
      Long: 138.50403333333333,
      spotName: "West Beach",
    },
  },
  4045: {
    spot: { Lat: 54.0118, Long: -10.021583333333334, spotName: "Dugort" },
  },
  4046: {
    spot: {
      Lat: -28.002383333333334,
      Long: 153.42965,
      spotName: "Surfers Paradise 2",
    },
  },
  4047: {
    spot: {
      Lat: 40.29598333333333,
      Long: 0.34586666666666666,
      spotName: "Irta",
    },
  },
  4048: {
    spot: { Lat: -32.71725, Long: 17.9193, spotName: "Cape st. Martin reef" },
  },
  4049: {
    spot: {
      Lat: -30.27815,
      Long: 153.14851666666667,
      spotName: "Taylars Reef",
    },
  },
  4050: { spot: { Lat: 28.2011, Long: -16.83155, spotName: "EL CHALET" } },
  4051: {
    spot: {
      Lat: 12.362983333333334,
      Long: -16.737333333333332,
      spotName: "Cap Skirring",
    },
  },
  4052: {
    spot: { Lat: 30.2294, Long: -88.11841666666666, spotName: "Sand Island" },
  },
  4053: {
    spot: {
      Lat: 42.79125,
      Long: 10.2432,
      spotName: "Procchio ( Elba island )",
    },
  },
  4054: {
    spot: {
      Lat: 21.025383333333334,
      Long: -156.62625,
      spotName: "Windmills",
    },
  },
  4055: {
    spot: {
      Lat: -42.88131666666666,
      Long: 147.39475,
      spotName: "Howrah Beach",
    },
  },
  4056: {
    spot: {
      Lat: -34.6397,
      Long: 150.85516666666666,
      spotName: "Jones Beach",
    },
  },
  4057: {
    spot: {
      Lat: 18.469266666666666,
      Long: -66.08978333333333,
      spotName: "Fiji",
    },
  },
  4058: {
    spot: {
      Lat: -30.333916666666667,
      Long: 30.734766666666665,
      spotName: "Donkey Kong Island",
    },
  },
  4059: {
    spot: {
      Lat: 32.79631666666667,
      Long: 34.9554,
      spotName: "Kadarim (Haifa)",
    },
  },
  4060: {
    spot: {
      Lat: -34.36965,
      Long: 19.096983333333334,
      spotName: "Meerensee beach",
    },
  },
  4061: {
    spot: {
      Lat: -4.725616666666666,
      Long: 55.50568333333333,
      spotName: "Mahe",
    },
  },
  4062: {
    spot: { Lat: 56.892966666666666, Long: 21.17735, spotName: "Pavilosta" },
  },
  4063: {
    spot: {
      Lat: 33.166016666666664,
      Long: -117.36146666666667,
      spotName: "Dutches A-Frame",
    },
  },
  4064: {
    spot: { Lat: 46.51368333333333, Long: 6.5996, spotName: "Lausanne Vidy" },
  },
  4065: {
    spot: {
      Lat: 33.42251666666667,
      Long: -117.62366666666667,
      spotName: "Linda Lane Beach",
    },
  },
  4066: {
    spot: {
      Lat: -35.04123333333333,
      Long: 116.93453333333333,
      spotName: "Twisties",
    },
  },
  4067: {
    spot: {
      Lat: 58.525483333333334,
      Long: -4.251366666666667,
      spotName: "Torrisdale Bay",
    },
  },
  4068: {
    spot: {
      Lat: -33.94806666666667,
      Long: 18.37686666666667,
      spotName: "Camps Bay shorey",
    },
  },
  4069: {
    spot: {
      Lat: -4.759366666666667,
      Long: 55.52166666666667,
      spotName: "Anse Bourgainville",
    },
  },
  4070: {
    spot: {
      Lat: -14.352533333333334,
      Long: -39.00095,
      spotName: "Engenhoca",
    },
  },
  4071: {
    spot: {
      Lat: -14.286016666666667,
      Long: -38.982933333333335,
      spotName: "Tiririca",
    },
  },
  4072: {
    spot: { Lat: -4.3762, Long: 55.83595, spotName: "Pointe Camille" },
  },
  4073: {
    spot: {
      Lat: -4.610566666666667,
      Long: 55.42851666666667,
      spotName: "Beau Vallon Beach",
    },
  },
  4074: {
    spot: {
      Lat: 19.204666666666668,
      Long: -104.69266666666667,
      spotName: "Barra de Navidad",
    },
  },
  4075: {
    spot: {
      Lat: -30.862266666666667,
      Long: 30.372833333333332,
      spotName: "Margate Beach",
    },
  },
  4076: {
    spot: {
      Lat: -4.367983333333333,
      Long: 55.842816666666664,
      spotName: "Grand anse",
    },
  },
  4077: {
    spot: {
      Lat: -4.667116666666667,
      Long: 55.417633333333335,
      spotName: "Port Glaud Lefts",
    },
  },
  4078: {
    spot: { Lat: -37.63075, Long: 176.1808, spotName: "Mt Maunganui" },
  },
  4079: {
    spot: { Lat: 39.121116666666666, Long: 20.59515, spotName: "stonebread" },
  },
  4080: {
    spot: {
      Lat: -4.803283333333333,
      Long: 55.525933333333334,
      spotName: "Police Bay",
    },
  },
  4081: {
    spot: {
      Lat: -30.425066666666666,
      Long: 30.673233333333332,
      spotName: "Ifafa Pipes",
    },
  },
  4082: {
    spot: {
      Lat: 56.127633333333335,
      Long: 12.313183333333333,
      spotName: "Gilleleje øst mole",
    },
  },
  4083: {
    spot: { Lat: 33.6835, Long: -78.88565, spotName: "2nd Avenue Pier" },
  },
  4084: {
    spot: {
      Lat: -33.75091666666667,
      Long: 18.4421,
      spotName: "Haakgat Point",
    },
  },
  4085: { spot: { Lat: 18.363, Long: -64.60305, spotName: "carot bay" } },
  4086: {
    spot: {
      Lat: -23.908516666666667,
      Long: -46.166583333333335,
      spotName: "Sao Pedro",
    },
  },
  4087: {
    spot: {
      Lat: -35.03285,
      Long: 136.93371666666667,
      spotName: "Daly Heads",
    },
  },
  4088: {
    spot: {
      Lat: -23.015483333333332,
      Long: -43.306533333333334,
      spotName: "Lage Postinho",
    },
  },
  4089: {
    spot: {
      Lat: 41.72116666666667,
      Long: -8.870733333333334,
      spotName: "Kings Rock",
    },
  },
  4090: { spot: { Lat: 61.8083, Long: -6.67115, spotName: "Húsavik" } },
  4091: {
    spot: {
      Lat: 15.763433333333333,
      Long: 121.59943333333334,
      spotName: "Cemento",
    },
  },
  4092: {
    spot: {
      Lat: -4.747083333333333,
      Long: 55.521033333333335,
      spotName: "Anse Royale",
    },
  },
  4093: {
    spot: {
      Lat: 35.95191666666667,
      Long: 14.445383333333334,
      spotName: "Bahar ic-Caghaq",
    },
  },
  4094: {
    spot: { Lat: -4.3670333333333335, Long: 55.8517, spotName: "Anse Cocos" },
  },
  4095: {
    spot: {
      Lat: -14.283883333333334,
      Long: -38.98506666666667,
      spotName: "Praia da Resende",
    },
  },
  4096: {
    spot: { Lat: 42.64138333333333, Long: 9.0158, spotName: "Lozari Beach" },
  },
  4097: {
    spot: {
      Lat: 18.089733333333335,
      Long: -63.00933333333333,
      spotName: "Blake's break",
    },
  },
  4098: {
    spot: {
      Lat: -32.991283333333335,
      Long: 27.951533333333334,
      spotName: "Nahoon Beach Break",
    },
  },
  4099: {
    spot: {
      Lat: -30.659166666666668,
      Long: 30.51695,
      spotName: "Marina Beach",
    },
  },
  4100: {
    spot: { Lat: -38.39415, Long: 144.25405, spotName: "Point Addis" },
  },
  4101: {
    spot: {
      Lat: 18.874633333333332,
      Long: -103.98943333333334,
      spotName: "Paraiso",
    },
  },
  4102: {
    spot: { Lat: 43.256766666666664, Long: 16.63365, spotName: "Zlatni Rat" },
  },
  4103: { spot: { Lat: 12.4337, Long: -69.87075, spotName: "Muraya" } },
  4104: {
    spot: { Lat: -29.449166666666667, Long: 153.3657, spotName: "Pippies" },
  },
  4105: {
    spot: { Lat: -36.84855, Long: 149.93836666666667, spotName: "Tura Reef" },
  },
  4106: {
    spot: {
      Lat: -23.839866666666666,
      Long: -46.123666666666665,
      spotName: "Enseada - Bertioga",
    },
  },
  4107: {
    spot: { Lat: 37.3332, Long: 13.393816666666666, spotName: "Backdoor" },
  },
  4108: {
    spot: { Lat: 17.99203333333333, Long: -65.89065, spotName: "Los Bohios" },
  },
  4109: {
    spot: {
      Lat: 34.04601666666667,
      Long: -118.95206666666667,
      spotName: "Staircases",
    },
  },
  4110: {
    spot: { Lat: -14.0775, Long: -38.95445, spotName: "Praia dos Algodoes" },
  },
  4111: {
    spot: { Lat: 33.59525, Long: -117.88921666666667, spotName: "Cylinders" },
  },
  4112: {
    spot: { Lat: 40.03861666666667, Long: 23.98695, spotName: "Sykia beach" },
  },
  4113: {
    spot: {
      Lat: 14.0938,
      Long: -60.96008333333333,
      spotName: "Pigeon Point",
    },
  },
  4114: {
    spot: {
      Lat: -33.796683333333334,
      Long: 18.45705,
      spotName: "Little Bay",
    },
  },
  4115: {
    spot: { Lat: 18.0496, Long: -63.135083333333334, spotName: "Cupecoy" },
  },
  4116: { spot: { Lat: 18.00465, Long: -65.86415, spotName: "Sharky" } },
  4117: {
    spot: {
      Lat: 9.451866666666668,
      Long: -79.74701666666667,
      spotName: "Maria Chiquita",
    },
  },
  4118: {
    spot: { Lat: -31.03151666666667, Long: 30.2356, spotName: "Leisure Bay" },
  },
  4119: {
    spot: {
      Lat: 56.535583333333335,
      Long: 10.71485,
      spotName: "Bønnerup Øst mole",
    },
  },
  4120: {
    spot: { Lat: 55.96825, Long: 11.8473, spotName: "Hundested strand" },
  },
  4121: {
    spot: { Lat: 29.2178, Long: -89.99621666666667, spotName: "Grand Isle" },
  },
  4122: {
    spot: {
      Lat: -33.903816666666664,
      Long: 151.26993333333334,
      spotName: "Bronte Reef",
    },
  },
  4123: {
    spot: { Lat: -30.66405, Long: 30.51625, spotName: "Banana Beach" },
  },
  4124: {
    spot: { Lat: -27.368166666666667, Long: -48.5325, spotName: "Tingua" },
  },
  4125: {
    spot: {
      Lat: 32.6755,
      Long: 34.92881666666667,
      spotName: "stalbeach-haifa",
    },
  },
  4126: {
    spot: { Lat: -33.410516666666666, Long: 124.0068, spotName: "gumboots" },
  },
  4127: {
    spot: { Lat: 48.626216666666664, Long: -2.1517, spotName: "Fremur" },
  },
  4128: {
    spot: {
      Lat: -4.567716666666667,
      Long: 55.45685,
      spotName: "North East Point",
    },
  },
  4129: {
    spot: {
      Lat: 18.255116666666666,
      Long: -62.98513333333333,
      spotName: "Junk's Hole",
    },
  },
  4130: {
    spot: {
      Lat: 17.308683333333335,
      Long: -62.73193333333333,
      spotName: "St. Kitts Marriott Reef",
    },
  },
  4131: {
    spot: {
      Lat: 43.21483333333333,
      Long: -9.025816666666667,
      spotName: "Soesto",
    },
  },
  4132: {
    spot: {
      Lat: -29.758533333333332,
      Long: 153.29473333333334,
      spotName: "minnie waters",
    },
  },
  4133: {
    spot: {
      Lat: -29.72875,
      Long: 31.088483333333333,
      spotName: "Umhlanga Rocks",
    },
  },
  4134: {
    spot: { Lat: 24.074366666666666, Long: -15.58335, spotName: "The Point" },
  },
  4135: {
    spot: { Lat: -33.50031666666667, Long: 18.3125, spotName: "Grotto Bay" },
  },
  4136: {
    spot: {
      Lat: 41.43731666666667,
      Long: -71.45165,
      spotName: "Narragansett Town Beach",
    },
  },
  4137: {
    spot: {
      Lat: 41.49896666666667,
      Long: 2.3867000000000003,
      spotName: "Vilassar",
    },
  },
  4138: {
    spot: { Lat: -34.33255, Long: 150.92746666666667, spotName: "Reef" },
  },
  4139: {
    spot: {
      Lat: 43.07191666666667,
      Long: 131.94176666666667,
      spotName: "Uliss",
    },
  },
  4140: {
    spot: {
      Lat: 35.96758333333333,
      Long: 14.381616666666666,
      spotName: "Imgieba",
    },
  },
  4141: {
    spot: { Lat: 21.405716666666667, Long: -157.7389, spotName: "Kalama" },
  },
  4142: {
    spot: {
      Lat: -30.7421,
      Long: 30.460716666666666,
      spotName: "Port Shepstone",
    },
  },
  4143: {
    spot: {
      Lat: -4.6809666666666665,
      Long: 55.44611666666667,
      spotName: "Grand Anse",
    },
  },
  4144: {
    spot: {
      Lat: -33.41491666666667,
      Long: 151.46761666666666,
      spotName: "rights",
    },
  },
  4145: { spot: { Lat: -18.75705, Long: -174.10085, spotName: "Middles" } },
  4146: { spot: { Lat: -35.9794, Long: 137.19555, spotName: "Vivonne Bay" } },
  4147: {
    spot: {
      Lat: -31.879550000000002,
      Long: 29.264683333333334,
      spotName: "Presleys Bay",
    },
  },
  4148: {
    spot: {
      Lat: 38.45076666666667,
      Long: -123.13121666666666,
      spotName: "Russian Rivermouth",
    },
  },
  4149: {
    spot: {
      Lat: 43.39908333333333,
      Long: -8.329983333333333,
      spotName: "Seijo Branco",
    },
  },
  4150: {
    spot: {
      Lat: -34.2301,
      Long: 18.843383333333332,
      spotName: "Koeelbay (Main beach)",
    },
  },
  4151: {
    spot: {
      Lat: -28.25905,
      Long: 153.58506666666668,
      spotName: "south beach",
    },
  },
  4152: {
    spot: { Lat: 43.3752, Long: -3.2123666666666666, spotName: "Brazomar" },
  },
  4153: { spot: { Lat: -30.6668, Long: 30.51425, spotName: "Sunwich Port" } },
  4154: {
    spot: { Lat: -33.9365, Long: 18.377366666666667, spotName: "1st Bank" },
  },
  4155: {
    spot: {
      Lat: -35.00248333333333,
      Long: 138.51023333333333,
      spotName: "Somerton",
    },
  },
  4156: {
    spot: {
      Lat: 10.342233333333333,
      Long: 107.09623333333333,
      spotName: "Vung Tau beach club",
    },
  },
  4157: {
    spot: {
      Lat: -24.718766666666667,
      Long: 152.27926666666667,
      spotName: "Moore Park Beach",
    },
  },
  4158: {
    spot: {
      Lat: 40.9932,
      Long: 0.9333166666666667,
      spotName: "Miami Platja",
    },
  },
  4159: { spot: { Lat: 50.83605, Long: 0.4662, spotName: "Bexhill" } },
  4160: {
    spot: {
      Lat: -24.92015,
      Long: 152.49251666666666,
      spotName: "Elliott Heads",
    },
  },
  4161: {
    spot: {
      Lat: -32.43561666666667,
      Long: 152.52936666666668,
      spotName: "seals rocks",
    },
  },
  4162: {
    spot: {
      Lat: 39.98676666666667,
      Long: -74.06276666666666,
      spotName: "Seacrest Drive",
    },
  },
  4163: {
    spot: {
      Lat: -38.39136666666667,
      Long: 142.2549,
      spotName: "The Lighthouse",
    },
  },
  4164: {
    spot: {
      Lat: 42.5673,
      Long: 3.046316666666667,
      spotName: "Argelès-Sur-Mer",
    },
  },
  4165: {
    spot: { Lat: 41.39058333333333, Long: -8.7752, spotName: "A-ver-o-mar" },
  },
  4166: {
    spot: {
      Lat: -34.69271666666667,
      Long: 20.23656666666667,
      spotName: "Waenhuiskrans Point",
    },
  },
  4167: {
    spot: {
      Lat: 29.266866666666665,
      Long: -13.52425,
      spotName: 'la Graciosa: "Golden Eye"',
    },
  },
  4168: {
    spot: { Lat: 14.0779, Long: -60.91315, spotName: "Commaret Point" },
  },
  4169: {
    spot: {
      Lat: 7.645583333333334,
      Long: -13.0987,
      spotName: "Turtle Island",
    },
  },
  4170: {
    spot: {
      Lat: 37.862516666666664,
      Long: 27.258966666666666,
      spotName: "Kusadasie",
    },
  },
  4171: {
    spot: {
      Lat: 41.476866666666666,
      Long: -71.27506666666666,
      spotName: "Tuckerman's",
    },
  },
  4172: { spot: { Lat: -4, Long: -7, spotName: "West Reef" } },
  4173: {
    spot: {
      Lat: -34.18326666666667,
      Long: 151.05321666666666,
      spotName: "Square Head",
    },
  },
  4174: {
    spot: {
      Lat: -34.580333333333336,
      Long: 19.340783333333334,
      spotName: "The Toilet (Chowpoo)",
    },
  },
  4175: {
    spot: {
      Lat: -33.81755,
      Long: 18.381866666666667,
      spotName: "Madiba's Hat",
    },
  },
  4176: {
    spot: {
      Lat: 62.298383333333334,
      Long: -7.138366666666666,
      spotName: "Tjornuvik Bay",
    },
  },
  4177: {
    spot: {
      Lat: -38.50706666666667,
      Long: 145.13461666666666,
      spotName: "Cat Bay",
    },
  },
  4178: { spot: { Lat: 33.81575, Long: -118.39155, spotName: "Burnout" } },
  4179: {
    spot: {
      Lat: -33.996116666666666,
      Long: 25.68665,
      spotName: "Flat Rocks",
    },
  },
  4180: {
    spot: {
      Lat: -30.255533333333332,
      Long: 153.14171666666667,
      spotName: "Hills Beach",
    },
  },
  4181: {
    spot: {
      Lat: -34.232033333333334,
      Long: 18.8443,
      spotName: "Koeelbay (Ledges)",
    },
  },
  4182: {
    spot: {
      Lat: -7.182133333333334,
      Long: 56.2573,
      spotName: "Coevity Island-The Handle",
    },
  },
  4183: {
    spot: {
      Lat: -33.38388333333333,
      Long: 151.48748333333333,
      spotName: "Poo Pipes",
    },
  },
  4184: {
    spot: {
      Lat: -28.021583333333332,
      Long: -48.61945,
      spotName: "Garopaba Centro",
    },
  },
  4185: {
    spot: {
      Lat: 34.085116666666664,
      Long: -119.05968333333334,
      spotName: "Murphy's",
    },
  },
  4186: {
    spot: {
      Lat: -35.01195,
      Long: 150.81321666666668,
      spotName: "Warrain Beach Reef",
    },
  },
  4187: {
    spot: {
      Lat: 58.93123333333333,
      Long: 22.050933333333333,
      spotName: "Ristna, Hiiumaa Island",
    },
  },
  4188: {
    spot: {
      Lat: 60.16191666666667,
      Long: 29.142433333333333,
      spotName: "Mys Flotskiy",
    },
  },
  4189: {
    spot: { Lat: 41.46061666666667, Long: -71.2599, spotName: "Elbow Ledge" },
  },
  4190: {
    spot: {
      Lat: -7.7181999999999995,
      Long: 107.83305,
      spotName: "Timmy Turner's New Left",
    },
  },
  4191: {
    spot: {
      Lat: -34.412683333333334,
      Long: 19.279016666666667,
      spotName: "Voelklip",
    },
  },
  4192: { spot: { Lat: -28.60435, Long: -48.812, spotName: "Cemiterio" } },
  4193: {
    spot: {
      Lat: 15.665683333333334,
      Long: -96.55128333333333,
      spotName: "San Agustinillo",
    },
  },
  4194: {
    spot: {
      Lat: 40.874316666666665,
      Long: 14.043616666666667,
      spotName: "Licola Beach",
    },
  },
  4195: {
    spot: {
      Lat: 15.687166666666666,
      Long: 73.70281666666666,
      spotName: "Arambol",
    },
  },
  4196: {
    spot: {
      Lat: -34.1817,
      Long: 18.377716666666668,
      spotName: "Misty Cliffs",
    },
  },
  4197: {
    spot: {
      Lat: -37.59696666666667,
      Long: -73.65715,
      spotName: "Lebu beachie",
    },
  },
  4198: {
    spot: {
      Lat: -34.01023333333333,
      Long: 24.919866666666667,
      spotName: "Albatross",
    },
  },
  4199: {
    spot: {
      Lat: 37.20086666666667,
      Long: -8.903383333333334,
      spotName: "Praia do Bordeira",
    },
  },
  4200: {
    spot: {
      Lat: 47.60616666666667,
      Long: -3.161233333333333,
      spotName: "Kerhillio",
    },
  },
  4201: {
    spot: { Lat: 37.9252, Long: -8.807383333333334, spotName: "Sao Torpes" },
  },
  4202: {
    spot: {
      Lat: 41.717283333333334,
      Long: 9.401383333333333,
      spotName: "Etang de l'Ovu Santu",
    },
  },
  4203: {
    spot: {
      Lat: 41.79013333333333,
      Long: 3.0479833333333333,
      spotName: "Platja de Sant Pol",
    },
  },
  4204: {
    spot: {
      Lat: 10.923133333333332,
      Long: 108.29506666666667,
      spotName: "Mui Ne",
    },
  },
  4205: {
    spot: {
      Lat: -31.799466666666667,
      Long: 115.71775,
      spotName: "Whitfords beach outer reefs or seal island",
    },
  },
  4206: {
    spot: {
      Lat: -11.871383333333334,
      Long: -77.15698333333333,
      spotName: "Roka Beach",
    },
  },
  4207: {
    spot: {
      Lat: 43.14896666666667,
      Long: 3.1586166666666666,
      spotName: "Narbonne Plage",
    },
  },
  4208: {
    spot: {
      Lat: 29.9196,
      Long: -81.29101666666666,
      spotName: "Vilano Beach",
    },
  },
  4209: {
    spot: {
      Lat: -34.3698,
      Long: 18.87013333333333,
      spotName: "Silversands beach",
    },
  },
  4210: {
    spot: { Lat: 11.958716666666668, Long: 79.8397, spotName: "Pondichery" },
  },
  4211: {
    spot: {
      Lat: -32.8807,
      Long: 28.091833333333334,
      spotName: "Glen Eden Point",
    },
  },
  4212: {
    spot: {
      Lat: 18.220383333333334,
      Long: -72.54058333333333,
      spotName: "Jacmel",
    },
  },
  4213: {
    spot: {
      Lat: -12.671116666666666,
      Long: -76.66475,
      spotName: "San Antonio (Regatas)",
    },
  },
  4214: {
    spot: {
      Lat: 14.733016666666666,
      Long: -17.510766666666665,
      spotName: "Julikai",
    },
  },
  4215: {
    spot: {
      Lat: -34.0476,
      Long: 18.349183333333333,
      spotName: "Hout Bay Harbour Wall",
    },
  },
  4216: {
    spot: {
      Lat: 34.434733333333334,
      Long: -119.94436666666667,
      spotName: "Seals",
    },
  },
  4217: { spot: { Lat: -4.20185, Long: -81.16305, spotName: "El Nuro" } },
  4218: {
    spot: {
      Lat: -32.68171666666667,
      Long: 152.13566666666668,
      spotName: "Back Jimmys",
    },
  },
  4219: {
    spot: {
      Lat: -34.10601666666667,
      Long: 18.811433333333333,
      spotName: "Duckies Reef",
    },
  },
  4220: {
    spot: {
      Lat: -33.82098333333333,
      Long: 18.371133333333333,
      spotName: "Madiba's Right",
    },
  },
  4221: {
    spot: { Lat: 20.63235, Long: -156.44841666666667, spotName: "Big Beach" },
  },
  4222: {
    spot: { Lat: 13.231816666666667, Long: -59.6432, spotName: "Gibbs" },
  },
  4223: {
    spot: {
      Lat: 46.7566,
      Long: 7.631783333333333,
      spotName: "Scherzligschleuse",
    },
  },
  4224: { spot: { Lat: -41.39845, Long: 175.1413, spotName: "Lake Ferry" } },
  4225: {
    spot: { Lat: 13.4451, Long: -16.72555, spotName: "Senegambia Beach" },
  },
  4226: {
    spot: {
      Lat: -31.923766666666666,
      Long: 115.75471666666667,
      spotName: "Flozza Pipe",
    },
  },
  4227: {
    spot: {
      Lat: -34.11933333333333,
      Long: 18.460366666666665,
      spotName: "Electrics",
    },
  },
  4228: {
    spot: {
      Lat: -38.511633333333336,
      Long: 145.1631,
      spotName: "summerlands (the other end ! )",
    },
  },
  4229: {
    spot: {
      Lat: 13.467516666666667,
      Long: 144.64088333333333,
      spotName: "Magandas Reef",
    },
  },
  4230: {
    spot: { Lat: -34.08895, Long: 22.97765, spotName: "Buffalo Bay (Point)" },
  },
  4231: {
    spot: {
      Lat: 33.898916666666665,
      Long: 136.11836666666667,
      spotName: "Odomari",
    },
  },
  4232: {
    spot: {
      Lat: 42.7612,
      Long: 10.325583333333334,
      spotName: "Margidore ( Elba island )",
    },
  },
  4233: {
    spot: { Lat: 9.3505, Long: -82.19593333333333, spotName: "wizard Beach" },
  },
  4234: {
    spot: { Lat: 21.29065, Long: -157.8541, spotName: "Ala Moana Courts" },
  },
  4235: {
    spot: {
      Lat: 55.4716,
      Long: -5.714783333333333,
      spotName: "Machrihanish",
    },
  },
  4236: { spot: { Lat: 2.19425, Long: 73.1279, spotName: "Finnimas" } },
  4237: {
    spot: {
      Lat: -36.093333333333334,
      Long: 150.13625,
      spotName: "Potatoe Point",
    },
  },
  4238: {
    spot: { Lat: 43.35106666666667, Long: -3.0203, spotName: "Jefrys" },
  },
  4239: {
    spot: {
      Lat: 14.8713,
      Long: -61.186416666666666,
      spotName: "Grand Rivière Slab.",
    },
  },
  4240: { spot: { Lat: 43.0962, Long: 3.1128, spotName: "Gruissan Plage" } },
  4241: {
    spot: {
      Lat: -21.622,
      Long: 165.46248333333332,
      spotName: "Néra Rivermouth",
    },
  },
  4242: {
    spot: {
      Lat: -34.034533333333336,
      Long: 24.934366666666666,
      spotName: "Boneyards",
    },
  },
  4243: {
    spot: {
      Lat: -35.35966666666667,
      Long: 150.48576666666668,
      spotName: "Erries Right",
    },
  },
  4244: {
    spot: {
      Lat: -35.529716666666666,
      Long: 138.7508,
      spotName: "Middleton [Beach]",
    },
  },
  4245: {
    spot: {
      Lat: 28.068383333333333,
      Long: -80.55693333333333,
      spotName: "Ocean Avenue",
    },
  },
  4246: {
    spot: {
      Lat: -33.84315,
      Long: 122.01321666666666,
      spotName: "Kelpbeds bommie",
    },
  },
  4247: {
    spot: {
      Lat: 33.75488333333333,
      Long: 136.02525,
      spotName: "Umigame Koen Mae",
    },
  },
  4248: {
    spot: {
      Lat: 21.621683333333333,
      Long: -158.08383333333333,
      spotName: "Jockos Point",
    },
  },
  4249: {
    spot: {
      Lat: -34.15821666666667,
      Long: 18.43573333333333,
      spotName: "Glencairn Reef",
    },
  },
  4250: {
    spot: {
      Lat: 40.58541666666667,
      Long: -73.68426666666667,
      spotName: "Grand Blvd",
    },
  },
  4251: { spot: { Lat: -23.33605, Long: -44.6743, spotName: "Laranjeiras" } },
  4252: {
    spot: {
      Lat: 40.76181666666667,
      Long: -8.713366666666667,
      spotName: "praia da torreira",
    },
  },
  4253: {
    spot: { Lat: -34.1125, Long: 18.821033333333332, spotName: "Silkies" },
  },
  4254: {
    spot: {
      Lat: -8.428733333333334,
      Long: -78.92355,
      spotName: "Puerto Morin",
    },
  },
  4255: {
    spot: {
      Lat: 42.73578333333333,
      Long: 10.17665,
      spotName: "Seccheto ( Elba island )",
    },
  },
  4256: {
    spot: { Lat: 28.74775, Long: -13.933833333333334, spotName: "Acid Drop" },
  },
  4257: {
    spot: {
      Lat: -33.834916666666665,
      Long: 121.9291,
      spotName: "Bandy Creek Groyne",
    },
  },
  4258: {
    spot: {
      Lat: 38.265566666666665,
      Long: -104.62218333333334,
      spotName: "Colorado River Surfing",
    },
  },
  4259: {
    spot: { Lat: 50.83578333333333, Long: -4.5552, spotName: "Crooklets" },
  },
  4260: {
    spot: {
      Lat: -33.89536666666667,
      Long: 114.98501666666667,
      spotName: "The Womb",
    },
  },
  4261: {
    spot: {
      Lat: -35.755383333333334,
      Long: 150.21525,
      spotName: "Denhams Beach - Rooster Tail",
    },
  },
  4262: {
    spot: { Lat: 18.457416666666667, Long: -66.07055, spotName: "Sheraton" },
  },
  4263: {
    spot: {
      Lat: -34.038183333333336,
      Long: 24.932949999999998,
      spotName: "Magna Tubes",
    },
  },
  4264: {
    spot: { Lat: 42.0382, Long: 11.916716666666666, spotName: "Pura Vida" },
  },
  4265: {
    spot: { Lat: -34.16885, Long: 24.83485, spotName: "Hullets Reef" },
  },
  4266: {
    spot: { Lat: 35.159733333333335, Long: -120.68725, spotName: "Sewers" },
  },
  4267: {
    spot: { Lat: 18.5068, Long: -67.14225, spotName: "Surfers Beach" },
  },
  4268: {
    spot: {
      Lat: 23.74575,
      Long: -106.84341666666667,
      spotName: "Las Barras de Piaxtla",
    },
  },
  4269: {
    spot: { Lat: 6.350383333333333, Long: 2.43495, spotName: "la méduse" },
  },
  4270: {
    spot: {
      Lat: 2.1840333333333333,
      Long: 73.10043333333333,
      spotName: "Adonis",
    },
  },
  4271: {
    spot: {
      Lat: -38.51375,
      Long: 145.29306666666668,
      spotName: "Crazy Birds",
    },
  },
  4272: {
    spot: { Lat: -34.08976666666667, Long: 24.9157, spotName: "Claptons" },
  },
  4273: {
    spot: {
      Lat: 43.82556666666667,
      Long: 7.845783333333333,
      spotName: "Arma di Taggia",
    },
  },
  4274: {
    spot: {
      Lat: 42.17525,
      Long: -8.815616666666667,
      spotName: "El Portillon",
    },
  },
  4275: {
    spot: {
      Lat: -33.733333333333334,
      Long: 18.4315,
      spotName: "Crayfish Reef",
    },
  },
  4276: {
    spot: { Lat: -35.41895, Long: 150.4258, spotName: "North Tabourie" },
  },
  4277: {
    spot: {
      Lat: 25.365333333333332,
      Long: -76.48403333333333,
      spotName: "Hatchet Bay",
    },
  },
  4278: {
    spot: {
      Lat: 40.63245,
      Long: -73.32481666666666,
      spotName: "Coastguards",
    },
  },
  4279: {
    spot: {
      Lat: 42.82025,
      Long: 10.312433333333333,
      spotName: "Capo bianco ( Elba island )",
    },
  },
  4280: {
    spot: { Lat: 33.054, Long: -16.341033333333332, spotName: "Supertubes" },
  },
  4281: {
    spot: {
      Lat: -26.683466666666668,
      Long: 153.13146666666665,
      spotName: "The Spit",
    },
  },
  4282: {
    spot: { Lat: 39.94521666666667, Long: 23.95405, spotName: "kalamitsi" },
  },
  4283: {
    spot: {
      Lat: 39.74026666666666,
      Long: 3.2196333333333333,
      spotName: "Son Serra de Marina",
    },
  },
  4284: { spot: { Lat: 37.6331, Long: -122.49485, spotName: "Sharp Park" } },
  4285: {
    spot: {
      Lat: -33.68398333333333,
      Long: 114.99243333333334,
      spotName: "Injidup right",
    },
  },
  4286: {
    spot: {
      Lat: -34.181983333333335,
      Long: 24.849866666666667,
      spotName: "Sixty Nines",
    },
  },
  4287: {
    spot: {
      Lat: 55.205133333333336,
      Long: -6.652116666666666,
      spotName: "Portrush",
    },
  },
  4288: {
    spot: {
      Lat: -34.08445,
      Long: 22.975633333333334,
      spotName: "Buffalo Bay (Murpheys)",
    },
  },
  4289: {
    spot: {
      Lat: 33.76245,
      Long: -78.78128333333333,
      spotName: "apache pier",
    },
  },
  4290: {
    spot: {
      Lat: 58.0436,
      Long: 7.1663499999999996,
      spotName: "Njervesanden",
    },
  },
  4291: {
    spot: {
      Lat: 29.5318,
      Long: -81.15136666666666,
      spotName: "Painter's Hill",
    },
  },
  4292: {
    spot: { Lat: -33.99455, Long: 122.24298333333333, spotName: "LuckyBay" },
  },
  4293: {
    spot: {
      Lat: -25.89281666666667,
      Long: -48.56146666666667,
      spotName: "Praia Brava Guaratuba",
    },
  },
  4294: {
    spot: {
      Lat: 44.672266666666665,
      Long: -124.06801666666667,
      spotName: "Agate Beach North",
    },
  },
  4295: { spot: { Lat: 28.5572, Long: -16.34035, spotName: "Bajamar" } },
  4296: {
    spot: {
      Lat: 6.394466666666666,
      Long: 3.3947833333333333,
      spotName: "Lighthouse beach",
    },
  },
  4297: { spot: { Lat: -36.36055, Long: 174.85565, spotName: "T Reef" } },
  4298: {
    spot: {
      Lat: -36.16105,
      Long: 150.12823333333333,
      spotName: "dalmeny point",
    },
  },
  4299: { spot: { Lat: -27.7087, Long: 114.16205, spotName: "Chinaman" } },
  4300: {
    spot: {
      Lat: 50.44558333333333,
      Long: -5.043416666666666,
      spotName: "Watergate Bay",
    },
  },
  4301: {
    spot: {
      Lat: -34.179116666666665,
      Long: 24.846133333333334,
      spotName: "Killers",
    },
  },
  4302: {
    spot: {
      Lat: -38.49921666666667,
      Long: 142.67986666666667,
      spotName: "Childers Cove",
    },
  },
  4303: {
    spot: {
      Lat: 43.13818333333333,
      Long: 3.1499166666666665,
      spotName: "Les Ayguades",
    },
  },
  4304: {
    spot: {
      Lat: 14.057933333333333,
      Long: -60.976283333333335,
      spotName: "Winjammer",
    },
  },
  4305: {
    spot: { Lat: 17.1959, Long: -87.60328333333334, spotName: "East Point" },
  },
  4306: {
    spot: {
      Lat: -33.92113333333333,
      Long: 151.25851666666668,
      spotName: "Coogee",
    },
  },
  4307: {
    spot: { Lat: -14.3444, Long: -39.00138333333334, spotName: "Jeribucaçu" },
  },
  4308: {
    spot: {
      Lat: 50.354166666666664,
      Long: -4.278366666666667,
      spotName: "Whitsand Bay",
    },
  },
  4309: {
    spot: {
      Lat: -38.420633333333335,
      Long: 144.18021666666667,
      spotName: "Soapys",
    },
  },
  4310: {
    spot: {
      Lat: -33.986066666666666,
      Long: 22.80625,
      spotName: "Swartvlei (Rivermouth)",
    },
  },
  4311: {
    spot: { Lat: -33.9388, Long: 151.26363333333333, spotName: "honeycombe" },
  },
  4312: {
    spot: {
      Lat: 9.588683333333334,
      Long: -78.88856666666666,
      spotName: "Kuna An",
    },
  },
  4313: {
    spot: {
      Lat: 11.989116666666666,
      Long: -61.76213333333333,
      spotName: "Prickly Point",
    },
  },
  4314: {
    spot: { Lat: 42.191516666666665, Long: -8.81315, spotName: "La Buraca" },
  },
  4315: {
    spot: {
      Lat: -34.16856666666666,
      Long: 24.834516666666666,
      spotName: "Leftovers",
    },
  },
  4316: {
    spot: {
      Lat: 10.23595,
      Long: -85.84116666666667,
      spotName: "Rivermouth at Avellanas",
    },
  },
  4317: {
    spot: {
      Lat: -13.744716666666667,
      Long: -172.42218333333332,
      spotName: "Pebbles",
    },
  },
  4318: {
    spot: {
      Lat: 6.134616666666667,
      Long: 1.2811333333333332,
      spotName: "Crystal Plage",
    },
  },
  4319: {
    spot: { Lat: 20.346, Long: -86.90528333333333, spotName: "Playa Bonita" },
  },
  4320: { spot: { Lat: -27.97625, Long: -48.628, spotName: "Siriu" } },
  4321: {
    spot: {
      Lat: 50.30051666666667,
      Long: -5.235333333333333,
      spotName: "Chapel Porth",
    },
  },
  4322: {
    spot: {
      Lat: -34.030483333333336,
      Long: 24.933083333333332,
      spotName: "Impossibles",
    },
  },
  4323: {
    spot: {
      Lat: -34.595216666666666,
      Long: -54.122033333333334,
      spotName: "El Barco",
    },
  },
  4324: {
    spot: { Lat: 33.9289, Long: 136.14858333333333, spotName: "Atashika" },
  },
  4325: {
    spot: {
      Lat: -38.48813333333333,
      Long: 144.04346666666666,
      spotName: "steppy's",
    },
  },
  4326: {
    spot: {
      Lat: -38.34865,
      Long: 142.36588333333333,
      spotName: "The Cutting",
    },
  },
  4327: {
    spot: {
      Lat: -25.839083333333335,
      Long: 153.07466666666667,
      spotName: "Inskip Point",
    },
  },
  4328: {
    spot: {
      Lat: -8.807366666666667,
      Long: 115.2349,
      spotName: "Ewan's Left",
    },
  },
  4329: {
    spot: {
      Lat: 22.461233333333332,
      Long: 114.4204,
      spotName: "Breaker Reef",
    },
  },
  4330: {
    spot: { Lat: 30.2399, Long: -87.73763333333333, spotName: "West Pass" },
  },
  4331: {
    spot: {
      Lat: -41.46235,
      Long: 148.26691666666667,
      spotName: "Scamander River Mouth",
    },
  },
  4332: {
    spot: {
      Lat: -14.370583333333334,
      Long: -39.00601666666667,
      spotName: "Itacarezinho ",
    },
  },
  4333: {
    spot: {
      Lat: 39.18145,
      Long: -74.67133333333334,
      spotName: "Second Street",
    },
  },
  4334: {
    spot: {
      Lat: 43.9502,
      Long: 8.153166666666667,
      spotName: "Tortuga - Andora (Liguria)",
    },
  },
  4335: {
    spot: {
      Lat: 41.68123333333333,
      Long: -87.48451666666666,
      spotName: "whiting gun club",
    },
  },
  4336: {
    spot: { Lat: -36.2008, Long: 150.13273333333333, spotName: "Kianga" },
  },
  4337: {
    spot: {
      Lat: -33.3222,
      Long: 115.63026666666667,
      spotName: "Bunbury - Ammos",
    },
  },
  4338: { spot: { Lat: 38.6457, Long: -27.078, spotName: "Contendas" } },
  4339: {
    spot: {
      Lat: 55.06455,
      Long: 15.137833333333333,
      spotName: "Nexo Harbour",
    },
  },
  4340: {
    spot: { Lat: -14.26355, Long: -38.993566666666666, spotName: "Pontal" },
  },
  4341: {
    spot: {
      Lat: 48.16011666666667,
      Long: -123.82845,
      spotName: "lyre  river",
    },
  },
  4342: {
    spot: { Lat: -47.1875, Long: 167.79436666666666, spotName: "Saber Reef" },
  },
  4343: { spot: { Lat: 51.64285, Long: -4.8054, spotName: "Manorbier" } },
  4344: {
    spot: { Lat: -35.01705, Long: 138.51373333333333, spotName: "Brighton" },
  },
  4345: { spot: { Lat: -38.0136, Long: -57.52825, spotName: "Varese" } },
  4346: {
    spot: {
      Lat: 21.310566666666666,
      Long: -157.95386666666667,
      spotName: "Reef Runway",
    },
  },
  4347: {
    spot: {
      Lat: -30.282783333333334,
      Long: 153.14391666666666,
      spotName: "Park Beach, Coffs Harbour",
    },
  },
  4348: {
    spot: { Lat: 52.670183333333334, Long: -4.0959, spotName: "Llwyngwril" },
  },
  4349: {
    spot: {
      Lat: 17.895383333333335,
      Long: -62.79528333333333,
      spotName: "Toiny",
    },
  },
  4350: {
    spot: {
      Lat: 53.08085,
      Long: 4.7367333333333335,
      spotName: "Texel Paal 17",
    },
  },
  4351: {
    spot: {
      Lat: 33.714816666666664,
      Long: -78.85218333333333,
      spotName: "Myrtle Beach 38th to 41st",
    },
  },
  4352: {
    spot: {
      Lat: -33.1798,
      Long: 134.36931666666666,
      spotName: "Baird Bay Reef",
    },
  },
  4353: {
    spot: { Lat: -43.330799999999996, Long: 147.327, spotName: "Coal Point" },
  },
  4354: {
    spot: {
      Lat: -33.97966666666667,
      Long: 25.659016666666666,
      spotName: "Pier",
    },
  },
  4355: {
    spot: {
      Lat: 17.919333333333334,
      Long: -62.8154,
      spotName: "point milou",
    },
  },
  4356: {
    spot: {
      Lat: -32.077533333333335,
      Long: 18.306783333333332,
      spotName: "Sours",
    },
  },
  4357: {
    spot: {
      Lat: 45.779316666666666,
      Long: -1.24145,
      spotName: "Côte sauvage - la pointe espagnole",
    },
  },
  4358: {
    spot: {
      Lat: 35.29495,
      Long: 25.427516666666666,
      spotName: "Stalida Beach",
    },
  },
  4359: { spot: { Lat: -8.3697, Long: 116.07605, spotName: "Gili air" } },
  4360: {
    spot: {
      Lat: 32.79525,
      Long: -79.76688333333334,
      spotName: "35th Street, IOP",
    },
  },
  4361: {
    spot: {
      Lat: -36.43561666666667,
      Long: 150.0765,
      spotName: "Bears Beach",
    },
  },
  4362: {
    spot: {
      Lat: 54.44825,
      Long: 9.869283333333334,
      spotName: "E-Förde Kiekut Point",
    },
  },
  4363: {
    spot: {
      Lat: 20.330783333333333,
      Long: -86.92031666666666,
      spotName: "Chen Rio",
    },
  },
  4364: {
    spot: { Lat: -30.3547, Long: 153.10836666666665, spotName: "trapdoors" },
  },
  4365: {
    spot: {
      Lat: 45.446133333333336,
      Long: -73.26243333333333,
      spotName: "Chambly Rapids",
    },
  },
  4366: {
    spot: {
      Lat: -14.008016666666666,
      Long: -171.86175,
      spotName: "Special K",
    },
  },
  4367: {
    spot: {
      Lat: 15.292966666666667,
      Long: 73.90228333333333,
      spotName: "Betalbatim Beach - Taj",
    },
  },
  4368: {
    spot: {
      Lat: -35.16283333333333,
      Long: 137.63246666666666,
      spotName: "Troubridge Point",
    },
  },
  4369: {
    spot: {
      Lat: 39.41935,
      Long: 23.161583333333333,
      spotName: "VOLOS Agios Ioannis Port",
    },
  },
  4370: {
    spot: {
      Lat: -40.99525,
      Long: 147.07023333333333,
      spotName: "Tam Oshanter Point",
    },
  },
  4371: {
    spot: {
      Lat: -20.1511,
      Long: -40.18346666666667,
      spotName: "Barrote-Jacaraipe",
    },
  },
  4372: {
    spot: { Lat: 30.2732, Long: -87.54743333333333, spotName: "Spuds" },
  },
  4373: {
    spot: {
      Lat: 57.07503333333333,
      Long: -135.37293333333332,
      spotName: "Sandy Beach",
    },
  },
  4374: {
    spot: {
      Lat: 38.027883333333335,
      Long: 24.005983333333333,
      spotName: "Kokkino Limanaki",
    },
  },
  4375: {
    spot: {
      Lat: 52.161033333333336,
      Long: -4.47235,
      spotName: "Llangrannog",
    },
  },
  4376: {
    spot: {
      Lat: 28.074033333333333,
      Long: -14.456983333333334,
      spotName: "Salinas",
    },
  },
  4377: {
    spot: {
      Lat: -33.27053333333333,
      Long: 151.56388333333334,
      spotName: "JD's shorey",
    },
  },
  4378: {
    spot: {
      Lat: 38.45376666666667,
      Long: -9.199083333333334,
      spotName: "Praia da Foz - Cabo Espichel, Sesimbra",
    },
  },
  4379: {
    spot: {
      Lat: 10.3217,
      Long: 107.08431666666667,
      spotName: "Vung Tau right",
    },
  },
  4380: {
    spot: {
      Lat: 41.74186666666667,
      Long: -124.17056666666667,
      spotName: "Crescent City South Beach",
    },
  },
  4381: {
    spot: {
      Lat: 50.93821666666667,
      Long: -4.548166666666667,
      spotName: "noahs right",
    },
  },
  4382: {
    spot: { Lat: -34.47795, Long: 150.91596666666666, spotName: "outer" },
  },
  4383: { spot: { Lat: 52.95195, Long: -6.0133, spotName: "Maghermore" } },
  4384: {
    spot: { Lat: 9.59675, Long: -85.14503333333333, spotName: "Sunset Reef" },
  },
  4385: {
    spot: {
      Lat: -45.98766666666667,
      Long: 170.26851666666667,
      spotName: "Blue Tops",
    },
  },
  4386: {
    spot: {
      Lat: -21.2681,
      Long: -159.78073333333333,
      spotName: "Ava avarua",
    },
  },
  4387: {
    spot: {
      Lat: 26.888083333333334,
      Long: -80.05436666666667,
      spotName: "Juno Pier",
    },
  },
  4388: {
    spot: {
      Lat: -35.04573333333333,
      Long: 150.67543333333333,
      spotName: "Huskisson Bommie",
    },
  },
  4389: {
    spot: {
      Lat: 21.310083333333335,
      Long: -157.6587,
      spotName: "Makapuu Beach",
    },
  },
  4390: {
    spot: {
      Lat: -35.27453333333333,
      Long: 174.29191666666668,
      spotName: "Elliots Bay",
    },
  },
  4391: {
    spot: {
      Lat: 3.0696333333333334,
      Long: 101.60738333333333,
      spotName: "Sunway Lagoon",
    },
  },
  4392: {
    spot: {
      Lat: 23.802616666666665,
      Long: -106.88391666666666,
      spotName: "Tiburon",
    },
  },
  4393: {
    spot: {
      Lat: 33.736466666666665,
      Long: -78.82325,
      spotName: "Myrtle Beach 67th",
    },
  },
  4394: {
    spot: {
      Lat: -14.041083333333333,
      Long: -38.94808333333334,
      spotName: "Saquaira",
    },
  },
  4395: {
    spot: { Lat: 53.72748333333333, Long: 0.03905, spotName: "skerrys" },
  },
  4396: {
    spot: { Lat: 34.32148333333333, Long: -119.375, spotName: "Mondos" },
  },
  4397: { spot: { Lat: 5.93615, Long: 80.5261, spotName: "Matara" } },
  4398: { spot: { Lat: 8.2053, Long: -82.18045, spotName: "Roca Chica" } },
  4399: { spot: { Lat: 38.01855, Long: 24.01435, spotName: "Rafina" } },
  4400: {
    spot: { Lat: -37.4689, Long: 139.98463333333333, spotName: "Drums" },
  },
  4401: {
    spot: {
      Lat: 8.209416666666666,
      Long: -13.158966666666666,
      spotName: "Bureh Beach",
    },
  },
  4402: {
    spot: {
      Lat: -38.56763333333333,
      Long: 143.96518333333333,
      spotName: "Cumbos",
    },
  },
  4403: { spot: { Lat: -30.19885, Long: 114.99665, spotName: "sandy cape" } },
  4404: {
    spot: {
      Lat: -33.786433333333335,
      Long: 151.29113333333333,
      spotName: "The trench",
    },
  },
  4405: {
    spot: {
      Lat: 53.26388333333333,
      Long: -6.106516666666667,
      spotName: "Killiney Bay",
    },
  },
  4406: {
    spot: {
      Lat: -25.89775,
      Long: -48.564283333333336,
      spotName: "Guaratuba Praia Brava",
    },
  },
  4407: {
    spot: { Lat: 51.570033333333335, Long: -4.2908, spotName: "Rhossili" },
  },
  4408: {
    spot: {
      Lat: 37.88896666666667,
      Long: -75.34058333333333,
      spotName: "Out Front",
    },
  },
  4409: {
    spot: { Lat: 23.048, Long: -109.68218333333333, spotName: "The Estuary" },
  },
  4410: {
    spot: {
      Lat: 13.416333333333334,
      Long: -16.747283333333332,
      spotName: "Kololi Kotu & Kombo",
    },
  },
  4411: {
    spot: { Lat: -34.57973333333333, Long: 150.8764, spotName: "Mab Reef" },
  },
  4412: {
    spot: { Lat: 14.7577, Long: -17.515066666666666, spotName: "Philipps" },
  },
  4413: {
    spot: {
      Lat: 43.561933333333336,
      Long: -7.191683333333334,
      spotName: "San Cosme",
    },
  },
  4414: {
    spot: { Lat: -2.7126166666666665, Long: -85.1001, spotName: "El Canon" },
  },
  4415: {
    spot: {
      Lat: 41.50295,
      Long: -8.798266666666667,
      spotName: "Cavalos de fão",
    },
  },
  4416: {
    spot: {
      Lat: 16.787616666666665,
      Long: -99.8204,
      spotName: "Revolcadero",
    },
  },
  4417: {
    spot: {
      Lat: 34.038983333333334,
      Long: -118.89546666666666,
      spotName: "Marshalls",
    },
  },
  4418: {
    spot: {
      Lat: 39.41296666666667,
      Long: -74.35256666666666,
      spotName: "Castles",
    },
  },
  4419: {
    spot: {
      Lat: 21.406833333333335,
      Long: -157.73908333333333,
      spotName: "Dune Circle",
    },
  },
  4420: {
    spot: {
      Lat: -33.28836666666667,
      Long: 151.57188333333335,
      spotName: "Minis",
    },
  },
  4421: {
    spot: {
      Lat: -37.87331666666667,
      Long: 144.8303,
      spotName: "Altona Pier",
    },
  },
  4422: { spot: { Lat: 37.3172, Long: 9.87225, spotName: "banzart" } },
  4423: {
    spot: {
      Lat: -34.5826,
      Long: 150.8734,
      spotName: "Shellharbour South Beach",
    },
  },
  4424: {
    spot: {
      Lat: 39.705133333333336,
      Long: -74.14883333333333,
      spotName: "Harvey Cedars - 7 E. Cape May Street",
    },
  },
  4425: {
    spot: {
      Lat: -38.37338333333334,
      Long: 144.76293333333334,
      spotName: "Shorties - Blairgowrie",
    },
  },
  4426: {
    spot: {
      Lat: -33.398133333333334,
      Long: 115.5996,
      spotName: "Bunbury - Dalyellup Beach",
    },
  },
  4427: {
    spot: {
      Lat: 49.32501666666667,
      Long: -123.15171666666667,
      spotName: "Ambleside Park",
    },
  },
  4428: {
    spot: { Lat: -33.26466666666666, Long: 151.56665, spotName: "Triangles" },
  },
  4429: {
    spot: {
      Lat: -35.63036666666667,
      Long: 138.44975,
      spotName: "sheep creek",
    },
  },
  4430: {
    spot: {
      Lat: 42.15241666666667,
      Long: 14.718633333333333,
      spotName: "Saraceno",
    },
  },
  4431: {
    spot: { Lat: 38.727266666666665, Long: -9.47655, spotName: "Cresmina" },
  },
  4432: {
    spot: {
      Lat: -13.9424,
      Long: -38.92661666666667,
      spotName: "Taipu de Fora",
    },
  },
  4433: {
    spot: {
      Lat: 14.7803,
      Long: -17.418216666666666,
      spotName: "malika sur - mer",
    },
  },
  4434: {
    spot: {
      Lat: -33.636449999999996,
      Long: 151.33138333333332,
      spotName: "Gregs Point",
    },
  },
  4435: {
    spot: {
      Lat: 48.71941666666667,
      Long: -122.5165,
      spotName: "Bellingham Bay",
    },
  },
  4436: {
    spot: { Lat: -31.9922, Long: 115.49618333333333, spotName: "Fruit Bowl" },
  },
  4437: {
    spot: {
      Lat: 54.00123333333333,
      Long: 10.782316666666667,
      spotName: "Timmendorfer Strand",
    },
  },
  4438: {
    spot: {
      Lat: -12.8195,
      Long: -76.55591666666666,
      spotName: "Asia del Mar",
    },
  },
  4439: {
    spot: {
      Lat: -31.594166666666666,
      Long: 152.8426,
      spotName: "Bartletts Beach",
    },
  },
  4440: {
    spot: {
      Lat: 56.1138,
      Long: 12.203366666666666,
      spotName: "smidstrup strand",
    },
  },
  4441: {
    spot: { Lat: 30.08425, Long: -81.3368, spotName: "Middle Access" },
  },
  4442: {
    spot: {
      Lat: 37.088033333333335,
      Long: -75.97898333333333,
      spotName: "Fishermans Island",
    },
  },
  4443: {
    spot: {
      Lat: 32.76015,
      Long: -117.25621666666666,
      spotName: "Mission Beach",
    },
  },
  4444: { spot: { Lat: 42.58705, Long: -70.64805, spotName: "Brace Cove" } },
  4445: {
    spot: {
      Lat: 33.73798333333333,
      Long: -118.10896666666666,
      spotName: "Seal Beach Pier Northside",
    },
  },
  4446: {
    spot: {
      Lat: 37.08708333333333,
      Long: -76.27003333333333,
      spotName: "Grandview",
    },
  },
  4447: { spot: { Lat: 39.22155, Long: -74.6357, spotName: "57th Street" } },
  4448: {
    spot: {
      Lat: 38.93386666666667,
      Long: -0.09695000000000001,
      spotName: "Oliva beach",
    },
  },
  4449: {
    spot: { Lat: 51.54868333333334, Long: -4.2021, spotName: "Horton" },
  },
  4450: {
    spot: {
      Lat: -34.41755,
      Long: 150.9033,
      spotName: "Wollongong - Connies",
    },
  },
  4451: {
    spot: {
      Lat: 38.00606666666667,
      Long: 128.73266666666666,
      spotName: "38th Parallel",
    },
  },
  4452: {
    spot: {
      Lat: 1.6386666666666667,
      Long: 172.95903333333334,
      spotName: "Naa",
    },
  },
  4453: {
    spot: {
      Lat: -33.890433333333334,
      Long: 121.64341666666667,
      spotName: "Salmons Point",
    },
  },
  4454: {
    spot: { Lat: 29.29235, Long: -81.03868333333334, spotName: "Granada" },
  },
  4455: {
    spot: {
      Lat: -32.751266666666666,
      Long: -71.48538333333333,
      spotName: "ventana",
    },
  },
  4456: {
    spot: {
      Lat: 39.1026,
      Long: -74.70911666666666,
      spotName: "Avalon - 15th Street",
    },
  },
  4457: {
    spot: { Lat: 19.7249, Long: -155.07733333333334, spotName: "Bayfront" },
  },
  4458: {
    spot: { Lat: 36.8928, Long: 10.32715, spotName: "la coupole la marsa" },
  },
  4459: {
    spot: {
      Lat: -4.786016666666667,
      Long: 55.49791666666667,
      spotName: "Intendance",
    },
  },
  4460: {
    spot: {
      Lat: 51.720533333333336,
      Long: -5.215583333333333,
      spotName: "Marloes",
    },
  },
  4461: {
    spot: {
      Lat: -30.005483333333334,
      Long: -50.12915,
      spotName: "Tramandai - Malvina",
    },
  },
  4462: { spot: { Lat: -41.11995, Long: -63.00945, spotName: "Espigon" } },
  4463: {
    spot: {
      Lat: -38.42008333333333,
      Long: 144.82401666666667,
      spotName: "St Andrews Beach",
    },
  },
  4464: {
    spot: {
      Lat: -34.36043333333333,
      Long: 18.907833333333333,
      spotName: "Betty's Bay",
    },
  },
  4465: {
    spot: {
      Lat: -2.7870833333333334,
      Long: -40.512616666666666,
      spotName: "Jericoacoara",
    },
  },
  4466: {
    spot: { Lat: 35.42283333333334, Long: 23.56405, spotName: "Sfinari" },
  },
  4467: {
    spot: { Lat: 41.93561666666667, Long: 8.6198, spotName: "capo di feno" },
  },
  4468: {
    spot: {
      Lat: -38.56698333333333,
      Long: 143.96655,
      spotName: "Blue Moons",
    },
  },
  4469: {
    spot: {
      Lat: 12.370033333333334,
      Long: -87.0367,
      spotName: "Poneloya Beach Las Penitas",
    },
  },
  4470: {
    spot: {
      Lat: -1.1021833333333333,
      Long: -80.89193333333333,
      spotName: "Las piñas, La Antena",
    },
  },
  4471: {
    spot: { Lat: -34.62221666666667, Long: -54.1487, spotName: "Arachania" },
  },
  4472: {
    spot: {
      Lat: -34.927033333333334,
      Long: 150.76915,
      spotName: "culburra beach",
    },
  },
  4473: {
    spot: {
      Lat: 11.923983333333334,
      Long: -86.6226,
      spotName: "Hemorrhoids",
    },
  },
  4474: {
    spot: { Lat: -35.2661, Long: 150.51441666666668, spotName: "Hamburgers" },
  },
  4475: {
    spot: {
      Lat: 35.385266666666666,
      Long: -4.992766666666666,
      spotName: "Targha",
    },
  },
  4476: {
    spot: {
      Lat: -38.052166666666665,
      Long: 147.6163,
      spotName: "loch sport",
    },
  },
  4477: {
    spot: {
      Lat: -33.32216666666667,
      Long: 115.6307,
      spotName: "Shelbys Vag",
    },
  },
  4478: {
    spot: {
      Lat: -40.862716666666664,
      Long: 145.42088333333334,
      spotName: "Mini Bluff",
    },
  },
  4479: {
    spot: {
      Lat: 22.122933333333332,
      Long: 113.57133333333333,
      spotName: "Macau HacSa Beach",
    },
  },
  4480: {
    spot: {
      Lat: 17.892933333333332,
      Long: -62.80521666666667,
      spotName: "Kawa",
    },
  },
  4481: { spot: { Lat: -35.0066, Long: 138.51135, spotName: "Minda Bank" } },
  4482: {
    spot: {
      Lat: -35.19808333333334,
      Long: 138.46961666666667,
      spotName: "Moana Beach",
    },
  },
  4483: {
    spot: {
      Lat: -20.23655,
      Long: -40.21501666666666,
      spotName: "Prainha de Carapebus",
    },
  },
  4484: { spot: { Lat: -20.65005, Long: 116.7051, spotName: "Sams Island" } },
  4485: {
    spot: {
      Lat: 44.686733333333336,
      Long: -1.2560833333333332,
      spotName: "Le Cimetière",
    },
  },
  4486: { spot: { Lat: -28.72445, Long: 153.61595, spotName: "Whites" } },
  4487: {
    spot: {
      Lat: 28.29555,
      Long: -80.60898333333333,
      spotName: "13th Street",
    },
  },
  4488: {
    spot: {
      Lat: 33.3463,
      Long: -79.15363333333333,
      spotName: "Pelican poles",
    },
  },
  4489: { spot: { Lat: -27.4008, Long: -48.4134, spotName: "Praia Brava" } },
  4490: {
    spot: {
      Lat: 26.386333333333333,
      Long: -80.06645,
      spotName: "Spanish River",
    },
  },
  4491: {
    spot: { Lat: 48.09775, Long: -4.3345666666666665, spotName: "le guet" },
  },
  4492: {
    spot: {
      Lat: 49.01583333333333,
      Long: -125.67021666666666,
      spotName: "Wickaninnish",
    },
  },
  4493: { spot: { Lat: 25.8342, Long: -97.15485, spotName: "playa bagdad" } },
  4494: {
    spot: {
      Lat: -33.9204,
      Long: 151.26073333333332,
      spotName: "Coogee Reef",
    },
  },
  4495: {
    spot: {
      Lat: -8.466616666666667,
      Long: -34.98943333333333,
      spotName: "cupe",
    },
  },
  4496: {
    spot: {
      Lat: 2.0368166666666667,
      Long: 45.36731666666667,
      spotName: "Mogadishu Beach",
    },
  },
  4497: {
    spot: {
      Lat: 37.753616666666666,
      Long: 21.302666666666667,
      spotName: "Great Palouki",
    },
  },
  4498: {
    spot: {
      Lat: -34.14626666666667,
      Long: 18.317133333333334,
      spotName: "Battery",
    },
  },
  4499: {
    spot: {
      Lat: -38.55566666666667,
      Long: 143.98291666666665,
      spotName: "Lorne - S. A.'s",
    },
  },
  4500: {
    spot: {
      Lat: -34.660783333333335,
      Long: 135.34718333333333,
      spotName: "Flatrock",
    },
  },
  4501: {
    spot: {
      Lat: 47.55955,
      Long: 9.647583333333333,
      spotName: "Klein Huntington",
    },
  },
  4502: {
    spot: {
      Lat: -4.3200666666666665,
      Long: 55.75808333333333,
      spotName: "Cote D'Or Lodge",
    },
  },
  4503: {
    spot: { Lat: -32.520833333333336, Long: 115.70565, spotName: "Dotties" },
  },
  4504: {
    spot: { Lat: -32.94235, Long: 151.76976666666667, spotName: "Bar Reef" },
  },
  4505: {
    spot: { Lat: 59.82066666666667, Long: 22.9216, spotName: "Tulliniemi" },
  },
  4506: {
    spot: {
      Lat: 56.56005,
      Long: 21.000366666666668,
      spotName: "Palmu Licis",
    },
  },
  4507: {
    spot: {
      Lat: -33.877433333333336,
      Long: 121.87795,
      spotName: "West Beach",
    },
  },
  4508: {
    spot: {
      Lat: 28.103183333333334,
      Long: -16.757066666666667,
      spotName: "La Caleta de adeje",
    },
  },
  4509: {
    spot: {
      Lat: 42.946583333333336,
      Long: -70.78671666666666,
      spotName: "Plaice Cove",
    },
  },
  4510: {
    spot: {
      Lat: -42.894216666666665,
      Long: 147.50133333333332,
      spotName: "Bambra Reef",
    },
  },
  4511: { spot: { Lat: -38.0415, Long: 140.6221, spotName: "Mokes" } },
  4512: {
    spot: {
      Lat: -21.03335,
      Long: 149.18526666666668,
      spotName: "Dolphin Heads",
    },
  },
  4513: {
    spot: {
      Lat: -1.6376833333333334,
      Long: -80.83268333333334,
      spotName: "Viejamar",
    },
  },
  4514: {
    spot: {
      Lat: 24.965566666666668,
      Long: 54.96695,
      spotName: "Jebal Ali Lefts",
    },
  },
  4515: {
    spot: {
      Lat: -22.975316666666668,
      Long: -42.033833333333334,
      spotName: "Praia Grande - Arraial do Cabo",
    },
  },
  4516: {
    spot: {
      Lat: -27.380833333333335,
      Long: -48.420516666666664,
      spotName: "Ponta Do Rapa",
    },
  },
  4517: {
    spot: {
      Lat: -34.195116666666664,
      Long: 24.853516666666668,
      spotName: "Ducks",
    },
  },
  4518: { spot: { Lat: -34.59035, Long: 150.87895, spotName: "shallows" } },
  4519: {
    spot: {
      Lat: 20.789016666666665,
      Long: -156.55698333333333,
      spotName: "Grandma's",
    },
  },
  4520: {
    spot: {
      Lat: -16.47955,
      Long: 145.46021666666667,
      spotName: "Port  Douglas",
    },
  },
  4521: { spot: { Lat: 54.79058333333333, Long: 8.28105, spotName: "K4" } },
  4522: {
    spot: {
      Lat: 30.022733333333335,
      Long: -81.32156666666667,
      spotName: "South Ponte Vedra Beach",
    },
  },
  4523: {
    spot: {
      Lat: -32.52288333333333,
      Long: 115.69998333333334,
      spotName: "Caves",
    },
  },
  4524: {
    spot: {
      Lat: -35.54116666666667,
      Long: 138.67493333333334,
      spotName: "Horseshoe Bay",
    },
  },
  4525: {
    spot: {
      Lat: -32.94068333333333,
      Long: 134.14581666666666,
      spotName: "Sceale Bay",
    },
  },
  4526: { spot: { Lat: 32.73165, Long: -79.8692, spotName: "Cliffs" } },
  4527: {
    spot: {
      Lat: 39.96436666666666,
      Long: -123.98563333333334,
      spotName: "McKee's Creek",
    },
  },
  4528: {
    spot: {
      Lat: -38.48393333333333,
      Long: 144.03443333333334,
      spotName: "Hunters",
    },
  },
  4529: {
    spot: { Lat: 43.3051, Long: -2.23975, spotName: "Orrua, Rocca Puta" },
  },
  4530: { spot: { Lat: 28.24785, Long: -16.8409, spotName: "Los Gigantes" } },
  4531: {
    spot: {
      Lat: 41.40161666666667,
      Long: 2.2148166666666667,
      spotName: "Nova Mar Bella",
    },
  },
  4532: {
    spot: {
      Lat: -17.640333333333334,
      Long: -71.34718333333333,
      spotName: "Ilo Moquegua - Big sister",
    },
  },
  4533: {
    spot: {
      Lat: -27.3876,
      Long: -48.43318333333333,
      spotName: "Lambe lambe",
    },
  },
  4534: {
    spot: {
      Lat: 46.94383333333333,
      Long: -2.18945,
      spotName: "Île de Noirmoutier - Barbâtre",
    },
  },
  4535: {
    spot: {
      Lat: 53.06511666666667,
      Long: 4.722916666666666,
      spotName: "Texel Westerslag",
    },
  },
  4536: {
    spot: {
      Lat: -35.248066666666666,
      Long: 136.98268333333334,
      spotName: "Willyama Bay",
    },
  },
  4537: {
    spot: {
      Lat: -38.80233333333334,
      Long: 143.63955,
      spotName: "Elliot River",
    },
  },
  4538: {
    spot: { Lat: 32.194116666666666, Long: 34.80655, spotName: "apolonia" },
  },
  4539: {
    spot: { Lat: 43.41113333333333, Long: -1.6388, spotName: "erromardie" },
  },
  4540: { spot: { Lat: 44.69795, Long: -1.25455, spotName: "La Garonne" } },
  4541: {
    spot: { Lat: -13.006233333333334, Long: -38.5334, spotName: "Espanhol" },
  },
  4542: {
    spot: {
      Lat: 43.363816666666665,
      Long: -2.493716666666667,
      spotName: "Playa de Carraspio",
    },
  },
  4543: {
    spot: { Lat: -32.45255, Long: 152.51518333333334, spotName: "Treachery" },
  },
  4544: {
    spot: {
      Lat: 6.116883333333333,
      Long: 116.0976,
      spotName: "Nexus west end",
    },
  },
  4545: {
    spot: {
      Lat: 44.803216666666664,
      Long: 13.966533333333333,
      spotName: "Camp Kazela (Medulin)",
    },
  },
  4546: {
    spot: {
      Lat: -33.96483333333333,
      Long: 151.25373333333334,
      spotName: "Malabar",
    },
  },
  4547: {
    spot: {
      Lat: 30.34026666666667,
      Long: -87.0873,
      spotName: "Calle Hermosa",
    },
  },
  4548: {
    spot: { Lat: 53.35075, Long: 0.25903333333333334, spotName: "Jabba's" },
  },
  4549: {
    spot: { Lat: -38.403166666666664, Long: 144.8022, spotName: "Kegs" },
  },
  4550: { spot: { Lat: -30.2079, Long: 114.9902, spotName: "six kings" } },
  4551: { spot: { Lat: 43.8523, Long: 13.01245, spotName: "Fano - Lido" } },
  4552: {
    spot: { Lat: -21.034883333333333, Long: 149.18115, spotName: "Rockies" },
  },
  4553: {
    spot: {
      Lat: -2.2784666666666666,
      Long: 99.59393333333334,
      spotName: "aaron's",
    },
  },
  4554: {
    spot: {
      Lat: 43.17855,
      Long: 5.674066666666667,
      spotName: "Cap St Louis Left",
    },
  },
  4555: {
    spot: {
      Lat: 8.503316666666667,
      Long: -83.12426666666667,
      spotName: "Zancudo Beach",
    },
  },
  4556: {
    spot: {
      Lat: -35.3212,
      Long: 150.48461666666665,
      spotName: "Bannister Head Suck Rock",
    },
  },
  4557: {
    spot: {
      Lat: 12.116033333333334,
      Long: 109.19616666666667,
      spotName: "Bai Dai Beach, Nha Trang",
    },
  },
  4558: {
    spot: {
      Lat: 24.0743,
      Long: -111.00778333333334,
      spotName: "Punta Conejo",
    },
  },
  4559: { spot: { Lat: 54.37955, Long: 16.3171, spotName: "Dabki" } },
  4560: {
    spot: {
      Lat: -6.477866666666666,
      Long: 105.65731666666667,
      spotName: "Tanjung Lesung",
    },
  },
  4561: {
    spot: { Lat: -38.71625, Long: 143.7803, spotName: "Sledge Hammers" },
  },
  4562: {
    spot: { Lat: 38.16246666666667, Long: 21.5144, spotName: "Niforeika" },
  },
  4563: {
    spot: {
      Lat: -35.62911666666667,
      Long: 138.43065,
      spotName: "Damo's Bay",
    },
  },
  4564: {
    spot: {
      Lat: -34.35881666666667,
      Long: 18.497283333333332,
      spotName: "Southwest Reef",
    },
  },
  4565: {
    spot: {
      Lat: -31.96675,
      Long: 152.59743333333333,
      spotName: "2nd corner",
    },
  },
  4566: {
    spot: {
      Lat: 32.33506666666667,
      Long: -64.68046666666666,
      spotName: "Tucks",
    },
  },
  4567: {
    spot: {
      Lat: -28.807133333333333,
      Long: 114.619,
      spotName: "Tarcoola - chanties",
    },
  },
  4568: {
    spot: {
      Lat: 36.37018333333333,
      Long: 10.545883333333334,
      spotName: "Hamamet",
    },
  },
  4569: {
    spot: {
      Lat: -38.390483333333336,
      Long: 145.12476666666666,
      spotName: "Balnarring Point",
    },
  },
  4570: {
    spot: { Lat: -34.0966, Long: 18.800666666666668, spotName: "Seconds" },
  },
  4571: { spot: { Lat: -32.0183, Long: 115.75075, spotName: "Mosman" } },
  4572: {
    spot: {
      Lat: -33.796733333333336,
      Long: 18.357566666666667,
      spotName: "Madiba's left (Outers)",
    },
  },
  4573: {
    spot: { Lat: 24.387866666666667, Long: 120.58405, spotName: "Da-an" },
  },
  4574: {
    spot: {
      Lat: -34.13653333333333,
      Long: 18.325883333333334,
      spotName: "Pebbles Shorey",
    },
  },
  4575: {
    spot: { Lat: -31.970816666666668, Long: 152.5933, spotName: "Old Bar" },
  },
  4576: {
    spot: {
      Lat: 39.30376666666667,
      Long: -74.53831666666666,
      spotName: "Great Egg Harbor Inlet (Longport)",
    },
  },
  4577: {
    spot: {
      Lat: -34.52041666666667,
      Long: 135.37421666666665,
      spotName: "Monument",
    },
  },
  4578: {
    spot: { Lat: -38.16615, Long: 145.09196666666668, spotName: "D - Bay" },
  },
  4579: {
    spot: {
      Lat: -31.524266666666666,
      Long: 115.6069,
      spotName: "Super Sprayz",
    },
  },
  4580: {
    spot: { Lat: -38.05766666666667, Long: 140.7431, spotName: "Yip Yip" },
  },
  4581: {
    spot: {
      Lat: -37.986333333333334,
      Long: -57.54278333333333,
      spotName: "La Perla",
    },
  },
  4582: {
    spot: {
      Lat: 43.11465,
      Long: 132.01326666666668,
      spotName: "Schitovaya Bay",
    },
  },
  4583: {
    spot: {
      Lat: 43.16161666666667,
      Long: 132.07815,
      spotName: "Zolotoy Bereg",
    },
  },
  4584: { spot: { Lat: 12.1761, Long: -68.86495, spotName: "Playa Canoa" } },
  4585: {
    spot: { Lat: 37.29528333333333, Long: 21.6919, spotName: "Kalo Nero" },
  },
  4586: {
    spot: {
      Lat: 36.25216666666667,
      Long: 136.12103333333334,
      spotName: "Oshima",
    },
  },
  4587: {
    spot: {
      Lat: -33.993116666666666,
      Long: 114.98861666666667,
      spotName: "gnarabup",
    },
  },
  4588: {
    spot: {
      Lat: -34.89815,
      Long: 150.77025,
      spotName: "Crookhaven - Eddies",
    },
  },
  4589: {
    spot: {
      Lat: 29.8573,
      Long: -81.26513333333334,
      spotName: "St. Augustine beach pier",
    },
  },
  4590: {
    spot: {
      Lat: -27.43075,
      Long: -48.519666666666666,
      spotName: "Praia do Forte",
    },
  },
  4591: {
    spot: {
      Lat: 43.70421666666667,
      Long: -79.22898333333333,
      spotName: "Bluffers",
    },
  },
  4592: {
    spot: {
      Lat: 44.6407,
      Long: -1.2636166666666666,
      spotName: "Le Sail Fish",
    },
  },
  4593: {
    spot: {
      Lat: -38.2132,
      Long: 145.03923333333333,
      spotName: "Mornington Mills & Mothers Beach",
    },
  },
  4594: {
    spot: {
      Lat: -38.46888333333333,
      Long: 145.0291,
      spotName: "Left and Rights",
    },
  },
  4595: {
    spot: {
      Lat: 38.18071666666667,
      Long: 13.161683333333333,
      spotName: "Wizard - Torre Muzzard",
    },
  },
  4596: {
    spot: {
      Lat: 27.246066666666668,
      Long: -82.53618333333333,
      spotName: "point o' rocks",
    },
  },
  4597: {
    spot: {
      Lat: 38.777366666666666,
      Long: -75.08446666666667,
      spotName: "The Cove -  Delaware",
    },
  },
  4598: {
    spot: { Lat: -38.789116666666665, Long: 143.6513, spotName: "Moo Cows" },
  },
  4599: {
    spot: {
      Lat: 30.700366666666667,
      Long: -81.42856666666667,
      spotName: "St. Marys rivermouth",
    },
  },
  4600: {
    spot: {
      Lat: 64.06116666666667,
      Long: -21.9978,
      spotName: "Hafnarfjordur Beach&Reef",
    },
  },
  4601: {
    spot: {
      Lat: 34.25888333333333,
      Long: 135.09458333333333,
      spotName: "Isonoura",
    },
  },
  4602: {
    spot: { Lat: -33.860033333333334, Long: 151.2856, spotName: "Kahnies" },
  },
  4603: {
    spot: {
      Lat: 10.494733333333333,
      Long: 103.5597,
      spotName: "Bamboo Island",
    },
  },
  4604: {
    spot: {
      Lat: -35.47476666666667,
      Long: 150.3912,
      spotName: "Meroo Headland",
    },
  },
  4605: {
    spot: { Lat: -38.3358, Long: 144.3301, spotName: "Torquay Front Beach" },
  },
  4606: {
    spot: { Lat: -35.25635, Long: 150.52771666666666, spotName: "Inyadda" },
  },
  4607: {
    spot: {
      Lat: -18.231633333333335,
      Long: 177.77118333333334,
      spotName: "Beachouse",
    },
  },
  4608: {
    spot: {
      Lat: -21.074016666666665,
      Long: 149.22953333333334,
      spotName: "Lamberts Beach - The Reef",
    },
  },
  4609: {
    spot: {
      Lat: -33.78576666666667,
      Long: 151.28996666666666,
      spotName: "Queensie Mini",
    },
  },
  4610: {
    spot: {
      Lat: 20.969383333333333,
      Long: -156.68123333333332,
      spotName: "Mushrooms",
    },
  },
  4611: {
    spot: {
      Lat: 36.9599,
      Long: 8.766233333333334,
      spotName: "tabarka les aiguilles",
    },
  },
  4612: { spot: { Lat: 21.45195, Long: -157.7908, spotName: "Ripps Reef" } },
  4613: {
    spot: {
      Lat: 43.29773333333333,
      Long: -2.3092333333333332,
      spotName: "Itziar",
    },
  },
  4614: { spot: { Lat: -38.4884, Long: 144.0281, spotName: "supertubes" } },
  4615: { spot: { Lat: -24.36615, Long: 113.40555, spotName: "Quobba" } },
  4616: {
    spot: {
      Lat: -38.48406666666666,
      Long: 145.02496666666667,
      spotName: "The Gunnery",
    },
  },
  4617: {
    spot: {
      Lat: 41.45563333333333,
      Long: 12.655233333333333,
      spotName: "Belvedere",
    },
  },
  4618: {
    spot: {
      Lat: -7.707583333333333,
      Long: -79.45881666666666,
      spotName: "El Cape",
    },
  },
  4619: {
    spot: {
      Lat: 23.155616666666667,
      Long: -109.49306666666666,
      spotName: "Terranova",
    },
  },
  4620: {
    spot: { Lat: 37.3456, Long: 9.85955, spotName: "Les Grottes Bizerte" },
  },
  4621: {
    spot: {
      Lat: -26.831733333333332,
      Long: -48.62343333333333,
      spotName: "Gravatá",
    },
  },
  4622: {
    spot: { Lat: -37.976333333333336, Long: -57.54135, spotName: "Cardiel" },
  },
  4623: {
    spot: { Lat: 12.077383333333334, Long: -68.2314, spotName: "Chop Chop" },
  },
  4624: {
    spot: { Lat: 33.950183333333335, Long: -118.44885, spotName: "Gillis" },
  },
  4625: {
    spot: {
      Lat: 26.127083333333335,
      Long: -14.501616666666667,
      spotName: "Cape Boujdour",
    },
  },
  4626: {
    spot: {
      Lat: -35.53648333333334,
      Long: 138.66711666666666,
      spotName: "Booma",
    },
  },
  4627: {
    spot: { Lat: 36.99665, Long: -122.17813333333334, spotName: "Shaks" },
  },
  4628: {
    spot: { Lat: -43.08805, Long: 147.6725, spotName: "Roaring Beach" },
  },
  4629: {
    spot: {
      Lat: 4.850766666666667,
      Long: -2.23375,
      spotName: "Turtle Beach",
    },
  },
  4630: {
    spot: { Lat: -2.5605, Long: 150.79045, spotName: "Kavieng Rights" },
  },
  4631: {
    spot: { Lat: 52.8065, Long: -4.703516666666666, spotName: "Aberdaron" },
  },
  4632: {
    spot: {
      Lat: -28.072133333333333,
      Long: 153.44723333333334,
      spotName: "North Burleigh ledge",
    },
  },
  4633: {
    spot: {
      Lat: 41.82321666666667,
      Long: -83.41578333333334,
      spotName: "T beach",
    },
  },
  4634: {
    spot: {
      Lat: 13.126383333333333,
      Long: -61.2025,
      spotName: "Blue Lagoon",
    },
  },
  4635: {
    spot: {
      Lat: -22.929733333333335,
      Long: -42.03775,
      spotName: "Praia do Foguete - Cabo Frio",
    },
  },
  4636: {
    spot: {
      Lat: -34.411366666666666,
      Long: 150.90405,
      spotName: "Wollongong Puckies Reef",
    },
  },
  4637: {
    spot: { Lat: -43.2742, Long: 147.34656666666666, spotName: "The Neck" },
  },
  4638: {
    spot: { Lat: 21.703416666666666, Long: -158.01055, spotName: "Radz" },
  },
  4639: {
    spot: {
      Lat: -33.643883333333335,
      Long: 151.33076666666668,
      spotName: "Bilgola Bank",
    },
  },
  4640: {
    spot: {
      Lat: 43.448366666666665,
      Long: 4.42105,
      spotName: "Trois Montagne",
    },
  },
  4641: {
    spot: { Lat: 34.026516666666666, Long: -77.8941, spotName: "Beauregard" },
  },
  4642: {
    spot: {
      Lat: 51.56398333333333,
      Long: -4.004716666666667,
      spotName: "Crab Island ",
    },
  },
  4643: {
    spot: {
      Lat: -33.84921666666666,
      Long: 151.26776666666666,
      spotName: "Nielsen Park",
    },
  },
  4644: {
    spot: {
      Lat: -32.053583333333336,
      Long: 115.7258,
      spotName: "Lighthouse",
    },
  },
  4645: {
    spot: {
      Lat: 2.7873666666666668,
      Long: 104.21768333333333,
      spotName: "Tioman Island Malaysia",
    },
  },
  4646: {
    spot: {
      Lat: -37.956783333333334,
      Long: -57.53816666666667,
      spotName: "Sun rider",
    },
  },
  4647: {
    spot: {
      Lat: 7.031133333333333,
      Long: 116.74131666666666,
      spotName: "Kudat",
    },
  },
  4648: {
    spot: {
      Lat: -2.56525,
      Long: 150.78198333333333,
      spotName: "Nusa Island Left",
    },
  },
  4649: {
    spot: {
      Lat: 31.261966666666666,
      Long: 29.981433333333335,
      spotName: "El Corniche",
    },
  },
  4650: {
    spot: { Lat: 32.80758333333333, Long: -117.26995, spotName: "Hennemans" },
  },
  4651: {
    spot: {
      Lat: 30.873316666666668,
      Long: 29.327766666666665,
      spotName: "Rowad Resort, North coast",
    },
  },
  4652: { spot: { Lat: 24.61015, Long: 121.8653, spotName: "The Barracks" } },
  4653: {
    spot: { Lat: -33.8625, Long: 151.28323333333333, spotName: "Diamonds" },
  },
  4654: {
    spot: {
      Lat: -2.5949333333333335,
      Long: 150.76795,
      spotName: "Nusa Lik Peaks",
    },
  },
  4655: {
    spot: {
      Lat: -2.6675166666666668,
      Long: 141.30666666666667,
      spotName: "Vanimo Reef",
    },
  },
  4656: {
    spot: {
      Lat: -2.6094666666666666,
      Long: 141.01355,
      spotName: "Wutung Village Reef",
    },
  },
  4657: {
    spot: {
      Lat: -13.775083333333333,
      Long: -172.28721666666667,
      spotName: "aganoa",
    },
  },
  4658: {
    spot: {
      Lat: -35.08375,
      Long: 150.69148333333334,
      spotName: "Blenheim Beach",
    },
  },
  4659: {
    spot: {
      Lat: 36.700633333333336,
      Long: 15.124516666666667,
      spotName: "Morghella",
    },
  },
  4660: {
    spot: { Lat: 15.521383333333333, Long: -61.27315, spotName: "Pauga Bay" },
  },
  4661: {
    spot: { Lat: 0.4882, Long: 122.9921, spotName: "Gorontalo beach" },
  },
  4662: {
    spot: { Lat: -28.16875, Long: 153.55191666666667, spotName: "Outsides" },
  },
  4663: {
    spot: { Lat: -10.25135, Long: 120.57465, spotName: "Sumba - Kallala" },
  },
  4664: { spot: { Lat: 21.71045, Long: -157.98505, spotName: "Graters" } },
  4665: {
    spot: { Lat: -42.7949, Long: 147.87288333333333, spotName: "Marion Bay" },
  },
  4666: {
    spot: {
      Lat: -34.4136,
      Long: 150.90696666666668,
      spotName: "Wollongong The Bombie North Beach",
    },
  },
  4667: {
    spot: {
      Lat: -25.90065,
      Long: 153.09286666666668,
      spotName: "Rainbow Beach",
    },
  },
  4668: {
    spot: { Lat: -26.785183333333332, Long: 153.14225, spotName: "Cove" },
  },
  4669: {
    spot: { Lat: -33.9551, Long: 18.374716666666668, spotName: "Tidals" },
  },
  4670: {
    spot: {
      Lat: 36.98753333333333,
      Long: -7.967583333333334,
      spotName: "Ilha de Faro",
    },
  },
  4671: {
    spot: {
      Lat: -38.10735,
      Long: -57.572966666666666,
      spotName: "Tamarindo, Playa Serena",
    },
  },
  4672: {
    spot: { Lat: -0.5912833333333333, Long: 98.4133, spotName: "No Name" },
  },
  4673: {
    spot: {
      Lat: -32.02955,
      Long: 115.74603333333333,
      spotName: "port beach",
    },
  },
  4674: {
    spot: { Lat: -5.1925, Long: 103.93006666666666, spotName: "krui left" },
  },
  4675: {
    spot: {
      Lat: -34.546933333333335,
      Long: 150.88151666666667,
      spotName: "Windang Island",
    },
  },
  4676: {
    spot: { Lat: 25.108133333333335, Long: 34.8822, spotName: "Marsa Alaam" },
  },
  4677: {
    spot: { Lat: 21.273933333333332, Long: -157.71985, spotName: "Turtles" },
  },
  4678: {
    spot: {
      Lat: 37.11215,
      Long: 10.261233333333333,
      spotName: "La Marsa dream land",
    },
  },
  4679: {
    spot: { Lat: 4.857683333333333, Long: -52.25655, spotName: "Mahury" },
  },
  4680: {
    spot: {
      Lat: -32.45315,
      Long: 152.5156,
      spotName: "Seal Rocks, Treachery",
    },
  },
  4681: {
    spot: { Lat: -34.06531666666667, Long: 151.14785, spotName: "Bay Waves" },
  },
  4682: {
    spot: {
      Lat: -28.07815,
      Long: 153.44911666666667,
      spotName: "Burleigh Heads - 5th Ave",
    },
  },
  4683: {
    spot: {
      Lat: -34.0737,
      Long: 18.3605,
      spotName: "Chapman's Peak mystery lefts.",
    },
  },
  4684: {
    spot: {
      Lat: 45.2286,
      Long: 12.301766666666667,
      spotName: "La Diga sottomarina",
    },
  },
  4685: {
    spot: { Lat: -1.5977833333333333, Long: -80.84565, spotName: "Piqueros" },
  },
  4686: {
    spot: {
      Lat: 17.023133333333334,
      Long: 54.08518333333333,
      spotName: "Salalah",
    },
  },
  4687: {
    spot: {
      Lat: 15.993666666666666,
      Long: -22.894816666666667,
      spotName: "Praia de Santa Mónica",
    },
  },
  4688: {
    spot: {
      Lat: -22.942666666666668,
      Long: -42.03005,
      spotName: "Arraial do Cabo",
    },
  },
  4689: {
    spot: { Lat: 5.0452, Long: 115.05706666666667, spotName: "Tanjung Batu" },
  },
  4690: {
    spot: {
      Lat: 33.83006666666667,
      Long: -78.63271666666667,
      spotName: "Cherry Grove Pier",
    },
  },
  4691: {
    spot: { Lat: 41.25096666666666, Long: -71.8753, spotName: "North Bar" },
  },
  4692: {
    spot: { Lat: -43.0166, Long: 147.9272, spotName: "Eaglehawk Neck" },
  },
  4693: {
    spot: { Lat: -43.447783333333334, Long: 147.2025, spotName: "Jawbones" },
  },
  4694: {
    spot: {
      Lat: -17.53625,
      Long: -149.58943333333335,
      spotName: "Papeete Harbour Reef",
    },
  },
  4695: {
    spot: {
      Lat: 40.45611666666667,
      Long: -8.803733333333334,
      spotName: "Praia de Mira",
    },
  },
  4696: {
    spot: { Lat: -33.66835, Long: -53.2624, spotName: "Hermenegildo" },
  },
  4697: {
    spot: {
      Lat: -17.830366666666666,
      Long: 146.10018333333332,
      spotName: "Bingil Bay",
    },
  },
  4698: {
    spot: {
      Lat: -28.171033333333334,
      Long: 153.55611666666667,
      spotName: "end wedge",
    },
  },
  4699: {
    spot: {
      Lat: 38.11213333333333,
      Long: 20.624766666666666,
      spotName: "Lourdas Beach",
    },
  },
  4700: {
    spot: {
      Lat: -33.33055,
      Long: 115.62766666666667,
      spotName: "Bunbury - Clam",
    },
  },
  4701: {
    spot: {
      Lat: 4.974516666666666,
      Long: 114.8736,
      spotName: "Pantai Tungku",
    },
  },
  4702: { spot: { Lat: 31.1279, Long: 29.7733, spotName: "Agami" } },
  4703: {
    spot: { Lat: -35.5279, Long: 138.69811666666666, spotName: "Frenchies" },
  },
  4704: {
    spot: { Lat: 8.716783333333334, Long: 76.70655, spotName: "Boar rice" },
  },
  4705: {
    spot: {
      Lat: -34.564033333333334,
      Long: 150.87176666666667,
      spotName: "Suckhole",
    },
  },
  4706: {
    spot: {
      Lat: -43.188766666666666,
      Long: 147.84361666666666,
      spotName: "Caves",
    },
  },
  4707: {
    spot: {
      Lat: -36.423716666666664,
      Long: 150.07603333333333,
      spotName: "Horseshoes bay",
    },
  },
  4708: {
    spot: {
      Lat: 36.96608333333333,
      Long: 8.7537,
      spotName: "La Droite du Fort",
    },
  },
  4709: {
    spot: { Lat: -32.93378333333333, Long: 151.7832, spotName: "Fuzzies" },
  },
  4710: {
    spot: {
      Lat: 13.066233333333333,
      Long: -59.56928333333333,
      spotName: "Dover beach",
    },
  },
  4711: {
    spot: {
      Lat: 12.06195,
      Long: -61.75673333333334,
      spotName: "Cherry Hill",
    },
  },
  4712: {
    spot: {
      Lat: -35.40833333333333,
      Long: 150.44696666666667,
      spotName: "Potholes",
    },
  },
  4713: {
    spot: {
      Lat: 52.76221666666667,
      Long: 4.652416666666666,
      spotName: "Petten - ET",
    },
  },
  4714: {
    spot: {
      Lat: 43.559783333333336,
      Long: -70.20628333333333,
      spotName: "TWO LIGHTS",
    },
  },
  4715: {
    spot: {
      Lat: -2.6966666666666668,
      Long: 141.32821666666666,
      spotName: "Vanimo, Twin Rocks Reef",
    },
  },
  4716: {
    spot: {
      Lat: -35.03105,
      Long: 173.91751666666667,
      spotName: "matauri bay",
    },
  },
  4717: {
    spot: { Lat: 15.6022, Long: -61.366883333333334, spotName: "Calibishie" },
  },
  4718: {
    spot: { Lat: -28.131833333333333, Long: 153.4904, spotName: "Forks" },
  },
  4719: { spot: { Lat: 55.51925, Long: 14.3466, spotName: "Brantevik" } },
  4720: {
    spot: {
      Lat: -29.430666666666667,
      Long: 153.36523333333332,
      spotName: "Turners Beach",
    },
  },
  4721: {
    spot: { Lat: -27.9583, Long: 153.43018333333333, spotName: "Sea world" },
  },
  4722: {
    spot: {
      Lat: 38.109233333333336,
      Long: 20.506933333333333,
      spotName: "Ammes Beach",
    },
  },
  4723: {
    spot: {
      Lat: 37.3576,
      Long: -122.40053333333333,
      spotName: "Tunitas Creek",
    },
  },
  4724: {
    spot: {
      Lat: -28.163866666666667,
      Long: 153.55151666666666,
      spotName: "Point-Danger",
    },
  },
  4725: {
    spot: {
      Lat: 7.903683333333333,
      Long: 98.29588333333334,
      spotName: "Patong Beach",
    },
  },
  4726: {
    spot: {
      Lat: 15.814716666666667,
      Long: -86.51046666666667,
      spotName: "Palma Real",
    },
  },
  4727: {
    spot: {
      Lat: -34.436733333333336,
      Long: 150.9025,
      spotName: "Wollongong South Beach",
    },
  },
  4728: {
    spot: {
      Lat: -32.430733333333336,
      Long: 152.52488333333332,
      spotName: "Seal Rocks Stilettos,",
    },
  },
  4729: {
    spot: {
      Lat: 43.358133333333335,
      Long: -3.022266666666667,
      spotName: "Arrigunaga",
    },
  },
  4730: {
    spot: {
      Lat: 36.904183333333336,
      Long: -75.98856666666667,
      spotName: "The North End",
    },
  },
  4731: {
    spot: {
      Lat: -28.073316666666667,
      Long: 153.44743333333332,
      spotName: "North Burleigh",
    },
  },
  4732: {
    spot: {
      Lat: -31.99875,
      Long: 115.48881666666666,
      spotName: "Riceys Beach",
    },
  },
  4733: {
    spot: {
      Lat: -34.001916666666666,
      Long: 22.557533333333332,
      spotName: "Wilderness Rivermouth",
    },
  },
  4734: {
    spot: {
      Lat: 23.11945,
      Long: -109.52806666666666,
      spotName: "Ship Wrecks",
    },
  },
  4735: {
    spot: {
      Lat: -2.6599666666666666,
      Long: 141.27936666666668,
      spotName: "Vanimo Village Reef",
    },
  },
  4736: {
    spot: { Lat: 9.570616666666666, Long: -84.59885, spotName: "Gully's" },
  },
  4737: {
    spot: {
      Lat: 28.074533333333335,
      Long: -15.4137,
      spotName: "Muelle de San Cristobal",
    },
  },
  4738: {
    spot: { Lat: -35.58745, Long: 150.35038333333333, spotName: "Blacks" },
  },
  4739: {
    spot: {
      Lat: 4.0118833333333335,
      Long: 9.1396,
      spotName: "Seme Beach, Limbe",
    },
  },
  4740: {
    spot: { Lat: 39.9017, Long: 4.0694, spotName: "Menorca - Son Bou" },
  },
  4741: {
    spot: { Lat: 27.30955, Long: -82.57636666666667, spotName: "Lido Beach" },
  },
  4742: {
    spot: {
      Lat: -28.171083333333332,
      Long: 153.55228333333332,
      spotName: "Insides",
    },
  },
  4743: {
    spot: {
      Lat: 43.273916666666665,
      Long: -79.77811666666666,
      spotName: "The Pier",
    },
  },
  4744: {
    spot: { Lat: 37.119283333333335, Long: -6.79115, spotName: "Mazagón" },
  },
  4745: {
    spot: {
      Lat: 47.915416666666665,
      Long: -4.3811333333333335,
      spotName: "Plovan",
    },
  },
  4746: {
    spot: {
      Lat: 27.84115,
      Long: -97.04096666666666,
      spotName: "St. Joe's Island",
    },
  },
  4747: {
    spot: {
      Lat: 2.1967333333333334,
      Long: 97.29491666666667,
      spotName: "Banyaks",
    },
  },
  4748: {
    spot: { Lat: 24.684633333333334, Long: 121.8379, spotName: "Chingshuei" },
  },
  4749: {
    spot: {
      Lat: 44.60123333333333,
      Long: -124.0672,
      spotName: "Newport South Beach",
    },
  },
  4750: {
    spot: {
      Lat: -30.6397,
      Long: 153.01751666666667,
      spotName: "Nambucca Heads - Breakwater",
    },
  },
  4751: {
    spot: { Lat: 5.2884, Long: -52.58383333333333, spotName: "Saint Joseph" },
  },
  4752: {
    spot: {
      Lat: 40.019733333333335,
      Long: -124.04888333333334,
      spotName: "No Pass",
    },
  },
  4753: {
    spot: {
      Lat: -29.243,
      Long: -71.46481666666666,
      spotName: "Punta Choros",
    },
  },
  4754: {
    spot: { Lat: -34.294066666666666, Long: 150.94785, spotName: "Thommo's" },
  },
  4755: {
    spot: {
      Lat: -6.679916666666667,
      Long: 105.3256,
      spotName: "National Park",
    },
  },
  4756: {
    spot: {
      Lat: 19.752083333333335,
      Long: -155.08951666666667,
      spotName: "Tombstones",
    },
  },
  4757: {
    spot: {
      Lat: -34.67738333333333,
      Long: 150.85598333333334,
      spotName: "Greenys",
    },
  },
  4758: {
    spot: {
      Lat: -17.9751,
      Long: 25.860083333333332,
      spotName: "Zambezi River, Rapid 11",
    },
  },
  4759: {
    spot: {
      Lat: 19.736766666666668,
      Long: -155.01475,
      spotName: "Richardsons",
    },
  },
  4760: {
    spot: {
      Lat: 45.84688333333333,
      Long: -123.96208333333334,
      spotName: "Arcadia",
    },
  },
  4761: { spot: { Lat: 52.8238, Long: -4.5068, spotName: "abersoch" } },
  4762: {
    spot: { Lat: 53.91336666666667, Long: -0.16065, spotName: "Hornsea" },
  },
  4763: {
    spot: { Lat: 40.98918333333334, Long: -8.64585, spotName: "Silvalde" },
  },
  4764: {
    spot: { Lat: 60.143766666666664, Long: 29.92635, spotName: "Atlantis" },
  },
  4765: {
    spot: {
      Lat: 46.208783333333336,
      Long: 6.163433333333334,
      spotName: "Baby Plage",
    },
  },
  4766: {
    spot: {
      Lat: -34.27341666666667,
      Long: 150.96068333333332,
      spotName: "Scaborough",
    },
  },
  4767: {
    spot: { Lat: 19.736, Long: -155.04348333333334, spotName: "Chocks" },
  },
  4768: {
    spot: { Lat: 10.172683333333334, Long: -85.81765, spotName: "raps" },
  },
  4769: {
    spot: {
      Lat: 15.25695,
      Long: 73.91876666666667,
      spotName: "Benaulim Beach",
    },
  },
  4770: {
    spot: {
      Lat: -43.502633333333335,
      Long: 172.73176666666666,
      spotName: "Trolley's",
    },
  },
  4771: {
    spot: {
      Lat: 34.81288333333333,
      Long: 32.393683333333335,
      spotName: "Helios Beach",
    },
  },
  4772: {
    spot: {
      Lat: 21.012133333333335,
      Long: -156.64271666666667,
      spotName: "Slaughterhouse",
    },
  },
  4773: {
    spot: {
      Lat: 20.90811666666667,
      Long: -156.48246666666665,
      spotName: "Churches",
    },
  },
  4774: {
    spot: {
      Lat: -14.265883333333333,
      Long: -38.9867,
      spotName: "Boca da Barra",
    },
  },
  4775: {
    spot: {
      Lat: 42.31941666666667,
      Long: -124.4241,
      spotName: "Cape Sebastian",
    },
  },
  4776: {
    spot: {
      Lat: 9.562666666666667,
      Long: 125.93315,
      spotName: "Rainbows Left",
    },
  },
  4777: {
    spot: {
      Lat: 42.418483333333334,
      Long: -124.43,
      spotName: "Gold Beach South Jetty",
    },
  },
  4778: {
    spot: { Lat: 41.1123, Long: -8.666733333333333, spotName: "Canidelo" },
  },
  4779: {
    spot: {
      Lat: -16.18038333333333,
      Long: 179.05018333333334,
      spotName: "Rangs",
    },
  },
  4780: {
    spot: {
      Lat: -35.211616666666664,
      Long: 150.55098333333333,
      spotName: "Berrara Point",
    },
  },
  4781: {
    spot: { Lat: -35.04265, Long: 150.67748333333333, spotName: "Sailors" },
  },
  4782: {
    spot: {
      Lat: -22.938316666666665,
      Long: -42.47998333333334,
      spotName: "Saquarema - Itauna Beach",
    },
  },
  4783: {
    spot: { Lat: 40.01541666666667, Long: -124.0419, spotName: "Gale Point" },
  },
  4784: {
    spot: {
      Lat: -37.256,
      Long: -56.962516666666666,
      spotName: "Villa Gesell",
    },
  },
  4785: {
    spot: {
      Lat: 50.2007,
      Long: -5.427866666666667,
      spotName: "Hayle Rivermouth",
    },
  },
  4786: {
    spot: {
      Lat: 7.5110166666666665,
      Long: -79.99471666666666,
      spotName: "Lagart Point",
    },
  },
  4787: {
    spot: {
      Lat: 51.87271666666667,
      Long: -5.253666666666667,
      spotName: "Caerfai Bay",
    },
  },
  4788: {
    spot: {
      Lat: 13.340516666666666,
      Long: 144.77303333333333,
      spotName: "Pickop's Point",
    },
  },
  4789: {
    spot: {
      Lat: 21.461533333333332,
      Long: -157.76338333333334,
      spotName: "Pyramid Rock",
    },
  },
  4790: { spot: { Lat: -28.0914, Long: 153.4606, spotName: "Sharkies" } },
  4791: {
    spot: {
      Lat: -28.137133333333335,
      Long: 153.49341666666666,
      spotName: "Nothings",
    },
  },
  4792: {
    spot: { Lat: 11.95385, Long: -66.68135, spotName: "Punto La Gillette" },
  },
  4793: {
    spot: { Lat: -38.51056666666667, Long: 145.28285, spotName: "boofs" },
  },
  4794: {
    spot: {
      Lat: 17.988816666666665,
      Long: -71.16243333333334,
      spotName: "El Manda",
    },
  },
  4795: {
    spot: {
      Lat: -28.072166666666668,
      Long: 153.44721666666666,
      spotName: "Seminyak Wedge",
    },
  },
  4796: {
    spot: { Lat: -28.10435, Long: 153.46711666666667, spotName: "The Reef" },
  },
  4797: {
    spot: {
      Lat: -35.230533333333334,
      Long: 150.53083333333333,
      spotName: "Monument Beach",
    },
  },
  4798: {
    spot: { Lat: 19.87785, Long: -155.10903333333334, spotName: "Secrets" },
  },
  4799: {
    spot: {
      Lat: -37.16896666666667,
      Long: 139.74338333333333,
      spotName: "Stony Rises",
    },
  },
  4800: {
    spot: {
      Lat: -33.52751666666666,
      Long: 151.31898333333334,
      spotName: "Ocean Beach,NSW,australia",
    },
  },
  4801: {
    spot: {
      Lat: 5.475116666666667,
      Long: 95.23266666666666,
      spotName: "Lhoknga",
    },
  },
  4802: {
    spot: { Lat: 19.10505, Long: -96.09793333333333, spotName: "Tampi" },
  },
  4803: {
    spot: { Lat: -32.886, Long: 17.8781, spotName: "Klein Trekoskraal" },
  },
  4804: {
    spot: {
      Lat: 6.201733333333333,
      Long: 116.17628333333333,
      spotName: "Shabandar",
    },
  },
  4805: {
    spot: { Lat: 40.02151666666666, Long: -124.0536, spotName: "Third Reef" },
  },
  4806: {
    spot: {
      Lat: 6.445366666666667,
      Long: 116.43516666666666,
      spotName: "Kota Belud",
    },
  },
  4807: {
    spot: {
      Lat: -32.51833333333333,
      Long: 115.70208333333333,
      spotName: "roberts point",
    },
  },
  4808: {
    spot: {
      Lat: 4.993783333333333,
      Long: 114.91991666666667,
      spotName: "Berakas Coastal Park",
    },
  },
  4809: {
    spot: { Lat: -35.40675, Long: 150.4478, spotName: "Dolphins point" },
  },
  4810: {
    spot: {
      Lat: -37.243516666666665,
      Long: -73.40845,
      spotName: "Las Peñas Point",
    },
  },
  4811: {
    spot: { Lat: -33.526783333333334, Long: 151.3947, spotName: "PJ" },
  },
  4812: {
    spot: {
      Lat: -35.2323,
      Long: 150.54136666666668,
      spotName: "Panther Country",
    },
  },
  4813: {
    spot: { Lat: 20.916516666666666, Long: -156.38475, spotName: "Paia bay" },
  },
  4814: {
    spot: {
      Lat: -34.41498333333333,
      Long: 135.36211666666668,
      spotName: "Greenly Beach",
    },
  },
  4815: {
    spot: {
      Lat: 41.175133333333335,
      Long: 29.62473333333333,
      spotName: "Aglayankaya",
    },
  },
  4816: {
    spot: {
      Lat: 34.589983333333336,
      Long: 32.93658333333333,
      spotName: "Shipwrecks",
    },
  },
  4817: {
    spot: {
      Lat: 20.900183333333334,
      Long: -156.47678333333334,
      spotName: "Big Eds",
    },
  },
  4818: {
    spot: {
      Lat: 40.67095,
      Long: -8.746466666666667,
      spotName: "Sao Jacinto",
    },
  },
  4819: {
    spot: { Lat: 19.90025, Long: -155.12818333333334, spotName: "Hakalau" },
  },
  4820: {
    spot: {
      Lat: 10.84705,
      Long: -85.85651666666666,
      spotName: "Scardog reef",
    },
  },
  4821: {
    spot: { Lat: 19.883033333333334, Long: -155.11875, spotName: "Kolekole" },
  },
  4822: {
    spot: { Lat: -23.7166, Long: -70.43663333333333, spotName: "La Cupula" },
  },
  4823: {
    spot: {
      Lat: -35.561566666666664,
      Long: 150.38733333333334,
      spotName: "Blowies",
    },
  },
  4824: {
    spot: {
      Lat: -3.3522666666666665,
      Long: 40.02688333333333,
      spotName: "Watamu Bay",
    },
  },
  4825: {
    spot: {
      Lat: 21.306466666666665,
      Long: -158.02018333333334,
      spotName: "Daves Backyard",
    },
  },
  4826: { spot: { Lat: 6.2322, Long: -10.68215, spotName: "Barn's Beach" } },
  4827: {
    spot: {
      Lat: -8.784816666666666,
      Long: 115.23165,
      spotName: "Bali Tropic",
    },
  },
  4828: {
    spot: {
      Lat: 19.74341666666667,
      Long: -155.07476666666668,
      spotName: "Hilo Breakwall",
    },
  },
  4829: {
    spot: {
      Lat: -35.18475,
      Long: 150.59801666666667,
      spotName: "Conneley's Reef",
    },
  },
  4830: {
    spot: { Lat: -37.69315, Long: 176.28161666666668, spotName: "Papamoa" },
  },
  4831: {
    spot: { Lat: -37.5686, Long: 140.11971666666668, spotName: "Southend" },
  },
  4832: {
    spot: { Lat: -34.67575, Long: 150.85583333333332, spotName: "The Wedge" },
  },
  4833: {
    spot: {
      Lat: 39.001583333333336,
      Long: -74.78711666666666,
      spotName: "Wildwood 2nd Street",
    },
  },
  4834: { spot: { Lat: 37.97705, Long: 128.7599, spotName: "Jukdo Beach" } },
  4835: {
    spot: { Lat: 21.272983333333332, Long: -157.83565, spotName: "Paradise" },
  },
  4836: { spot: { Lat: 38.68025, Long: -9.3448, spotName: "Cubiculo" } },
  4837: {
    spot: { Lat: -26.2363, Long: -70.65445, spotName: "Playa Blanca" },
  },
  4838: {
    spot: { Lat: 34.66643333333333, Long: 138.195, spotName: "Susuki" },
  },
  4839: {
    spot: {
      Lat: 15.236183333333333,
      Long: 120.01095,
      spotName: "Chelsea's Point",
    },
  },
  4840: {
    spot: {
      Lat: -38.5019,
      Long: 144.00738333333334,
      spotName: "Upper Cathedral Rock",
    },
  },
  4841: {
    spot: {
      Lat: -35.385933333333334,
      Long: 150.45921666666666,
      spotName: "Racecourse Reef",
    },
  },
  4842: {
    spot: {
      Lat: 42.374716666666664,
      Long: 11.154166666666667,
      spotName: "Cannelle",
    },
  },
  4843: {
    spot: {
      Lat: 40.023583333333335,
      Long: -124.05748333333334,
      spotName: "Deadman's",
    },
  },
  4844: {
    spot: {
      Lat: -33.2366,
      Long: 134.66731666666666,
      spotName: "Venus Bay Beach 4 & 5",
    },
  },
  4845: {
    spot: {
      Lat: 32.80708333333333,
      Long: 34.955616666666664,
      spotName: "pik",
    },
  },
  4846: {
    spot: {
      Lat: 21.005683333333334,
      Long: -156.65181666666666,
      spotName: "DT Flemming",
    },
  },
  4847: {
    spot: { Lat: -34.296366666666664, Long: 18.8214, spotName: "Jerilotto" },
  },
  4848: {
    spot: {
      Lat: 42.5398,
      Long: 14.134466666666667,
      spotName: "Silvi Marina",
    },
  },
  4849: {
    spot: { Lat: -41.06175, Long: -62.84866666666667, spotName: "Picoto" },
  },
  4850: {
    spot: {
      Lat: -35.28178333333334,
      Long: 150.4921,
      spotName: "Conjola Beach",
    },
  },
  4851: {
    spot: {
      Lat: 28.22775,
      Long: -13.985116666666666,
      spotName: "Las Playas Muelle",
    },
  },
  4852: {
    spot: {
      Lat: 28.347183333333334,
      Long: -14.178183333333333,
      spotName: "Palya de Garcey",
    },
  },
  4853: {
    spot: {
      Lat: -32.58226666666667,
      Long: 115.64736666666667,
      spotName: "Cozzies",
    },
  },
  4854: {
    spot: {
      Lat: 4.954383333333333,
      Long: -52.2972,
      spotName: "ilet du novotel 2",
    },
  },
  4855: {
    spot: { Lat: -33.83525, Long: 151.2791, spotName: "Lady Jane Bay" },
  },
  4856: {
    spot: {
      Lat: 33.60241666666667,
      Long: -117.91306666666667,
      spotName: "Middles",
    },
  },
  4857: {
    spot: {
      Lat: 48.99385,
      Long: -125.63621666666667,
      spotName: "Florencia Bay",
    },
  },
  4858: {
    spot: {
      Lat: 45.706066666666665,
      Long: -1.2394333333333334,
      spotName: "Côte sauvage - Le 47",
    },
  },
  4859: {
    spot: {
      Lat: -34.6907,
      Long: 150.85391666666666,
      spotName: "Kiama East Beach",
    },
  },
  4860: { spot: { Lat: 25.6048, Long: 55.5789, spotName: "UAQ Beach" } },
  4861: {
    spot: {
      Lat: -34.8162,
      Long: 19.955466666666666,
      spotName: "Suiderstrand",
    },
  },
  4862: {
    spot: { Lat: 12.6792, Long: 124.36523333333334, spotName: "Magasang" },
  },
  4863: {
    spot: { Lat: -31.54035, Long: 115.61543333333333, spotName: "club cap" },
  },
  4864: {
    spot: {
      Lat: 25.089566666666666,
      Long: -77.32543333333334,
      spotName: "Paradise Island",
    },
  },
  4865: {
    spot: {
      Lat: 41.14008333333334,
      Long: 30.15213333333333,
      spotName: "Sarisu",
    },
  },
  4866: {
    spot: { Lat: -2.8202, Long: 100.05898333333333, spotName: "Green Bush" },
  },
  4867: {
    spot: {
      Lat: 14.59155,
      Long: -17.145533333333333,
      spotName: "Piere de Lisse",
    },
  },
  4868: {
    spot: { Lat: -0.8688333333333333, Long: -46.4308, spotName: "Camaraçu" },
  },
  4869: {
    spot: {
      Lat: 37.988416666666666,
      Long: 27.132216666666668,
      spotName: "Özdere Plaj",
    },
  },
  4870: {
    spot: {
      Lat: 23.241733333333332,
      Long: -106.45348333333334,
      spotName: "Las Flores",
    },
  },
  4871: {
    spot: { Lat: 10.52725, Long: 51.2161, spotName: "North Hafun point" },
  },
  4872: { spot: { Lat: 43.13285, Long: 5.74795, spotName: "bandol" } },
  4873: {
    spot: {
      Lat: -2.0248333333333335,
      Long: 99.56531666666666,
      spotName: "Ariks",
    },
  },
  4874: {
    spot: { Lat: -35.17016666666667, Long: 173.10865, spotName: "Peaks" },
  },
  4875: {
    spot: {
      Lat: 46.275733333333335,
      Long: -124.04461666666667,
      spotName: 'Fort Canby- "A" jetty',
    },
  },
  4876: {
    spot: { Lat: -38.04045, Long: 140.62046666666666, spotName: "Gates" },
  },
  4877: {
    spot: { Lat: 9.244283333333334, Long: 126.0779, spotName: "Habag" },
  },
  4878: {
    spot: {
      Lat: 43.41811666666667,
      Long: 39.920833333333334,
      spotName: "Chaika",
    },
  },
  4879: {
    spot: {
      Lat: 21.535066666666665,
      Long: -157.83858333333333,
      spotName: "kualoa point (the point, kualoa valley)",
    },
  },
  4880: {
    spot: { Lat: -12.4767, Long: -76.79058333333333, spotName: "Naplo" },
  },
  4881: {
    spot: {
      Lat: -24.369533333333333,
      Long: -47.0117,
      spotName: "Guarau, Peruibe SP",
    },
  },
  4882: { spot: { Lat: 39.20725, Long: 9.56515, spotName: "sant' Elmo" } },
  4883: {
    spot: { Lat: 30.376133333333332, Long: -81.3947, spotName: "The Barge" },
  },
  4884: {
    spot: {
      Lat: 21.36865,
      Long: -158.13598333333334,
      spotName: "Nanakuli Blackrocks",
    },
  },
  4885: {
    spot: {
      Lat: 33.39073333333333,
      Long: -117.59863333333334,
      spotName: "Cottons",
    },
  },
  4886: {
    spot: { Lat: 34.0121, Long: -77.89881666666666, spotName: "Shit Pipe" },
  },
  4887: {
    spot: {
      Lat: 45.742016666666665,
      Long: -1.2412333333333334,
      spotName: "Côte sauvage - Le 27",
    },
  },
  4888: {
    spot: {
      Lat: 37.804966666666665,
      Long: 128.9098,
      spotName: "Gyongpo Beach",
    },
  },
  4889: {
    spot: { Lat: -38.394816666666664, Long: 142.4955, spotName: "grannys" },
  },
  4890: {
    spot: {
      Lat: 34.84296666666667,
      Long: 32.38563333333333,
      spotName: "Potima Point",
    },
  },
  4891: {
    spot: {
      Lat: -4.2176833333333335,
      Long: -81.18645,
      spotName: "Varadero El Ñuro",
    },
  },
  4892: {
    spot: {
      Lat: 33.62403333333334,
      Long: -78.95415,
      spotName: "Ocean Lakes ",
    },
  },
  4893: {
    spot: {
      Lat: 44.52585,
      Long: 12.279716666666667,
      spotName: "Marina di Romea",
    },
  },
  4894: {
    spot: {
      Lat: -22.947166666666668,
      Long: -42.16681666666667,
      spotName: "Massambaba",
    },
  },
  4895: {
    spot: {
      Lat: 27.99665,
      Long: -15.374466666666667,
      spotName: "Playa del Hombre",
    },
  },
  4896: {
    spot: { Lat: 33.65313333333334, Long: 135.95925, spotName: "GoroGoro" },
  },
  4897: {
    spot: { Lat: 9.579083333333333, Long: 125.76255, spotName: "Che Che's" },
  },
  4898: {
    spot: {
      Lat: 45.71328333333334,
      Long: -1.23905,
      spotName: "Côte sauvage - Le 43",
    },
  },
  4899: {
    spot: { Lat: -38.374, Long: 144.27896666666666, spotName: "Southside" },
  },
  4900: {
    spot: {
      Lat: 41.15946666666667,
      Long: 30.219783333333332,
      spotName: "Kumcagiz",
    },
  },
  4901: {
    spot: {
      Lat: 58.56753333333333,
      Long: -4.734483333333333,
      spotName: "Sango Sands",
    },
  },
  4902: {
    spot: {
      Lat: 35.12991666666667,
      Long: 139.61991666666665,
      spotName: "Jogashima",
    },
  },
  4903: {
    spot: { Lat: -7.7081333333333335, Long: -79.46, spotName: "Keys" },
  },
  4904: {
    spot: { Lat: 43.982883333333334, Long: 8.1604, spotName: "Laiguelia" },
  },
  4905: {
    spot: {
      Lat: 28.741466666666668,
      Long: -80.6951,
      spotName: "Playalinda Beach",
    },
  },
  4906: {
    spot: { Lat: 9.23115, Long: 126.05833333333334, spotName: "Badjang" },
  },
  4907: {
    spot: { Lat: 9.298666666666668, Long: 126.1972, spotName: "Tomasitos" },
  },
  4908: {
    spot: {
      Lat: 43.87571666666667,
      Long: 10.236466666666667,
      spotName: "Royal",
    },
  },
  4909: {
    spot: {
      Lat: 35.10628333333333,
      Long: 140.10383333333334,
      spotName: "Kamogawa, Chiba",
    },
  },
  4910: {
    spot: {
      Lat: 3.858083333333333,
      Long: -159.36458333333334,
      spotName: "English channel left",
    },
  },
  4911: {
    spot: { Lat: 0.6023, Long: 97.68433333333333, spotName: "Shark Pit" },
  },
  4912: {
    spot: {
      Lat: -12.368716666666666,
      Long: -76.79898333333334,
      spotName: "Orillazo",
    },
  },
  4913: {
    spot: { Lat: 34.94231666666667, Long: 32.3129, spotName: "Cripplers" },
  },
  4914: {
    spot: {
      Lat: 31.986983333333335,
      Long: -80.84725,
      spotName: "Tybee - South End Sand Bar",
    },
  },
  4915: {
    spot: {
      Lat: 28.33515,
      Long: -80.60698333333333,
      spotName: "Lori Wilson Park",
    },
  },
  4916: {
    spot: { Lat: 43.404333333333334, Long: -3.31465, spotName: "Islares" },
  },
  4917: { spot: { Lat: 43.7499, Long: -69.9848, spotName: "Trayhan's" } },
  4918: {
    spot: {
      Lat: 9.264783333333334,
      Long: 126.09008333333334,
      spotName: "Lanuza",
    },
  },
  4919: {
    spot: {
      Lat: 66.09416666666667,
      Long: -17.316516666666665,
      spotName: "Eyvik",
    },
  },
  4920: {
    spot: { Lat: 4.75085, Long: -2.0456833333333333, spotName: "Katakor" },
  },
  4921: {
    spot: {
      Lat: -2.033333333333333,
      Long: 99.56848333333333,
      spotName: "Suicides",
    },
  },
  4922: {
    spot: {
      Lat: 42.53975,
      Long: 14.134483333333334,
      spotName: "Paloma Silvi Marina",
    },
  },
  4923: {
    spot: {
      Lat: 39.16766666666667,
      Long: 23.404916666666665,
      spotName: "Skiathos - Ilias, Madraki",
    },
  },
  4924: { spot: { Lat: 46.28775, Long: 30.6625, spotName: "Kometa" } },
  4925: {
    spot: { Lat: -31.54695, Long: 115.62046666666667, spotName: "Rafts" },
  },
  4926: {
    spot: {
      Lat: -38.34153333333333,
      Long: 144.32726666666667,
      spotName: "Toquay Reef Point",
    },
  },
  4927: {
    spot: { Lat: -30.744133333333334, Long: 152.9994, spotName: "Suck Rock" },
  },
  4928: {
    spot: {
      Lat: 41.15168333333333,
      Long: 30.196366666666666,
      spotName: "Erba",
    },
  },
  4929: {
    spot: {
      Lat: -33.84988333333333,
      Long: 151.26723333333334,
      spotName: "Nielson Park",
    },
  },
  4930: {
    spot: {
      Lat: -34.830133333333336,
      Long: 19.983516666666667,
      spotName: "Meisho Maru",
    },
  },
  4931: {
    spot: {
      Lat: 21.355933333333333,
      Long: -158.1295,
      spotName: "Power Plant",
    },
  },
  4932: {
    spot: { Lat: 34.33801666666667, Long: -119.41255, spotName: "Hobson's" },
  },
  4933: {
    spot: {
      Lat: -12.566066666666666,
      Long: -76.7186,
      spotName: "Las Gramas",
    },
  },
  4934: {
    spot: { Lat: 36.61275, Long: -121.85863333333333, spotName: "Seaside" },
  },
  4935: {
    spot: {
      Lat: -3.3455,
      Long: 143.55903333333333,
      spotName: "Kragur Village, Kairiru Island",
    },
  },
  4936: { spot: { Lat: -1.9853, Long: 99.5684, spotName: "Resorts" } },
  4937: {
    spot: {
      Lat: -13.96985,
      Long: -171.46791666666667,
      spotName: "Tiav'a Rivermouth",
    },
  },
  4938: { spot: { Lat: -38.76025, Long: 143.67995, spotName: "The Corner" } },
  4939: {
    spot: { Lat: 39.6973, Long: -74.13636666666666, spotName: "Middlesex " },
  },
  4940: {
    spot: {
      Lat: 46.85285,
      Long: 143.17141666666666,
      spotName: "Okhotsk Beachbreak",
    },
  },
  4941: {
    spot: { Lat: 35.18671666666667, Long: 140.35, spotName: "Onjuku" },
  },
  4942: {
    spot: {
      Lat: 21.347716666666667,
      Long: -158.12938333333332,
      spotName: "Turtles reef",
    },
  },
  4943: {
    spot: {
      Lat: 0.5722166666666666,
      Long: 97.73253333333334,
      spotName: "Kiddies Corner",
    },
  },
  4944: {
    spot: { Lat: 41.2907, Long: -124.0929, spotName: "redwood creek" },
  },
  4945: {
    spot: { Lat: 51.8287, Long: 3.892383333333333, spotName: "Ouddorp" },
  },
  4946: {
    spot: {
      Lat: -18.452333333333332,
      Long: -70.30503333333333,
      spotName: "Las Machas",
    },
  },
  4947: {
    spot: {
      Lat: 9.394366666666667,
      Long: 126.05473333333333,
      spotName: "Hewies Ayuki  Island",
    },
  },
  4948: {
    spot: {
      Lat: -26.42465,
      Long: 153.10941666666668,
      spotName: "Burgess creek",
    },
  },
  4949: {
    spot: {
      Lat: 34.425533333333334,
      Long: -77.54481666666666,
      spotName: "Surf City Pier",
    },
  },
  4950: {
    spot: {
      Lat: -35.03758333333333,
      Long: 173.1538,
      spotName: "90 Mile Beach",
    },
  },
  4951: {
    spot: {
      Lat: -33.64778333333334,
      Long: 115.34133333333334,
      spotName: "Port Geograph Bay",
    },
  },
  4952: {
    spot: {
      Lat: -12.124516666666667,
      Long: -77.0403,
      spotName: "Las Orishas",
    },
  },
  4953: {
    spot: {
      Lat: 15.209966666666666,
      Long: -61.36711666666667,
      spotName: "Scotts Head",
    },
  },
  4954: {
    spot: {
      Lat: -31.557666666666666,
      Long: 115.62801666666667,
      spotName: "Yanchep - doggies shorey",
    },
  },
  4955: {
    spot: {
      Lat: 5.319933333333333,
      Long: 162.91703333333334,
      spotName: "Walung",
    },
  },
  4956: {
    spot: {
      Lat: -53.77445,
      Long: -67.70108333333333,
      spotName: "Rio Grande-Tierra del Fuego",
    },
  },
  4957: {
    spot: { Lat: 10.48275, Long: -68.03803333333333, spotName: "Cumboto" },
  },
  4958: {
    spot: {
      Lat: -22.8854,
      Long: -42.013983333333336,
      spotName: "Praia do Forte - Cabo Frio",
    },
  },
  4959: {
    spot: {
      Lat: 11.920433333333333,
      Long: -86.61723333333333,
      spotName: "Quizala ",
    },
  },
  4960: {
    spot: { Lat: -1.8399833333333333, Long: 99.15135, spotName: "Burger" },
  },
  4961: {
    spot: {
      Lat: 13.486433333333334,
      Long: -89.32473333333333,
      spotName: "Restaurants",
    },
  },
  4962: {
    spot: {
      Lat: 46.6205,
      Long: 142.93026666666665,
      spotName: "Prigorodnoye",
    },
  },
  4963: {
    spot: {
      Lat: -38.0879,
      Long: -57.54055,
      spotName: "Honu Beach Mar Del Plata",
    },
  },
  4964: {
    spot: {
      Lat: 33.5463,
      Long: -117.80201666666666,
      spotName: "Crescent bay",
    },
  },
  4965: {
    spot: { Lat: 29.7705, Long: -93.46181666666666, spotName: "Holly Beach" },
  },
  4966: {
    spot: {
      Lat: -4.74125,
      Long: 55.472316666666664,
      spotName: "Anse Poules Bleues",
    },
  },
  4967: {
    spot: {
      Lat: 16.741433333333333,
      Long: -62.233066666666666,
      spotName: "Belham Valley Rivermouth",
    },
  },
  4968: {
    spot: {
      Lat: 21.414433333333335,
      Long: 91.98166666666667,
      spotName: "Cox's Bazar",
    },
  },
  4969: {
    spot: {
      Lat: -34.69113333333333,
      Long: 150.85321666666667,
      spotName: "East Beach",
    },
  },
  4970: {
    spot: {
      Lat: 36.85053333333333,
      Long: 10.333933333333333,
      spotName: "carthage neptune",
    },
  },
  4971: {
    spot: {
      Lat: 42.024633333333334,
      Long: -8.887833333333333,
      spotName: "San Francisco",
    },
  },
  4972: {
    spot: {
      Lat: -31.845583333333334,
      Long: 115.75018333333334,
      spotName: "2nds",
    },
  },
  4973: {
    spot: { Lat: 43.25273333333333, Long: 28.03, spotName: "kabakum beach" },
  },
  4974: {
    spot: {
      Lat: 43.549883333333334,
      Long: -6.472833333333333,
      spotName: "Playa cueva",
    },
  },
  4975: {
    spot: {
      Lat: 27.676283333333334,
      Long: -97.16461666666666,
      spotName: "Fish Pass Jetties",
    },
  },
  4976: {
    spot: {
      Lat: 13.493066666666667,
      Long: -89.43993333333333,
      spotName: "El Zonte Rivermouth",
    },
  },
  4977: {
    spot: {
      Lat: 28.475033333333332,
      Long: -13.865983333333334,
      spotName: "Puerto del Rosario",
    },
  },
  4978: {
    spot: { Lat: -7.71055, Long: -79.46878333333333, spotName: "Malpaso" },
  },
  4979: {
    spot: { Lat: -36.0828, Long: 150.13425, spotName: "Blackfellows Point" },
  },
  4980: {
    spot: {
      Lat: 55.62586666666667,
      Long: 8.114633333333334,
      spotName: "Vejers Strand",
    },
  },
  4981: {
    spot: {
      Lat: -38.054633333333335,
      Long: 140.94158333333334,
      spotName: "Piccaninnie Beach",
    },
  },
  4982: {
    spot: {
      Lat: -39.877266666666664,
      Long: 144.10638333333333,
      spotName: "Narracoopa Beach",
    },
  },
  4983: {
    spot: {
      Lat: 43.90135,
      Long: 8.077433333333333,
      spotName: "Diano Marina",
    },
  },
  4984: {
    spot: {
      Lat: -33.44781666666667,
      Long: 151.44833333333332,
      spotName: "Shelfs",
    },
  },
  4985: {
    spot: {
      Lat: -22.7264,
      Long: -41.971466666666664,
      spotName: "Laje da Rasa",
    },
  },
  4986: {
    spot: {
      Lat: -29.486533333333334,
      Long: 153.3652,
      spotName: "Angourie Lefts",
    },
  },
  4987: {
    spot: {
      Lat: 28.571716666666667,
      Long: -14.048783333333333,
      spotName: "playa de mujer",
    },
  },
  4988: {
    spot: {
      Lat: -38.3942,
      Long: 142.48158333333333,
      spotName: "Warnambool Surf Beach",
    },
  },
  4989: {
    spot: {
      Lat: 48.908166666666666,
      Long: -122.76603333333334,
      spotName: "Seaman Spit",
    },
  },
  4990: {
    spot: {
      Lat: -2.645783333333333,
      Long: -80.41185,
      spotName: "sharkbay, Playas Ecuador",
    },
  },
  4991: {
    spot: {
      Lat: 44.54031666666667,
      Long: 12.280833333333334,
      spotName: "Lido Carabiniere",
    },
  },
  4992: {
    spot: { Lat: -27.17031666666667, Long: -109.4497, spotName: "Mataveri" },
  },
  4993: {
    spot: {
      Lat: -34.75176666666667,
      Long: 173.12788333333333,
      spotName: "Henderson Beach",
    },
  },
  4994: {
    spot: {
      Lat: -9.327166666666667,
      Long: -35.43853333333333,
      spotName: "Praia do Morro",
    },
  },
  4995: {
    spot: {
      Lat: -32.44765,
      Long: 152.52015,
      spotName: "Seal Rocks-Lighthouse Beach",
    },
  },
  4996: { spot: { Lat: 41.3005, Long: 19.4919, spotName: "iliria" } },
  4997: {
    spot: {
      Lat: 27.948683333333335,
      Long: -80.49786666666667,
      spotName: "Duval Street",
    },
  },
  4998: {
    spot: { Lat: -37.2606, Long: 150.04028333333332, spotName: "The Cobra" },
  },
  4999: {
    spot: { Lat: -7.7001, Long: -79.44203333333333, spotName: "El Hombre" },
  },
  5000: {
    spot: {
      Lat: -33.278283333333334,
      Long: 151.57531666666668,
      spotName: "Big bommie",
    },
  },
  5001: {
    spot: { Lat: -28.10545, Long: -48.635266666666666, spotName: "Ouvidor" },
  },
  5002: {
    spot: {
      Lat: -38.39511666666667,
      Long: 142.23998333333333,
      spotName: "The Passage",
    },
  },
  5003: { spot: { Lat: -0, Long: -0, spotName: "Boxcars" } },
  5004: {
    spot: { Lat: 32.82078333333333, Long: -117.2805, spotName: "Hogans" },
  },
  5005: {
    spot: {
      Lat: 27.49726666666667,
      Long: -82.71413333333334,
      spotName: "Holmes beach pier",
    },
  },
  5006: {
    spot: {
      Lat: 0.9845333333333334,
      Long: -79.67641666666667,
      spotName: "Balao",
    },
  },
  5007: {
    spot: {
      Lat: 28.158783333333332,
      Long: -15.665416666666667,
      spotName: "Bocabarranco",
    },
  },
  5008: {
    spot: {
      Lat: 45.02206666666667,
      Long: -124.01096666666666,
      spotName: "Lincoln City - Roads End",
    },
  },
  5009: {
    spot: {
      Lat: 43.317683333333335,
      Long: -124.4066,
      spotName: "Simpson Reef",
    },
  },
  5010: {
    spot: {
      Lat: 9.244283333333334,
      Long: 126.09146666666666,
      spotName: "7 rocks",
    },
  },
  5011: {
    spot: { Lat: 21.888466666666666, Long: -159.4151, spotName: "Gillin's" },
  },
  5012: {
    spot: {
      Lat: -5.302066666666667,
      Long: 104.00053333333334,
      spotName: "Volcanos",
    },
  },
  5013: {
    spot: { Lat: 41.2543, Long: 1.9049999999999998, spotName: "Garraf" },
  },
  5014: {
    spot: {
      Lat: 37.805083333333336,
      Long: 23.851216666666666,
      spotName: "Agios Dimitrios",
    },
  },
  5015: {
    spot: {
      Lat: 17.74813333333333,
      Long: 83.35093333333333,
      spotName: "Hanuman point",
    },
  },
  5016: {
    spot: {
      Lat: 11.383866666666666,
      Long: -86.03711666666666,
      spotName: "Pie De Gigante Point",
    },
  },
  5017: {
    spot: {
      Lat: 17.907133333333334,
      Long: -62.83951666666667,
      spotName: "Airport left",
    },
  },
  5018: {
    spot: {
      Lat: 44.8732,
      Long: -124.03895,
      spotName: "Lincoln City - Gleneden",
    },
  },
  5019: {
    spot: {
      Lat: 41.969833333333334,
      Long: -124.20661666666666,
      spotName: "Clifford Kamph Memorial Park",
    },
  },
  5020: {
    spot: {
      Lat: 41.77066666666666,
      Long: -124.24425,
      spotName: "Garth's Reef",
    },
  },
  5021: { spot: { Lat: 39.5921, Long: 19.8055, spotName: "Glyfada Corfu" } },
  5022: {
    spot: { Lat: -34.5636, Long: 150.87413333333333, spotName: "mini pipe" },
  },
  5023: {
    spot: {
      Lat: 14.902516666666667,
      Long: -23.522666666666666,
      spotName: "Coragi",
    },
  },
  5024: {
    spot: {
      Lat: 46.428266666666666,
      Long: 30.768483333333332,
      spotName: "Arcadia",
    },
  },
  5025: {
    spot: { Lat: 37.92733333333334, Long: -0.72235, spotName: "La Zenia" },
  },
  5026: {
    spot: { Lat: 29.137, Long: -13.455633333333333, spotName: "lago" },
  },
  5027: { spot: { Lat: 20.8719, Long: -156.68005, spotName: "Harbors" } },
  5028: {
    spot: {
      Lat: 42.05061666666667,
      Long: -8.887333333333334,
      spotName: "Cantos, Mougas",
    },
  },
  5029: {
    spot: {
      Lat: -31.25658333333333,
      Long: 152.97153333333333,
      spotName: "Delicate Nobby",
    },
  },
  5030: {
    spot: {
      Lat: 18.220866666666666,
      Long: 109.51773333333334,
      spotName: "Dadonghai",
    },
  },
  5031: {
    spot: { Lat: 54.33655, Long: 10.648683333333333, spotName: "Lippe" },
  },
  5032: {
    spot: {
      Lat: 5.839733333333333,
      Long: -10.026916666666667,
      spotName: "Tico's Point",
    },
  },
  5033: {
    spot: {
      Lat: -8.800383333333333,
      Long: 115.23731666666667,
      spotName: "mushrooms",
    },
  },
  5034: {
    spot: {
      Lat: 49.46841666666667,
      Long: 11.018966666666667,
      spotName: "Pegnitz (river)",
    },
  },
  5035: {
    spot: {
      Lat: 40.1395,
      Long: -8.869533333333333,
      spotName: "Cabedelo (o Point-Break)",
    },
  },
  5036: {
    spot: { Lat: 12.676516666666666, Long: 124.36935, spotName: "geron" },
  },
  5037: {
    spot: { Lat: 33.73661666666667, Long: -118.39845, spotName: "Bee Hives" },
  },
  5038: {
    spot: {
      Lat: 11.220833333333333,
      Long: -85.84871666666666,
      spotName: "Playa Remanso",
    },
  },
  5039: {
    spot: { Lat: 44.6999, Long: -124.06486666666666, spotName: "Moolack" },
  },
  5040: {
    spot: {
      Lat: -35.1224,
      Long: 150.76568333333333,
      spotName: "Steele's break",
    },
  },
  5041: { spot: { Lat: 41.99895, Long: -124.2116, spotName: "State Line" } },
  5042: {
    spot: {
      Lat: -34.5606,
      Long: 150.87473333333332,
      spotName: "Barrack Point",
    },
  },
  5043: {
    spot: { Lat: 36.78681666666667, Long: 3.3235, spotName: "Decaplage" },
  },
  5044: {
    spot: {
      Lat: 19.678383333333333,
      Long: -70.01618333333333,
      spotName: "La Punta",
    },
  },
  5045: {
    spot: {
      Lat: 28.976766666666666,
      Long: -80.85566666666666,
      spotName: "Beach Club",
    },
  },
  5046: {
    spot: {
      Lat: 0.9935833333333334,
      Long: -79.66068333333334,
      spotName: "El Bajo",
    },
  },
  5047: {
    spot: {
      Lat: 28.146166666666666,
      Long: -15.56715,
      spotName: "Derecha del alto",
    },
  },
  5048: {
    spot: {
      Lat: 36.89843333333334,
      Long: 8.430166666666667,
      spotName: "Plage Mordjane",
    },
  },
  5049: { spot: { Lat: 37.1733, Long: 25.48015, spotName: "Abrami Beach" } },
  5050: { spot: { Lat: 34.06585, Long: -119.00455, spotName: "Deadman's" } },
  5051: {
    spot: { Lat: 41.1574, Long: 29.728483333333333, spotName: "woodyville" },
  },
  5052: {
    spot: { Lat: 54.79351666666667, Long: 18.42425, spotName: "Rurociag" },
  },
  5053: {
    spot: { Lat: 54.22611666666667, Long: 11.08975, spotName: "Dahme" },
  },
  5054: {
    spot: {
      Lat: 45.97796666666667,
      Long: -123.94115,
      spotName: "Seaside Cove",
    },
  },
  5055: {
    spot: {
      Lat: -23.370966666666668,
      Long: -44.79986666666667,
      spotName: "Brava do Camburi",
    },
  },
  5056: {
    spot: {
      Lat: 37.07018333333333,
      Long: -8.776166666666667,
      spotName: "Burgau",
    },
  },
  5057: {
    spot: {
      Lat: 43.36643333333333,
      Long: -124.33218333333333,
      spotName: "Coos Bay North",
    },
  },
  5058: {
    spot: {
      Lat: 37.0411,
      Long: -122.23333333333333,
      spotName: "Scott's Creek",
    },
  },
  5059: {
    spot: { Lat: 11.00835, Long: -74.95111666666666, spotName: "El Paredón" },
  },
  5060: {
    spot: { Lat: 41.23435, Long: 1.8285833333333334, spotName: "Aiguadolc" },
  },
  5061: {
    spot: {
      Lat: 11.398083333333334,
      Long: -86.03813333333333,
      spotName: "Playa Amarillo",
    },
  },
  5062: {
    spot: {
      Lat: 39.830666666666666,
      Long: -123.8501,
      spotName: "Usal Beach",
    },
  },
  5063: {
    spot: {
      Lat: -34.998783333333336,
      Long: 150.80116666666666,
      spotName: "Currarong - Beecroft",
    },
  },
  5064: {
    spot: {
      Lat: -36.89541666666667,
      Long: 174.44418333333334,
      spotName: "Te Henga",
    },
  },
  5065: {
    spot: {
      Lat: -34.523383333333335,
      Long: 150.87913333333333,
      spotName: "Windang Beach",
    },
  },
  5066: {
    spot: {
      Lat: 20.902633333333334,
      Long: -156.46346666666668,
      spotName: "Pier one",
    },
  },
  5067: {
    spot: {
      Lat: -14.039966666666666,
      Long: -171.61525,
      spotName: "Salani Right",
    },
  },
  5068: {
    spot: {
      Lat: 43.49451666666667,
      Long: 39.88301666666667,
      spotName: "Kudepsta",
    },
  },
  5069: {
    spot: {
      Lat: -28.106833333333334,
      Long: 153.46728333333334,
      spotName: "Palm Beach 21st rock jetty",
    },
  },
  5070: {
    spot: {
      Lat: -13.862233333333334,
      Long: -171.66493333333332,
      spotName: "Waterfalls",
    },
  },
  5071: {
    spot: {
      Lat: -8.592733333333333,
      Long: 115.34813333333334,
      spotName: "Secret",
    },
  },
  5072: {
    spot: {
      Lat: -28.687883333333332,
      Long: 114.60515,
      spotName: "drummonds point",
    },
  },
  5073: {
    spot: {
      Lat: 43.474783333333335,
      Long: -5.214216666666666,
      spotName: "playa La Espasa",
    },
  },
  5074: {
    spot: { Lat: -14.8406, Long: -39.001466666666666, spotName: "Backdoor" },
  },
  5075: {
    spot: { Lat: -34.09883333333333, Long: 24.89625, spotName: "Paradise" },
  },
  5076: {
    spot: {
      Lat: 18.22896666666667,
      Long: -70.18883333333333,
      spotName: "Pato Beach",
    },
  },
  5077: {
    spot: { Lat: -8.68805, Long: 114.37285, spotName: "Tiger Tracks Lefts" },
  },
  5078: {
    spot: {
      Lat: -32.741566666666664,
      Long: 152.18853333333334,
      spotName: "Fingal Spit",
    },
  },
  5079: {
    spot: {
      Lat: 9.852166666666667,
      Long: -85.40061666666666,
      spotName: "Islita",
    },
  },
  5080: {
    spot: {
      Lat: 44.95908333333333,
      Long: -124.02173333333333,
      spotName: "Lincoln City - Canyons",
    },
  },
  5081: {
    spot: {
      Lat: 0.7765166666666666,
      Long: -80.08931666666666,
      spotName: "Estero de Platano",
    },
  },
  5082: {
    spot: {
      Lat: 19.9481,
      Long: -72.77068333333334,
      spotName: "Haiti The Point",
    },
  },
  5083: {
    spot: {
      Lat: 36.86313333333333,
      Long: 7.7824333333333335,
      spotName: "Sidi Salem",
    },
  },
  5084: {
    spot: {
      Lat: 41.73918333333334,
      Long: -124.1839,
      spotName: "Whaler Island",
    },
  },
  5085: {
    spot: {
      Lat: -21.032616666666666,
      Long: 149.17436666666666,
      spotName: "Eimeo Point",
    },
  },
  5086: {
    spot: {
      Lat: -36.79196666666667,
      Long: 149.95548333333332,
      spotName: "Wallagoot",
    },
  },
  5087: { spot: { Lat: 41.3884, Long: 19.3955, spotName: "Bishtpala Out" } },
  5088: {
    spot: {
      Lat: 31.892666666666667,
      Long: -116.69668333333334,
      spotName: "stack's",
    },
  },
  5089: {
    spot: {
      Lat: 35.92366666666667,
      Long: -121.47283333333333,
      spotName: "Sand Dollar Beach",
    },
  },
  5090: {
    spot: {
      Lat: 38.1521,
      Long: 20.480666666666668,
      spotName: "Makris Gialos",
    },
  },
  5091: {
    spot: {
      Lat: 36.6114,
      Long: 2.2041333333333335,
      spotName: "cherchell tizirine",
    },
  },
  5092: {
    spot: { Lat: 41.1585, Long: 29.619133333333334, spotName: "Merkez Sile" },
  },
  5093: {
    spot: {
      Lat: 41.841433333333335,
      Long: -124.37518333333334,
      spotName: "Saint George Reef Lighthouse",
    },
  },
  5094: {
    spot: { Lat: -14.014333333333333, Long: -171.81195, spotName: "Sales" },
  },
  5095: {
    spot: {
      Lat: 32.380833333333335,
      Long: 129.99426666666668,
      spotName: "Takahama",
    },
  },
  5096: {
    spot: {
      Lat: -30.218333333333334,
      Long: 153.16046666666668,
      spotName: "Sluttys",
    },
  },
  5097: {
    spot: { Lat: 55.67353333333333, Long: 8.1425, spotName: "borsmose" },
  },
  5098: {
    spot: {
      Lat: 60.1195,
      Long: 29.941716666666668,
      spotName: "Dunes, Sestrorezk",
    },
  },
  5099: {
    spot: {
      Lat: 34.419383333333336,
      Long: -119.61963333333334,
      spotName: "Fernald Point",
    },
  },
  5100: { spot: { Lat: 40.8248, Long: 0.74175, spotName: "peyo's" } },
  5101: {
    spot: {
      Lat: 43.16148333333334,
      Long: 13.811433333333333,
      spotName: "Marina Palmense",
    },
  },
  5102: {
    spot: {
      Lat: -33.54131666666667,
      Long: 115.04033333333334,
      spotName: "Bunker Bay - Bommie",
    },
  },
  5103: {
    spot: { Lat: 9.10955, Long: 126.16218333333333, spotName: "Jovees" },
  },
  5104: {
    spot: {
      Lat: 11.392533333333333,
      Long: -86.03521666666667,
      spotName: "Hongo Reef",
    },
  },
  5105: {
    spot: {
      Lat: 37.061733333333336,
      Long: -8.090783333333333,
      spotName: "Forte Novo",
    },
  },
  5106: {
    spot: {
      Lat: 43.09271666666667,
      Long: -124.43466666666667,
      spotName: "Bandon Beaches",
    },
  },
  5107: {
    spot: {
      Lat: 41.8693,
      Long: -124.21623333333334,
      spotName: "Pelican Beach",
    },
  },
  5108: {
    spot: {
      Lat: 43.616883333333334,
      Long: -79.32833333333333,
      spotName: "Lang's Left",
    },
  },
  5109: {
    spot: {
      Lat: 33.720666666666666,
      Long: -78.84473333333334,
      spotName: "48th st. Myrtle Beach",
    },
  },
  5110: {
    spot: {
      Lat: -53.02328333333333,
      Long: 73.37936666666667,
      spotName: "Satans Shank",
    },
  },
  5111: {
    spot: {
      Lat: -17.478883333333332,
      Long: 49.473016666666666,
      spotName: "Mahambo",
    },
  },
  5112: {
    spot: {
      Lat: 41.78613333333333,
      Long: -124.25508333333333,
      spotName: "Point Saint George",
    },
  },
  5113: {
    spot: {
      Lat: -6.963416666666666,
      Long: -34.84256666666667,
      spotName: "Dique de Cabedelo",
    },
  },
  5114: {
    spot: {
      Lat: 38.52506666666667,
      Long: -123.26888333333333,
      spotName: "Bill's Bowls",
    },
  },
  5115: {
    spot: {
      Lat: 37.36143333333333,
      Long: -8.841333333333333,
      spotName: "Carriagem",
    },
  },
  5116: {
    spot: {
      Lat: 41.70525,
      Long: -124.14408333333333,
      spotName: "Enderts Beach",
    },
  },
  5117: {
    spot: {
      Lat: -33.90658333333333,
      Long: 18.4714,
      spotName: "Dolose point",
    },
  },
  5118: {
    spot: {
      Lat: 14.916683333333333,
      Long: -23.506133333333334,
      spotName: "Coca's Beach,Praia",
    },
  },
  5119: { spot: { Lat: 26.52035, Long: -76.96745, spotName: "Sugar Shack" } },
  5120: {
    spot: {
      Lat: 33.60446666666667,
      Long: -117.91886666666667,
      spotName: "Newport - 15th Street",
    },
  },
  5121: {
    spot: {
      Lat: -20.317516666666666,
      Long: -40.28853333333333,
      spotName: "Canal de Vitória",
    },
  },
  5122: {
    spot: {
      Lat: 40.00313333333333,
      Long: -8.914033333333334,
      spotName: "Praia do Osso da Baleia",
    },
  },
  5123: {
    spot: {
      Lat: -36.174416666666666,
      Long: 150.13398333333333,
      spotName: "Yabbarra",
    },
  },
  5124: {
    spot: { Lat: 28.16005, Long: -15.664033333333334, spotName: "Emiliano" },
  },
  5125: {
    spot: {
      Lat: 44.74228333333333,
      Long: -124.06053333333334,
      spotName: "Devil's Punch - Beverly Beach",
    },
  },
  5126: {
    spot: {
      Lat: 44.01306666666667,
      Long: -124.14001666666667,
      spotName: "Florence South jetty",
    },
  },
  5127: {
    spot: {
      Lat: 41.828516666666665,
      Long: -124.2286,
      spotName: "Lake Talawa",
    },
  },
  5128: {
    spot: {
      Lat: 54.08291666666667,
      Long: -4.728933333333333,
      spotName: "Gansey",
    },
  },
  5129: {
    spot: {
      Lat: -14.0425,
      Long: -171.61253333333335,
      spotName: "Salani Left",
    },
  },
  5130: {
    spot: {
      Lat: -2.6437166666666667,
      Long: -80.42451666666666,
      spotName: "pico hambre",
    },
  },
  5131: {
    spot: {
      Lat: -31.922133333333335,
      Long: 115.75511666666667,
      spotName: "dogbeach",
    },
  },
  5132: {
    spot: {
      Lat: -27.939799999999998,
      Long: 153.43376666666666,
      spotName: "Akkorokamui",
    },
  },
  5133: {
    spot: {
      Lat: 37.09661666666667,
      Long: -122.28086666666667,
      spotName: "Waddell Creek",
    },
  },
  5134: {
    spot: {
      Lat: 15.55735,
      Long: -61.29578333333333,
      spotName: "Turd Burger's",
    },
  },
  5135: {
    spot: {
      Lat: 44.295633333333335,
      Long: -81.60101666666667,
      spotName: "Inverhuron - Mac Gregor Point",
    },
  },
  5136: {
    spot: {
      Lat: 50.2667,
      Long: -3.8705499999999997,
      spotName: "Thurlsestone",
    },
  },
  5137: {
    spot: {
      Lat: 50.26665,
      Long: -3.8727666666666667,
      spotName: "Thurlestone",
    },
  },
  5138: {
    spot: { Lat: 0.87655, Long: -79.84863333333334, spotName: "Atacames" },
  },
  5139: {
    spot: { Lat: 0.8938833333333334, Long: -79.81345, spotName: "Tonsupa" },
  },
  5140: {
    spot: {
      Lat: -8.605116666666667,
      Long: 114.02623333333334,
      spotName: "Red Island",
    },
  },
  5141: {
    spot: {
      Lat: 43.34603333333333,
      Long: -124.35038333333334,
      spotName: "Coos Bay - Bastendorf Beach",
    },
  },
  5142: {
    spot: {
      Lat: 43.66311666666667,
      Long: -124.21233333333333,
      spotName: "Winchester Bay - South Umpqua Jetty",
    },
  },
  5143: {
    spot: {
      Lat: 42.74158333333333,
      Long: -124.49223333333333,
      spotName: "Port Orford",
    },
  },
  5144: {
    spot: { Lat: 14.75615, Long: -17.511183333333335, spotName: "NGor left" },
  },
  5145: { spot: { Lat: 41.5069, Long: 2.40515, spotName: "Cabrera" } },
  5146: {
    spot: {
      Lat: 25.191083333333335,
      Long: 121.41398333333333,
      spotName: "ShaLun",
    },
  },
  5147: {
    spot: {
      Lat: 52.79365,
      Long: -4.500533333333333,
      spotName: "porth ceiriad",
    },
  },
  5148: {
    spot: { Lat: 17.937266666666666, Long: -66.194, spotName: "Pozuelo" },
  },
  5149: {
    spot: {
      Lat: 28.709816666666665,
      Long: -13.837433333333333,
      spotName: "Los Hoteles",
    },
  },
  5150: {
    spot: {
      Lat: -5.300466666666667,
      Long: 103.99461666666667,
      spotName: "Richards Right",
    },
  },
  5151: {
    spot: { Lat: 12.6251, Long: -87.35443333333333, spotName: "Aserradores" },
  },
  5152: {
    spot: { Lat: 37.8201, Long: 23.811033333333334, spotName: "Vari" },
  },
  5153: {
    spot: {
      Lat: 44.03503333333333,
      Long: 145.86581666666666,
      spotName: "Yuzhno-Kurilsk",
    },
  },
  5154: {
    spot: {
      Lat: -38.66898333333334,
      Long: 143.86528333333334,
      spotName: "kennet river",
    },
  },
  5155: {
    spot: {
      Lat: -30.071733333333334,
      Long: 30.876416666666668,
      spotName: "Garfield",
    },
  },
  5156: {
    spot: {
      Lat: 28.145516666666666,
      Long: -15.574933333333334,
      spotName: "Soledad",
    },
  },
  5157: {
    spot: { Lat: 47.444, Long: -124.33708333333334, spotName: "The Cape" },
  },
  5158: {
    spot: { Lat: 44.67883333333333, Long: -124.07905, spotName: "Avalanche" },
  },
  5159: {
    spot: {
      Lat: 42.578716666666665,
      Long: -124.39488333333334,
      spotName: "Frankport",
    },
  },
  5160: {
    spot: {
      Lat: 42.5508,
      Long: -124.39613333333334,
      spotName: "Nesika Beach",
    },
  },
  5161: {
    spot: { Lat: -35.29005, Long: 136.87363333333334, spotName: "West Cape" },
  },
  5162: {
    spot: {
      Lat: 18.39525,
      Long: -67.19411666666667,
      spotName: "Colombus Spot",
    },
  },
  5163: {
    spot: {
      Lat: 41.54893333333333,
      Long: -124.08628333333333,
      spotName: "Klamath Rivermouth",
    },
  },
  5164: {
    spot: {
      Lat: 53.481833333333334,
      Long: -6.111383333333333,
      spotName: "back beach",
    },
  },
  5165: {
    spot: {
      Lat: -20.006083333333333,
      Long: 57.695166666666665,
      spotName: "bernache",
    },
  },
  5166: { spot: { Lat: -35.6319, Long: 138.4037, spotName: "Waitups" } },
  5167: {
    spot: {
      Lat: 41.224383333333336,
      Long: -124.10936666666667,
      spotName: "Dry Lagoon",
    },
  },
  5168: {
    spot: {
      Lat: -31.469666666666665,
      Long: 152.93586666666667,
      spotName: "Palms Wedge",
    },
  },
  5169: {
    spot: {
      Lat: 36.99531666666667,
      Long: 7.557783333333333,
      spotName: "Ain Barbar",
    },
  },
  5170: {
    spot: {
      Lat: 41.86918333333333,
      Long: -8.875433333333334,
      spotName: "punta dos picos",
    },
  },
  5171: {
    spot: {
      Lat: -35.536683333333336,
      Long: 138.66053333333332,
      spotName: "Chiton Rocks",
    },
  },
  5172: {
    spot: {
      Lat: 20.2428,
      Long: -155.76913333333334,
      spotName: "Swimming Pools",
    },
  },
  5173: { spot: { Lat: 23.76625, Long: -15.9246, spotName: "OumLabouir" } },
  5174: {
    spot: {
      Lat: 16.001783333333332,
      Long: 108.27093333333333,
      spotName: "Non Nuoc",
    },
  },
  5175: {
    spot: {
      Lat: -33.52923333333333,
      Long: 151.3225,
      spotName: "Umina Beach",
    },
  },
  5176: {
    spot: {
      Lat: -26.1633,
      Long: -48.53321666666667,
      spotName: "Praia do Forte",
    },
  },
  5177: {
    spot: {
      Lat: 54.180733333333336,
      Long: 12.075133333333333,
      spotName: "Warnemünde",
    },
  },
  5178: {
    spot: { Lat: 17.88845, Long: -62.81005, spotName: "Washing Machine" },
  },
  5179: {
    spot: {
      Lat: 15.2582,
      Long: 145.81356666666667,
      spotName: "Bird Island (Saipan)",
    },
  },
  5180: {
    spot: {
      Lat: 45.876466666666666,
      Long: -60.06053333333333,
      spotName: "Kennington Cove",
    },
  },
  5181: {
    spot: { Lat: 23.22605, Long: 116.68486666666666, spotName: "Mazu Eikon" },
  },
  5182: {
    spot: {
      Lat: 7.623283333333333,
      Long: -81.24466666666666,
      spotName: "Estero Beach",
    },
  },
  5183: {
    spot: {
      Lat: 5.329716666666667,
      Long: 162.93926666666667,
      spotName: "Sidedish",
    },
  },
  5184: {
    spot: {
      Lat: -43.17563333333333,
      Long: 147.8564,
      spotName: "safety cove reef",
    },
  },
  5185: {
    spot: {
      Lat: -26.458083333333335,
      Long: -48.59686666666666,
      spotName: "Picama",
    },
  },
  5186: {
    spot: { Lat: -29.3404, Long: -49.72323333333333, spotName: "Saraiva" },
  },
  5187: {
    spot: { Lat: 40.41115, Long: -124.3939, spotName: "Cape Mendocino" },
  },
  5188: {
    spot: { Lat: 9.395716666666667, Long: -76.1701, spotName: "colpipe" },
  },
  5189: {
    spot: {
      Lat: -31.56395,
      Long: 115.63271666666667,
      spotName: "lil rangas",
    },
  },
  5190: {
    spot: { Lat: 47.19345, Long: 141.84448333333333, spotName: "Kholmsk" },
  },
  5191: {
    spot: {
      Lat: -32.192616666666666,
      Long: -52.08506666666667,
      spotName: "Tres Marias",
    },
  },
  5192: {
    spot: {
      Lat: 18.493516666666668,
      Long: -66.63095,
      spotName: "Casa del Juez",
    },
  },
  5193: {
    spot: { Lat: 2.461116666666667, Long: 96.2196, spotName: "Jackals" },
  },
  5194: {
    spot: { Lat: 18.46245, Long: -66.0376, spotName: "Punta las Marias" },
  },
  5195: {
    spot: {
      Lat: 55.171616666666665,
      Long: -6.744066666666667,
      spotName: "Portstewart",
    },
  },
  5196: {
    spot: { Lat: 11.9043, Long: -86.61561666666667, spotName: "Chigga's" },
  },
  5197: {
    spot: {
      Lat: -34.34605,
      Long: 150.92378333333335,
      spotName: "The Corner",
    },
  },
  5198: {
    spot: {
      Lat: 49.334966666666666,
      Long: -123.19473333333333,
      spotName: "29th Street",
    },
  },
  5199: {
    spot: {
      Lat: -16.704166666666666,
      Long: 145.6262,
      spotName: "Ellis Beach North",
    },
  },
  5200: {
    spot: {
      Lat: -35.521683333333335,
      Long: 138.70033333333333,
      spotName: "Bashams bommie",
    },
  },
  5201: { spot: { Lat: -32.5216, Long: 115.69975, spotName: "Sidewinders" } },
  5202: {
    spot: { Lat: 40.07118333333333, Long: 8.4801, spotName: "Is Arenas" },
  },
  5203: { spot: { Lat: 55.92785, Long: 21.05535, spotName: "Palanga" } },
  5204: {
    spot: {
      Lat: -34.06236666666667,
      Long: 151.15651666666668,
      spotName: "Toads",
    },
  },
  5205: {
    spot: { Lat: 29.55315, Long: -10.056616666666667, spotName: "mirleft" },
  },
  5206: {
    spot: {
      Lat: -32.5523,
      Long: 115.67826666666667,
      spotName: "secret groyne",
    },
  },
  5207: {
    spot: {
      Lat: -32.55258333333333,
      Long: 115.67753333333333,
      spotName: "scars",
    },
  },
  5208: {
    spot: {
      Lat: 11.771733333333334,
      Long: -86.5104,
      spotName: "Pochomil Beach Break",
    },
  },
  5209: {
    spot: {
      Lat: -33.10145,
      Long: 151.65436666666668,
      spotName: "Frenchmans Beach",
    },
  },
  5210: {
    spot: {
      Lat: 36.847166666666666,
      Long: 30.808716666666665,
      spotName: "Antalya",
    },
  },
  5211: {
    spot: {
      Lat: 53.20068333333333,
      Long: -2.9886166666666667,
      spotName: "the Dee bore",
    },
  },
  5212: {
    spot: {
      Lat: -46.877116666666666,
      Long: 37.8615,
      spotName: "Kaalkop Strand",
    },
  },
  5213: {
    spot: {
      Lat: 50.44365,
      Long: -3.556216666666667,
      spotName: "Preston Beach",
    },
  },
  5214: {
    spot: {
      Lat: -20.2758,
      Long: -40.270983333333334,
      spotName: "Praia de Camburi",
    },
  },
  5215: {
    spot: {
      Lat: 32.981966666666665,
      Long: -117.27396666666667,
      spotName: "Cherry Hill",
    },
  },
  5216: { spot: { Lat: 14.91595, Long: -23.5054, spotName: "Praia Negra" } },
  5217: {
    spot: { Lat: 40.08788333333333, Long: 8.49085, spotName: "S'Archittu" },
  },
  5218: {
    spot: {
      Lat: -33.89796666666667,
      Long: 151.27586666666667,
      spotName: "The Boot",
    },
  },
  5219: {
    spot: {
      Lat: 51.58186666666667,
      Long: -8.751983333333333,
      spotName: "Dunworley",
    },
  },
  5220: {
    spot: {
      Lat: 36.53966666666667,
      Long: 32.02343333333334,
      spotName: "Alanya, Keykubat",
    },
  },
  5221: {
    spot: {
      Lat: -26.976466666666667,
      Long: -48.62316666666667,
      spotName: "Parcel",
    },
  },
  5222: {
    spot: {
      Lat: -21.244866666666667,
      Long: -159.72348333333332,
      spotName: "Motutapu",
    },
  },
  5223: {
    spot: {
      Lat: -26.679966666666665,
      Long: -48.68816666666667,
      spotName: "Praia do Sol",
    },
  },
  5224: {
    spot: {
      Lat: 41.16005,
      Long: -124.13571666666667,
      spotName: "Big Lagoon",
    },
  },
  5225: {
    spot: {
      Lat: 41.2529,
      Long: -124.10208333333334,
      spotName: "Stone Lagoon",
    },
  },
  5226: {
    spot: {
      Lat: 41.010733333333334,
      Long: -124.11598333333333,
      spotName: "Little river - Clam Beach",
    },
  },
  5227: {
    spot: {
      Lat: 33.7147,
      Long: -118.0703,
      spotName: "Sunset Beach usa north OC",
    },
  },
  5228: {
    spot: {
      Lat: -38.761383333333335,
      Long: 143.37643333333332,
      spotName: "Johanna",
    },
  },
  5229: {
    spot: {
      Lat: 43.74871666666667,
      Long: 13.176583333333333,
      spotName: "Cesano - Piramidi",
    },
  },
  5230: { spot: { Lat: -32.5481, Long: 115.68085, spotName: "sucky lefts" } },
  5231: {
    spot: {
      Lat: 21.302233333333334,
      Long: -157.89821666666666,
      spotName: "Abalolo Reef",
    },
  },
  5232: {
    spot: { Lat: -34.93463333333333, Long: -54.89935, spotName: "El Pedro" },
  },
  5233: {
    spot: { Lat: 34.7794, Long: 32.40266666666667, spotName: "Venus Beach" },
  },
  5234: {
    spot: { Lat: 55.53183333333333, Long: 21.09645, spotName: "Juodkrante" },
  },
  5235: {
    spot: {
      Lat: 38.177883333333334,
      Long: 12.737616666666666,
      spotName: "San Vito",
    },
  },
  5236: {
    spot: {
      Lat: -34.12178333333333,
      Long: 151.13748333333334,
      spotName: "Little Marley Point",
    },
  },
  5237: {
    spot: {
      Lat: -34.417966666666665,
      Long: 115.5548,
      spotName: "Black Point",
    },
  },
  5238: {
    spot: {
      Lat: -44.18836666666667,
      Long: 170.13685,
      spotName: "Lake Pukaki Point",
    },
  },
  5239: {
    spot: {
      Lat: -19.15295,
      Long: 179.73323333333335,
      spotName: "Vinakaland",
    },
  },
  5240: {
    spot: {
      Lat: 26.753466666666668,
      Long: 120.09481666666667,
      spotName: "Funingwan",
    },
  },
  5241: {
    spot: { Lat: 43.496833333333335, Long: 10.32045, spotName: "Bagni Roma" },
  },
  5242: {
    spot: {
      Lat: -26.067016666666667,
      Long: -48.60765,
      spotName: "Terceira Pedra",
    },
  },
  5243: {
    spot: {
      Lat: 18.491516666666666,
      Long: -66.64323333333333,
      spotName: "Cueva del Indio",
    },
  },
  5244: {
    spot: {
      Lat: -26.169533333333334,
      Long: -48.552483333333335,
      spotName: "Sumidouro",
    },
  },
  5245: {
    spot: {
      Lat: 12.162216666666666,
      Long: -86.75883333333333,
      spotName: "Padangs",
    },
  },
  5246: {
    spot: {
      Lat: 41.60346666666667,
      Long: -124.10173333333333,
      spotName: "Wilson Creek",
    },
  },
  5247: {
    spot: {
      Lat: -21.659583333333334,
      Long: 114.34973333333333,
      spotName: "Murion Island",
    },
  },
  5248: {
    spot: {
      Lat: 53.47796666666667,
      Long: -6.115883333333334,
      spotName: "donabate",
    },
  },
  5249: {
    spot: { Lat: 21.863633333333333, Long: -72.11075, spotName: "Pine Cay" },
  },
  5250: {
    spot: {
      Lat: 25.934066666666666,
      Long: -80.11876666666667,
      spotName: "Dunes Motel",
    },
  },
  5251: {
    spot: {
      Lat: -17.84038333333333,
      Long: -149.2963,
      spotName: "te ava iti",
    },
  },
  5252: {
    spot: {
      Lat: 5.701733333333333,
      Long: 0.10578333333333334,
      spotName: "Pram Pram",
    },
  },
  5253: {
    spot: {
      Lat: -34.897483333333334,
      Long: -55.22411666666667,
      spotName: "Punta Negra",
    },
  },
  5254: {
    spot: {
      Lat: 56.2799,
      Long: 12.494033333333334,
      spotName: "Odd Persson-bay",
    },
  },
  5255: {
    spot: { Lat: 12.182883333333333, Long: -86.7724, spotName: "Suicides" },
  },
  5256: {
    spot: { Lat: -25.9767, Long: -48.59073333333333, spotName: "Barrinha" },
  },
  5257: {
    spot: {
      Lat: -26.643016666666668,
      Long: -48.68205,
      spotName: "Praia do Tabuleiro",
    },
  },
  5258: {
    spot: {
      Lat: -32.357283333333335,
      Long: 152.53526666666667,
      spotName: "Blueys beach wedge",
    },
  },
  5259: {
    spot: { Lat: 38.09015, Long: 12.656183333333333, spotName: "Cornino" },
  },
  5260: {
    spot: {
      Lat: 36.383583333333334,
      Long: 28.02135,
      spotName: "Mircos Point",
    },
  },
  5261: {
    spot: {
      Lat: -29.205233333333332,
      Long: 16.838966666666668,
      spotName: "Rollers",
    },
  },
  5262: {
    spot: { Lat: -26.46925, Long: -48.60705, spotName: "Praia do Bispo" },
  },
  5263: {
    spot: {
      Lat: -26.726916666666668,
      Long: -48.673066666666664,
      spotName: "Laje do Jacques",
    },
  },
  5264: {
    spot: {
      Lat: -26.901883333333334,
      Long: -48.641616666666664,
      spotName: "Pracinha",
    },
  },
  5265: {
    spot: {
      Lat: -34.67641666666667,
      Long: 150.85498333333334,
      spotName: "Kiama Surf Beach",
    },
  },
  5266: {
    spot: {
      Lat: -32.917833333333334,
      Long: -71.51113333333333,
      spotName: "La Boca Con Con",
    },
  },
  5267: {
    spot: {
      Lat: -40.22873333333333,
      Long: 148.0376,
      spotName: "Trousers Point",
    },
  },
  5268: {
    spot: {
      Lat: -32.78791666666667,
      Long: 152.10401666666667,
      spotName: "Kingsley Beach",
    },
  },
  5269: {
    spot: {
      Lat: -40.9624,
      Long: 147.35498333333334,
      spotName: "Old Pier beach",
    },
  },
  5270: {
    spot: {
      Lat: -34.191266666666664,
      Long: 24.610366666666668,
      spotName: "Devil's Horn",
    },
  },
  5271: {
    spot: {
      Lat: -25.89005,
      Long: -48.56028333333333,
      spotName: "Direitas de Guaratuba",
    },
  },
  5272: {
    spot: { Lat: 0.29636666666666667, Long: 6.7605, spotName: "Antenas" },
  },
  5273: {
    spot: {
      Lat: 35.396233333333335,
      Long: -3.0056833333333333,
      spotName: "Traffic Point",
    },
  },
  5274: {
    spot: {
      Lat: 53.48886666666667,
      Long: -6.097383333333333,
      spotName: "tower bay",
    },
  },
  5275: {
    spot: { Lat: 52.60805, Long: -4.106833333333333, spotName: "Jeffs left" },
  },
  5276: {
    spot: { Lat: 25.4011, Long: -76.54175, spotName: "Holiday Beach" },
  },
  5277: {
    spot: {
      Lat: 41.384283333333336,
      Long: -124.0717,
      spotName: "Gold Bluffs Beach",
    },
  },
  5278: {
    spot: {
      Lat: 49.46626666666667,
      Long: 11.026016666666667,
      spotName: "Pegnitz, Fuchsloch",
    },
  },
  5279: { spot: { Lat: 16.1171, Long: 108.1337, spotName: "Nam O" } },
  5280: {
    spot: {
      Lat: 36.77251666666667,
      Long: 31.39085,
      spotName: "Baby Point Side",
    },
  },
  5281: { spot: { Lat: -12.97645, Long: -38.4234, spotName: "Corsário" } },
  5282: {
    spot: {
      Lat: 40.23096666666667,
      Long: -73.99598333333333,
      spotName: "Loch Arbor",
    },
  },
  5283: {
    spot: {
      Lat: 2.9334166666666666,
      Long: 9.904833333333332,
      spotName: "Kribi",
    },
  },
  5284: {
    spot: {
      Lat: 46.842866666666666,
      Long: -91.99286666666667,
      spotName: "Brighton Beach",
    },
  },
  5285: {
    spot: {
      Lat: 12.1897,
      Long: -86.80298333333333,
      spotName: "Puerto Sandino",
    },
  },
  5286: {
    spot: {
      Lat: -38.40148333333333,
      Long: 145.11561666666665,
      spotName: "Hellicars Hill, Merricks Beach",
    },
  },
  5287: {
    spot: {
      Lat: 55.30701666666667,
      Long: 20.976666666666667,
      spotName: "Nida",
    },
  },
  5288: {
    spot: { Lat: -26.76575, Long: -48.64015, spotName: "Quilombo (reef)" },
  },
  5289: {
    spot: {
      Lat: -27.02505,
      Long: -48.57406666666667,
      spotName: "Estaleiro (reef)",
    },
  },
  5290: {
    spot: {
      Lat: -31.536416666666668,
      Long: 18.073483333333332,
      spotName: "Boskraal Strand",
    },
  },
  5291: {
    spot: {
      Lat: 11.262683333333333,
      Long: -73.77365,
      spotName: "Rio Buritaca",
    },
  },
  5292: {
    spot: { Lat: 12.17305, Long: -86.76578333333333, spotName: "Pipes" },
  },
  5293: {
    spot: { Lat: 54.283516666666664, Long: 12.3105, spotName: "Neuhaus" },
  },
  5294: {
    spot: {
      Lat: 12.155633333333334,
      Long: -86.75746666666667,
      spotName: "No Names",
    },
  },
  5295: {
    spot: {
      Lat: 12.191966666666668,
      Long: -86.77286666666667,
      spotName: "Freight Trains",
    },
  },
  5296: {
    spot: {
      Lat: 39.157183333333336,
      Long: -74.6859,
      spotName: "36th Street",
    },
  },
  5297: {
    spot: {
      Lat: -29.059466666666665,
      Long: 167.95576666666668,
      spotName: "Kingston",
    },
  },
  5298: {
    spot: {
      Lat: 38.03078333333333,
      Long: -122.93426666666667,
      spotName: "Drakes Bay",
    },
  },
  5299: {
    spot: {
      Lat: 50.00501666666667,
      Long: -5.1615,
      spotName: "Kennack Sands",
    },
  },
  5300: {
    spot: {
      Lat: -17.562366666666666,
      Long: -149.32466666666667,
      spotName: "mahaena",
    },
  },
  5301: {
    spot: {
      Lat: 28.111883333333335,
      Long: -14.389883333333334,
      spotName: "Cofete beach",
    },
  },
  5302: {
    spot: {
      Lat: 22.075616666666665,
      Long: -159.76945,
      spotName: "Polihale State Park",
    },
  },
  5303: {
    spot: {
      Lat: 51.590833333333336,
      Long: -8.8016,
      spotName: "Donomore Reefs",
    },
  },
  5304: {
    spot: { Lat: -26.767, Long: -48.63941666666667, spotName: "Quilombo" },
  },
  5305: {
    spot: { Lat: 12.16875, Long: -86.76448333333333, spotName: "Miramar" },
  },
  5306: {
    spot: {
      Lat: 17.919516666666667,
      Long: -62.85958333333333,
      spotName: "Flamand",
    },
  },
  5307: {
    spot: {
      Lat: 40.752583333333334,
      Long: -124.2401,
      spotName: "South Jetty - Table Bluff",
    },
  },
  5308: {
    spot: { Lat: 7.01365, Long: 158.20716666666667, spotName: "P-Pass" },
  },
  5309: { spot: { Lat: -41.1138, Long: 173.50785, spotName: "Magnets" } },
  5310: {
    spot: {
      Lat: 37.030316666666664,
      Long: 8.908616666666667,
      spotName: "Zouira",
    },
  },
  5311: {
    spot: {
      Lat: 54.171283333333335,
      Long: -133.0343,
      spotName: "Waldo's Cove",
    },
  },
  5312: {
    spot: {
      Lat: -32.070033333333335,
      Long: 152.54621666666668,
      spotName: "Black Head point",
    },
  },
  5313: {
    spot: {
      Lat: 6.963566666666667,
      Long: -11.574783333333333,
      spotName: "Sulima",
    },
  },
  5314: {
    spot: {
      Lat: -35.177566666666664,
      Long: 150.6905,
      spotName: "Whiting bommie",
    },
  },
  5315: {
    spot: { Lat: 11.912683333333334, Long: -86.62, spotName: "Cherrio's" },
  },
  5316: { spot: { Lat: -26.6394, Long: -48.6825, spotName: "Canoas" } },
  5317: {
    spot: { Lat: -34.05345, Long: 151.15645, spotName: "Cronulla Pools" },
  },
  5318: {
    spot: {
      Lat: -35.160833333333336,
      Long: 138.46858333333333,
      spotName: "Southport",
    },
  },
  5319: {
    spot: {
      Lat: -33.601933333333335,
      Long: 115.10761666666667,
      spotName: "Copeys left",
    },
  },
  5320: {
    spot: { Lat: 20.2295, Long: -155.75248333333334, spotName: "Kapaniah" },
  },
  5321: {
    spot: {
      Lat: 37.89775,
      Long: -122.65291666666667,
      spotName: "Stinson Beach",
    },
  },
  5322: {
    spot: { Lat: -33.63325, Long: 115.02763333333333, spotName: "Isolators" },
  },
  5323: {
    spot: { Lat: 11.933983333333334, Long: -86.6208, spotName: "Asunchillo" },
  },
  5324: {
    spot: { Lat: 17.90835, Long: -62.825316666666666, spotName: "Lorient" },
  },
  5325: {
    spot: {
      Lat: 20.611383333333333,
      Long: -156.44021666666666,
      spotName: "Dumps",
    },
  },
  5326: {
    spot: {
      Lat: 30.37836666666667,
      Long: -86.86176666666667,
      spotName: "Navarre Beach Pier",
    },
  },
  5327: {
    spot: {
      Lat: 28.231383333333333,
      Long: -16.842466666666667,
      spotName: "Las Conchas",
    },
  },
  5328: {
    spot: {
      Lat: -36.934533333333334,
      Long: -56.71005,
      spotName: "Punta Medanos",
    },
  },
  5329: {
    spot: {
      Lat: 23.541883333333335,
      Long: 121.50998333333334,
      spotName: "Mimi's Reef",
    },
  },
  5330: {
    spot: { Lat: 36.95395, Long: 136.76121666666666, spotName: "Shibagaki" },
  },
  5331: {
    spot: {
      Lat: -31.525116666666666,
      Long: 159.0756,
      spotName: "cheese graters",
    },
  },
  5332: {
    spot: {
      Lat: 8.641733333333333,
      Long: 98.24583333333334,
      spotName: "Nang Thong Beach",
    },
  },
  5333: {
    spot: { Lat: -4.309383333333333, Long: 55.6835, spotName: "Anse Kerlan" },
  },
  5334: {
    spot: { Lat: -8.3862, Long: 113.47306666666667, spotName: "Puger" },
  },
  5335: {
    spot: {
      Lat: 48.127833333333335,
      Long: -124.71448333333333,
      spotName: "Sand Point",
    },
  },
  5336: {
    spot: { Lat: 19.7352, Long: -155.02798333333334, spotName: "4 Miles" },
  },
  5337: {
    spot: { Lat: 2.55185, Long: 96.08753333333334, spotName: "Tou Tou's" },
  },
  5338: {
    spot: {
      Lat: 36.879666666666665,
      Long: -2.0033333333333334,
      spotName: "playa las Negras",
    },
  },
  5339: {
    spot: {
      Lat: -16.693466666666666,
      Long: 145.60228333333333,
      spotName: "rocky point",
    },
  },
  5340: {
    spot: {
      Lat: 51.22561666666667,
      Long: -3.8957333333333333,
      spotName: "Woody Bay",
    },
  },
  5341: {
    spot: {
      Lat: 34.4279,
      Long: 136.92028333333334,
      spotName: "Under the Sunrepo ",
    },
  },
  5342: {
    spot: {
      Lat: 16.153683333333333,
      Long: -95.23756666666667,
      spotName: "Salina Cruze -Jetty",
    },
  },
  5343: {
    spot: {
      Lat: -37.971466666666664,
      Long: -57.54116666666667,
      spotName: "Constitucion",
    },
  },
  5344: {
    spot: {
      Lat: 18.336933333333334,
      Long: -65.31973333333333,
      spotName: "The Reef",
    },
  },
  5345: {
    spot: {
      Lat: 38.641333333333336,
      Long: 0.05171666666666667,
      spotName: "Playa del Bol",
    },
  },
  5346: {
    spot: {
      Lat: -33.530233333333335,
      Long: 151.36705,
      spotName: "Killcare Triangle",
    },
  },
  5347: {
    spot: {
      Lat: 38.603116666666665,
      Long: -0.04058333333333333,
      spotName: "Rio Algar",
    },
  },
  5348: {
    spot: {
      Lat: -8.557766666666666,
      Long: -172.46235,
      spotName: "utua mamao",
    },
  },
  5349: {
    spot: { Lat: 28.7505, Long: -13.932266666666667, spotName: "Caletta" },
  },
  5350: {
    spot: {
      Lat: 6.921783333333334,
      Long: 134.12358333333333,
      spotName: "Santa Maria Anguar",
    },
  },
  5351: {
    spot: {
      Lat: 33.64935,
      Long: 135.95396666666667,
      spotName: "Motel Shita",
    },
  },
  5352: {
    spot: {
      Lat: 44.72176666666667,
      Long: -1.2507666666666666,
      spotName: "Le Bayle Nord",
    },
  },
  5353: {
    spot: {
      Lat: 44.694383333333334,
      Long: -1.2542166666666668,
      spotName: "La vache morte",
    },
  },
  5354: {
    spot: {
      Lat: 34.71476666666667,
      Long: 138.21741666666668,
      spotName: "Katahama",
    },
  },
  5355: {
    spot: {
      Lat: 38.53545,
      Long: -0.13498333333333334,
      spotName: "Puerto Benidorm",
    },
  },
  5356: {
    spot: { Lat: -22.975816666666667, Long: -43.0405, spotName: "Shock" },
  },
  5357: {
    spot: {
      Lat: 28.747983333333334,
      Long: -13.872233333333334,
      spotName: "Gravejard",
    },
  },
  5358: {
    spot: { Lat: -32.0403, Long: 29.1083, spotName: "Hole in the Wall" },
  },
  5359: {
    spot: {
      Lat: -32.240883333333336,
      Long: -71.50995,
      spotName: "La Marmola",
    },
  },
  5360: {
    spot: { Lat: -32.344883333333335, Long: -71.45385, spotName: "Pichicuy" },
  },
  5361: {
    spot: {
      Lat: 40.2973,
      Long: -73.97946666666667,
      spotName: "Pavilion Ave, Long Branch",
    },
  },
  5362: { spot: { Lat: -6.1916, Long: 105.84195, spotName: "Jambu Beach" } },
  5363: {
    spot: {
      Lat: 43.56471666666667,
      Long: 13.58975,
      spotName: "Portonovo ( Ancona ) (la nave)",
    },
  },
  5364: {
    spot: {
      Lat: -8.312233333333333,
      Long: -34.94618333333333,
      spotName: "Enseada dos Corais",
    },
  },
  5365: {
    spot: { Lat: 41.670883333333336, Long: 12.39565, spotName: "Dar Zagaja" },
  },
  5366: {
    spot: {
      Lat: 40.178016666666664,
      Long: -8.903816666666666,
      spotName: "cabo mondego",
    },
  },
  5367: {
    spot: {
      Lat: 51.54463333333333,
      Long: -9.08535,
      spotName: "Do More reefs",
    },
  },
  5368: {
    spot: {
      Lat: -34.58618333333333,
      Long: 19.343516666666666,
      spotName: "Stinky Pits!",
    },
  },
  5369: {
    spot: {
      Lat: 31.144033333333333,
      Long: -81.37,
      spotName: "St. Simons Island, GA ",
    },
  },
  5370: {
    spot: { Lat: 12.16185, Long: 109.20513333333334, spotName: "Dark Reef" },
  },
  5371: {
    spot: {
      Lat: 42.67713333333333,
      Long: -9.033166666666666,
      spotName: "Queiruga",
    },
  },
  5372: {
    spot: {
      Lat: 8.674316666666666,
      Long: 98.24086666666666,
      spotName: "Bang Niang Rivermouth",
    },
  },
  5373: { spot: { Lat: -35.2467, Long: 150.54265, spotName: "3 way" } },
  5374: { spot: { Lat: -32.5978, Long: -71.4392, spotName: "Los Pinos" } },
  5375: {
    spot: {
      Lat: 45.40975,
      Long: -75.75686666666667,
      spotName: "Bates Island, Ottawa River",
    },
  },
  5376: {
    spot: {
      Lat: 43.53248333333333,
      Long: 13.621066666666668,
      spotName: "Il Sasso (Sassi Neri)",
    },
  },
  5377: {
    spot: {
      Lat: 32.537683333333334,
      Long: 34.90056666666667,
      spotName: "jeser a zarka",
    },
  },
  5378: {
    spot: {
      Lat: -35.555816666666665,
      Long: 138.62606666666667,
      spotName: "The Pines",
    },
  },
  5379: {
    spot: {
      Lat: -37.071416666666664,
      Long: -73.14941666666667,
      spotName: "Playa Blanca",
    },
  },
  5380: {
    spot: {
      Lat: 35.608866666666664,
      Long: -121.14548333333333,
      spotName: "Boners",
    },
  },
  5381: {
    spot: {
      Lat: 44.559083333333334,
      Long: -1.2442666666666666,
      spotName: "Le Petit Nice",
    },
  },
  5382: {
    spot: { Lat: 28.673266666666667, Long: -13.83325, spotName: "moro " },
  },
  5383: {
    spot: {
      Lat: -26.668333333333333,
      Long: 153.10816666666668,
      spotName: "Murray's Left",
    },
  },
  5384: {
    spot: {
      Lat: -12.443616666666667,
      Long: -76.77503333333334,
      spotName: "La Tiza",
    },
  },
  5385: {
    spot: {
      Lat: 36.73235,
      Long: 34.52311666666667,
      spotName: "embryo point",
    },
  },
  5386: {
    spot: {
      Lat: -46.85616666666667,
      Long: 37.84426666666667,
      spotName: "Ships Cove, Marion Island",
    },
  },
  5387: {
    spot: {
      Lat: 2.582116666666667,
      Long: 103.80621666666667,
      spotName: "Tanjung Resang",
    },
  },
  5388: {
    spot: {
      Lat: 43.396766666666664,
      Long: -1.6641333333333335,
      spotName: "les flots bleus",
    },
  },
  5389: {
    spot: {
      Lat: -33.810383333333334,
      Long: -80.80156666666667,
      spotName: "french point",
    },
  },
  5390: {
    spot: {
      Lat: -26.108966666666667,
      Long: 153.11105,
      spotName: "Red Canyon",
    },
  },
  5391: { spot: { Lat: 42.0502, Long: 8.74715, spotName: "tuccia left" } },
  5392: {
    spot: {
      Lat: -4.760516666666667,
      Long: 55.48408333333333,
      spotName: "Anse Gaulette",
    },
  },
  5393: {
    spot: {
      Lat: 11.9725,
      Long: 79.84528333333333,
      spotName: "near repos beach",
    },
  },
  5394: {
    spot: {
      Lat: 7.63915,
      Long: 99.02833333333334,
      spotName: "Koh Lanta - Klong Dao",
    },
  },
  5395: {
    spot: {
      Lat: 38.51335,
      Long: -0.19916666666666666,
      spotName: "Playa del Torres",
    },
  },
  5396: {
    spot: {
      Lat: -22.88455,
      Long: -41.998066666666666,
      spotName: "Praia Brava - Cabo Frio",
    },
  },
  5397: {
    spot: { Lat: -9.356466666666666, Long: 125.2745, spotName: "digger" },
  },
  5398: { spot: { Lat: -0, Long: -0, spotName: "Aufuga" } },
  5399: {
    spot: {
      Lat: 29.237583333333333,
      Long: -13.534133333333333,
      spotName: "el corral",
    },
  },
  5400: {
    spot: {
      Lat: -6.698766666666667,
      Long: 39.27633333333333,
      spotName: "Jam's Right",
    },
  },
  5401: {
    spot: {
      Lat: 21.28461666666667,
      Long: -157.84955,
      spotName: "Baby Haleiwa's",
    },
  },
  5402: {
    spot: {
      Lat: -35.47886666666667,
      Long: 150.39506666666668,
      spotName: "Meroo Headland Wedge",
    },
  },
  5403: {
    spot: {
      Lat: -4.744633333333333,
      Long: 55.46535,
      spotName: "Anse Soleil",
    },
  },
  5404: {
    spot: { Lat: -38.5087, Long: 145.25766666666667, spotName: "dungeons." },
  },
  5405: {
    spot: {
      Lat: -38.038466666666665,
      Long: -57.517116666666666,
      spotName: "la punta ( puerto)",
    },
  },
  5406: {
    spot: { Lat: -43.727, Long: -176.49145, spotName: "Tuapeka Point" },
  },
  5407: {
    spot: { Lat: 4.74505, Long: -2.08315, spotName: "Cape Three Points" },
  },
  5408: {
    spot: {
      Lat: 41.230016666666664,
      Long: 9.167233333333334,
      spotName: "Santa Reparata",
    },
  },
  5409: {
    spot: {
      Lat: -32.40936666666666,
      Long: 115.74541666666667,
      spotName: "Surf Beach",
    },
  },
  5410: {
    spot: { Lat: 55.167316666666665, Long: -6.7859, spotName: "Castlerock" },
  },
  5411: {
    spot: {
      Lat: 34.103,
      Long: 136.23398333333333,
      spotName: "Tyoushi River Mouth",
    },
  },
  5412: { spot: { Lat: 25.28475, Long: 121.51695, spotName: "Paisawan" } },
  5413: { spot: { Lat: 34.0118, Long: 35.6424, spotName: "Casino" } },
  5414: {
    spot: {
      Lat: -8.483216666666667,
      Long: 116.03491666666666,
      spotName: "Puri's point",
    },
  },
  5415: {
    spot: {
      Lat: -6.231283333333334,
      Long: 105.82988333333333,
      spotName: "Pasauran Muara ",
    },
  },
  5416: {
    spot: {
      Lat: -33.81966666666667,
      Long: 18.473516666666665,
      spotName: "Selis",
    },
  },
  5417: {
    spot: { Lat: -4.350866666666667, Long: 55.8482, spotName: "Anse Banane" },
  },
  5418: {
    spot: {
      Lat: 28.5697,
      Long: -16.204916666666666,
      spotName: "El Roque Taganana",
    },
  },
  5419: {
    spot: {
      Lat: -38.21236666666667,
      Long: 145.0443,
      spotName: "yellow buoys",
    },
  },
  5420: {
    spot: {
      Lat: 37.57788333333333,
      Long: -0.8461166666666667,
      spotName: "Portman",
    },
  },
  5421: {
    spot: {
      Lat: -4.337666666666666,
      Long: 55.83385,
      spotName: "Anse Patates",
    },
  },
  5422: {
    spot: {
      Lat: -43.97278333333333,
      Long: 168.58983333333333,
      spotName: "Riviera's",
    },
  },
  5423: {
    spot: {
      Lat: 43.55591666666667,
      Long: -6.721916666666667,
      spotName: "Navia",
    },
  },
  5424: {
    spot: {
      Lat: -23.614283333333333,
      Long: -70.39205,
      spotName: "los estanques",
    },
  },
  5425: { spot: { Lat: -20.4466, Long: 57.72315, spotName: "fausse passe" } },
  5426: {
    spot: { Lat: -33.90005, Long: 136.66168333333334, spotName: "Red Banks" },
  },
  5427: {
    spot: {
      Lat: -23.056,
      Long: -44.366816666666665,
      spotName: "Laje do Dramin",
    },
  },
  5428: {
    spot: {
      Lat: -4.924816666666667,
      Long: 11.931883333333333,
      spotName: "Djeno rocher",
    },
  },
  5429: {
    spot: { Lat: 41.83925, Long: 3.09635, spotName: "TORRE VALENTINA" },
  },
  5430: {
    spot: { Lat: -35.49296666666667, Long: 150.3945, spotName: "Nuggin" },
  },
  5431: {
    spot: {
      Lat: 53.30955,
      Long: 5.068816666666667,
      spotName: "Vlieland El Punta",
    },
  },
  5432: {
    spot: {
      Lat: 0.035883333333333337,
      Long: 6.536416666666667,
      spotName: "porto alegre",
    },
  },
  5433: {
    spot: {
      Lat: 36.27085,
      Long: 120.68756666666667,
      spotName: "Gwen's Mouth",
    },
  },
  5434: {
    spot: {
      Lat: 43.3306,
      Long: 13.7148,
      spotName: "La Lampara, Civitanova Marche",
    },
  },
  5435: {
    spot: {
      Lat: 20.9147,
      Long: -156.39303333333334,
      spotName: "Baldwin beach",
    },
  },
  5436: {
    spot: {
      Lat: 17.917516666666668,
      Long: -62.80076666666667,
      spotName: "La Tortue",
    },
  },
  5437: {
    spot: {
      Lat: 38.18423333333333,
      Long: 13.348383333333333,
      spotName: "Mondello",
    },
  },
  5438: {
    spot: {
      Lat: 37.602666666666664,
      Long: -0.7294833333333333,
      spotName: "Calblanque",
    },
  },
  5439: {
    spot: {
      Lat: 34.212516666666666,
      Long: 35.6486,
      spotName: "pierre and friends",
    },
  },
  5440: {
    spot: {
      Lat: 15.373216666666666,
      Long: -61.25123333333333,
      spotName: "philipp's ",
    },
  },
  5441: {
    spot: {
      Lat: 29.771166666666666,
      Long: -81.24973333333334,
      spotName: "Crescent Beach",
    },
  },
  5442: {
    spot: {
      Lat: 53.30708333333333,
      Long: -135.65986666666666,
      spotName: "Bowie Seamount",
    },
  },
  5443: {
    spot: {
      Lat: 37.06543333333333,
      Long: -8.810116666666667,
      spotName: "Boca do rio",
    },
  },
  5444: {
    spot: { Lat: 33.713883333333335, Long: -118.31455, spotName: "Pickles" },
  },
  5445: {
    spot: {
      Lat: -34.371383333333334,
      Long: 18.897433333333332,
      spotName: "penguins",
    },
  },
  5446: {
    spot: {
      Lat: 33.16291666666667,
      Long: -8.630016666666666,
      spotName: "DriKa",
    },
  },
  5447: {
    spot: {
      Lat: -23.981333333333332,
      Long: -46.37376666666667,
      spotName: "porta do sol",
    },
  },
  5448: {
    spot: {
      Lat: 44.125366666666665,
      Long: 14.875666666666667,
      spotName: "sakarun",
    },
  },
  5449: {
    spot: {
      Lat: 38.523916666666665,
      Long: -0.16676666666666667,
      spotName: "Cala Finestrat",
    },
  },
  5450: {
    spot: {
      Lat: -34.06088333333334,
      Long: 151.15755,
      spotName: "Harvey's Little Point",
    },
  },
  5451: {
    spot: {
      Lat: 28.237366666666667,
      Long: -14.2139,
      spotName: "campo de futbol",
    },
  },
  5452: {
    spot: { Lat: 17.9531, Long: -66.8299, spotName: "Sal del Diablo" },
  },
  5453: {
    spot: { Lat: 15.104866666666666, Long: 145.7389, spotName: "Obyan" },
  },
  5454: { spot: { Lat: 54.40195, Long: 11.3114, spotName: "staberhuk" } },
  5455: {
    spot: {
      Lat: 54.52355,
      Long: 11.044966666666667,
      spotName: "Westermarkelsdorf",
    },
  },
  5456: {
    spot: { Lat: 38.9761, Long: -9.422316666666667, spotName: "Matadouro" },
  },
  5457: {
    spot: {
      Lat: -34.35935,
      Long: 18.926183333333334,
      spotName: "Waterfalls",
    },
  },
  5458: {
    spot: { Lat: 15.1487, Long: 145.69948333333335, spotName: "Sugar Dock" },
  },
  5459: {
    spot: {
      Lat: 33.98201666666667,
      Long: -119.9835,
      spotName: "Skunk Point",
    },
  },
  5460: {
    spot: { Lat: 21.5093, Long: 59.38385, spotName: "Bandar al Saqlah" },
  },
  5461: {
    spot: {
      Lat: -22.9851,
      Long: -43.18553333333333,
      spotName: "Forte de Copacabana",
    },
  },
  5462: {
    spot: {
      Lat: -30.33813333333333,
      Long: 114.98303333333334,
      spotName: "Escape Island Reef",
    },
  },
  5463: {
    spot: { Lat: 6.9054, Long: 81.84498333333333, spotName: "Whiskey point" },
  },
  5464: {
    spot: {
      Lat: 13.144833333333333,
      Long: -16.776666666666667,
      spotName: "secret bay ",
    },
  },
  5465: {
    spot: { Lat: 14.5454, Long: 74.31838333333333, spotName: "Gokarna" },
  },
  5466: {
    spot: {
      Lat: 49.791383333333336,
      Long: -124.4661,
      spotName: "Silver Foxes",
    },
  },
  5467: {
    spot: {
      Lat: 43.50633333333333,
      Long: 39.86858333333333,
      spotName: "Khosta-Rica",
    },
  },
  5468: {
    spot: {
      Lat: 17.762683333333335,
      Long: -64.83398333333334,
      spotName: "carambola",
    },
  },
  5469: {
    spot: {
      Lat: -4.486483333333333,
      Long: 145.44773333333333,
      spotName: "Tupira Mira",
    },
  },
  5470: {
    spot: { Lat: -32.4001, Long: 115.74165, spotName: "Secret Harbour" },
  },
  5471: {
    spot: {
      Lat: 7.491016666666667,
      Long: 134.64156666666668,
      spotName: "melekeok",
    },
  },
  5472: {
    spot: {
      Lat: 18.442483333333332,
      Long: -64.65145,
      spotName: "Brewers Bay",
    },
  },
  5473: {
    spot: { Lat: -7.3972, Long: -79.57256666666666, spotName: "Puerrup" },
  },
  5474: {
    spot: { Lat: -21.04875, Long: 55.21828333333333, spotName: "Cachera" },
  },
  5475: {
    spot: {
      Lat: 51.56795,
      Long: -8.886216666666666,
      spotName: "Langer ville",
    },
  },
  5476: { spot: { Lat: -8.4343, Long: 113.5801, spotName: "Payangan" } },
  5477: {
    spot: { Lat: 0.19355, Long: 6.7029499999999995, spotName: "alfonsita" },
  },
  5478: {
    spot: {
      Lat: 41.51683333333333,
      Long: -82.71988333333333,
      spotName: "Bay Point, Marblehead",
    },
  },
  5479: {
    spot: {
      Lat: 35.961333333333336,
      Long: 120.24741666666667,
      spotName: "Gloden beach",
    },
  },
  5480: {
    spot: { Lat: -38.70536666666667, Long: 143.76455, spotName: "Smythes" },
  },
  5481: {
    spot: {
      Lat: -22.609516666666668,
      Long: -41.997766666666664,
      spotName: "praia de unamar",
    },
  },
  5482: {
    spot: { Lat: -6.4852, Long: 39.497483333333335, spotName: "Wommewek" },
  },
  5483: {
    spot: { Lat: 5.9615, Long: 80.39651666666667, spotName: "Plantations" },
  },
  5484: {
    spot: {
      Lat: 42.16543333333333,
      Long: 27.858066666666666,
      spotName: "Melnitza",
    },
  },
  5485: {
    spot: { Lat: 41.1344, Long: 1.3844333333333334, spotName: "altafulla" },
  },
  5486: {
    spot: {
      Lat: -33.53131666666667,
      Long: 151.37315,
      spotName: "Putty beach point",
    },
  },
  5487: {
    spot: {
      Lat: 49.54575,
      Long: -1.8760333333333334,
      spotName: "Becquerel Point",
    },
  },
  5488: {
    spot: {
      Lat: -19.740333333333332,
      Long: -175.07675,
      spotName: "Ha'apia Group",
    },
  },
  5489: {
    spot: { Lat: 29.88205, Long: 122.41453333333334, spotName: "Dong Sha" },
  },
  5490: {
    spot: { Lat: 17.9527, Long: -66.82828333333333, spotName: "La Santa" },
  },
  5491: {
    spot: { Lat: 40.75788333333333, Long: 13.87685, spotName: "San Montano" },
  },
  5492: {
    spot: {
      Lat: 17.92235,
      Long: -62.86418333333334,
      spotName: "Petite Anse",
    },
  },
  5493: {
    spot: {
      Lat: 40.671883333333334,
      Long: 14.772883333333333,
      spotName: "Salerno Rivermouth",
    },
  },
  5494: {
    spot: {
      Lat: 14.769283333333334,
      Long: -17.476366666666667,
      spotName: "Yoff Ile gauche",
    },
  },
  5495: {
    spot: {
      Lat: -34.995066666666666,
      Long: 150.79211666666666,
      spotName: "Hammerhead",
    },
  },
  5496: {
    spot: {
      Lat: 6.852716666666667,
      Long: 126.34706666666666,
      spotName: "Bobon",
    },
  },
  5497: {
    spot: {
      Lat: 18.710333333333335,
      Long: -68.43643333333333,
      spotName: "Coco nuts",
    },
  },
  5498: {
    spot: {
      Lat: 43.51198333333333,
      Long: -1.5354333333333332,
      spotName: "Anglet - La Madrague",
    },
  },
  5499: {
    spot: {
      Lat: 42.25881666666667,
      Long: -81.90578333333333,
      spotName: "Erieau",
    },
  },
  5500: {
    spot: {
      Lat: 17.9114,
      Long: -62.84323333333333,
      spotName: "Anse des Cayes",
    },
  },
  5501: {
    spot: {
      Lat: 41.78138333333333,
      Long: 12.224166666666667,
      spotName: "Fiumicino Nord",
    },
  },
  5502: {
    spot: { Lat: -6.068866666666667, Long: -35.0972, spotName: "Tabatinga" },
  },
  5503: {
    spot: {
      Lat: -2.6170666666666667,
      Long: 140.73745,
      spotName: "Black Sands",
    },
  },
  5504: {
    spot: {
      Lat: -34.12303333333333,
      Long: 18.454933333333333,
      spotName: "pitzmah (clazo's ledge)",
    },
  },
  5505: {
    spot: {
      Lat: 40.957766666666664,
      Long: -8.656716666666666,
      spotName: "Esmoriz praia da barra e praia velha",
    },
  },
  5506: {
    spot: {
      Lat: -37.86848333333333,
      Long: 144.89,
      spotName: "williamstown beach",
    },
  },
  5507: {
    spot: { Lat: 18.44995, Long: -64.70843333333333, spotName: "Sandy Spit" },
  },
  5508: {
    spot: { Lat: 34.581916666666665, Long: 32.93805, spotName: "Yellows" },
  },
  5509: {
    spot: {
      Lat: 51.910183333333336,
      Long: -176.56115,
      spotName: "Zeto Point - Adak",
    },
  },
  5510: {
    spot: {
      Lat: -32.951766666666664,
      Long: 151.75736666666666,
      spotName: "Bombie",
    },
  },
  5511: {
    spot: {
      Lat: 16.922316666666667,
      Long: -25.313566666666667,
      spotName: "curralinho",
    },
  },
  5512: {
    spot: {
      Lat: 46.35135,
      Long: -124.06791666666666,
      spotName: "long beach",
    },
  },
  5513: {
    spot: {
      Lat: 5.151466666666667,
      Long: -3.4291,
      spotName: "Assouinde Beach",
    },
  },
  5514: {
    spot: { Lat: 50.364216666666664, Long: -4.3875, spotName: "Seaton" },
  },
  5515: {
    spot: {
      Lat: -19.1102,
      Long: 146.86938333333333,
      spotName: "Balding Bay",
    },
  },
  5516: {
    spot: { Lat: 16.743633333333335, Long: -99.75865, spotName: "La Bonfil" },
  },
  5517: {
    spot: { Lat: 31.6043, Long: 131.41923333333332, spotName: "Shoojiun" },
  },
  5518: { spot: { Lat: 31.3604, Long: 131.33185, spotName: "Cape Toi" } },
  5519: {
    spot: { Lat: 30.5291, Long: 130.99235, spotName: "Nakayama - Minato" },
  },
  5520: {
    spot: { Lat: 31.4555, Long: 131.18311666666668, spotName: "Nagahama" },
  },
  5521: {
    spot: {
      Lat: 30.682483333333334,
      Long: 131.06303333333332,
      spotName: "Azako",
    },
  },
  5522: {
    spot: { Lat: 30.51465, Long: 130.97995, spotName: "Nakayama - Takeyano" },
  },
  5523: {
    spot: {
      Lat: 35.6814,
      Long: -75.48026666666667,
      spotName: "New New Inlet",
    },
  },
  5524: {
    spot: {
      Lat: 15.587683333333333,
      Long: -61.32666666666667,
      spotName: "L'anse Tortue",
    },
  },
  5525: {
    spot: {
      Lat: -40.91283333333333,
      Long: 144.65558333333334,
      spotName: "green point",
    },
  },
  5526: {
    spot: {
      Lat: -22.938316666666665,
      Long: 14.41715,
      spotName: "Skeleton Bay",
    },
  },
  5527: {
    spot: { Lat: -22.922033333333335, Long: 35.6012, spotName: "pomene" },
  },
  5528: { spot: { Lat: 13.4191, Long: 144.7908, spotName: "Ylig" } },
  5529: {
    spot: {
      Lat: 17.920483333333333,
      Long: -62.874716666666664,
      spotName: "La passe de Colombier ",
    },
  },
  5530: {
    spot: {
      Lat: 31.636566666666667,
      Long: 131.45913333333334,
      spotName: "Chokusen",
    },
  },
  5531: {
    spot: {
      Lat: -20.384266666666665,
      Long: -40.31008333333333,
      spotName: "Barra Sol",
    },
  },
  5532: {
    spot: { Lat: 30.767716666666665, Long: 131.07275, spotName: "Iseki" },
  },
  5533: {
    spot: { Lat: 30.6883, Long: 131.06491666666668, spotName: "Kazamoto" },
  },
  5534: {
    spot: {
      Lat: -26.69135,
      Long: -48.68416666666667,
      spotName: "barra de Itajuba",
    },
  },
  5535: {
    spot: {
      Lat: 36.99296666666667,
      Long: 21.648366666666668,
      spotName: "Bouka",
    },
  },
  5536: {
    spot: { Lat: -29.058666666666667, Long: 167.9459, spotName: "Bumboras" },
  },
  5537: {
    spot: {
      Lat: 30.372633333333333,
      Long: 130.95596666666665,
      spotName: "Hotel Mae",
    },
  },
  5538: {
    spot: {
      Lat: -37.85078333333333,
      Long: 144.95003333333332,
      spotName: "Kerferd Road Pier",
    },
  },
  5539: {
    spot: {
      Lat: -34.78581666666667,
      Long: 138.47771666666668,
      spotName: "North Haven",
    },
  },
  5540: {
    spot: {
      Lat: -39.45576666666667,
      Long: 173.84418333333332,
      spotName: "op",
    },
  },
  5541: {
    spot: {
      Lat: 42.691516666666665,
      Long: 133.08683333333335,
      spotName: "Triozerye",
    },
  },
  5542: {
    spot: {
      Lat: -22.93405,
      Long: 14.423333333333334,
      spotName: "Donkey Bay",
    },
  },
  5543: {
    spot: {
      Lat: -14.290883333333333,
      Long: 125.21165,
      spotName: "West Montalivet Island",
    },
  },
  5544: {
    spot: {
      Lat: -17.484766666666665,
      Long: 122.14435,
      spotName: "James Price Point",
    },
  },
  5545: {
    spot: {
      Lat: -43.00168333333333,
      Long: 147.3258,
      spotName: "Blackmans Bay",
    },
  },
  5546: {
    spot: {
      Lat: -20.496283333333334,
      Long: 57.368566666666666,
      spotName: "Maconde",
    },
  },
  5547: {
    spot: {
      Lat: 34.88098333333333,
      Long: -120.64498333333333,
      spotName: "Silos",
    },
  },
  5548: {
    spot: {
      Lat: -31.43075,
      Long: 152.92491666666666,
      spotName: "Oxleys Reef",
    },
  },
  5549: {
    spot: {
      Lat: 47.509616666666666,
      Long: 9.752516666666667,
      spotName: "Bregenz Seebad",
    },
  },
  5550: {
    spot: {
      Lat: 4.0168333333333335,
      Long: 9.102866666666667,
      spotName: "Lonely Left",
    },
  },
  5551: {
    spot: {
      Lat: 31.405733333333334,
      Long: 131.23323333333335,
      spotName: "Nagatazaki",
    },
  },
  5552: {
    spot: {
      Lat: 31.453583333333334,
      Long: 131.17908333333332,
      spotName: "Nadahama",
    },
  },
  5553: {
    spot: { Lat: 8.6229, Long: -79.03843333333333, spotName: "Lajas" },
  },
  5554: {
    spot: {
      Lat: -31.986533333333334,
      Long: 115.51085,
      spotName: "North point",
    },
  },
  5555: {
    spot: {
      Lat: -34.41996666666667,
      Long: 150.90806666666666,
      spotName: "Lassos",
    },
  },
  5556: {
    spot: {
      Lat: 10.948233333333333,
      Long: -68.28455,
      spotName: "Playa Los Cocos Chichiriviche",
    },
  },
  5557: {
    spot: {
      Lat: -33.64888333333333,
      Long: 115.02145,
      spotName: "Palastines",
    },
  },
  5558: {
    spot: {
      Lat: -38.430366666666664,
      Long: 144.17276666666666,
      spotName: "Melba Parade",
    },
  },
  5559: {
    spot: {
      Lat: -12.378066666666667,
      Long: 130.84656666666666,
      spotName: "Nightcliff beach",
    },
  },
  5560: {
    spot: {
      Lat: 9.30015,
      Long: 167.26311666666666,
      spotName: "kwajalein atoll",
    },
  },
  5561: {
    spot: {
      Lat: -42.999316666666665,
      Long: 147.32898333333333,
      spotName: "The Blowhole",
    },
  },
  5562: {
    spot: {
      Lat: 35.295316666666665,
      Long: -3.067633333333333,
      spotName: "Playa Larga Tardi",
    },
  },
  5563: {
    spot: { Lat: -20.37905, Long: -40.30713333333333, spotName: "Secret" },
  },
  5564: {
    spot: {
      Lat: 23.23645,
      Long: 121.41626666666667,
      spotName: "Wu Shih Pi Canyon",
    },
  },
  5565: {
    spot: {
      Lat: 58.300716666666666,
      Long: 11.284583333333334,
      spotName: "Big Farmers break",
    },
  },
  5566: {
    spot: { Lat: 30.736216666666667, Long: 131.07435, spotName: "Chinbotsu" },
  },
  5567: {
    spot: { Lat: 32.0499, Long: 131.51141666666666, spotName: "Hitotsuse" },
  },
  5568: {
    spot: {
      Lat: 5.050066666666667,
      Long: -2.89945,
      spotName: "Sunset Point",
    },
  },
  5569: {
    spot: { Lat: 40.061233333333334, Long: 4.0758, spotName: "es secret" },
  },
  5570: {
    spot: { Lat: 16.917, Long: -100.0109, spotName: "Barra de coyuca" },
  },
  5571: {
    spot: {
      Lat: 46.41458333333333,
      Long: -1.6289666666666667,
      spotName: "La Mine",
    },
  },
  5572: {
    spot: {
      Lat: -14.307066666666667,
      Long: -170.69151666666667,
      spotName: "CoarlHead",
    },
  },
  5573: {
    spot: {
      Lat: 20.867216666666668,
      Long: -156.67796666666666,
      spotName: "Boneyard",
    },
  },
  5574: {
    spot: {
      Lat: -35.4105,
      Long: 150.44051666666667,
      spotName: "Wairo point",
    },
  },
  5575: {
    spot: {
      Lat: -33.892633333333336,
      Long: 151.28186666666667,
      spotName: "North Bondi ",
    },
  },
  5576: {
    spot: {
      Lat: 26.15055,
      Long: 127.88656666666667,
      spotName: "Kudaka Left",
    },
  },
  5577: {
    spot: {
      Lat: 36.94858333333333,
      Long: -122.06101666666666,
      spotName: "Natural Bridges",
    },
  },
  5578: { spot: { Lat: -38.37995, Long: 142.2455, spotName: "Port Fairy" } },
  5579: {
    spot: {
      Lat: 11.875966666666667,
      Long: 75.34736666666667,
      spotName: "Kannur",
    },
  },
  5580: {
    spot: {
      Lat: 30.647583333333333,
      Long: 131.05436666666665,
      spotName: "Rock",
    },
  },
  5581: {
    spot: {
      Lat: 51.87755,
      Long: -176.76178333333334,
      spotName: "White Alice",
    },
  },
  5582: {
    spot: {
      Lat: 38.69898333333333,
      Long: -9.251783333333334,
      spotName: "Cruz Quebrada",
    },
  },
  5583: {
    spot: {
      Lat: -35.318016666666665,
      Long: 150.47425,
      spotName: "Narrawallee reef bar",
    },
  },
  5584: {
    spot: { Lat: -0.95885, Long: -90.98216666666667, spotName: "El Faro" },
  },
  5585: {
    spot: {
      Lat: 25.405133333333332,
      Long: 50.75546666666666,
      spotName: "dukhan beach",
    },
  },
  5586: {
    spot: {
      Lat: 14.869983333333334,
      Long: -61.1166,
      spotName: "BASSE POINTE LE CHAUDRON",
    },
  },
  5587: {
    spot: {
      Lat: 50.41588333333333,
      Long: -5.076716666666667,
      spotName: "Great Western",
    },
  },
  5588: {
    spot: {
      Lat: 30.663516666666666,
      Long: 131.05388333333335,
      spotName: "Kanehama",
    },
  },
  5589: {
    spot: {
      Lat: 30.557333333333332,
      Long: 130.93421666666666,
      spotName: "Nagahama",
    },
  },
  5590: { spot: { Lat: -35.90985, Long: -72.69055, spotName: "La Gotera" } },
  5591: {
    spot: {
      Lat: -5.687216666666666,
      Long: -35.211016666666666,
      spotName: "Genipabu",
    },
  },
  5592: {
    spot: {
      Lat: -33.35901666666667,
      Long: 18.154666666666667,
      spotName: "16 MILE BEACH",
    },
  },
  5593: {
    spot: { Lat: 32.76108333333333, Long: 132.8157, spotName: "Kainokawa" },
  },
  5594: {
    spot: {
      Lat: -20.325666666666667,
      Long: 57.377516666666665,
      spotName: "La Baie",
    },
  },
  5595: {
    spot: {
      Lat: -20.410216666666667,
      Long: 57.76051666666667,
      spotName: "Le Phare",
    },
  },
  5596: { spot: { Lat: 36.9658, Long: 8.71405, spotName: "Meloula" } },
  5597: {
    spot: {
      Lat: 33.13758333333333,
      Long: -117.34023333333333,
      spotName: "Warm Water Jetties",
    },
  },
  5598: { spot: { Lat: -2.61495, Long: 150.73925, spotName: "Go Go's" } },
  5599: { spot: { Lat: 51.13175, Long: -4.24175, spotName: "Boneyards" } },
  5600: {
    spot: {
      Lat: 31.805133333333334,
      Long: 131.46721666666667,
      spotName: "Aoshima beach break",
    },
  },
  5601: {
    spot: {
      Lat: 30.708916666666667,
      Long: 130.97398333333334,
      spotName: "Yokino",
    },
  },
  5602: { spot: { Lat: 42.33645, Long: 27.73265, spotName: "Arkutino" } },
  5603: {
    spot: {
      Lat: 37.045716666666664,
      Long: -8.9793,
      spotName: "Praia do Telheiro",
    },
  },
  5604: {
    spot: { Lat: 39.1728, Long: -9.358466666666667, spotName: "Santa Rita" },
  },
  5605: {
    spot: {
      Lat: 49.74053333333333,
      Long: -119.76136666666666,
      spotName: "Antlers beach",
    },
  },
  5606: {
    spot: {
      Lat: 20.76781666666667,
      Long: -156.98663333333334,
      spotName: "Pali Kaholo",
    },
  },
  5607: {
    spot: { Lat: 33.8573, Long: -78.52906666666667, spotName: "Bird Island" },
  },
  5608: {
    spot: { Lat: -2.61325, Long: 140.86543333333333, spotName: "Skouw" },
  },
  5609: {
    spot: { Lat: -39.41975, Long: 173.8017, spotName: "Arawahata Road " },
  },
  5610: {
    spot: {
      Lat: 44.645466666666664,
      Long: -1.2625833333333334,
      spotName: "Les Dunes",
    },
  },
  5611: {
    spot: { Lat: -23.4675, Long: -45.06205, spotName: "Praia Grande North" },
  },
  5612: { spot: { Lat: 39.36065, Long: -123.8166, spotName: "Caspar" } },
  5613: {
    spot: { Lat: -17.9879, Long: 122.19135, spotName: "Riddell Beach" },
  },
  5614: {
    spot: {
      Lat: 40.721183333333336,
      Long: -72.89743333333334,
      spotName: "BP",
    },
  },
  5615: {
    spot: {
      Lat: 40.18236666666667,
      Long: -8.909016666666666,
      spotName: "Pico da mina",
    },
  },
  5616: {
    spot: {
      Lat: 40.14671666666667,
      Long: -8.87455,
      spotName: "The Edge - Molhe Norte",
    },
  },
  5617: { spot: { Lat: 41.18725, Long: 30.242, spotName: "Mavi Rife" } },
  5618: {
    spot: { Lat: 32.24001666666667, Long: 131.57555, spotName: "Haka Shita" },
  },
  5619: {
    spot: {
      Lat: 59.406216666666666,
      Long: -153.3867,
      spotName: "Mount Augustine Peak",
    },
  },
  5620: {
    spot: { Lat: 30.665516666666665, Long: 130.94335, spotName: "Sumiyoshi" },
  },
  5621: {
    spot: { Lat: 35.363816666666665, Long: -120.8685, spotName: "Widdows" },
  },
  5622: {
    spot: { Lat: -3.4345, Long: 10.639366666666668, spotName: "Mayumba" },
  },
  5623: {
    spot: {
      Lat: -34.485216666666666,
      Long: -58.48035,
      spotName: "playa anchorena",
    },
  },
  5624: {
    spot: {
      Lat: 22.378133333333334,
      Long: -105.6868,
      spotName: "Playa Novillero",
    },
  },
  5625: {
    spot: {
      Lat: 39.311616666666666,
      Long: -74.52275,
      spotName: "TwentySevens",
    },
  },
  5626: {
    spot: {
      Lat: 1.1919333333333333,
      Long: 104.42813333333334,
      spotName: "Bintan Lagoon Resort",
    },
  },
  5627: {
    spot: {
      Lat: 42.11626666666667,
      Long: -8.898666666666667,
      spotName: "depuradora",
    },
  },
  5628: {
    spot: {
      Lat: -1.0734166666666667,
      Long: -48.40318333333333,
      spotName: "marahu",
    },
  },
  5629: {
    spot: {
      Lat: -7.4279166666666665,
      Long: 158.31535,
      spotName: "Lulu,s Left",
    },
  },
  5630: {
    spot: { Lat: 6.034316666666666, Long: 80.80205, spotName: "kingfisher" },
  },
  5631: {
    spot: { Lat: 26.77435, Long: -80.02913333333333, spotName: "Pump House" },
  },
  5632: {
    spot: {
      Lat: 39.714983333333336,
      Long: 19.68115,
      spotName: "Agios Giorgios - Corfu",
    },
  },
  5633: { spot: { Lat: -29.6256, Long: -49.93575, spotName: "Curumim" } },
  5634: {
    spot: {
      Lat: 35.40488333333333,
      Long: -2.953683333333333,
      spotName: "Punta de la Mina",
    },
  },
  5635: {
    spot: {
      Lat: 34.55553333333334,
      Long: -120.60661666666667,
      spotName: "Boat House",
    },
  },
  5636: {
    spot: { Lat: 16.1419, Long: -22.9071, spotName: "Praia do Chaves" },
  },
  5637: { spot: { Lat: -23.7723, Long: -45.92225, spotName: "Guaratuba" } },
  5638: {
    spot: {
      Lat: -19.1125,
      Long: 146.87453333333335,
      spotName: "Radical Bay",
    },
  },
  5639: {
    spot: {
      Lat: 32.32781666666666,
      Long: 131.60886666666667,
      spotName: "Ishinamigawa",
    },
  },
  5640: {
    spot: {
      Lat: 31.554066666666667,
      Long: 131.38163333333333,
      spotName: "Odutsu",
    },
  },
  5641: { spot: { Lat: 32.029783333333334, Long: 131.5, spotName: "KDDI" } },
  5642: {
    spot: {
      Lat: 16.85695,
      Long: 94.38743333333333,
      spotName: "Ox Carts - Ngwe Saung Beach",
    },
  },
  5643: { spot: { Lat: 43.9566, Long: 39.26368333333333, spotName: "Ashe" } },
  5644: {
    spot: {
      Lat: 16.989633333333334,
      Long: 94.45306666666667,
      spotName: "Chaungtha Beach Burma - Brother sister twin pagoda ",
    },
  },
  5645: {
    spot: {
      Lat: -23.2322,
      Long: 35.494483333333335,
      spotName: "Praia Morrungulo",
    },
  },
  5646: {
    spot: {
      Lat: -8.910716666666668,
      Long: 116.29561666666666,
      spotName: "NOVOTEL",
    },
  },
  5647: {
    spot: {
      Lat: 23.14415,
      Long: -109.50631666666666,
      spotName: "La Fortuna",
    },
  },
  5648: {
    spot: { Lat: -32.918, Long: -71.51563333333333, spotName: "Wave Meka" },
  },
  5649: {
    spot: { Lat: -7.5716, Long: 158.78213333333332, spotName: "Kumars" },
  },
  5650: {
    spot: {
      Lat: 47.506766666666664,
      Long: 9.713566666666667,
      spotName: "Bregenz Hechtweg",
    },
  },
  5651: {
    spot: {
      Lat: 41.769733333333335,
      Long: -8.87325,
      spotName: "Praia da Arda",
    },
  },
  5652: {
    spot: { Lat: 34.664, Long: 32.88021666666667, spotName: "Curium Beach" },
  },
  5653: {
    spot: {
      Lat: 39.31196666666666,
      Long: -74.53988333333334,
      spotName: "Dutches Wedge",
    },
  },
  5654: {
    spot: {
      Lat: 31.62376666666667,
      Long: 131.45488333333333,
      spotName: "Oura",
    },
  },
  5655: {
    spot: { Lat: 30.375383333333332, Long: 130.9395, spotName: "Takezaki" },
  },
  5656: {
    spot: {
      Lat: -32.272616666666664,
      Long: -71.47533333333334,
      spotName: "Los Molles",
    },
  },
  5657: {
    spot: {
      Lat: -4.687016666666667,
      Long: 55.45596666666667,
      spotName: "Barbarons",
    },
  },
  5658: {
    spot: {
      Lat: 30.651966666666667,
      Long: 131.05313333333334,
      spotName: "Hungry",
    },
  },
  5659: { spot: { Lat: -28.3068, Long: 114.34845, spotName: "benders" } },
  5660: {
    spot: {
      Lat: 44.22971666666667,
      Long: -64.42718333333333,
      spotName: "Rissers",
    },
  },
  5661: {
    spot: { Lat: 39.306866666666664, Long: -74.55675, spotName: "Flukies" },
  },
  5662: {
    spot: {
      Lat: 19.752966666666666,
      Long: -70.52698333333333,
      spotName: "el tablon",
    },
  },
  5663: {
    spot: {
      Lat: -22.863566666666667,
      Long: -70.29661666666667,
      spotName: "Hornito",
    },
  },
  5664: {
    spot: {
      Lat: 16.240966666666665,
      Long: -61.339166666666664,
      spotName: "le helleux",
    },
  },
  5665: {
    spot: {
      Lat: -28.869266666666668,
      Long: 153.57858333333334,
      spotName: "Missingham Bridge",
    },
  },
  5666: {
    spot: {
      Lat: -16.815016666666665,
      Long: 180.21818333333334,
      spotName: "Maqai",
    },
  },
  5667: {
    spot: {
      Lat: -38.431466666666665,
      Long: 144.15656666666666,
      spotName: "Hut Gulley (Guvvos)",
    },
  },
  5668: {
    spot: { Lat: 38.8287, Long: 0.15108333333333332, spotName: "Les Rotes" },
  },
  5669: {
    spot: {
      Lat: 30.5924,
      Long: 130.95276666666666,
      spotName: "Nagahama Reef",
    },
  },
  5670: { spot: { Lat: -29.05145, Long: 167.9856, spotName: "Ball Bay" } },
  5671: {
    spot: {
      Lat: 39.268883333333335,
      Long: 8.424883333333334,
      spotName: "Porto Paglia",
    },
  },
  5672: {
    spot: {
      Lat: -34.627516666666665,
      Long: 19.303066666666666,
      spotName: "Danger Point",
    },
  },
  5673: {
    spot: {
      Lat: 25.76295,
      Long: -80.13281666666667,
      spotName: "south point boardwalk",
    },
  },
  5674: { spot: { Lat: 0.1741, Long: 102.55531666666667, spotName: "Bono" } },
  5675: {
    spot: {
      Lat: -35.32535,
      Long: 150.48153333333335,
      spotName: "Bannisters point",
    },
  },
  5676: {
    spot: {
      Lat: 43.46485,
      Long: -1.5771833333333334,
      spotName: "Biarritz - Milady",
    },
  },
  5677: {
    spot: {
      Lat: 48.37201666666667,
      Long: -64.58748333333334,
      spotName: "Banc de Pabos",
    },
  },
  5678: {
    spot: { Lat: 32.124, Long: 131.54016666666666, spotName: "Kaguchihama" },
  },
  5679: { spot: { Lat: 17.64295, Long: -63.2528, spotName: "Wells bay" } },
  5680: {
    spot: {
      Lat: -23.963433333333334,
      Long: -46.18403333333333,
      spotName: "Praia de Pernambuco (Pernambuco Beach, in Guaruja)",
    },
  },
  5681: {
    spot: { Lat: -38.40435, Long: 144.20986666666667, spotName: "Grinders" },
  },
  5682: {
    spot: {
      Lat: 33.97141666666667,
      Long: -77.91598333333333,
      spotName: "Fort Fisher",
    },
  },
  5683: {
    spot: {
      Lat: -39.501333333333335,
      Long: 173.89863333333332,
      spotName: "Green Meadows",
    },
  },
  5684: {
    spot: { Lat: 50.51245, Long: -2.4581833333333334, spotName: "The Bill" },
  },
  5685: {
    spot: {
      Lat: 39.15513333333333,
      Long: 23.470983333333333,
      spotName: "Skiathos-Vasilias ",
    },
  },
  5686: {
    spot: {
      Lat: 7.24135,
      Long: -80.56536666666666,
      spotName: "Corto Circuito",
    },
  },
  5687: {
    spot: { Lat: -37.9891, Long: 145.05836666666667, spotName: "Mentone" },
  },
  5688: {
    spot: {
      Lat: 51.21171666666667,
      Long: -4.034283333333334,
      spotName: "wild pear beach",
    },
  },
  5689: {
    spot: {
      Lat: 32.19488333333334,
      Long: 131.55621666666667,
      spotName: "Ikuragahama",
    },
  },
  5690: {
    spot: {
      Lat: 21.673466666666666,
      Long: -158.04391666666666,
      spotName: "Kammieland",
    },
  },
  5691: {
    spot: {
      Lat: -2.5960833333333335,
      Long: 150.76988333333333,
      spotName: "Nago's",
    },
  },
  5692: {
    spot: {
      Lat: -32.020383333333335,
      Long: 115.49205,
      spotName: "Piss head's",
    },
  },
  5693: { spot: { Lat: -13.01, Long: -38.5336, spotName: "Farol da Barra" } },
  5694: {
    spot: { Lat: -2.626316666666667, Long: 140.78095, spotName: "Hollekang" },
  },
  5695: {
    spot: {
      Lat: -8.681316666666667,
      Long: 115.26776666666666,
      spotName: "tanjung left",
    },
  },
  5696: {
    spot: {
      Lat: 33.708483333333334,
      Long: -118.28273333333334,
      spotName: "cabrillo beach",
    },
  },
  5697: { spot: { Lat: 13.02865, Long: -87.6091, spotName: "The Finca" } },
  5698: {
    spot: {
      Lat: 20.767866666666666,
      Long: -105.51998333333333,
      spotName: "Anclote",
    },
  },
  5699: {
    spot: {
      Lat: 55.16908333333333,
      Long: -8.098583333333334,
      spotName: "Falcarragh Beach",
    },
  },
  5700: {
    spot: {
      Lat: -23.256766666666667,
      Long: 150.83013333333332,
      spotName: "Emu Park",
    },
  },
  5701: { spot: { Lat: -22.8653, Long: 14.53835, spotName: "Mussels" } },
  5702: {
    spot: {
      Lat: 30.37975,
      Long: 130.96368333333334,
      spotName: "Toudaishita",
    },
  },
  5703: {
    spot: {
      Lat: 1.7641666666666667,
      Long: 109.86533333333334,
      spotName: "PANDAN BEACH",
    },
  },
  5704: {
    spot: {
      Lat: 35.28766666666667,
      Long: 32.9353,
      spotName: "Caretta Caretta",
    },
  },
  5705: {
    spot: {
      Lat: -33.65085,
      Long: 115.32398333333333,
      spotName: "Secret Beach",
    },
  },
  5706: {
    spot: {
      Lat: 31.708849999999998,
      Long: 131.46046666666666,
      spotName: "Ibii",
    },
  },
  5707: {
    spot: { Lat: 31.63265, Long: 131.46366666666665, spotName: "Sentan" },
  },
  5708: {
    spot: {
      Lat: 30.501216666666668,
      Long: 130.89948333333334,
      spotName: "Yakutsu",
    },
  },
  5709: {
    spot: { Lat: -26.701366666666665, Long: -48.68025, spotName: "Syphodys" },
  },
  5710: {
    spot: {
      Lat: -26.696033333333332,
      Long: -48.67498333333333,
      spotName: "ilha do grants",
    },
  },
  5711: {
    spot: {
      Lat: 24.093416666666666,
      Long: 55.739133333333335,
      spotName: "Wadi Adventure - Al Ain - Mountains",
    },
  },
  5712: {
    spot: {
      Lat: 39.62155,
      Long: -74.19308333333333,
      spotName: "58th Street",
    },
  },
  5713: {
    spot: {
      Lat: -23.6244,
      Long: -70.39833333333333,
      spotName: "piedra del lobo",
    },
  },
  5714: {
    spot: { Lat: -29.05915, Long: 167.96975, spotName: "Cemetery Bay" },
  },
  5715: {
    spot: { Lat: 38.9644, Long: 8.437716666666667, spotName: "Turri" },
  },
  5716: {
    spot: { Lat: 40.13036666666667, Long: -74.0273, spotName: "The Box" },
  },
  5717: {
    spot: {
      Lat: 15.132116666666667,
      Long: 145.68498333333332,
      spotName: "Unknowns",
    },
  },
  5718: {
    spot: {
      Lat: 39.15481666666667,
      Long: 23.470933333333335,
      spotName: "Skiathos - Small King",
    },
  },
  5719: {
    spot: {
      Lat: 33.743633333333335,
      Long: -118.11828333333334,
      spotName: "Long Beach",
    },
  },
  5720: { spot: { Lat: 12.5524, Long: -69.97465, spotName: "Rami Beach" } },
  5721: { spot: { Lat: -36.49605, Long: 150.05475, spotName: "Cuttagee" } },
  5722: {
    spot: {
      Lat: 44.8921,
      Long: 37.29516666666667,
      spotName: "Southern Cape",
    },
  },
  5723: {
    spot: { Lat: 30.52455, Long: 130.98695, spotName: "Nakayama - Center" },
  },
  5724: { spot: { Lat: -2.61075, Long: 150.70925, spotName: "Ral" } },
  5725: { spot: { Lat: 28.3713, Long: -16.8711, spotName: "PLAYA ARENA" } },
  5726: {
    spot: {
      Lat: -34.768683333333335,
      Long: 150.85601666666668,
      spotName: "Kiama Bombie",
    },
  },
  5727: {
    spot: { Lat: 31.23035, Long: 130.49243333333334, spotName: "Oniguchi" },
  },
  5728: {
    spot: {
      Lat: 43.499266666666664,
      Long: -1.5442833333333332,
      spotName: "Anglet - Le club",
    },
  },
  5729: {
    spot: { Lat: 18.267533333333333, Long: 109.7217, spotName: "Houhai" },
  },
  5730: {
    spot: {
      Lat: 21.583933333333334,
      Long: -158.19875,
      spotName: "Pierson's",
    },
  },
  5731: {
    spot: {
      Lat: -7.431233333333333,
      Long: 158.31908333333334,
      spotName: "Dari Rights",
    },
  },
  5732: {
    spot: {
      Lat: 9.81545,
      Long: 126.16403333333334,
      spotName: "Jacking Horse",
    },
  },
  5733: {
    spot: {
      Lat: -33.628816666666665,
      Long: 115.39238333333333,
      spotName: "Port Geographe, Busseton",
    },
  },
  5734: {
    spot: {
      Lat: -13.377016666666666,
      Long: -38.91263333333333,
      spotName: "Pedra do Moleque",
    },
  },
  5735: {
    spot: {
      Lat: 35.21126666666667,
      Long: -2.8604000000000003,
      spotName: "La Bokana",
    },
  },
  5736: {
    spot: {
      Lat: 32.624966666666666,
      Long: -117.1387,
      spotName: "Coronado Silver Strand State Beach",
    },
  },
  5737: { spot: { Lat: -17.5825, Long: 146.10305, spotName: "Etty bay" } },
  5738: {
    spot: {
      Lat: -34.66936666666667,
      Long: 150.86188333333334,
      spotName: "Kiama Pools",
    },
  },
  5739: {
    spot: {
      Lat: 33.979816666666665,
      Long: -119.63561666666666,
      spotName: "santa cruz island",
    },
  },
  5740: {
    spot: {
      Lat: 43.84316666666667,
      Long: -1.3973166666666668,
      spotName: "Moliets Golf",
    },
  },
  5741: {
    spot: {
      Lat: 55.73161666666667,
      Long: 21.08341666666667,
      spotName: "Molas",
    },
  },
  5742: {
    spot: {
      Lat: -34.62583333333333,
      Long: 150.86425,
      spotName: "Rangoon Island",
    },
  },
  5743: {
    spot: {
      Lat: 30.699583333333333,
      Long: -9.8741,
      spotName: "French Baldie Slab",
    },
  },
  5744: {
    spot: { Lat: -34.42375, Long: 19.187066666666666, spotName: "Sandbaai" },
  },
  5745: {
    spot: {
      Lat: -38.47193333333333,
      Long: 144.05181666666667,
      spotName: "Eastern View",
    },
  },
  5746: {
    spot: { Lat: 30.38225, Long: -86.4573, spotName: "The Back Porch" },
  },
  5747: {
    spot: {
      Lat: -9.001733333333334,
      Long: 116.73866666666666,
      spotName: "Tropical's",
    },
  },
  5748: {
    spot: { Lat: 31.408366666666666, Long: 131.3428, spotName: "Koigaoura" },
  },
  5749: {
    spot: {
      Lat: 38.79196666666667,
      Long: 0.18268333333333334,
      spotName: "El Puerto (Javea)",
    },
  },
  5750: {
    spot: {
      Lat: -28.85905,
      Long: 153.59961666666666,
      spotName: "Black Head",
    },
  },
  5751: {
    spot: {
      Lat: 30.362616666666668,
      Long: 130.90281666666667,
      spotName: "Fingers",
    },
  },
  5752: {
    spot: {
      Lat: 32.24981666666667,
      Long: 131.57746666666668,
      spotName: "Lena",
    },
  },
  5753: {
    spot: {
      Lat: 32.406016666666666,
      Long: 131.64671666666666,
      spotName: "Shiomigawakakou",
    },
  },
  5754: {
    spot: {
      Lat: 31.455016666666666,
      Long: 131.19323333333332,
      spotName: "Fukushimaku",
    },
  },
  5755: {
    spot: {
      Lat: 31.99795,
      Long: 131.49013333333335,
      spotName: "Ishizakihama",
    },
  },
  5756: {
    spot: {
      Lat: -33.032133333333334,
      Long: -71.59271666666666,
      spotName: "Caleta Portales",
    },
  },
  5757: {
    spot: { Lat: -20.214933333333335, Long: 57.39605, spotName: "Club med " },
  },
  5758: { spot: { Lat: -22.41055, Long: -41.80825, spotName: "Pecado" } },
  5759: {
    spot: { Lat: 31.39305, Long: 131.07246666666666, spotName: "Akaehama" },
  },
  5760: {
    spot: { Lat: 13.3831, Long: -89.09031666666667, spotName: "El Pimental" },
  },
  5761: {
    spot: { Lat: 16.199383333333333, Long: 73.4345, spotName: "Pirawadi" },
  },
  5762: {
    spot: {
      Lat: -1.5652833333333334,
      Long: -80.84161666666667,
      spotName: "Punta Mala",
    },
  },
  5763: {
    spot: {
      Lat: -0.3609666666666667,
      Long: -80.48468333333334,
      spotName: "Cabo Pasado",
    },
  },
  5764: {
    spot: {
      Lat: -32.929233333333336,
      Long: -71.53186666666667,
      spotName: "Las Bahamas",
    },
  },
  5765: { spot: { Lat: -9.6903, Long: 39.7396, spotName: "Nondo right" } },
  5766: {
    spot: { Lat: 32.019466666666666, Long: 131.4975, spotName: "Isekagaku" },
  },
  5767: {
    spot: {
      Lat: -8.826966666666667,
      Long: 125.05248333333333,
      spotName: "B-point",
    },
  },
  5768: {
    spot: {
      Lat: 54.616283333333335,
      Long: -8.584866666666667,
      spotName: "Muckros",
    },
  },
  5769: {
    spot: {
      Lat: 0.48746666666666666,
      Long: -80.04933333333334,
      spotName: "Portete",
    },
  },
  5770: {
    spot: {
      Lat: 35.04643333333333,
      Long: 32.431466666666665,
      spotName: "Polis",
    },
  },
  5771: {
    spot: { Lat: -38.6541, Long: 145.55936666666668, spotName: "The hub " },
  },
  5772: {
    spot: {
      Lat: 37.2071,
      Long: -7.090483333333333,
      spotName: "Punta Umbria",
    },
  },
  5773: {
    spot: {
      Lat: -32.988616666666665,
      Long: -71.54726666666667,
      spotName: "Salinas Spa",
    },
  },
  5774: {
    spot: {
      Lat: -33.8131,
      Long: 151.27246666666667,
      spotName: "d-head reef",
    },
  },
  5775: { spot: { Lat: -9.7314, Long: 39.7204, spotName: "Mchinga beach" } },
  5776: {
    spot: { Lat: -9.635533333333333, Long: 119.00485, spotName: "Wanyapu" },
  },
  5777: {
    spot: {
      Lat: -35.03378333333333,
      Long: 117.01168333333334,
      spotName: "The Right",
    },
  },
  5778: {
    spot: {
      Lat: -12.716433333333333,
      Long: 45.27043333333334,
      spotName: "diwa",
    },
  },
  5779: { spot: { Lat: 35.45265, Long: 24.17525, spotName: "Kalyves" } },
  5780: {
    spot: {
      Lat: -12.811083333333332,
      Long: 45.293,
      spotName: "les aviateurs",
    },
  },
  5781: {
    spot: { Lat: -1.2426, Long: 136.45368333333334, spotName: "Meat Pai" },
  },
  5782: {
    spot: {
      Lat: -29.673966666666665,
      Long: 153.33156666666667,
      spotName: "Sandon River",
    },
  },
  5783: {
    spot: {
      Lat: -0.2793833333333334,
      Long: 73.42081666666667,
      spotName: "Thoondu beach",
    },
  },
  5784: {
    spot: {
      Lat: 10.057883333333333,
      Long: 73.6388,
      spotName: "Kalpeni left",
    },
  },
  5785: { spot: { Lat: 55.138, Long: -8.299, spotName: "Bloody foreland" } },
  5786: {
    spot: {
      Lat: 54.768816666666666,
      Long: -8.539816666666667,
      spotName: "Maghera beach",
    },
  },
  5787: {
    spot: {
      Lat: 36.16851666666667,
      Long: -5.33705,
      spotName: "La Linea de la Concepcion",
    },
  },
  5788: {
    spot: {
      Lat: -5.002933333333333,
      Long: 154.62721666666667,
      spotName: "Toro's",
    },
  },
  5789: {
    spot: {
      Lat: 18.45095,
      Long: 94.29523333333333,
      spotName: "Thandwe Airport",
    },
  },
  5790: {
    spot: { Lat: -33.5293, Long: 151.40298333333334, spotName: "shark cove" },
  },
  5791: {
    spot: {
      Lat: -33.73725,
      Long: 151.32476666666668,
      spotName: "papa chins",
    },
  },
  5792: {
    spot: {
      Lat: 22.416333333333334,
      Long: 114.38205,
      spotName: "Tai Long Wan Sai Kung",
    },
  },
  5793: {
    spot: { Lat: -17.778916666666667, Long: 168.29205, spotName: "Resorts" },
  },
  5794: {
    spot: {
      Lat: 35.03856666666667,
      Long: 25.974983333333334,
      spotName: "Makrys Gyalos",
    },
  },
  5795: {
    spot: {
      Lat: 47.99881666666667,
      Long: -4.56515,
      spotName: "Lervily reef",
    },
  },
  5796: {
    spot: { Lat: -1.79585, Long: 99.23118333333333, spotName: "Sometimes" },
  },
  5797: {
    spot: { Lat: -8.84765, Long: 116.75975, spotName: "Little Bingin" },
  },
  5798: {
    spot: {
      Lat: -8.727183333333333,
      Long: 116.76573333333333,
      spotName: "Cement Factory",
    },
  },
  5799: {
    spot: { Lat: -5.22445, Long: 12.137516666666667, spotName: "Turtles" },
  },
  5800: {
    spot: {
      Lat: 5.955433333333334,
      Long: 80.41706666666667,
      spotName: "Devils rock",
    },
  },
  5801: {
    spot: {
      Lat: 2.1912833333333332,
      Long: 73.1205,
      spotName: "Mikados (outside)",
    },
  },
  5802: {
    spot: {
      Lat: -0.6749666666666666,
      Long: 73.19895,
      spotName: "Shangri-La",
    },
  },
  5803: {
    spot: {
      Lat: 31.895483333333335,
      Long: 131.46403333333333,
      spotName: "Suimon",
    },
  },
  5804: {
    spot: {
      Lat: -33.92648333333333,
      Long: 122.0909,
      spotName: "Lovers cove",
    },
  },
  5805: {
    spot: { Lat: 9.881733333333333, Long: -85.5777, spotName: "Barrigona" },
  },
  5806: {
    spot: {
      Lat: 54.47943333333333,
      Long: -8.312916666666666,
      spotName: "Pampa",
    },
  },
  5807: {
    spot: { Lat: 54.47638333333333, Long: -8.32195, spotName: "Black spot" },
  },
  5808: {
    spot: { Lat: 18.0441, Long: -63.12591666666667, spotName: "Mullet bay" },
  },
  5809: {
    spot: { Lat: 48.22425, Long: -4.49305, spotName: "Morgat Harbour" },
  },
  5810: {
    spot: {
      Lat: -20.179783333333333,
      Long: -70.14061666666667,
      spotName: "Marinero desconocido",
    },
  },
  5811: {
    spot: { Lat: -9.687583333333333, Long: 39.73945, spotName: "Nondo left" },
  },
  5812: {
    spot: {
      Lat: -2.162933333333333,
      Long: 99.52806666666666,
      spotName: "Seven Palms",
    },
  },
  5813: {
    spot: {
      Lat: -33.48331666666667,
      Long: -71.64566666666667,
      spotName: "La cruz",
    },
  },
  5814: {
    spot: {
      Lat: 34.413466666666665,
      Long: -119.56911666666667,
      spotName: "Serena's",
    },
  },
  5815: {
    spot: {
      Lat: -33.537683333333334,
      Long: 151.37478333333334,
      spotName: "Killcare Bombie",
    },
  },
  5816: {
    spot: {
      Lat: 34.68273333333333,
      Long: 32.59093333333333,
      spotName: "Eucalyptus",
    },
  },
  5817: {
    spot: { Lat: 14.829816666666666, Long: -61.2266, spotName: "Tomate" },
  },
  5818: {
    spot: {
      Lat: 37.67811666666667,
      Long: 24.053883333333335,
      spotName: "Limani Pasa Beach",
    },
  },
  5819: {
    spot: {
      Lat: -33.782383333333335,
      Long: 151.29548333333332,
      spotName: "luzas",
    },
  },
  5820: {
    spot: { Lat: -7.01585, Long: 39.55158333333333, spotName: "Kasa beach" },
  },
  5821: {
    spot: {
      Lat: -21.430583333333335,
      Long: -70.05988333333333,
      spotName: "El Loa",
    },
  },
  5822: { spot: { Lat: -9.6345, Long: 39.72228333333334, spotName: "Ruvu" } },
  5823: {
    spot: {
      Lat: -33.770716666666665,
      Long: 151.29546666666667,
      spotName: "curl curl shoz",
    },
  },
  5824: {
    spot: { Lat: 35.19606666666667, Long: 26.15085, spotName: "Agia Fotia" },
  },
  5825: {
    spot: { Lat: -32.6078, Long: 115.62853333333334, spotName: "DJ break" },
  },
  5826: {
    spot: {
      Lat: -0.8244166666666667,
      Long: 135.99985,
      spotName: "Churches left",
    },
  },
  5827: {
    spot: {
      Lat: -31.753516666666666,
      Long: -71.51525,
      spotName: "Chigualoco",
    },
  },
  5828: {
    spot: { Lat: 1.8121333333333334, Long: 73.4143, spotName: "Six senses" },
  },
  5829: {
    spot: {
      Lat: 32.64033333333333,
      Long: 14.301616666666666,
      spotName: "Leptis Magna",
    },
  },
  5830: {
    spot: { Lat: -5.414333333333333, Long: 12.20505, spotName: "cabgo" },
  },
  5831: {
    spot: { Lat: 16.41665, Long: -61.53426666666667, spotName: "Le palais" },
  },
  5832: {
    spot: { Lat: 54.3861, Long: -8.598983333333333, spotName: "Lislary" },
  },
  5833: {
    spot: {
      Lat: 34.638016666666665,
      Long: 33.009966666666664,
      spotName: "Ladies Mile",
    },
  },
  5834: {
    spot: {
      Lat: 37.8152,
      Long: -25.561116666666667,
      spotName: "Praia Santana",
    },
  },
  5835: {
    spot: { Lat: -20.215766666666667, Long: -70.15935, spotName: "La Cosa" },
  },
  5836: {
    spot: {
      Lat: -10.8467,
      Long: 122.81751666666666,
      spotName: "Sucky Mamas",
    },
  },
  5837: {
    spot: {
      Lat: 0.23311666666666667,
      Long: 73.28681666666667,
      spotName: "Blue bowls",
    },
  },
  5838: {
    spot: {
      Lat: -24.904066666666665,
      Long: 113.6376,
      spotName: "Pelican Point",
    },
  },
  5839: {
    spot: {
      Lat: 36.535666666666664,
      Long: 136.52418333333333,
      spotName: "Tokumitsu",
    },
  },
  5840: {
    spot: {
      Lat: 52.93763333333333,
      Long: 1.2694333333333334,
      spotName: "East Runton",
    },
  },
  5841: {
    spot: {
      Lat: 41.43058333333333,
      Long: -71.4546,
      spotName: "Coast Guard House",
    },
  },
  5842: {
    spot: { Lat: 34.64825, Long: 32.71856666666667, spotName: "Pissouri" },
  },
  5843: {
    spot: {
      Lat: -35.563066666666664,
      Long: -72.62813333333334,
      spotName: "Santos del Mar",
    },
  },
  5844: {
    spot: { Lat: -37.0724, Long: -73.16131666666666, spotName: "Conchilla" },
  },
  5845: {
    spot: { Lat: -6.937, Long: 39.50621666666667, spotName: "Ras Kutani" },
  },
  5846: {
    spot: {
      Lat: 21.399916666666666,
      Long: -157.7202,
      spotName: "Popoia Island",
    },
  },
  5847: {
    spot: { Lat: 35.1252, Long: 25.743116666666666, spotName: "Voulisma" },
  },
  5848: {
    spot: {
      Lat: 42.744933333333336,
      Long: 132.85036666666667,
      spotName: "Tungus left",
    },
  },
  5849: {
    spot: { Lat: 35.598416666666665, Long: -121.132, spotName: "Ponytails" },
  },
  5850: {
    spot: {
      Lat: 12.001633333333332,
      Long: -83.68388333333333,
      spotName: "El Bluff",
    },
  },
  5851: {
    spot: {
      Lat: 0.21171666666666666,
      Long: 73.14136666666667,
      spotName: "Beacons",
    },
  },
  5852: { spot: { Lat: 0.26065, Long: 73.3628, spotName: "Two ways" } },
  5853: {
    spot: {
      Lat: 0.26084999999999997,
      Long: 73.36941666666667,
      spotName: "Love charms",
    },
  },
  5854: {
    spot: {
      Lat: 32.01096666666667,
      Long: 131.49433333333334,
      spotName: "Ishizakigawa",
    },
  },
  5855: {
    spot: {
      Lat: 42.50568333333333,
      Long: 3.1235833333333334,
      spotName: "Paulilles",
    },
  },
  5856: {
    spot: { Lat: 25.268616666666667, Long: 60.74935, spotName: "Ramin" },
  },
  5857: {
    spot: { Lat: -38.401316666666666, Long: 142.46295, spotName: "The Moat" },
  },
  5858: {
    spot: { Lat: 35.02386666666666, Long: 139.9925, spotName: "Hanakago" },
  },
  5859: {
    spot: {
      Lat: -2.7569166666666667,
      Long: 99.98453333333333,
      spotName: "Dutchies",
    },
  },
  5860: {
    spot: {
      Lat: 54.47436666666667,
      Long: -8.332833333333333,
      spotName: "Tullaghan right",
    },
  },
  5861: {
    spot: {
      Lat: -6.968066666666667,
      Long: 106.51603333333334,
      spotName: "Karang Naya",
    },
  },
  5862: {
    spot: { Lat: 18.029816666666665, Long: -71.1372, spotName: "San Rafael" },
  },
  5863: {
    spot: { Lat: 33.44583333333333, Long: -111.913, spotName: "Big Surf AZ" },
  },
  5864: {
    spot: {
      Lat: -41.34418333333333,
      Long: 174.79623333333333,
      spotName: "Bombers",
    },
  },
  5865: {
    spot: {
      Lat: -9.7265,
      Long: 39.726283333333335,
      spotName: "Mchinga left",
    },
  },
  5866: {
    spot: {
      Lat: 34.38715,
      Long: -119.51391666666666,
      spotName: "Jelly Bowl",
    },
  },
  5867: {
    spot: {
      Lat: -6.986016666666667,
      Long: 39.54241666666667,
      spotName: "Caves",
    },
  },
  5868: {
    spot: {
      Lat: 33.58396666666667,
      Long: -7.6927,
      spotName: "Ain Diab Porte 15",
    },
  },
  5869: {
    spot: {
      Lat: 0.8529833333333333,
      Long: -79.92176666666667,
      spotName: "Casa Blanca",
    },
  },
  5870: {
    spot: {
      Lat: 42.901716666666665,
      Long: 131.73223333333334,
      spotName: "Red rocks",
    },
  },
  5871: {
    spot: {
      Lat: 44.610416666666666,
      Long: 33.45715,
      spotName: "Park Pobedy",
    },
  },
  5872: {
    spot: {
      Lat: 2.9274833333333334,
      Long: 73.58715,
      spotName: "Muli's right",
    },
  },
  5873: {
    spot: {
      Lat: 37.336133333333336,
      Long: -121.81383333333333,
      spotName: "Raging Waters",
    },
  },
  5874: {
    spot: {
      Lat: 34.97841666666667,
      Long: 33.70086666666667,
      spotName: "Vulcansurf",
    },
  },
  5875: {
    spot: {
      Lat: 54.47205,
      Long: -8.342666666666666,
      spotName: "Tullaghan left",
    },
  },
  5876: {
    spot: { Lat: 17.843983333333334, Long: 73.08745, spotName: "Anjarle" },
  },
  5877: {
    spot: {
      Lat: 34.64928333333334,
      Long: 32.749766666666666,
      spotName: "Melanda 2",
    },
  },
  5878: { spot: { Lat: 0.4947, Long: -80.0451, spotName: "Punta Suspiro" } },
  5879: {
    spot: {
      Lat: -6.812633333333333,
      Long: 39.397483333333334,
      spotName: "Sinda right",
    },
  },
  5880: {
    spot: { Lat: 43.205783333333336, Long: 132.16685, spotName: "Emar left" },
  },
  5881: {
    spot: {
      Lat: 41.98583333333333,
      Long: 19.148833333333332,
      spotName: "Kruce",
    },
  },
  5882: {
    spot: {
      Lat: -12.785766666666667,
      Long: 45.29963333333333,
      spotName: "moya 1",
    },
  },
  5883: {
    spot: {
      Lat: -0.6949833333333333,
      Long: 73.18373333333334,
      spotName: "Madis",
    },
  },
  5884: {
    spot: { Lat: -5.3777, Long: 71.75553333333333, spotName: "Petite Soeur" },
  },
  5885: {
    spot: { Lat: -9.607666666666667, Long: 118.9848, spotName: "Pero right" },
  },
  5886: {
    spot: {
      Lat: 31.869683333333334,
      Long: 131.45733333333334,
      spotName: "Golf Parc",
    },
  },
  5887: {
    spot: {
      Lat: 17.974633333333333,
      Long: -65.93413333333334,
      spotName: "Channel",
    },
  },
  5888: {
    spot: {
      Lat: 64.24788333333333,
      Long: -14.972366666666666,
      spotName: "Stokksnes",
    },
  },
  5889: {
    spot: {
      Lat: -9.689383333333334,
      Long: 39.73605,
      spotName: "Nondo inside left",
    },
  },
  5890: {
    spot: { Lat: 52.9841, Long: -9.438933333333333, spotName: "Aileens" },
  },
  5891: {
    spot: {
      Lat: -8.5214,
      Long: 125.60743333333333,
      spotName: "CRISTO REI DILI",
    },
  },
  5892: {
    spot: {
      Lat: 21.324883333333332,
      Long: -158.13425,
      spotName: "ko olinas",
    },
  },
  5893: {
    spot: {
      Lat: 36.95883333333333,
      Long: -121.99311666666667,
      spotName: "Blacks",
    },
  },
  5894: {
    spot: {
      Lat: 52.932316666666665,
      Long: 1.3118333333333334,
      spotName: "Stone Groyne",
    },
  },
  5895: {
    spot: { Lat: -10.966716666666667, Long: 122.84035, spotName: "Dana" },
  },
  5896: {
    spot: {
      Lat: 65.55748333333334,
      Long: -24.360866666666666,
      spotName: "Breidavik",
    },
  },
  5897: { spot: { Lat: -40.88065, Long: 144.70295, spotName: "Ann bay" } },
  5898: {
    spot: {
      Lat: -38.476816666666664,
      Long: 144.03875,
      spotName: "Spout Creek",
    },
  },
  5899: {
    spot: { Lat: -38.339, Long: -73.50693333333334, spotName: "Tirua" },
  },
  5900: {
    spot: {
      Lat: -18.749866666666666,
      Long: -70.3386,
      spotName: "Caleta Vitor",
    },
  },
  5901: {
    spot: {
      Lat: -6.98445,
      Long: 39.53718333333333,
      spotName: "Skippers right",
    },
  },
  5902: {
    spot: {
      Lat: -6.9852,
      Long: 39.539683333333336,
      spotName: "Skippers front",
    },
  },
  5903: {
    spot: {
      Lat: 36.782716666666666,
      Long: 21.938683333333334,
      spotName: "koroni",
    },
  },
  5904: {
    spot: {
      Lat: 35.737766666666666,
      Long: -0.7359000000000001,
      spotName: "Ain El Turk",
    },
  },
  5905: {
    spot: { Lat: 28.04575, Long: -14.328333333333333, spotName: "Cruz Roja" },
  },
  5906: {
    spot: {
      Lat: 34.41523333333333,
      Long: -119.8361,
      spotName: "Goleta Rock",
    },
  },
  5907: {
    spot: {
      Lat: -6.176266666666667,
      Long: 39.539116666666665,
      spotName: "Dongwe Doughnuts",
    },
  },
  5908: {
    spot: {
      Lat: -20.275733333333335,
      Long: -70.13303333333333,
      spotName: "Baul",
    },
  },
  5909: {
    spot: { Lat: 42.759366666666665, Long: 132.8201, spotName: "Kuda" },
  },
  5910: {
    spot: { Lat: 35.03536666666667, Long: 25.9694, spotName: "Strofi" },
  },
  5911: {
    spot: { Lat: 34.445083333333336, Long: -120.45965, spotName: "Whitey's" },
  },
  5912: {
    spot: {
      Lat: 2.666733333333333,
      Long: 72.90328333333333,
      spotName: "Kudas",
    },
  },
  5913: {
    spot: {
      Lat: 0.28186666666666665,
      Long: 73.44598333333333,
      spotName: "Antiques",
    },
  },
  5914: {
    spot: {
      Lat: 0.28313333333333335,
      Long: 73.45251666666667,
      spotName: "Tigerstripes",
    },
  },
  5915: {
    spot: {
      Lat: 2.0185666666666666,
      Long: 73.53676666666667,
      spotName: "Bedhuge",
    },
  },
  5916: {
    spot: {
      Lat: 31.891466666666666,
      Long: 131.46351666666666,
      spotName: "Oyodogawa",
    },
  },
  5917: {
    spot: {
      Lat: 3.9042833333333333,
      Long: 73.4756,
      spotName: "Kandooma Right",
    },
  },
  5918: {
    spot: {
      Lat: -39.926383333333334,
      Long: 176.93446666666668,
      spotName: "Mangakuri",
    },
  },
  5919: {
    spot: {
      Lat: 33.17196666666667,
      Long: -117.36766666666666,
      spotName: "Cassidy",
    },
  },
  5920: {
    spot: {
      Lat: -33.65326666666667,
      Long: 151.32416666666666,
      spotName: "newport deadies ",
    },
  },
  5921: {
    spot: { Lat: 37.84055, Long: 24.93755, spotName: "Andros (Hora)" },
  },
  5922: {
    spot: { Lat: -5.005416666666667, Long: 154.6061, spotName: "Tunkahi" },
  },
  5923: {
    spot: { Lat: 42.889466666666664, Long: -9.13895, spotName: "O Pindo" },
  },
  5924: { spot: { Lat: -36.1802, Long: -72.8176, spotName: "La Rinconada" } },
  5925: { spot: { Lat: -0, Long: -0, spotName: "Les Montagnes Mortes" } },
  5926: {
    spot: { Lat: -8.555966666666666, Long: 125.49935, spotName: "Dili Rock" },
  },
  5927: {
    spot: {
      Lat: 35.51263333333333,
      Long: 23.954016666666668,
      spotName: "Stalos",
    },
  },
  5928: {
    spot: { Lat: -8.918983333333333, Long: 116.7377, spotName: "Donuts" },
  },
  5929: { spot: { Lat: 42.10573333333333, Long: 19.08535, spotName: "Bar" } },
  5930: {
    spot: { Lat: 34.417833333333334, Long: -119.7979, spotName: "Shelves" },
  },
  5931: {
    spot: {
      Lat: -12.781633333333334,
      Long: 45.29858333333333,
      spotName: "MOYA 2",
    },
  },
  5932: {
    spot: {
      Lat: 8.288566666666666,
      Long: 73.06791666666666,
      spotName: "Minicoy pier",
    },
  },
  5933: {
    spot: {
      Lat: 31.586933333333334,
      Long: 131.40998333333334,
      spotName: "Umegahama rivermouth",
    },
  },
  5934: {
    spot: {
      Lat: -41.329116666666664,
      Long: 174.79773333333333,
      spotName: "lyall bay middles",
    },
  },
  5935: {
    spot: { Lat: 37.9104, Long: 24.839083333333335, spotName: "Ateni Beach" },
  },
  5936: {
    spot: { Lat: -40.5364, Long: -73.71673333333334, spotName: "Pucatrihue" },
  },
  5937: {
    spot: {
      Lat: -36.07736666666667,
      Long: -72.79888333333334,
      spotName: "Buchupureo",
    },
  },
  5938: {
    spot: {
      Lat: -9.717233333333333,
      Long: 39.74563333333333,
      spotName: "Mangroves",
    },
  },
  5939: {
    spot: { Lat: 5.9371, Long: 80.5086, spotName: "Turtle eco beach" },
  },
  5940: {
    spot: {
      Lat: -10.940333333333333,
      Long: 122.84001666666667,
      spotName: "Boa",
    },
  },
  5941: {
    spot: {
      Lat: -0.7029,
      Long: 73.17156666666666,
      spotName: "Airport right ",
    },
  },
  5942: {
    spot: {
      Lat: 1.8134000000000001,
      Long: 73.39321666666666,
      spotName: "Mada's",
    },
  },
  5943: {
    spot: { Lat: -10.3144, Long: 120.15523333333333, spotName: "Mengkudu" },
  },
  5944: {
    spot: { Lat: -32.70976666666667, Long: -71.4963, spotName: "Cau-Cau" },
  },
  5945: { spot: { Lat: 35.0126, Long: 34.05895, spotName: "Fig Tree" } },
  5946: {
    spot: { Lat: 34.711, Long: 33.1659, spotName: "St Raphael Marina" },
  },
  5947: {
    spot: {
      Lat: -33.8005,
      Long: 151.27546666666666,
      spotName: "Fairlight Pool",
    },
  },
  5948: {
    spot: {
      Lat: -32.35851666666667,
      Long: -71.46045,
      spotName: "Punta Docas",
    },
  },
  5949: {
    spot: { Lat: 34.417, Long: -119.78793333333333, spotName: "More Mesa" },
  },
  5950: {
    spot: {
      Lat: -9.716283333333333,
      Long: 39.75395,
      spotName: "Mchinga outer left",
    },
  },
  5951: {
    spot: { Lat: 35.88206666666667, Long: 27.75205, spotName: "prasonisi" },
  },
  5952: {
    spot: {
      Lat: -33.81811666666667,
      Long: 151.2612,
      spotName: "Castle Rock",
    },
  },
  5953: {
    spot: {
      Lat: 0.34469999999999995,
      Long: 73.53631666666666,
      spotName: "KH's",
    },
  },
  5954: {
    spot: { Lat: 2.0225833333333334, Long: 73.53615, spotName: "Refugees" },
  },
  5955: {
    spot: { Lat: 10.541483333333334, Long: 72.61935, spotName: "Shipwreck" },
  },
  5956: { spot: { Lat: -34.79795, Long: -55.52905, spotName: "Santalu" } },
  5957: {
    spot: {
      Lat: 13.483033333333333,
      Long: -89.32398333333333,
      spotName: "Cemetery",
    },
  },
  5958: {
    spot: {
      Lat: -36.10576666666667,
      Long: 150.13738333333333,
      spotName: "Brou Beach",
    },
  },
  5959: {
    spot: {
      Lat: 51.682916666666664,
      Long: -4.337116666666667,
      spotName: "Pembrey Beach",
    },
  },
  5960: {
    spot: {
      Lat: 5.936466666666667,
      Long: 80.51078333333334,
      spotName: "Madiha ",
    },
  },
  5961: {
    spot: {
      Lat: -34.40508333333333,
      Long: -53.78646666666667,
      spotName: "Polonio Sur",
    },
  },
  5962: {
    spot: { Lat: 20.7674, Long: -105.53811666666667, spotName: "El Skupa" },
  },
  5963: {
    spot: {
      Lat: 28.5361,
      Long: -16.399216666666668,
      spotName: "Barranquera",
    },
  },
  5964: { spot: { Lat: 4.05985, Long: 9.04325, spotName: "Tsaben Beach" } },
  5965: {
    spot: {
      Lat: 14.607,
      Long: 17.153316666666665,
      spotName: "Gauche de Toubab Dialaw",
    },
  },
  5966: {
    spot: {
      Lat: 25.292416666666668,
      Long: 63.48096666666667,
      spotName: "Mirages",
    },
  },
  5967: {
    spot: {
      Lat: 38.5977,
      Long: -28.830566666666666,
      spotName: "Ponta Dos Capelinhos",
    },
  },
  5968: {
    spot: {
      Lat: -32.29056666666666,
      Long: -52.25866666666667,
      spotName: "Navio",
    },
  },
  5969: {
    spot: {
      Lat: 34.54136666666667,
      Long: -120.55255,
      spotName: "Del Morida",
    },
  },
  5970: {
    spot: {
      Lat: 35.1722,
      Long: -120.75495,
      spotName: "Sand Spit - Port San Luis",
    },
  },
  5971: {
    spot: {
      Lat: 32.8078,
      Long: -17.262516666666667,
      spotName: "Ponta do Pargo",
    },
  },
  5972: {
    spot: {
      Lat: -30.022433333333332,
      Long: 114.92136666666667,
      spotName: "Cody's Right",
    },
  },
  5973: {
    spot: {
      Lat: -10.256233333333334,
      Long: 120.57421666666667,
      spotName: "Erics",
    },
  },
  5974: {
    spot: { Lat: 32.7465, Long: -17.22065, spotName: "Ponta Pequina" },
  },
  5975: {
    spot: {
      Lat: 19.2938,
      Long: -81.19875,
      spotName: "Lighthouse Restaurant",
    },
  },
  5976: {
    spot: {
      Lat: 32.788383333333336,
      Long: -16.844066666666667,
      spotName: "Faial",
    },
  },
  5977: {
    spot: {
      Lat: 28.152666666666665,
      Long: -16.43195,
      spotName: "Playa Grande",
    },
  },
  5978: {
    spot: {
      Lat: -26.804016666666666,
      Long: 153.15988333333334,
      spotName: "Kings Beach reef",
    },
  },
  5979: {
    spot: {
      Lat: 20.40325,
      Long: -86.85706666666667,
      spotName: "Punta Morena",
    },
  },
  5980: {
    spot: { Lat: 12.282933333333334, Long: -16.58965, spotName: "Varela" },
  },
  5981: {
    spot: {
      Lat: 34.61533333333333,
      Long: 137.22616666666667,
      spotName: "Mira",
    },
  },
  5982: {
    spot: {
      Lat: -32.00663333333333,
      Long: 115.74978333333334,
      spotName: "south cott",
    },
  },
  5983: {
    spot: {
      Lat: -31.747633333333333,
      Long: 115.72445,
      spotName: "Nathans Slab",
    },
  },
  5984: {
    spot: {
      Lat: -34.1553,
      Long: 24.839066666666668,
      spotName: "Nik's Secret",
    },
  },
  5985: {
    spot: { Lat: 44.17715, Long: -64.47011666666667, spotName: "Broad Cove" },
  },
  5986: {
    spot: {
      Lat: 25.340166666666665,
      Long: -76.43475,
      spotName: "Smugglers Beach",
    },
  },
  5987: {
    spot: {
      Lat: 18.501133333333332,
      Long: -68.37143333333333,
      spotName: "Cap Cana Channel",
    },
  },
  5988: {
    spot: {
      Lat: -38.38881666666666,
      Long: 144.25511666666668,
      spotName: "Inside Addis",
    },
  },
  5989: {
    spot: {
      Lat: 29.194316666666666,
      Long: -114.77505,
      spotName: "three spot",
    },
  },
  5990: {
    spot: {
      Lat: -41.2839,
      Long: 148.35208333333333,
      spotName: "beerbarral beach",
    },
  },
  5991: {
    spot: {
      Lat: -33.742983333333335,
      Long: 114.98806666666667,
      spotName: "windows",
    },
  },
  5992: {
    spot: { Lat: 59.29195, Long: 10.502283333333333, spotName: "Skallevold" },
  },
  5993: {
    spot: {
      Lat: 51.6399,
      Long: -5.068683333333333,
      spotName: "frainslake sands",
    },
  },
  5994: {
    spot: {
      Lat: -34.31381666666667,
      Long: 150.93155,
      spotName: "Thirroul Reef",
    },
  },
  5995: {
    spot: {
      Lat: 42.0859,
      Long: 11.796466666666667,
      spotName: "La brava (civitavecchia)",
    },
  },
  5996: {
    spot: { Lat: 31.210516666666667, Long: 29.911, spotName: "Shatby beach" },
  },
  5997: {
    spot: { Lat: 49.58136666666667, Long: -1.8429, spotName: "Le bloc" },
  },
  5998: {
    spot: { Lat: 15.27245, Long: -23.759783333333335, spotName: "Cadjau" },
  },
  5999: {
    spot: {
      Lat: 55.147733333333335,
      Long: -8.176916666666667,
      spotName: "Magheroarty reef",
    },
  },
  6000: {
    spot: {
      Lat: 13.187533333333333,
      Long: -61.13851666666667,
      spotName: "Ship In Bay",
    },
  },
  6001: {
    spot: {
      Lat: -10.979483333333333,
      Long: 122.84336666666667,
      spotName: "Army Camp",
    },
  },
  6002: {
    spot: {
      Lat: 47.19081666666667,
      Long: -2.1605666666666665,
      spotName: "Gohaud",
    },
  },
  6003: {
    spot: { Lat: 47.80988333333333, Long: -4.38745, spotName: "trigs" },
  },
  6004: {
    spot: {
      Lat: 44.720983333333336,
      Long: -0.44758333333333333,
      spotName: "Mascaret Garonne",
    },
  },
  6005: {
    spot: {
      Lat: -37.577016666666665,
      Long: -73.64268333333334,
      spotName: "Playa Millaneco",
    },
  },
  6006: {
    spot: {
      Lat: 39.377266666666664,
      Long: -123.82003333333333,
      spotName: "Jug Handle State Beach",
    },
  },
  6007: {
    spot: { Lat: 48.82131666666667, Long: -3.35395, spotName: "Trestel" },
  },
  6008: {
    spot: {
      Lat: 40.59588333333333,
      Long: 50.06615,
      spotName: "Bilgah point",
    },
  },
  6009: {
    spot: {
      Lat: 43.338366666666666,
      Long: -79.76901666666667,
      spotName: "Flannies",
    },
  },
  6010: {
    spot: {
      Lat: 43.44756666666667,
      Long: -1.5903166666666666,
      spotName: "Erretegia",
    },
  },
  6011: {
    spot: {
      Lat: 44.06795,
      Long: -64.56361666666666,
      spotName: "Andrews Head",
    },
  },
  6012: {
    spot: {
      Lat: 44.05915,
      Long: -64.63211666666666,
      spotName: "Meadows point",
    },
  },
  6013: {
    spot: {
      Lat: -34.933,
      Long: 150.78251666666668,
      spotName: "warrain beach",
    },
  },
  6014: {
    spot: {
      Lat: 19.573783333333335,
      Long: 57.705466666666666,
      spotName: "Duqm Rocks",
    },
  },
  6015: {
    spot: { Lat: -9.53645, Long: 13.199233333333334, spotName: "Sangano" },
  },
  6016: {
    spot: { Lat: -23.35695, Long: -70.59905, spotName: "Las Chorales" },
  },
  6017: {
    spot: {
      Lat: 55.1547,
      Long: -8.152116666666666,
      spotName: "Magheroarty beach",
    },
  },
  6018: {
    spot: {
      Lat: -34.02395,
      Long: 18.330183333333334,
      spotName: "Sandy Bay south",
    },
  },
  6019: {
    spot: {
      Lat: -7.125333333333334,
      Long: 139.38156666666666,
      spotName: "Kepala Arus",
    },
  },
  6020: {
    spot: {
      Lat: 38.02871666666667,
      Long: 128.71868333333333,
      spotName: "SurfyyBeach front",
    },
  },
  6021: {
    spot: {
      Lat: 0.20204999999999998,
      Long: 6.706566666666666,
      spotName: "Sete Ondas",
    },
  },
  6022: {
    spot: {
      Lat: -26.805733333333333,
      Long: 153.14203333333333,
      spotName: "kings beach break",
    },
  },
  6023: {
    spot: { Lat: 11.3438, Long: 92.62408333333333, spotName: "West Twin" },
  },
  6024: {
    spot: {
      Lat: -33.35758333333333,
      Long: -71.66168333333333,
      spotName: "las tinajas",
    },
  },
  6025: { spot: { Lat: -0, Long: -0, spotName: "Bothwell beach" } },
  6026: {
    spot: {
      Lat: -29.666133333333335,
      Long: 31.12405,
      spotName: "umdloti tidal pool",
    },
  },
  6027: {
    spot: {
      Lat: 7.645766666666667,
      Long: 134.54401666666666,
      spotName: "Ngardmau  Channel",
    },
  },
  6028: {
    spot: {
      Lat: 39.819516666666665,
      Long: 127.66906666666667,
      spotName: "Majon Hotel Beach",
    },
  },
  6029: {
    spot: { Lat: 9.362, Long: -82.23906666666667, spotName: "skully's" },
  },
  6030: {
    spot: { Lat: 18.4334, Long: -67.15626666666667, spotName: "Rompeolas" },
  },
  6031: {
    spot: {
      Lat: 2.3394333333333335,
      Long: 96.46858333333333,
      spotName: "One Tree",
    },
  },
  6032: {
    spot: {
      Lat: -37.25641666666667,
      Long: 139.7942,
      spotName: "Hairy Maclareys",
    },
  },
  6033: {
    spot: {
      Lat: -26.795683333333333,
      Long: 153.14878333333334,
      spotName: "Shelly Beach",
    },
  },
  6034: {
    spot: {
      Lat: -12.873883333333334,
      Long: 45.28038333333333,
      spotName: "Passe en S",
    },
  },
  6035: {
    spot: {
      Lat: 5.981833333333333,
      Long: 80.33671666666666,
      spotName: "south beach",
    },
  },
  6036: {
    spot: {
      Lat: -34.48148333333334,
      Long: 150.91386666666668,
      spotName: "MM",
    },
  },
  6037: {
    spot: { Lat: 14.9851, Long: -23.444966666666666, spotName: "K-Bay " },
  },
  6038: {
    spot: { Lat: -32.268, Long: 115.69128333333333, spotName: "Crystals" },
  },
  6039: {
    spot: { Lat: -35.51656666666667, Long: 150.40065, spotName: "jucy" },
  },
  6040: {
    spot: { Lat: 25.098816666666668, Long: 61.87595, spotName: "Ganz" },
  },
  6041: {
    spot: { Lat: -36.44625, Long: -72.89051666666667, spotName: "Purema" },
  },
  6042: {
    spot: { Lat: 33.71995, Long: -118.33083333333333, spotName: "T C's" },
  },
  6043: {
    spot: { Lat: 28.7036, Long: -114.28943333333333, spotName: "L=2870" },
  },
  6044: {
    spot: { Lat: 29.195966666666667, Long: -114.78355, spotName: "Spot2" },
  },
  6045: {
    spot: {
      Lat: -10.8805,
      Long: 122.81313333333334,
      spotName: "T Land Bommie",
    },
  },
  6046: {
    spot: {
      Lat: -30.209666666666667,
      Long: 114.9886,
      spotName: "Sandland Island Reef",
    },
  },
  6047: {
    spot: { Lat: -35.22075, Long: 136.8465, spotName: "Richard's Reef" },
  },
  6048: {
    spot: {
      Lat: -54.58456666666667,
      Long: -67.34328333333333,
      spotName: "LAGO FAGNANO - TOLHUIN - TIERRA DEL FUEGO",
    },
  },
  6049: {
    spot: {
      Lat: 36.959983333333334,
      Long: -121.98731666666667,
      spotName: "Santa Maria's",
    },
  },
  6050: {
    spot: {
      Lat: 31.223383333333334,
      Long: 29.932583333333334,
      spotName: "Cleopatra beach",
    },
  },
  6051: {
    spot: {
      Lat: 5.414883333333333,
      Long: -0.46723333333333333,
      spotName: "Till's",
    },
  },
  6052: { spot: { Lat: 5.9625, Long: 80.70875, spotName: "hiriketiya" } },
  6053: {
    spot: { Lat: 44.0578, Long: -64.63721666666666, spotName: "The Meadows" },
  },
  6054: {
    spot: { Lat: 14.64835, Long: -17.184683333333332, spotName: "Yenne" },
  },
  6055: {
    spot: {
      Lat: 22.975716666666667,
      Long: 121.31368333333333,
      spotName: "Donghe River Mouth",
    },
  },
  6056: {
    spot: { Lat: 29.209366666666668, Long: -114.80115, spotName: "zpot01" },
  },
  6057: {
    spot: { Lat: 29.110166666666668, Long: -114.7131, spotName: "more" },
  },
  6058: {
    spot: {
      Lat: -32.70008333333333,
      Long: 17.965633333333333,
      spotName: "Hell",
    },
  },
  6059: {
    spot: {
      Lat: -33.35995,
      Long: 27.370033333333332,
      spotName: "Sandcastles",
    },
  },
  6060: {
    spot: {
      Lat: -35.32208333333333,
      Long: 172.51198333333335,
      spotName: "The Bombie",
    },
  },
  6061: {
    spot: {
      Lat: -35.01603333333333,
      Long: 118.02423333333333,
      spotName: "blue moon",
    },
  },
  6062: {
    spot: { Lat: -40.11675, Long: 143.95665, spotName: "Colliers Beach" },
  },
  6063: { spot: { Lat: 44.62925, Long: -63.41625, spotName: "Minutes" } },
  6064: {
    spot: {
      Lat: 10.057416666666667,
      Long: 50.89185,
      spotName: "Dhoof point",
    },
  },
  6065: {
    spot: { Lat: 36.29345, Long: -5.270216666666666, spotName: "Sotogrande" },
  },
  6066: { spot: { Lat: -34.1594, Long: 24.83555, spotName: "El Dumpo" } },
  6067: {
    spot: {
      Lat: 29.134483333333332,
      Long: -114.73121666666667,
      spotName: "five spot",
    },
  },
  6068: {
    spot: { Lat: 56.9662, Long: 8.382016666666667, spotName: "deadmans" },
  },
  6069: {
    spot: {
      Lat: 30.288516666666666,
      Long: 120.27936666666666,
      spotName: "The silver dragon",
    },
  },
  6070: {
    spot: {
      Lat: 17.580716666666667,
      Long: -61.85755,
      spotName: "Palmetto Point",
    },
  },
  6071: {
    spot: {
      Lat: 4.974516666666666,
      Long: -2.59885,
      spotName: "Beyin Beach Resort Reef ",
    },
  },
  6072: {
    spot: {
      Lat: -38.279983333333334,
      Long: 144.50386666666665,
      spotName: "R.A.F.F.s beach",
    },
  },
  6073: {
    spot: {
      Lat: 16.326816666666666,
      Long: -61.305283333333335,
      spotName: "Anse Salabouelle",
    },
  },
  6074: {
    spot: {
      Lat: -23.942883333333334,
      Long: 151.37236666666666,
      spotName: "Second Beach Tannum Sands",
    },
  },
  6075: { spot: { Lat: -12.9576, Long: 40.5724, spotName: "Mussage" } },
  6076: {
    spot: { Lat: 46.58671666666667, Long: -87.38595, spotName: "The Zoo" },
  },
  6077: {
    spot: { Lat: 18.48265, Long: -66.27586666666667, spotName: "Sharks" },
  },
  6078: {
    spot: {
      Lat: -23.033833333333334,
      Long: -43.470983333333336,
      spotName: "Farorinha ",
    },
  },
  6079: {
    spot: { Lat: -1.6895333333333333, Long: 99.29705, spotName: "Birdbaths" },
  },
  6080: { spot: { Lat: -1.90635, Long: 99.3113, spotName: "Playgrounds" } },
  6081: {
    spot: { Lat: -1.99955, Long: 99.54858333333334, spotName: "Hookers" },
  },
  6082: {
    spot: { Lat: 51.80758333333333, Long: -10.1786, spotName: "Baslicon" },
  },
  6083: {
    spot: {
      Lat: -16.972716666666667,
      Long: 149.9072,
      spotName: "Andys' Peak",
    },
  },
  6084: {
    spot: {
      Lat: 45.11488333333333,
      Long: -1.1912166666666666,
      spotName: "Crohot des cavalles",
    },
  },
  6085: {
    spot: {
      Lat: -33.923033333333336,
      Long: 151.25908333333334,
      spotName: "Surf club reef",
    },
  },
  6086: {
    spot: { Lat: 47.124233333333336, Long: -2.2163, spotName: "Margaret" },
  },
  6087: {
    spot: {
      Lat: 5.38815,
      Long: -0.4888333333333333,
      spotName: "Fort Good Hope",
    },
  },
  6088: {
    spot: { Lat: 44.6538, Long: 34.404916666666665, spotName: "Rabochiy" },
  },
  6089: {
    spot: {
      Lat: 43.961816666666664,
      Long: -64.73526666666666,
      spotName: "White Point",
    },
  },
  6090: {
    spot: {
      Lat: -30.317466666666668,
      Long: 114.99398333333333,
      spotName: "Whitlock Island Reef",
    },
  },
  6091: {
    spot: {
      Lat: 25.140183333333333,
      Long: 61.48793333333333,
      spotName: "Gwatar",
    },
  },
  6092: { spot: { Lat: 25.38855, Long: 65.46025, spotName: "Kund Malir" } },
  6093: {
    spot: { Lat: 4.7640666666666664, Long: -2.11155, spotName: "Magic bay" },
  },
  6094: {
    spot: { Lat: 6.34735, Long: 2.318783333333333, spotName: "Le Wado" },
  },
  6095: {
    spot: { Lat: -7.2273, Long: 12.854516666666667, spotName: "N'Zeto left" },
  },
  6096: {
    spot: {
      Lat: -18.6012,
      Long: -182.35371666666666,
      spotName: "Vatulele Reef",
    },
  },
  6097: {
    spot: {
      Lat: 51.816316666666665,
      Long: -10.1789,
      spotName: "The old Hatchery",
    },
  },
  6098: {
    spot: { Lat: 36.96241666666667, Long: 15.2089, spotName: "Siracusa" },
  },
  6099: {
    spot: {
      Lat: 2.4957000000000003,
      Long: 96.16258333333333,
      spotName: "Cocaine",
    },
  },
  6100: {
    spot: {
      Lat: 22.586183333333334,
      Long: 88.34716666666667,
      spotName: "The Baan",
    },
  },
  6101: {
    spot: {
      Lat: 34.10705,
      Long: 35.65018333333333,
      spotName: "Board n Surf",
    },
  },
  6102: {
    spot: { Lat: -13.186033333333333, Long: 40.5605, spotName: "Diamonds" },
  },
  6103: {
    spot: {
      Lat: 43.13336666666667,
      Long: 5.779766666666667,
      spotName: "Grande plage de Bandol",
    },
  },
  6104: {
    spot: {
      Lat: -51.69636666666667,
      Long: -57.77863333333333,
      spotName: "Surf Bay",
    },
  },
  6105: {
    spot: {
      Lat: 22.954383333333332,
      Long: 121.29613333333333,
      spotName: "Jinzun Harbour",
    },
  },
  6106: {
    spot: {
      Lat: -23.160316666666667,
      Long: 150.97836666666666,
      spotName: "Great Keppel Island (Unknown Reef)",
    },
  },
  6107: {
    spot: {
      Lat: -23.191533333333332,
      Long: 150.93481666666668,
      spotName: "Great Keppel Island Airport",
    },
  },
  6108: {
    spot: { Lat: -38.5607, Long: 143.97873333333334, spotName: "st george" },
  },
  6109: {
    spot: {
      Lat: -26.007833333333334,
      Long: -48.60406666666667,
      spotName: "Barra do sai mirim",
    },
  },
  6110: { spot: { Lat: -3.9413, Long: -38.29225, spotName: "Iguape Meio" } },
  6111: {
    spot: {
      Lat: 9.601266666666668,
      Long: -75.57166666666667,
      spotName: "El frances",
    },
  },
  6112: {
    spot: { Lat: -25.4763, Long: 32.971666666666664, spotName: "Maragra" },
  },
  6113: {
    spot: {
      Lat: 28.376,
      Long: -16.807266666666667,
      spotName: "la caseta del telegrapho",
    },
  },
  6114: {
    spot: { Lat: 47.97665, Long: -4.447616666666667, spotName: "Shaka" },
  },
  6115: { spot: { Lat: 35.8491, Long: 14.5713, spotName: "PlayGround" } },
  6116: {
    spot: {
      Lat: 37.232533333333336,
      Long: 13.621366666666667,
      spotName: "Cannatello",
    },
  },
  6117: {
    spot: {
      Lat: 40.14881666666667,
      Long: -8.868,
      spotName: "Figueira da Foz",
    },
  },
  6118: {
    spot: {
      Lat: -16.695083333333333,
      Long: -145.35143333333335,
      spotName: "Faaite",
    },
  },
  6119: {
    spot: { Lat: 25.13435, Long: 61.180033333333334, spotName: "Beris" },
  },
  6120: {
    spot: { Lat: 24.8271, Long: 66.66216666666666, spotName: "Cape Monz" },
  },
  6121: {
    spot: {
      Lat: 13.48345,
      Long: -89.35218333333333,
      spotName: "Playa El Cocal",
    },
  },
  6122: {
    spot: {
      Lat: 21.595266666666667,
      Long: -158.11473333333333,
      spotName: "Avalanche Oahu",
    },
  },
  6123: {
    spot: {
      Lat: -1.9903833333333334,
      Long: 99.55923333333334,
      spotName: "Tikus",
    },
  },
  6124: {
    spot: {
      Lat: 35.63516666666666,
      Long: -121.19386666666666,
      spotName: "San Simeon Point",
    },
  },
  6125: {
    spot: { Lat: 56.98195, Long: 8.404966666666667, spotName: "bogsted" },
  },
  6126: {
    spot: {
      Lat: 44.82136666666667,
      Long: 34.86881666666667,
      spotName: "Radostniy",
    },
  },
  6127: { spot: { Lat: -7.3613, Long: -34.7984, spotName: "Tambaba" } },
  6128: {
    spot: {
      Lat: 5.9120333333333335,
      Long: 0.9952500000000001,
      spotName: "Keta point",
    },
  },
  6129: {
    spot: {
      Lat: 44.06581666666667,
      Long: -64.58223333333333,
      spotName: "Blueberry Bay",
    },
  },
  6130: {
    spot: {
      Lat: 35.503816666666665,
      Long: 35.7684,
      spotName: "Latakia corniche",
    },
  },
  6131: {
    spot: {
      Lat: 35.565933333333334,
      Long: 35.73531666666667,
      spotName: "Mosque point",
    },
  },
  6132: {
    spot: {
      Lat: 35.85328333333333,
      Long: 35.82738333333333,
      spotName: "Ras al basit",
    },
  },
  6133: {
    spot: {
      Lat: -23.034583333333334,
      Long: -43.488733333333336,
      spotName: "CcB",
    },
  },
  6134: {
    spot: {
      Lat: -23.023633333333333,
      Long: -43.448233333333334,
      spotName: "Recreio Posto 9",
    },
  },
  6135: {
    spot: {
      Lat: -34.222566666666665,
      Long: 115.01063333333333,
      spotName: "albinos",
    },
  },
  6136: {
    spot: {
      Lat: -34.36995,
      Long: 18.876466666666666,
      spotName: "Silver Sands",
    },
  },
  6137: {
    spot: {
      Lat: -32.88955,
      Long: -71.51623333333333,
      spotName: "Punta Piedra",
    },
  },
  6138: { spot: { Lat: 36.131, Long: -5.8446, spotName: "Zahara Redtuna" } },
  6139: { spot: { Lat: 25.2185, Long: 63.49865, spotName: "Ras Jaddi" } },
  6140: {
    spot: { Lat: 44.61065, Long: -63.420433333333335, spotName: "osbourne" },
  },
  6141: {
    spot: {
      Lat: 46.18881666666667,
      Long: -1.4263333333333332,
      spotName: "Ile de Ré - La Couarde",
    },
  },
  6142: {
    spot: {
      Lat: 32.26063333333333,
      Long: -116.99186666666667,
      spotName: "Terasa'sTrailerPark",
    },
  },
  6143: {
    spot: { Lat: -4.241516666666667, Long: 152.4235, spotName: "Saffas" },
  },
  6144: {
    spot: {
      Lat: -32.63738333333333,
      Long: 115.61751666666666,
      spotName: "Codac's reef",
    },
  },
  6145: {
    spot: {
      Lat: 32.69981666666666,
      Long: -17.13475,
      spotName: "Madalena do mar",
    },
  },
  6146: {
    spot: { Lat: 32.8418, Long: -17.140316666666667, spotName: "Contreira" },
  },
  6147: {
    spot: {
      Lat: 32.119233333333334,
      Long: -116.88291666666667,
      spotName: "alisitos",
    },
  },
  6148: {
    spot: {
      Lat: 8.608966666666667,
      Long: -79.74058333333333,
      spotName: "Chame Banks",
    },
  },
  6149: {
    spot: {
      Lat: 47.87201666666667,
      Long: -4.360716666666667,
      spotName: "Prad ar C'hastell",
    },
  },
  6150: {
    spot: { Lat: 37.09615, Long: -8.388633333333333, spotName: "PRAIA NOVA" },
  },
  6151: {
    spot: {
      Lat: 43.115316666666665,
      Long: 5.7885,
      spotName: "Plage de Portisol",
    },
  },
  6152: {
    spot: {
      Lat: 45.328783333333334,
      Long: 32.982866666666666,
      spotName: "Donuzlove",
    },
  },
  6153: {
    spot: {
      Lat: -1.9054666666666669,
      Long: 99.31673333333333,
      spotName: "A Frames",
    },
  },
  6154: {
    spot: {
      Lat: -32.084783333333334,
      Long: 115.74925,
      spotName: "Hamilton Crazies",
    },
  },
  6155: { spot: { Lat: 25.20945, Long: 62.19215, spotName: "Gwadar west" } },
  6156: {
    spot: {
      Lat: 25.162433333333333,
      Long: 66.74573333333333,
      spotName: "Sonmiana left",
    },
  },
  6157: {
    spot: {
      Lat: 6.396216666666667,
      Long: 80.00451666666666,
      spotName: "Rockside Induruwa",
    },
  },
  6158: {
    spot: {
      Lat: 44.66738333333333,
      Long: -63.25241666666667,
      spotName: "Seals",
    },
  },
  6159: {
    spot: {
      Lat: 51.803333333333335,
      Long: -10.175633333333334,
      spotName: "Ardkeragh",
    },
  },
  6160: {
    spot: {
      Lat: 54.29493333333333,
      Long: -8.977683333333333,
      spotName: "Gaa",
    },
  },
  6161: {
    spot: { Lat: 30.51505, Long: -9.688983333333333, spotName: "Crocro" },
  },
  6162: {
    spot: {
      Lat: -41.99255,
      Long: 148.28623333333334,
      spotName: "Friendly Beaches",
    },
  },
  6163: {
    spot: {
      Lat: -23.863433333333333,
      Long: -46.1308,
      spotName: "praia branca",
    },
  },
  6164: {
    spot: {
      Lat: 4.9873666666666665,
      Long: -2.59645,
      spotName: "Beyin Beach Resort ",
    },
  },
  6165: { spot: { Lat: 34.57965, Long: 127.4888, spotName: "NamYeol" } },
  6166: {
    spot: {
      Lat: 5.330816666666666,
      Long: 73.46493333333333,
      spotName: "bodu kanmathi",
    },
  },
  6167: {
    spot: {
      Lat: 4.80035,
      Long: -1.9381333333333333,
      spotName: "Black Mamba",
    },
  },
  6168: {
    spot: { Lat: 40.5813, Long: 50.06633333333333, spotName: "Bilgah beach" },
  },
  6169: { spot: { Lat: -3.8155, Long: 102.263, spotName: "Bengkuku Beach" } },
  6170: { spot: { Lat: -7.63295, Long: 13.02165, spotName: "Quimavongo" } },
  6171: {
    spot: {
      Lat: 29.181633333333334,
      Long: -114.75286666666666,
      spotName: "four spot",
    },
  },
  6172: {
    spot: {
      Lat: 5.9709666666666665,
      Long: 80.36583333333333,
      spotName: "LAMANA POINT",
    },
  },
  6173: {
    spot: { Lat: 50.52466666666667, Long: 1.57925, spotName: "Le Touquet" },
  },
  6174: { spot: { Lat: 30.41225, Long: -9.60485, spotName: "Marhina" } },
  6175: {
    spot: {
      Lat: -33.36771666666667,
      Long: 151.4977,
      spotName: "Shelly Reef",
    },
  },
  6176: {
    spot: {
      Lat: -20.0555,
      Long: 57.521233333333335,
      spotName: "Pointe aux piments - Recif Attitude",
    },
  },
  6177: {
    spot: {
      Lat: 51.37936666666667,
      Long: 3.3842166666666667,
      spotName: "Cadzand",
    },
  },
  6178: {
    spot: { Lat: 28.484333333333332, Long: 48.49725, spotName: "Khafji " },
  },
  6179: {
    spot: {
      Lat: 29.205383333333334,
      Long: -13.503333333333334,
      spotName: "Mini pipe",
    },
  },
  6180: {
    spot: {
      Lat: -24.695066666666666,
      Long: -124.79128333333334,
      spotName: "Pandora's left",
    },
  },
  6181: {
    spot: {
      Lat: -33.29168333333333,
      Long: 151.5726,
      spotName: "Norah's point",
    },
  },
  6182: {
    spot: {
      Lat: 53.46393333333333,
      Long: 5.804016666666667,
      spotName: "Strand Buren",
    },
  },
  6183: {
    spot: {
      Lat: -9.762716666666666,
      Long: 119.33206666666666,
      spotName: "Alan Shearer's Right",
    },
  },
  6184: {
    spot: { Lat: -26.8587, Long: -48.634616666666666, spotName: "Garrincha" },
  },
  6185: {
    spot: { Lat: -41.21955, Long: 174.71338333333333, spotName: "Makara" },
  },
  6186: {
    spot: {
      Lat: 43.319916666666664,
      Long: -2.0046666666666666,
      spotName: "La Concha",
    },
  },
  6187: {
    spot: {
      Lat: 31.553083333333333,
      Long: 34.459066666666665,
      spotName: "Gaza",
    },
  },
  6188: {
    spot: {
      Lat: 10.289283333333334,
      Long: -109.20688333333334,
      spotName: "Ancienne pass",
    },
  },
  6189: {
    spot: { Lat: -35.167366666666666, Long: 137.6788, spotName: "Goldies" },
  },
  6190: { spot: { Lat: 55.18931666666667, Long: 20.84815, spotName: "Wef" } },
  6191: {
    spot: {
      Lat: -34.35556666666667,
      Long: 21.880716666666668,
      spotName: "Tidle Pool",
    },
  },
  6192: {
    spot: {
      Lat: 41.97725,
      Long: -87.64395,
      spotName: "Montrose-Foster beach",
    },
  },
  6193: {
    spot: {
      Lat: 31.4253,
      Long: 34.33768333333333,
      spotName: "Deir al Balah",
    },
  },
  6194: {
    spot: { Lat: 15.1254, Long: -23.20415, spotName: "Ponte preta beach" },
  },
  6195: {
    spot: { Lat: 26.7273, Long: 50.07261666666667, spotName: "Aramco beach" },
  },
  6196: {
    spot: {
      Lat: 21.59455,
      Long: -158.1147,
      spotName: "Avalanche WALLS  - right",
    },
  },
  6197: {
    spot: {
      Lat: 14.915033333333334,
      Long: -23.60955,
      spotName: "Cidade Velha",
    },
  },
  6198: {
    spot: { Lat: 43.431133333333335, Long: -2.7394, spotName: "El Basurero" },
  },
  6199: {
    spot: { Lat: 38.75985, Long: 1.4435, spotName: "Playa de Levante" },
  },
  6200: {
    spot: {
      Lat: 31.353316666666668,
      Long: 34.25488333333333,
      spotName: "Al Mawasi",
    },
  },
  6201: {
    spot: { Lat: -4.111, Long: -81.07178333333333, spotName: "Las Pocitas" },
  },
  6202: {
    spot: { Lat: 50.7147, Long: 1.5714000000000001, spotName: "Le Portel" },
  },
  6203: {
    spot: {
      Lat: -9.760816666666667,
      Long: 119.33151666666667,
      spotName: "kerewei right",
    },
  },
  6204: {
    spot: {
      Lat: -33.321416666666664,
      Long: 151.52018333333334,
      spotName: "Tradies",
    },
  },
  6205: {
    spot: { Lat: 43.307966666666665, Long: -2.3705, spotName: "Mutriku" },
  },
  6206: {
    spot: {
      Lat: 32.81186666666667,
      Long: -118.41138333333333,
      spotName: "PYRAMID POINT ?",
    },
  },
  6207: {
    spot: { Lat: 2.4823833333333334, Long: 96.18995, spotName: "Inor" },
  },
  6208: { spot: { Lat: 50.6366, Long: 1.57565, spotName: "Hardelot plage" } },
  6209: {
    spot: {
      Lat: 42.77493333333334,
      Long: -86.2134,
      spotName: "Holland North Pier",
    },
  },
  6210: {
    spot: {
      Lat: 37.33538333333333,
      Long: 9.761266666666666,
      spotName: "ras enjela",
    },
  },
  6211: {
    spot: {
      Lat: 43.31721666666667,
      Long: -2.002283333333333,
      spotName: "Ondareeta",
    },
  },
  6212: { spot: { Lat: 1.22, Long: 103.48, spotName: "Mushys" } },
  6213: {
    spot: {
      Lat: -5.889783333333334,
      Long: 12.293733333333334,
      spotName: "Pointe Falaise",
    },
  },
  6214: {
    spot: {
      Lat: 53.1898,
      Long: -3.841283333333333,
      spotName: "Surf Snowdoina",
    },
  },
};

async function initMap() {
  var script_tag = document.getElementById("mapsId");
  //var pos = script_tag.getAttribute("Pos");
  //var surfspots = script_tag.getAttribute("surfspotsForMap");
  let surfspots = markerSpots;
  console.log(surfspots);
  /*we get here if the string is not valid coordinates or format is inconsistent between lat and long*/

  const spot = {
    lat: 0,
    lng: 0,
  };
  // The map, centered at the surfSpot
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: spot,
    mapTypeId: "hybrid",
  });
  //The marker, positioned at the surfSpot

  for (let i = 0; i < 6215; i++) {
    const pos = {
      lat: Number.parseFloat(surfspots[i].spot.Lat),
      lng: Number.parseFloat(surfspots[i].spot.Long),
    };
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
    });
  }
}

window.initMap = initMap;
