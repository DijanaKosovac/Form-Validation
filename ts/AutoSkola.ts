/// <reference path="Ispit.ts" />

class AutoSkola {
    private _naziv: string;
    private _instruktori: Instruktor[];
    private _ispiti: Ispit[];

   constructor(naziv: string) {
       this._naziv = naziv;
       this._instruktori = [];
       this._ispiti = [];
   }



	public get naziv(): string {
		return this._naziv;
	}

 
	public set naziv(value: string) {
		this._naziv = value;
	}

  
	public get instruktori(): Instruktor[] {
		return this._instruktori;
	}

   
	public set instruktori(value: Instruktor[]) {
		this._instruktori = value;
	}

	public get ispiti(): Ispit[] {
		return this._ispiti;
	}

   
	public set ispiti(value: Ispit[]) {
		this._ispiti = value;
    }
    
    public dodajIspit(ispit: Ispit): void {
        this._ispiti.push(ispit);
    }

    public refreshIspis(): void {
        let tbody: HTMLElement = document.getElementById('tbody');
        let output: string = '';
        let klasa:string = '';

        for(let i = 0; i < this._ispiti.length; i++) {
            if(this._ispiti[i].brojBodova > 55) {
                klasa = `<td class = 'green'>`;
            } else {
                klasa = `<td class = 'red'>`;
            }

            output += `<tr><td>${i+1}</td><td>${this._ispiti[i].imeKandidata} ${this._ispiti[i].prezimeKandidata}</td><td>${this._ispiti[i].instruktor.ime} ${this._ispiti[i].instruktor.prezime}</td><td>${this._ispiti[i].nacinPolaganja}</td><td>${this._ispiti[i].datum}</td>${klasa}${this._ispiti[i].brojBodova}</td></tr>`;
        }

        tbody.innerHTML = `${output}`;

    }

    public najslabijiKandidatPoInstruktoru(nacinPolaganja:string,instruktor:Instruktor):void {

        let jmbgInstruktora: Instruktor = this._instruktori.filter(elem => elem.jmbg == instruktor.jmbg)[0];

        let ispitiZaNacinPolaganja: Ispit[] = this._ispiti.filter(elem => elem.instruktor == jmbgInstruktora && elem.nacinPolaganja == nacinPolaganja);

        let najmanjeBodova: Ispit = ispitiZaNacinPolaganja.reduce((preval,val) => {
            if(preval.brojBodova < val.brojBodova)
            return preval;
        else
            return val;
        });

  
        console.log(najmanjeBodova);

        let podaci = document.getElementById('podaci');

        podaci.innerHTML = `<h3>Najslabiji kandidat za ${nacinPolaganja} kod instruktora ${aktivanInstruktor.ime} ${aktivanInstruktor.prezime} je ${najmanjeBodova.imeKandidata} ${najmanjeBodova.prezimeKandidata}</h3>`;

    }

    public najboljiInstruktoriPoNacinuPolaganja():void {


        let peraTeorija: Ispit[] = this._ispiti.filter(elem => elem.instruktor.ime == 'Pera' &&  elem.instruktor.prezime == 'Peric' && elem.nacinPolaganja == 'Teorija');
     
        let mikaTeorija: Ispit[] = this._ispiti.filter(elem => elem.instruktor.ime == 'Mika' &&  elem.instruktor.prezime == 'Mikic' && elem.nacinPolaganja == 'Teorija');
     
        let zikaTeorija: Ispit[] = this._ispiti.filter(elem => elem.instruktor.ime == 'Zika' &&  elem.instruktor.prezime == 'Zikic' &&  elem.nacinPolaganja == 'Teorija');

        let peraProsekTeorija: number = peraTeorija.reduce((preval,val) => preval  + val.brojBodova,0) / peraTeorija.length;

        let mikaProsekTeorija: number = mikaTeorija.reduce((preval,val) => preval  + val.brojBodova,0) / mikaTeorija.length;
        
        let zikaProsekTeorija: number = zikaTeorija.reduce((preval,val) => preval  + val.brojBodova,0) / zikaTeorija.length;

        let proseciTeorija: number[] = [];

        let katTeorija: Ispit[] = [];

        if(peraProsekTeorija > mikaProsekTeorija && peraProsekTeorija > zikaProsekTeorija) {
            katTeorija = peraTeorija;
            proseciTeorija.push(peraProsekTeorija);
        } else if(mikaProsekTeorija > zikaProsekTeorija) {
            katTeorija = mikaTeorija;
            proseciTeorija.push(mikaProsekTeorija);
        } else {
            katTeorija = zikaTeorija;
            proseciTeorija.push(zikaProsekTeorija);
        }

        
    
     
        let peraPrakticno = this._ispiti.filter(elem => elem.instruktor.ime == 'Pera' && elem.instruktor.prezime == 'Peric' &&  elem.nacinPolaganja == 'Prakticno');
     
        let mikaPrakticno = this._ispiti.filter(elem => elem.instruktor.ime == 'Mika' &&  elem.instruktor.prezime == 'Mikic' && elem.nacinPolaganja == 'Prakticno');
     
        let zikaPrakticno = this._ispiti.filter(elem => elem.instruktor.ime == 'Zika' &&  elem.instruktor.prezime == 'Zikic' && elem.nacinPolaganja == 'Prakticno');

        let proseci: number[] = [];
     

        let peraProsekPrakticno: number = peraPrakticno.reduce((preval,val) => preval  + val.brojBodova,0) / peraPrakticno.length;

        let mikaProsekPrakticno: number = mikaPrakticno.reduce((preval,val) => preval  + val.brojBodova,0) / mikaPrakticno.length;

        let zikaProsekPrakticno: number = zikaPrakticno.reduce((preval,val) => preval  + val.brojBodova,0) / zikaPrakticno.length;



        let katPrakticno: Ispit[] = [];

        if(peraProsekPrakticno > mikaProsekPrakticno && peraProsekPrakticno > zikaProsekPrakticno) {
            katPrakticno = peraPrakticno;
            proseci.push(peraProsekPrakticno);
        } else if(mikaProsekPrakticno > zikaProsekPrakticno) {
            katPrakticno = mikaPrakticno;
            proseci.push(mikaProsekPrakticno);
        } else {
            katPrakticno = zikaPrakticno;
            proseci.push(zikaProsekPrakticno);

        }


        let podaci = document.getElementById('podaci');

        podaci.innerHTML = `<h3> Instruktor sa najboljom prolaznosti za teoriju je ${katTeorija[0].instruktor.ime} ${katTeorija[0].instruktor.prezime} sa prosekom od ${proseciTeorija[0]}</h3> <br> <h3>Instruktor sa najboljom prolaznosti sa prakticno je ${katPrakticno[0].instruktor.ime} ${katPrakticno[0].instruktor.prezime} sa prosekom ${proseci[0]} boda </h3> `


}
}
