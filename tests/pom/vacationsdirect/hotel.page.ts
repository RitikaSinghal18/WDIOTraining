import BasePage from "./basePage";

export class HotelPage extends BasePage {

    protected get destination(): WebdriverIO.Element { return $('input[name="Destination"]'); }

    protected get checkInDate(){
        return $('input[name="CheckIn"]');
    }

    protected get checkOutDate(){
        return $('input[name="CheckOut"]');
    }

    protected get searchButton(){
        return $('[data-qaid="Button_HotelSubmitSearch"]');
    }

    public enterDestination(destination : string){
        this.destination.setValue(destination);
    }

    public enterCheckInDate(checkIn : string){
        this.checkInDate.setValue(checkIn);
    }

    public enterCheckOutDate(checkout : string){
        (this.checkOutDate).setValue(checkout);
    }

    public clickOnHotelSearchButton(){
        this.searchButton.click();
    }
}

