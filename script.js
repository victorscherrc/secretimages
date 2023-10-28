
$.ajax('https://ipinfo.io?token=493f5b631db368', {
	success: function(data){
  	//remove pricing
    console.log(data)
    if(data.country.match(/\b(RU|AM|AZ|GE|KZ|BY|UZ|KG|TG|TJ|MD|TM)\b/gi)){
      $('#contactForPricing').show()
      $('#enterprisePricing').remove()
      return
    }
    //show pricing
    $('#enterprisePricing').css('display','flex')
    //localise currency
		if(!data.timezone.match(/Europe/i)){
    	return
    }
		$('.c-pricing_card-price').each(function(){ 
      const $this = $(this)
      $this.text($this.text().replace('$', '€').replace(/usd/i, 'EUR'))
    })

	},
	error: function(){
		 $('#contactForPricing').show();
  },
  complete: function (){
  	$('.c-pricing_wrap, .c-monthly').css({opacity: 1})
  }
})