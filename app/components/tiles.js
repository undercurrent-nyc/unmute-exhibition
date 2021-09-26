import Component from '@glimmer/component';

export default class TilesComponent extends Component {
  tiles = [
    {
      title: "10001",
      url: "https://10001.unmute.nyc",
      imgur: "https://i.imgur.com/Sv1sJtC.jpg",
      dates: [
        { 
          description: "Online residency",
          dates: "08.05 – 09.12 /2020",
        },
      ],
    },
    {
      title: "10002",
      url: "https://10002.unmute.nyc",
      imgur: "https://i.imgur.com/TFFKEuv.jpg",
      dates: [
        { 
          description: "Online residency",
          dates: "02.12 – 05.09 /2021",
        },
      ],
    },
    {
      title: "Exhibition",
      url: "/exhibition",
      imgur: "https://i.imgur.com/zM15PLB.jpg",
      imgurb: "https://i.imgur.com/ZNV0O01.jpg",
      dates: [
        { 
          description: "Undercurrent",
          dates: "09.22 – 11.21 /2021",
        },
        { 
          description: "Austrian Cultural Forum",
          dates: "09.22 /2021 – 01.07 /2022",
        },
      ],
    },
  ]
}
