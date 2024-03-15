class Pelanggan {
    // Definisikan locator dari elemen
    get pelangganPage(){
        return $(':nth-child(9) > .css-ewi1jp'); //locator menu pelanggan
    }

    get tambahPelanggan(){
        return $('.css-1piskbq'); //locator tambah pelanggan
    }

    get namaInput(){
        return $('#nama'); //locator field nama
    }

    get nohpInput(){
        return $('//input[@id="no.hp"]'); //locator field no hp
    }

    get alamatInput(){
        return $('#alamat'); //locator field alamat
    }

    get keteranganInput(){
        return $('#keterangan'); //locator field keterangan
    }

    get simpanButton(){
        return $('.chakra-button'); //locator simpan button
    }

    get successMessage(){
        return $('#chakra-toast-manager-top-right'); //locator successful message
    }

    get alert(){
        return $('.chakra-alert'); //locator error phone message
    }

    get customerPageUrl(){
        return 'https://kasirdemo.belajarqa.com/customers'
    }

    //Definisikan action/interaksi yang dilakukan pada elemen tersebut 

    async assertCustomerUrl(){
        await expect(browser).toHaveUrl(this.customerPageUrl);
    }

    async openPelangganPage(){
        await this.pelangganPage.click();
    }

    async klikTambahPelanggan(){
        await this.tambahPelanggan.click();
    }

    async addCustomer(nama,nohp,alamat,keterangan){
        await this.namaInput.setValue(nama);
        await this.nohpInput.setValue(nohp);
        await this.alamatInput.setValue(alamat);
        await this.keteranganInput.setValue(keterangan);
        await this.simpanButton.click();
    }

    async assertsuccessMessage(){
        await expect(this.successMessage).toBeDisplayed();
    }

    async assertEmptyName(expectedEmptyName){
        await expect(this.alert).toHaveTextContaining(expectedEmptyName);
    }

    async getEmptyName(){
        return this.alert.getText();
    }

    async assertphoneErrorMessage(expectedphoneErrorMessage){
        await expect(this.alert).toHaveTextContaining(expectedphoneErrorMessage);
    }

    async getphoneErrorMessage(){
        return this.alert.getText();
    }

}

module.exports = new Pelanggan();