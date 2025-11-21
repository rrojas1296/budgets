export interface Url {
  label: string;
  link: string;
}
export interface Component {
  title: string;
  price: number;
  currency: string;
  photoUrl: string;
  urls: Url[];
}
export interface Budget {
  buttonLabel: string;
  title: string;
  currency: string;
  id: string;
  components: Component[];
}

export const budgets: Budget[] = [
  {
    id: "1",
    buttonLabel: "1440P - 8000 / 8200 Soles",
    title: "AMD RYZEN 7 9700x - NVIDIA 5070 12GB",
    currency: "S/. ",
    components: [
      {
        title: "AMD Ryzen 7 9700x",
        price: 1373.13,
        currency: "S/.",
        photoUrl:
          "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-ryzen-7-9700x.jpg",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/procesador-amd-ryzen-7-9700x-3-8ghz-hasta-5-5ghz-40mb-100-100001404wof-am5-8-nucleos-radeon-graphics",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/procesador-amd-ryzen-7-9700x-am5-38ghz-55ghz/p/MPE39663823#polycard_client=search-nordic&search_layout=grid&position=1&type=product&tracking_id=692bd210-22ae-4315-a19d-0eeb5a2fa60e&wid=MPE816845660&sid=search",
          },
        ],
      },
      {
        title: "Nvidia RTX 5070 12GB Gigabyte OC",
        price: 2629.98,
        currency: "S/.",
        photoUrl:
          "https://www.impacto.com.pe/storage/products/md/17492452861420.webp",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/tarjeta-de-video-gigabyte-geforce-rtx-5070-12gb-gddr7-windforce-oc-sff-gv-n5070wf3oc-12gd-g10-nvidia-192-bits-3-ventiladores",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/tarjeta-de-video-nvidia-gigabyte-geforce-rtx-5070-gv-n5070wf30c-12gd-windforce-oc-sff-12gb/p/MPE49431202#polycard_client=search-nordic&search_layout=grid&position=6&type=product&tracking_id=2fc19b22-7ece-462d-8d68-f3769d5e9793&wid=MPE727288210&sid=search",
          },
        ],
      },
      {
        title: "Placa Madre Asrock X870 Pro Rs Wifi",
        price: 1043.1,
        currency: "S/.",
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEJrvyxVKPrA-aTRsxpFOxyrPrIJXb3EPcwa78eANnd6OoksEH5cnCnd1NEyDMOTkXe8",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/placa-madre-asrock-x870-pro-rs-wifi-90x870-pro-rs-wifi-socket-am5-ram-dddr5-buss-8000oc-mhz-wifi-7",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/motherboard-asrock-x870-pro-rs-wifi-socket-amd-am5-atx/up/MPEU2925714068#polycard_client=search-nordic&search_layout=grid&position=1&type=product&tracking_id=5002b591-5ddb-4716-9873-5cf96db46a24&wid=MPE696825956&sid=search",
          },
        ],
      },
      {
        title: "Case Deepcool Ch780 Wh S/fuente",
        price: 678.87,
        currency: "S/.",
        photoUrl:
          "https://www.impacto.com.pe/storage/products/md/17382519824384.webp",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/case-deepcool-ch780-wh-sfuente-r-ch780-bkade41-g-1-paneles-de-vidrio-3-ventiladores-led-argb-blanco",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/gabinete-gamer-deepcool-ch780-blanco-gaming/p/MPE36809528#polycard_client=search-nordic&search_layout=grid&position=2&type=product&tracking_id=3318c884-b4d4-482c-8e3e-89914db0f84d&wid=MPE723206720&sid=search",
          },
        ],
      },
      {
        title: "Memoria Ram Corsair Ddr5 16gb Vengeance Rgb x2",
        price: 577.98,
        currency: "S/.",
        photoUrl:
          "https://www.impacto.com.pe/storage/products/md/175388594028245.webp",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/memoria-ram-corsair-ddr5-16gb-vengeance-rgb-cmh16gx5m1b5600z40-5600mts-rgb-doble-perfil-amd-e-intel",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/memoria-rgb-corsair-vengeance-de-16-gb-ddr5-5600-mhz-para-ordenador/p/MPE40654040#polycard_client=search-nordic&search_layout=grid&position=2&type=product&tracking_id=055c9af1-96ec-4876-b7b1-8c9b04eab4ef&wid=MPE757435714&sid=search",
          },
        ],
      },
      {
        title: "Sistema De Enfriamiento Liquido Deepcool Mystique 360 Argb",
        price: 680.58,
        currency: "S/.",
        photoUrl:
          "https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cooling/CPULiquidCoolers/MYSTIQUE_360_ARGB/Gallery/800X800/01.jpg?fm=webp&q=60",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/sistema-de-enfriamiento-liquido-deepcool-mystique-360-argb-r-lx750-bkadsnc-g-1-3-ventiladores-360mm-led-argb",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/refrigeracion-liquida-deepcool-mystique-360-argb-pantalla/up/MPEU3132518130#polycard_client=search-nordic&search_layout=grid&position=3&type=product&tracking_id=6c2da189-3b63-4da5-a71c-2aa9aa7a1f34&wid=MPE712143520&sid=search",
          },
        ],
      },
      {
        title:
          "Unidad De Almacenamiento Ssd M.2 Pcie Western Digital 1tb Nvme Black x2",
        price: 779.76,
        currency: "S/.",
        photoUrl:
          "https://www.impacto.com.pe/storage/products/md/173828303067990.webp",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/unidad-de-almacenamiento-ssd-m-2-pcie-western-digital-1tb-nvme-black-sn7100-2280-wds100t4x0e-hasta-7250mbs-de-lectura",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/unidad-ssd-m2-pcie-1tb-wd-black-sn8100-g5/up/MPEU3368728635#polycard_client=search-nordic&search_layout=grid&position=5&type=product&tracking_id=50f0e3dc-3567-4dba-b510-744dce9a4234&wid=MPE806978636&sid=search",
          },
        ],
      },
      {
        title: "Fuente De Poder Asus 850w Prime Atx, 80 Plus Gold",
        price: 418.95,
        currency: "S/.",
        photoUrl:
          "https://www.pcfactory.com.pe/public/foto/3717/google.jpg?t=1746736743409",
        urls: [
          {
            label: "Tienda Impacto",
            link: "https://www.impacto.com.pe/producto/fuente-de-poder-asus-850w-prime-ap-850g-atx-80-plus-gold-modular-negro-y-blanco",
          },
          {
            label: "Mercado Libre",
            link: "https://www.mercadolibre.com.pe/fuente-de-poder-asus-prime-750w-80-gold-white-modular-atx/up/MPEU3433571846#polycard_client=search-nordic&search_layout=grid&position=8&type=product&tracking_id=fb207f19-0eeb-4ed1-b7b3-b6820b543164&wid=MPE438966480&sid=search",
          },
        ],
      },
    ],
  },
];
