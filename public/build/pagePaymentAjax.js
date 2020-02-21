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
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _applyDataTable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applyDataTable.js */ "./assets/js/custom-page/applyDataTable.js");
/* harmony import */ var _button_row_table_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button-row-table.js */ "./assets/js/custom-page/button-row-table.js");
/* harmony import */ var _languageDataTable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./languageDataTable.js */ "./assets/js/custom-page/languageDataTable.js");










var path = '/payment';
$(document).ready(function () {
  $.ajax({
    url: path,
    type: 'POST',
    dataType: 'json',
    async: true,
    success: function success(data, status) {
      // Add footer
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_7__["table"].append('<tfoot><tr><th colspan="12" style="text-align:right"></th><th></th></tr></tfoot>');
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_7__["table"].dataTable({
        data: data['payments'],
        rowId: 'id',
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        fixedHeader: {
          header: true,
          footer: true
        },
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
        order: [[4, 'des'], [0, 'asc'], [1, 'asc'], [6, 'des']],
        language: _languageDataTable_js__WEBPACK_IMPORTED_MODULE_9__["bg"].language,
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
            Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_8__["rowTextDangerOnOff"])();
          });
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
          $('#loadingBox').hide();
          $(".table-responsive").show();
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_8__["rowTextDangerOnOff"])();
          _applyDataTable_js__WEBPACK_IMPORTED_MODULE_7__["table"].on('click', 'button', function () {
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
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_8__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
            } else if (this.id === 'editBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_8__["editButton"])("".concat(path, "/edit/").concat(id));
            } else if (this.id === 'printBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_8__["printPdfButton"])("".concat(path, "/pdf/").concat(id));
            }
          });
        },
        footerCallback: function footerCallback(row, data, start, end, display) {
          var columNumver = 5;
          var api = this.api(),
              data; // Remove the formatting to get integer data for summation

          var intVal = function intVal(i) {
            return typeof i === 'string' ? i.replace(/[\лв].+/g, '') * 1 : typeof i === 'number' ? i : 0;
          }; // Total over all pages


          var total = api.column(columNumver).data().reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0); // Total over this page

          var pageTotal = api.column(columNumver, {
            page: 'current'
          }).data().reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0); // Update footer

          $(api.column(columNumver).footer()).html('Сума на текущата страница: ' + pageTotal.toFixed(2) + ' лв.' + ' ( Сума от всички страници: ' + total.toFixed(2) + ' лв. )');
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

},[["./assets/js/custom-page/page-paymentAjax.js","runtime","vendors~app~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaym~d355a1e8","vendors~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaymentC~b4a9e623","vendors~pageClassTable~pagePaymentAjax~pagePaymentCreateAjax~pagePaymentEditAjax~pagePricePerDayAjax~c15c64ac","vendors~pageClassTable~pagePaymentAjax~pagePaymentEditAjax~pagePricePerDayAjax~pageProductAjax~pageP~40fc3f6f","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent","vendors~pageEndedMonth~pagePaymentAjax"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXBheW1lbnRBamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiXSwibmFtZXMiOlsidGFibGUiLCIkIiwicm93VGV4dERhbmdlck9uT2ZmIiwiaXNPbiIsInRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRyaW0iLCJzcGxpdCIsImlkIiwiTnVtYmVyIiwibGVuZ3RoIiwidHJUb2tlbiIsImVhY2giLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlbGV0ZUJ1dHRvbiIsInJvd1RhYmxlIiwibWVzc2FnZXMiLCJtc2ciLCJjb25maXJtRGlhbG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGQiLCJlZGl0IiwiYWRkT25CdG4iLCJjc3MiLCJoaWRlIiwic2hvdyIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJocmVmIiwiZXNjYXBlIiwiYWxlcnQiLCJ0aGVuIiwiZXJyIiwiZWRpdEJ1dHRvbiIsImFkZE9uQnV0dG9uIiwicGFpZE9uQnV0dG9uIiwicHJpbnRQZGZCdXR0b24iLCJiZyIsInBhdGgiLCJkb2N1bWVudCIsInJlYWR5IiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImFzeW5jIiwic3VjY2VzcyIsImRhdGEiLCJzdGF0dXMiLCJhcHBlbmQiLCJkYXRhVGFibGUiLCJyb3dJZCIsImZpeGVkSGVhZGVyIiwiaGVhZGVyIiwiZm9vdGVyIiwiY29sdW1ucyIsImRlZmF1bHRDb250ZW50IiwidGl0bGUiLCJyb3ciLCJ2YWwiLCJtZXRhIiwibGFzdEVkaXQiLCJkYXRlUHVyY2hhc2VzIiwibGFzdEVkaXRVc2VyIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJpc01vbnRFbmRlZCIsImlzUGFpZCIsIm9yZGVyIiwibGFuZ3VhZ2UiLCJkb20iLCJidXR0b25zIiwiZXh0ZW5kIiwib3JpZW50YXRpb24iLCJwYWdlU2l6ZSIsImRyYXdDYWxsYmFjayIsImFwaSIsImNvbnRhaW5lciIsIm9uIiwiZm5EcmF3Q2FsbGJhY2siLCJvU2V0dGluZ3MiLCJwYXJlbnQiLCJyb3dUZXh0IiwiY2hpbGRyZW4iLCJtYXAiLCJ0ZXh0IiwiZ2V0Iiwic3R1ZGVudEZ1bGxOYW1lIiwiY2xhc3NOYW1lIiwicHJpY2UiLCJmb3JNb250aCIsInBheW1lbnREYXkiLCJtZXNzYWdlIiwiZm9vdGVyQ2FsbGJhY2siLCJzdGFydCIsImVuZCIsImRpc3BsYXkiLCJjb2x1bU51bXZlciIsImludFZhbCIsImkiLCJyZXBsYWNlIiwidG90YWwiLCJjb2x1bW4iLCJyZWR1Y2UiLCJhIiwiYiIsInBhZ2VUb3RhbCIsInBhZ2UiLCJodG1sIiwidG9GaXhlZCIsImVycm9yIiwieGhyIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLElBQUlBLEtBQUssR0FBR0MsQ0FBQyxDQUFDLFlBQUQsQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFNBQVNDLGtCQUFULEdBQXlDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixJQUFNO0FBQ3JDLE1BQUlDLEtBQUssR0FBSUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUNQQyxJQURPLEdBRVBDLEtBRk8sQ0FFRCxHQUZDLENB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LGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMzRCx5QkFBeUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDcEUsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxpQkFBaUIsbUJBQU8sQ0FBQywrRUFBeUI7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtDQUErQztBQUNsRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicGFnZVBheW1lbnRBamF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhYmxlID0gJCgnI2RhdGFUYWJsZScpO1xyXG5cclxuZXhwb3J0IHt0YWJsZX07IiwiZnVuY3Rpb24gcm93VGV4dERhbmdlck9uT2ZmKGlzT24gPSB0cnVlKSB7XHJcbiAgICBsZXQgdG9rZW4gPSAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAuc3BsaXQoJy8nKTtcclxuXHJcbiAgICBsZXQgaWQgPSBOdW1iZXIodG9rZW5bdG9rZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgaWYgKGlkIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgdHJUb2tlbiA9ICQoJyNkYXRhVGFibGUgdGJvZHkgdHInKTtcclxuXHJcbiAgICAkKHRyVG9rZW4pLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoTnVtYmVyKCQodGhpcykuYXR0cignaWQnKSkgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihwYXRobmFtZSwgcm93VGFibGUsIG1lc3NhZ2VzKSB7XHJcbiAgICBsZXQgbXNnID0gYCEhISDQktCd0JjQnNCQ0J3QmNCVICEhIVxcbmAgKyBtZXNzYWdlcztcclxuICAgIGZ1bmN0aW9uIGNvbmZpcm1EaWFsb2cobXNnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgICAgIGxldCBlZGl0ID0gJCgnZGl2ICNlZGl0Jyk7XHJcbiAgICAgICAgICAgIGxldCBhZGRPbkJ0biA9ICQoJyNhZGRPbkJ0bicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBhZGQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKG1zZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlybWVkID8gcmVzb2x2ZSh0cnVlKSA6IHJlamVjdChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaHJlZihwYXRobmFtZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXNjYXBlKCkge1xyXG4gICAgICAgIGFsZXJ0KCfQntC/0LXRgNCw0YbQuNGP0YLQsCDQvtGC0LrQsNC30LDQvdCwIScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1EaWFsb2cobXNnKVxyXG4gICAgICAgIC50aGVuKCgpID0+ICBocmVmKHBhdGhuYW1lKSApXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBlc2NhcGUoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50UGRmQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5leHBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgYWRkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZiwgcGFpZE9uQnV0dG9uLCBwcmludFBkZkJ1dHRvbn07IiwibGV0IGJnID0ge1xyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJsZW5ndGhNZW51XCI6IFwi0J/QvtC60LDQt9Cy0LDQvdC1INC90LAgX01FTlVfINC30LDQv9C40YHQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LBcIixcclxuICAgICAgICBcInplcm9SZWNvcmRzXCI6IFwi0J3QuNGJ0L4g0L3QtSDQtSDQvdCw0LzQtdGA0LXQvdC+IC0g0YHRitC20LDQu9GP0LLQsNC8XCIsXHJcbiAgICAgICAgXCJpbmZvXCI6IFwi0J/QvtC60LDQt9Cy0LDQvdC1INC90LAg0YHRgtGA0LDQvdC40YbQsCBfUEFHRV8g0L7RgiBfUEFHRVNfXCIsXHJcbiAgICAgICAgXCJpbmZvRW1wdHlcIjogXCLQndGP0LzQsCDQvdCw0LvQuNGH0L3QuCDQt9Cw0L/QuNGB0LhcIixcclxuICAgICAgICBcImluZm9GaWx0ZXJlZFwiOiBcIijRhNC40LvRgtGA0LjRgNCw0L3QsCDQvtGCIF9NQVhfINC+0LHRidC+INC30LDQv9C40YHQuClcIixcclxuICAgICAgICBcImluZm9Qb3N0Rml4XCI6IFwiXCIsXHJcbiAgICAgICAgXCJ0aG91c2FuZHNcIjogXCIsXCIsXHJcbiAgICAgICAgXCJsb2FkaW5nUmVjb3Jkc1wiOiBcItCX0LDRgNC10LbQtNCwLi4uXCIsXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgXCJzZWFyY2hcIjogXCLQotGK0YDRgdC10L3QtSDQsiDRgtCw0LHQu9C40YbQsNGC0LAg0L/Qvi3QtNC+0LvRgzpcIixcclxuICAgICAgICBcInBhZ2luYXRlXCI6IHtcclxuICAgICAgICAgICAgXCJmaXJzdFwiOiBcItCf0YrRgNCy0LBcIixcclxuICAgICAgICAgICAgXCJsYXN0XCI6IFwi0J/QvtGB0LvQtdC00L3QsFwiLFxyXG4gICAgICAgICAgICBcIm5leHRcIjogXCLQodC70LXQtNCy0LDRidCwXCIsXHJcbiAgICAgICAgICAgIFwicHJldmlvdXNcIjogXCLQn9GA0LXQtNC40YjQvdCwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXJpYVwiOiB7XHJcbiAgICAgICAgICAgIFwic29ydEFzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINCy0YrQt9GF0L7QtNGP0YnQvlwiLFxyXG4gICAgICAgICAgICBcInNvcnREZXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0L3QuNC30YXQvtC00Y/RidC+XCJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwibnVsbFwiOiBcItC90Y/QvNCwINC00LDQvdC90LhcIixcclxuICAgIFwiY2hlY2tCb3hcIjogXCLQn9GA0Lgg0LjQt9Cx0L7RgCDQvdCwINC+0L/RhtC40Y/RgtCwOiBcIixcclxuICAgIFwiZW1wdHlNZXNzYWdlXCI6IFtcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjEuINCSINC/0L7Qu9C1ICfQotGK0YDRgdC10L3QtScg0LzQvtC20LXRiCDQtNCwINGC0YrRgNGB0LjRiCDQv9C+OiBpZCwg0L/QvtGC0YDQtdCx0LjRgtC10LssINC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjywg0LjQvNC10LnQuyDQuNC70Lgg0LzQvtC00YPQuy5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIyLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+IGlkINGC0YDRj9Cx0LLQsCDQtNCwINCy0YrQstC10LTQtdGC0LUgaWQ6INC4INC90L7QvNC10YDQsC4g0J3QsNC/0YDQuNC80LXRgCBpZDoxMjM0LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjMuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPIC0g0L/RgNC10L7QsdGA0LDQt9GD0LLQsCDQu9Cw0YLQuNC90LjRhtCwINCyINC60LjRgNC40LvQuNGG0LAg0Lgg0L7QsdGA0LDRgtC90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNC4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQvNC+0LTRg9C7INGC0YDRj9Cx0LLQsCDQtNCwINCy0YrQstC10LTQtdGC0LUg0LjQvNC10YLQviDQvdCwINC80L7QtNGD0LvQsC4gKNCd0LDQv9GA0LjQvNC10YA6IEExLjEpXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNS4gJ9CY0LfQs9C70LXQtNCw0L3QuCDQv9GA0L7RhtC10L3RgtC4INC+0YIg0LzQvtC00YPQu9CwJyDRgtC4INC00LDQstCw0YIg0YHQv9GA0LDQstC60LAg0LrQsNC60LLQsCDRh9Cw0YHRgiDQvtGCINCy0LjQtNC10LDRgtCwINC60YPRgNGB0LjRgdGC0YrRgiDQtSDQuNC30LPQu9C10LTQsNC7INC90LDQv9GK0LvQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjYuICfQodCw0LzQviDRgNC10LPQuNGB0YLRgNC40YDQsNC9JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDQstGB0LjRh9C60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0LDQvdC4INC/0L7RgtGA0LXQsdC40YLQtdC70LgsINC60L7QuNGC0L4g0YHQsCDQs9C70LXQtNCw0LvQuCDQsdC10LfQv9C70LDRgtC90Lgg0LLQuNC00LXQsC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI3LiAn0KEg0LTQvtGB0YLRitC/INC00L4g0LzQvtC00YPQuycgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0YHQsNC80L4g0LrRg9GA0YHQuNGB0YLQuNGC0LUsINC60L7QuNGC0L4g0LjQvNCw0YIg0LTQsNC00LXQvSDQtNC+0YHRgtGK0L8g0LTQviDQvtC/0YDQtdC00LXQu9C10L0g0LzQvtC00YPQuy5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogYDguICfQotGK0YDRgdC10L3QtSDQsiDRgtCw0LHQu9C40YbQsNGC0LAg0L/Qvi3QtNC+0LvRgzonIC0g0YLRitGA0YHQuCDQv9C+INC00L7Qv9GK0LvQvdC40YLQtdC70LXQvSDQutGA0LjRgtC10YDQuNC5INCyINC40LfQs9C+0YLQstC10L3QsNGC0LAg0LLQtdGH0LUg0YHQv9GA0LDQstC60LAuYH1cclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQge2JnfTsiLCJpbXBvcnQge3RhYmxlfSBmcm9tICcuL2FwcGx5RGF0YVRhYmxlLmpzJ1xyXG5pbXBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLHByaW50UGRmQnV0dG9ufSBmcm9tICcuL2J1dHRvbi1yb3ctdGFibGUuanMnO1xyXG5pbXBvcnQge2JnfSBmcm9tICcuL2xhbmd1YWdlRGF0YVRhYmxlLmpzJztcclxuY29uc3QgcGF0aCA9ICcvcGF5bWVudCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogICAgICAgIHBhdGgsXHJcbiAgICAgICAgdHlwZTogICAgICAgJ1BPU1QnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAgICdqc29uJyxcclxuICAgICAgICBhc3luYzogICAgICB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBBZGQgZm9vdGVyXHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCgnPHRmb290Pjx0cj48dGggY29sc3Bhbj1cIjEyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0XCI+PC90aD48dGg+PC90aD48L3RyPjwvdGZvb3Q+Jyk7XHJcblxyXG4gICAgICAgICAgICB0YWJsZS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVsncGF5bWVudHMnXSxcclxuICAgICAgICAgICAgICAgIHJvd0lkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgLy9wYWdpbmdUeXBlOiAnZnVsbF9udW1iZXJzJywgLy8gXCJzaW1wbGVcIiBvcHRpb24gZm9yICdQcmV2aW91cycgYW5kICdOZXh0JyBidXR0b25zIG9ubHlcclxuICAgICAgICAgICAgICAgIGZpeGVkSGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiY2xhc3NcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JrQu9Cw0YEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInN0dWRlbnRcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JjQvNC1INC90LAg0YPRh9C10L3QuNC6J1xyXG4gICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInRlYWNoZXJcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JrRg9GA0YHQvtCyINGA0YrQutC+0LLQvtC00LjRgtC10LsnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInBheW1lbnRcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JfQsNGP0LLQtdC90LAg0YHRg9C80LAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImZvck1vbnRoXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ci0LDQutGB0LAg0LfQsCDQvNC10YHQtdGGJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJwcmljZVwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRgtC10L3QvidcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiZGF0ZVB1cmNoYXNlc1wiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRgtC10L3QviDQvdCwINC00LDRgtCwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJ1c2VyXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ca0LDRgdC40LXRgCdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RFZGl0ID0gcm93Lmxhc3RFZGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVQdXJjaGFzZXMgPSByb3cuZGF0ZVB1cmNoYXNlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0RWRpdCAhPT0gZGF0ZVB1cmNoYXNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0RWRpdCArICcsINC+0YIgJyArIHJvdy5sYXN0RWRpdFVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RFZGl0ID09PSBkYXRlUHVyY2hhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQndGP0LzQsCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGG0LjRjydcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICduYW1lUGF5ZXInLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQktC90L7RgdC40YLQtdC7J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C10YfQsNGCJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRidCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGC0LjRgNCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdwcmludEJ0bicgY2xhc3M9J2J0bi1pbmZvJz7Qn9GA0LjQvdGC0LjRgNCw0L3QtTwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocm93LnVzZXJSb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc01vbnRFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZWRpdEJ0bicgY2xhc3M9J2J0bi1kZWZhdWx0JyBkaXNhYmxlZD7Ql9Cw0YLQstC+0YDQtdC90L48L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0KDQtdC00LDQutGG0LjRjyE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLXdhcm5pbmcnPtCg0LXQtNCw0LrRhtC40Y8hPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc1BhaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2RlbGV0ZUJ0bicgY2xhc3M9J2J0bi1kZWZhdWx0JyBkaXNhYmxlZD7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICBbNCwgJ2RlcyddLCBbMCwgJ2FzYyddLCBbMSwgJ2FzYyddLCBbNiwgJ2RlcyddXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGJnLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgZG9tOiAnbGZCU3J0aXAnLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdjb3B5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgLy97ZXh0ZW5kOiAnY3N2J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2V4dGVuZDogJ3BkZkh0bWw1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kOiAncGRmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogJ0xFR0FMJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ3ByaW50J30sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5kYXRhVGFibGVzX3BhZ2luYXRlIGEucGFnaW5hdGVfYnV0dG9uOm5vdCguZGlzYWJsZWQpJywgdGhpcy5hcGkoKS50YWJsZSgpLmNvbnRhaW5lcigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmbkRyYXdDYWxsYmFjazogZnVuY3Rpb24oIG9TZXR0aW5ncyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLXJlc3BvbnNpdmVcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGV4dCA9IHJvd1RhYmxlLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3dUYWJsZS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3R1ZGVudEZ1bGxOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSByb3dUZXh0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcm93VGV4dFs1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JNb250aCA9IHJvd1RleHRbNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudERheSA9IHJvd1RleHRbNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGDQmNC30YLRgNC40LLQsNGC0LUg0L/Qu9Cw0YnQsNC90LUg0L3QsCBcXFwiJHtzdHVkZW50RnVsbE5hbWV9XFxcIiDQvtGCIFxcXCIke2NsYXNzTmFtZX1cXFwiINC60LvQsNGBXFxuYCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYNC30LAg0LzQtdGB0LXRhiBcXFwiJHtmb3JNb250aH1cXFwiLCDRgdGD0LzQsCAke3ByaWNlfSDQu9CyLiwg0L/Qu9Cw0YLQtdC90L4g0L3QsCDQtNCw0YLQsCAke3BheW1lbnREYXl9LiEhIWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uKGAke3BhdGh9L2RlbGV0ZS8ke2lkfWAsIHJvd1RhYmxlLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnZWRpdEJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24oYCR7cGF0aH0vZWRpdC8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdwcmludEJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50UGRmQnV0dG9uKGAke3BhdGh9L3BkZi8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uICggcm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bU51bXZlciA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwaSA9IHRoaXMuYXBpKCksIGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybWF0dGluZyB0byBnZXQgaW50ZWdlciBkYXRhIGZvciBzdW1tYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnJlcGxhY2UoL1tcXNC70LJdLisvZywgJycpKjEgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGkgPT09ICdudW1iZXInID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUb3RhbCBvdmVyIGFsbCBwYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IGFwaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29sdW1uKGNvbHVtTnVtdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2x1bW4oY29sdW1OdW12ZXIsIHsgcGFnZTogJ2N1cnJlbnQnfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGZvb3RlclxyXG4gICAgICAgICAgICAgICAgICAgICQoYXBpLmNvbHVtbihjb2x1bU51bXZlcikuZm9vdGVyKCkgKS5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAn0KHRg9C80LAg0L3QsCDRgtC10LrRg9GJ0LDRgtCwINGB0YLRgNCw0L3QuNGG0LA6ICcgKyBwYWdlVG90YWwudG9GaXhlZCgyKSArICcg0LvQsi4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyAoINCh0YPQvNCwINC+0YIg0LLRgdC40YfQutC4INGB0YLRgNCw0L3QuNGG0Lg6ICcgKyB0b3RhbC50b0ZpeGVkKDIpICsgJyDQu9CyLiApJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICQoJyNsb2FkaW5nQm94JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcudGFibGUtcmVzcG9uc2l2ZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2Vycm9yQm94IHNwYW4nKS50ZXh0KCfQk9GA0LXRiNC60LAg0LIg0LTQsNC90L3QuNGC0LUg0L7RgiDRgdGK0YDQstGK0YDQsCEnKTtcclxuICAgICAgICAgICAgJCgnI2Vycm9yQm94Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=