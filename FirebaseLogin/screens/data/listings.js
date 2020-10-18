
import colors from '../styles/colors';

const listing1Photo = require('./photos/listing1.png');
const listing2Photo = require('./photos/listing2.png');
const listing3Photo = require('./photos/listing3.png');
const listing4Photo = require('./photos/listing4.png');
const listing5Photo = require('./photos/listing5.png');
const listing6Photo = require('./photos/listing6.jpg');
const listing7Photo = require('./photos/listing7.png');
const listing8Photo = require('./photos/listing8.png');
const listing9Photo = require('./photos/listing9.png');
const listing10Photo = require('./photos/listing10.png');
const listing11Photo = require('./photos/listing11.png');
const listing12Photo = require('./photos/listing12.png');
const listing13Photo = require('./photos/listing13.png');
const listing14Photo = require('./photos/listing14.jpg');
const listing15Photo = require('./photos/listing15.jpg');
const listing16Photo = require('./photos/listing16.png');

const listings = [
  {
    title: 'HOSPITALS',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing1Photo,
        type: 'AfriGlobal',
        title: 'A diagnostic center with special attention to patient care. ',
        location: 'Ikeja, Lagos',
        price: 60,
        priceType: 'per person',
        stars: 3,
        color: colors.gray04,
      },
      {
        id: 2,
        photo: listing2Photo,
        type: 'Med In',
        title: 'Ear,nose,throat clinic,healthcare, Hospital Counseling,treatment Of Disease',
        location: 'Ketu, Lagos',
        price: 70,
        priceType: 'per person',
        stars: 5,
        color: colors.darkOrange,
      },
      {
        id: 3,
        photo: listing3Photo,
        type: 'Faratori eye clinic',
        title: 'The General Hospital,Lagos is a premier General Hospital, in Nigeria.',
        location: 'Obalende,Lagos',
        price: 47,
        priceType: 'per person',
        stars: 3,
        color: colors.black,
      },
      {
        id: 4,
        photo: listing4Photo,
        type: 'Ocuville eye clinic',
        title: 'Dedicated to providing patients with friendly,and technologically up-to-date care ',
        location: 'Ogudu, Lagos',
        price: 57,
        priceType: 'per person',
        stars: 3,
        color: colors.brown01,
      },
      {
        id: 5,
        photo: listing5Photo,
        type: 'Care Forte Pharmacy',
        title: 'Specialise in sales of a wide range of pharmaceutical and health products in Nigeria.',
        location: 'Victoria Island, Lagos',
        price: 61,
        priceType: 'per person',
        stars: 5,
        color: colors.blue,
      },
      {
        id: 6,
        photo: listing6Photo,
        type: 'Spring Care Pharmacy',
        title: 'Offer a wide range of quality pharmaceutical products,prescriptions,OTCs',
        location: 'Gbagada, Lagos',
        price: 55,
        priceType: 'per person',
        stars: 7,
        color: colors.brown02,
      },
    ],
  },
  {
    title: 'SPECIALISTS',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: listing7Photo,
        type: 'Dr Olu Lasaki',
        title: 'MBBS(Ib)',
        location: 'Lagos',
        price: 72,
        priceType: 'per night',
        stars: 5,
        color: colors.green01,
      },
      {
        id: 8,
        photo: listing8Photo,
        type: 'Dr (Miss) Atoyebi',
        title: 'Pediatrician',
        location: 'Lagos',
        price: 69,
        priceType: 'per night',
        stars: 4,
        color: colors.brown01,
      },
      {
        id: 9,
        photo: listing9Photo,
        type: 'Dr Adebayo Adefolaseye',
        title: 'ENT',
        location: 'Lagos',
        price: 152,
        priceType: 'per night',
        stars: 4,
        color: colors.darkOrange,
      },
      {
        id: 10,
        photo: listing10Photo,
        type: 'Dr. Akinwale AKINFE ',
        title: 'Ophthalmologist/ VitreoRetina Surgeon',
        location: 'Lagos',
        price: 116,
        priceType: 'per night',
        stars: 4,
        color: colors.gray04,
      },
      {
        id: 11,
        photo: listing11Photo,
        type: 'Dr. Banji Adesoji ',
        title: 'Psychiatrist',
        location: 'Lagos',
        price: 182,
        priceType: 'per night',
        stars: 4,
        color: colors.green01,
      },
    ],
  },
  {
    title: 'GYMS/SPAS',
    boldTitle: true,
    showAddToFav: false,
    listings: [
      {
        id: 12,
        photo: listing12Photo,
        type: 'Paslim Gym',
        title: 'Gym',
        price: '30',
        priceType: 'per person',
        stars: 5,
        color: colors.blue,
      },
      {
        id: 13,
        photo: listing13Photo,
        type: 'Vintage Point',
        title: 'Fitness and Beauty',
        price: '30',
        priceType: 'per person',
        stars: 2,
        color: colors.black,
      },
      {
        id: 14,
        photo: listing14Photo,
        type: 'Heritage Physiotherapy',
        title: 'Physiotherapy',
        price: '34',
        priceType: 'Lagos',
        stars: 3,
        color: colors.brown01,
      },
      {
        id: 15,
        photo: listing15Photo,
        type: 'Bids and Fit',
        title: 'Fitness',
        price: '',
        priceType: 'per person',
        stars: 4,
        color: colors.green01,
      },
      {
        id: 16,
        photo: listing16Photo,
        type: 'Breathe of paradize',
        title: 'SPA',
        price: '46',
        priceType: 'per person',
        stars: 4,
        color: colors.gray04,
      },
    ],
  },
];

export default listings;
