$(document).ready(function()
{
  //stampo date di Gennaio
  var baseDate = moment({
    day: 1,
    month: 0,
    year: 2018
  });

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

});
