import { MenuEntry } from '@arcanefinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://arcane.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://arcane.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://arcane.finance/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://arcane.finance/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://arcane.finance/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://arcane.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://arcane.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://arcane.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.arcane.finance',
      },
      {
        label: 'Tokens',
        href: 'https://info.arcane.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.arcane.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.arcane.finance/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://arcane.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.arcane.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/arcanedefi',
      },
      {
        label: 'Docs',
        href: 'https://docs.arcane.finance',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/arcanefinance',
      },
    ],
  },
]

export default config
