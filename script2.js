
//Конвертер
var d = new Date
console.log(d);
var yesterday = new Date(new Date() - 24*3600*1000);
var yesterday1 = new Date(new Date() - 48*3600*1000);
var yesterday2 = new Date(new Date() - 72*3600*1000);
var yesterday3 = new Date(new Date() - 96*3600*1000);
var yesterday4 = new Date(new Date() - 120*3600*1000);
var yesterday5 = new Date(new Date() - 144*3600*1000);
var yesterday6 = new Date(new Date() - 168*3600*1000);
var yesterday7 = new Date(new Date() - 192*3600*1000);
var yesterday8 = new Date(new Date() - 216*3600*1000);
var yesterday9 = new Date(new Date() - 240*3600*1000);

var yesterday10 = new Date(new Date() - 264*3600*1000);
var yesterday11 = new Date(new Date() - 288*3600*1000);
var yesterday12 = new Date(new Date() - 312*3600*1000);
var yesterday13 = new Date(new Date() - 336*3600*1000);
var yesterday14 = new Date(new Date() - 360*3600*1000);
var yesterday15 = new Date(new Date() - 384*3600*1000);
var yesterday16 = new Date(new Date() - 408*3600*1000);
var yesterday17 = new Date(new Date() - 432*3600*1000);
var yesterday18 = new Date(new Date() - 456*3600*1000);
var yesterday19 = new Date(new Date() - 480*3600*1000);

var yesterday20 = new Date(new Date() - 504*3600*1000);
var yesterday21 = new Date(new Date() - 528*3600*1000);
var yesterday22 = new Date(new Date() - 552*3600*1000);
var yesterday23 = new Date(new Date() - 576*3600*1000);
var yesterday24 = new Date(new Date() - 600*3600*1000);
var yesterday25 = new Date(new Date() - 624*3600*1000);
var yesterday26 = new Date(new Date() - 648*3600*1000);
var yesterday27 = new Date(new Date() - 672*3600*1000);
var yesterday28 = new Date(new Date() - 696*3600*1000);
var yesterday29 = new Date(new Date() - 720*3600*1000);
var wt = d.toLocaleDateString();
var yest = yesterday.toLocaleDateString();
var yest1 = yesterday1.toLocaleDateString();
var yest2 = yesterday2.toLocaleDateString();
var yest3 = yesterday3.toLocaleDateString();
var yest4 = yesterday4.toLocaleDateString();
var yest5 = yesterday5.toLocaleDateString();
var yest6 = yesterday6.toLocaleDateString();
var yest7 = yesterday7.toLocaleDateString();
var yest8 = yesterday8.toLocaleDateString();
var yest9 = yesterday9.toLocaleDateString();
var yest10 = yesterday10.toLocaleDateString();
var yest11 = yesterday11.toLocaleDateString();
var yest12 = yesterday12.toLocaleDateString();
var yest13 = yesterday13.toLocaleDateString();
var yest14 = yesterday14.toLocaleDateString();
var yest15 = yesterday15.toLocaleDateString();
var yest16 = yesterday16.toLocaleDateString();
var yest17 = yesterday17.toLocaleDateString();
var yest18 = yesterday18.toLocaleDateString();
var yest19 = yesterday19.toLocaleDateString();
var yest20 = yesterday20.toLocaleDateString();
var yest21 = yesterday21.toLocaleDateString();
var yest22 = yesterday22.toLocaleDateString();
var yest23 = yesterday23.toLocaleDateString();
var yest24 = yesterday24.toLocaleDateString();
var yest25 = yesterday25.toLocaleDateString();
var yest26 = yesterday26.toLocaleDateString();
var yest27 = yesterday27.toLocaleDateString();
var yest28 = yesterday28.toLocaleDateString();
var yest29 = yesterday29.toLocaleDateString();
//Форматирование даты
Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
    var dd  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    return "".concat(yyyy).concat(mm).concat(dd);
};

var now = d.yyyymmdd();
var yes = yesterday.yyyymmdd();
var yes1 = yesterday1.yyyymmdd();
var yes2 = yesterday2.yyyymmdd();
var yes3 = yesterday3.yyyymmdd();
var yes4 = yesterday4.yyyymmdd();
var yes5 = yesterday5.yyyymmdd();
var yes6 = yesterday6.yyyymmdd();
var yes7 = yesterday7.yyyymmdd();
var yes8 = yesterday8.yyyymmdd();
var yes9 = yesterday9.yyyymmdd();

var yes10 = yesterday10.yyyymmdd();
var yes11 = yesterday11.yyyymmdd();
var yes12 = yesterday12.yyyymmdd();
var yes13 = yesterday13.yyyymmdd();
var yes14 = yesterday14.yyyymmdd();
var yes15 = yesterday15.yyyymmdd();
var yes16 = yesterday16.yyyymmdd();
var yes17 = yesterday17.yyyymmdd();
var yes18 = yesterday18.yyyymmdd();
var yes19 = yesterday19.yyyymmdd();

var yes20 = yesterday20.yyyymmdd();
var yes21 = yesterday21.yyyymmdd();
var yes22 = yesterday22.yyyymmdd();
var yes23 = yesterday23.yyyymmdd();
var yes24 = yesterday24.yyyymmdd();
var yes25 = yesterday25.yyyymmdd();
var yes26 = yesterday26.yyyymmdd();
var yes27 = yesterday27.yyyymmdd();
var yes28 = yesterday28.yyyymmdd();
var yes29 = yesterday29.yyyymmdd();

//Приват наличный
var course600 = 0;var course601 = 0; var course602 = 0; var course603 = 0; var course604 = 0; var course605 = 0;
$.ajax({
    type: 'get',
    url: 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5',
    dataType: 'xml',
    timeout : 1000,
    success: function(response) {
        $(response).find("row").each(function(i,elem) {
            if($(elem).find("exchangerate").attr('ccy') == 'USD') {
                course600 = +$(elem).find('exchangerate').attr('buy');
            }
            if($(elem).find("exchangerate").attr('ccy') == 'USD') {
                course601 = +$(elem).find('exchangerate').attr('sale');
            }
            if($(elem).find("exchangerate").attr('ccy') == 'EUR') {
                course602 = +$(elem).find('exchangerate').attr('buy');
            }
            if($(elem).find("exchangerate").attr('ccy') == 'EUR') {
                course603 = +$(elem).find('exchangerate').attr('sale');
            }
            if($(elem).find("exchangerate").attr('ccy') == 'RUR') {
                course604 = +$(elem).find('exchangerate').attr('buy');
            }
            if($(elem).find("exchangerate").attr('ccy') == 'RUR') {
                course605 = +$(elem).find('exchangerate').attr('sale');
            }

        })
    }
});

var course = 0;var course1 = 0;var course2 = 0;var course3 = 0;var course4 = 0;var course5 = 0;var course6 = 0;var course7 = 0;var course8 = 0;var course9 = 0;var course10 = 0;var course11 = 0;var course12 = 0;var course13 = 0;var course14 = 0;var course15 = 0;var course16 = 0;var course17 = 0;var course18 = 0;var course19 = 0;var course20 = 0;var data = 0;
$.ajax({
    type: 'get',
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange',
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') { //доллар Сша
                course = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') { //евро
                course1 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') { //рубль
                course2 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') { //золото
                course3 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'CAD') { //канадский доллар
                course4 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'CNY') { //юань
                course5 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'CZK') { //чешская крона
                course6 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'JPY') { //японская иена
                course7 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'MDL') { //Молдовський лей
                course8 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'CHF') { //Швейцарский франк
                course9 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'GBP') { //Фунт стерлингов
                course10 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'BYN') { //Белорусский рубль
                course11 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'TRY') { //Турецкая лира
                course12 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'PLN') { //Злотый
                course13 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'ILS') { //Новый израильський шекель
                course14 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'UZS') { //Узбецкий сум
                course15 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'TMT') { //Туркменський новий манат
                course16 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'GEL') { //Лари
                course17 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'AMD') { //Армянский драм
                course18 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'KZT') { //Теньге
                course19 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'AZN') { //Азербайджанский манат
                course20 = +$(elem).find('rate').text();
            }
            {
                data = $(elem).find('exchangedate').text();//дата
            }
        })
    }
});
var course221 = 0;var course222 = 0;var course223 = 0;var course224 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${now}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course221 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course222 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course223 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course224 = +$(elem).find('rate').text();
            }

        })
    }
});
var course21 = 0;var course22 = 0;var course23 = 0;var course24 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course21 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course22 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course23 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course24 = +$(elem).find('rate').text();
            }

        })
    }
});
var course25 = 0;var course26 = 0;var course27 = 0;var course28 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes1}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course25 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course26 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course27 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course28 = +$(elem).find('rate').text();
            }

        })
    }
});
var course31 = 0;var course32 = 0;var course33 = 0;var course34 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes2}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course31 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course32 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course33 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course34 = +$(elem).find('rate').text();
            }

        })
    }
});
var course41 = 0;var course42 = 0;var course43 = 0;var course44 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes3}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course41 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course42 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course43 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course44 = +$(elem).find('rate').text();
            }

        })
    }
});
var course51 = 0;var course52 = 0;var course53 = 0;var course54 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes4}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course51 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course52 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course53 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course54 = +$(elem).find('rate').text();
            }

        })
    }
});
var course61 = 0;var course62 = 0;var course63 = 0;var course64 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes5}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course61 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course62 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course63 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course64 = +$(elem).find('rate').text();
            }

        })
    }
});
var course71 = 0;var course72 = 0;var course73 = 0;var course74 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes6}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course71 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course72 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course73 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course74 = +$(elem).find('rate').text();
            }

        })
    }
});
var course81 = 0;var course82 = 0;var course83 = 0;var course84 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes7}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course81 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course82 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course83 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course84 = +$(elem).find('rate').text();
            }

        })
    }
});
var course91 = 0;var course92 = 0;var course93 = 0;var course94 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes8}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course91 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course92 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course93 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course94 = +$(elem).find('rate').text();
            }

        })
    }
});
var course101 = 0;var course102 = 0;var course103 = 0;var course104 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes9}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course101 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course102 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course103 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course104 = +$(elem).find('rate').text();
            }

        })
    }
});
var course121 = 0;var course122 = 0;var course123 = 0;var course124 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes10}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course121 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course122 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course123 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course124 = +$(elem).find('rate').text();
            }

        })
    }
});
var course131 = 0;var course132 = 0;var course133 = 0;var course134 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes11}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course131 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course132 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course133 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course134 = +$(elem).find('rate').text();
            }

        })
    }
});
var course141 = 0;var course142 = 0;var course143 = 0;var course144 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes12}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course141 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course142 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course143 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course144 = +$(elem).find('rate').text();
            }

        })
    }
});
var url7 = 	`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes1}`;
console.log(url7);
var course151 = 0;var course152 = 0;var course153 = 0;var course154 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes13}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course151 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course152 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course153 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course154 = +$(elem).find('rate').text();
            }

        })
    }
});
var course161 = 0;var course162 = 0;var course163 = 0;var course164 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes14}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course161 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course162 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course163 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course164 = +$(elem).find('rate').text();
            }

        })
    }
});
var course171 = 0;var course172 = 0;var course173 = 0;var course174 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes15}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course171 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course172 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course173 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course174 = +$(elem).find('rate').text();
            }

        })
    }
});
var course181 = 0;var course182 = 0;var course183 = 0;var course184 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes16}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course181 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course182 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course183 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course184 = +$(elem).find('rate').text();
            }

        })
    }
});
var course191 = 0;var course192 = 0;var course193 = 0;var course194 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes17}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course191 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course192 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course193 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course194 = +$(elem).find('rate').text();
            }

        })
    }
});
var course231 = 0;var course232 = 0;var course233 = 0;var course234 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes18}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course231 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course232 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course233 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course234 = +$(elem).find('rate').text();
            }

        })
    }
});
var course241 = 0;var course242 = 0;var course243 = 0;var course244 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes19}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course241 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course242 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course243 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course244 = +$(elem).find('rate').text();
            }

        })
    }
});
var course251 = 0;var course252 = 0;var course253 = 0;var course254 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes20}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course251 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course252 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course253 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course254 = +$(elem).find('rate').text();
            }

        })
    }
});
var course261 = 0;var course262 = 0;var course263 = 0;var course264 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes21}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course261 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course262 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course263 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course264 = +$(elem).find('rate').text();
            }

        })
    }
});
var course271 = 0;var course272 = 0;var course273 = 0;var course274 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes22}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course271 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course272 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course273 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course274 = +$(elem).find('rate').text();
            }

        })
    }
});
var course281 = 0;var course282 = 0;var course283 = 0;var course284 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes23}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course281 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course282 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course283 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course284 = +$(elem).find('rate').text();
            }

        })
    }
});
var course291 = 0;var course292 = 0;var course293 = 0;var course294 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes24}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course291 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course292 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course293 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course294 = +$(elem).find('rate').text();
            }

        })
    }
});
var course301 = 0;var course302 = 0;var course303 = 0;var course304 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes25}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course301 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course302 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course303 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course304 = +$(elem).find('rate').text();
            }

        })
    }
});
var course311 = 0;var course312 = 0;var course313 = 0;var course314 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes26}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course311 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course312 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course313 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course314 = +$(elem).find('rate').text();
            }

        })
    }
});
var course321 = 0;var course322 = 0;var course323 = 0;var course324 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes27}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course321 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course322 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course323 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course324 = +$(elem).find('rate').text();
            }

        })
    }
});
var course331 = 0;var course332 = 0;var course333 = 0;var course334 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes28}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course331 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course332 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course333 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course334 = +$(elem).find('rate').text();
            }

        })
    }
});
var course341 = 0;var course342 = 0;var course343 = 0;var course344 = 0;
$.ajax({
    type: 'get',
    url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${yes29}`,
    dataType: 'xml',
    success: function(response) {
        $(response).find("currency").each(function(i,elem) {
            if($(elem).find('cc').text() == 'USD') {
                course341 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'EUR') {
                course342 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'RUB') {
                course343 = +$(elem).find('rate').text();
            }
            if($(elem).find('cc').text() == 'XAU') {
                course344 = +$(elem).find('rate').text();
            }

        })
    }
});


function showChart(){
    var d = new Array(31);
    d[0] = course341;
    d[1] = course331;
    d[2] = course321;
    d[3] = course311;
    d[4] = course301;
    d[5] = course291;
    d[6] = course281;
    d[7] = course271;
    d[8] = course261;
    d[9] = course251;
    d[10] = course241;
    d[11] = course231;
    d[12] = course191;
    d[13] = course181;
    d[14] = course171;
    d[15] = course161;
    d[16] = course151;
    d[17] = course141
    d[18] = course131;
    d[19] = course121;
    d[20] = course101;
    d[21] = course91;
    d[22] = course81;
    d[23] = course71;
    d[24] = course61;
    d[25] = course51;
    d[26] = course41;
    d[27] = course31;
    d[28] = course25;
    d[29] = course21;
    d[30] = course221;
    console.log(d);
    var d2 = new Array(31);
    d2[0] = course342;
    d2[1] = course332;
    d2[2] = course322;
    d2[3] = course312;
    d2[4] = course302;
    d2[5] = course292;
    d2[6] = course282;
    d2[7] = course272;
    d2[8] = course262;
    d2[9] = course252;
    d2[10] = course242;
    d2[11] = course232;
    d2[12] = course192;
    d2[13] = course182;
    d2[14] = course172;
    d2[15] = course162;
    d2[16] = course152;
    d2[17] = course142;
    d2[18] = course132;
    d2[19] = course122;
    d2[20] = course102;
    d2[21] = course92;
    d2[22] = course82;
    d2[23] = course72;
    d2[24] = course62;
    d2[25] = course52;
    d2[26] = course42;
    d2[27] = course32;
    d2[28] = course26;
    d2[29] = course22;
    d2[30] = course222;
    console.log(d2[0]);
    var d3 = new Array(31);
    d3[0] = course343;
    d3[1] = course333;
    d3[2] = course323;
    d3[3] = course313;
    d3[4] = course303;
    d3[5] = course293;
    d3[6] = course283;
    d3[7] = course273;
    d3[8] = course263;
    d3[9] = course253;
    d3[10] = course243;
    d3[11] = course233;
    d3[12] = course193;
    d3[13] = course183;
    d3[14] = course173;
    d3[15] = course163;
    d3[16] = course153;
    d3[17] = course143;
    d3[18] = course133;
    d3[19] = course123;
    d3[20] = course103;
    d3[21] = course93;
    d3[22] = course83;
    d3[23] = course73;
    d3[24] = course63;
    d3[25] = course53;
    d3[26] = course43;
    d3[27] = course33;
    d3[28] = course27;
    d3[29] = course23;
    d3[30] = course223;
    console.log(d3[0]);
    var d4 = new Array(31);
    d4[0] = course344;
    d4[1] = course334;
    d4[2] = course324;
    d4[3] = course314;
    d4[4] = course304;
    d4[5] = course294;
    d4[6] = course284;
    d4[7] = course274;
    d4[8] = course264;
    d4[9] = course254;
    d4[10] = course244;
    d4[11] = course234;
    d4[12] = course194;
    d4[13] = course184;
    d4[14] = course174;
    d4[15] = course164;
    d4[16] = course154;
    d4[17] = course144;
    d4[18] = course134;
    d4[19] = course124;
    d4[20] = course104;
    d4[21] = course94;
    d4[22] = course84;
    d4[23] = course74;
    d4[24] = course64;
    d4[25] = course54;
    d4[26] = course44;
    d4[27] = course34;
    d4[28] = course28;
    d4[29] = course24;
    d4[30] = course224;
    var d5 = new Array(31);
    d5[0] = parseFloat(course343*100).toFixed(3);
    d5[1] = parseFloat(course333*100).toFixed(3);
    d5[2] = parseFloat(course323*100).toFixed(3);
    d5[3] = parseFloat(course313*100).toFixed(3);
    d5[4] = parseFloat(course303*100).toFixed(3);
    d5[5] = parseFloat(course293*100).toFixed(3);
    d5[6] = parseFloat(course283*100).toFixed(3);
    d5[7] = parseFloat(course273*100).toFixed(3);
    d5[8] = parseFloat(course263*100).toFixed(3);
    d5[9] = parseFloat(course253*100).toFixed(3);
    d5[10] = parseFloat(course243*100).toFixed(3);
    d5[11] = parseFloat(course233*100).toFixed(3);
    d5[12] = parseFloat(course193*100).toFixed(3);
    d5[13] = parseFloat(course183*100).toFixed(3);
    d5[14] = parseFloat(course173*100).toFixed(3);
    d5[15] = parseFloat(course163*100).toFixed(3);
    d5[16] = parseFloat(course153*100).toFixed(3);
    d5[17] = parseFloat(course143*100).toFixed(3);
    d5[18] = parseFloat(course133*100).toFixed(3);
    d5[19] = parseFloat(course123*100).toFixed(3);
    d5[20] = parseFloat(course103*100).toFixed(3);
    d5[21] = parseFloat(course93*100).toFixed(3);
    d5[22] = parseFloat(course83*100).toFixed(3);
    d5[23] = parseFloat(course73*100).toFixed(3);
    d5[24] = parseFloat(course63*100).toFixed(3);
    d5[25] = parseFloat(course53*100).toFixed(3);
    d5[26] = parseFloat(course43*100).toFixed(3);
    d5[27] = parseFloat(course33*100).toFixed(3);
    d5[28] = parseFloat(course27*100).toFixed(3);
    d5[29] = parseFloat(course23*100).toFixed(3);
    d5[30] = parseFloat(course223*100).toFixed(3);
    console.log(d4[0]);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [yest29, yest28, yest27, yest26, yest25, yest24, yest23, yest22, yest21, yest20, yest19, yest18, yest17, yest16, yest15, yest14, yest13, yest12, yest11, yest10, yest9, yest8, yest7, yest6, yest5, yest4, yest3, yest2, yest1, yest, wt],
            datasets: [{
                label: 'USD',
                data: d,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [yest29, yest28, yest27, yest26, yest25, yest24, yest23, yest22, yest21, yest20, yest19, yest18, yest17, yest16, yest15, yest14, yest13, yest12, yest11, yest10, yest9, yest8, yest7, yest6, yest5, yest4, yest3, yest2, yest1, yest, wt],
            datasets: [{
                label: 'EUR',
                data: d2,
                backgroundColor: [
                    'rgba(80, 99, 132, 0.2)'

                ],
                borderColor: [
                    'rgba(55, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [yest29, yest28, yest27, yest26, yest25, yest24, yest23, yest22, yest21, yest20, yest19, yest18, yest17, yest16, yest15, yest14, yest13, yest12, yest11, yest10, yest9, yest8, yest7, yest6, yest5, yest4, yest3, yest2, yest1, yest, wt],
            datasets: [{
                label: 'RUB',
                data: d3,
                backgroundColor: [
                    'rgba(25, 9, 232, 0.2)'
                ],
                borderColor: [
                    'rgba(25, 9, 232, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart4').getContext('2d');
    var myChart4 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [yest29, yest28, yest27, yest26, yest25, yest24, yest23, yest22, yest21, yest20, yest19, yest18, yest17, yest16, yest15, yest14, yest13, yest12, yest11, yest10, yest9, yest8, yest7, yest6, yest5, yest4, yest3, yest2, yest1, yest, wt],
            datasets: [{
                label: 'XAU 1 тр. унция',
                data: d4,
                backgroundColor: [
                    'rgba(200, 199, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(100, 99, 32, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

    var barChartData = {
        labels: [yest29, yest28, yest27, yest26, yest25, yest24, yest23, yest22, yest21, yest20, yest19, yest18, yest17, yest16, yest15, yest14, yest13, yest12, yest11, yest10, yest9, yest8, yest7, yest6, yest5, yest4, yest3, yest2, yest1, yest, wt],
        datasets: [{
            label: 'USD',
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            yAxisID: 'y-axis-1',
            data:d,

        }, {
            label: 'EUR',
            backgroundColor: 'rgba(80, 99, 132, 0.4)',
            borderColor: 'rgba(80, 99, 132, 1)',
            borderWidth: 2,
            yAxisID: 'y-axis-2',
            data:d2,

        },
            {
                label: '100RUB',
                backgroundColor: 'rgba(25, 9, 232, 0.4)',
                borderColor: 'rgba(25, 9, 232, 1)',
                borderWidth: 1,
                yAxisID: 'y-axis-3',
                data:d5,

            }]
    };


    var ctx = document.getElementById('myChart5').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Динаміка курсу валют'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',// only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-2',
                }, {
                    type: 'linear',// only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-3',
                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });


}
setTimeout(showChart, 1100);
function myFunction() {
    var value1, value3, value4, value5, value6, value7, value8, value9, value51, value52, value53, value54, value55, value56;
    value1 = parseFloat($('#val1').val()).toFixed(2);
    value3 = parseFloat($('#val3').val()).toFixed(2);
    value4 = parseFloat($('#val4').val()).toFixed(2);
    value5 = parseFloat($('#val5').val()).toFixed(2);
    value6 = parseFloat($('#val6').val()).toFixed(2);
    value7 = parseFloat($('#val7').val()).toFixed(2);
    value8 = parseFloat($('#val8').val()).toFixed(2);
    value9 = parseFloat($('#val9').val()).toFixed(2);
    value51 = parseFloat($('#val51').val()).toFixed(2);
    value52 = parseFloat($('#val52').val()).toFixed(2);
    value53 = parseFloat($('#val53').val()).toFixed(2);
    value54 = parseFloat($('#val54').val()).toFixed(2);
    value55 = parseFloat($('#val55').val()).toFixed(2);
    value56 = parseFloat($('#val56').val()).toFixed(2);

    $('#sale').val(course601);
    $('#privat').val(course600);
    $('#privat1').val(course601);
    $('#privat11').val(course601);

    $('#privat21').val(course603);
    $('#privat3').val(course602);
    $('#privat2').val(course603);

    $('#privat4').val(course605);
    $('#privat41').val(course604);
    $('#privat42').val(course605);

    $('#rezultat1').val(data);
    $('#rezultat101').val((course4).toFixed(4));
    $('#rezultat102').val((course5).toFixed(4));
    $('#rezultat103').val((course6).toFixed(4));
    $('#rezultat104').val((course7).toFixed(4));
    $('#rezultat105').val((course8).toFixed(4));
    $('#rezultat106').val((course9).toFixed(4));
    $('#rezultat107').val((course10).toFixed(4));
    $('#rezultat108').val((course11).toFixed(4));
    $('#rezultat109').val((course12).toFixed(4));
    $('#rezultat110').val((course13).toFixed(4));
    $('#rezultat111').val((course14).toFixed(4));
    $('#rezultat112').val((course15).toFixed(4));
    $('#rezultat113').val((course16).toFixed(4));
    $('#rezultat114').val((course17).toFixed(4));
    $('#rezultat115').val((course18).toFixed(4));
    $('#rezultat116').val((course19).toFixed(4));
    $('#rezultat117').val((course20).toFixed(4));
    console.log(course1);
    function myFunction2() {
        $('#rezultat2').val((value3 / course).toFixed(4));
        $('#rezultat').val((value1 * course).toFixed(4));

        $('#rezultat4').val((value4 / course1).toFixed(4));
        $('#rezultat5').val((value5 * course1).toFixed(4));

        $('#rezultat6').val((value6 / course2).toFixed(4));
        $('#rezultat7').val((value7 * course2).toFixed(4));

        $('#rezultat8').val((value8 / (course2/course)).toFixed(4));
        $('#rezultat9').val((value9*course2/course).toFixed(4));
        $('#rezultat10').val(course3);
        $('#rezultat11').val((course3/31.1034768 ).toFixed(4));
        $('#rezultat88').val((course-(course21)).toFixed(4));
        $('#rezultat89').val((course1-(course22)).toFixed(4));
        $('#rezultat90').val((course3-(course224)).toFixed(4));
        console.log(course3);
        console.log(course224);
        $('#rezultat91').val(((course3-(course224))/31.1034768 ).toFixed(4));
        if((course-(course221))>0){
            document.getElementById("pict").innerHTML = '&#8657;'};
        if((course-(course221))<0){
            document.getElementById("pict").innerHTML = '&#8659;'};
        if((course-(course221))==0){
            document.getElementById("pict").innerHTML = '&#8660;'};
        if((course1-(course222))>0){
            document.getElementById("pict1").innerHTML = '&#8657;'};
        if((course1-(course222))<0){
            document.getElementById("pict1").innerHTML = '&#8659;'};
        if((course1-(course222))==0){
            document.getElementById("pict1").innerHTML = '&#8660;'};
        if((course3-(course224))>0){
            document.getElementById("pict2").innerHTML = '&#8657;'};
        if((course3-(course224))<0){
            document.getElementById("pict2").innerHTML = '&#8659;'};
        if((course3-(course224))==0){
            document.getElementById("pict2").innerHTML = '&#8660;'};
        if(course1=='undefined'){
            document.getElementById("rezultat4").innerHTML = ''};
        $('#privat').val((course600*value51).toFixed(2));
        $('#privat1').val((value52/course601).toFixed(2));
        $('#privat2').val((value53/course603).toFixed(2));
        $('#privat3').val((value54*course602).toFixed(2));

        $('#privat41').val((value55/course605).toFixed(2));
        $('#privat42').val((value56*course604).toFixed(2));
    }
    setTimeout(myFunction2, 400);
}
setTimeout(myFunction, 420);
$('input').on('keyup',function(){
    var value1, value3, value4, value5, value6, value7, value8, value9, value51, value52, value53, value54, value55, value56;
    value1 = parseFloat($('#val1').val()).toFixed(2);
    value3 = parseFloat($('#val3').val()).toFixed(2);
    value4 = parseFloat($('#val4').val()).toFixed(2);
    value5 = parseFloat($('#val5').val()).toFixed(2);
    value6 = parseFloat($('#val6').val()).toFixed(2);
    value7 = parseFloat($('#val7').val()).toFixed(2);
    value8 = parseFloat($('#val8').val()).toFixed(2);
    value9 = parseFloat($('#val9').val()).toFixed(2);
    value51 = parseFloat($('#val51').val()).toFixed(2);
    value52 = parseFloat($('#val52').val()).toFixed(2);
    value53 = parseFloat($('#val53').val()).toFixed(2);
    value54 = parseFloat($('#val54').val()).toFixed(2);
    value55 = parseFloat($('#val55').val()).toFixed(2);
    value56 = parseFloat($('#val56').val()).toFixed(2);

    $('#rezultat1').val(data);
    $('#rezultat2').val((value3 / course).toFixed(4));
    $('#rezultat').val((value1 * course).toFixed(4));

    $('#rezultat4').val((value4 / course1).toFixed(4));
    $('#rezultat5').val((value5 * course1).toFixed(4));

    $('#rezultat6').val((value6 / course2).toFixed(4));
    $('#rezultat7').val((value7 * course2).toFixed(4));

    $('#rezultat8').val((value8 / (course2/course)).toFixed(4));
    $('#rezultat9').val((value9*course2/course).toFixed(4));
    $('#rezultat10').val(course3);
    $('#rezultat11').val((course3/31.1034768 ).toFixed(5));
    $('#rezultat88').val((course-(course21/100)).toFixed(4));
    $('#rezultat89').val((course1-(course22/100)).toFixed(4));
    $('#rezultat90').val((course3-(course224)).toFixed(5));
    $('#rezultat91').val(((course3-(course224))/31.1034768 ).toFixed(5));
    $('#privat').val((course600*value51).toFixed(2));
    $('#privat1').val((value52/course601).toFixed(2));
    $('#privat2').val((value53/course603).toFixed(2));
    $('#privat3').val((value54*course602).toFixed(2));
    $('#privat41').val((value55/course605).toFixed(2));
    $('#privat42').val((value56*course604).toFixed(2));

    //Проверка ввода
    $(document).on('keyup','#val52', function(event){

        var input = event.currentTarget.value;

        if(input.search(/^0/) != -1){
            alert("Вы ввели 0???!");
        }
    });
});

function showChart2(){
    var jsonString = '[{"Дата":"28.04.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.1453},{"Дата":"29.04.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.1453},{"Дата":"30.04.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.1453},{"Дата":"01.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.1453},{"Дата":"02.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.1453},{"Дата":"03.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2656.093},{"Дата":"04.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2652.3425},{"Дата":"05.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.5778},{"Дата":"06.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.5778},{"Дата":"07.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.5778},{"Дата":"08.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.5778},{"Дата":"09.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.5778},{"Дата":"10.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2650.9341},{"Дата":"11.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2645.5859},{"Дата":"12.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2642.893},{"Дата":"13.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.4312},{"Дата":"14.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.4312},{"Дата":"15.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.4312},{"Дата":"16.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.1947},{"Дата":"17.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2643.3401},{"Дата":"18.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2641.7446},{"Дата":"19.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2639.3442},{"Дата":"20.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2639.3442},{"Дата":"21.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2639.3442},{"Дата":"22.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2636.9659},{"Дата":"23.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.1917},{"Дата":"24.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.4507},{"Дата":"25.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2626.6118},{"Дата":"26.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.667},{"Дата":"27.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.667},{"Дата":"28.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.667},{"Дата":"29.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.5368},{"Дата":"30.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2638.7789},{"Дата":"31.05.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2635.2778},{"Дата":"01.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2631.0335},{"Дата":"02.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.0953},{"Дата":"03.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.0953},{"Дата":"04.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.0953},{"Дата":"05.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.0953},{"Дата":"06.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2628.0938},{"Дата":"07.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2624.6584},{"Дата":"08.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.5414},{"Дата":"09.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2614.9214},{"Дата":"10.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2614.9214},{"Дата":"11.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2614.9214},{"Дата":"12.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.4759},{"Дата":"13.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2607.0702},{"Дата":"14.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2599.5212},{"Дата":"15.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2601.4971},{"Дата":"16.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.7115},{"Дата":"17.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.7115},{"Дата":"18.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.7115},{"Дата":"19.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.19},{"Дата":"20.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.3126},{"Дата":"21.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2603.488},{"Дата":"22.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.3602},{"Дата":"23.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.5695},{"Дата":"24.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.5695},{"Дата":"25.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.5695},{"Дата":"26.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2603.1112},{"Дата":"27.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2603.6606},{"Дата":"28.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2603.6606},{"Дата":"29.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2608.012},{"Дата":"30.06.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2609.8994},{"Дата":"01.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2609.8994},{"Дата":"02.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2609.8994},{"Дата":"03.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.3367},{"Дата":"04.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2599.4486},{"Дата":"05.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2601.7365},{"Дата":"06.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2611.9317},{"Дата":"07.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2606.0308},{"Дата":"08.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2606.0308},{"Дата":"09.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2606.0308},{"Дата":"10.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.2967},{"Дата":"11.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.4175},{"Дата":"12.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2597.2011},{"Дата":"13.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2591.0673},{"Дата":"14.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2596.8636},{"Дата":"15.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2596.8636},{"Дата":"16.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2596.8636},{"Дата":"17.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2601.7657},{"Дата":"18.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2596.4818},{"Дата":"19.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2593.0157},{"Дата":"20.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2594.4129},{"Дата":"21.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2592.8333},{"Дата":"22.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2592.8333},{"Дата":"23.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2592.8333},{"Дата":"24.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2588.9731},{"Дата":"25.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2582.2625},{"Дата":"26.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2584.3721},{"Дата":"27.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2588.486},{"Дата":"28.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2590.0435},{"Дата":"29.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2590.0435},{"Дата":"30.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2590.0435},{"Дата":"31.07.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2591.5589},{"Дата":"01.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2585.4789},{"Дата":"02.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2585.7073},{"Дата":"03.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2590.418},{"Дата":"04.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2588.5752},{"Дата":"05.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2588.5752},{"Дата":"06.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2588.5752},{"Дата":"07.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2584.2893},{"Дата":"08.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2578.4907},{"Дата":"09.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2573.2557},{"Дата":"10.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2572.4503},{"Дата":"11.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2569.2368},{"Дата":"12.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2569.2368},{"Дата":"13.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2569.2368},{"Дата":"14.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2569.5711},{"Дата":"15.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2563.0682},{"Дата":"16.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2559.828},{"Дата":"17.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2557.272},{"Дата":"18.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2550.6409},{"Дата":"19.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2549.0401},{"Дата":"20.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2549.0401},{"Дата":"21.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2549.0401},{"Дата":"22.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2544.3168},{"Дата":"23.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2545.1704},{"Дата":"24.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2545.1704},{"Дата":"25.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2545.1704},{"Дата":"26.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2545.1704},{"Дата":"27.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2545.1704},{"Дата":"28.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2554.558},{"Дата":"29.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2551.5762},{"Дата":"30.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2544.0576},{"Дата":"31.08.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2557.9541},{"Дата":"01.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2569.3957},{"Дата":"02.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2569.3957},{"Дата":"03.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2569.3957},{"Дата":"04.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2574.8384},{"Дата":"05.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2590.6249},{"Дата":"06.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2595.4263},{"Дата":"07.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2598.2213},{"Дата":"08.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.3183},{"Дата":"09.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.3183},{"Дата":"10.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.3183},{"Дата":"11.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2607.2964},{"Дата":"12.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2600.8703},{"Дата":"13.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2601.8958},{"Дата":"14.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2607.9643},{"Дата":"15.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.2016},{"Дата":"16.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.2016},{"Дата":"17.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.2016},{"Дата":"18.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.4386},{"Дата":"19.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.0679},{"Дата":"20.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.6436},{"Дата":"21.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.9634},{"Дата":"22.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.7181},{"Дата":"23.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.7181},{"Дата":"24.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.7181},{"Дата":"25.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2626.1562},{"Дата":"26.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2631.6649},{"Дата":"27.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2638.3461},{"Дата":"28.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.283},{"Дата":"29.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2652.1094},{"Дата":"30.09.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2652.1094},{"Дата":"01.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2652.1094},{"Дата":"02.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2657.8496},{"Дата":"03.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2665.4606},{"Дата":"04.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2670.4193},{"Дата":"05.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2680.8805},{"Дата":"06.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2679.9684},{"Дата":"07.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2679.9684},{"Дата":"08.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2679.9684},{"Дата":"09.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2673.9931},{"Дата":"10.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.1695},{"Дата":"11.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2658.6183},{"Дата":"12.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2653.3312},{"Дата":"13.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2663.4659},{"Дата":"14.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2663.4659},{"Дата":"15.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2663.4659},{"Дата":"16.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2663.4659},{"Дата":"17.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2653.7958},{"Дата":"18.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.4328},{"Дата":"19.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2642.5466},{"Дата":"20.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.995},{"Дата":"21.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.995},{"Дата":"22.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.995},{"Дата":"23.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2653.8902},{"Дата":"24.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2657.6754},{"Дата":"25.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2666.9955},{"Дата":"26.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2677.0046},{"Дата":"27.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2682.6619},{"Дата":"28.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2682.6619},{"Дата":"29.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2682.6619},{"Дата":"30.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2687.5781},{"Дата":"31.10.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2682.939},{"Дата":"01.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2686.2019},{"Дата":"02.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2687.8403},{"Дата":"03.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2693.1378},{"Дата":"04.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2693.1378},{"Дата":"05.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2693.1378},{"Дата":"06.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2696.2647},{"Дата":"07.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2685.0348},{"Дата":"08.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2675.1287},{"Дата":"09.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2663.6246},{"Дата":"10.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.8575},{"Дата":"11.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.8575},{"Дата":"12.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.8575},{"Дата":"13.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2651.673},{"Дата":"14.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.7953},{"Дата":"15.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.6372},{"Дата":"16.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.2221},{"Дата":"17.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.6407},{"Дата":"18.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.6407},{"Дата":"19.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.6407},{"Дата":"20.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.9087},{"Дата":"21.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.708},{"Дата":"22.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.2211},{"Дата":"23.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2664.7562},{"Дата":"24.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2686.144},{"Дата":"25.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2686.144},{"Дата":"26.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2686.144},{"Дата":"27.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2691.3646},{"Дата":"28.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2683.5271},{"Дата":"29.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2687.1826},{"Дата":"30.11.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2701.393},{"Дата":"01.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2715.5849},{"Дата":"02.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2715.5849},{"Дата":"03.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2715.5849},{"Дата":"04.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2705.432},{"Дата":"05.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2721.5318},{"Дата":"06.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2716.4406},{"Дата":"07.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2710.9151},{"Дата":"08.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2711.9363},{"Дата":"09.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2711.9363},{"Дата":"10.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2711.9363},{"Дата":"11.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2710.9345},{"Дата":"12.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2713.572},{"Дата":"13.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2717.7106},{"Дата":"14.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2726.749},{"Дата":"15.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2741.0006},{"Дата":"16.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2741.0006},{"Дата":"17.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2741.0006},{"Дата":"18.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2763.5063},{"Дата":"19.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2787.3635},{"Дата":"20.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.4304},{"Дата":"21.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2786.0871},{"Дата":"22.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2785.5935},{"Дата":"23.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2785.5935},{"Дата":"24.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2785.5935},{"Дата":"25.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2785.5935},{"Дата":"26.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2795.0921},{"Дата":"27.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2794.4567},{"Дата":"28.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2794.8466},{"Дата":"29.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.7223},{"Дата":"30.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.7223},{"Дата":"31.12.2017","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.7223},{"Дата":"01.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.7223},{"Дата":"02.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.7223},{"Дата":"03.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.7223},{"Дата":"04.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2789.054},{"Дата":"05.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2801.3366},{"Дата":"06.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2801.3366},{"Дата":"07.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2801.3366},{"Дата":"08.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2801.3366},{"Дата":"09.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2820.3329},{"Дата":"10.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2820.3244},{"Дата":"11.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2832.8813},{"Дата":"12.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2844.5711},{"Дата":"13.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2844.5711},{"Дата":"14.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2844.5711},{"Дата":"15.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2853.6637},{"Дата":"16.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2856.7664},{"Дата":"17.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2865.2576},{"Дата":"18.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2866.6132},{"Дата":"19.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2877.7485},{"Дата":"20.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2877.7485},{"Дата":"21.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2877.7485},{"Дата":"22.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2884.4816},{"Дата":"23.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2887.5837},{"Дата":"24.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2886.4823},{"Дата":"25.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2886.5367},{"Дата":"26.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2874.5248},{"Дата":"27.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2874.5248},{"Дата":"28.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2874.5248},{"Дата":"29.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2854.8638},{"Дата":"30.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2824.6515},{"Дата":"31.01.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2800.8791},{"Дата":"01.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2784.3493},{"Дата":"02.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2786.9462},{"Дата":"03.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2786.9462},{"Дата":"04.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2786.9462},{"Дата":"05.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.7139},{"Дата":"06.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2774.2448},{"Дата":"07.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2746.0866},{"Дата":"08.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2711.9635},{"Дата":"09.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2712.4023},{"Дата":"10.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2712.4023},{"Дата":"11.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2712.4023},{"Дата":"12.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2705.8546},{"Дата":"13.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2684.0367},{"Дата":"14.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2669.948},{"Дата":"15.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2665.4762},{"Дата":"16.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2675.9805},{"Дата":"17.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2675.9805},{"Дата":"18.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2675.9805},{"Дата":"19.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2699.0889},{"Дата":"20.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2701.1922},{"Дата":"21.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2707.2945},{"Дата":"22.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2698.8039},{"Дата":"23.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2707.1843},{"Дата":"24.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2707.1843},{"Дата":"25.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2707.1843},{"Дата":"26.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2698.8658},{"Дата":"27.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2700.661},{"Дата":"28.02.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2694.8185},{"Дата":"01.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2680.5516},{"Дата":"02.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2666.9496},{"Дата":"03.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2653.5904},{"Дата":"04.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2653.5904},{"Дата":"05.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2653.5904},{"Дата":"06.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.208},{"Дата":"07.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.8957},{"Дата":"08.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.8957},{"Дата":"09.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.8957},{"Дата":"10.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.8957},{"Дата":"11.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.8957},{"Дата":"12.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2609.3953},{"Дата":"13.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2592.4612},{"Дата":"14.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2591.5887},{"Дата":"15.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2601.3978},{"Дата":"16.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.2654},{"Дата":"17.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.2654},{"Дата":"18.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.2654},{"Дата":"19.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2635.391},{"Дата":"20.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2643.6044},{"Дата":"21.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.1118},{"Дата":"22.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2628.0974},{"Дата":"23.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2625.3649},{"Дата":"24.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2625.3649},{"Дата":"25.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2625.3649},{"Дата":"26.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2626.5478},{"Дата":"27.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.439},{"Дата":"28.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.627},{"Дата":"29.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2640.5249},{"Дата":"30.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2654.3493},{"Дата":"31.03.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2654.3493},{"Дата":"01.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2654.3493},{"Дата":"02.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.7046},{"Дата":"03.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.096},{"Дата":"04.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2632.9568},{"Дата":"05.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2626.3057},{"Дата":"06.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2606.6537},{"Дата":"07.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2606.6537},{"Дата":"08.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2606.6537},{"Дата":"09.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2606.6537},{"Дата":"10.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2602.6968},{"Дата":"11.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2597.5527},{"Дата":"12.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2592.5912},{"Дата":"13.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2598.635},{"Дата":"14.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2598.635},{"Дата":"15.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2598.635},{"Дата":"16.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.4909},{"Дата":"17.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2608.9279},{"Дата":"18.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2608.2873},{"Дата":"19.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2614.7772},{"Дата":"20.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.5963},{"Дата":"21.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.5963},{"Дата":"22.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.5963},{"Дата":"23.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.8455},{"Дата":"24.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.5554},{"Дата":"25.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.7264},{"Дата":"26.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2627.0545},{"Дата":"27.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.0047},{"Дата":"28.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.0047},{"Дата":"29.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.0047},{"Дата":"30.04.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.0047},{"Дата":"01.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.0047},{"Дата":"02.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.5648},{"Дата":"03.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2615.5067},{"Дата":"04.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.147},{"Дата":"05.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.5522},{"Дата":"06.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.5522},{"Дата":"07.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.5522},{"Дата":"08.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2629.0191},{"Дата":"09.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2629.0191},{"Дата":"10.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2621.9038},{"Дата":"11.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.216},{"Дата":"12.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.216},{"Дата":"13.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.216},{"Дата":"14.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.8009},{"Дата":"15.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.1243},{"Дата":"16.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2621.0807},{"Дата":"17.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.817},{"Дата":"18.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.8814},{"Дата":"19.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.8814},{"Дата":"20.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.8814},{"Дата":"21.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2614.7963},{"Дата":"22.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2608.3615},{"Дата":"23.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2607.1164},{"Дата":"24.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2608.1533},{"Дата":"25.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2610.7517},{"Дата":"26.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2610.7517},{"Дата":"27.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2610.7517},{"Дата":"28.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2610.7517},{"Дата":"29.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2614.949},{"Дата":"30.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2609.8943},{"Дата":"31.05.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2613.5817},{"Дата":"01.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.231},{"Дата":"02.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.231},{"Дата":"03.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.231},{"Дата":"04.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2611.3944},{"Дата":"05.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2613.2875},{"Дата":"06.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2615.621},{"Дата":"07.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.2366},{"Дата":"08.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.1679},{"Дата":"09.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.1679},{"Дата":"10.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.1679},{"Дата":"11.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2613.6416},{"Дата":"12.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2609.1315},{"Дата":"13.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2608.749},{"Дата":"14.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2612.421},{"Дата":"15.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2621.9678},{"Дата":"16.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2621.9678},{"Дата":"17.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2621.9678},{"Дата":"18.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2631.5543},{"Дата":"19.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2632.8987},{"Дата":"20.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2644.6439},{"Дата":"21.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.5945},{"Дата":"22.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.5365},{"Дата":"23.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.8901},{"Дата":"24.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.8901},{"Дата":"25.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.8901},{"Дата":"26.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.3625},{"Дата":"27.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.917},{"Дата":"28.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.917},{"Дата":"29.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.917},{"Дата":"30.06.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.917},{"Дата":"01.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2618.917},{"Дата":"02.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2632.7494},{"Дата":"03.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.2692},{"Дата":"04.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2629.9259},{"Дата":"05.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2643.7983},{"Дата":"06.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2642.978},{"Дата":"07.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2642.978},{"Дата":"08.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2642.978},{"Дата":"09.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2631.595},{"Дата":"10.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2624.9754},{"Дата":"11.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.9172},{"Дата":"12.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.7255},{"Дата":"13.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.8045},{"Дата":"14.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.8045},{"Дата":"15.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.8045},{"Дата":"16.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2623.3225},{"Дата":"17.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.6838},{"Дата":"18.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2622.1563},{"Дата":"19.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.3338},{"Дата":"20.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.2433},{"Дата":"21.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.2433},{"Дата":"22.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.2433},{"Дата":"23.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2644.6104},{"Дата":"24.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2644.9683},{"Дата":"25.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2658.3191},{"Дата":"26.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2662.6878},{"Дата":"27.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2665.1412},{"Дата":"28.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2665.1412},{"Дата":"29.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2665.1412},{"Дата":"30.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2676.1506},{"Дата":"31.07.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2675.5214},{"Дата":"01.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2686.6717},{"Дата":"02.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2696.213},{"Дата":"03.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2701.1867},{"Дата":"04.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2701.1867},{"Дата":"05.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2701.1867},{"Дата":"06.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2709.2701},{"Дата":"07.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2713.1725},{"Дата":"08.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2702.1054},{"Дата":"09.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2696.1726},{"Дата":"10.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2711.1393},{"Дата":"11.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2711.1393},{"Дата":"12.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2711.1393},{"Дата":"13.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2724.564},{"Дата":"14.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2734.4448},{"Дата":"15.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2745.8922},{"Дата":"16.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2744.986},{"Дата":"17.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2767.0533},{"Дата":"18.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2767.0533},{"Дата":"19.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2767.0533},{"Дата":"20.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2789.8554},{"Дата":"21.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2769.668},{"Дата":"22.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2770.9475},{"Дата":"23.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.5488},{"Дата":"24.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.5488},{"Дата":"25.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.5488},{"Дата":"26.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.5488},{"Дата":"27.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2785.3197},{"Дата":"28.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.524},{"Дата":"29.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2805.1217},{"Дата":"30.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2811.6426},{"Дата":"31.08.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2827.9437},{"Дата":"01.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2827.9437},{"Дата":"02.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2827.9437},{"Дата":"03.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2824.6117},{"Дата":"04.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2837.8299},{"Дата":"05.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2849.2993},{"Дата":"06.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2841.1552},{"Дата":"07.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2822.4632},{"Дата":"08.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2822.4632},{"Дата":"09.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2822.4632},{"Дата":"10.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2826.4977},{"Дата":"11.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2820.0688},{"Дата":"12.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2809.5614},{"Дата":"13.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2802.6096},{"Дата":"14.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2812.6838},{"Дата":"15.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2812.6838},{"Дата":"16.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2812.6838},{"Дата":"17.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2815.2072},{"Дата":"18.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2812.6754},{"Дата":"19.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2815.1007},{"Дата":"20.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2812.0205},{"Дата":"21.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.185},{"Дата":"22.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.185},{"Дата":"23.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.185},{"Дата":"24.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.288},{"Дата":"25.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2811.1097},{"Дата":"26.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2806.1209},{"Дата":"27.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2814.2843},{"Дата":"28.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2829.8262},{"Дата":"29.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2829.8262},{"Дата":"30.09.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2829.8262},{"Дата":"01.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2826.9931},{"Дата":"02.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2821.2677},{"Дата":"03.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2827.6259},{"Дата":"04.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2832.0055},{"Дата":"05.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2817.5055},{"Дата":"06.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2817.5055},{"Дата":"07.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2817.5055},{"Дата":"08.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2808.4816},{"Дата":"09.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2808.792},{"Дата":"10.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2808.144},{"Дата":"11.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2800.2897},{"Дата":"12.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2798.4519},{"Дата":"13.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2798.4519},{"Дата":"14.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2798.4519},{"Дата":"15.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2798.4519},{"Дата":"16.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2792.8166},{"Дата":"17.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2793.002},{"Дата":"18.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2791.6894},{"Дата":"19.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2803.6647},{"Дата":"20.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2803.6647},{"Дата":"21.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2803.6647},{"Дата":"22.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2818.2001},{"Дата":"23.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2808.0405},{"Дата":"24.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2814.9402},{"Дата":"25.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2821.3097},{"Дата":"26.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2833.5582},{"Дата":"27.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2833.5582},{"Дата":"28.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2833.5582},{"Дата":"29.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2826.5984},{"Дата":"30.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2820.2526},{"Дата":"31.10.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2816.4437},{"Дата":"01.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2811.8832},{"Дата":"02.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2815.7863},{"Дата":"03.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2815.7863},{"Дата":"04.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2815.7863},{"Дата":"05.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2813.2823},{"Дата":"06.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2801.5313},{"Дата":"07.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2795.584},{"Дата":"08.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2789.6958},{"Дата":"09.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2792.6734},{"Дата":"10.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2792.6734},{"Дата":"11.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2792.6734},{"Дата":"12.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2789.1641},{"Дата":"13.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2790.3737},{"Дата":"14.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2791.8162},{"Дата":"15.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2783.9406},{"Дата":"16.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2777.4256},{"Дата":"17.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2777.4256},{"Дата":"18.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2777.4256},{"Дата":"19.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2775.497},{"Дата":"20.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2776.4829},{"Дата":"21.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2776.3875},{"Дата":"22.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2777.4898},{"Дата":"23.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2774.5837},{"Дата":"24.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2774.5837},{"Дата":"25.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2774.5837},{"Дата":"26.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2779.5828},{"Дата":"27.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2789.8447},{"Дата":"28.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2810.5334},{"Дата":"29.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2826.9049},{"Дата":"30.11.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2839.0932},{"Дата":"01.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2839.0932},{"Дата":"02.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2839.0932},{"Дата":"03.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2822.2764},{"Дата":"04.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2817.2738},{"Дата":"05.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2812.5926},{"Дата":"06.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2797.5656},{"Дата":"07.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2787.9569},{"Дата":"08.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2787.9569},{"Дата":"09.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2787.9569},{"Дата":"10.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2782.4246},{"Дата":"11.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2777.6824},{"Дата":"12.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2771.3165},{"Дата":"13.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2780.8135},{"Дата":"14.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2786.7006},{"Дата":"15.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2786.7006},{"Дата":"16.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2786.7006},{"Дата":"17.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2783.7123},{"Дата":"18.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2788.6082},{"Дата":"19.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2784.7943},{"Дата":"20.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2771.7006},{"Дата":"21.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2757.6874},{"Дата":"22.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2743.3934},{"Дата":"23.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2743.3934},{"Дата":"24.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2743.3934},{"Дата":"25.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2743.3934},{"Дата":"26.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2743.3934},{"Дата":"27.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2726.7788},{"Дата":"28.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2745.4979},{"Дата":"29.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2768.8264},{"Дата":"30.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2768.8264},{"Дата":"31.12.2018","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2768.8264},{"Дата":"01.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2768.8264},{"Дата":"02.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2768.8264},{"Дата":"03.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2768.8264},{"Дата":"04.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2751.1682},{"Дата":"05.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2751.1682},{"Дата":"06.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2751.1682},{"Дата":"07.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2751.1682},{"Дата":"08.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2770.94},{"Дата":"09.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2802.3739},{"Дата":"10.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2812.2133},{"Дата":"11.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2827.0148},{"Дата":"12.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2827.0148},{"Дата":"13.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2827.0148},{"Дата":"14.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2815.3842},{"Дата":"15.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2802.3674},{"Дата":"16.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2816.6809},{"Дата":"17.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2800.8502},{"Дата":"18.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2803.3609},{"Дата":"19.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2803.3609},{"Дата":"20.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2803.3609},{"Дата":"21.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2798.0832},{"Дата":"22.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2794.8597},{"Дата":"23.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2789.5838},{"Дата":"24.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2770.3713},{"Дата":"25.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2778.6528},{"Дата":"26.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2778.6528},{"Дата":"27.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2778.6528},{"Дата":"28.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2781.7285},{"Дата":"29.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2779.0097},{"Дата":"30.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2777.2064},{"Дата":"31.01.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2775.5525},{"Дата":"01.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2774.096},{"Дата":"02.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2774.096},{"Дата":"03.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2774.096},{"Дата":"04.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2757.0704},{"Дата":"05.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2742.3692},{"Дата":"06.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2721.5854},{"Дата":"07.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2696.4088},{"Дата":"08.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2695.935},{"Дата":"09.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2695.935},{"Дата":"10.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2695.935},{"Дата":"11.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2689.9993},{"Дата":"12.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2705.7716},{"Дата":"13.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2700.7494},{"Дата":"14.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2709.2791},{"Дата":"15.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2715.9961},{"Дата":"16.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2715.9961},{"Дата":"17.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2715.9961},{"Дата":"18.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2724.7894},{"Дата":"19.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2718.5914},{"Дата":"20.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2717.3251},{"Дата":"21.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2708.7563},{"Дата":"22.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2700.263},{"Дата":"23.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2700.263},{"Дата":"24.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2700.263},{"Дата":"25.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2701.7312},{"Дата":"26.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2699.0656},{"Дата":"27.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2698.2628},{"Дата":"28.02.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2699.2764},{"Дата":"01.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2685.9165},{"Дата":"02.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2685.9165},{"Дата":"03.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2685.9165},{"Дата":"04.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2686.2244},{"Дата":"05.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2682.7083},{"Дата":"06.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2676.2376},{"Дата":"07.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.1142},{"Дата":"08.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.1142},{"Дата":"09.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.1142},{"Дата":"10.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.1142},{"Дата":"11.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2638.9167},{"Дата":"12.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2631.1955},{"Дата":"13.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2635.9553},{"Дата":"14.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2670.2931},{"Дата":"15.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2671.6488},{"Дата":"16.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2671.6488},{"Дата":"17.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2671.6488},{"Дата":"18.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2701.4849},{"Дата":"19.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2713.189},{"Дата":"20.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2716.083},{"Дата":"21.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2716.7879},{"Дата":"22.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2725.6311},{"Дата":"23.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2725.6311},{"Дата":"24.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2725.6311},{"Дата":"25.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2696.0935},{"Дата":"26.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2688.9136},{"Дата":"27.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2698.0222},{"Дата":"28.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2708.1767},{"Дата":"29.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2724.8765},{"Дата":"30.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2724.8765},{"Дата":"31.03.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2724.8765},{"Дата":"01.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2720.9103},{"Дата":"02.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2719.0867},{"Дата":"03.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2697.4158},{"Дата":"04.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2708.1121},{"Дата":"05.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2702.2033},{"Дата":"06.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2702.2033},{"Дата":"07.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2702.2033},{"Дата":"08.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2676.8706},{"Дата":"09.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2664.4138},{"Дата":"10.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2669.6098},{"Дата":"11.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2676.5228},{"Дата":"12.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2683.1419},{"Дата":"13.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2683.1419},{"Дата":"14.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2683.1419},{"Дата":"15.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2671.3872},{"Дата":"16.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2681.0204},{"Дата":"17.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2672.2277},{"Дата":"18.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2668.7575},{"Дата":"19.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2683.7655},{"Дата":"20.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2683.7655},{"Дата":"21.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2683.7655},{"Дата":"22.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2685.397},{"Дата":"23.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2677.5371},{"Дата":"24.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2668.8008},{"Дата":"25.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2659.4202},{"Дата":"26.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2661.9328},{"Дата":"27.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2661.9328},{"Дата":"28.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2661.9328},{"Дата":"29.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2661.9328},{"Дата":"30.04.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2661.9328},{"Дата":"01.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2661.9328},{"Дата":"02.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.2737},{"Дата":"03.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.7242},{"Дата":"04.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.7242},{"Дата":"05.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2655.7242},{"Дата":"06.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2648.0461},{"Дата":"07.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2649.592},{"Дата":"08.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.002},{"Дата":"09.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.002},{"Дата":"10.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2624.955},{"Дата":"11.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.5887},{"Дата":"12.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.5887},{"Дата":"13.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.5887},{"Дата":"14.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2611.3216},{"Дата":"15.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.2875},{"Дата":"16.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2637.4033},{"Дата":"17.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.2913},{"Дата":"18.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.2913},{"Дата":"19.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2634.2913},{"Дата":"20.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2636.8202},{"Дата":"21.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.2895},{"Дата":"22.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2611.2451},{"Дата":"23.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2630.4698},{"Дата":"24.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2633.5723},{"Дата":"25.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2633.5723},{"Дата":"26.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2633.5723},{"Дата":"27.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2647.478},{"Дата":"28.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2632.5682},{"Дата":"29.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2640.6167},{"Дата":"30.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2668.3376},{"Дата":"31.05.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2687.2573},{"Дата":"01.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2687.2573},{"Дата":"02.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2687.2573},{"Дата":"03.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2685.4695},{"Дата":"04.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2695.4834},{"Дата":"05.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2720.6934},{"Дата":"06.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2693.0098},{"Дата":"07.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2679.5094},{"Дата":"08.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2679.5094},{"Дата":"09.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2679.5094},{"Дата":"10.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2659.5721},{"Дата":"11.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2637.5022},{"Дата":"12.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2629.895},{"Дата":"13.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2640.1893},{"Дата":"14.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2641.708},{"Дата":"15.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2641.708},{"Дата":"16.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2641.708},{"Дата":"17.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2641.708},{"Дата":"18.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2642.1945},{"Дата":"19.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2638.8427},{"Дата":"20.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2633.4256},{"Дата":"21.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2637.5876},{"Дата":"22.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2637.5876},{"Дата":"23.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2637.5876},{"Дата":"24.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2626.6416},{"Дата":"25.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.1201},{"Дата":"26.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2619.1023},{"Дата":"27.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.6382},{"Дата":"28.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.6382},{"Дата":"29.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.6382},{"Дата":"30.06.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2616.6382},{"Дата":"01.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.7939},{"Дата":"02.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2620.6493},{"Дата":"03.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2617.9033},{"Дата":"04.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2604.4841},{"Дата":"05.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2587.0835},{"Дата":"06.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2587.0835},{"Дата":"07.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2587.0835},{"Дата":"08.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2571.1361},{"Дата":"09.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2560.2161},{"Дата":"10.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2548.9178},{"Дата":"11.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2570.0474},{"Дата":"12.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2580.1837},{"Дата":"13.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2580.1837},{"Дата":"14.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2580.1837},{"Дата":"15.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2576.0584},{"Дата":"16.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2574.092},{"Дата":"17.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2586.4142},{"Дата":"18.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2586.2087},{"Дата":"19.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2603.0049},{"Дата":"20.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2603.0049},{"Дата":"21.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2603.0049},{"Дата":"22.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2581.5345},{"Дата":"23.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2564.3112},{"Дата":"24.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2563.0047},{"Дата":"25.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2551.63},{"Дата":"26.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2548.7337},{"Дата":"27.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2548.7337},{"Дата":"28.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2548.7337},{"Дата":"29.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2543.9728},{"Дата":"30.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2525.2582},{"Дата":"31.07.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2508.5516},{"Дата":"01.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2502.0755},{"Дата":"02.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2534.9919},{"Дата":"03.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2534.9919},{"Дата":"04.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2534.9919},{"Дата":"05.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2553.7711},{"Дата":"06.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2573.5045},{"Дата":"07.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2559.0328},{"Дата":"08.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2542.4348},{"Дата":"09.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2531.6561},{"Дата":"10.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2531.6561},{"Дата":"11.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2531.6561},{"Дата":"12.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2509.0813},{"Дата":"13.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2515.8487},{"Дата":"14.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2514.616},{"Дата":"15.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2524.9317},{"Дата":"16.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2532.1651},{"Дата":"17.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2532.1651},{"Дата":"18.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2532.1651},{"Дата":"19.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2514.2848},{"Дата":"20.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2517.5684},{"Дата":"21.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2513.13},{"Дата":"22.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2520.4427},{"Дата":"23.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2504.2697},{"Дата":"24.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2504.2697},{"Дата":"25.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2504.2697},{"Дата":"26.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2504.2697},{"Дата":"27.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2506.289},{"Дата":"28.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2516.493},{"Дата":"29.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2522.1856},{"Дата":"30.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2523.2299},{"Дата":"31.08.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2523.2299},{"Дата":"01.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2523.2299},{"Дата":"02.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2514.4111},{"Дата":"03.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2526.3473},{"Дата":"04.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2529.6865},{"Дата":"05.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2526.3457},{"Дата":"06.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2531.0639},{"Дата":"07.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2531.0639},{"Дата":"08.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2531.0639},{"Дата":"09.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2508.6035},{"Дата":"10.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2502.6567},{"Дата":"11.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2488.2279},{"Дата":"12.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2496.8816},{"Дата":"13.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2483.1184},{"Дата":"14.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2483.1184},{"Дата":"15.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2483.1184},{"Дата":"16.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2471.0681},{"Дата":"17.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2477.1443},{"Дата":"18.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2476.452},{"Дата":"19.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2466.9853},{"Дата":"20.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2461.7559},{"Дата":"21.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2461.7559},{"Дата":"22.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2461.7559},{"Дата":"23.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2443.2618},{"Дата":"24.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2432.7195},{"Дата":"25.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2420.9491},{"Дата":"26.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2412.0199},{"Дата":"27.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2418.6956},{"Дата":"28.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2418.6956},{"Дата":"29.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2418.6956},{"Дата":"30.09.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2408.2809},{"Дата":"01.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2419.7474},{"Дата":"02.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2455.5302},{"Дата":"03.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2485.9769},{"Дата":"04.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2487.7122},{"Дата":"05.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2487.7122},{"Дата":"06.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2487.7122},{"Дата":"07.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2461.1821},{"Дата":"08.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2486.7568},{"Дата":"09.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2470.7021},{"Дата":"10.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2470.1001},{"Дата":"11.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2453.0569},{"Дата":"12.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2453.0569},{"Дата":"13.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2453.0569},{"Дата":"14.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2453.0569},{"Дата":"15.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2453.8038},{"Дата":"16.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2478.5759},{"Дата":"17.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2483.5244},{"Дата":"18.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2473.3852},{"Дата":"19.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2473.3852},{"Дата":"20.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2473.3852},{"Дата":"21.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2503.5071},{"Дата":"22.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2497.5156},{"Дата":"23.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2484.4629},{"Дата":"24.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2489.2529},{"Дата":"25.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2511.4112},{"Дата":"26.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2511.4112},{"Дата":"27.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2511.4112},{"Дата":"28.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2517.4116},{"Дата":"29.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2506.7144},{"Дата":"30.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2511.3805},{"Дата":"31.10.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2499.5421},{"Дата":"01.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2481.9089},{"Дата":"02.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2481.9089},{"Дата":"03.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2481.9089},{"Дата":"04.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2473.8144},{"Дата":"05.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2479.8021},{"Дата":"06.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2471.9467},{"Дата":"07.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2465.7612},{"Дата":"08.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2451.5816},{"Дата":"09.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2451.5816},{"Дата":"10.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2451.5816},{"Дата":"11.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2450.1887},{"Дата":"12.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2451.1018},{"Дата":"13.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2446.1896},{"Дата":"14.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2431.5588},{"Дата":"15.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2424.4999},{"Дата":"16.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2424.4999},{"Дата":"17.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2424.4999},{"Дата":"18.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2422.0132},{"Дата":"19.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2413.7178},{"Дата":"20.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2420.3928},{"Дата":"21.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2418.3603},{"Дата":"22.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2419.3689},{"Дата":"23.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2419.3689},{"Дата":"24.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2419.3689},{"Дата":"25.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2416.4262},{"Дата":"26.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2405.3801},{"Дата":"27.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2398.2702},{"Дата":"28.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2398.4391},{"Дата":"29.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2403.5575},{"Дата":"30.11.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2403.5575},{"Дата":"01.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2403.5575},{"Дата":"02.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2397.2276},{"Дата":"03.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2395.7354},{"Дата":"04.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2393.9216},{"Дата":"05.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2393.0282},{"Дата":"06.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2387.7034},{"Дата":"07.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2387.7034},{"Дата":"08.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2387.7034},{"Дата":"09.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2372.4789},{"Дата":"10.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2368.8511},{"Дата":"11.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2368.9203},{"Дата":"12.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2360.3546},{"Дата":"13.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2356.3276},{"Дата":"14.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2356.3276},{"Дата":"15.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2356.3276},{"Дата":"16.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2349.7996},{"Дата":"17.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2349.0376},{"Дата":"18.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2346.9132},{"Дата":"19.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2341.3086},{"Дата":"20.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2337.4052},{"Дата":"21.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2332.5284},{"Дата":"22.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2332.5284},{"Дата":"23.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2329.1225},{"Дата":"24.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2327.5766},{"Дата":"25.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2327.5766},{"Дата":"26.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2325.5155},{"Дата":"27.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":100,"Назва валюти":"Долар США","Офіційний курс гривні":2329.2885},{"Дата":"28.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"29.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"30.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"31.12.2019","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"01.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"02.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"03.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"04.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"05.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"06.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"07.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6862},{"Дата":"08.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.6785},{"Дата":"09.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.8345},{"Дата":"10.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.119},{"Дата":"11.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.9677},{"Дата":"12.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.9677},{"Дата":"13.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.9677},{"Дата":"14.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.9275},{"Дата":"15.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.0257},{"Дата":"16.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":23.9821},{"Дата":"17.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.0923},{"Дата":"18.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.0923},{"Дата":"19.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.0923},{"Дата":"20.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.2527},{"Дата":"21.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.3257},{"Дата":"22.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.2586},{"Дата":"23.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.331},{"Дата":"24.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5212},{"Дата":"25.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5212},{"Дата":"26.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5212},{"Дата":"27.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.3301},{"Дата":"28.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5984},{"Дата":"29.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.7204},{"Дата":"30.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.8491},{"Дата":"31.01.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.9196},{"Дата":"01.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.9196},{"Дата":"02.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.9196},{"Дата":"03.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":25.0294},{"Дата":"04.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":25.0836},{"Дата":"05.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.8523},{"Дата":"06.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.7959},{"Дата":"07.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5794},{"Дата":"08.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5794},{"Дата":"09.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5794},{"Дата":"10.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.537},{"Дата":"11.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5188},{"Дата":"12.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4236},{"Дата":"13.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4966},{"Дата":"14.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4795},{"Дата":"15.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4795},{"Дата":"16.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4795},{"Дата":"17.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.447},{"Дата":"18.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4456},{"Дата":"19.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4431},{"Дата":"20.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5231},{"Дата":"21.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4777},{"Дата":"22.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4777},{"Дата":"23.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4777},{"Дата":"24.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.453},{"Дата":"25.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.4995},{"Дата":"26.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.5307},{"Дата":"27.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.649},{"Дата":"28.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.561},{"Дата":"29.02.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.561},{"Дата":"01.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.561},{"Дата":"02.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.59},{"Дата":"03.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.818},{"Дата":"04.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.9386},{"Дата":"05.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.8908},{"Дата":"06.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.7413},{"Дата":"07.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.7413},{"Дата":"08.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.7413},{"Дата":"09.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.7413},{"Дата":"10.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":24.9215},{"Дата":"11.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":25.3135},{"Дата":"12.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":25.624},{"Дата":"13.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":25.858},{"Дата":"14.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":25.858},{"Дата":"15.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":25.858},{"Дата":"16.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":26.089},{"Дата":"17.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":26.5249},{"Дата":"18.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0566},{"Дата":"19.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2685},{"Дата":"20.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.8025},{"Дата":"21.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.8025},{"Дата":"22.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.8025},{"Дата":"23.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.7386},{"Дата":"24.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":28.1126},{"Дата":"25.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.7728},{"Дата":"26.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.9552},{"Дата":"27.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":28.1381},{"Дата":"28.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":28.1381},{"Дата":"29.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":28.1381},{"Дата":"30.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":28.183},{"Дата":"31.03.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":28.0615},{"Дата":"01.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.6289},{"Дата":"02.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.7538},{"Дата":"03.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.5962},{"Дата":"04.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.5962},{"Дата":"05.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.5962},{"Дата":"06.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.373},{"Дата":"07.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2365},{"Дата":"08.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0996},{"Дата":"09.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.1965},{"Дата":"10.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2598},{"Дата":"11.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2598},{"Дата":"12.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2598},{"Дата":"13.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2022},{"Дата":"14.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0404},{"Дата":"15.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0899},{"Дата":"16.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2219},{"Дата":"17.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2022},{"Дата":"18.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2022},{"Дата":"19.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2022},{"Дата":"20.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.2022},{"Дата":"21.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0774},{"Дата":"22.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0815},{"Дата":"23.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0536},{"Дата":"24.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0137},{"Дата":"25.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0137},{"Дата":"26.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.0137},{"Дата":"27.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.1441},{"Дата":"28.04.2020","Час":"00.00","Код цифровий":840,"Код літерний":"USD","Кількість одиниць":1,"Назва валюти":"Долар США","Офіційний курс гривні":27.1025}]';

    var obj = JSON.parse(jsonString);

    var arr = [];
    for (var i=0; i<=obj.length-1; i++) {
        if(obj[i]["Кількість одиниць"]==100){
            arr.push((obj[i]["Офіційний курс гривні"]/100).toFixed(2));
            console.log(arr);
        };
    }
    for (var i=0; i<=obj.length-1; i++) {
        if(obj[i]["Кількість одиниць"]==1){
            arr.push((obj[i]["Офіційний курс гривні"]).toFixed(2));
            console.log(arr);
        };
    }
    var arr1 = [];
    for (var i=0; i<=obj.length-1; i++) {
        arr1.push(obj[i].Дата);

    };


    var ctx = document.getElementById('myChart6').getContext('2d');
    var myChart4 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arr1,
            datasets: [{
                label: 'курс USD за 3 роки',
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}