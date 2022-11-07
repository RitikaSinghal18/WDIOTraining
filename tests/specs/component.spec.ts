import { HotelApp } from '../dsl/hotelApp';
import { HotelPageData } from '../data/hotelPageData';

const hotelApp = new HotelApp();
const hotelPageData = new HotelPageData();

var assert = require('assert');
describe('Verify functionality on hotel tab', () => {

  before(() => {
    hotelApp.openURL();
  });

  it('Verify User is able to click on hotel tab', () => {
    hotelApp.navigateToHotelTab();
    expect(hotelApp.isHotelTabSelected()).toBe("true");
  });

  it('Results displayed are corresponding to the input fields', () => {
    hotelApp.navigateToHotelTab();
    hotelApp.enterDestinationAndDates(hotelPageData.hotel.search.destination,
                                      hotelPageData.hotel.search.checkInDate, 
                                      hotelPageData.hotel.search.checkOutDate);
    hotelApp.searchHotels();

    var hotelResultsCount = hotelApp.getHotelResultsCount();
    
    expect(hotelResultsCount).toContain("1 to 25");

    var hotelResults = hotelApp.getHotelResultsInfo();
    
    expect(hotelResults).toContain(hotelPageData.hotel.result.destination);
    expect(hotelResults).toContain(hotelPageData.hotel.result.checkInDate);
    expect(hotelResults).toContain(hotelPageData.hotel.result.checkOutDate);
  });

});
