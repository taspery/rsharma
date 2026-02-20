export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Arduino Uno R4 WiFi",
    description:
      "The latest Arduino Uno with onboard WiFi and a 12x8 LED matrix. Perfect for IoT projects and beginners stepping up.",
    price: 59.95,
    image: "/images/products/arduino-uno-r4.jpg",
    category: "Microcontrollers & Dev Boards",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Raspberry Pi 5 (4GB)",
    description:
      "The most powerful Pi yet. Ideal for retro gaming, home servers, AI tinkering, and desktop use.",
    price: 119.95,
    image: "/images/products/raspberry-pi-5.jpg",
    category: "Single-Board Computers",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "DHT22 Temperature & Humidity Sensor",
    description:
      "Reliable digital sensor for weather stations, terrariums, and home automation builds.",
    price: 8.95,
    image: "/images/products/dht22-sensor.jpg",
    category: "Sensors & Modules",
    inStock: true,
  },
  {
    id: 4,
    name: '0.96" OLED Display Module (I2C)',
    description:
      "Compact, bright, and easy to wire up. Works with Arduino and Pi out of the box.",
    price: 9.5,
    image: "/images/products/oled-display.jpg",
    category: "Displays & Screens",
    inStock: true,
  },
  {
    id: 5,
    name: "HC-SR04 Ultrasonic Distance Sensor",
    description:
      "A maker staple. Great for obstacle detection, robotics, and interactive installations.",
    price: 6.95,
    image: "/images/products/hc-sr04.jpg",
    category: "Sensors & Modules",
    inStock: true,
  },
  {
    id: 6,
    name: "ESP32 Development Board",
    description:
      "Dual-core, WiFi + Bluetooth, dirt cheap. The backbone of countless IoT and smart home projects.",
    price: 19.95,
    image: "/images/products/esp32-board.jpg",
    category: "Microcontrollers & Dev Boards",
    inStock: true,
    featured: true,
  },
  {
    id: 7,
    name: "Maker Starter Kit — Arduino Edition",
    description:
      "Includes an Uno R3, breadboard, jumper wires, resistors, LEDs, and a getting-started guide. Everything needed to build your first circuit.",
    price: 49.95,
    image: "/images/products/starter-kit.jpg",
    category: "Starter Kits & Bundles",
    inStock: true,
    featured: true,
  },
  {
    id: 8,
    name: "PIR Motion Sensor Module",
    description:
      "Passive infrared sensor for detecting movement. Used in security systems, automatic lights, and interactive projects.",
    price: 7.5,
    image: "/images/products/pir-sensor.jpg",
    category: "Sensors & Modules",
    inStock: true,
  },
  {
    id: 9,
    name: "Breadboard 830-Point",
    description:
      "Full-size solderless breadboard. A workshop essential for prototyping and testing circuits without committing to solder.",
    price: 5.95,
    image: "/images/products/breadboard.jpg",
    category: "Cables, Connectors & Accessories",
    inStock: true,
  },
  {
    id: 10,
    name: "40-Pin GPIO Ribbon Cable (Raspberry Pi)",
    description:
      "20cm rainbow ribbon cable for connecting your Pi GPIO to a breadboard cleanly and safely.",
    price: 6.5,
    image: "/images/products/gpio-cable.jpg",
    category: "Cables, Connectors & Accessories",
    inStock: true,
  },
]

export const categories = [
  "All Products",
  "Microcontrollers & Dev Boards",
  "Single-Board Computers",
  "Sensors & Modules",
  "Displays & Screens",
  "Cables, Connectors & Accessories",
  "Starter Kits & Bundles",
] as const

export type Category = (typeof categories)[number]
