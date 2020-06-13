var Instruktor = /** @class */ (function () {
    function Instruktor(ime, prezime, jmbg) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
    }
    Object.defineProperty(Instruktor.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: true,
        configurable: true
    });
    return Instruktor;
}());
/// <reference path="Instruktor.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(instruktor, imeKandidata, prezimeKandidata, jmbgKandidata, nacinPolaganja, datum, brojBodova) {
        this._instruktor = instruktor;
        this._imeKandidata = imeKandidata;
        this._prezimeKandidata = prezimeKandidata;
        this._jmbgKandidata = jmbgKandidata;
        this._nacinPolaganja = nacinPolaganja;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "instruktor", {
        /**
         * Getter instruktor
         * @return {Instruktor}
         */
        get: function () {
            return this._instruktor;
        },
        /**
         * Setter instruktor
         * @param {Instruktor} value
         */
        set: function (value) {
            this._instruktor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeKandidata", {
        /**
         * Getter imeKandidata
         * @return {string}
         */
        get: function () {
            return this._imeKandidata;
        },
        /**
         * Setter imeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._imeKandidata = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeKandidata", {
        /**
         * Getter prezimeKandidata
         * @return {string}
         */
        get: function () {
            return this._prezimeKandidata;
        },
        /**
         * Setter prezimeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._prezimeKandidata = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "nacinPolaganja", {
        /**
         * Getter nacinPolaganja
         * @return {string}
         */
        get: function () {
            return this._nacinPolaganja;
        },
        /**
         * Setter nacinPolaganja
         * @param {string} value
         */
        set: function (value) {
            this._nacinPolaganja = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "datum", {
        /**
         * Getter datum
         * @return {string}
         */
        get: function () {
            return this._datum;
        },
        /**
         * Setter datum
         * @param {string} value
         */
        set: function (value) {
            this._datum = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojBodova", {
        /**
         * Getter brojBodova
         * @return {number}
         */
        get: function () {
            return this._brojBodova;
        },
        /**
         * Setter brojBodova
         * @param {number} value
         */
        set: function (value) {
            this._brojBodova = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "jmbgKandidata", {
        /**
         * Getter jmbgKandidata
         * @return {number}
         */
        get: function () {
            return this._jmbgKandidata;
        },
        /**
         * Setter jmbgKandidata
         * @param {number} value
         */
        set: function (value) {
            this._jmbgKandidata = value;
        },
        enumerable: true,
        configurable: true
    });
    return Ispit;
}());
/// <reference path="Ispit.ts" />
var AutoSkola = /** @class */ (function () {
    function AutoSkola(naziv) {
        this._naziv = naziv;
        this._instruktori = [];
        this._ispiti = [];
    }
    Object.defineProperty(AutoSkola.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "instruktori", {
        get: function () {
            return this._instruktori;
        },
        set: function (value) {
            this._instruktori = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "ispiti", {
        get: function () {
            return this._ispiti;
        },
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: true,
        configurable: true
    });
    AutoSkola.prototype.dodajIspit = function (ispit) {
        this._ispiti.push(ispit);
    };
    AutoSkola.prototype.refreshIspis = function () {
        var tbody = document.getElementById('tbody');
        var output = '';
        var klasa = '';
        for (var i = 0; i < this._ispiti.length; i++) {
            if (this._ispiti[i].brojBodova > 55) {
                klasa = "<td class = 'green'>";
            }
            else {
                klasa = "<td class = 'red'>";
            }
            output += "<tr><td>" + (i + 1) + "</td><td>" + this._ispiti[i].imeKandidata + " " + this._ispiti[i].prezimeKandidata + "</td><td>" + this._ispiti[i].instruktor.ime + " " + this._ispiti[i].instruktor.prezime + "</td><td>" + this._ispiti[i].nacinPolaganja + "</td><td>" + this._ispiti[i].datum + "</td>" + klasa + this._ispiti[i].brojBodova + "</td></tr>";
        }
        tbody.innerHTML = "" + output;
    };
    AutoSkola.prototype.najslabijiKandidatPoInstruktoru = function (nacinPolaganja, instruktor) {
        var jmbgInstruktora = this._instruktori.filter(function (elem) { return elem.jmbg == instruktor.jmbg; })[0];
        var ispitiZaNacinPolaganja = this._ispiti.filter(function (elem) { return elem.instruktor == jmbgInstruktora && elem.nacinPolaganja == nacinPolaganja; });
        var najmanjeBodova = ispitiZaNacinPolaganja.reduce(function (preval, val) {
            if (preval.brojBodova < val.brojBodova)
                return preval;
            else
                return val;
        });
        console.log(najmanjeBodova);
        var podaci = document.getElementById('podaci');
        podaci.innerHTML = "<h3>Najslabiji kandidat za " + nacinPolaganja + " kod instruktora " + aktivanInstruktor.ime + " " + aktivanInstruktor.prezime + " je " + najmanjeBodova.imeKandidata + " " + najmanjeBodova.prezimeKandidata + "</h3>";
    };
    AutoSkola.prototype.najboljiInstruktoriPoNacinuPolaganja = function () {
        var peraTeorija = this._ispiti.filter(function (elem) { return elem.instruktor.ime == 'Pera' && elem.instruktor.prezime == 'Peric' && elem.nacinPolaganja == 'Teorija'; });
        var mikaTeorija = this._ispiti.filter(function (elem) { return elem.instruktor.ime == 'Mika' && elem.instruktor.prezime == 'Mikic' && elem.nacinPolaganja == 'Teorija'; });
        var zikaTeorija = this._ispiti.filter(function (elem) { return elem.instruktor.ime == 'Zika' && elem.instruktor.prezime == 'Zikic' && elem.nacinPolaganja == 'Teorija'; });
        var peraProsekTeorija = peraTeorija.reduce(function (preval, val) { return preval + val.brojBodova; }, 0) / peraTeorija.length;
        var mikaProsekTeorija = mikaTeorija.reduce(function (preval, val) { return preval + val.brojBodova; }, 0) / mikaTeorija.length;
        var zikaProsekTeorija = zikaTeorija.reduce(function (preval, val) { return preval + val.brojBodova; }, 0) / zikaTeorija.length;
        var proseciTeorija = [];
        var katTeorija = [];
        if (peraProsekTeorija > mikaProsekTeorija && peraProsekTeorija > zikaProsekTeorija) {
            katTeorija = peraTeorija;
            proseciTeorija.push(peraProsekTeorija);
        }
        else if (mikaProsekTeorija > zikaProsekTeorija) {
            katTeorija = mikaTeorija;
            proseciTeorija.push(mikaProsekTeorija);
        }
        else {
            katTeorija = zikaTeorija;
            proseciTeorija.push(zikaProsekTeorija);
        }
        var peraPrakticno = this._ispiti.filter(function (elem) { return elem.instruktor.ime == 'Pera' && elem.instruktor.prezime == 'Peric' && elem.nacinPolaganja == 'Prakticno'; });
        var mikaPrakticno = this._ispiti.filter(function (elem) { return elem.instruktor.ime == 'Mika' && elem.instruktor.prezime == 'Mikic' && elem.nacinPolaganja == 'Prakticno'; });
        var zikaPrakticno = this._ispiti.filter(function (elem) { return elem.instruktor.ime == 'Zika' && elem.instruktor.prezime == 'Zikic' && elem.nacinPolaganja == 'Prakticno'; });
        var proseci = [];
        var peraProsekPrakticno = peraPrakticno.reduce(function (preval, val) { return preval + val.brojBodova; }, 0) / peraPrakticno.length;
        var mikaProsekPrakticno = mikaPrakticno.reduce(function (preval, val) { return preval + val.brojBodova; }, 0) / mikaPrakticno.length;
        var zikaProsekPrakticno = zikaPrakticno.reduce(function (preval, val) { return preval + val.brojBodova; }, 0) / zikaPrakticno.length;
        var katPrakticno = [];
        if (peraProsekPrakticno > mikaProsekPrakticno && peraProsekPrakticno > zikaProsekPrakticno) {
            katPrakticno = peraPrakticno;
            proseci.push(peraProsekPrakticno);
        }
        else if (mikaProsekPrakticno > zikaProsekPrakticno) {
            katPrakticno = mikaPrakticno;
            proseci.push(mikaProsekPrakticno);
        }
        else {
            katPrakticno = zikaPrakticno;
            proseci.push(zikaProsekPrakticno);
        }
        var podaci = document.getElementById('podaci');
        podaci.innerHTML = "<h3> Instruktor sa najboljom prolaznosti za teoriju je " + katTeorija[0].instruktor.ime + " " + katTeorija[0].instruktor.prezime + " sa prosekom od " + proseciTeorija[0] + "</h3> <br> <h3>Instruktor sa najboljom prolaznosti sa prakticno je " + katPrakticno[0].instruktor.ime + " " + katPrakticno[0].instruktor.prezime + " sa prosekom " + proseci[0] + " boda </h3> ";
    };
    return AutoSkola;
}());
/// <reference path="AutoSkola.ts" />
var autoSkola;
var aktivanInstruktor;
function promeniAktivnog(selekt) {
    aktivanInstruktor = autoSkola.instruktori.filter(function (el) { return el.jmbg == Number(selekt.value); })[0];
    autoSkola.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    var dugmeDodaj = document.getElementById('dodajIspit');
    dugmeDodaj.addEventListener('click', function () {
        var ime = document.getElementById('ime').value;
        var prezime = document.getElementById('prezime').value;
        var jmbg = document.getElementById('jmbg').value;
        var datum = document.getElementById('datum').value;
        var bodoviTeorija = document.getElementById('teorija').value;
        var bodoviPrakticno = document.getElementById('prakticno').value;
        var objTeorija = new Ispit(aktivanInstruktor, ime, prezime, Number(jmbg), 'Teorija', datum, Number(bodoviTeorija));
        var objPrakticno = new Ispit(aktivanInstruktor, ime, prezime, Number(jmbg), 'Prakticno', datum, Number(bodoviPrakticno));
        autoSkola.dodajIspit(objTeorija);
        autoSkola.dodajIspit(objPrakticno);
        autoSkola.refreshIspis();
    });
    var najslabiji = document.getElementById('najslabijiKandidatPoInstruktoruZaNacinPolaganja');
    najslabiji.addEventListener('click', function () {
        var vrednost = document.getElementById('nacinPolaganjaSelekt').value;
        autoSkola.najslabijiKandidatPoInstruktoru(vrednost, aktivanInstruktor);
    });
    var najboljiInstruktor = document.getElementById('najboljiInstruktoriPoNacinuPolaganja');
    najboljiInstruktor.addEventListener('click', function () {
        autoSkola.najboljiInstruktoriPoNacinuPolaganja();
    });
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    var is1 = new Instruktor("Pera", "Peric", 1212975803555);
    var is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    var is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];
    var i11 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Teorija", "2018-02-11", 35);
    var i12 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Prakticno", "2018-03-05", 78);
    var i21 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Teorija", "2018-05-09", 89);
    var i22 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Prakticno", "2018-07-21", 95);
    var i31 = new Ispit(is1, "Dejan", "Dejan", 333, "Teorija", "2018-05-09", 48);
    var i32 = new Ispit(is1, "Dejan", "Dejan", 333, "Prakticno", "2018-07-21", 98);
    var i41 = new Ispit(is2, "Marko", "Markovic", 444, "Teorija", "2018-02-11", 85);
    var i42 = new Ispit(is2, "Marko", "Markovic", 444, "Prakticno", "2018-03-05", 94);
    var i51 = new Ispit(is2, "Nikola", "Nikolic", 555, "Teorija", "2018-05-09", 67);
    var i52 = new Ispit(is2, "Nikola", "Nikolic", 555, "Prakticno", "2018-07-21", 23);
    var i61 = new Ispit(is2, "Luka", "Lukic", 666, "Teorija", "2018-05-09", 83);
    var i62 = new Ispit(is2, "Luka", "Lukic", 666, "Prakticno", "2018-07-21", 51);
    var i71 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Teorija", "2018-02-11", 85);
    var i72 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Prakticno", "2018-03-05", 94);
    var i81 = new Ispit(is3, "Branko", "Brankovic", 888, "Teorija", "2018-05-09", 41);
    var i82 = new Ispit(is3, "Branko", "Brankovic", 888, "Prakticno", "2018-07-21", 21);
    var i91 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Teorija", "2018-05-09", 45);
    var i92 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Prakticno", "2018-07-21", 55);
    var i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Teorija", "2018-05-09", 97);
    var i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Prakticno", "2018-07-21", 99);
    var i111 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Teorija", "2018-05-09", 54);
    var i112 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Prakticno", "2018-07-21", 17);
    autoSkola.dodajIspit(i11);
    autoSkola.dodajIspit(i12);
    autoSkola.dodajIspit(i21);
    autoSkola.dodajIspit(i22);
    autoSkola.dodajIspit(i31);
    autoSkola.dodajIspit(i32);
    autoSkola.dodajIspit(i41);
    autoSkola.dodajIspit(i42);
    autoSkola.dodajIspit(i51);
    autoSkola.dodajIspit(i52);
    autoSkola.dodajIspit(i61);
    autoSkola.dodajIspit(i62);
    autoSkola.dodajIspit(i71);
    autoSkola.dodajIspit(i72);
    autoSkola.dodajIspit(i81);
    autoSkola.dodajIspit(i82);
    autoSkola.dodajIspit(i91);
    autoSkola.dodajIspit(i92);
    autoSkola.dodajIspit(i101);
    autoSkola.dodajIspit(i102);
    autoSkola.dodajIspit(i111);
    autoSkola.dodajIspit(i112);
    var select = document.getElementById("instruktor");
    autoSkola.instruktori.forEach(function (el) {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });
    aktivanInstruktor = autoSkola.instruktori[0];
    autoSkola.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map