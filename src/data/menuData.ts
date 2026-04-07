export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  priceFrom?: boolean;
  category: string;
  image?: string;
  featured?: boolean;
  unavailable?: boolean;
  options?: MenuOption[];
}

export interface MenuOption {
  name: string;
  choices: { label: string; priceAdd: number }[];
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
}

export const categories: MenuCategory[] = [
  { id: "beliebt", name: "Beliebt" },
  { id: "salate", name: "Salate" },
  { id: "pizza", name: "Pizza", note: "Alle Pizzen mit Tomatensoße und Käse" },
  { id: "taschenpizza", name: "Taschenpizza" },
  { id: "rollos", name: "Rollos" },
  { id: "tellergerichte", name: "Tellergerichte" },
  { id: "pasta", name: "Pasta & Aufläufe" },
  { id: "kebab", name: "Kebab" },
  { id: "snacks", name: "Snacks" },
  { id: "getraenke", name: "Alkoholfreie Getränke" },
];

export const menuItems: MenuItem[] = [
  // Beliebt
  { id: "b1", name: "Pizza Kebab", description: "mit Dönerfleisch, Zwiebeln, Paprika", price: 10.50, category: "beliebt", featured: true, options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "b2", name: "Mo's Pizza", description: "Spezialbelag nach Hausrezept", price: 11.00, category: "beliebt", featured: true, options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "b3", name: "Mo's Rollo", description: "Dönerfleisch, Salat, Soße, Spezial", price: 8.50, category: "beliebt", featured: true },
  { id: "b4", name: "Kebab-Teller", description: "Dönerfleisch, Reis, Salat, Soße", price: 12.00, category: "beliebt", featured: true },
  { id: "b5", name: "Mo's Teller", description: "Spezial-Teller nach Hausrezept", price: 13.00, category: "beliebt", featured: true },
  { id: "b6", name: "Mo's Auflauf", description: "Überbacken nach Hausrezept", price: 10.50, category: "beliebt", featured: true },

  // Salate
  { id: "s1", name: "Gemischter Salat", description: "Blattsalat, Gurke, Tomaten, Mais", price: 5.50, category: "salate" },
  { id: "s2", name: "Bauernsalat", description: "mit Schafskäse und Oliven", price: 7.00, category: "salate" },
  { id: "s3", name: "Salat mit Dönerfleisch", description: "Blattsalat mit Dönerfleisch", price: 9.00, category: "salate" },

  // Pizza
  { id: "p1", name: "Pizza Margherita", description: "Tomatensoße, Käse", price: 7.00, category: "pizza", options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "p2", name: "Pizza Salami", description: "mit Salami", price: 8.00, category: "pizza", featured: true, options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "p3", name: "Pizza Funghi", description: "mit frischen Champignons", price: 8.00, category: "pizza", options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "p4", name: "Pizza Tonno", description: "mit Thunfisch und Zwiebeln", price: 8.50, category: "pizza", options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "p5", name: "Pizza Hawaii", description: "mit Schinken und Ananas", price: 8.50, category: "pizza", options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "p6", name: "Pizza Inferno", description: "Scharf! mit Peperoni, Jalapeños, Chilisauce", price: 9.50, category: "pizza", featured: true, options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "p7", name: "Pizza Vito", description: "Scharf! Spezialbelag", price: 10.00, category: "pizza", featured: true, options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },
  { id: "p8", name: "Pizza Quattro Stagioni", description: "Vier Jahreszeiten", price: 9.50, category: "pizza", options: [{ name: "Größe", choices: [{ label: "26cm", priceAdd: 0 }, { label: "30cm", priceAdd: 2 }, { label: "40cm", priceAdd: 5 }] }] },

  // Taschenpizza
  { id: "tp1", name: "Taschenpizza Salami", description: "Gefüllte Taschenpizza", price: 7.00, category: "taschenpizza" },
  { id: "tp2", name: "Taschenpizza Döner", description: "Gefüllt mit Dönerfleisch", price: 8.00, category: "taschenpizza" },

  // Rollos
  { id: "r1", name: "Döner Rollo", description: "Dönerfleisch, Salat, Soße", price: 7.00, category: "rollos" },
  { id: "r2", name: "Mo's Rollo", description: "Spezial nach Hausrezept", price: 8.50, category: "rollos", featured: true },
  { id: "r3", name: "Vegetarischer Rollo", description: "mit Falafel und Gemüse", price: 7.00, category: "rollos" },

  // Tellergerichte
  { id: "t1", name: "Kebab-Teller", description: "Dönerfleisch, Reis, Salat, Soße", price: 12.00, category: "tellergerichte", featured: true },
  { id: "t2", name: "Mo's Teller", description: "Spezial nach Hausrezept", price: 13.00, category: "tellergerichte", featured: true },
  { id: "t3", name: "Falafel-Teller", description: "Falafel, Reis, Salat, Hummus", price: 10.00, category: "tellergerichte" },
  { id: "t4", name: "Schnitzel-Teller", description: "mit Pommes und Salat", price: 11.00, category: "tellergerichte" },

  // Pasta & Aufläufe
  { id: "pa1", name: "Spaghetti Bolognese", description: "mit Hackfleischsoße", price: 8.50, category: "pasta" },
  { id: "pa2", name: "Penne al Forno", description: "Überbacken mit Käse", price: 9.00, category: "pasta" },
  { id: "pa3", name: "Mo's Auflauf", description: "Spezial überbacken nach Hausrezept", price: 10.50, category: "pasta", featured: true },
  { id: "pa4", name: "Lasagne", description: "Klassisch mit Hackfleisch", price: 9.50, category: "pasta" },

  // Kebab
  { id: "k1", name: "Döner Kebab", description: "im Fladenbrot mit Salat und Soße", price: 7.00, category: "kebab" },
  { id: "k2", name: "Dürüm Döner", description: "im Wrap mit Salat und Soße", price: 7.50, category: "kebab" },
  { id: "k3", name: "Döner Box", description: "Dönerfleisch mit Pommes", price: 7.50, category: "kebab" },

  // Snacks
  { id: "sn1", name: "Pommes Frites", description: "mit Ketchup oder Mayo", price: 3.50, category: "snacks" },
  { id: "sn2", name: "Chicken Nuggets", description: "6 Stück mit Soße", price: 5.50, category: "snacks" },
  { id: "sn3", name: "Falafel", description: "4 Stück mit Soße", price: 4.50, category: "snacks" },

  // Getränke
  { id: "g1", name: "Coca-Cola", description: "0,33l", price: 2.00, category: "getraenke" },
  { id: "g2", name: "Fanta", description: "0,33l", price: 2.00, category: "getraenke" },
  { id: "g3", name: "Sprite", description: "0,33l", price: 2.00, category: "getraenke" },
  { id: "g4", name: "Ayran", description: "0,25l", price: 1.50, category: "getraenke" },
  { id: "g5", name: "Wasser", description: "0,5l", price: 1.50, category: "getraenke" },
];
