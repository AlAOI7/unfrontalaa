$(document).ready(function()
{  // هاذه خاص بوقت تنقل الصور في داخل الكاروسال 
   //غاص بشريط التمرير التسكرول الذي يضهر على الشاشه يجعله يظهر عند لمسه بوضوع ويتحرك بنعومه 
    $("html").niceScrill();
    
    
    $(".carousel").carousel(
        {
            //  وقت التنقل للصور 1000 معناها ثانيه واحده   5000 هخمس ثواني
interval:1000

        });
        
        //show color option div when click on gear 
        $(".fa-check").click(function(){
        $(".color-option").fadeToggle();
        
        });
        // cheang color them cleack 
        
      var colorLi  = $(".color-option ul li");
        
        //يقوم باعطاى المربعات في صندوق تغير لون الموقع  بلون معين  لتغير الموقع حسب الون تلمحدد
    colorLi    
        .eq(0).css("background"," #103").end()
         .eq(1).css("background"," #e70").end()
         .eq(2).css("background"," #080").end()
         .eq(3).css("background"," #0fc").end()
         .eq(4).css("background"," #f0f");



colorLi.click(function()
{
 //ويقوم هاذه باستبدال الينك الذي يحتوي على ثيم ويبدلها بلداتا فاليو الذي سوف نختارها اي الون المختار ويبدل مكان الون الاول بلون الذي تخترناه
 
 //لعمليت التحويل  يبحث عن الملف الرئيسي اذا شافه يغيره واعكيه حق الون الثاني المسار لتغير 
 $("link[href*='theme']").attr("href",$( this).attr("data-value"));
 
 //لعرض مكان الالوان وتفاصيلها في الكنسول
 //console.log($("link[href*='theme']"))
 
 
 
 
    //console.log( $( this).attr("data-value"))
});

});

// section loading overlay
// في  الصفحه خاصتي نفذلي ما داخل الداله 
$(window).load(function() {
// بعد كذا ثانيه قم باخفا الوادينج
$("body").css("overflow","auto");
//سوف يخفي الاتش وان  بعد 2000 سكند
$(".loading-overlay  .sk-cube-grid").fadeOut(1500,function(){
$(this).parent().fadeOut(1000);
});

});