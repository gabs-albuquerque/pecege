 $(function() {
     var bar = new ProgressBar.Circle(container, {
         color: '#333',
         strokeWidth: 4,
         trailWidth: 1,
         easing: 'easeInOut',
         duration: 1400,
         text: {
           autoStyleContainer: false
         },
         from: { color: '#333', width: 4 },
         to: { color: '#333', width: 4 },
         // Set default step function for all animate calls
         step: function(state, circle) {
           circle.path.setAttribute('stroke', state.color);
           circle.path.setAttribute('stroke-width', state.width);
       
           var value = Math.round(circle.value() * 100);
           if (value === 0) {
             circle.setText('');
           } else {
             circle.setText(value + '%');
           }
       
         }
       });
       bar.text.style.fontFamily = '"DM Sans"';
       bar.text.style.fontSize = '2rem';
       bar.text.style.fontWeight = 'bold';
       
       bar.animate(0.35);  // Number from 0.0 to 1.0

     var bar = new ProgressBar.Circle(container2, {
         color: '#333',
         strokeWidth: 4,
         trailWidth: 1,
         easing: 'easeInOut',
         duration: 1400,
         text: {
           autoStyleContainer: false
         },
         from: { color: '#333', width: 4 },
         to: { color: '#333', width: 4 },
         // Set default step function for all animate calls
         step: function(state, circle) {
           circle.path.setAttribute('stroke', state.color);
           circle.path.setAttribute('stroke-width', state.width);
       
           var value = Math.round(circle.value() * 100);
           if (value === 0) {
             circle.setText('');
           } else {
             circle.setText(value + '%');
           }
       
         }
       });
       bar.text.style.fontFamily = '"DM Sans"';
       bar.text.style.fontSize = '2rem';
       bar.text.style.fontWeight = 'bold';
       
       bar.animate(0.75);  // Number from 0.0 to 1.0

     var bar = new ProgressBar.Circle(container3, {
         color: '#333',
         strokeWidth: 4,
         trailWidth: 1,
         easing: 'easeInOut',
         duration: 1400,
         text: {
           autoStyleContainer: false
         },
         from: { color: '#333', width: 4 },
         to: { color: '#333', width: 4 },
         // Set default step function for all animate calls
         step: function(state, circle) {
           circle.path.setAttribute('stroke', state.color);
           circle.path.setAttribute('stroke-width', state.width);
       
           var value = Math.round(circle.value() * 100);
           if (value === 0) {
             circle.setText('');
           } else {
             circle.setText(value + '%');
           }
       
         }
       });
       bar.text.style.fontFamily = '"DM Sans"';
       bar.text.style.fontSize = '2rem';
       bar.text.style.fontWeight = 'bold';
       
       bar.animate(0.63);  // Number from 0.0 to 1.0

       let anchorSelector = 'a[href^="#"]';      
       $(anchorSelector).on('click', function (e) {
          var li = $(this).parent();
          $('.box-pagamentos li').removeClass('active');
          li.addClass('active');

           e.preventDefault();
           let destination = $(this.hash);
           let scrollPosition = destination.offset().top;
           let animationDuration = 500;
           $('html, body').animate({
               scrollTop: scrollPosition - 82
           }, animationDuration);
       });
 });