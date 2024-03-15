class Logout {
    // Definisikan locator dari elemen
    get klikProfile(){
        return $('#menu-button-14'); //locator klik profile
    }

    get klikLogout(){
        return $('#menu-list-14-menuitem-12'); //locator klik Logout
    }

    //Definisikan action/interaksi yang dilakukan pada elemen tersebut 

    async logout(){
        await this.klikProfile.scrollIntoView();
        await this.klikProfile.click();
        await this.klikLogout.click();
    }
}

module.exports = new Logout();