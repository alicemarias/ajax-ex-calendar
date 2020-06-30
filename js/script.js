$(document).ready(function()
{
  //stampo date di Gennaio
  var baseDate = moment({
    day: 1,
    month: 0,
    year: 2018
  });
  // stampo giorni del mese
  //  numero giorni di Gennaio
  var numberOfDays = baseDate.daysInMonth();

  //stampo la data con handlebars per ogni giorno
  //handlebars
  var source = $('#day-template').html();
  var template = Handlebars.compile(source);
  for (var i = 1; i < numberOfDays; i++) {

    var oggi = moment({
      day: i,
      month: baseDate.month(),
      year: baseDate.year()
    });

    //template handlebars
    var context = {
      date: oggi.format('D MMMM'),
    };
    var html = template(context);
     //appendo giorno alla lista giorni di gennaio
    $('#lista-giorni').append(html);
  }

    // aggiungo festivita
    function stampoFestivita(baseDate) {
      $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/holidays',
        method: 'GET',
        data: {
          year: baseDate.year(),
          month: baseDate.month(),
        },
        success: function(dataResponse){
          var holidays = dataResponse.response;

          for(var i = 0; i < holidays.length; i++){
            var currentHoliday = holidays[i];

            var thisDateElem = $('.day[data-current-day ="' + currentHoliday.date + '"]');
            thisDateElem.addClass('holiday');
            thisDateElem.append('-' + currentHoliday.name);

          }
        },
        error: function() {
          alert("errore");
        }





      })
    }
});
