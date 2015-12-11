var stringfa = {
FixNumber:function(str){
return str.replace(/1/gi, "۱").replace(/2/gi, "۲").replace(/3/gi, "۳").replace(/4/gi, "۴").replace(/5/gi, "۵").replace(/6/gi, "۶").replace(/7/gi, "۷").replace(/8/gi, "۸").replace(/9/gi, "۹").replace(/0/gi, "۰")
},
FixText : function(str){
        return str.replace(/ي/gi,"ی").replace(/ك/gi,"ک").replace(/,/gi,"،").replace(/;/gi,"؛").replace(/%/gi,"٪").replace(/می /gi,"می‌").replace(/،/gi, " ،")
        },
FixAll :function(str){
return str.replace(/1/gi, "۱").replace(/2/gi, "۲").replace(/3/gi, "۳").replace(/4/gi, "۴").replace(/5/gi, "۵").replace(/6/gi, "۶").replace(/7/gi, "۷").replace(/8/gi, "۸").replace(/9/gi, "۹").replace(/0/gi, "۰").replace(/ي/gi,"ی").replace(/ك/gi,"ک").replace(/,/gi,"،").replace(/;/gi,"؛").replace(/%/gi,"٪").replace(/می /gi,"می‌").replace(/،/gi, " ،")
}        
};

