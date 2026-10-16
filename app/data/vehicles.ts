export type FuelType = "Electric" | "Gasoline" | "Hybrid";

export type SellerType = "private" | "dealer";

export interface Dealership {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  location: string;
  verified: boolean;
  /** Digits only, with country code, so it can be used in a wa.me link. */
  phone: string;
  rating?: number;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  /** In miles; the UI converts to km. */
  mileage: number;
  transmission: string;
  fuelType: FuelType;
  image: string;
  location: string;
  sellerType: SellerType;
  /** Set when sellerType === "dealer". */
  dealership?: Dealership;
  /** WhatsApp number (digits only) for private sellers. */
  sellerPhone?: string;
  /** ISO date the listing was published. */
  createdAt: string;
  badge?: string;
}

/** Sample dealerships. Names and phone numbers are placeholders. */
export const DEALERSHIPS: Dealership[] = [
  {
    id: "d1",
    name: "Autohaus Punta",
    slug: "autohaus-punta",
    location: "Punta del Este, UY",
    verified: true,
    phone: "59899000001",
    rating: 4.8,
  },
  {
    id: "d2",
    name: "Montevideo Motors",
    slug: "montevideo-motors",
    location: "Montevideo, UY",
    verified: true,
    phone: "59899000002",
    rating: 4.6,
  },
  {
    id: "d3",
    name: "Costa Premium Autos",
    slug: "costa-premium-autos",
    location: "Ciudad de la Costa, UY",
    verified: true,
    phone: "59899000003",
    rating: 4.7,
  },
];

export const getDealership = (slug: string) =>
  DEALERSHIPS.find((d) => d.slug === slug);

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=1200`;

export const SAMPLE_VEHICLES: Vehicle[] = [
  {
    id: "1",
    make: "Porsche",
    model: "Taycan 4S",
    year: 2023,
    price: 94500,
    mileage: 8200,
    transmission: "Automática",
    fuelType: "Electric",
    image: img("photo-1614162692292-7ac56d7f7f1e"),
    location: "Punta del Este, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d1"),
    createdAt: "2026-10-11",
  },
  {
    id: "2",
    make: "Audi",
    model: "RS e-tron GT",
    year: 2024,
    price: 108000,
    mileage: 3400,
    transmission: "Automática",
    fuelType: "Electric",
    image: img("photo-1603584173870-7f23fdae1b7a"),
    location: "Punta del Este, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d1"),
    createdAt: "2026-10-12",
    badge: "Bajo kilometraje",
  },
  {
    id: "3",
    make: "BMW",
    model: "M4 Competition",
    year: 2022,
    price: 76900,
    mileage: 14200,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1555215695-3004980ad54e"),
    location: "Montevideo, UY",
    sellerType: "private",
    sellerPhone: "59899100003",
    createdAt: "2026-10-13",
  },
  {
    id: "4",
    make: "Mercedes-Benz",
    model: "AMG GT 63 S",
    year: 2023,
    price: 129000,
    mileage: 6800,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1618843479313-40f8afb4b4d8"),
    location: "Punta del Este, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d1"),
    createdAt: "2026-10-14",
    badge: "Historial verificado",
  },
  {
    id: "5",
    make: "Porsche",
    model: "Panamera 4S E-Hybrid",
    year: 2022,
    price: 87900,
    mileage: 15600,
    transmission: "Automática",
    fuelType: "Hybrid",
    image: img("photo-1503376780353-7e6692767b70"),
    location: "Punta del Este, UY",
    sellerType: "private",
    sellerPhone: "59899100005",
    createdAt: "2026-10-15",
  },
  {
    id: "6",
    make: "Lamborghini",
    model: "Huracán LP 580-2",
    year: 2019,
    price: 189000,
    mileage: 9400,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1511919884226-fd3cad34687c"),
    location: "Montevideo, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d2"),
    createdAt: "2026-10-16",
    badge: "Bajo kilometraje",
  },
  {
    id: "7",
    make: "McLaren",
    model: "720S",
    year: 2020,
    price: 229500,
    mileage: 5900,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1542362567-b07e54358753"),
    location: "Montevideo, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d2"),
    createdAt: "2026-10-17",
    badge: "Historial verificado",
  },
  {
    id: "8",
    make: "Audi",
    model: "RS 6 Avant",
    year: 2021,
    price: 112500,
    mileage: 18200,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1606664515524-ed2f786a0bd6"),
    location: "Ciudad de la Costa, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d3"),
    createdAt: "2026-10-18",
  },
  {
    id: "9",
    make: "Tesla",
    model: "Model 3 Performance",
    year: 2023,
    price: 41900,
    mileage: 11300,
    transmission: "Automática",
    fuelType: "Electric",
    image: img("photo-1606016159991-dfe4f2746ad5"),
    location: "Colonia del Sacramento, UY",
    sellerType: "private",
    sellerPhone: "59899100009",
    createdAt: "2026-10-19",
  },
  {
    id: "10",
    make: "BMW",
    model: "M3 Competition",
    year: 2021,
    price: 69800,
    mileage: 21400,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1549399542-7e3f8b79c341"),
    location: "Montevideo, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d2"),
    createdAt: "2026-10-20",
  },
  {
    id: "11",
    make: "Ford",
    model: "Mustang GT Premium",
    year: 2022,
    price: 43500,
    mileage: 12700,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1494976388531-d1058494cdd8"),
    location: "Ciudad de la Costa, UY",
    sellerType: "dealer",
    dealership: DEALERSHIPS.find((d) => d.id === "d3"),
    createdAt: "2026-10-21",
  },
  {
    id: "12",
    make: "Chevrolet",
    model: "Camaro ZL1",
    year: 2021,
    price: 62400,
    mileage: 9800,
    transmission: "Automática",
    fuelType: "Gasoline",
    image: img("photo-1492144534655-ae79c964c9d7"),
    location: "Maldonado, UY",
    sellerType: "private",
    sellerPhone: "59899100012",
    createdAt: "2026-10-22",
    badge: "Bajo kilometraje",
  },
];

export const vehiclesByDealer = (dealershipId: string) =>
  SAMPLE_VEHICLES.filter((v) => v.dealership?.id === dealershipId);

export const getVehicle = (id: string) =>
  SAMPLE_VEHICLES.find((v) => v.id === id);
