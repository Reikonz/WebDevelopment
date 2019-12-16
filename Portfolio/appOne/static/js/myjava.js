function popupFunction(clicked_id) {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

  var portfolio1 = document.getElementById("portfolio1");
  portfolio1.classList.toggle("dimmed");
  var portfolio2 = document.getElementById("portfolio2");
  portfolio2.classList.toggle("dimmed");

  switch(clicked_id){
  case "1":
        document.getElementById("popImg").src = "/static/pictures/product_page.png";
        document.getElementById("popTitle").innerHTML = "Self Help Book";
        document.getElementById("popCaption").innerHTML = "Product Page";
        document.getElementById("popBody").innerHTML = "This site was to endorse a product. In this case, the product was a self-help book call 'How To Be A 3% Man', by Corey Wayne";
        break;
  case "2":
        document.getElementById("popImg").src = "static/pictures/survey_page.png";
        document.getElementById("popTitle").innerHTML = "League of Surveys";
        document.getElementById("popCaption").innerHTML = "Survey Page";
        document.getElementById("popBody").innerHTML = "This site was to give the user a way to enter their league of legends information in a survey form. The information is saved into a database.";
        break;
  case "3":
        document.getElementById("popImg").src = "static/pictures/tribute_page.png";
        document.getElementById("popTitle").innerHTML = "Hellfire Kitchen";
        document.getElementById("popCaption").innerHTML = "Tribute Page";
        document.getElementById("popBody").innerHTML = "This site was to pay homage to one of my idols, Gordon Ramsey.";
        break;
  case "4":
        document.getElementById("popImg").src = "static/pictures/company_page.png";
        document.getElementById("popTitle").innerHTML = "Crowned Elite Athletics";
        document.getElementById("popCaption").innerHTML = "Company Page";
        document.getElementById("popBody").innerHTML = "This site is a replication of a local cheer gym. This project helped me learn how to style elements in a more methodological way";
        break;
  case "5":
        document.getElementById("popImg").src = "static/pictures/training_page.png";
        document.getElementById("popTitle").innerHTML = "Kinetic Dragon Athletics";
        document.getElementById("popCaption").innerHTML = "Personal Training Page";
        document.getElementById("popBody").innerHTML = "This site was to endorse my personal training methods in martial arts tricking. The site contained training plans, video guides, payment methods, and account creations for members";
        break;
  case "6":
        document.getElementById("popImg").src = "static/pictures/disaster_page.png";
        document.getElementById("popTitle").innerHTML = "Right Here Right Now";
        document.getElementById("popCaption").innerHTML = "Disaster Recovery Page";
        document.getElementById("popBody").innerHTML = "This site is a startup company designed to help natural disaster victims recover via digital donation wish lists. I volunteered to help improve portions of the site and add new dynamic features";
    break;
  default:
    document.getElementById("popImg").src = "static/pictures/disaster_page.png";
    break;
  }
}

function popupSwitch(clicked_id){
    if(clicked_id == "popupLeft"){
        switch(document.getElementById("popCaption").innerHTML){
        case "Product Page":
            document.getElementById("popImg").src = "static/pictures/disaster_page.png";
            document.getElementById("popTitle").innerHTML = "Right Here Right Now";
            document.getElementById("popCaption").innerHTML = "Disaster Recovery Page";
            document.getElementById("popBody").innerHTML = "This site is a startup company designed to help natural disaster victims recover via digital donation wish lists. I volunteered to help improve portions of the site and add new dynamic features";
            break;
        case "Survey Page":
            document.getElementById("popImg").src = "/static/pictures/product_page.png";
            document.getElementById("popTitle").innerHTML = "Self Help Book";
            document.getElementById("popCaption").innerHTML = "Product Page";
            document.getElementById("popBody").innerHTML = "This site was to endorse a product. In this case, the product was a self-help book call 'How To Be A 3% Man', by Corey Wayne";
            break;
        case "Tribute Page":
            document.getElementById("popImg").src = "static/pictures/survey_page.png";
            document.getElementById("popTitle").innerHTML = "League of Surveys";
            document.getElementById("popCaption").innerHTML = "Survey Page";
            document.getElementById("popBody").innerHTML = "This site was to give the user a way to enter their league of legends information in a survey form. The information is saved into a database.";
            break;
        case "Company Page":
            document.getElementById("popImg").src = "static/pictures/tribute_page.png";
            document.getElementById("popTitle").innerHTML = "Hellfire Kitchen";
            document.getElementById("popCaption").innerHTML = "Tribute Page";
            document.getElementById("popBody").innerHTML = "This site was to pay homage to one of my idols, Gordon Ramsey.";
            break;
        case "Personal Training Page":
            document.getElementById("popImg").src = "static/pictures/company_page.png";
            document.getElementById("popTitle").innerHTML = "Crowned Elite Athletics";
            document.getElementById("popCaption").innerHTML = "Company Page";
            document.getElementById("popBody").innerHTML = "This site is a replication of a local cheer gym. This project helped me learn how to style elements in a more methodological way";
            break;
        case "Disaster Recovery Page":
            document.getElementById("popImg").src = "static/pictures/training_page.png";
            document.getElementById("popTitle").innerHTML = "Kinetic Dragon Athletics";
            document.getElementById("popCaption").innerHTML = "Personal Training Page";
            document.getElementById("popBody").innerHTML = "This site was to endorse my personal training methods in martial arts tricking. The site contained training plans, video guides, payment methods, and account creations for members";
            break;
        default:
            break;
        }
    }else{
        switch(document.getElementById("popCaption").innerHTML){
        case "Product Page":
            document.getElementById("popImg").src = "static/pictures/survey_page.png";
            document.getElementById("popTitle").innerHTML = "League of Surveys";
            document.getElementById("popCaption").innerHTML = "Survey Page";
            document.getElementById("popBody").innerHTML = "This site was to give the user a way to enter their league of legends information in a survey form. The information is saved into a database.";
            break;
        case "Survey Page":
            document.getElementById("popImg").src = "static/pictures/tribute_page.png";
            document.getElementById("popTitle").innerHTML = "Hellfire Kitchen";
            document.getElementById("popCaption").innerHTML = "Tribute Page";
            document.getElementById("popBody").innerHTML = "This site was to pay homage to one of my idols, Gordon Ramsey.";
            break;
        case "Tribute Page":
            document.getElementById("popImg").src = "static/pictures/company_page.png";
            document.getElementById("popTitle").innerHTML = "Crowned Elite Athletics";
            document.getElementById("popCaption").innerHTML = "Company Page";
            document.getElementById("popBody").innerHTML = "This site is a replication of a local cheer gym. This project helped me learn how to style elements in a more methodological way";
            break;
        case "Company Page":
            document.getElementById("popImg").src = "static/pictures/training_page.png";
            document.getElementById("popTitle").innerHTML = "Kinetic Dragon Athletics";
            document.getElementById("popCaption").innerHTML = "Personal Training Page";
            document.getElementById("popBody").innerHTML = "This site was to endorse my personal training methods in martial arts tricking. The site contained training plans, video guides, payment methods, and account creations for members";
            break;
        case "Personal Training Page":
            document.getElementById("popImg").src = "static/pictures/disaster_page.png";
            document.getElementById("popTitle").innerHTML = "Right Here Right Now";
            document.getElementById("popCaption").innerHTML = "Disaster Recovery Page";
            document.getElementById("popBody").innerHTML = "This site is a startup company designed to help natural disaster victims recover via digital donation wish lists. I volunteered to help improve portions of the site and add new dynamic features";
            break;
        case "Disaster Recovery Page":
            document.getElementById("popImg").src = "/static/pictures/product_page.png";
            document.getElementById("popTitle").innerHTML = "Self Help Book";
            document.getElementById("popCaption").innerHTML = "Product Page";
            document.getElementById("popBody").innerHTML = "This site was to endorse a product. In this case, the product was a self-help book call 'How To Be A 3% Man', by Corey Wayne";
            break;
        default:
            break;
        }

    }
}