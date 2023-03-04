var arrLang = {

    'en': {
        //slide1
        'title1': 'Data Analysis',
        'title1sub': 'Our world revolves around your data. We help you aggregate, analyse, infer and derive meaningful / actionable insights hidden in real-time datasets.',
        'contactus': 'Contact Us',

        //slide2
        'title2': 'Patient Mapping',
        'title2sub1': 'We digitise patient journey maps from referral to follow-up and beyond.',
        'title2sub2': 'Enabling stakeholders from multiple specialities, GP’s and consultants to proactively act on a patient’s clinical pathway',
        //slide3
        'title3': 'Predictive Modelling',
        'title3sub1': 'Our predictive modelling solutions help customers to plan for the future.',
        'title3sub2': 'Resource (infrastructure, people) and investment planning, given the STATUS QUO and towards the TO-BE state.',

        //slide4
        'title4': 'Bespoke Healthcare Solutions',
        'title4sub1': 'Ahimsa Global team has deep insights into cardiology practice at tertiary centers of excellence.',
        'title4sub2': 'We have built flexible architectures that can scale to any specialty across the hospital ecosystem.',
    },

    'sp': {
        //slide1
        'title1': 'Análisis de datos',
        'title1sub': 'Nuestro mundo gira en torno a sus datos. Le ayudamos a agregar, analizar, inferir y obtener información significativa y práctica oculta en conjuntos de datos en tiempo real.',
        'contactus': 'Contacte con nosotros',

        //slide2
        'title2': 'Mapas de pacientes',
        'title2sub1': 'Digitalizamos los mapas del recorrido del paciente desde la derivación hasta el seguimiento y más allá.',
        'title2sub2': 'Permitiendo a las partes interesadas de múltiples especialidades, médicos de cabecera y consultores actuar de forma proactiva en el recorrido clínico de un paciente.',

        //slide3
        'title3': 'Modelización predictiva',
        'title3sub1': 'Nuestras soluciones de modelización predictiva ayudan a los clientes a planificar el futuro.',
        'title3sub2': 'Planificación de recursos (infraestructuras, personal) e inversiones, teniendo en cuenta el STATUS QUO y hacia el TO-BE state.',

        //slide4
        'title4': 'Soluciones sanitarias a medida',
        'title4sub1': 'El equipo de Ahimsa Global tiene un profundo conocimiento de la práctica de la cardiología en centros terciarios de excelencia.',
        'title4sub2': 'Hemos construido arquitecturas flexibles que pueden escalar a cualquier especialidad en todo el ecosistema hospitalario',
    }
};

$(function() {
  var storedLang = localStorage.getItem('stored_lang') || 'en';
  var slide1SubBox = $('#slide1_sub_box');
  var slide2SubBox = $('#slide2_sub_box');
  var slide3SubBox = $('#slide3_sub_box');
  var slide4SubBox = $('#slide4_sub_box');
  var mrButton = $('#sp');
  var enButton = $('#en');

  function translateLang(lang) {
    $('.lang').each(function() {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }

  function setSlide1SubBoxHeight(height) {
    slide1SubBox.css('height', height);
  }
  function setSlide2SubBoxHeight(height) {
    slide2SubBox.css('height', height);
  }
  function setSlide3SubBoxHeight(height) {
    slide3SubBox.css('height', height);
  }
  function setSlide4SubBoxHeight(height) {
    slide4SubBox.css('height', height);
  }

  function hideButton(button) {
    button.hide();
  }

  function showButton(button) {
    button.show();
  }

  translateLang(storedLang);
  setSlide1SubBoxHeight(storedLang === 'sp' ? 350 : 320);
  setSlide2SubBoxHeight(storedLang === 'sp' ? 475 : 415);
  setSlide3SubBoxHeight(storedLang === 'sp' ? 455 : 380);
  setSlide4SubBoxHeight(storedLang === 'sp' ? 485 : 415);

  $('.translate').click(function() {
    var lang = $(this).attr('id');
    localStorage.setItem('stored_lang', lang);
    translateLang(lang);
    setSlide1SubBoxHeight(lang === 'sp' ? 350 : 320);
    setSlide2SubBoxHeight(lang === 'sp' ? 475 : 415);
    setSlide3SubBoxHeight(lang === 'sp' ? 455 : 380);
    setSlide4SubBoxHeight(lang === 'sp' ? 485 : 415);
    hideButton(lang === 'sp' ? mrButton : enButton);
    showButton(lang === 'sp' ? enButton : mrButton);
  });

  mrButton.click(function() {
    setSlide1SubBoxHeight(350);
    setSlide2SubBoxHeight(475);
    setSlide3SubBoxHeight(455);
    setSlide4SubBoxHeight(485);
    hideButton(mrButton);
    showButton(enButton);
  });

  enButton.click(function() {
    setSlide1SubBoxHeight(320);
    setSlide2SubBoxHeight(415);
    setSlide3SubBoxHeight(380);
    setSlide4SubBoxHeight(415);
    hideButton(enButton);
    showButton(mrButton);
  });
});
