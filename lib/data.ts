export interface Event {
  id: string
  title: string
  brand: string
  date: string
  location: string
  role: string
  description: string
  images: string[]
  category: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export const events: Event[] = [
  
  {
    id: "sui-community-night",
    title: "Sui Community Night",
    brand: "Sui Network",
    date: "January 25, 2025",
    location: "Kurma Community Basecamp",
    role: "Brand Ambassador",
    description:
      "​​This event aims to introduce blockchain, especially on the Sui Network. So that all members can get all the information about Sui, and can also try all the ecosystems in Sui and get a financial opportunity from the Sui ecosystem.",

    images: ["/SuiNetwork.avif"],
    category: "Sui Community",
  },
  {
    id: "degen-meetup-sui-enclavium",
    title: "Degen Meetup: Sui x Enclavium",
    brand: "Sui Network",
    date: "Febuary 22, 2025",
    location: "ABBS Bogor",
    role: "Event Host & Ambassador",
    description:
      "​Acara ini akan membahas Degen/ memecoin pada Blockchain Sui, aplikasi apa saja yang diperlukan saat akan melakukan degen di Sui dan ada pengenalan singkat tentang Walrus Protocol Suilend serta SuiPlay.",

    images: ["/nike-marathon-event-with-runners-at-starting-line.jpg", "/sports-brand-ambassador-at-running-event.jpg", "/marathon-celebration-with-athletes.jpg"],
    category: "Sports",
  },
  {
    id: "sui-ramadan-meetup-depok",
    title: "Sui Ramadan Meetup Depok",
    brand: "Sui Network",
    date: "Maret 23, 2025",
    location: "Köde-în coffee and eatery",
    role: "Event Host & Ambassador",
    description:
      "​Acara kali ini kita akan ngobrolin Walrus Protocol secara mendalam. Ga hanya itu saja kawan, kita juga akan memperkenalkan DeFi favorite yaitu Suilend, serta memperkenalkan SuiPlay, sebuah handheld gaming dari Sui.",

    images: ["/auto-show-with-sleek-car-display-and-ambient-light.jpg", "/brand-ambassador-presenting-new-car-model.jpg", "/modern-vehicle-showcase-at-auto-exhibition.jpg"],
    category: "Sui Network",
  },
  {
    id: "suiplay0x1-meetup",
    title: "Sui Indonesia Meetup: SuiPlay0X1 Vibes",
    brand: "Sui Network",
    date: "Apri 26, 2025",
    location: "NutriHub Bogor",
    role: "Event Host & Ambassador",
    description:
      "​Acara kali ini kita akan ngobrolin SuiPlay0X1 secara mendalam.​​Ga hanya itu saja, kita juga akan ngobrol bareng mengenai GameFi dan juga membahas beberapa game yang ada di Blockchain Sui, serta akan ada juga sebuah workshop komunitas agar kita bisa mengenal lebih dekat satu dengan yang lainnya 😁",
    images: [
      "/apple-store-opening-with-minimalist-design.jpg",
      "/tech-specialist-helping-customer-with-apple-produc.jpg", 
      "/premium-retail-store-with-modern-displays.jpg"],
    category: "Tech",
  },
  {
    id: "sui-indonesia-meetup-easy-to-use-slush-wallet",
    title: "Sui Indonesia Meetup: Easy to use Slush Wallet",
    brand: "Sui Network",
    date: "Mei 25, 2025",
    location: "The Ritz-Carlton",
    role: "Event Host & Ambassador",
    description:
      "​Acara kali ini kita akan ngobrol santai seputar dunia Web3. Dengan adanya Slush Wallet semua menjadi mudah.​​Ga hanya itu saja, kita juga akan ngobrol bareng mengenai beberapa ekosistem yang ada di Blockchain Sui, serta akan ada sebuah workshop komunitas agar kita bisa mengenal lebih dekat satu dengan yang lainnya 😁",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Fashion",
  },
    {
    id: "sui-indonesia-meetup-defi-on-sui",
    title: "Sui Indonesia Meetup: Explore DeFi on Sui",
    brand: "Sui Network",
    date: "Juni 29, 2025",
    location: "Cascade Kofy",
    role: "Event Host & Ambassador",
    description:
      "Kali ini Sui Indonesia akan ngobrolin tentang Decentralized Finance (DeFi), dalam rangkaian acara ini akan lebih fokus membahas bagaimana cara menggunakan teknologi DeFi yang berjalan pada ekosistem Sui, khususnya Lending - Borrowing dst.​Ga hanya itu saja, acara ini kita jadikan sebagai tempat silaturahmi antar Sui Maxi, Web3 Enthusiast, dan juga bagi kamu yang baru memulai terjun ke dunia Web3, serta sarana untuk saling mengenal lebih dekat ",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Fashion",
  },
     {
    id: "sui-indonesia-meetup-btcfi-on-sui",
    title: "Sui Indonesia Meetup: BTCfi on Sui",
    brand: "Sui Network",
    date: "Juli 26, 2025",
    location: "Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta",
    role: "Event Host & Ambassador",
    description:
      "Kali ini Sui Indonesia akan ngobrolin tentang Decentralized Finance (DeFi), dalam rangkaian acara ini akan lebih fokus membahas bagaimana cara menggunakan teknologi DeFi yang berjalan pada ekosistem Sui, khususnya Lending - Borrowing dst.​Ga hanya itu saja, acara ini kita jadikan sebagai tempat silaturahmi antar Sui Maxi, Web3 Enthusiast, dan juga bagi kamu yang baru memulai terjun ke dunia Web3, serta sarana untuk saling mengenal lebih dekat ",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
   {
    id: "sui-indonesia-meetup-seal-night",
    title: "Sui Indonesia Meetup: SEAL NIGHT🦭",
    brand: "Sui Network",
    date: "September 21, 2025",
    location: "Areneo Cafe",
    role: "Event Host & Ambassador",
    description:
      "Kali ini Sui Indonesia akan ngobrolin tentang SEAL, adalah layanan manajemen rahasia terdesentralisasi yang menghadirkan enkripsi + kontrol akses pintar ke aplikasi Web3.​​​​​Ga hanya itu saja, acara ini kita jadikan sebagai tempat silaturahmi antar Sui Maxi, Web3 Enthusiast, dan juga bagi kamu yang baru memulai terjun ke dunia Web3, serta sarana untuk saling mengenal lebih dekat satu sama lain 😁",
          images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
     {
    id: "sui-indonesia-meetup-sui-in-touch",
    title: "Sui Indonesia Meetup: Sui in Touch",
    brand: "Sui Network",
    date: "October 11, 2025",
    location: "Walking Drums Margonda Depok",
    role: "Event Host & Ambassador",
    description:
      "​Sui Network adalah blockchain Layer 1 berperforma tinggi yang dikembangkan oleh Mysten Labs. Diciptakan untuk adopsi massal, Sui menggunakan model data berbasis (objek) dan bahasa pemrograman Move.Arsitektur unik ini memungkinkan Sui memproses transaksi secara paralel, menghasilkan kecepatan yang luar biasa, latensi rendah, dan biaya yang terjangkau. Hal ini membuatnya sangat ideal untuk aplikasi skala besar seperti game Web3, DeFi, dan aset on-chain yang dinamis. Tujuannya adalah untuk memberikan fondasi yang aman dan dapat diskalakan untuk miliaran pengguna berikutnya di Web3.",
          images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
       {
    id: "sui-indonesia-meetup-sui-in-touch-2",
    title: "Sui Indonesia Meetup: Sui in Touch",
    brand: "Sui Network",
    date: "October 18, 2025",
    location: "Semoet Coffee",
    role: "Event Host & Ambassador",
    description:
      "Kali ini Sui Indonesia mau ngobrolin tentang Sui Stack, apa itu Sui Stack? Jadi lebih ke memperkenalkan beberapa inovasi yang ada pada Blockchain Sui, seperti Blockchain Sui itu sendiri, SuiNS, Deepbook, Walrus, Seal dan juga Nautilus.​​​​​Ga hanya itu saja, acara ini kita jadikan sebagai tempat silaturahmi antar Sui Maxi, Web3 Enthusiast, dan juga bagi kamu yang baru memulai terjun ke dunia Web3, serta sarana untuk saling mengenal lebih dekat satu sama lain 😁",
                images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
         {
    id: "sui-indonesia-meetup-gamefi-rooftop",
    title: "Sui Indonesia Meetup: GameFi Rooftop",
    brand: "Sui Network",
    date: "October 26, 2025",
    location: "Tamelo Atap Coffee",
    role: "Event Host & Ambassador",
    description:
      "​Sui Network adalah blockchain Layer 1 berperforma tinggi yang dikembangkan oleh Mysten Labs. Diciptakan untuk adopsi massal, Sui menggunakan model data berbasis objek dan bahasa pemrograman Move.​Blockchain Sui ideal untuk gaming berkat pemrosesan transaksi paralel yang memberikan latensi sangat rendah untuk pengalaman bermain yang mulus dan cepat. Arsitektur berbasis objeknya menjadikan setiap aset game sebagai NFT unik milik pemain. Biaya gas yang rendah membuat jutaan transaksi menjadi ekonomis.",
                      images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
           {
    id: "sui-indonesia-meetup-trivtalks",
    title: "#TrivTalks : Membangun Keyakinan Investasi Jangka Panjang: Investasi bersama TRIV Exchange.",
    brand: "Sui Network",
    date: "November 25, 2025",
    location: "Walking Drums Margonda Depok",
    role: "Event Host & Ambassador",
    description:
      "​Yoo guys! kali ini, #Trivtalks kembali lagi untuk mengadakan sebuah diskusi di kota Depok! Dunia aset digital terus berkembang, dan kini saatnya Anda memperkuat strategi investasi dengan wawasan yang lebih matang dan terarah. Dalam #TrivTalks edisi spesial ini, TRIV berkolaborasi dengan komunitas SUI Indonesia untuk menghadirkan diskusi yang membuka peluang serta pemahaman mendalam mengenai investasi jangka panjang di ekosistem SUI.",
                                  images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
             {
    id: "sui-indonesia-code-lets-move-day-1",
    title: "Sui Indonesia Code: LET'S MOVE [DAY 1]",
    brand: "Sui Network",
    date: "November 29, 2025",
    location: "Walking Drums Margonda Depok",
    role: "Event Host & Ambassador",
    description:
      "​Hari spesial bersama Sui Network, workshop ini bertujuan untuk memperkenalkan bahasa pemrograman Sui Move dan membangun dApp di Blockchain Sui dalam 2 hari! ( Hanya untuk Developer Web2/Web3 )​​​​​Kami mengundang pengembang Web3 di Kota Jakarta untuk bergabung dalam kelas ini. Tempat terbatas. Persyaratan minimal adalah memiliki pengetahuan dasar tentang JavaScript, Solidity, Rust dll.",
                                       images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
               {
    id: "sui-indonesia-code-lets-move-day-2",
    title: "Sui Indonesia Code: LET'S MOVE [DAY 2]",
    brand: "Sui Network",
    date: "November 29, 2025",
    location: "Walking Drums Margonda Depok",
    role: "Event Host & Ambassador",
    description:
      "​Hari spesial bersama Sui Network, workshop ini bertujuan untuk memperkenalkan bahasa pemrograman Sui Move dan membangun dApp di Blockchain Sui dalam 2 hari! ( Hanya untuk Developer Web2/Web3 )​​​​​Kami mengundang pengembang Web3 di Kota Jakarta untuk bergabung dalam kelas ini. Tempat terbatas. Persyaratan minimal adalah memiliki pengetahuan dasar tentang JavaScript, Solidity, Rust dll.",
      images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sui Network",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "Samsung Indonesia",
    content:
      "An exceptional brand ambassador who truly embodies our brand values. The level of professionalism and engagement at our Galaxy launch was outstanding. We saw a 40% increase in product demo conversions.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Hartono",
    role: "Event Manager",
    company: "Nike Southeast Asia",
    content:
      "The energy and enthusiasm brought to our marathon event was incredible. Thousands of runners were motivated by the inspiring hosting style. Already planning future collaborations.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "3",
    name: "Lisa Wijaya",
    role: "Brand Manager",
    company: "L'Oréal Paris",
    content:
      "A natural communicator with deep product knowledge. The beauty workshops were a huge success, and the social media content generated significant engagement for our brand.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kusuma",
    role: "Sales Director",
    company: "Toyota Indonesia",
    content:
      "Impressed by the detailed product knowledge and ability to connect with diverse customers. Our auto show booth had record-breaking visitor engagement thanks to this talented ambassador.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "5",
    name: "Amanda Lee",
    role: "PR Manager",
    company: "Apple Indonesia",
    content:
      "The warmth and expertise displayed during our store opening created unforgettable experiences for customers. A true professional who elevates every event.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export const stats = [
  { label: "Events Completed", value: "14+", icon: "calendar" },
  { label: "Brands Represented", value: "45+", icon: "briefcase" },
  { label: "Years Experience", value: "8+", icon: "award" },
  { label: "Happy Clients", value: "100%", icon: "heart" },
]

export const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=600&width=800", category: "Tech" },
  { id: 2, src: "/placeholder.svg?height=800&width=600", category: "Portrait" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", category: "Beauty" },
  { id: 4, src: "/placeholder.svg?height=600&width=800", category: "Sports" },
  { id: 5, src: "/placeholder.svg?height=800&width=600", category: "Fashion" },
  { id: 6, src: "/placeholder.svg?height=600&width=800", category: "Tech" },
  { id: 7, src: "/placeholder.svg?height=600&width=800", category: "Corporate" },
  { id: 8, src: "/placeholder.svg?height=800&width=600", category: "Portrait" },
  { id: 9, src: "/placeholder.svg?height=600&width=800", category: "Automotive" },
  { id: 10, src: "/placeholder.svg?height=600&width=800", category: "Lifestyle" },
  { id: 11, src: "/placeholder.svg?height=800&width=600", category: "Events" },
  { id: 12, src: "/placeholder.svg?height=600&width=800", category: "Activation" },
]
