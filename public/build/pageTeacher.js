(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageTeacher"],{

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

/***/ "./assets/js/custom-page/page-teacher.js":
/*!***********************************************!*\
  !*** ./assets/js/custom-page/page-teacher.js ***!
  \***********************************************/
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





var path = '/teacher';
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
        var teacherFullName = rowText[0];
        var teacherCount = rowText[1];
        var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u0430\u043B\u0441\u0435\u043D \u0440\u044A\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B \"".concat(teacherFullName, "\", \u043E\u0431\u0432\u044A\u0440\u0437\u0430\u043D \u0441 ");

        if (teacherCount > 1) {
          message += "".concat(teacherCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430!!!");
        } else {
          message += "".concat(teacherCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442!!!");
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

},[["./assets/js/custom-page/page-teacher.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXRlYWNoZXIuanMiXSwibmFtZXMiOlsidGFibGUiLCIkIiwicm93VGV4dERhbmdlck9uT2ZmIiwiaXNPbiIsInRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRyaW0iLCJzcGxpdCIsImlkIiwiTnVtYmVyIiwibGVuZ3RoIiwidHJUb2tlbiIsImVhY2giLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlbGV0ZUJ1dHRvbiIsInJvd1RhYmxlIiwibWVzc2FnZXMiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGQiLCJlZGl0IiwiYWRkT25CdG4iLCJjc3MiLCJoaWRlIiwic2hvdyIsInNldFRpbWVvdXQiLCJ0aGVuIiwidmFsdWUiLCJjb25maXJtIiwiaHJlZiIsImVkaXRCdXR0b24iLCJhZGRPbkJ1dHRvbiIsInBhaWRPbkJ1dHRvbiIsImJnIiwicGF0aCIsImRvY3VtZW50IiwicmVhZHkiLCJkYXRhVGFibGUiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsImRhdGEiLCJkZWZhdWx0Q29udGVudCIsIm9yZGVyIiwibGFuZ3VhZ2UiLCJkb20iLCJidXR0b25zIiwiZXh0ZW5kIiwib3JpZW50YXRpb24iLCJwYWdlU2l6ZSIsImRyYXdDYWxsYmFjayIsImFwaSIsImNvbnRhaW5lciIsIm9uIiwiZm5EcmF3Q2FsbGJhY2siLCJvU2V0dGluZ3MiLCJwYXJlbnQiLCJyb3dUZXh0IiwiY2hpbGRyZW4iLCJtYXAiLCJ0ZXh0Iiwi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YWNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFibGUgPSAkKCcjZGF0YVRhYmxlJyk7XHJcbmV4cG9ydCB7dGFibGV9OyIsImZ1bmN0aW9uIHJvd1RleHREYW5nZXJPbk9mZihpc09uID0gdHJ1ZSkge1xyXG4gICAgbGV0IHRva2VuID0gKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgbGV0IGlkID0gTnVtYmVyKHRva2VuW3Rva2VuLmxlbmd0aCAtIDFdKTtcclxuICAgIGlmIChpZCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHRyVG9rZW4gPSAkKCcjZGF0YVRhYmxlIHRib2R5IHRyJyk7XHJcblxyXG4gICAgJCh0clRva2VuKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKE51bWJlcigkKHRoaXMpLmF0dHIoJ2lkJykpID09PSBpZCkge1xyXG4gICAgICAgICAgICBpZiAoaXNPbikge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVCdXR0b24ocGF0aG5hbWUsIHJvd1RhYmxlLCBtZXNzYWdlcykge1xyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgYWRkID0gJCgnZGl2ICNhZGQnKTtcclxuICAgICAgICBsZXQgZWRpdCA9ICQoJ2RpdiAjZWRpdCcpO1xyXG4gICAgICAgIGxldCBhZGRPbkJ0biA9ICQoJyNhZGRPbkJ0bicpO1xyXG5cclxuICAgICAgICBpZiAoYWRkLmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgYWRkLmhpZGUoKTtcclxuICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVkaXQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBlZGl0LmhpZGUoKTtcclxuICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgcmVzb2x2ZShbXHJcbiAgICAgICAgICAgICAgICBgJHthZGQuY3NzKCdkaXNwbGF5Jyl9YCxcclxuICAgICAgICAgICAgICAgIGAke3Jvd1RhYmxlLnJlbW92ZUNsYXNzKFwidGV4dC1kYW5nZXJcIil9YFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oYCEhISDQktCd0JjQnNCQ0J3QmNCVICEhIVxcbmAgKyBtZXNzYWdlcykpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdEJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxuICAgIC8vZmV0Y2goYC9zdHVkZW50L2VkaXQvJHtkYXRhLnN0dWRlbnRJZH1gLCB7XHJcbiAgICAvLyAgbWV0aG9kOiAnUE9TVCdcclxuICAgIC8vfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhaWRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIGFkZE9uQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmYsIHBhaWRPbkJ1dHRvbn07IiwibGV0IGJnID0ge1xyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJsZW5ndGhNZW51XCI6IFwi0J/QvtC60LDQt9Cy0LDQvdC1INC90LAgX01FTlVfINC30LDQv9C40YHQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LBcIixcclxuICAgICAgICBcInplcm9SZWNvcmRzXCI6IFwi0J3QuNGJ0L4g0L3QtSDQtSDQvdCw0LzQtdGA0LXQvdC+IC0g0YHRitC20LDQu9GP0LLQsNC8XCIsXHJcbiAgICAgICAgXCJpbmZvXCI6IFwi0J/QvtC60LDQt9Cy0LDQvdC1INC90LAg0YHRgtGA0LDQvdC40YbQsCBfUEFHRV8g0L7RgiBfUEFHRVNfXCIsXHJcbiAgICAgICAgXCJpbmZvRW1wdHlcIjogXCLQndGP0LzQsCDQvdCw0LvQuNGH0L3QuCDQt9Cw0L/QuNGB0LhcIixcclxuICAgICAgICBcImluZm9GaWx0ZXJlZFwiOiBcIijRhNC40LvRgtGA0LjRgNCw0L3QsCDQvtGCIF9NQVhfINC+0LHRidC+INC30LDQv9C40YHQuClcIixcclxuICAgICAgICBcImluZm9Qb3N0Rml4XCI6IFwiXCIsXHJcbiAgICAgICAgXCJ0aG91c2FuZHNcIjogXCIsXCIsXHJcbiAgICAgICAgXCJsb2FkaW5nUmVjb3Jkc1wiOiBcItCX0LDRgNC10LbQtNCwLi4uXCIsXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgXCJzZWFyY2hcIjogXCLQotGK0YDRgdC10L3QtSDQsiDRgtCw0LHQu9C40YbQsNGC0LAg0L/Qvi3QtNC+0LvRgzpcIixcclxuICAgICAgICBcInBhZ2luYXRlXCI6IHtcclxuICAgICAgICAgICAgXCJmaXJzdFwiOiBcItCf0YrRgNCy0LBcIixcclxuICAgICAgICAgICAgXCJsYXN0XCI6IFwi0J/QvtGB0LvQtdC00L3QsFwiLFxyXG4gICAgICAgICAgICBcIm5leHRcIjogXCLQodC70LXQtNCy0LDRidCwXCIsXHJcbiAgICAgICAgICAgIFwicHJldmlvdXNcIjogXCLQn9GA0LXQtNC40YjQvdCwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXJpYVwiOiB7XHJcbiAgICAgICAgICAgIFwic29ydEFzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINCy0YrQt9GF0L7QtNGP0YnQvlwiLFxyXG4gICAgICAgICAgICBcInNvcnREZXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0L3QuNC30YXQvtC00Y/RidC+XCJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwibnVsbFwiOiBcItC90Y/QvNCwINC00LDQvdC90LhcIixcclxuICAgIFwiY2hlY2tCb3hcIjogXCLQn9GA0Lgg0LjQt9Cx0L7RgCDQvdCwINC+0L/RhtC40Y/RgtCwOiBcIixcclxuICAgIFwiZW1wdHlNZXNzYWdlXCI6IFtcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjEuINCSINC/0L7Qu9C1ICfQotGK0YDRgdC10L3QtScg0LzQvtC20LXRiCDQtNCwINGC0YrRgNGB0LjRiCDQv9C+OiBpZCwg0L/QvtGC0YDQtdCx0LjRgtC10LssINC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjywg0LjQvNC10LnQuyDQuNC70Lgg0LzQvtC00YPQuy5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIyLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+IGlkINGC0YDRj9Cx0LLQsCDQtNCwINCy0YrQstC10LTQtdGC0LUgaWQ6INC4INC90L7QvNC10YDQsC4g0J3QsNC/0YDQuNC80LXRgCBpZDoxMjM0LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjMuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPIC0g0L/RgNC10L7QsdGA0LDQt9GD0LLQsCDQu9Cw0YLQuNC90LjRhtCwINCyINC60LjRgNC40LvQuNGG0LAg0Lgg0L7QsdGA0LDRgtC90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNC4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQvNC+0LTRg9C7INGC0YDRj9Cx0LLQsCDQtNCwINCy0YrQstC10LTQtdGC0LUg0LjQvNC10YLQviDQvdCwINC80L7QtNGD0LvQsC4gKNCd0LDQv9GA0LjQvNC10YA6IEExLjEpXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNS4gJ9CY0LfQs9C70LXQtNCw0L3QuCDQv9GA0L7RhtC10L3RgtC4INC+0YIg0LzQvtC00YPQu9CwJyDRgtC4INC00LDQstCw0YIg0YHQv9GA0LDQstC60LAg0LrQsNC60LLQsCDRh9Cw0YHRgiDQvtGCINCy0LjQtNC10LDRgtCwINC60YPRgNGB0LjRgdGC0YrRgiDQtSDQuNC30LPQu9C10LTQsNC7INC90LDQv9GK0LvQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjYuICfQodCw0LzQviDRgNC10LPQuNGB0YLRgNC40YDQsNC9JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDQstGB0LjRh9C60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0LDQvdC4INC/0L7RgtGA0LXQsdC40YLQtdC70LgsINC60L7QuNGC0L4g0YHQsCDQs9C70LXQtNCw0LvQuCDQsdC10LfQv9C70LDRgtC90Lgg0LLQuNC00LXQsC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI3LiAn0KEg0LTQvtGB0YLRitC/INC00L4g0LzQvtC00YPQuycgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0YHQsNC80L4g0LrRg9GA0YHQuNGB0YLQuNGC0LUsINC60L7QuNGC0L4g0LjQvNCw0YIg0LTQsNC00LXQvSDQtNC+0YHRgtGK0L8g0LTQviDQvtC/0YDQtdC00LXQu9C10L0g0LzQvtC00YPQuy5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogYDguICfQotGK0YDRgdC10L3QtSDQsiDRgtCw0LHQu9C40YbQsNGC0LAg0L/Qvi3QtNC+0LvRgzonIC0g0YLRitGA0YHQuCDQv9C+INC00L7Qv9GK0LvQvdC40YLQtdC70LXQvSDQutGA0LjRgtC10YDQuNC5INCyINC40LfQs9C+0YLQstC10L3QsNGC0LAg0LLQtdGH0LUg0YHQv9GA0LDQstC60LAuYH1cclxuICAgIF0sXHJcbn07XHJcbmV4cG9ydCB7Ymd9OyIsImltcG9ydCB7dGFibGV9IGZyb20gJy4vYXBwbHlEYXRhVGFibGUuanMnXHJcbmltcG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmfSBmcm9tICcuL2J1dHRvbi1yb3ctdGFibGUuanMnO1xyXG5pbXBvcnQge2JnfSBmcm9tIFwiLi9sYW5ndWFnZURhdGFUYWJsZS5qc1wiO1xyXG5jb25zdCBwYXRoID0gJy90ZWFjaGVyJztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgdGFibGUuZGF0YVRhYmxlKHtcclxuICAgICAgIC8vcGFnaW5nVHlwZTogJ2Z1bGxfbnVtYmVycycsIC8vIFwic2ltcGxlXCIgb3B0aW9uIGZvciAnUHJldmlvdXMnIGFuZCAnTmV4dCcgYnV0dG9ucyBvbmx5XHJcbiAgICAgICAgY29sdW1uRGVmczogW3tcclxuICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSd0ZXh0LXdhcm5pbmcnPtCg0LXQtNCw0LrRgtC40YDQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IC0xLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29udGVudDogXCI8YnV0dG9uIGlkPSdkZWxldGVCdG4nIGNsYXNzPSd0ZXh0LWRhbmdlcic+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgb3JkZXI6IFtcclxuICAgICAgICAgICAgWzAsICdhc2MnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICBsYW5ndWFnZTogYmcubGFuZ3VhZ2UsXHJcbiAgICAgICAgZG9tOiAnbGZCU3J0aXAnLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge2V4dGVuZDogJ2NvcHknfSxcclxuICAgICAgICAgICAgLy97ZXh0ZW5kOiAnY3N2J30sXHJcbiAgICAgICAgICAgIHtleHRlbmQ6ICdleGNlbCd9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2V4dGVuZDogJ3BkZkh0bWw1JyxcclxuICAgICAgICAgICAgICAgIGV4dGVuZDogJ3BkZicsXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogJ0xFR0FMJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7ZXh0ZW5kOiAncHJpbnQnfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCgnLmRhdGFUYWJsZXNfcGFnaW5hdGUgYS5wYWdpbmF0ZV9idXR0b246bm90KC5kaXNhYmxlZCknLCB0aGlzLmFwaSgpLnRhYmxlKCkuY29udGFpbmVyKCkpXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICBmbkRyYXdDYWxsYmFjazogZnVuY3Rpb24oIG9TZXR0aW5ncyApIHtcclxuICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAkKFwiLnRhYmxlLXJlc3BvbnNpdmVcIikuc2hvdygpO1xyXG4gICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG5cclxuICAgICAgICAgICB0YWJsZS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICBsZXQgcm93VGV4dCA9IHJvd1RhYmxlLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgaWQgPSByb3dUYWJsZS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICBsZXQgdGVhY2hlckZ1bGxOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgbGV0IHRlYWNoZXJDb3VudCA9IHJvd1RleHRbMV07XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGDQmNC30YLRgNC40LLQsNC90LUg0L3QsCDQutCw0LvRgdC10L0g0YDRitC60L7QstC+0LTQuNGC0LXQuyBcXFwiJHt0ZWFjaGVyRnVsbE5hbWV9XFxcIiwg0L7QsdCy0YrRgNC30LDQvSDRgSBgO1xyXG4gICAgICAgICAgICAgICBpZiAodGVhY2hlckNvdW50ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSBgJHt0ZWFjaGVyQ291bnR9INGB0YLRg9C00LXQvdGC0LAhISFgO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSBgJHt0ZWFjaGVyQ291bnR9INGB0YLRg9C00LXQvdGCISEhYDtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24oYCR7cGF0aH0vZGVsZXRlLyR7aWR9YCwgcm93VGFibGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdlZGl0QnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbihgJHtwYXRofS9lZGl0LyR7aWR9YCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgJCgnI2FkZE9uQnRuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgYWRkT25CdXR0b24oYCR7cGF0aH0vY3JlYXRlYCk7XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==