import { Box, ImageList, ImageListItem } from "@mui/material"

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const ImageCollauge = () => {
    shuffle(itemData)
    return (
        <Box sx={{px: 2, p: 0, height: '100vh', overflow: 'hidden', opacity: .8, backgroundImage: 'linear-gradient(to right, #f2709c, #ff9472)'}}>
            <ImageList variant="masonry" cols={10} sx={{m:0}}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{maxWidth: '190px', minWidth: '10px', top: '-30px', border: '4px solid #999999', borderRadius: 4}}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{borderRadius: 6}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

const itemData = [
    {
        img: '/images/albums/1.jpg',
        id: '1',
        type: 'album'
    },
    {
        img: '/images/artists/1.jpg',
        id: '1',
        type: 'artist'
    },
    {
        img: '/images/albums/2.jpg',
        id: '2',
        type: 'album'
    },
    {
        img: '/images/artists/2.jpg',
        id: '2',
        type: 'artist'
    },
    {
        img: '/images/albums/3.jpg',
        id: '3',
        type: 'album'
    },
    {
        img: '/images/artists/3.jpg',
        id: '3',
        type: 'artist'
    },
    {
        img: '/images/albums/4.jpg',
        id: '4',
        type: 'album'
    },
    {
        img: '/images/artists/4.jpg',
        id: '4',
        type: 'artist'
    },
    {
        img: '/images/albums/5.jpg',
        id: '5',
        type: 'album'
    },
    {
        img: '/images/artists/5.jpg',
        id: '5',
        type: 'artist'
    },
    {
        img: '/images/albums/6.jpg',
        id: '6',
        type: 'album'
    },
    {
        img: '/images/artists/6.jpg',
        id: '6',
        type: 'artist'
    },
    {
        img: '/images/albums/7.jpg',
        id: '7',
        type: 'album'
    },
    {
        img: '/images/artists/7.jpg',
        id: '7',
        type: 'artist'
    },
    {
        img: '/images/albums/8.jpg',
        id: '8',
        type: 'album'
    },
    {
        img: '/images/artists/8.jpg',
        id: '8',
        type: 'artist'
    },
    {
        img: '/images/albums/9.jpg',
        id: '9',
        type: 'album'
    },
    {
        img: '/images/artists/9.jpg',
        id: '9',
        type: 'artist'
    },
    {
        img: '/images/albums/10.jpg',
        id: '10',
        type: 'album'
    },
    {
        img: '/images/artists/10.jpg',
        id: '10',
        type: 'artist'
    },
    {
        img: '/images/albums/11.jpg',
        id: '11',
        type: 'album'
    },
    {
        img: '/images/artists/11.jpg',
        id: '11',
        type: 'artist'
    },
    {
        img: '/images/albums/12.jpg',
        id: '12',
        type: 'album'
    },
    {
        img: '/images/artists/12.jpg',
        id: '12',
        type: 'artist'
    },
    {
        img: '/images/albums/13.jpg',
        id: '13',
        type: 'album'
    },
    {
        img: '/images/artists/13.jpg',
        id: '13',
        type: 'artist'
    },
    {
        img: '/images/albums/14.jpg',
        id: '14',
        type: 'album'
    },
    {
        img: '/images/artists/14.jpg',
        id: '14',
        type: 'artist'
    },
    {
        img: '/images/albums/15.jpg',
        id: '15',
        type: 'album'
    },
    {
        img: '/images/artists/15.jpg',
        id: '15',
        type: 'artist'
    },
    {
        img: '/images/albums/16.jpg',
        id: '16',
        type: 'album'
    },
    {
        img: '/images/artists/16.jpg',
        id: '16',
        type: 'artist'
    },
    {
        img: '/images/albums/17.jpg',
        id: '17',
        type: 'album'
    },
    {
        img: '/images/artists/17.jpg',
        id: '17',
        type: 'artist'
    },
    {
        img: '/images/albums/18.jpg',
        id: '18',
        type: 'album'
    },
    {
        img: '/images/artists/18.jpg',
        id: '18',
        type: 'artist'
    },
    {
        img: '/images/albums/19.jpg',
        id: '19',
        type: 'album'
    },
    {
        img: '/images/artists/19.jpg',
        id: '19',
        type: 'artist'
    },
    {
        img: '/images/albums/20.jpg',
        id: '20',
        type: 'album'
    },
    // {
    //     img: '/images/artists/20.jpg',
    //     id: '20',
    //     type: 'artist'
    // },
    {
        img: '/images/albums/21.jpg',
        id: '21',
        type: 'album'
    },
    {
        img: '/images/artists/21.jpg',
        id: '21',
        type: 'artist'
    },
    {
        img: '/images/albums/22.jpg',
        id: '22',
        type: 'album'
    },
    {
        img: '/images/artists/22.jpg',
        id: '22',
        type: 'artist'
    },
    {
        img: '/images/albums/23.jpg',
        id: '23',
        type: 'album'
    },
    {
        img: '/images/artists/23.jpg',
        id: '23',
        type: 'artist'
    },
    {
        img: '/images/albums/24.jpg',
        id: '24',
        type: 'album'
    },
    {
        img: '/images/artists/24.jpg',
        id: '24',
        type: 'artist'
    },
    {
        img: '/images/albums/25.jpg',
        id: '25',
        type: 'album'
    },
    {
        img: '/images/artists/25.jpg',
        id: '25',
        type: 'artist'
    },
    {
        img: '/images/albums/26.jpg',
        id: '26',
        type: 'album'
    },
    {
        img: '/images/artists/26.jpg',
        id: '26',
        type: 'artist'
    },
    {
        img: '/images/albums/27.jpg',
        id: '27',
        type: 'album'
    },
    {
        img: '/images/artists/27.jpg',
        id: '27',
        type: 'artist'
    },
    {
        img: '/images/albums/28.jpg',
        id: '28',
        type: 'album'
    },
    {
        img: '/images/artists/28.jpg',
        id: '28',
        type: 'artist'
    },
    {
        img: '/images/albums/29.jpg',
        id: '29',
        type: 'album'
    },
    {
        img: '/images/artists/29.jpg',
        id: '29',
        type: 'artist'
    },
    {
        img: '/images/albums/30.jpg',
        id: '30',
        type: 'album'
    },
    {
        img: '/images/artists/30.jpg',
        id: '30',
        type: 'artist'
    },
    {
        img: '/images/albums/31.jpg',
        id: '31',
        type: 'album'
    },
    {
        img: '/images/artists/31.jpg',
        id: '31',
        type: 'artist'
    },
    {
        img: '/images/albums/32.jpg',
        id: '32',
        type: 'album'
    },
    {
        img: '/images/artists/32.jpg',
        id: '32',
        type: 'artist'
    },
    {
        img: '/images/albums/33.jpg',
        id: '33',
        type: 'album'
    },
    {
        img: '/images/artists/33.jpg',
        id: '33',
        type: 'artist'
    },
    {
        img: '/images/albums/34.jpg',
        id: '34',
        type: 'album'
    },
    {
        img: '/images/artists/34.jpg',
        id: '34',
        type: 'artist'
    },
    {
        img: '/images/albums/35.jpg',
        id: '35',
        type: 'album'
    },
    {
        img: '/images/artists/35.jpg',
        id: '35',
        type: 'artist'
    },
    {
        img: '/images/albums/36.jpg',
        id: '36',
        type: 'album'
    },
    {
        img: '/images/artists/36.jpg',
        id: '36',
        type: 'artist'
    },
    {
        img: '/images/albums/37.jpg',
        id: '37',
        type: 'album'
    },
    {
        img: '/images/artists/37.jpg',
        id: '37',
        type: 'artist'
    },
    {
        img: '/images/albums/38.jpg',
        id: '38',
        type: 'album'
    },
    {
        img: '/images/artists/38.jpg',
        id: '38',
        type: 'artist'
    },
    {
        img: '/images/albums/39.jpg',
        id: '39',
        type: 'album'
    },
    {
        img: '/images/artists/39.jpg',
        id: '39',
        type: 'artist'
    },
    {
        img: '/images/albums/40.jpg',
        id: '40',
        type: 'album'
    },
    {
        img: '/images/artists/40.jpg',
        id: '40',
        type: 'artist'
    },
    {
        img: '/images/albums/41.jpg',
        id: '41',
        type: 'album'
    },
    {
        img: '/images/artists/41.jpg',
        id: '41',
        type: 'artist'
    },
    {
        img: '/images/albums/42.jpg',
        id: '42',
        type: 'album'
    },
    {
        img: '/images/artists/42.jpg',
        id: '42',
        type: 'artist'
    },
    {
        img: '/images/albums/43.jpg',
        id: '43',
        type: 'album'
    },
    {
        img: '/images/artists/43.jpg',
        id: '43',
        type: 'artist'
    },
    {
        img: '/images/albums/44.jpg',
        id: '44',
        type: 'album'
    },
    {
        img: '/images/artists/44.jpg',
        id: '44',
        type: 'artist'
    },
    {
        img: '/images/albums/45.jpg',
        id: '45',
        type: 'album'
    },
    {
        img: '/images/artists/45.jpg',
        id: '45',
        type: 'artist'
    },
    {
        img: '/images/albums/46.jpg',
        id: '46',
        type: 'album'
    },
    {
        img: '/images/artists/46.jpg',
        id: '46',
        type: 'artist'
    },
    {
        img: '/images/albums/47.jpg',
        id: '47',
        type: 'album'
    },
    {
        img: '/images/artists/47.jpg',
        id: '47',
        type: 'artist'
    },
    {
        img: '/images/albums/48.jpg',
        id: '48',
        type: 'album'
    },
    {
        img: '/images/artists/48.jpg',
        id: '48',
        type: 'artist'
    },
    {
        img: '/images/albums/49.jpg',
        id: '49',
        type: 'album'
    },
    {
        img: '/images/artists/49.jpg',
        id: '49',
        type: 'artist'
    },
    {
        img: '/images/albums/50.jpg',
        id: '50',
        type: 'album'
    },
    {
        img: '/images/artists/50.jpg',
        id: '50',
        type: 'artist'
    },
    {
        img: '/images/albums/51.jpg',
        id: '51',
        type: 'album'
    },
    {
        img: '/images/artists/51.jpg',
        id: '51',
        type: 'artist'
    },
    {
        img: '/images/albums/52.jpg',
        id: '52',
        type: 'album'
    },
    {
        img: '/images/artists/52.jpg',
        id: '52',
        type: 'artist'
    },
    {
        img: '/images/albums/53.jpg',
        id: '53',
        type: 'album'
    },
    {
        img: '/images/artists/53.jpg',
        id: '53',
        type: 'artist'
    },
    {
        img: '/images/albums/54.jpg',
        id: '54',
        type: 'album'
    },
    {
        img: '/images/artists/54.jpg',
        id: '54',
        type: 'artist'
    },
    {
        img: '/images/albums/55.jpg',
        id: '55',
        type: 'album'
    },
    {
        img: '/images/artists/55.jpg',
        id: '55',
        type: 'artist'
    },
    {
        img: '/images/albums/56.jpg',
        id: '56',
        type: 'album'
    },
    {
        img: '/images/artists/56.jpg',
        id: '56',
        type: 'artist'
    },
    {
        img: '/images/albums/57.jpg',
        id: '57',
        type: 'album'
    },
    {
        img: '/images/artists/57.jpg',
        id: '57',
        type: 'artist'
    },
    {
        img: '/images/albums/58.jpg',
        id: '58',
        type: 'album'
    },
    {
        img: '/images/artists/58.jpg',
        id: '58',
        type: 'artist'
    },
    {
        img: '/images/albums/59.jpg',
        id: '59',
        type: 'album'
    },
    {
        img: '/images/artists/59.jpg',
        id: '59',
        type: 'artist'
    },
    {
        img: '/images/albums/60.jpg',
        id: '60',
        type: 'album'
    },
    {
        img: '/images/artists/60.jpg',
        id: '60',
        type: 'artist'
    },
    {
        img: '/images/albums/61.jpg',
        id: '61',
        type: 'album'
    },
    {
        img: '/images/artists/61.jpg',
        id: '61',
        type: 'artist'
    },
    {
        img: '/images/albums/62.jpg',
        id: '62',
        type: 'album'
    },
    {
        img: '/images/artists/62.jpg',
        id: '62',
        type: 'artist'
    },
    {
        img: '/images/albums/63.jpg',
        id: '63',
        type: 'album'
    },
    {
        img: '/images/artists/63.jpg',
        id: '63',
        type: 'artist'
    },
    {
        img: '/images/albums/64.jpg',
        id: '64',
        type: 'album'
    },
    {
        img: '/images/artists/64.jpg',
        id: '64',
        type: 'artist'
    },
    {
        img: '/images/albums/65.jpg',
        id: '65',
        type: 'album'
    },
    {
        img: '/images/artists/65.jpg',
        id: '65',
        type: 'artist'
    },
    {
        img: '/images/albums/66.jpg',
        id: '66',
        type: 'album'
    },
    {
        img: '/images/artists/66.jpg',
        id: '66',
        type: 'artist'
    },
    {
        img: '/images/albums/67.jpg',
        id: '67',
        type: 'album'
    },
    {
        img: '/images/artists/67.jpg',
        id: '67',
        type: 'artist'
    },
    {
        img: '/images/albums/68.jpg',
        id: '68',
        type: 'album'
    },
    {
        img: '/images/artists/68.jpg',
        id: '68',
        type: 'artist'
    },
    {
        img: '/images/albums/69.jpg',
        id: '69',
        type: 'album'
    },
    {
        img: '/images/artists/69.jpg',
        id: '69',
        type: 'artist'
    },
    {
        img: '/images/albums/70.jpg',
        id: '70',
        type: 'album'
    },
    {
        img: '/images/artists/70.jpg',
        id: '70',
        type: 'artist'
    },
    {
        img: '/images/albums/71.jpg',
        id: '71',
        type: 'album'
    },
    {
        img: '/images/artists/71.jpg',
        id: '71',
        type: 'artist'
    },
    {
        img: '/images/albums/72.jpg',
        id: '72',
        type: 'album'
    },
    {
        img: '/images/artists/72.jpg',
        id: '72',
        type: 'artist'
    },
    {
        img: '/images/albums/73.jpg',
        id: '73',
        type: 'album'
    },
    {
        img: '/images/artists/73.jpg',
        id: '73',
        type: 'artist'
    },
    {
        img: '/images/albums/74.jpg',
        id: '74',
        type: 'album'
    },
    {
        img: '/images/artists/74.jpg',
        id: '74',
        type: 'artist'
    },
    {
        img: '/images/albums/75.jpg',
        id: '75',
        type: 'album'
    },
    {
        img: '/images/artists/75.jpg',
        id: '75',
        type: 'artist'
    },
    {
        img: '/images/albums/76.jpg',
        id: '76',
        type: 'album'
    },
    {
        img: '/images/artists/76.jpg',
        id: '76',
        type: 'artist'
    },
    {
        img: '/images/albums/77.jpg',
        id: '77',
        type: 'album'
    },
    {
        img: '/images/artists/77.jpg',
        id: '77',
        type: 'artist'
    },
    {
        img: '/images/albums/78.jpg',
        id: '78',
        type: 'album'
    },
    {
        img: '/images/artists/78.jpg',
        id: '78',
        type: 'artist'
    },
    {
        img: '/images/albums/79.jpg',
        id: '79',
        type: 'album'
    },
    {
        img: '/images/artists/79.jpg',
        id: '79',
        type: 'artist'
    },
    {
        img: '/images/albums/80.jpg',
        id: '80',
        type: 'album'
    },
    {
        img: '/images/artists/80.jpg',
        id: '80',
        type: 'artist'
    },
    {
        img: '/images/albums/81.jpg',
        id: '81',
        type: 'album'
    },
    {
        img: '/images/artists/81.jpg',
        id: '81',
        type: 'artist'
    },
    {
        img: '/images/albums/82.jpg',
        id: '82',
        type: 'album'
    },
    {
        img: '/images/artists/82.jpg',
        id: '82',
        type: 'artist'
    },
    {
        img: '/images/albums/83.jpg',
        id: '83',
        type: 'album'
    },
    {
        img: '/images/artists/83.jpg',
        id: '83',
        type: 'artist'
    },
    {
        img: '/images/albums/84.jpg',
        id: '84',
        type: 'album'
    },
    {
        img: '/images/artists/84.jpg',
        id: '84',
        type: 'artist'
    },
    {
        img: '/images/albums/85.jpg',
        id: '85',
        type: 'album'
    },
    {
        img: '/images/artists/85.jpg',
        id: '85',
        type: 'artist'
    },
    {
        img: '/images/albums/86.jpg',
        id: '86',
        type: 'album'
    },
    {
        img: '/images/artists/86.jpg',
        id: '86',
        type: 'artist'
    },
    {
        img: '/images/albums/87.jpg',
        id: '87',
        type: 'album'
    },
    {
        img: '/images/artists/87.jpg',
        id: '87',
        type: 'artist'
    },
    {
        img: '/images/albums/88.jpg',
        id: '88',
        type: 'album'
    },
    {
        img: '/images/artists/88.jpg',
        id: '88',
        type: 'artist'
    },
    {
        img: '/images/albums/89.jpg',
        id: '89',
        type: 'album'
    },
    {
        img: '/images/artists/89.jpg',
        id: '89',
        type: 'artist'
    },
    {
        img: '/images/albums/90.jpg',
        id: '90',
        type: 'album'
    },
    {
        img: '/images/artists/90.jpg',
        id: '90',
        type: 'artist'
    },
    {
        img: '/images/albums/91.jpg',
        id: '91',
        type: 'album'
    },
    {
        img: '/images/artists/91.jpg',
        id: '91',
        type: 'artist'
    },
    {
        img: '/images/albums/92.jpg',
        id: '92',
        type: 'album'
    },
    {
        img: '/images/artists/92.jpg',
        id: '92',
        type: 'artist'
    },
    {
        img: '/images/albums/93.jpg',
        id: '93',
        type: 'album'
    },
    {
        img: '/images/artists/93.jpg',
        id: '93',
        type: 'artist'
    },
    {
        img: '/images/albums/94.jpg',
        id: '94',
        type: 'album'
    },
    {
        img: '/images/artists/94.jpg',
        id: '94',
        type: 'artist'
    },
    {
        img: '/images/albums/95.jpg',
        id: '95',
        type: 'album'
    },
    {
        img: '/images/artists/95.jpg',
        id: '95',
        type: 'artist'
    },
    {
        img: '/images/albums/96.jpg',
        id: '96',
        type: 'album'
    },
    {
        img: '/images/artists/96.jpg',
        id: '96',
        type: 'artist'
    },
    {
        img: '/images/albums/97.jpg',
        id: '97',
        type: 'album'
    },
    {
        img: '/images/artists/97.jpg',
        id: '97',
        type: 'artist'
    },
    {
        img: '/images/albums/98.jpg',
        id: '98',
        type: 'album'
    },
    {
        img: '/images/artists/98.jpg',
        id: '98',
        type: 'artist'
    },
    {
        img: '/images/albums/99.jpg',
        id: '99',
        type: 'album'
    },
    {
        img: '/images/artists/99.jpg',
        id: '99',
        type: 'artist'
    },
    {
        img: '/images/albums/100.jpg',
        id: '100',
        type: 'album'
    },
    {
        img: '/images/artists/100.jpg',
        id: '100',
        type: 'artist'
    },
    {
        img: '/images/albums/101.jpg',
        id: '101',
        type: 'album'
    },
    {
        img: '/images/artists/101.jpg',
        id: '101',
        type: 'artist'
    },
    {
        img: '/images/albums/102.jpg',
        id: '102',
        type: 'album'
    },
    {
        img: '/images/artists/102.jpg',
        id: '102',
        type: 'artist'
    },
    {
        img: '/images/albums/103.jpg',
        id: '103',
        type: 'album'
    },
    {
        img: '/images/artists/103.jpg',
        id: '103',
        type: 'artist'
    },
    {
        img: '/images/albums/104.jpg',
        id: '104',
        type: 'album'
    },
    {
        img: '/images/artists/104.jpg',
        id: '104',
        type: 'artist'
    },
    {
        img: '/images/albums/105.jpg',
        id: '105',
        type: 'album'
    },
    {
        img: '/images/artists/105.jpg',
        id: '105',
        type: 'artist'
    },
    {
        img: '/images/albums/106.jpg',
        id: '106',
        type: 'album'
    },
    {
        img: '/images/artists/106.jpg',
        id: '106',
        type: 'artist'
    },
    {
        img: '/images/albums/107.jpg',
        id: '107',
        type: 'album'
    },
    {
        img: '/images/artists/107.jpg',
        id: '107',
        type: 'artist'
    },
    {
        img: '/images/albums/108.jpg',
        id: '108',
        type: 'album'
    },
    {
        img: '/images/artists/108.jpg',
        id: '108',
        type: 'artist'
    },
    {
        img: '/images/albums/109.jpg',
        id: '109',
        type: 'album'
    },
    {
        img: '/images/artists/109.jpg',
        id: '109',
        type: 'artist'
    },
    {
        img: '/images/albums/110.jpg',
        id: '110',
        type: 'album'
    },
    {
        img: '/images/artists/110.jpg',
        id: '110',
        type: 'artist'
    },
    {
        img: '/images/albums/111.jpg',
        id: '111',
        type: 'album'
    },
    {
        img: '/images/artists/111.jpg',
        id: '111',
        type: 'artist'
    },
    {
        img: '/images/albums/112.jpg',
        id: '112',
        type: 'album'
    },
    {
        img: '/images/artists/112.jpg',
        id: '112',
        type: 'artist'
    },
    {
        img: '/images/albums/113.jpg',
        id: '113',
        type: 'album'
    },
    {
        img: '/images/artists/113.jpg',
        id: '113',
        type: 'artist'
    },
    {
        img: '/images/albums/114.jpg',
        id: '114',
        type: 'album'
    },
    {
        img: '/images/artists/114.jpg',
        id: '114',
        type: 'artist'
    },
    {
        img: '/images/albums/115.jpg',
        id: '115',
        type: 'album'
    },
    {
        img: '/images/artists/115.jpg',
        id: '115',
        type: 'artist'
    },
    {
        img: '/images/albums/116.jpg',
        id: '116',
        type: 'album'
    },
    {
        img: '/images/artists/116.jpg',
        id: '116',
        type: 'artist'
    },
    {
        img: '/images/albums/117.jpg',
        id: '117',
        type: 'album'
    },
    {
        img: '/images/artists/117.jpg',
        id: '117',
        type: 'artist'
    },
    {
        img: '/images/albums/118.jpg',
        id: '118',
        type: 'album'
    },
    {
        img: '/images/artists/118.jpg',
        id: '118',
        type: 'artist'
    },
    {
        img: '/images/albums/119.jpg',
        id: '119',
        type: 'album'
    },
    {
        img: '/images/artists/119.jpg',
        id: '119',
        type: 'artist'
    },
    {
        img: '/images/albums/120.jpg',
        id: '120',
        type: 'album'
    },
    {
        img: '/images/artists/120.jpg',
        id: '120',
        type: 'artist'
    },
    {
        img: '/images/albums/121.jpg',
        id: '121',
        type: 'album'
    },
    {
        img: '/images/artists/121.jpg',
        id: '121',
        type: 'artist'
    },
    {
        img: '/images/albums/122.jpg',
        id: '122',
        type: 'album'
    },
    {
        img: '/images/artists/122.jpg',
        id: '122',
        type: 'artist'
    },
    {
        img: '/images/albums/123.jpg',
        id: '123',
        type: 'album'
    },
    {
        img: '/images/artists/123.jpg',
        id: '123',
        type: 'artist'
    },
    {
        img: '/images/albums/124.jpg',
        id: '124',
        type: 'album'
    },
    {
        img: '/images/artists/124.jpg',
        id: '124',
        type: 'artist'
    },
    {
        img: '/images/albums/125.jpg',
        id: '125',
        type: 'album'
    },
    {
        img: '/images/artists/125.jpg',
        id: '125',
        type: 'artist'
    },
    {
        img: '/images/albums/126.jpg',
        id: '126',
        type: 'album'
    },
    {
        img: '/images/artists/126.jpg',
        id: '126',
        type: 'artist'
    },
    {
        img: '/images/albums/127.jpg',
        id: '127',
        type: 'album'
    },
    {
        img: '/images/artists/127.jpg',
        id: '127',
        type: 'artist'
    },
    {
        img: '/images/albums/128.jpg',
        id: '128',
        type: 'album'
    },
    {
        img: '/images/artists/128.jpg',
        id: '128',
        type: 'artist'
    },
    {
        img: '/images/albums/129.jpg',
        id: '129',
        type: 'album'
    },
    {
        img: '/images/artists/129.jpg',
        id: '129',
        type: 'artist'
    },
    {
        img: '/images/albums/130.jpg',
        id: '130',
        type: 'album'
    },
    {
        img: '/images/artists/130.jpg',
        id: '130',
        type: 'artist'
    },
    {
        img: '/images/albums/131.jpg',
        id: '131',
        type: 'album'
    },
    {
        img: '/images/artists/131.jpg',
        id: '131',
        type: 'artist'
    },
    {
        img: '/images/albums/132.jpg',
        id: '132',
        type: 'album'
    },
    {
        img: '/images/artists/132.jpg',
        id: '132',
        type: 'artist'
    },
    {
        img: '/images/albums/133.jpg',
        id: '133',
        type: 'album'
    },
    {
        img: '/images/artists/133.jpg',
        id: '133',
        type: 'artist'
    },
    {
        img: '/images/albums/134.jpg',
        id: '134',
        type: 'album'
    },
    {
        img: '/images/artists/134.jpg',
        id: '134',
        type: 'artist'
    },
    {
        img: '/images/albums/135.jpg',
        id: '135',
        type: 'album'
    },
    {
        img: '/images/artists/135.jpg',
        id: '135',
        type: 'artist'
    },
    {
        img: '/images/albums/136.jpg',
        id: '136',
        type: 'album'
    },
    {
        img: '/images/artists/136.jpg',
        id: '136',
        type: 'artist'
    },
    {
        img: '/images/albums/137.jpg',
        id: '137',
        type: 'album'
    },
    {
        img: '/images/artists/137.jpg',
        id: '137',
        type: 'artist'
    },
    {
        img: '/images/albums/138.jpg',
        id: '138',
        type: 'album'
    },
    {
        img: '/images/artists/138.jpg',
        id: '138',
        type: 'artist'
    },
    {
        img: '/images/albums/139.jpg',
        id: '139',
        type: 'album'
    },
    {
        img: '/images/artists/139.jpg',
        id: '139',
        type: 'artist'
    },
    {
        img: '/images/albums/140.jpg',
        id: '140',
        type: 'album'
    },
    {
        img: '/images/artists/140.jpg',
        id: '140',
        type: 'artist'
    },
    {
        img: '/images/albums/141.jpg',
        id: '141',
        type: 'album'
    },
    {
        img: '/images/artists/141.jpg',
        id: '141',
        type: 'artist'
    },
    {
        img: '/images/albums/142.jpg',
        id: '142',
        type: 'album'
    },
    {
        img: '/images/artists/142.jpg',
        id: '142',
        type: 'artist'
    },
    {
        img: '/images/albums/143.jpg',
        id: '143',
        type: 'album'
    },
    {
        img: '/images/artists/143.jpg',
        id: '143',
        type: 'artist'
    },
    {
        img: '/images/albums/144.jpg',
        id: '144',
        type: 'album'
    },
    {
        img: '/images/artists/144.jpg',
        id: '144',
        type: 'artist'
        },
        {
        img: '/images/albums/145.jpg',
        id: '145',
        type: 'album'
        },
        {
        img: '/images/artists/145.jpg',
        id: '145',
        type: 'artist'
        },
        {
        img: '/images/albums/146.jpg',
        id: '146',
        type: 'album'
        },
        {
        img: '/images/artists/146.jpg',
        id: '146',
        type: 'artist'
        },
        {
        img: '/images/albums/147.jpg',
        id: '147',
        type: 'album'
        },
        {
        img: '/images/artists/147.jpg',
        id: '147',
        type: 'artist'
        },
        {
        img: '/images/albums/148.jpg',
        id: '148',
        type: 'album'
        },
        {
        img: '/images/artists/148.jpg',
        id: '148',
        type: 'artist'
        },
        {
        img: '/images/albums/149.jpg',
        id: '149',
        type: 'album'
        },
        {
        img: '/images/artists/149.jpg',
        id: '149',
        type: 'artist'
        },
        {
        img: '/images/albums/150.jpg',
        id: '150',
        type: 'album'
        },
        {
        img: '/images/artists/150.jpg',
        id: '150',
        type: 'artist'
        },
        {
            img: '/images/albums/151.jpg',
            id: '151',
            type: 'album'
        },
        {
            img: '/images/artists/151.jpg',
            id: '151',
            type: 'artist'
        },
        {
            img: '/images/albums/152.jpg',
            id: '152',
            type: 'album'
        },
        {
            img: '/images/artists/152.jpg',
            id: '152',
            type: 'artist'
        },
        {
            img: '/images/albums/153.jpg',
            id: '153',
            type: 'album'
        },
        {
            img: '/images/artists/153.jpg',
            id: '153',
            type: 'artist'
        },
        {
            img: '/images/albums/154.jpg',
            id: '154',
            type: 'album'
        },
        {
            img: '/images/artists/154.jpg',
            id: '154',
            type: 'artist'
        },
        {
            img: '/images/albums/155.jpg',
            id: '155',
            type: 'album'
        },
        {
            img: '/images/artists/155.jpg',
            id: '155',
            type: 'artist'
        },
        {
            img: '/images/albums/156.jpg',
            id: '156',
            type: 'album'
        },
        {
            img: '/images/artists/156.jpg',
            id: '156',
            type: 'artist'
        },
        {
            img: '/images/albums/157.jpg',
            id: '157',
            type: 'album'
        },
        {
            img: '/images/artists/157.jpg',
            id: '157',
            type: 'artist'
        },
        {
            img: '/images/albums/158.jpg',
            id: '158',
            type: 'album'
        },
        {
            img: '/images/artists/158.jpg',
            id: '158',
            type: 'artist'
        },
        {
            img: '/images/albums/159.jpg',
            id: '159',
            type: 'album'
        },
        {
            img: '/images/artists/159.jpg',
            id: '159',
            type: 'artist'
        },
        {
            img: '/images/albums/160.jpg',
            id: '160',
            type: 'album'
        },
        {
            img: '/images/artists/160.jpg',
            id: '160',
            type: 'artist'
        },
        {
            img: '/images/albums/161.jpg',
            id: '161',
            type: 'album'
        },
        {
            img: '/images/artists/161.jpg',
            id: '161',
            type: 'artist'
        },
        {
            img: '/images/albums/162.jpg',
            id: '162',
            type: 'album'
        },
        {
            img: '/images/artists/162.jpg',
            id: '162',
            type: 'artist'
        },
        {
            img: '/images/albums/163.jpg',
            id: '163',
            type: 'album'
        },
        {
            img: '/images/artists/163.jpg',
            id: '163',
            type: 'artist'
        },
        {
            img: '/images/albums/164.jpg',
            id: '164',
            type: 'album'
        },
        {
            img: '/images/artists/164.jpg',
            id: '164',
            type: 'artist'
        },
        {
            img: '/images/albums/165.jpg',
            id: '165',
            type: 'album'
        },
        {
            img: '/images/artists/165.jpg',
            id: '165',
            type: 'artist'
        },
        {
            img: '/images/albums/166.jpg',
            id: '166',
            type: 'album'
        },
        {
            img: '/images/artists/166.jpg',
            id: '166',
            type: 'artist'
        },
        {
            img: '/images/albums/167.jpg',
            id: '167',
            type: 'album'
        },
        {
            img: '/images/artists/167.jpg',
            id: '167',
            type: 'artist'
        },
        {
            img: '/images/albums/168.jpg',
            id: '168',
            type: 'album'
        },
        {
            img: '/images/artists/168.jpg',
            id: '168',
            type: 'artist'
        },
        {
            img: '/images/albums/169.jpg',
            id: '169',
            type: 'album'
        },
        {
            img: '/images/artists/169.jpg',
            id: '169',
            type: 'artist'
        },
        {
            img: '/images/albums/170.jpg',
            id: '170',
            type: 'album'
        },
        {
            img: '/images/artists/170.jpg',
            id: '170',
            type: 'artist'
        },
        {
            img: '/images/albums/171.jpg',
            id: '171',
            type: 'album'
        },
        {
            img: '/images/artists/171.jpg',
            id: '171',
            type: 'artist'
        },
        {
            img: '/images/albums/172.jpg',
            id: '172',
            type: 'album'
        },
        {
            img: '/images/artists/172.jpg',
            id: '172',
            type: 'artist'
        },
        {
            img: '/images/albums/173.jpg',
            id: '173',
            type: 'album'
        },
        {
            img: '/images/artists/173.jpg',
            id: '173',
            type: 'artist'
        },
        {
            img: '/images/albums/174.jpg',
            id: '174',
            type: 'album'
        },
        {
            img: '/images/artists/174.jpg',
            id: '174',
            type: 'artist'
        },
        {
            img: '/images/albums/175.jpg',
            id: '175',
            type: 'album'
        },
        {
            img: '/images/artists/175.jpg',
            id: '175',
            type: 'artist'
        },
        {
            img: '/images/albums/176.jpg',
            id: '176',
            type: 'album'
        },
        {
            img: '/images/artists/176.jpg',
            id: '176',
            type: 'artist'
        },
        {
            img: '/images/albums/177.jpg',
            id: '177',
            type: 'album'
        },
        {
            img: '/images/artists/177.jpg',
            id: '177',
            type: 'artist'
        },
        {
            img: '/images/albums/178.jpg',
            id: '178',
            type: 'album'
        },
        {
            img: '/images/artists/178.jpg',
            id: '178',
            type: 'artist'
        },
        {
            img: '/images/albums/179.jpg',
            id: '179',
            type: 'album'
        },
        {
            img: '/images/artists/179.jpg',
            id: '179',
            type: 'artist'
        },
        {
            img: '/images/albums/180.jpg',
            id: '180',
            type: 'album'
        },
        {
            img: '/images/artists/180.jpg',
            id: '180',
            type: 'artist'
        },
        {
            img: '/images/albums/181.jpg',
            id: '181',
            type: 'album'
        },
        {
            img: '/images/artists/181.jpg',
            id: '181',
            type: 'artist'
        },
        {
            img: '/images/albums/182.jpg',
            id: '182',
            type: 'album'
        },
        {
            img: '/images/artists/182.jpg',
            id: '182',
            type: 'artist'
        },
        {
            img: '/images/albums/183.jpg',
            id: '183',
            type: 'album'
        },
        {
            img: '/images/artists/183.jpg',
            id: '183',
            type: 'artist'
        },
        {
            img: '/images/albums/184.jpg',
            id: '184',
            type: 'album'
        },
        {
            img: '/images/artists/184.jpg',
            id: '184',
            type: 'artist'
        },
        {
            img: '/images/albums/185.jpg',
            id: '185',
            type: 'album'
        },
        {
            img: '/images/artists/185.jpg',
            id: '185',
            type: 'artist'
        },
        {
            img: '/images/albums/186.jpg',
            id: '186',
            type: 'album'
        },
        {
            img: '/images/artists/186.jpg',
            id: '186',
            type: 'artist'
        },
        {
            img: '/images/albums/187.jpg',
            id: '187',
            type: 'album'
        },
        {
            img: '/images/artists/187.jpg',
            id: '187',
            type: 'artist'
        },
        {
            img: '/images/albums/188.jpg',
            id: '188',
            type: 'album'
        },
        {
            img: '/images/artists/188.jpg',
            id: '188',
            type: 'artist'
        },
        {
            img: '/images/albums/189.jpg',
            id: '189',
            type: 'album'
        },
        {
            img: '/images/albums/190.jpg',
            id: '190',
            type: 'album'
        },
        {
            img: '/images/albums/191.jpg',
            id: '191',
            type: 'album'
        },
        {
            img: '/images/albums/192.jpg',
            id: '192',
            type: 'album'
        },
        {
            img: '/images/albums/193.jpg',
            id: '193',
            type: 'album'
        },
        {
            img: '/images/albums/194.jpg',
            id: '194',
            type: 'album'
        },
        {
            img: '/images/albums/195.jpg',
            id: '195',
            type: 'album'
        },
        {
            img: '/images/albums/196.jpg',
            id: '196',
            type: 'album'
        },
        {
            img: '/images/albums/197.jpg',
            id: '197',
            type: 'album'
        },
        {
            img: '/images/albums/198.jpg',
            id: '198',
            type: 'album'
        },
        {
            img: '/images/albums/199.jpg',
            id: '199',
            type: 'album'
        },
        {
            img: '/images/albums/200.jpg',
            id: '200',
            type: 'album'
        },
        
{
    img: '/images/albums/201.jpg',
    id: '201',
    type: 'album'
    },
    {
    img: '/images/albums/202.jpg',
    id: '202',
    type: 'album'
    },
    {
    img: '/images/albums/203.jpg',
    id: '203',
    type: 'album'
    },
    {
    img: '/images/albums/204.jpg',
    id: '204',
    type: 'album'
    },
    {
    img: '/images/albums/205.jpg',
    id: '205',
    type: 'album'
    },
    {
    img: '/images/albums/206.jpg',
    id: '206',
    type: 'album'
    },
    {
    img: '/images/albums/207.jpg',
    id: '207',
    type: 'album'
    },
    {
    img: '/images/albums/208.jpg',
    id: '208',
    type: 'album'
    },
    {
    img: '/images/albums/209.jpg',
    id: '209',
    type: 'album'
    },
    {
    img: '/images/albums/210.jpg',
    id: '210',
    type: 'album'
    },
    {
        img: '/images/albums/211.jpg',
        id: '211',
        type: 'album'
        },
        {
        img: '/images/albums/212.jpg',
        id: '212',
        type: 'album'
        },
        {
        img: '/images/albums/213.jpg',
        id: '213',
        type: 'album'
        },
        {
        img: '/images/albums/214.jpg',
        id: '214',
        type: 'album'
        },
        {
        img: '/images/albums/215.jpg',
        id: '215',
        type: 'album'
        },
        {
        img: '/images/albums/216.jpg',
        id: '216',
        type: 'album'
        },
        {
        img: '/images/albums/217.jpg',
        id: '217',
        type: 'album'
        },
        {
        img: '/images/albums/218.jpg',
        id: '218',
        type: 'album'
        },
        {
        img: '/images/albums/219.jpg',
        id: '219',
        type: 'album'
        },
        {
        img: '/images/albums/220.jpg',
        id: '220',
        type: 'album'
        },
        {
            img: '/images/albums/221.jpg',
            id: '221',
            type: 'album'
            },
            {
            img: '/images/albums/222.jpg',
            id: '222',
            type: 'album'
            },
            {
            img: '/images/albums/223.jpg',
            id: '223',
            type: 'album'
            },
            {
            img: '/images/albums/224.jpg',
            id: '224',
            type: 'album'
            },
            {
            img: '/images/albums/225.jpg',
            id: '225',
            type: 'album'
            },
            {
            img: '/images/albums/226.jpg',
            id: '226',
            type: 'album'
            },
            {
            img: '/images/albums/227.jpg',
            id: '227',
            type: 'album'
            },
            {
            img: '/images/albums/228.jpg',
            id: '228',
            type: 'album'
            },
            {
            img: '/images/albums/229.jpg',
            id: '229',
            type: 'album'
            },
            {
            img: '/images/albums/230.jpg',
            id: '230',
            type: 'album'
            },
            {
                img: '/images/albums/231.jpg',
                id: '231',
                type: 'album'
                },
                {
                img: '/images/albums/232.jpg',
                id: '232',
                type: 'album'
                },
                {
                img: '/images/albums/233.jpg',
                id: '233',
                type: 'album'
                },
                {
                img: '/images/albums/234.jpg',
                id: '234',
                type: 'album'
                },
                {
                img: '/images/albums/235.jpg',
                id: '235',
                type: 'album'
                },
                {
                img: '/images/albums/236.jpg',
                id: '236',
                type: 'album'
                },
                {
                img: '/images/albums/237.jpg',
                id: '237',
                type: 'album'
                },
                {
                img: '/images/albums/238.jpg',
                id: '238',
                type: 'album'
                },
                {
                img: '/images/albums/239.jpg',
                id: '239',
                type: 'album'
                },
                {
                img: '/images/albums/240.jpg',
                id: '240',
                type: 'album'
                },
                {
                    img: '/images/albums/241.jpg',
                    id: '241',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/242.jpg',
                    id: '242',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/243.jpg',
                    id: '243',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/244.jpg',
                    id: '244',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/245.jpg',
                    id: '245',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/246.jpg',
                    id: '246',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/247.jpg',
                    id: '247',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/248.jpg',
                    id: '248',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/249.jpg',
                    id: '249',
                    type: 'album'
                    },
                    {
                    img: '/images/albums/250.jpg',
                    id: '250',
                    type: 'album'
                    },
                    {
                        img: '/images/albums/251.jpg',
                        id: '251',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/252.jpg',
                        id: '252',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/253.jpg',
                        id: '253',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/254.jpg',
                        id: '254',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/255.jpg',
                        id: '255',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/256.jpg',
                        id: '256',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/257.jpg',
                        id: '257',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/258.jpg',
                        id: '258',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/259.jpg',
                        id: '259',
                        type: 'album'
                        },
                        {
                        img: '/images/albums/260.jpg',
                        id: '260',
                        type: 'album'
                        },
                        {
                            img: '/images/albums/261.jpg',
                            id: '261',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/262.jpg',
                            id: '262',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/263.jpg',
                            id: '263',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/264.jpg',
                            id: '264',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/265.jpg',
                            id: '265',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/266.jpg',
                            id: '266',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/267.jpg',
                            id: '267',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/268.jpg',
                            id: '268',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/269.jpg',
                            id: '269',
                            type: 'album'
                            },
                            {
                            img: '/images/albums/270.jpg',
                            id: '270',
                            type: 'album'
                            },
                            {
                                img: '/images/albums/271.jpg',
                                id: '271',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/272.jpg',
                                id: '272',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/273.jpg',
                                id: '273',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/274.jpg',
                                id: '274',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/275.jpg',
                                id: '275',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/276.jpg',
                                id: '276',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/277.jpg',
                                id: '277',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/278.jpg',
                                id: '278',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/279.jpg',
                                id: '279',
                                type: 'album'
                                },
                                {
                                img: '/images/albums/280.jpg',
                                id: '280',
                                type: 'album'
                                },
                                {
                                    img: '/images/albums/281.jpg',
                                    id: '281',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/282.jpg',
                                    id: '282',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/283.jpg',
                                    id: '283',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/284.jpg',
                                    id: '284',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/285.jpg',
                                    id: '285',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/286.jpg',
                                    id: '286',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/287.jpg',
                                    id: '287',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/288.jpg',
                                    id: '288',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/289.jpg',
                                    id: '289',
                                    type: 'album'
                                    },
                                    {
                                    img: '/images/albums/290.jpg',
                                    id: '290',
                                    type: 'album'
                                    },
                                    {
                                        img: '/images/albums/291.jpg',
                                        id: '291',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/292.jpg',
                                        id: '292',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/293.jpg',
                                        id: '293',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/294.jpg',
                                        id: '294',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/295.jpg',
                                        id: '295',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/296.jpg',
                                        id: '296',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/297.jpg',
                                        id: '297',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/298.jpg',
                                        id: '298',
                                        type: 'album'
                                        },
                                        {
                                        img: '/images/albums/299.jpg',
                                        id: '299',
                                        type: 'album'
                                        },
];

export default ImageCollauge