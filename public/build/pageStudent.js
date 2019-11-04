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
    order: [[2, 'asc'], [0, 'asc'], [1, 'des']],
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
      $('.table-responsive').show();
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
          var className = rowText[2];
          var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0443\u0447\u0435\u043D\u0438\u043A \"".concat(studentFullName, "\" \n\u043E\u0442 \u043A\u043B\u0430\u0441 \"").concat(className, "\"!!!");
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
        } else if (this.id === 'editBtn') {
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["editButton"])("".concat(path, "/edit/").concat(id));
        }
      });
      $('#addOnBtn button').on('click', function () {
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["addOnButton"])("".concat(path, "/create"));
      });
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

},[["./assets/js/custom-page/page-student.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXN0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyJdLCJuYW1lcyI6WyJ0YWJsZSIsIiQiLCJyb3dUZXh0RGFuZ2VyT25PZmYiLCJpc09uIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidHJpbSIsInNwbGl0IiwiaWQiLCJOdW1iZXIiLCJsZW5ndGgiLCJ0clRva2VuIiwiZWFjaCIsImF0dHIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGVsZXRlQnV0dG9uIiwicm93VGFibGUiLCJtZXNzYWdlcyIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZCIsImVkaXQiLCJhZGRPbkJ0biIsImNzcyIsImhpZGUiLCJzaG93Iiwic2V0VGltZW91dCIsInRoZW4iLCJ2YWx1ZSIsImNvbmZpcm0iLCJocmVmIiwiZWRpdEJ1dHRvbiIsImFkZE9uQnV0dG9uIiwicGFpZE9uQnV0dG9uIiwiYmciLCJwYXRoIiwiZG9jdW1lbnQiLCJyZWFkeSIsImRhdGFUYWJsZSIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwiZGF0YSIsImRlZmF1bHRDb250ZW50Iiwib3JkZXIiLCJsYW5ndWFnZSIsImRvbSIsImJ1dHRvbnMiLCJleHRlbmQiLCJvcmllbnRhdGlvbiIsInBhZ2VTaXplIiwiZHJhd0NhbGxiYWNrIiwiYXBpIiwiY29udGFpbmVyIiwib24iLCJmbkRyYXdDYWxsYmFjayIsIm9TZXR0aW5ncyIsInBhcmVudCIsInJvd1RleHQiLCJjaGlsZHJlbiIsIm1hcCIsInRleHQiLCJnZXQiLCJzdHVkZW50RnVsbE5hbWUiLCJjbGFzc05hbWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLElBQUlBLEtBQUssR0FBR0MsQ0FBQyxDQUFDLFlBQUQsQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsU0FBU0Msa0JBQVQsR0FBeUM7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLElBQU07QUFDckMsTUFBSUMsS0FBSyxHQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQ1BDLElBRE8sR0FFUEMsS0FGTyxDQUVELEdBRkMsQ0FBWjtBQUlBLE1BQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDUCxLQUFLLENBQUNBLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQWhCLENBQU4sQ0FBZjs7QUFDQSxNQUFJRixFQUFFLElBQUksQ0FBVixFQUFhO0FBQ1QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSUcsT0FBTyxHQUFHWixDQUFDLENBQUMscUJBQUQsQ0FBZjtBQUVBQSxHQUFDLENBQUNZLE9BQUQsQ0FBRCxDQUFXQyxJQUFYLENBQWdCLFlBQVU7QUFDdEIsUUFBSUgsTUFBTSxDQUFDVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYSxJQUFiLENBQUQsQ0FBTixLQUErQkwsRUFBbkMsRUFBdUM7QUFDbkMsVUFBSVAsSUFBSixFQUFVO0FBQ05GLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsUUFBUixDQUFpQixhQUFqQjtBQUNILE9BRkQsTUFFTztBQUNIZixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixXQUFSLENBQW9CLGFBQXBCO0FBQ0g7QUFDSjtBQUNKLEdBUkQ7QUFTSDs7QUFDRCxTQUFTQyxZQUFULENBQXNCWCxRQUF0QixFQUFnQ1ksUUFBaEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBQ2hELE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDaER0QixzQkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBRUEsUUFBSXVCLEdBQUcsR0FBR3hCLENBQUMsQ0FBQyxVQUFELENBQVg7QUFDQSxRQUFJeUIsSUFBSSxHQUFHekIsQ0FBQyxDQUFDLFdBQUQsQ0FBWjtBQUNBLFFBQUkwQixRQUFRLEdBQUcxQixDQUFDLENBQUMsV0FBRCxDQUFoQjs7QUFFQSxRQUFJd0IsR0FBRyxDQUFDRyxHQUFKLENBQVEsU0FBUixNQUF1QixNQUEzQixFQUFtQztBQUMvQkgsU0FBRyxDQUFDSSxJQUFKO0FBQ0FGLGNBQVEsQ0FBQ0csSUFBVDtBQUNIOztBQUVELFFBQUlKLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFNBQVQsTUFBd0IsTUFBNUIsRUFBb0M7QUFDaENGLFVBQUksQ0FBQ0csSUFBTDtBQUNBRixjQUFRLENBQUNHLElBQVQ7QUFDSDs7QUFFREMsY0FBVSxDQUFDLFlBQVc7QUFBRVIsYUFBTyxDQUFDLFdBQ3JCRSxHQUFHLENBQUNHLEdBQUosQ0FBUSxTQUFSLENBRHFCLGFBRXJCVCxRQUFRLENBQUNGLFdBQVQsQ0FBcUIsYUFBckIsQ0FGcUIsRUFBRCxDQUFQO0FBSXZCLEtBSlMsRUFJUCxHQUpPLENBQVY7QUFLSCxHQXRCYSxDQUFkO0FBd0JBSSxTQUFPLENBQUNXLElBQVIsQ0FBYSxVQUFTQyxLQUFULEVBQWdCO0FBQ3pCLFFBQUlDLE9BQU8sQ0FBQywrREFBdUJkLFFBQXhCLENBQVgsRUFBOEM7QUFDMUNmLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQjZCLElBQWhCLEdBQXVCNUIsUUFBdkI7QUFDSDs7QUFDRCxXQUFPLEtBQVA7QUFDSCxHQUxEO0FBTUg7O0FBRUQsU0FBUzZCLFVBQVQsQ0FBb0I3QixRQUFwQixFQUE4QjtBQUMxQkYsUUFBTSxDQUFDQyxRQUFQLENBQWdCNkIsSUFBaEIsR0FBdUI1QixRQUF2QixDQUQwQixDQUUxQjtBQUNBO0FBQ0E7QUFDSDs7QUFFRCxTQUFTOEIsV0FBVCxDQUFxQjlCLFFBQXJCLEVBQStCO0FBQzNCRixRQUFNLENBQUNDLFFBQVAsQ0FBZ0I2QixJQUFoQixHQUF1QjVCLFFBQXZCO0FBQ0g7O0FBRUQsU0FBUytCLFlBQVQsQ0FBc0IvQixRQUF0QixFQUFnQztBQUM1QkYsUUFBTSxDQUFDQyxRQUFQLENBQWdCNkIsSUFBaEIsR0FBdUI1QixRQUF2QjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUQ7QUFBQTtBQUFBLElBQUlnQyxFQUFFLEdBQUc7QUFDTCxjQUFZO0FBQ1Isa0JBQWMsd0NBRE47QUFFUixtQkFBZSxnQ0FGUDtBQUdSLFlBQVEseUNBSEE7QUFJUixpQkFBYSxxQkFKTDtBQUtSLG9CQUFnQixtQ0FMUjtBQU1SLG1CQUFlLEVBTlA7QUFPUixpQkFBYSxHQVBMO0FBUVIsc0JBQWtCLFlBUlY7QUFTUixrQkFBYyxjQVROO0FBVVIsY0FBVSw4QkFWRjtBQVdSLGdCQUFZO0FBQ1IsZUFBUyxPQUREO0FBRVIsY0FBUSxVQUZBO0FBR1IsY0FBUSxVQUhBO0FBSVIsa0JBQVk7QUFKSixLQVhKO0FBaUJSLFlBQVE7QUFDSix1QkFBaUIsaUNBRGI7QUFFSix3QkFBa0I7QUFGZDtBQWpCQSxHQURQO0FBdUJMLFVBQVEsWUF2Qkg7QUF3QkwsY0FBWSx3QkF4QlA7QUF5Qkwsa0JBQWdCLENBQ1o7QUFBQyxlQUFXO0FBQVosR0FEWSxFQUVaO0FBQUMsZUFBVztBQUFaLEdBRlksRUFHWjtBQUFDLGVBQVc7QUFBWixHQUhZLEVBSVo7QUFBQyxlQUFXO0FBQVosR0FKWSxFQUtaO0FBQUMsZUFBVztBQUFaLEdBTFksRUFNWjtBQUFDLGVBQVc7QUFBWixHQU5ZLEVBT1o7QUFBQyxlQUFXO0FBQVosR0FQWSxFQVFaO0FBQUM7QUFBRCxHQVJZO0FBekJYLENBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFVBQWI7QUFFQXZDLENBQUMsQ0FBQ3dDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIxQywwREFBSyxDQUFDMkMsU0FBTixDQUFnQjtBQUNaO0FBQ0FDLGNBQVUsRUFBRSxDQUFDO0FBQ1RDLGFBQU8sRUFBRSxDQUFDLENBREQ7QUFFVEMsVUFBSSxFQUFFLElBRkc7QUFHVEMsb0JBQWMsRUFBRTtBQUhQLEtBQUQsRUFJVDtBQUNDRixhQUFPLEVBQUUsQ0FBQyxDQURYO0FBRUNDLFVBQUksRUFBRSxJQUZQO0FBR0NDLG9CQUFjLEVBQUU7QUFIakIsS0FKUyxDQUZBO0FBV1pDLFNBQUssRUFBRSxDQUNILENBQUMsQ0FBRCxFQUFJLEtBQUosQ0FERyxFQUNTLENBQUMsQ0FBRCxFQUFJLEtBQUosQ0FEVCxFQUNxQixDQUFDLENBQUQsRUFBSSxLQUFKLENBRHJCLENBWEs7QUFjWkMsWUFBUSxFQUFFVix3REFBRSxDQUFDVSxRQWREO0FBZVpDLE9BQUcsRUFBRSxVQWZPO0FBZ0JaQyxXQUFPLEVBQUUsQ0FDTDtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQURLLEVBRUw7QUFDQTtBQUFDQSxZQUFNLEVBQUU7QUFBVCxLQUhLLEVBSUw7QUFDSTtBQUNBQSxZQUFNLEVBQUUsS0FGWjtBQUdJQyxpQkFBVyxFQUFFLFdBSGpCO0FBSUlDLGNBQVEsRUFBRTtBQUpkLEtBSkssRUFVTDtBQUFDRixZQUFNLEVBQUU7QUFBVCxLQVZLLENBaEJHO0FBNEJaRyxnQkFBWSxFQUFFLHdCQUFVO0FBQ3BCdEQsT0FBQyxDQUFDLHVEQUFELEVBQTBELEtBQUt1RCxHQUFMLEdBQVd4RCxLQUFYLEdBQW1CeUQsU0FBbkIsRUFBMUQsQ0FBRCxDQUNLQyxFQURMLENBQ1EsT0FEUixFQUNpQixZQUFVO0FBQ25CeEQsdUZBQWtCO0FBQ3JCLE9BSEw7QUFJSCxLQWpDVztBQWtDWnlELGtCQUFjLEVBQUUsd0JBQVVDLFNBQVYsRUFBc0I7QUFDbEMzRCxPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCNEIsSUFBakI7QUFDQTVCLE9BQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCNkIsSUFBdkI7QUFDQTVCLHFGQUFrQjtBQUVsQkYsOERBQUssQ0FBQzBELEVBQU4sQ0FBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLFlBQVk7QUFDcEMsWUFBSXZDLFFBQVEsR0FBR2xCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRELE1BQVIsR0FBaUJBLE1BQWpCLEVBQWY7QUFDQTFDLGdCQUFRLENBQUNILFFBQVQsQ0FBa0IsYUFBbEI7QUFDQSxZQUFJOEMsT0FBTyxHQUFHM0MsUUFBUSxDQUFDNEMsUUFBVCxHQUFvQkMsR0FBcEIsQ0FBd0IsWUFBVTtBQUM1QyxpQkFBTy9ELENBQUMsQ0FBQ08sSUFBRixDQUFPUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRSxJQUFSLEVBQVAsQ0FBUDtBQUNILFNBRmEsRUFFWEMsR0FGVyxFQUFkO0FBSUEsWUFBSXhELEVBQUUsR0FBR1MsUUFBUSxDQUFDSixJQUFULENBQWMsSUFBZCxDQUFUOztBQUVBLFlBQUksS0FBS0wsRUFBTCxLQUFZLFdBQWhCLEVBQTZCO0FBQ3pCLGNBQUl5RCxlQUFlLEdBQUdMLE9BQU8sQ0FBQyxDQUFELENBQTdCO0FBQ0EsY0FBSU0sU0FBUyxHQUFHTixPQUFPLENBQUMsQ0FBRCxDQUF2QjtBQUNBLGNBQUlPLE9BQU8sd0hBQTRCRixlQUE1QiwwREFBNkRDLFNBQTdELFVBQVg7QUFFQWxELG1GQUFZLFdBQUlzQixJQUFKLHFCQUFtQjlCLEVBQW5CLEdBQXlCUyxRQUF6QixFQUFtQ2tELE9BQW5DLENBQVo7QUFDSCxTQU5ELE1BTU8sSUFBSSxLQUFLM0QsRUFBTCxLQUFZLFNBQWhCLEVBQTJCO0FBQzlCMEIsaUZBQVUsV0FBSUksSUFBSixtQkFBaUI5QixFQUFqQixFQUFWO0FBQ0g7QUFDSixPQWxCRDtBQW9CQVQsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J5RCxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFZO0FBQzFDckIsZ0ZBQVcsV0FBSUcsSUFBSixhQUFYO0FBQ0gsT0FGRDtBQUlIO0FBL0RXLEdBQWhCO0FBaUVILENBbEVELEU7Ozs7Ozs7Ozs7Ozs7QUNMYTtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNyRCwyQkFBMkIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDeEUsK0JBQStCLG1CQUFPLENBQUMsK0dBQXlDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDM0QseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFLG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQztBQUMxRixzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsaUJBQWlCLG1CQUFPLENBQUMsK0VBQXlCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRywrQ0FBK0M7QUFDbEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InBhZ2VTdHVkZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhYmxlID0gJCgnI2RhdGFUYWJsZScpO1xyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgYCR7YWRkLmNzcygnZGlzcGxheScpfWAsXHJcbiAgICAgICAgICAgICAgICBgJHtyb3dUYWJsZS5yZW1vdmVDbGFzcyhcInRleHQtZGFuZ2VyXCIpfWBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmIChjb25maXJtKGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5leHBvcnQge2JnfTsiLCJpbXBvcnQge3RhYmxlfSBmcm9tICcuL2FwcGx5RGF0YVRhYmxlLmpzJ1xyXG5pbXBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgYWRkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZn0gZnJvbSAnLi9idXR0b24tcm93LXRhYmxlLmpzJztcclxuaW1wb3J0IHtiZ30gZnJvbSAnLi9sYW5ndWFnZURhdGFUYWJsZS5qcyc7XHJcbmNvbnN0IHBhdGggPSAnL3N0dWRlbnQnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuZGF0YVRhYmxlKHtcclxuICAgICAgICAvL3BhZ2luZ1R5cGU6ICdmdWxsX251bWJlcnMnLCAvLyBcInNpbXBsZVwiIG9wdGlvbiBmb3IgJ1ByZXZpb3VzJyBhbmQgJ05leHQnIGJ1dHRvbnMgb25seVxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IC0yLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29udGVudDogXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0ndGV4dC13YXJuaW5nJz7QoNC10LTQsNC60YLQuNGA0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAtMSxcclxuICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0ndGV4dC1kYW5nZXInPtCY0LfRgtGA0LjQstCw0L3QtSE8L2J1dHRvbj5cIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIG9yZGVyOiBbXHJcbiAgICAgICAgICAgIFsyLCAnYXNjJ10sIFswLCAnYXNjJ10sIFsxLCAnZGVzJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhbmd1YWdlOiBiZy5sYW5ndWFnZSxcclxuICAgICAgICBkb206ICdsZkJTcnRpcCcsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7ZXh0ZW5kOiAnY29weSd9LFxyXG4gICAgICAgICAgICAvL3tleHRlbmQ6ICdjc3YnfSxcclxuICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsJ30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vZXh0ZW5kOiAncGRmSHRtbDUnLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kOiAncGRmJyxcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAnTEVHQUwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtleHRlbmQ6ICdwcmludCd9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcuZGF0YVRhYmxlc19wYWdpbmF0ZSBhLnBhZ2luYXRlX2J1dHRvbjpub3QoLmRpc2FibGVkKScsIHRoaXMuYXBpKCkudGFibGUoKS5jb250YWluZXIoKSlcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbkRyYXdDYWxsYmFjazogZnVuY3Rpb24oIG9TZXR0aW5ncyApIHtcclxuICAgICAgICAgICAgJCgnI2xvYWRpbmdCb3gnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50YWJsZS1yZXNwb25zaXZlJykuc2hvdygpO1xyXG4gICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuXHJcbiAgICAgICAgICAgIHRhYmxlLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgcm93VGFibGUuYWRkQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dUZXh0ID0gcm93VGFibGUuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIH0pLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvd1RhYmxlLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0dWRlbnRGdWxsTmFtZSA9IHJvd1RleHRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHJvd1RleHRbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBg0JjQt9GC0YDQuNCy0LDQvdC1INC90LAg0YPRh9C10L3QuNC6IFxcXCIke3N0dWRlbnRGdWxsTmFtZX1cXFwiIFxcbtC+0YIg0LrQu9Cw0YEgXFxcIiR7Y2xhc3NOYW1lfVxcXCIhISFgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24oYCR7cGF0aH0vZGVsZXRlLyR7aWR9YCwgcm93VGFibGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnZWRpdEJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uKGAke3BhdGh9L2VkaXQvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjYWRkT25CdG4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWRkT25CdXR0b24oYCR7cGF0aH0vY3JlYXRlYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=