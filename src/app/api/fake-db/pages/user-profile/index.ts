// Type Imports
import type { ProfileHeaderType, DataType } from '@/types/pages/profileTypes'

type DB = {
  users: DataType
  profileHeader: ProfileHeaderType
}

export const db: DB = {
  users: {
    profile: {
      about: [
        { property: 'Full Name', value: 'John Doe', icon: 'tabler-user' },
        { property: 'Status', value: 'active', icon: 'tabler-check' },
        { property: 'Role', value: 'Developer', icon: 'tabler-crown' },
        { property: 'Country', value: 'USA', icon: 'tabler-flag' },
        { property: 'Language', value: 'English', icon: 'tabler-language' }
      ],
      contacts: [
        { property: 'Contact', value: '(123) 456-7890', icon: 'tabler-phone-call' },
        { property: 'Skype', value: 'john.doe', icon: 'tabler-messages' },
        { property: 'Email', value: 'john.doe@example.com', icon: 'tabler-mail' }
      ],
      teams: [
        { property: 'Backend Developer', value: '(126 Members)' },
        { property: 'React Developer', value: '(98 Members)' }
      ],
      overview: [
        { property: 'Task Compiled', value: '13.5k', icon: 'tabler-check' },
        { property: 'Connections', value: '897', icon: 'tabler-users' },
        { property: 'Projects Compiled', value: '146', icon: 'tabler-layout-grid' }
      ],
      connections: [
        {
          isFriend: true,
          connections: '45',
          name: 'Cecilia Payne',
          avatar: '/images/avatars/2.png'
        },
        {
          isFriend: false,
          connections: '1.32k',
          name: 'Curtis Fletcher',
          avatar: '/images/avatars/3.png'
        },
        {
          isFriend: false,
          connections: '125',
          name: 'Alice Stone',
          avatar: '/images/avatars/4.png'
        },
        {
          isFriend: true,
          connections: '456',
          name: 'Darrell Barnes',
          avatar: '/images/avatars/5.png'
        },
        {
          isFriend: true,
          connections: '1.2k',
          name: 'Eugenia Moore',
          avatar: '/images/avatars/8.png'
        }
      ],
      teamsTech: [
        {
          members: 72,
          ChipColor: 'error',
          chipText: 'Developer',
          title: 'React Developers',
          avatar: '/images/logos/react-bg.png'
        },
        {
          members: 122,
          chipText: 'Support',
          ChipColor: 'primary',
          title: 'Support Team',
          avatar: '/images/icons/support-bg.png'
        },
        {
          members: 7,
          ChipColor: 'info',
          chipText: 'Designer',
          title: 'UI Designer',
          avatar: '/images/logos/figma-bg.png'
        },
        {
          members: 289,
          ChipColor: 'error',
          chipText: 'Developer',
          title: 'Vue.js Developers',
          avatar: '/images/logos/vue-bg.png'
        },
        {
          members: 24,
          chipText: 'Marketing',
          ChipColor: 'secondary',
          title: 'Digital Marketing',
          avatar: '/images/logos/twitter-bg.png'
        }
      ],
      projectTable: [
        {
          id: 1,
          title: 'BGC eCommerce App',
          subtitle: 'React Project',
          leader: 'Eileen',
          avatar: '/images/logos/react-bg.png',
          avatarGroup: [
            '/images/avatars/1.png',
            '/images/avatars/2.png',
            '/images/avatars/3.png',
            '/images/avatars/4.png'
          ],
          status: 78
        },
        {
          id: 2,
          leader: 'Owen',
          title: 'Falcon Logo Design',
          subtitle: 'Figma Project',
          avatar: '/images/logos/figma-bg.png',
          avatarGroup: ['/images/avatars/5.png', '/images/avatars/6.png'],
          status: 18
        },
        {
          id: 3,
          title: 'Dashboard Design',
          subtitle: 'VueJs Project',
          leader: 'Keith',
          avatar: '/images/logos/vue-bg.png',
          avatarGroup: [
            '/images/avatars/7.png',
            '/images/avatars/8.png',
            '/images/avatars/1.png',
            '/images/avatars/2.png'
          ],
          status: 62
        },
        {
          id: 4,
          title: 'Foodista Mobile App',
          subtitle: 'Xamarin Project',
          leader: 'Merline',
          avatar: '/images/icons/mobile-bg.png',
          avatarGroup: [
            '/images/avatars/3.png',
            '/images/avatars/4.png',
            '/images/avatars/5.png',
            '/images/avatars/6.png'
          ],
          status: 8
        },
        {
          id: 5,
          leader: 'Harmonia',
          title: 'Dojo React Project',
          subtitle: 'Python Project',
          avatar: '/images/logos/python-bg.png',
          avatarGroup: ['/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png'],
          status: 36
        },
        {
          id: 6,
          leader: 'Allyson',
          title: 'Blockchain Website',
          subtitle: 'Sketch Project',
          avatar: '/images/logos/sketch-bg.png',
          avatarGroup: [
            '/images/avatars/2.png',
            '/images/avatars/3.png',
            '/images/avatars/4.png',
            '/images/avatars/5.png'
          ],
          status: 92
        },
        {
          id: 7,
          title: 'Hoffman Website',
          subtitle: 'HTML Project',
          leader: 'Georgie',
          avatar: '/images/logos/html-bg.png',
          avatarGroup: [
            '/images/avatars/6.png',
            '/images/avatars/7.png',
            '/images/avatars/8.png',
            '/images/avatars/1.png'
          ],
          status: 88
        },
        {
          id: 8,
          title: 'eCommerce Website',
          subtitle: 'React Project',
          leader: 'Eileen',
          avatar: '/images/logos/react-bg.png',
          avatarGroup: [
            '/images/avatars/1.png',
            '/images/avatars/2.png',
            '/images/avatars/3.png',
            '/images/avatars/4.png'
          ],
          status: 78
        },
        {
          id: 9,
          leader: 'Owen',
          title: 'Retro Logo Design',
          subtitle: 'Figma Project',
          avatar: '/images/logos/figma-bg.png',
          avatarGroup: ['/images/avatars/5.png', '/images/avatars/6.png'],
          status: 18
        },
        {
          id: 10,
          title: 'Admin Dashboard',
          subtitle: 'VueJs Project',
          leader: 'Keith',
          avatar: '/images/logos/vue-bg.png',
          avatarGroup: [
            '/images/avatars/7.png',
            '/images/avatars/8.png',
            '/images/avatars/1.png',
            '/images/avatars/2.png'
          ],
          status: 62
        }
      ]
    },
    teams: [
      {
        extraMembers: 9,
        title: 'React Developers',
        avatar: '/images/logos/react-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Vinnie Mostowy' },
          { avatar: '/images/avatars/2.png', name: 'Allen Rieske' },
          { avatar: '/images/avatars/3.png', name: 'Julee Rossignol' }
        ],
        description:
          'We don’t make assumptions about the rest of your technology stack, so you can develop new features.',
        chips: [
          {
            title: 'React',
            color: 'primary'
          },
          {
            title: 'MUI',
            color: 'info'
          }
        ]
      },
      {
        extraMembers: 4,
        title: 'Vue.js Dev Team',
        avatar: '/images/logos/vue-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: "Kaith D'souza" },
          { avatar: '/images/avatars/6.png', name: 'John Doe' },
          { avatar: '/images/avatars/7.png', name: 'Alan Walker' }
        ],
        description:
          'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen.',
        chips: [
          {
            title: 'Vuejs',
            color: 'success'
          },
          {
            color: 'error',
            title: 'Developer'
          }
        ]
      },
      {
        title: 'Creative Designers',
        avatar: '/images/logos/xd-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Jimmy Ressula' },
          { avatar: '/images/avatars/2.png', name: 'Kristi Lawker' },
          { avatar: '/images/avatars/3.png', name: 'Danny Paul' }
        ],
        description:
          'A design or product team is more than just the people on it. A team includes the people, the roles they play.',
        chips: [
          {
            title: 'Sketch',
            color: 'warning'
          },
          {
            title: 'XD',
            color: 'error'
          }
        ]
      },
      {
        title: 'Support Team',
        avatar: '/images/icons/support-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: 'Andrew Tye' },
          { avatar: '/images/avatars/6.png', name: 'Rishi Swaat' },
          { avatar: '/images/avatars/7.png', name: 'Rossie Kim' }
        ],
        description:
          'Support your team. Your customer support team is fielding the good, the bad, and the ugly on daily basis.',
        chips: [
          {
            title: 'Zendesk',
            color: 'info'
          }
        ]
      },
      {
        extraMembers: 7,
        title: 'Digital Marketing',
        avatar: '/images/icons/social-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Kim Merchent' },
          { avatar: '/images/avatars/2.png', name: "Sam D'souza" },
          { avatar: '/images/avatars/3.png', name: 'Nurvi Karlos' }
        ],
        description:
          'Digital marketing refers to advertising delivered through digital channels such as search engines, websites…',
        chips: [
          {
            title: 'Twitter',
            color: 'primary'
          },
          {
            color: 'success',
            title: 'Email'
          }
        ]
      },
      {
        extraMembers: 2,
        title: 'Event',
        avatar: '/images/logos/event-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: 'Vinnie Mostowy' },
          { avatar: '/images/avatars/6.png', name: 'Allen Rieske' },
          { avatar: '/images/avatars/7.png', name: 'Julee Rossignol' }
        ],
        description:
          'Event is defined as a particular contest which is part of a program of contests. An example of an event is the long…',
        chips: [
          {
            title: 'Hubilo',
            color: 'success'
          }
        ]
      },
      {
        title: 'Figma Resources',
        avatar: '/images/logos/figma-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Andrew Mostowy' },
          { avatar: '/images/avatars/2.png', name: 'Micky Ressula' },
          { avatar: '/images/avatars/3.png', name: 'Michel Pal' }
        ],
        description:
          'Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers.',
        chips: [
          {
            title: 'UI/UX',
            color: 'success'
          },
          {
            title: 'Figma',
            color: 'warning'
          }
        ]
      },
      {
        extraMembers: 8,
        title: 'Only Beginners',
        avatar: '/images/logos/html-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: 'Kim Karlos' },
          { avatar: '/images/avatars/6.png', name: 'Katy Turner' },
          { avatar: '/images/avatars/7.png', name: 'Peter Adward' }
        ],
        description:
          'Learn the basics of how websites work, front-end vs back-end. Learn basic HTML, CSS, and JavaScript.',
        chips: [
          {
            title: 'CSS',
            color: 'info'
          },
          {
            title: 'HTML',
            color: 'primary'
          }
        ]
      },
      {
        title: 'Python Developers',
        avatar: '/images/logos/python-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: 'Kim Karlos' },
          { avatar: '/images/avatars/6.png', name: 'Katy Turner' },
          { avatar: '/images/avatars/7.png', name: 'Peter Adward' }
        ],
        description:
          "Harness Python's versatility for web development, data analysis & system automation for cutting-edge solutions.",
        chips: [
          {
            title: 'Python',
            color: 'info'
          }
        ]
      }
    ],
    projects: [
      {
        daysLeft: 28,
        comments: 15,
        totalTask: 344,
        hours: '380/244',
        tasks: '290/344',
        budget: '$18.2k',
        completedTask: 328,
        deadline: '28/2/22',
        chipColor: 'success',
        startDate: '14/2/21',
        budgetSpent: '$24.8k',
        members: '280 members',
        title: 'Social Banners',
        client: 'Christian Jimenez',
        avatar: '/images/icons/social-bg.png',
        description: 'We are Consulting, Software Development and Web Development Services.',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Vinnie Mostowy' },
          { avatar: '/images/avatars/2.png', name: 'Allen Rieske' },
          { avatar: '/images/avatars/3.png', name: 'Julee Rossignol' }
        ]
      },
      {
        daysLeft: 15,
        comments: 236,
        totalTask: 90,
        tasks: '12/90',
        hours: '98/135',
        budget: '$1.8k',
        completedTask: 38,
        deadline: '21/6/22',
        budgetSpent: '$2.4k',
        chipColor: 'warning',
        startDate: '18/8/21',
        members: '1.1k members',
        title: 'Admin Template',
        client: 'Jeffrey Phillips',
        avatar: '/images/logos/react-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/4.png', name: "Kaith D'souza" },
          { avatar: '/images/avatars/5.png', name: 'John Doe' },
          { avatar: '/images/avatars/6.png', name: 'Alan Walker' }
        ],
        description: "Time is our most valuable asset, that's why we want to help you save it."
      },
      {
        daysLeft: 45,
        comments: 98,
        budget: '$420',
        totalTask: 140,
        tasks: '22/140',
        hours: '880/421',
        completedTask: 95,
        chipColor: 'error',
        budgetSpent: '$980',
        deadline: '8/10/21',
        title: 'App Design',
        startDate: '24/7/21',
        members: '458 members',
        client: 'Ricky McDonald',
        avatar: '/images/logos/vue-bg.png',
        description: 'Figma dashboard app design combines the user UI & UX.',
        avatarGroup: [
          { avatar: '/images/avatars/7.png', name: 'Jimmy Ressula' },
          { avatar: '/images/avatars/8.png', name: 'Kristi Lawker' },
          { avatar: '/images/avatars/1.png', name: 'Danny Paul' }
        ]
      },
      {
        comments: 120,
        daysLeft: 126,
        totalTask: 420,
        budget: '2.43k',
        tasks: '237/420',
        hours: '380/820',
        completedTask: 302,
        deadline: '12/9/22',
        budgetSpent: '$8.5k',
        chipColor: 'warning',
        startDate: '10/2/19',
        members: '137 members',
        client: 'Hulda Wright',
        title: 'Create Website',
        avatar: '/images/logos/html-bg.png',
        description: 'Your domain name should reflect your products or services so that your...',
        avatarGroup: [
          { avatar: '/images/avatars/2.png', name: 'Andrew Tye' },
          { avatar: '/images/avatars/3.png', name: 'Rishi Swaat' },
          { avatar: '/images/avatars/4.png', name: 'Rossie Kim' }
        ]
      },
      {
        daysLeft: 5,
        comments: 20,
        totalTask: 285,
        tasks: '29/285',
        budget: '28.4k',
        hours: '142/420',
        chipColor: 'error',
        completedTask: 100,
        deadline: '25/12/21',
        startDate: '12/12/20',
        members: '82 members',
        budgetSpent: '$52.7k',
        client: 'Jerry Greene',
        title: 'Figma Dashboard',
        avatar: '/images/logos/figma-bg.png',
        description: "Time is our most valuable asset, that's why we want to help you save it.",
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: 'Kim Merchent' },
          { avatar: '/images/avatars/6.png', name: "Sam D'souza" },
          { avatar: '/images/avatars/7.png', name: 'Nurvi Karlos' }
        ]
      },
      {
        daysLeft: 4,
        comments: 98,
        budget: '$655',
        totalTask: 290,
        tasks: '29/290',
        hours: '580/445',
        completedTask: 290,
        budgetSpent: '$1.3k',
        chipColor: 'success',
        deadline: '02/11/21',
        startDate: '17/8/21',
        title: 'Logo Design',
        members: '16 members',
        client: 'Olive Strickland',
        avatar: '/images/logos/xd-bg.png',
        description: 'Premium logo designs created by top logo designers. Create the branding.',
        avatarGroup: [
          { avatar: '/images/avatars/8.png', name: 'Kim Karlos' },
          { avatar: '/images/avatars/1.png', name: 'Katy Turner' },
          { avatar: '/images/avatars/2.png', name: 'Peter Adward' }
        ]
      }
    ],
    connections: [
      {
        tasks: '834',
        projects: '18',
        isConnected: true,
        connections: '129',
        name: 'Mark Gilbert',
        designation: 'UI Designer',
        avatar: '/images/avatars/1.png',
        chips: [
          {
            title: 'Figma',
            color: 'secondary'
          },
          {
            title: 'Sketch',
            color: 'warning'
          }
        ]
      },
      {
        tasks: '2.31k',
        projects: '112',
        isConnected: false,
        connections: '1.28k',
        name: 'Eugenia Parsons',
        designation: 'Developer',
        avatar: '/images/avatars/2.png',
        chips: [
          {
            color: 'error',
            title: 'Angular'
          },
          {
            color: 'info',
            title: 'React'
          }
        ]
      },
      {
        tasks: '1.25k',
        projects: '32',
        isConnected: false,
        connections: '890',
        name: 'Francis Byrd',
        designation: 'Developer',
        avatar: '/images/avatars/3.png',
        chips: [
          {
            title: 'HTML',
            color: 'primary'
          },
          {
            color: 'info',
            title: 'React'
          }
        ]
      },
      {
        tasks: '12.4k',
        projects: '86',
        isConnected: false,
        connections: '890',
        name: 'Leon Lucas',
        designation: 'UI/UX Designer',
        avatar: '/images/avatars/4.png',
        chips: [
          {
            title: 'Figma',
            color: 'secondary'
          },
          {
            title: 'Sketch',
            color: 'warning'
          },
          {
            color: 'primary',
            title: 'Photoshop'
          }
        ]
      },
      {
        tasks: '23.8k',
        projects: '244',
        isConnected: true,
        connections: '2.14k',
        name: 'Jayden Rogers',
        designation: 'Full Stack Developer',
        avatar: '/images/avatars/5.png',
        chips: [
          {
            color: 'info',
            title: 'React'
          },
          {
            title: 'HTML',
            color: 'warning'
          },
          {
            color: 'success',
            title: 'Node.js'
          }
        ]
      },
      {
        tasks: '1.28k',
        projects: '32',
        isConnected: false,
        designation: 'SEO',
        connections: '1.27k',
        name: 'Jeanette Powell',
        avatar: '/images/avatars/6.png',
        chips: [
          {
            title: 'Analysis',
            color: 'secondary'
          },
          {
            color: 'success',
            title: 'Writing'
          }
        ]
      }
    ]
  },
  profileHeader: {
    fullName: 'John Doe',
    location: 'Vatican City',
    joiningDate: 'April 2021',
    designation: 'UX Designer',
    profileImg: '/images/avatars/1.png',
    designationIcon: 'tabler-palette',
    coverImg: '/images/pages/profile-banner.png'
  }
}
