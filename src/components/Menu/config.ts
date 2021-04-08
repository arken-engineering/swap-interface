import { MenuEntry } from '@arcanefinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://rune.farm/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://swap.rune.farm',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.rune.farm/#/pool',
      },
    ],
  },
  {
    label: 'Game',
    icon: 'NftIcon',
    initialOpenState: true,
    items: [
      {
        label: 'My Profile',
        href: 'https://rune.farm/profile',
      },
      {
        label: 'My Inventory',
        href: 'https://rune.farm/me',
      },
      {
        label: 'Farms',
        // icon: 'FarmIcon',
        href: 'https://rune.farm/farms',
      },
      {
        label: 'Pools',
        // icon: 'PoolIcon',
        href: 'https://rune.farm/pools',
      },
      {
        label: 'Guilds',
        // icon: 'GroupsIcon',
        href: 'https://rune.farm/guilds',
      },
    ]
  },
  // {
  //   label: 'Gambling',
  //   icon: 'TicketIcon',
  //   href: '/gambling',
  // },
  // {
  //   label: 'Marketplace',
  //   icon: 'NftIcon',
  //   href: '/marketplace',
  // },
  {
    label: 'Links',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Trade: RuneSwap',
        href: 'https://swap.rune.farm/#/swap',
      },
      {
        label: 'Trade: PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xa9776b590bfc2f956711b3419910a5ec1f63153e',
      },
      // {
      //   label: 'CoinGecko (TODO)',
      //   href: 'https://www.coingecko.com/en/coins/rune-farm',
      // },
      // {
      //   label: 'CoinMarketCap (TODO)',
      //   href: 'https://coinmarketcap.com/currencies/rune-farm/',
      // },
      {
        label: 'Chart: AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xf9444c39bbdcc3673033609204f8da00d1ae3f52',
      },
      {
        label: 'Chart: Swapp',
        href: 'https://goswapp-bsc.web.app/0xa9776b590bfc2f956711b3419910a5ec1f63153e',
      },
      {
        label: 'Chart: Poo',
        href: 'https://poocoin.app/tokens/0xa9776b590bfc2f956711b3419910a5ec1f63153e',
      },
    ],
  },
  {
    label: 'More Info',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Governance',
      //   href: '/governance',
      // },
      {
        label: 'Documentation',
        href: 'https://docs.rune.farm/',
      },
      {
        label: 'Tokenomics',
        href: 'https://docs.rune.farm/tokenomics/rune',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.rune.farm/resources/roadmap',
      },
      {
        label: 'FAQ',
        href: 'https://docs.rune.farm/resources/faq',
      },
      {
        label: 'Polls',
        href: 'https://docs.rune.farm/resources/polls',
      },
      {
        label: 'Github',
        href: 'https://github.com/runefarm',
      },
      {
        label: 'Medium',
        href: 'https://runefarm.medium.com',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/RuneFarm',
      },
    ],
  },
]

export default config
