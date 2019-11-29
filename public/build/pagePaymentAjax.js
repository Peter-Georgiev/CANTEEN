(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagePaymentAjax"],{

/***/ "./assets/js/custom-page/applyDataTable.js":
/*!*************************************************!*\
  !*** ./assets/js/custom-page/applyDataTable.js ***!
  \*************************************************/
/*! exports provided: table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
var table = $('#dataTable');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/custom-page/button-row-table.js":
/*!***************************************************!*\
  !*** ./assets/js/custom-page/button-row-table.js ***!
  \***************************************************/
/*! exports provided: editButton, deleteButton, addOnButton, rowTextDangerOnOff, paidOnButton, printPdfButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editButton", function() { return editButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteButton", function() { return deleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOnButton", function() { return addOnButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowTextDangerOnOff", function() { return rowTextDangerOnOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paidOnButton", function() { return paidOnButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printPdfButton", function() { return printPdfButton; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__);







function rowTextDangerOnOff() {
  var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var token = window.location.pathname.trim().split('/');
  var id = Number(token[token.length - 1]);

  if (id <= 0) {
    return false;
  }

  var trToken = $('#dataTable tbody tr');
  $(trToken).each(function () {
    if (Number($(this).attr('id')) === id) {
      if (isOn) {
        $(this).addClass('text-danger');
      } else {
        $(this).removeClass('text-danger');
      }
    }
  });
}

function deleteButton(pathname, rowTable, messages) {
  var msg = "!!! \u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415 !!!\n" + messages;

  function confirmDialog(msg) {
    return new Promise(function (resolve, reject) {
      var add = $('div #add');
      var edit = $('div #edit');
      var addOnBtn = $('#addOnBtn');

      if (add.css('display') !== 'none') {
        add.hide();
        addOnBtn.show();
      }

      if (edit.css('display') !== 'none') {
        edit.hide();
        addOnBtn.show();
      }

      var confirmed = window.confirm(msg);
      return confirmed ? resolve(true) : reject(false);
    });
  }

  function href(pathname) {
    window.location.href = pathname;
  }

  function escape() {
    alert('Операцията отказана!');
  }

  confirmDialog(msg).then(function () {
    return href(pathname);
  })["catch"](function (err) {
    return escape();
  });
}

function editButton(pathname) {
  window.location.href = pathname; //fetch(`/student/edit/${data.studentId}`, {
  //  method: 'POST'
  //}).then(res => window.location.reload());
}

function addOnButton(pathname) {
  window.location.href = pathname;
}

function paidOnButton(pathname) {
  window.location.href = pathname;
}

function printPdfButton(pathname) {
  window.location.href = pathname;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/custom-page/languageDataTable.js":
/*!****************************************************!*\
  !*** ./assets/js/custom-page/languageDataTable.js ***!
  \****************************************************/
/*! exports provided: bg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg", function() { return bg; });
var bg = {
  "language": {
    "lengthMenu": "Показване на _MENU_ записи на страница",
    "zeroRecords": "Нищо не е намерено - съжалявам",
    "info": "Показване на страница _PAGE_ от _PAGES_",
    "infoEmpty": "Няма налични записи",
    "infoFiltered": "(филтрирана от _MAX_ общо записи)",
    "infoPostFix": "",
    "thousands": ",",
    "loadingRecords": "Зарежда...",
    "processing": "Обработка...",
    "search": "Търсене в таблицата по-долу:",
    "paginate": {
      "first": "Първа",
      "last": "Последна",
      "next": "Следваща",
      "previous": "Предишна"
    },
    "aria": {
      "sortAscending": ": Сортиране на колона възходящо",
      "sortDescending": ": Сортиране на колона низходящо"
    }
  },
  "null": "няма данни",
  "checkBox": "При избор на опцията: ",
  "emptyMessage": [{
    'message': "1. В поле 'Търсене' можеш да търсиш по: id, потребител, име, фамилия, име и фамилия, имейл или модул."
  }, {
    'message': "2. При 'Търсене' по id трябва да въведете id: и номера. Например id:1234."
  }, {
    'message': "3. При 'Търсене' по име, фамилия, име и фамилия - преобразува латиница в кирилица и обратно."
  }, {
    'message': "4. При 'Търсене' по модул трябва да въведете името на модула. (Например: A1.1)"
  }, {
    'message': "5. 'Изгледани проценти от модула' ти дават справка каква част от видеата курсистът е изгледал напълно."
  }, {
    'message': "6. 'Само регистриран' - тук излизат всички регистрирани потребители, които са гледали безплатни видеа."
  }, {
    'message': "7. 'С достъп до модул' - тук излизат само курсистите, които имат даден достъп до определен модул."
  }, {
    'message': "8. '\u0422\u044A\u0440\u0441\u0435\u043D\u0435 \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0430\u0442\u0430 \u043F\u043E-\u0434\u043E\u043B\u0443:' - \u0442\u044A\u0440\u0441\u0438 \u043F\u043E \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043D \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0432 \u0438\u0437\u0433\u043E\u0442\u0432\u0435\u043D\u0430\u0442\u0430 \u0432\u0435\u0447\u0435 \u0441\u043F\u0440\u0430\u0432\u043A\u0430."
  }]
};


/***/ }),

/***/ "./assets/js/custom-page/page-paymentAjax.js":
/*!***************************************************!*\
  !*** ./assets/js/custom-page/page-paymentAjax.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyDataTable.js */ "./assets/js/custom-page/applyDataTable.js");
/* harmony import */ var _button_row_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-row-table.js */ "./assets/js/custom-page/button-row-table.js");
/* harmony import */ var _languageDataTable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languageDataTable.js */ "./assets/js/custom-page/languageDataTable.js");






var path = '/payment';
$(document).ready(function () {
  $.ajax({
    url: path,
    type: 'POST',
    dataType: 'json',
    async: true,
    success: function success(data, status) {
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].dataTable({
        data: data['payments'],
        rowId: 'id',
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        columns: [{
          data: "class",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Клас'
        }, {
          data: "student",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Име на ученик'
        }, {
          data: "teacher",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Курсов ръководител'
        }, {
          data: "payment",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Заявена сума'
        }, {
          data: "forMonth",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Такса за месец'
        }, {
          data: "price",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Платено'
        }, {
          data: "datePurchases",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Платено на дата'
        }, {
          data: "user",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Касиер'
        }, {
          data: function data(row, type, val, meta) {
            var lastEdit = row.lastEdit;
            var datePurchases = row.datePurchases;

            if (lastEdit !== datePurchases) {
              return lastEdit + ', от ' + row.lastEditUser;
            } else if (lastEdit === datePurchases) {
              return 'Няма';
            }

            return "<i></i>";
          },
          title: 'Редакция'
        }, {
          data: 'namePayer',
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Вносител'
        }, {
          title: 'Печат'
        }, {
          title: 'Плащане'
        }, {
          title: 'Редактиране'
        }],
        columnDefs: [{
          targets: -3,
          data: function data(row, type, val, meta) {
            return "<button id='printBtn' class='btn-info'>Принтиране</button>";
          }
        }, {
          targets: -2,
          data: function data(row, type, val, meta) {
            //console.log(row.userRole);
            if (row.isMontEnded) {
              return "<button id='editBtn' class='btn-default' disabled>Затворено</button>";
            } else if (row.isPaid) {
              return "<button id='editBtn' class='btn-danger'>Редакция!</button>";
            }

            return "<button id='editBtn' class='btn-warning'>Редакция!</button>";
          }
        }, {
          targets: -1,
          data: function data(row, type, val, meta) {
            if (row.isPaid) {
              return "<button id='deleteBtn' class='btn-default' disabled>Изтриване!</button>";
            }

            return "<button id='deleteBtn' class='btn-danger'>Изтриване!</button>";
          }
        }],
        order: [[0, 'asc'], [1, 'asc'], [4, 'des'], [6, 'des']],
        language: _languageDataTable_js__WEBPACK_IMPORTED_MODULE_5__["bg"].language,
        dom: 'lfBSrtip',
        buttons: [{
          extend: 'copy'
        }, //{extend: 'csv'},
        {
          extend: 'excel'
        }, {
          //extend: 'pdfHtml5',
          extend: 'pdf',
          orientation: 'landscape',
          pageSize: 'LEGAL'
        }, {
          extend: 'print'
        }],
        drawCallback: function drawCallback() {
          $('.dataTables_paginate a.paginate_button:not(.disabled)', this.api().table().container()).on('click', function () {
            Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["rowTextDangerOnOff"])();
          });
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
          $('#loadingBox').hide();
          $(".table-responsive").show();
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["rowTextDangerOnOff"])();
          _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].on('click', 'button', function () {
            var rowTable = $(this).parent().parent();
            rowTable.addClass("text-danger");
            var rowText = rowTable.children().map(function () {
              return $.trim($(this).text());
            }).get();
            var id = rowTable.attr('id');

            if (this.id === 'deleteBtn') {
              var studentFullName = rowText[0];
              var className = rowText[1];
              var price = rowText[5];
              var forMonth = rowText[4];
              var paymentDay = rowText[6];
              var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u0442\u0435 \u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \"".concat(studentFullName, "\" \u043E\u0442 \"").concat(className, "\" \u043A\u043B\u0430\u0441\n") + "\u0437\u0430 \u043C\u0435\u0441\u0435\u0446 \"".concat(forMonth, "\", \u0441\u0443\u043C\u0430 ").concat(price, " \u043B\u0432., \u043F\u043B\u0430\u0442\u0435\u043D\u043E \u043D\u0430 \u0434\u0430\u0442\u0430 ").concat(paymentDay, ".!!!");
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
            } else if (this.id === 'editBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["editButton"])("".concat(path, "/edit/").concat(id));
            } else if (this.id === 'printBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["printPdfButton"])("".concat(path, "/pdf/").concat(id));
            }
          });
        }
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      $('#loadingBox').hide();
      $('.table-responsive').hide();
      $('#errorBox span').text('Грешка в данните от сървъра!');
      $('#errorBox').show();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ })

},[["./assets/js/custom-page/page-paymentAjax.js","runtime","vendors~app~pageByMonthClass~pageClassTable~pageEndedMonth~pagePaymentAjax~pagePaymentCreateAjax~pag~6af68fd1","vendors~pageByMonthClass~pageClassTable~pagePaymentAjax~pagePaymentCreateAjax~pagePaymentEditAjax~pa~4f7075d7","vendors~pageClassTable~pagePaymentAjax~pagePaymentEditAjax~pagePricePerDayAjax~pageProductAjax~pageP~40fc3f6f","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXBheW1lbnRBamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiXSwibmFtZXMiOlsidGFibGUiLCIkIiwicm93VGV4dERhbmdlck9uT2ZmIiwiaXNPbiIsInRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRyaW0iLCJzcGxpdCIsImlkIiwiTnVtYmVyIiwibGVuZ3RoIiwidHJUb2tlbiIsImVhY2giLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlbGV0ZUJ1dHRvbiIsInJvd1RhYmxlIiwibWVzc2FnZXMiLCJtc2ciLCJjb25maXJtRGlhbG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGQiLCJlZGl0IiwiYWRkT25CdG4iLCJjc3MiLCJoaWRlIiwic2hvdyIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJocmVmIiwiZXNjYXBlIiwiYWxlcnQiLCJ0aGVuIiwiZXJyIiwiZWRpdEJ1dHRvbiIsImFkZE9uQnV0dG9uIiwicGFpZE9uQnV0dG9uIiwicHJpbnRQZGZCdXR0b24iLCJiZyIsInBhdGgiLCJkb2N1bWVudCIsInJlYWR5IiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImFzeW5jIiwic3VjY2VzcyIsImRhdGEiLCJzdGF0dXMiLCJkYXRhVGFibGUiLCJyb3dJZCIsImNvbHVtbnMiLCJkZWZhdWx0Q29udGVudCIsInRpdGxlIiwicm93IiwidmFsIiwibWV0YSIsImxhc3RFZGl0IiwiZGF0ZVB1cmNoYXNlcyIsImxhc3RFZGl0VXNlciIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwiaXNNb250RW5kZWQiLCJpc1BhaWQiLCJvcmRlciIsImxhbmd1YWdlIiwiZG9tIiwiYnV0dG9ucyIsImV4dGVuZCIsIm9yaWVudGF0aW9uIiwicGFnZVNpemUiLCJkcmF3Q2FsbGJhY2siLCJhcGkiLCJjb250YWluZXIiLCJvbiIsImZuRHJhd0NhbGxiYWNrIiwib1NldHRpbmdzIiwicGFyZW50Iiwicm93VGV4dCIsImNoaWxkcmVuIiwibWFwIiwidGV4dCIsImdldCIsInN0dWRlbnRGdWxsTmFtZSIsImNsYXNzTmFtZSIsInByaWNlIiwiZm9yTW9udGgiLCJwYXltZW50RGF5IiwibWVzc2FnZSIsImVycm9yIiwieGhyIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLElBQUlBLEtBQUssR0FBR0MsQ0FBQyxDQUFDLFlBQUQsQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFNBQVNDLGtCQUFULEdBQXlDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixJQUFNO0FBQ3JDLE1BQUlDLEtBQUssR0FBSUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUNQQyxJQURPLEdBRVBDLEtBRk8sQ0FFRCxHQUZDLENBQVo7QUFJQSxNQUFJQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDQSxLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUFoQixDQUFOLENBQWY7O0FBQ0EsTUFBSUYsRUFBRSxJQUFJLENBQVYsRUFBYTtBQUNULFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlHLE9BQU8sR0FBR1osQ0FBQyxDQUFDLHFCQUFELENBQWY7QUFFQUEsR0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJwYWdlUGF5bWVudEFqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFibGUgPSAkKCcjZGF0YVRhYmxlJyk7XHJcblxyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBtc2cgPSBgISEhINCS0J3QmNCc0JDQndCY0JUgISEhXFxuYCArIG1lc3NhZ2VzO1xyXG4gICAgZnVuY3Rpb24gY29uZmlybURpYWxvZyhtc2cpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgYWRkID0gJCgnZGl2ICNhZGQnKTtcclxuICAgICAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICAgICAgbGV0IGFkZE9uQnRuID0gJCgnI2FkZE9uQnRuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRkLmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIGVkaXQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0obXNnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb25maXJtZWQgPyByZXNvbHZlKHRydWUpIDogcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBocmVmKHBhdGhuYW1lKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlc2NhcGUoKSB7XHJcbiAgICAgICAgYWxlcnQoJ9Ce0L/QtdGA0LDRhtC40Y/RgtCwINC+0YLQutCw0LfQsNC90LAhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybURpYWxvZyhtc2cpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gIGhyZWYocGF0aG5hbWUpIClcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGVzY2FwZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdEJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxuICAgIC8vZmV0Y2goYC9zdHVkZW50L2VkaXQvJHtkYXRhLnN0dWRlbnRJZH1gLCB7XHJcbiAgICAvLyAgbWV0aG9kOiAnUE9TVCdcclxuICAgIC8vfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhaWRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRQZGZCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b24sIHByaW50UGRmQnV0dG9ufTsiLCJsZXQgYmcgPSB7XHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcImxlbmd0aE1lbnVcIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCBfTUVOVV8g0LfQsNC/0LjRgdC4INC90LAg0YHRgtGA0LDQvdC40YbQsFwiLFxyXG4gICAgICAgIFwiemVyb1JlY29yZHNcIjogXCLQndC40YnQviDQvdC1INC1INC90LDQvNC10YDQtdC90L4gLSDRgdGK0LbQsNC70Y/QstCw0LxcIixcclxuICAgICAgICBcImluZm9cIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCDRgdGC0YDQsNC90LjRhtCwIF9QQUdFXyDQvtGCIF9QQUdFU19cIixcclxuICAgICAgICBcImluZm9FbXB0eVwiOiBcItCd0Y/QvNCwINC90LDQu9C40YfQvdC4INC30LDQv9C40YHQuFwiLFxyXG4gICAgICAgIFwiaW5mb0ZpbHRlcmVkXCI6IFwiKNGE0LjQu9GC0YDQuNGA0LDQvdCwINC+0YIgX01BWF8g0L7QsdGJ0L4g0LfQsNC/0LjRgdC4KVwiLFxyXG4gICAgICAgIFwiaW5mb1Bvc3RGaXhcIjogXCJcIixcclxuICAgICAgICBcInRob3VzYW5kc1wiOiBcIixcIixcclxuICAgICAgICBcImxvYWRpbmdSZWNvcmRzXCI6IFwi0JfQsNGA0LXQttC00LAuLi5cIixcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICBcInNlYXJjaFwiOiBcItCi0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOlwiLFxyXG4gICAgICAgIFwicGFnaW5hdGVcIjoge1xyXG4gICAgICAgICAgICBcImZpcnN0XCI6IFwi0J/RitGA0LLQsFwiLFxyXG4gICAgICAgICAgICBcImxhc3RcIjogXCLQn9C+0YHQu9C10LTQvdCwXCIsXHJcbiAgICAgICAgICAgIFwibmV4dFwiOiBcItCh0LvQtdC00LLQsNGJ0LBcIixcclxuICAgICAgICAgICAgXCJwcmV2aW91c1wiOiBcItCf0YDQtdC00LjRiNC90LBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhcmlhXCI6IHtcclxuICAgICAgICAgICAgXCJzb3J0QXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0LLRitC30YXQvtC00Y/RidC+XCIsXHJcbiAgICAgICAgICAgIFwic29ydERlc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQvdC40LfRhdC+0LTRj9GJ0L5cIlxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCJudWxsXCI6IFwi0L3Rj9C80LAg0LTQsNC90L3QuFwiLFxyXG4gICAgXCJjaGVja0JveFwiOiBcItCf0YDQuCDQuNC30LHQvtGAINC90LAg0L7Qv9GG0LjRj9GC0LA6IFwiLFxyXG4gICAgXCJlbXB0eU1lc3NhZ2VcIjogW1xyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMS4g0JIg0L/QvtC70LUgJ9Ci0YrRgNGB0LXQvdC1JyDQvNC+0LbQtdGIINC00LAg0YLRitGA0YHQuNGIINC/0L46IGlkLCDQv9C+0YLRgNC10LHQuNGC0LXQuywg0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPLCDQuNC80LXQudC7INC40LvQuCDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjIuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4gaWQg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSBpZDog0Lgg0L3QvtC80LXRgNCwLiDQndCw0L/RgNC40LzQtdGAIGlkOjEyMzQuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMy4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8gLSDQv9GA0LXQvtCx0YDQsNC30YPQstCwINC70LDRgtC40L3QuNGG0LAg0LIg0LrQuNGA0LjQu9C40YbQsCDQuCDQvtCx0YDQsNGC0L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI0LiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC80L7QtNGD0Lsg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSDQuNC80LXRgtC+INC90LAg0LzQvtC00YPQu9CwLiAo0J3QsNC/0YDQuNC80LXRgDogQTEuMSlcIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI1LiAn0JjQt9Cz0LvQtdC00LDQvdC4INC/0YDQvtGG0LXQvdGC0Lgg0L7RgiDQvNC+0LTRg9C70LAnINGC0Lgg0LTQsNCy0LDRgiDRgdC/0YDQsNCy0LrQsCDQutCw0LrQstCwINGH0LDRgdGCINC+0YIg0LLQuNC00LXQsNGC0LAg0LrRg9GA0YHQuNGB0YLRitGCINC1INC40LfQs9C70LXQtNCw0Lsg0L3QsNC/0YrQu9C90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNi4gJ9Ch0LDQvNC+INGA0LXQs9C40YHRgtGA0LjRgNCw0L0nIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINCy0YHQuNGH0LrQuCDRgNC10LPQuNGB0YLRgNC40YDQsNC90Lgg0L/QvtGC0YDQtdCx0LjRgtC10LvQuCwg0LrQvtC40YLQviDRgdCwINCz0LvQtdC00LDQu9C4INCx0LXQt9C/0LvQsNGC0L3QuCDQstC40LTQtdCwLlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjcuICfQoSDQtNC+0YHRgtGK0L8g0LTQviDQvNC+0LTRg9C7JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDRgdCw0LzQviDQutGD0YDRgdC40YHRgtC40YLQtSwg0LrQvtC40YLQviDQuNC80LDRgiDQtNCw0LTQtdC9INC00L7RgdGC0YrQvyDQtNC+INC+0L/RgNC10LTQtdC70LXQvSDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBgOC4gJ9Ci0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOicgLSDRgtGK0YDRgdC4INC/0L4g0LTQvtC/0YrQu9C90LjRgtC10LvQtdC9INC60YDQuNGC0LXRgNC40Lkg0LIg0LjQt9Cz0L7RgtCy0LXQvdCw0YLQsCDQstC10YfQtSDRgdC/0YDQsNCy0LrQsC5gfVxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7Ymd9OyIsImltcG9ydCB7dGFibGV9IGZyb20gJy4vYXBwbHlEYXRhVGFibGUuanMnXHJcbmltcG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmYscHJpbnRQZGZCdXR0b259IGZyb20gJy4vYnV0dG9uLXJvdy10YWJsZS5qcyc7XHJcbmltcG9ydCB7Ymd9IGZyb20gJy4vbGFuZ3VhZ2VEYXRhVGFibGUuanMnO1xyXG5jb25zdCBwYXRoID0gJy9wYXltZW50JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAgICAgICAgcGF0aCxcclxuICAgICAgICB0eXBlOiAgICAgICAnUE9TVCcsXHJcbiAgICAgICAgZGF0YVR5cGU6ICAgJ2pzb24nLFxyXG4gICAgICAgIGFzeW5jOiAgICAgIHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhWydwYXltZW50cyddLFxyXG4gICAgICAgICAgICAgICAgcm93SWQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICAvL3BhZ2luZ1R5cGU6ICdmdWxsX251bWJlcnMnLCAvLyBcInNpbXBsZVwiIG9wdGlvbiBmb3IgJ1ByZXZpb3VzJyBhbmQgJ05leHQnIGJ1dHRvbnMgb25seVxyXG4gICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJjbGFzc1wiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmtC70LDRgSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwic3R1ZGVudFwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmNC80LUg0L3QsCDRg9GH0LXQvdC40LonXHJcbiAgICAgICAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwidGVhY2hlclwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmtGD0YDRgdC+0LIg0YDRitC60L7QstC+0LTQuNGC0LXQuydcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwicGF5bWVudFwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQl9Cw0Y/QstC10L3QsCDRgdGD0LzQsCdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiZm9yTW9udGhcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KLQsNC60YHQsCDQt9CwINC80LXRgdC10YYnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInByaWNlXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0LvQsNGC0LXQvdC+J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJkYXRlUHVyY2hhc2VzXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0LvQsNGC0LXQvdC+INC90LAg0LTQsNGC0LAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInVzZXJcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JrQsNGB0LjQtdGAJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEVkaXQgPSByb3cubGFzdEVkaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZVB1cmNoYXNlcyA9IHJvdy5kYXRlUHVyY2hhc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RFZGl0ICE9PSBkYXRlUHVyY2hhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RFZGl0ICsgJywg0L7RgiAnICsgcm93Lmxhc3RFZGl0VXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEVkaXQgPT09IGRhdGVQdXJjaGFzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9Cd0Y/QvNCwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aT48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQoNC10LTQsNC60YbQuNGPJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ25hbWVQYXllcicsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CS0L3QvtGB0LjRgtC10LsnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0LXRh9Cw0YInXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0LvQsNGJ0LDQvdC1J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQoNC10LTQsNC60YLQuNGA0LDQvdC1J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uRGVmczogW3tcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAtMyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J3ByaW50QnRuJyBjbGFzcz0nYnRuLWluZm8nPtCf0YDQuNC90YLQuNGA0LDQvdC1PC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAtMixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyb3cudXNlclJvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmlzTW9udEVuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLWRlZmF1bHQnIGRpc2FibGVkPtCX0LDRgtCy0L7RgNC10L3QvjwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdy5pc1BhaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSdidG4tZGFuZ2VyJz7QoNC10LTQsNC60YbQuNGPITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSdidG4td2FybmluZyc+0KDQtdC00LDQutGG0LjRjyE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0nYnRuLWRlZmF1bHQnIGRpc2FibGVkPtCY0LfRgtGA0LjQstCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdkZWxldGVCdG4nIGNsYXNzPSdidG4tZGFuZ2VyJz7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFswLCAnYXNjJ10sIFsxLCAnYXNjJ10sWzQsICdkZXMnXSwgWzYsICdkZXMnXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBiZy5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGRvbTogJ2xmQlNydGlwJyxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7ZXh0ZW5kOiAnY29weSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8ve2V4dGVuZDogJ2Nzdid9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdleGNlbCd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9leHRlbmQ6ICdwZGZIdG1sNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZDogJ3BkZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6ICdMRUdBTCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdwcmludCd9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZGF0YVRhYmxlc19wYWdpbmF0ZSBhLnBhZ2luYXRlX2J1dHRvbjpub3QoLmRpc2FibGVkKScsIHRoaXMuYXBpKCkudGFibGUoKS5jb250YWluZXIoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm5EcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCBvU2V0dGluZ3MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xvYWRpbmdCb3gnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi50YWJsZS1yZXNwb25zaXZlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUub24oJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd1RhYmxlID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93VGFibGUuYWRkQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd1RleHQgPSByb3dUYWJsZS5jaGlsZHJlbigpLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQudHJpbSgkKHRoaXMpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gcm93VGFibGUuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkID09PSAnZGVsZXRlQnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0dWRlbnRGdWxsTmFtZSA9IHJvd1RleHRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcm93VGV4dFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmljZSA9IHJvd1RleHRbNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9yTW9udGggPSByb3dUZXh0WzRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnREYXkgPSByb3dUZXh0WzZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBg0JjQt9GC0YDQuNCy0LDRgtC1INC/0LvQsNGJ0LDQvdC1INC90LAgXFxcIiR7c3R1ZGVudEZ1bGxOYW1lfVxcXCIg0L7RgiBcXFwiJHtjbGFzc05hbWV9XFxcIiDQutC70LDRgVxcbmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGDQt9CwINC80LXRgdC10YYgXFxcIiR7Zm9yTW9udGh9XFxcIiwg0YHRg9C80LAgJHtwcmljZX0g0LvQsi4sINC/0LvQsNGC0LXQvdC+INC90LAg0LTQsNGC0LAgJHtwYXltZW50RGF5fS4hISFgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbihgJHtwYXRofS9kZWxldGUvJHtpZH1gLCByb3dUYWJsZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PT0gJ2VkaXRCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uKGAke3BhdGh9L2VkaXQvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAncHJpbnRCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludFBkZkJ1dHRvbihgJHtwYXRofS9wZGYvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLXJlc3BvbnNpdmUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCBzcGFuJykudGV4dCgn0JPRgNC10YjQutCwINCyINC00LDQvdC90LjRgtC1INC+0YIg0YHRitGA0LLRitGA0LAhJyk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9