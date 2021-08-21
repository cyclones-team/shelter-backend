'use strict';

const {charityModel} = require('../Modules/Data.Modules');

const seedCharitysData = () => {
    const Charity = new charityModel({
      email: "renadsalem8888@gmail.com",
      charities: [
        { name: "African Wild Dog Conservancy", description: "for protect African Wild Dog",address:"kenea" ,url:"https://stringfixer.com/ar/Kenya_Wildlife_Service#stringfixer",logo:"https://stringfixer.com/css/img/logo01.png"},
        { name: "International Union for the Conservation of Nature (IUCN)", description: "for protect Animals",address:"united Kingdom" ,url:"https://www.iucn.org/" ,logo:"https://www.iucn.org/sites/dev/files/iucn_logo-small_0.png"},
        { name: "Fauna and Flora International", description: "Protecting mammals from animals" ,address:"South Africa",url:"https://stringfixer.com/ar/Fauna_and_Flora_International#stringfixer",logo:"https://stringfixer.com/css/img/logo01.png"},
        { name: "he World Society for the Protection of Animals", description: "for the Protection of Animals" ,address:"USA",url:"https://www.worldanimalprotection.org/",logo:"https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/KcJbIpIzwn_elxoOQwdCMm6FTXuq041J9MDp9MjjCCM/1616214770/:relative:/themes/custom/wap_master/images/svg/wap-inline-logo.svg"},
        { name: "wildforlife", description: "for protection elephants" ,address:"south africa",url:"https://wildfor.life/species/elephant",logo:"https://www.un.org/en/img/splash/un-logo.png"},
        { name: "In Defense of Animals", description: "international animal protection organization" ,address:"San Rafael",url:"https://www.idausa.org/",logo:"https://idausa.lattecdn.com/assets/images/ida-logo.svg"},
        { name: "World Wildlife Fund", description: "for helping animals",address:"keney,uk,usa",url:"https://www.sheldrickwildlifetrust.org/",logo:"https://www.sheldrickwildlifetrust.org/media/images/xdswt-logo.png.pagespeed.ic.q5afEMjal2.webp" },
        { name: "Gorilla Doctors", description: "saving gorilla" ,address:"africa",url:"https://www.gorilladoctors.org/",logo:"https://www.gorilladoctors.org/wp-content/themes/gf-bootstrap/images/horiz-logo.png"},
        { name: "Charles Darwin Foundation", description: "working to keep this incredible micro-climate as natural as possible",address:"Ecuador.",url:"https://www.darwinfoundation.org/en/" ,logo:"https://www.darwinfoundation.org/images/fcd/logo_145WHITE.png"},
        { name: "Pandas International ", description: "providing them with vital medical equipment and supplies",address:"china",url:"https://www.pandasinternational.org/" ,logo:"https://www.pandasinternational.org/wp-content/uploads/2013/06/PI-websitelogo6.png"},
        { name: "Sea Turtle foundation", description: "aiming to protect sea turtles through research",address:"australia",url:"https://www.seaturtlefoundation.org/",logo:"https://www.seaturtlefoundation.org/wp-content/uploads/2016/06/Untitled-2.fw_.png" },
        { name: "Australian Koala Foundation", description: "helps people to become more “koala friendly”",address:"Austoralia",url:"https://www.savethekoala.com/",logo:"http://www.savethekoala.com/wp-content/uploads/2020/09/logo.png" },
      ],
    });
    // console.log(newBook);
    Charity.save();
  };

  module.exports=seedCharitysData;