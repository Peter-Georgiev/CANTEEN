(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageStudent"],{

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

/***/ "./assets/js/custom-page/page-student.js":
/*!***********************************************!*\
  !*** ./assets/js/custom-page/page-student.js ***!
  \***********************************************/
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






var path = '/student';
$(document).ready(function () {
  _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].dataTable({
    //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
    columnDefs: [{
      targets: -2,
      data: null,
      defaultContent: "<button id='editBtn' class='text-warning'>Редактиране!</button>"
    }, {
      targets: -1,
      data: null,
      defaultContent: "<button id='deleteBtn' class='text-danger'>Изтриване!</button>"
    }],
    order: [[0, 'asc'], [1, 'asc'], [2, 'des']],
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
      $('.dataTables_paginate a.paginate_button:not(.disabled)', this.api().table().container()).on('click', function () {// rowTextDangerOnOff();
      });
    },
    fnDrawCallback: function fnDrawCallback(oSettings) {
      $('#loadingBox').hide();
      $('.table-responsive').show();
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["rowTextDangerOnOff"])();
      $('#addOnBtn button').on('click', function () {
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["addOnButton"])("".concat(path, "/create"));
      });
    }
  });
  _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].on('click', 'button', function () {
    var rowTable = $(this).parent().parent(); //rowTable.addClass("text-danger");

    var rowText = rowTable.children().map(function () {
      return $.trim($(this).text());
    }).get();
    var id = rowTable.attr('id');

    if (this.id === 'deleteBtn') {
      var className = rowText[0];
      var studentFullName = rowText[1];
      var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0443\u0447\u0435\u043D\u0438\u043A \"".concat(studentFullName, "\" \n\u043E\u0442 \u043A\u043B\u0430\u0441 \"").concat(className, "\"!!!");
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
    } else if (this.id === 'editBtn') {
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["editButton"])("".concat(path, "/edit/").concat(id));
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

},[["./assets/js/custom-page/page-student.js","runtime","vendors~app~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaym~d355a1e8","vendors~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaymentC~b4a9e623","vendors~pageClassTable~pagePaymentAjax~pagePaymentCreateAjax~pagePaymentEditAjax~pagePricePerDayAjax~c15c64ac","vendors~pageClassTable~pagePaymentAjax~pagePaymentEditAjax~pagePricePerDayAjax~pageProductAjax~pageP~40fc3f6f","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXN0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyJdLCJuYW1lcyI6WyJ0YWJsZSIsIiQiLCJyb3dUZXh0RGFuZ2VyT25PZmYiLCJpc09uIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidHJpbSIsInNwbGl0IiwiaWQiLCJOdW1iZXIiLCJsZW5ndGgiLCJ0clRva2VuIiwiZWFjaCIsImF0dHIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGVsZXRlQnV0dG9uIiwicm93VGFibGUiLCJtZXNzYWdlcyIsIm1zZyIsImNvbmZpcm1EaWFsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZCIsImVkaXQiLCJhZGRPbkJ0biIsImNzcyIsImhpZGUiLCJzaG93IiwiY29uZmlybWVkIiwiY29uZmlybSIsImhyZWYiLCJlc2NhcGUiLCJhbGVydCIsInRoZW4iLCJlcnIiLCJlZGl0QnV0dG9uIiwiYWRkT25CdXR0b24iLCJwYWlkT25CdXR0b24iLCJwcmludFBkZkJ1dHRvbiIsImJnIiwicGF0aCIsImRvY3VtZW50IiwicmVhZHkiLCJkYXRhVGFibGUiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsImRhdGEiLCJkZWZhdWx0Q29udGVudCIsIm9yZGVyIiwibGFuZ3VhZ2UiLCJkb20iLCJidXR0b25zIiwiZXh0ZW5kIiwib3JpZW50YXRpb24iLCJwYWdlU2l6ZSIsImRyYXdDYWxsYmFjayIsImFwaSIsImNvbnRhaW5lciIsIm9uIiwiZm5EcmF3Q2FsbGJhY2siLCJvU2V0dGluZ3MiLCJwYXJlbnQiLCJyb3dUZXh0IiwiY2hpbGRyZW4iLCJtYXAiLCJ0ZXh0IiwiZ2V0IiwiY2xhc3NOYW1lIiwic3R1ZGVudEZ1bGxOYW1lIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFJQSxLQUFLLEdBQUdDLENBQUMsQ0FBQyxZQUFELENBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxTQUFTQyxrQkFBVCxHQUF5QztBQUFBLE1BQWJDLElBQWEsdUVBQU4sSUFBTTtBQUNyQyxNQUFJQyxLQUFLLEdBQUlDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FDUEMsSUFETyxHQUVQQyxLQUZPLENBRUQsR0FGQyxDQUFaO0FBSUEsTUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNQLEtBQUssQ0FBQ0EsS0FBSyxDQUFDUSxNQUFOLEdBQWUsQ0FBaEIsQ0FBTixDQUFmOztBQUNBLE1BQUlGLEVBQUUsSUFBSSxDQUFWLEVBQWE7QUFDVCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJRyxPQUFPLEdBQUdaLENBQUMsQ0FBQyxxQkFBRCxDQUFmO0FBRUFBLEdBQUMsQ0FBQ1ksT0FBRCxDQUFELENBQVdDLElBQVgsQ0FBZ0IsWUFBVTtBQUN0QixRQUFJSCxNQUFNLENBQUNWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLElBQWIsQ0FBRCxDQUFOLEtBQStCTCxFQUFuQyxFQUF1QztBQUNuQyxVQUFJUCxJQUFKLEVBQVU7QUFDTkYsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxRQUFSLENBQWlCLGFBQWpCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hmLFNBQUMsQ0FBQyxJQUFELENBQUQs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QUFDQSxHQUFHLCtDQUErQztBQUNsRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicGFnZVN0dWRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFibGUgPSAkKCcjZGF0YVRhYmxlJyk7XHJcblxyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBtc2cgPSBgISEhINCS0J3QmNCc0JDQndCY0JUgISEhXFxuYCArIG1lc3NhZ2VzO1xyXG4gICAgZnVuY3Rpb24gY29uZmlybURpYWxvZyhtc2cpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgYWRkID0gJCgnZGl2ICNhZGQnKTtcclxuICAgICAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICAgICAgbGV0IGFkZE9uQnRuID0gJCgnI2FkZE9uQnRuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRkLmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIGVkaXQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0obXNnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb25maXJtZWQgPyByZXNvbHZlKHRydWUpIDogcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBocmVmKHBhdGhuYW1lKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlc2NhcGUoKSB7XHJcbiAgICAgICAgYWxlcnQoJ9Ce0L/QtdGA0LDRhtC40Y/RgtCwINC+0YLQutCw0LfQsNC90LAhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybURpYWxvZyhtc2cpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gIGhyZWYocGF0aG5hbWUpIClcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGVzY2FwZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdEJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxuICAgIC8vZmV0Y2goYC9zdHVkZW50L2VkaXQvJHtkYXRhLnN0dWRlbnRJZH1gLCB7XHJcbiAgICAvLyAgbWV0aG9kOiAnUE9TVCdcclxuICAgIC8vfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhaWRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRQZGZCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b24sIHByaW50UGRmQnV0dG9ufTsiLCJsZXQgYmcgPSB7XHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcImxlbmd0aE1lbnVcIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCBfTUVOVV8g0LfQsNC/0LjRgdC4INC90LAg0YHRgtGA0LDQvdC40YbQsFwiLFxyXG4gICAgICAgIFwiemVyb1JlY29yZHNcIjogXCLQndC40YnQviDQvdC1INC1INC90LDQvNC10YDQtdC90L4gLSDRgdGK0LbQsNC70Y/QstCw0LxcIixcclxuICAgICAgICBcImluZm9cIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCDRgdGC0YDQsNC90LjRhtCwIF9QQUdFXyDQvtGCIF9QQUdFU19cIixcclxuICAgICAgICBcImluZm9FbXB0eVwiOiBcItCd0Y/QvNCwINC90LDQu9C40YfQvdC4INC30LDQv9C40YHQuFwiLFxyXG4gICAgICAgIFwiaW5mb0ZpbHRlcmVkXCI6IFwiKNGE0LjQu9GC0YDQuNGA0LDQvdCwINC+0YIgX01BWF8g0L7QsdGJ0L4g0LfQsNC/0LjRgdC4KVwiLFxyXG4gICAgICAgIFwiaW5mb1Bvc3RGaXhcIjogXCJcIixcclxuICAgICAgICBcInRob3VzYW5kc1wiOiBcIixcIixcclxuICAgICAgICBcImxvYWRpbmdSZWNvcmRzXCI6IFwi0JfQsNGA0LXQttC00LAuLi5cIixcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICBcInNlYXJjaFwiOiBcItCi0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOlwiLFxyXG4gICAgICAgIFwicGFnaW5hdGVcIjoge1xyXG4gICAgICAgICAgICBcImZpcnN0XCI6IFwi0J/RitGA0LLQsFwiLFxyXG4gICAgICAgICAgICBcImxhc3RcIjogXCLQn9C+0YHQu9C10LTQvdCwXCIsXHJcbiAgICAgICAgICAgIFwibmV4dFwiOiBcItCh0LvQtdC00LLQsNGJ0LBcIixcclxuICAgICAgICAgICAgXCJwcmV2aW91c1wiOiBcItCf0YDQtdC00LjRiNC90LBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhcmlhXCI6IHtcclxuICAgICAgICAgICAgXCJzb3J0QXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0LLRitC30YXQvtC00Y/RidC+XCIsXHJcbiAgICAgICAgICAgIFwic29ydERlc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQvdC40LfRhdC+0LTRj9GJ0L5cIlxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCJudWxsXCI6IFwi0L3Rj9C80LAg0LTQsNC90L3QuFwiLFxyXG4gICAgXCJjaGVja0JveFwiOiBcItCf0YDQuCDQuNC30LHQvtGAINC90LAg0L7Qv9GG0LjRj9GC0LA6IFwiLFxyXG4gICAgXCJlbXB0eU1lc3NhZ2VcIjogW1xyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMS4g0JIg0L/QvtC70LUgJ9Ci0YrRgNGB0LXQvdC1JyDQvNC+0LbQtdGIINC00LAg0YLRitGA0YHQuNGIINC/0L46IGlkLCDQv9C+0YLRgNC10LHQuNGC0LXQuywg0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPLCDQuNC80LXQudC7INC40LvQuCDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjIuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4gaWQg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSBpZDog0Lgg0L3QvtC80LXRgNCwLiDQndCw0L/RgNC40LzQtdGAIGlkOjEyMzQuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMy4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8gLSDQv9GA0LXQvtCx0YDQsNC30YPQstCwINC70LDRgtC40L3QuNGG0LAg0LIg0LrQuNGA0LjQu9C40YbQsCDQuCDQvtCx0YDQsNGC0L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI0LiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC80L7QtNGD0Lsg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSDQuNC80LXRgtC+INC90LAg0LzQvtC00YPQu9CwLiAo0J3QsNC/0YDQuNC80LXRgDogQTEuMSlcIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI1LiAn0JjQt9Cz0LvQtdC00LDQvdC4INC/0YDQvtGG0LXQvdGC0Lgg0L7RgiDQvNC+0LTRg9C70LAnINGC0Lgg0LTQsNCy0LDRgiDRgdC/0YDQsNCy0LrQsCDQutCw0LrQstCwINGH0LDRgdGCINC+0YIg0LLQuNC00LXQsNGC0LAg0LrRg9GA0YHQuNGB0YLRitGCINC1INC40LfQs9C70LXQtNCw0Lsg0L3QsNC/0YrQu9C90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNi4gJ9Ch0LDQvNC+INGA0LXQs9C40YHRgtGA0LjRgNCw0L0nIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINCy0YHQuNGH0LrQuCDRgNC10LPQuNGB0YLRgNC40YDQsNC90Lgg0L/QvtGC0YDQtdCx0LjRgtC10LvQuCwg0LrQvtC40YLQviDRgdCwINCz0LvQtdC00LDQu9C4INCx0LXQt9C/0LvQsNGC0L3QuCDQstC40LTQtdCwLlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjcuICfQoSDQtNC+0YHRgtGK0L8g0LTQviDQvNC+0LTRg9C7JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDRgdCw0LzQviDQutGD0YDRgdC40YHRgtC40YLQtSwg0LrQvtC40YLQviDQuNC80LDRgiDQtNCw0LTQtdC9INC00L7RgdGC0YrQvyDQtNC+INC+0L/RgNC10LTQtdC70LXQvSDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBgOC4gJ9Ci0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOicgLSDRgtGK0YDRgdC4INC/0L4g0LTQvtC/0YrQu9C90LjRgtC10LvQtdC9INC60YDQuNGC0LXRgNC40Lkg0LIg0LjQt9Cz0L7RgtCy0LXQvdCw0YLQsCDQstC10YfQtSDRgdC/0YDQsNCy0LrQsC5gfVxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7Ymd9OyIsImltcG9ydCB7dGFibGV9IGZyb20gJy4vYXBwbHlEYXRhVGFibGUuanMnXHJcbmltcG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmfSBmcm9tICcuL2J1dHRvbi1yb3ctdGFibGUuanMnO1xyXG5pbXBvcnQge2JnfSBmcm9tICcuL2xhbmd1YWdlRGF0YVRhYmxlLmpzJztcclxuY29uc3QgcGF0aCA9ICcvc3R1ZGVudCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGFibGUuZGF0YVRhYmxlKHtcclxuICAgIC8vcGFnaW5nVHlwZTogJ2Z1bGxfbnVtYmVycycsIC8vIFwic2ltcGxlXCIgb3B0aW9uIGZvciAnUHJldmlvdXMnIGFuZCAnTmV4dCcgYnV0dG9ucyBvbmx5XHJcbiAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgICAgIHRhcmdldHM6IC0yLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiPGJ1dHRvbiBpZD0nZWRpdEJ0bicgY2xhc3M9J3RleHQtd2FybmluZyc+0KDQtdC00LDQutGC0LjRgNCw0L3QtSE8L2J1dHRvbj5cIlxyXG4gICAgfSwge1xyXG4gICAgICAgIHRhcmdldHM6IC0xLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0ndGV4dC1kYW5nZXInPtCY0LfRgtGA0LjQstCw0L3QtSE8L2J1dHRvbj5cIlxyXG4gICAgfV0sXHJcbiAgICBvcmRlcjogW1xyXG4gICAgICAgIFswLCAnYXNjJ10sIFsxLCAnYXNjJ10sIFsyLCAnZGVzJ11cclxuICAgIF0sXHJcbiAgICBsYW5ndWFnZTogYmcubGFuZ3VhZ2UsXHJcbiAgICBkb206ICdsZkJTcnRpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAge2V4dGVuZDogJ2NvcHknfSxcclxuICAgICAgICAvL3tleHRlbmQ6ICdjc3YnfSxcclxuICAgICAgICB7ZXh0ZW5kOiAnZXhjZWwnfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXh0ZW5kOiAncGRmSHRtbDUnLFxyXG4gICAgICAgICAgICBleHRlbmQ6ICdwZGYnLFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAnTEVHQUwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ZXh0ZW5kOiAncHJpbnQnfSxcclxuICAgIF0sXHJcbiAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmRhdGFUYWJsZXNfcGFnaW5hdGUgYS5wYWdpbmF0ZV9idXR0b246bm90KC5kaXNhYmxlZCknLCB0aGlzLmFwaSgpLnRhYmxlKCkuY29udGFpbmVyKCkpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAvLyByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZm5EcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCBvU2V0dGluZ3MgKSB7XHJcblxyXG4gICAgICAgICQoJyNsb2FkaW5nQm94JykuaGlkZSgpO1xyXG4gICAgICAgICQoJy50YWJsZS1yZXNwb25zaXZlJykuc2hvdygpO1xyXG4gICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG5cclxuICAgICAgICAkKCcjYWRkT25CdG4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhZGRPbkJ1dHRvbihgJHtwYXRofS9jcmVhdGVgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRhYmxlLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHJvd1RhYmxlID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgICAgICAvL3Jvd1RhYmxlLmFkZENsYXNzKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgICAgbGV0IHJvd1RleHQgPSByb3dUYWJsZS5jaGlsZHJlbigpLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICB9KS5nZXQoKTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gcm93VGFibGUuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSByb3dUZXh0WzBdO1xyXG4gICAgICAgICAgICBsZXQgc3R1ZGVudEZ1bGxOYW1lID0gcm93VGV4dFsxXTtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBg0JjQt9GC0YDQuNCy0LDQvdC1INC90LAg0YPRh9C10L3QuNC6IFxcXCIke3N0dWRlbnRGdWxsTmFtZX1cXFwiIFxcbtC+0YIg0LrQu9Cw0YEgXFxcIiR7Y2xhc3NOYW1lfVxcXCIhISFgO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uKGAke3BhdGh9L2RlbGV0ZS8ke2lkfWAsIHJvd1RhYmxlLCBtZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdlZGl0QnRuJykge1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uKGAke3BhdGh9L2VkaXQvJHtpZH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=