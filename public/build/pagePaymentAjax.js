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
/*! exports provided: editButton, deleteButton, addOnButton, rowTextDangerOnOff, paidOnButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editButton", function() { return editButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteButton", function() { return deleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOnButton", function() { return addOnButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowTextDangerOnOff", function() { return rowTextDangerOnOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paidOnButton", function() { return paidOnButton; });
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
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);








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
  var promise = new Promise(function (resolve, reject) {
    rowTextDangerOnOff(false);
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

    setTimeout(function () {
      resolve(["".concat(add.css('display')), "".concat(rowTable.removeClass("text-danger"))]);
    }, 300);
  });
  promise.then(function (value) {
    if (confirm("!!! \u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415 !!!\n" + messages)) {
      window.location.href = pathname;
    }

    return false;
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

/***/ "./assets/js/custom-page/page-payment-ajax.js":
/*!****************************************************!*\
  !*** ./assets/js/custom-page/page-payment-ajax.js ***!
  \****************************************************/
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
        data: data,
        rowId: 'id',
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        columns: [{
          data: "student",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Име на ученик'
        }, {
          data: "class",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Клас'
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
          title: 'Име на касиер'
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
          title: 'Име на платеца'
        }, {
          title: 'Плащане'
        }, {
          title: 'Редактиране'
        }],
        columnDefs: [{
          targets: -2,
          data: function data(row, type, val, meta) {
            //console.log(row.userRole);
            if (row.isPaid) {
              return "<button id='editBtn' class='btn-danger'>Редактиране!</button>";
            }

            return "<button id='editBtn' class='btn-warning'>Редактиране!</button>";
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
        order: [[1, 'asc'], [0, 'asc'], [6, 'des']],
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
          _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].on('click', 'tr', function () {
            window.location.href = "".concat(path, "/pdf/").concat(this.getAttribute('id'));
          });
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
              var _status = rowText[3];
              var forMonth = rowText[4];
              var paymentDay = rowText[6];
              var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u0442\u0435 \u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \"".concat(studentFullName, "\" \u043E\u0442 \"").concat(className, "\" \u043A\u043B\u0430\u0441\n") + "\u0437\u0430 \u043C\u0435\u0441\u0435\u0446 \"".concat(forMonth, "\", \u0441\u0443\u043C\u0430 ").concat(price, " \u043B\u0432., \u043F\u043B\u0430\u0442\u0435\u043D\u043E \u043D\u0430 \u0434\u0430\u0442\u0430 ").concat(paymentDay, ".!!!");
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
            } else if (this.id === 'editBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["editButton"])("".concat(path, "/edit/").concat(id));
            }
          });
        }
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      alert('Грешка в данните от сървъра.');
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

},[["./assets/js/custom-page/page-payment-ajax.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXBheW1lbnQtYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIl0sIm5hbWVzIjpbInRhYmxlIiwiJCIsInJvd1RleHREYW5nZXJPbk9mZiIsImlzT24iLCJ0b2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0cmltIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImxlbmd0aCIsInRyVG9rZW4iLCJlYWNoIiwiYXR0ciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkZWxldGVCdXR0b24iLCJyb3dUYWJsZSIsIm1lc3NhZ2VzIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWRkIiwiZWRpdCIsImFkZE9uQnRuIiwiY3NzIiwiaGlkZSIsInNob3ciLCJzZXRUaW1lb3V0IiwidGhlbiIsInZhbHVlIiwiY29uZmlybSIsImhyZWYiLCJlZGl0QnV0dG9uIiwiYWRkT25CdXR0b24iLCJwYWlkT25CdXR0b24iLCJiZyIsInBhdGgiLCJkb2N1bWVudCIsInJlYWR5IiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImFzeW5jIiwic3VjY2VzcyIsImRhdGEiLCJzdGF0dXMiLCJkYXRhVGFibGUiLCJyb3dJZCIsImNvbHVtbnMiLCJkZWZhdWx0Q29udGVudCIsInRpdGxlIiwicm93IiwidmFsIiwibWV0YSIsImxhc3RFZGl0IiwiZGF0ZVB1cmNoYXNlcyIsImxhc3RFZGl0VXNlciIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwiaXNQYWlkIiwib3JkZXIiLCJsYW5ndWFnZSIsImRvbSIsImJ1dHRvbnMiLCJleHRlbmQiLCJvcmllbnRhdGlvbiIsInBhZ2VTaXplIiwiZHJhd0NhbGxiYWNrIiwiYXBpIiwiY29udGFpbmVyIiwib24iLCJmbkRyYXdDYWxsYmFjayIsIm9TZXR0aW5ncyIsImdldEF0dHJpYnV0ZSIsInBhcmVudCIsInJvd1RleHQiLCJjaGlsZHJlbiIsIm1hcCIsInRleHQiLCJnZXQiLCJzdHVkZW50RnVsbE5hbWUiLCJjbGFzc05hbWUiLCJwcmljZSIsImZvck1vbnRoIiwicGF5bWVudERheSIsIm1lc3NhZ2UiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLElBQUlBLEtBQUssR0FBR0MsQ0FBQyxDQUFDLFlBQUQsQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsU0FBU0Msa0JBQVQsR0FBeUM7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLElBQU07QUFDckMsTUFBSUMsS0FBSyxHQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQ1BDLElBRE8sR0FFUEMsS0FGTyxDQUVELEdBRkMsQ0FBWjtBQUlBLE1BQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDUCxLQUFLLENBQUNBLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQWhCLENBQU4sQ0FBZjs7QUFDQSxNQUFJRixFQUFFLElBQUksQ0FBVixFQUFhO0FBQ1QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSUcsT0FBTyxHQUFHWixDQUFDLENBQUMscUJBQUQsQ0FBZjtBQUVBQSxHQUFDLENBQUNZLE9BQUQsQ0FBRCxDQUFXQyxJQUFYLENB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QyxtR0FBbUM7QUFDcEUsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxpQkFBaUIsbUJBQU8sQ0FBQywrRUFBeUI7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtDQUErQztBQUNsRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicGFnZVBheW1lbnRBamF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhYmxlID0gJCgnI2RhdGFUYWJsZScpO1xyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgYCR7YWRkLmNzcygnZGlzcGxheScpfWAsXHJcbiAgICAgICAgICAgICAgICBgJHtyb3dUYWJsZS5yZW1vdmVDbGFzcyhcInRleHQtZGFuZ2VyXCIpfWBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmIChjb25maXJtKGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5leHBvcnQge2JnfTsiLCJpbXBvcnQge3RhYmxlfSBmcm9tICcuL2FwcGx5RGF0YVRhYmxlLmpzJ1xyXG5pbXBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmfSBmcm9tICcuL2J1dHRvbi1yb3ctdGFibGUuanMnO1xyXG5pbXBvcnQge2JnfSBmcm9tICcuL2xhbmd1YWdlRGF0YVRhYmxlLmpzJztcclxuY29uc3QgcGF0aCA9ICcvcGF5bWVudCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogICAgICAgIHBhdGgsXHJcbiAgICAgICAgdHlwZTogICAgICAgJ1BPU1QnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAgICdqc29uJyxcclxuICAgICAgICBhc3luYzogICAgICB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICB0YWJsZS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIHJvd0lkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgLy9wYWdpbmdUeXBlOiAnZnVsbF9udW1iZXJzJywgLy8gXCJzaW1wbGVcIiBvcHRpb24gZm9yICdQcmV2aW91cycgYW5kICdOZXh0JyBidXR0b25zIG9ubHlcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwic3R1ZGVudFwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmNC80LUg0L3QsCDRg9GH0LXQvdC40LonXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiY2xhc3NcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JrQu9Cw0YEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwidGVhY2hlclwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmtGD0YDRgdC+0LIg0YDRitC60L7QstC+0LTQuNGC0LXQuydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJwYXltZW50XCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CX0LDRj9Cy0LXQvdCwINGB0YPQvNCwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImZvck1vbnRoXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ci0LDQutGB0LAg0LfQsCDQvNC10YHQtdGGJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInByaWNlXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0LvQsNGC0LXQvdC+J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImRhdGVQdXJjaGFzZXNcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0J/Qu9Cw0YLQtdC90L4g0L3QsCDQtNCw0YLQsCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJ1c2VyXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CY0LzQtSDQvdCwINC60LDRgdC40LXRgCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEVkaXQgPSByb3cubGFzdEVkaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZVB1cmNoYXNlcyA9IHJvdy5kYXRlUHVyY2hhc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RFZGl0ICE9PSBkYXRlUHVyY2hhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RFZGl0ICsgJywg0L7RgiAnICsgcm93Lmxhc3RFZGl0VXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEVkaXQgPT09IGRhdGVQdXJjaGFzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9Cd0Y/QvNCwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aT48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQoNC10LTQsNC60YbQuNGPJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnbmFtZVBheWVyJywgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JjQvNC1INC90LAg0L/Qu9Cw0YLQtdGG0LAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0J/Qu9Cw0YnQsNC90LUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGC0LjRgNCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocm93LnVzZXJSb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc1BhaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSdidG4tZGFuZ2VyJz7QoNC10LTQsNC60YLQuNGA0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSdidG4td2FybmluZyc+0KDQtdC00LDQutGC0LjRgNCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0nYnRuLWRlZmF1bHQnIGRpc2FibGVkPtCY0LfRgtGA0LjQstCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdkZWxldGVCdG4nIGNsYXNzPSdidG4tZGFuZ2VyJz7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxLCAnYXNjJ10sIFswLCAnYXNjJ10sIFs2LCAnZGVzJ11cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogYmcubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBkb206ICdsZkJTcnRpcCcsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2NvcHknfSxcclxuICAgICAgICAgICAgICAgICAgICAvL3tleHRlbmQ6ICdjc3YnfSxcclxuICAgICAgICAgICAgICAgICAgICB7ZXh0ZW5kOiAnZXhjZWwnfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZXh0ZW5kOiAncGRmSHRtbDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmQ6ICdwZGYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAnTEVHQUwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7ZXh0ZW5kOiAncHJpbnQnfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGFUYWJsZXNfcGFnaW5hdGUgYS5wYWdpbmF0ZV9idXR0b246bm90KC5kaXNhYmxlZCknLCB0aGlzLmFwaSgpLnRhYmxlKCkuY29udGFpbmVyKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZuRHJhd0NhbGxiYWNrOiBmdW5jdGlvbiggb1NldHRpbmdzICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNsb2FkaW5nQm94JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtwYXRofS9wZGYvJHt0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGV4dCA9IHJvd1RhYmxlLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3dUYWJsZS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3R1ZGVudEZ1bGxOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSByb3dUZXh0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcm93VGV4dFs1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSByb3dUZXh0WzNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvck1vbnRoID0gcm93VGV4dFs0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50RGF5ID0gcm93VGV4dFs2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYNCY0LfRgtGA0LjQstCw0YLQtSDQv9C70LDRidCw0L3QtSDQvdCwIFxcXCIke3N0dWRlbnRGdWxsTmFtZX1cXFwiINC+0YIgXFxcIiR7Y2xhc3NOYW1lfVxcXCIg0LrQu9Cw0YFcXG5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBg0LfQsCDQvNC10YHQtdGGIFxcXCIke2Zvck1vbnRofVxcXCIsINGB0YPQvNCwICR7cHJpY2V9INC70LIuLCDQv9C70LDRgtC10L3QviDQvdCwINC00LDRgtCwICR7cGF5bWVudERheX0uISEhYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24oYCR7cGF0aH0vZGVsZXRlLyR7aWR9YCwgcm93VGFibGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdlZGl0QnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbihgJHtwYXRofS9lZGl0LyR7aWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9CT0YDQtdGI0LrQsCDQsiDQtNCw0L3QvdC40YLQtSDQvtGCINGB0YrRgNCy0YrRgNCwLicpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=