(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageClassTable"],{

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

/***/ "./assets/js/custom-page/page-class_table.js":
/*!***************************************************!*\
  !*** ./assets/js/custom-page/page-class_table.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _applyDataTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyDataTable.js */ "./assets/js/custom-page/applyDataTable.js");
/* harmony import */ var _button_row_table_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-row-table.js */ "./assets/js/custom-page/button-row-table.js");
/* harmony import */ var _languageDataTable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languageDataTable.js */ "./assets/js/custom-page/languageDataTable.js");





var path = '/class';
$(document).ready(function () {
  _applyDataTable_js__WEBPACK_IMPORTED_MODULE_2__["table"].dataTable({
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
    order: [[0, 'asc']],
    language: _languageDataTable_js__WEBPACK_IMPORTED_MODULE_4__["bg"].language,
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
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["rowTextDangerOnOff"])();
      });
    },
    fnDrawCallback: function fnDrawCallback(oSettings) {
      $('#loadingBox').hide();
      $(".table-responsive").show();
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["rowTextDangerOnOff"])();
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_2__["table"].on('click', 'button', function () {
        var rowTable = $(this).parent().parent();
        rowTable.addClass("text-danger");
        var rowText = rowTable.children().map(function () {
          return $.trim($(this).text());
        }).get();
        var id = rowTable.attr('id');
        var className = rowText[0];
        var studentCount = rowText[1];
        var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u041A\u041B\u0410\u0421 \"".concat(className, "\", \u043E\u0431\u0432\u044A\u0440\u0437\u0430\u043D \u0441");

        if (studentCount > 1) {
          message += " ".concat(studentCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430!!!");
        } else {
          message += " ".concat(studentCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442!!!");
        }

        if (this.id === 'deleteBtn') {
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
        } else if (this.id === 'editBtn') {
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["editButton"])("".concat(path, "/edit/").concat(id));
        }
      });
      $('#addOnBtn button').on('click', function () {
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["addOnButton"])("".concat(path, "/create"));
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/custom-page/page-class_table.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLWNsYXNzX3RhYmxlLmpzIl0sIm5hbWVzIjpbInRhYmxlIiwiJCIsInJvd1RleHREYW5nZXJPbk9mZiIsImlzT24iLCJ0b2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0cmltIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImxlbmd0aCIsInRyVG9rZW4iLCJlYWNoIiwiYXR0ciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkZWxldGVCdXR0b24iLCJyb3dUYWJsZSIsIm1lc3NhZ2VzIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWRkIiwiZWRpdCIsImFkZE9uQnRuIiwiY3NzIiwiaGlkZSIsInNob3ciLCJzZXRUaW1lb3V0IiwidGhlbiIsInZhbHVlIiwiY29uZmlybSIsImhyZWYiLCJlZGl0QnV0dG9uIiwiYWRkT25CdXR0b24iLCJwYWlkT25CdXR0b24iLCJiZyIsInBhdGgiLCJkb2N1bWVudCIsInJlYWR5IiwiZGF0YVRhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJkYXRhIiwiZGVmYXVsdENvbnRlbnQiLCJvcmRlciIsImxhbmd1YWdlIiwiZG9tIiwiYnV0dG9ucyIsImV4dGVuZCIsIm9yaWVudGF0aW9uIiwicGFnZVNpemUiLCJkcmF3Q2FsbGJhY2siLCJhcGkiLCJjb250YWluZXIiLCJvbiIsImZuRHJhd0NhbGxiYWNrIiwib1NldHRpbmdzIiwicGFyZW50Iiwicm93VGV4dCIsImNoaWxkcmVuIiwibWFwIiwidGV4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c1RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhYmxlID0gJCgnI2RhdGFUYWJsZScpO1xyXG5cclxuZXhwb3J0IHt0YWJsZX07IiwiZnVuY3Rpb24gcm93VGV4dERhbmdlck9uT2ZmKGlzT24gPSB0cnVlKSB7XHJcbiAgICBsZXQgdG9rZW4gPSAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAuc3BsaXQoJy8nKTtcclxuXHJcbiAgICBsZXQgaWQgPSBOdW1iZXIodG9rZW5bdG9rZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgaWYgKGlkIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgdHJUb2tlbiA9ICQoJyNkYXRhVGFibGUgdGJvZHkgdHInKTtcclxuXHJcbiAgICAkKHRyVG9rZW4pLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoTnVtYmVyKCQodGhpcykuYXR0cignaWQnKSkgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihwYXRobmFtZSwgcm93VGFibGUsIG1lc3NhZ2VzKSB7XHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHJvd1RleHREYW5nZXJPbk9mZihmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCBhZGQgPSAkKCdkaXYgI2FkZCcpO1xyXG4gICAgICAgIGxldCBlZGl0ID0gJCgnZGl2ICNlZGl0Jyk7XHJcbiAgICAgICAgbGV0IGFkZE9uQnRuID0gJCgnI2FkZE9uQnRuJyk7XHJcblxyXG4gICAgICAgIGlmIChhZGQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBhZGQuaGlkZSgpO1xyXG4gICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWRpdC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGVkaXQuaGlkZSgpO1xyXG4gICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyByZXNvbHZlKFtcclxuICAgICAgICAgICAgICAgIGAke2FkZC5jc3MoJ2Rpc3BsYXknKX1gLFxyXG4gICAgICAgICAgICAgICAgYCR7cm93VGFibGUucmVtb3ZlQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKX1gXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBpZiAoY29uZmlybShgISEhINCS0J3QmNCc0JDQndCY0JUgISEhXFxuYCArIG1lc3NhZ2VzKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0QnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgLy9mZXRjaChgL3N0dWRlbnQvZWRpdC8ke2RhdGEuc3R1ZGVudElkfWAsIHtcclxuICAgIC8vICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgLy99KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFpZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5leHBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgYWRkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZiwgcGFpZE9uQnV0dG9ufTsiLCJsZXQgYmcgPSB7XHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcImxlbmd0aE1lbnVcIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCBfTUVOVV8g0LfQsNC/0LjRgdC4INC90LAg0YHRgtGA0LDQvdC40YbQsFwiLFxyXG4gICAgICAgIFwiemVyb1JlY29yZHNcIjogXCLQndC40YnQviDQvdC1INC1INC90LDQvNC10YDQtdC90L4gLSDRgdGK0LbQsNC70Y/QstCw0LxcIixcclxuICAgICAgICBcImluZm9cIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCDRgdGC0YDQsNC90LjRhtCwIF9QQUdFXyDQvtGCIF9QQUdFU19cIixcclxuICAgICAgICBcImluZm9FbXB0eVwiOiBcItCd0Y/QvNCwINC90LDQu9C40YfQvdC4INC30LDQv9C40YHQuFwiLFxyXG4gICAgICAgIFwiaW5mb0ZpbHRlcmVkXCI6IFwiKNGE0LjQu9GC0YDQuNGA0LDQvdCwINC+0YIgX01BWF8g0L7QsdGJ0L4g0LfQsNC/0LjRgdC4KVwiLFxyXG4gICAgICAgIFwiaW5mb1Bvc3RGaXhcIjogXCJcIixcclxuICAgICAgICBcInRob3VzYW5kc1wiOiBcIixcIixcclxuICAgICAgICBcImxvYWRpbmdSZWNvcmRzXCI6IFwi0JfQsNGA0LXQttC00LAuLi5cIixcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICBcInNlYXJjaFwiOiBcItCi0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOlwiLFxyXG4gICAgICAgIFwicGFnaW5hdGVcIjoge1xyXG4gICAgICAgICAgICBcImZpcnN0XCI6IFwi0J/RitGA0LLQsFwiLFxyXG4gICAgICAgICAgICBcImxhc3RcIjogXCLQn9C+0YHQu9C10LTQvdCwXCIsXHJcbiAgICAgICAgICAgIFwibmV4dFwiOiBcItCh0LvQtdC00LLQsNGJ0LBcIixcclxuICAgICAgICAgICAgXCJwcmV2aW91c1wiOiBcItCf0YDQtdC00LjRiNC90LBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhcmlhXCI6IHtcclxuICAgICAgICAgICAgXCJzb3J0QXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0LLRitC30YXQvtC00Y/RidC+XCIsXHJcbiAgICAgICAgICAgIFwic29ydERlc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQvdC40LfRhdC+0LTRj9GJ0L5cIlxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCJudWxsXCI6IFwi0L3Rj9C80LAg0LTQsNC90L3QuFwiLFxyXG4gICAgXCJjaGVja0JveFwiOiBcItCf0YDQuCDQuNC30LHQvtGAINC90LAg0L7Qv9GG0LjRj9GC0LA6IFwiLFxyXG4gICAgXCJlbXB0eU1lc3NhZ2VcIjogW1xyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMS4g0JIg0L/QvtC70LUgJ9Ci0YrRgNGB0LXQvdC1JyDQvNC+0LbQtdGIINC00LAg0YLRitGA0YHQuNGIINC/0L46IGlkLCDQv9C+0YLRgNC10LHQuNGC0LXQuywg0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPLCDQuNC80LXQudC7INC40LvQuCDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjIuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4gaWQg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSBpZDog0Lgg0L3QvtC80LXRgNCwLiDQndCw0L/RgNC40LzQtdGAIGlkOjEyMzQuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMy4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8gLSDQv9GA0LXQvtCx0YDQsNC30YPQstCwINC70LDRgtC40L3QuNGG0LAg0LIg0LrQuNGA0LjQu9C40YbQsCDQuCDQvtCx0YDQsNGC0L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI0LiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC80L7QtNGD0Lsg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSDQuNC80LXRgtC+INC90LAg0LzQvtC00YPQu9CwLiAo0J3QsNC/0YDQuNC80LXRgDogQTEuMSlcIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI1LiAn0JjQt9Cz0LvQtdC00LDQvdC4INC/0YDQvtGG0LXQvdGC0Lgg0L7RgiDQvNC+0LTRg9C70LAnINGC0Lgg0LTQsNCy0LDRgiDRgdC/0YDQsNCy0LrQsCDQutCw0LrQstCwINGH0LDRgdGCINC+0YIg0LLQuNC00LXQsNGC0LAg0LrRg9GA0YHQuNGB0YLRitGCINC1INC40LfQs9C70LXQtNCw0Lsg0L3QsNC/0YrQu9C90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNi4gJ9Ch0LDQvNC+INGA0LXQs9C40YHRgtGA0LjRgNCw0L0nIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINCy0YHQuNGH0LrQuCDRgNC10LPQuNGB0YLRgNC40YDQsNC90Lgg0L/QvtGC0YDQtdCx0LjRgtC10LvQuCwg0LrQvtC40YLQviDRgdCwINCz0LvQtdC00LDQu9C4INCx0LXQt9C/0LvQsNGC0L3QuCDQstC40LTQtdCwLlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjcuICfQoSDQtNC+0YHRgtGK0L8g0LTQviDQvNC+0LTRg9C7JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDRgdCw0LzQviDQutGD0YDRgdC40YHRgtC40YLQtSwg0LrQvtC40YLQviDQuNC80LDRgiDQtNCw0LTQtdC9INC00L7RgdGC0YrQvyDQtNC+INC+0L/RgNC10LTQtdC70LXQvSDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBgOC4gJ9Ci0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOicgLSDRgtGK0YDRgdC4INC/0L4g0LTQvtC/0YrQu9C90LjRgtC10LvQtdC9INC60YDQuNGC0LXRgNC40Lkg0LIg0LjQt9Cz0L7RgtCy0LXQvdCw0YLQsCDQstC10YfQtSDRgdC/0YDQsNCy0LrQsC5gfVxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7Ymd9OyIsImltcG9ydCB7dGFibGV9IGZyb20gJy4vYXBwbHlEYXRhVGFibGUuanMnXHJcbmltcG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmfSBmcm9tICcuL2J1dHRvbi1yb3ctdGFibGUuanMnO1xyXG5pbXBvcnQge2JnfSBmcm9tICcuL2xhbmd1YWdlRGF0YVRhYmxlLmpzJztcclxuY29uc3QgcGF0aCA9ICcvY2xhc3MnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuZGF0YVRhYmxlKHtcclxuICAgICAgICAvL3BhZ2luZ1R5cGU6ICdmdWxsX251bWJlcnMnLCAvLyBcInNpbXBsZVwiIG9wdGlvbiBmb3IgJ1ByZXZpb3VzJyBhbmQgJ05leHQnIGJ1dHRvbnMgb25seVxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IC0yLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29udGVudDogXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0ndGV4dC13YXJuaW5nJz7QoNC10LTQsNC60YLQuNGA0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAtMSxcclxuICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0ndGV4dC1kYW5nZXInPtCY0LfRgtGA0LjQstCw0L3QtSE8L2J1dHRvbj5cIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIG9yZGVyOiBbXHJcbiAgICAgICAgICAgIFswLCAnYXNjJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhbmd1YWdlOiBiZy5sYW5ndWFnZSxcclxuICAgICAgICBkb206ICdsZkJTcnRpcCcsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7ZXh0ZW5kOiAnY29weSd9LFxyXG4gICAgICAgICAgICAvL3tleHRlbmQ6ICdjc3YnfSxcclxuICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsJ30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vZXh0ZW5kOiAncGRmSHRtbDUnLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kOiAncGRmJyxcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAnTEVHQUwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtleHRlbmQ6ICdwcmludCd9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcuZGF0YVRhYmxlc19wYWdpbmF0ZSBhLnBhZ2luYXRlX2J1dHRvbjpub3QoLmRpc2FibGVkKScsIHRoaXMuYXBpKCkudGFibGUoKS5jb250YWluZXIoKSlcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbkRyYXdDYWxsYmFjazogZnVuY3Rpb24oIG9TZXR0aW5ncyApIHtcclxuICAgICAgICAgICAgJCgnI2xvYWRpbmdCb3gnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG5cclxuICAgICAgICAgICAgdGFibGUub24oJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3dUYWJsZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvd1RleHQgPSByb3dUYWJsZS5jaGlsZHJlbigpLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkLnRyaW0oJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm93VGFibGUuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSByb3dUZXh0WzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0dWRlbnRDb3VudCA9IHJvd1RleHRbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBg0JjQt9GC0YDQuNCy0LDQvdC1INC90LAg0JrQm9CQ0KEgXFxcIiR7Y2xhc3NOYW1lfVxcXCIsINC+0LHQstGK0YDQt9Cw0L0g0YFgO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGAgJHtzdHVkZW50Q291bnR9INGB0YLRg9C00LXQvdGC0LAhISFgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGAgJHtzdHVkZW50Q291bnR9INGB0YLRg9C00LXQvdGCISEhYDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ2RlbGV0ZUJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24oYCR7cGF0aH0vZGVsZXRlLyR7aWR9YCwgcm93VGFibGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnZWRpdEJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uKGAke3BhdGh9L2VkaXQvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjYWRkT25CdG4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWRkT25CdXR0b24oYCR7cGF0aH0vY3JlYXRlYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==