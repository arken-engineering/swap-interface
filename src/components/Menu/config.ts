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
    href: 'https://rune.farm/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://rune.farm/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://rune.farm/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://rune.farm/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://rune.farm/teams',
      },
      {
        label: 'Task Center',
        href: 'https://rune.farm/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://rune.farm/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.rune.farm',
      },
      {
        label: 'Tokens',
        href: 'https://info.rune.farm/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.rune.farm/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.rune.farm/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://rune.farm/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.rune.farm',
      },
      {
        label: 'Github',
        href: 'https://github.com/arcanedefi',
      },
      {
        label: 'Docs',
        href: 'https://docs.rune.farm',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/arcanefinance',
      },
    ],
  },
]

export default config
