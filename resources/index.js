    
    var WebPlatform = window.WebPlatform || {};

        WebPlatform.cookiesDisclaimer = 'We use cookies to provide a better service. Continue to use the site If you\'re happy with this, or find out <a href=\'https://www.google.com/search?q=how+to+disable+cookies\' target=\'_blank\' alt=\'\'>how to disable cookies</a>.'.trim();
        WebPlatform.cookiesInfoBtn = "Learn More".trim();
        WebPlatform.cookiesInfoBtnLink = "".trim();
        WebPlatform.cookiesAcceptBtnText = "Accept".trim() || 'OK';
        WebPlatform.ipCountryCode = "QA";

        WebPlatform.dateFormat = 'dd/mm/yy';
        if (!WebPlatform.onReady) {
          WebPlatform.documentReadyRequests = [];
          WebPlatform.onReady = function (request) {
            if (WebPlatform.documentReadyRequests === null)
              request();
            else
              WebPlatform.documentReadyRequests.push(request);
          };
        }

        if (!WebPlatform.merge) {
          WebPlatform.merge = function (target, source) {
            for (var key in source)
              if ((typeof target[key] === "undefined") || target[key] === '')
                target[key] = source[key];
            return target;
          };
        }



 /* Script JS */

   /* Global site tag (gtag.js) - Google Analytics */
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-85LT12VCDW');

  /* Global site tag (gtag.js) - Google Ads: 684568682 */  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-684568682');

  /* Event snippet for Website sale conversion page */
  gtag('event', 'conversion', {
      'send_to': 'AW-684568682/YC2rCKnDyeoBEOrgtsYC',
      'transaction_id': ''
  });

 /* Facebook Pixel Code */
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '522184382197846');
        fbq('track', 'PageView');


/* Last Script Section */
  window.WebPlatform = window.WebPlatform || {};
  WebPlatform.Phrases = (WebPlatform.merge || window.mergeUnique)({
    'client.by': "by",
    'client.on': "on",
    'client.in': "in",
    'label.of': "of",
    'client.comment': "Comment",
    'client.comments': "Comments",
    'client.read_more': "Read More",
    'client.load_more': "Load More",
    'label.view': "View",
    'label.years': "Years",
    'label.months': "Months",
    'label.days': "Days",
    'label.minutes': "Minutes",
    'label.hours': "Hours",
    'label.seconds': "Seconds",
    'card.number': "Card Number",
    'card.cvc': "CVC",
    'card.mm': "MM",
    'card.yyyy': "YYYY",
    'card.invalid_data': "Please verify your credit/debit card details and try again.",
    'card.invalid_number': "The card number is not a valid credit or debit card number.",
    'card.invalid_month': "Your card's expiration month is invalid.",
    'card.invalid_year': "Your card's expiration year is invalid.",
    'card.invalid_cvc': "Your card's security code is invalid.",
    'card.unknown_error': "Please verify your payment details and try again.",
    'label.shipping_address': "Shipping Address",
    'label.billing_address': "Billing Address",
    'label.january': "January",
    'label.february': "February",
    'label.march': "March",
    'label.april': "April",
    'label.may': "May",
    'label.june': "June",
    'label.july': "July",
    'label.august': "August",
    'label.september': "September",
    'label.october': "October",
    'label.november': "November",
    'label.december': "December",
    'label.jan': "Jan",
    'label.feb': "Feb",
    'label.mar': "Mar",
    'label.apr': "Apr",
    'label.may_short': "May",
    'label.jun': "Jun",
    'label.jul': "Jul",
    'label.aug': "Aug",
    'label.sep': "Sep",
    'label.oct': "Oct",
    'label.nov': "Nov",
    'label.dec': "Dec",
    'label.add_to_cart': "Add To Cart",
    'label.buy_now': "Buy Now",
    'label.update': "Update",
    'label.change': "Change",
    'label.month': "month",
    'label.year': "year",
    'label.months_lower': "months",
    'label.years_lower': "years",
    'label.week_lower': "week",
    'label.weeks_lower': "weeks",
    'label.saving': "Saving",
    'label.checkout_now': "Checkout Now",
    'label.view_cart': "View Cart",
    'label.select_product_variant': "Select variant",
    'err.select_product_variants': "Select variation for each item in your order",
    'label.cod': "Pay on delivery",
    'label.bank': "Bank Transfer",
    'label.yes': "YES",
    'label.no': "NO",
    'label.enter_delivery_address': "Please enter your shipping details",
    'label.no_delivery_offices': "No offices available",
    'label.select_speedy_office': "Select Speedy office",
    'label.no_shipping_services': "Please enter address",
    'label.select_delivery_type': "Select delivery type",
    'label.monday_min': "Mo",
    'label.tuesday_min': "Tu",
    'label.wednesday_min': "We",
    'label.thursday_min': "Th",
    'label.friday_min': "Fr",
    'label.saturday_min': "Sa",
    'label.sunday_min': "Su",
    'label.monday_short': "Mon",
    'label.tuesday_short': "Tue",
    'label.wednesday_short': "Wed",
    'label.thursday_short': "Thu",
    'label.friday_short': "Fri",
    'label.saturday_short': "Sat",
    'label.sunday_short': "Sun",
    'label.contact_booked_error': "You already booked a spot in this group event",
    'label.already_booked_time_error': "The selected time is not available, please select a different time",
    'label.booking_notice_error': "Booking is too close to the current time, please reload the page",
    'label.delete_account_prompt': "Do you want to delete your account?",
    'label.slots_left': "slots left",
    'store.label.sale': "Sale",
    'label.left_in_stock_multiple': "Only %x% left in stock!",
    'label.left_in_stock_single': "Only 1 left in stock!",
    'label.taxes': "Tax:",
    'label.taxes_included': "Tax Included:",
    'error.fill_required_fields': "Please fill all the required fields!"
  }, WebPlatform.Phrases || {});

          WebPlatform.Store = WebPlatform.Store || {};
        
          WebPlatform.merge(WebPlatform.Store, {
            hideUnavailableVariations: false,
            notEnoughQuantityMessage: "Not enough available quantity for some of the products!",
            currencySymbol: "$",
            currencySymbolAtLeft: false,
            currency: 'USD',
            priceWithTax: true,
            country: 'GB',
            baseUrl: '/store',
                productAddedToCart: 'Product was added to your cart',
                fbPxId: '522184382197846'
              });
        
              WebPlatform.Funnels = WebPlatform.Funnels || {};
              WebPlatform.Funnels.hideProductLinks = false;
              WebPlatform.Funnels.showCheckoutButton = true;
              WebPlatform.Funnels.checkoutButtonTarget = "";
              WebPlatform.Funnels.variant = "2GTpw2VglCWklR4LQleAtA==";
              WebPlatform.Funnels.steps = [
                /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'ebooks-bundle', id: 5, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'Checkout', id: 2, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'reselle', id: 4, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'mreselle', id: 16, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'Thank-You', id: 3, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'reseller', id: 15, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'contact-us', id: 7, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'terms', id: 8, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'disclaimer', id: 9, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'fonts', id: 11, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'checkouf', id: 12, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'checkoutfc', id: 13, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'smb', id: 17, kind: 'REGULAR', funnelId: 1},
                  /**/
                {type: 'PAGE', host: '', base: 'e-book-purchase', url: 'elementor', id: 14, kind: 'REGULAR', funnelId: 1},
                  /**/
              ];
        

              WebPlatform.clientData = null;
              WebPlatform.visitorEmail = '';
              WebPlatform.visitorName = '';