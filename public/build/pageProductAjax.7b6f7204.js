(window.webpackJsonp=window.webpackJsonp||[]).push([["pageProductAjax"],{SLku:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={language:{lengthMenu:"Показване на _MENU_ записи на страница",zeroRecords:"Нищо не е намерено - съжалявам",info:"Показване на страница _PAGE_ от _PAGES_",infoEmpty:"Няма налични записи",infoFiltered:"(филтрирана от _MAX_ общо записи)",infoPostFix:"",thousands:",",loadingRecords:"Зарежда...",processing:"Обработка...",search:"Търсене в таблицата по-долу:",paginate:{first:"Първа",last:"Последна",next:"Следваща",previous:"Предишна"},aria:{sortAscending:": Сортиране на колона възходящо",sortDescending:": Сортиране на колона низходящо"}},null:"няма данни",checkBox:"При избор на опцията: ",emptyMessage:[{message:"1. В поле 'Търсене' можеш да търсиш по: id, потребител, име, фамилия, име и фамилия, имейл или модул."},{message:"2. При 'Търсене' по id трябва да въведете id: и номера. Например id:1234."},{message:"3. При 'Търсене' по име, фамилия, име и фамилия - преобразува латиница в кирилица и обратно."},{message:"4. При 'Търсене' по модул трябва да въведете името на модула. (Например: A1.1)"},{message:"5. 'Изгледани проценти от модула' ти дават справка каква част от видеата курсистът е изгледал напълно."},{message:"6. 'Само регистриран' - тук излизат всички регистрирани потребители, които са гледали безплатни видеа."},{message:"7. 'С достъп до модул' - тук излизат само курсистите, които имат даден достъп до определен модул."},{message:"8. 'Търсене в таблицата по-долу:' - търси по допълнителен критерий в изготвената вече справка."}]}},"a+sn":function(t,n,e){"use strict";e.r(n),function(t){e("ma9I"),e("oVuX"),e("2B1R"),e("sMBO"),e("qePV"),e("rB9j"),e("EnZy"),e("SYor");var n=e("lCsx"),a=e("krGz"),i=e("SLku"),o="/product",c=window.location.pathname;t(document).ready((function(){function e(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0,o="",c=[],r=[];t.each(n.products,(function(t,n){if(e===Number(n.id))return a=n.classId,!1})),t.each(n.classes,(function(n,e){a>0&&0===i&&c.push(""),e.id!==a?c.push('<option value="'+e.id+'">'+e.name+"</option>"):o='<option value="'+e.id+'">'+e.name+"</option>",a>0?e.id===a&&t.each(e.students,(function(t,n){r.push('<option value="'+n.studentId+'">'+n.student+"</option>")})):t.each(e.students,(function(t,n){r.push('<option value="'+n.studentId+'">'+n.student+"</option>")})),i++})),a>0&&(c[0]=o),t("#class #class_id").html(c.join("")),t("#student #student_id").html(r.join(""))}function r(){var n=t("#product_forMonth_day");n&&n.hide()}t.ajax({url:o,type:"POST",dataType:"json",async:!0,success:function(d,s){n.a.dataTable({data:d.products,rowId:"id",columns:[{data:"student",defaultContent:"<i></i>",title:"Ученик"},{data:"class",defaultContent:"<i></i>",title:"Клас"},{data:"price",defaultContent:"<i></i>",title:"Цена"},{data:function(t,n,e,a){return t.isPaid?"Платено":t.isPaid?"<i></i>":"Неплатено"},title:"Статус"},{data:function(t,n,e,a){var i=Number(t.feeInDays);return 1===i?i+" ден":0===i||i>1?i+" дни":"<i></i>"},title:"Такси в дни"},{data:"forMonth",defaultContent:"<i></i>",title:"Такса за месец"},{data:"dateCreate",defaultContent:"<i></i>",title:"Дата на създаване"},{data:function(t,n,e,a){var i=t.lastEdit,o=t.dateCreate;return i!==o?i:i===o?"Няма":"<i></i>"},title:"Редакция"},{title:"Плащане"},{title:"Редактиране"},{title:"Изтриване"}],columnDefs:[{targets:-3,data:function(t,n,e,a){return t.isPaid?"<button id='paidBtn' class='btn-default' disabled>Плащане!</button>":"<button id='paidBtn' class='btn-success'>Плащане!</button>"}},{targets:-2,data:function(t,n,e,a){return t.isPaid?"<button id='editBtn' class='btn-danger'>Редактиране!</button>":"<button id='editBtn' class='btn-warning'>Редактиране!</button>"}},{targets:-1,data:function(t,n,e,a){return t.isPaid?"<button id='deleteBtn' class='btn-default' disabled>Изтриване!</button>":"<button id='deleteBtn' class='btn-danger'>Изтриване!</button>"}}],order:[[1,"asc"],[0,"asc"],[3,"des"]],language:i.a.language,dom:"lfBSrtip",buttons:[{extend:"copy"},{extend:"excel"},{extend:"pdf",orientation:"landscape",pageSize:"LEGAL"},{extend:"print"}],drawCallback:function(){t(".dataTables_paginate a.paginate_button:not(.disabled)",this.api().table().container()).on("click",(function(){Object(a.e)()}))}}),Object(a.e)(),function(n){c==="".concat(o,"/create")&&(r(),e(n),t("#class #class_id").on("change",(function(t){e(n,0,Number(t.target.value))})))}(d),function(n){r();for(var a=c.split("/"),i=0,o=0;o<a.length;o++)"product"!==a[o]&&"edit"!==a[o]||i++;if(2!==i)return!1;var d=Number(a[a.length-1]);t("#dataTable tbody #"+d).addClass("text-danger"),e(n,d),t("#class #class_id").on("change",(function(t){e(n,0,Number(t.target.value))}))}(d)},error:function(t,n,e){alert("Грешка в данните от сървъра.")}}),t("#addOnBtn button").on("click",(function(){Object(a.a)("".concat(o,"/create"))})),n.a.on("click","button",(function(){var n=t(this).parent().parent();n.addClass("text-danger");var e=n.children().map((function(){return t.trim(t(this).text())})).get(),i=n.attr("id");if("deleteBtn"===this.id){var c=e[0],r=e[1],d=e[5],s=e[3],u='Изтривате плащане на "'.concat(c,'" от "').concat(r,'"\n')+'за месец "'.concat(d,'", сума ').concat(s," лв.!!!");Object(a.b)("".concat(o,"/delete/").concat(i),n,u)}else"editBtn"===this.id?Object(a.c)("".concat(o,"/edit/").concat(i)):"paidBtn"===this.id&&Object(a.d)("/payment/product/".concat(i))}))}))}.call(this,e("EVdn"))},hBjN:function(t,n,e){"use strict";var a=e("wE6v"),i=e("m/L8"),o=e("XGwC");t.exports=function(t,n,e){var c=a(n);c in t?i.f(t,c,o(0,e)):t[c]=e}},krGz:function(t,n,e){"use strict";(function(t){e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return c})),e.d(n,"e",(function(){return a})),e.d(n,"d",(function(){return r}));e("qePV"),e("07d7"),e("5s+n"),e("rB9j"),e("EnZy"),e("SYor"),e("R5XZ");function a(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=window.location.pathname.trim().split("/"),a=Number(e[e.length-1]);if(a<=0)return!1;var i=t("#dataTable tbody tr");t(i).each((function(){Number(t(this).attr("id"))===a&&(n?t(this).addClass("text-danger"):t(this).removeClass("text-danger"))}))}function i(n,e,i){new Promise((function(n,i){a(!1);var o=t("div #add"),c=t("div #edit"),r=t("#addOnBtn");"none"!==o.css("display")&&(o.hide(),r.show()),"none"!==c.css("display")&&(c.hide(),r.show()),setTimeout((function(){n(["".concat(o.css("display")),"".concat(e.removeClass("text-danger"))])}),300)})).then((function(t){return confirm("!!! ВНИМАНИЕ !!!\n"+i)&&(window.location.href=n),!1}))}function o(t){window.location.href=t}function c(t){window.location.href=t}function r(t){window.location.href=t}}).call(this,e("EVdn"))},lCsx:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return a}));var a=t("#dataTable")}).call(this,e("EVdn"))},ma9I:function(t,n,e){"use strict";var a=e("I+eb"),i=e("0Dky"),o=e("6LWA"),c=e("hh1v"),r=e("ewvW"),d=e("UMSQ"),s=e("hBjN"),u=e("ZfDv"),l=e("Hd5f"),f=e("tiKp"),h=e("YK6W"),p=f("isConcatSpreadable"),b=h>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=l("concat"),m=function(t){if(!c(t))return!1;var n=t[p];return void 0!==n?!!n:o(t)};a({target:"Array",proto:!0,forced:!b||!g},{concat:function(t){var n,e,a,i,o,c=r(this),l=u(c,0),f=0;for(n=-1,a=arguments.length;n<a;n++)if(o=-1===n?c:arguments[n],m(o)){if(f+(i=d(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<i;e++,f++)e in o&&s(l,f,o[e])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,f++,o)}return l.length=f,l}})},oVuX:function(t,n,e){"use strict";var a=e("I+eb"),i=e("RK3t"),o=e("/GqU"),c=e("swFL"),r=[].join,d=i!=Object,s=c("join",",");a({target:"Array",proto:!0,forced:d||s},{join:function(t){return r.call(o(this),void 0===t?",":t)}})},sMBO:function(t,n,e){var a=e("g6v/"),i=e("m/L8").f,o=Function.prototype,c=o.toString,r=/^\s*function ([^ (]*)/;!a||"name"in o||i(o,"name",{configurable:!0,get:function(){try{return c.call(this).match(r)[1]}catch(t){return""}}})},swFL:function(t,n,e){"use strict";var a=e("0Dky");t.exports=function(t,n){var e=[][t];return!e||!a((function(){e.call(null,n||function(){throw 1},1)}))}}},[["a+sn","runtime",0,1]]]);