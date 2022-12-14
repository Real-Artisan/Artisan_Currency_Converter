import { Component } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Artisan_Currency_Converter';
  result:any = null
  base: any = "NGN";
  compare:any = "GBP";
  baseBox = false;
  compareBox = false;
  amount: any;
  currencies = [
    {
      name: "US Dollar",
      short: "USD",
      symbol: "US$",
      flag: "../assets/flags/255px-Flag_of_the_United_States.svg.png"
    },
    {
      name: "Argentine Peso",
      short: "ARS",
      symbol: "ARS",
      flag: "../assets/flags/Flag-Argentina.webp"
    },
    {
      name: "Australian Dollar",
      short: "AUD",
      symbol: "A$",
      flag: "../assets/flags/Flag-Australia.webp"
    },
    {
      name: "Bahraini Dinar",
      short: "BHD",
      symbol: "BHD",
      flag: "../assets/flags/Flag-Bahrain.webp"
    },
    {
      name: "Brazillian Real",
      short: "BRL",
      symbol: "R$",
      flag: "../assets/flags/Flag-Brazil.webp"
    },
    {
      name: "British Pound",
      short: "GBP",
      symbol: "£",
      flag: "../assets/flags/Flag-United-Kingdom.webp"
    },
    {
      name: "Bulgarian Lev",
      short: "BGN",
      symbol: "BGN",
      flag: "../assets/flags/Flag_of_Bulgaria.svg.png"
    },
    {
      name: "Canadian Dollar",
      short: "CAD",
      symbol: "CA$",
      flag: "../assets/flags/Flag-Canada.webp"
    },
    {
      name: "Chilean Peso",
      short: "CLP",
      symbol: "CLP",
      flag: "../assets/flags/Flag-Chile.webp"
    },
    {
      name: "Chinese Yuan",
      short: "CNY",
      symbol: "CN¥",
      flag: "../assets/flags/Flag-China.webp"
    },
    {
      name: "Colombian Peso",
      short: "COP",
      symbol: "COP",
      flag: "../assets/flags/Flag-Colombia.webp"
    },
    {
      name: "Costa Rican Colon",
      short: "CRC",
      symbol: "CRC",
      flag: "../assets/flags/Flag-Costa-Rica.webp"
    },
    {
      name: "Croatian Kuna",
      short: "HRK",
      symbol: "HRK",
      flag: "../assets/flags/Flag-Croatia.webp"
    },
    {
      name: "Czech Koruna",
      short: "CZK",
      symbol: "CZK",
      flag: "../assets/flags/Flag_of_the_Czech_Republic.svg.png"
    },
    {
      name: "Danish Krone",
      short: "DKK",
      symbol: "DKK",
      flag: "../assets/flags/Flag-Denmark.webp"
    },
    {
      name: "Euro",
      short: "EUR",
      symbol: "€",
      flag: "../assets/flags/Flag_of_Europe.svg.png"
    },
    {
      name: "Hong Kong Dollar",
      short: "HKD",
      symbol: "HK$",
      flag: "../assets/flags/Flag_of_Hong_Kong.svg.png"
    },
    {
      name: "Hungarian Forint",
      short: "HUF",
      symbol: "HUF",
      flag: "../assets/flags/Flag-Hungary.webp"
    },
    {
      name: "Icelandic Króna",
      short: "ISK",
      symbol: "ISK",
      flag: "../assets/flags/Flag-Iceland.webp"
    },
    {
      name: "Indian Rupee",
      short: "INR",
      symbol: "₹",
      flag: "../assets/flags/Flag_of_India.svg.webp"
    },
    {
      name: "Israeli New Shekel",
      short: "ILS",
      symbol: "₪",
      flag: "../assets/flags/Flag-Israel.webp"
    },
    {
      name: "Japanese Yen",
      short: "JPY",
      symbol: "JP¥",
      flag: "../assets/flags/Flag_of_Japan.svg.png"
    },
    {
      name: "Jordanian Dinar",
      short: "JOD",
      symbol: "JOD",
      flag: "../assets/flags/Flag-Jordan.webp"
    },
    {
      name: "Kenyan Shilling",
      short: "KES",
      symbol: "KES",
      flag: "../assets/flags/Flag-Kenya.webp"
    },
    {
      name: "Kuwaiti Dinar",
      short: "KWD",
      symbol: "KWD",
      flag: "../assets/flags/Flag-Kuwait.webp"
    },
    {
      name: "Malaysian Ringgit",
      short: "MYR",
      symbol: "MYR",
      flag: "../assets/flags/Flag-Malaysia.webp"
    },
    {
      name: "Mexican Peso",
      short: "MXN",
      symbol: "MXN",
      flag: "../assets/flags/Flag-Mexico.webp"
    },
    {
      name: "Moroccan Dirham",
      short: "MAD",
      symbol: "MAD",
      flag: "../assets/flags/Flag-Morocco.webp"
    },
    {
      name: "New Taiwan Dollar",
      short: "TWD",
      symbol: "NT$",
      flag: "../assets/flags/Flag-Taiwan.webp"
    },
    {
      name: "Nigerian Naira",
      short: "NGN",
      symbol: "₦",
      flag: "../assets/flags/Flag-Nigeria.webp"
    },
    {
      name: "Norwegian Krone",
      short: "NOK",
      symbol: "NOK",
      flag: "../assets/flags/Flag-Norway.webp"
    },
    {
      name: "Omani Rial",
      short: "OMR",
      symbol: "OMR",
      flag: "../assets/flags/Flag-Oman.webp"
    },
    {
      name: "Peruvian Sol",
      short: "PEN",
      symbol: "PEN",
      flag: "../assets/flags/Flag_of_Peru.svg.png"
    },
    {
      name: "Polish Zloty",
      short: "PLN",
      symbol: "PLN",
      flag: "../assets/flags/Flag_of_Poland.svg.png"
    },
    {
      name: "Qatari Rial",
      short: "QAR",
      symbol: "QAR",
      flag: "../assets/flags/Flag-Qatar.webp"
    },
    {
      name: "Romanian Leu",
      short: "RON",
      symbol: "RON",
      flag: "../assets/flags/255px-Flag_of_Romania.svg.png"
    },
    {
      name: "Russian Ruble",
      short: "RUB",
      symbol: "RUB",
      flag: "../assets/flags/Flag-Russia.webp"
    },
    {
      name: "Saudi Riyal",
      short: "SAR",
      symbol: "SAR",
      flag: "../assets/flags/Flag-Saudi-Arabia.webp"
    },
    {
      name: "Serbian Dinar",
      short: "RSD",
      symbol: "RSD",
      flag: "../assets/flags/Flag-Serbia.webp"
    },
    {
      name: "Singapore Dollar",
      short: "SGD",
      symbol: "SGD",
      flag: "../assets/flags/Flag_of_Singapore.svg.png"
    },
    {
      name: "South African Rand",
      short: "ZAR",
      symbol: "ZAR",
      flag: "../assets/flags/Flag-South-Africa.webp"
    },
    {
      name: "South Korean Won",
      short: "KRW",
      symbol: "₩",
      flag: "../assets/flags/Flag-South-Korea.webp"
    },
    {
      name: "Swedish Krona",
      short: "SEK",
      symbol: "kr",
      flag: "../assets/flags/Flag_of_Sweden.svg.png"
    },
    {
      name: "Swiss Franc",
      short: "CHF",
      symbol: "CHF",
      flag: "../assets/flags/Flag-Switzerland.webp"
    },
    {
      name: "Thai Baht",
      short: "THB",
      symbol: "THB",
      flag: "../assets/flags/Flag-Thailand.webp"
    },
    {
      name: "Tunisian Dinar",
      short: "TND",
      symbol: "TND",
      flag: "../assets/flags/Flag-Tunisia.webp"
    },
    {
      name: "Turkish Lira",
      short: "TRY",
      symbol: "TRY",
      flag: "../assets/flags/Flag_of_Turkey.svg.png"
    },
    {
      name: "United Arab Emirates Dirham",
      short: "AED",
      symbol: "AED",
      flag: "../assets/flags/Flag_of_the_United_Arab_Emirates.svg.png"
    },
    
  ]
  constructor(private data: DataService) {
    this.base = this.currencies.find((data)=> data.short === this.base);
    this.compare = this.currencies.find((data)=> data.short === this.compare)
    // this.data.convert().subscribe((response) =>{
    //   this.result = response;
    //   console.log(response);
    // })
  }

  baseSelected(currency:any){
    this.baseBox = !this.baseBox;
    this.base = currency
    this.convertCurrencies(this.amount);

  }
  compareSelected(currency:any){
    this.compareBox = !this.compareBox;
    this.compare = currency
    this.convertCurrencies(this.amount);
  }
  convertCurrencies(amount: any){
    const base = this.base.short;
    const compare = this.compare.short;
    const amountt = String(amount);
    this.data.convert(base, compare, amountt).subscribe((res) => {
      this.result = res;
    })
  }
}
