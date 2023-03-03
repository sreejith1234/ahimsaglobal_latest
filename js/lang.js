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

    'mr': {
        //slide1
        'title1': 'Tātari Raraunga',
        'title1sub': 'Ka huri to tatou ao ki o raraunga. Ka awhina matou ki a koe ki te whakahiato, ki te wetewete, ki te whakatau me te whakaputa i nga tirohanga whai kiko / mahi e huna ana i roto i nga huingararaunga wa-tūturu.',
        'contactus': 'Whakapā mai',

        //slide2
        'title2': 'Mahere Tūroro',
        'title2sub1': 'Ka whakamamatitia e matou nga mapi haerenga a nga turoro mai i te tuku ki te whai ake me tua atu.',
        'title2sub2': 'Te whakaahei i nga kaiwhaiwhai mai i nga tohungatanga maha, nga GP me nga kaitohutohu ki te mahi i runga i te huarahi haumanu o te manawanui',

        //slide3
        'title3': 'Whakatauira Matapae',
        'title3sub1': 'Ko a maatau otinga whakatauira matapae ka awhina i nga kaihoko ki te whakamahere mo nga ra kei mua.',
        'title3sub2': 'Rauemi (hanganga, tangata) me te whakamahere haumi, i runga i te STATUS QUO me te ahua TO-BE.',

        //slide4
        'title4': 'Nga Rongoa Hauora Ake',
        'title4sub1': 'He hohonu nga tirohanga a te roopu Ahimsa Global ki nga mahi hinengaro i nga whare wananga o te hiranga.',
        'title4sub2': 'Kua hangahia e matou nga hoahoanga ngawari ka taea te huri ki tetahi momo motuhake puta noa i te rauwiringa kaiao o te hohipera.',
    }
};

$(function() {
  var storedLang = localStorage.getItem('stored_lang') || 'en';
  var slide1SubBox = $('#slide1_sub_box');
  var mrButton = $('#mr');
  var enButton = $('#en');

  function translateLang(lang) {
    $('.lang').each(function() {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }

  function setSlide1SubBoxHeight(height) {
    slide1SubBox.css('height', height);
  }

  function hideButton(button) {
    button.hide();
  }

  function showButton(button) {
    button.show();
  }

  translateLang(storedLang);
  setSlide1SubBoxHeight(storedLang === 'mr' ? 400 : 320);

  $('.translate').click(function() {
    var lang = $(this).attr('id');
    localStorage.setItem('stored_lang', lang);
    translateLang(lang);
    setSlide1SubBoxHeight(lang === 'mr' ? 400 : 320);
    hideButton(lang === 'mr' ? mrButton : enButton);
    showButton(lang === 'mr' ? enButton : mrButton);
  });

  mrButton.click(function() {
    setSlide1SubBoxHeight(400);
    hideButton(mrButton);
    showButton(enButton);
  });

  enButton.click(function() {
    setSlide1SubBoxHeight(320);
    hideButton(enButton);
    showButton(mrButton);
  });
});
