//! moment.js locale configuration

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        && typeof require === 'function' ? factory(require('../moment')) :
    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
    factory(global.moment)
 }(this, (function (moment) { 'use strict';
 
 
     var enAu = moment.defineLocale('en-au', {
         months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
         monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
         weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
         weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
         weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
         longDateFormat : {
             LT : 'h:mm A',
             LTS : 'h:mm:ss A',
             L : 'DD/MM/YYYY',
             LL : 'D MMMM YYYY',
             LLL : 'D MMMM YYYY h:mm A',
             LLLL : 'dddd, D MMMM YYYY h:mm A'
         },
         calendar : {
             sameDay : '[Today at] LT',
             nextDay : '[Tomorrow at] LT',
             nextWeek : 'dddd [at] LT',
             lastDay : '[Yesterday at] LT',
             lastWeek : '[Last] dddd [at] LT',
             sameElse : 'L'
         },
         relativeTime : {
             future : 'in %s',
             past : '%s ago',
             s : 'a Few SEC',
             ss : '%d SEC',
             m : 'a MIN',
             mm : '%d MIN',
             h : '1 HR',
             hh : '%d HR',
             d : 'a D',
             dd : '%d D',
             M : 'a MO',
             MM : '%d MO',
             y : 'a YR',
             yy : '%d YR'
         },
         dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
         ordinal : function (number) {
             var b = number % 10,
                 output = (~~(number % 100 / 10) === 1) ? 'th' :
                 (b === 1) ? 'st' :
                 (b === 2) ? 'nd' :
                 (b === 3) ? 'rd' : 'th';
             return number + output;
         },
         week : {
             dow : 1, // Monday is the first day of the week.
             doy : 4  // The week that contains Jan 4th is the first week of the year.
         }
     });
 
     return enAu;
 
 })));
 
