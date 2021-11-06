
$('#feedback_main_form').validate({
    rules : {
        name: {
            required: true,
            maxlength: 20,
            minlength: 3,
            pattern:  /[a-zA-Z\u0400-\u04ff]{3,20}/   
        },
        phone: {
            required: true
        },
        checkbox: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Це поле не може бути пустим",
            maxlength: "Ім’я повинне містити не більше 20 символів",
            minlength: "Ім’я повинне містити не менше 3 символів",
            pattern: 'Це поле може містити лише літери'    
        },
        phone: {
            required: "Це поле не може бути пустим"
        },
        checkbox: {
            required: "Це поле не може бути пустим"
        }
    },
    submitHandler: function(){
    var name = $("#name_main_form").val().trim();
    var phone = $("#phone_main_form").val().trim();
    var choose_program = $("#choose_program").val().trim();
    var choose_teacher = $("#choose_teacher").val().trim();
    var choose_time = $("#choose_time").val().trim();
    
        $.ajax({
            url: 'telegram.php',
            type: 'POST',
            cache: false,
            data: {
                'name': name,
                'phone': phone,
                'choose_program': choose_program,
                'choose_teacher': choose_teacher,
                'choose_time': choose_time
            },
            dataType: 'html',
            beforeSend: function() {
                $('#submit_main_form').prop('disabled', true);
                $("html, body").animate({ scrollTop: 0 }, 'fast');
            },
            success: function() {
                $('#submit_main_form').prop('disabled', false);
                $('#feedback_main_form').trigger('reset');
                $('.overlay, #consultation').fadeOut('slow');
                var body = document.getElementById('body');
                body.style.overflow = "scroll";
                $('#alert_header').fadeIn('slow');
                setTimeout( () => {
                    $('#alert_header').fadeOut('slow');
                }, 2000);
            }
        });
    }     
}); 
$('#feedback_form').validate({
    rules : {
        name: {
            required: true,
            maxlength: 30,
            minlength: 3,
            pattern:  /[a-zA-Z\u0400-\u04ff]{3,30}/
            
        },
        phone: {
            required: true      
        }

    },
    messages: {
        name: {
            required: "Це поле не може бути пустим",
            maxlength: "Ім’я повинне містити не більше 20 символів",
            minlength: "Ім’я повинне містити не менше 3 символів",
            pattern: 'Це поле може містити лише літери'   
        },
        phone: {
            // digits: "Це поле може містити лише цифри",
            required: "Це поле обов’язкове для заповнення!"
            // maxlength: "Номер телефону може містити не більше 12 цифр",
            // minlength: "Номер телефону може містити не менше 10 цифр",
            // pattern: "Це поле може містити лише цифри"
            
        }
    },
    submitHandler: function(){
    var name = $("#feedback_name").val().trim();
    var phone = $("#feedback_phone").val().trim();
        $.ajax({
            url: 'telegram.php',
            type: 'POST',
            cache: false,
            data: {
                'name': name,
                'phone': phone,
            },
            dataType: 'html',
            beforeSend: function() {
                $('#submit_button').prop('disabled', true);
            },
            success: function() {
                $('#submit_button').prop('disabled', false);
                $('#feedback_form').trigger('reset');
                $('#alert_feedback').fadeIn('slow');
                setTimeout( () => {
                    $('#alert_feedback').fadeOut('slow');
                }, 2000);
            }
        });
    }     
}); 

 $('.order_form').each(function(){
    $(this).validate({
        rules : {
            name: {
                required: true,
                maxlength: 30,
                minlength: 3,
                pattern:  /[a-zA-Z\u0400-\u04ff]{3,30}/
                
            },
            phone: {
                required: true      
            }
    
        },
        messages: {
            name: {
                required: "Це поле не може бути пустим",
                maxlength: "Ім’я повинне містити не більше 20 символів",
                minlength: "Ім’я повинне містити не менше 3 символів",
                pattern: 'Це поле може містити лише літери'   
            },
            phone: {
                required: "Це поле не може бути пустим"     
            }
        },
        submitHandler: function() {
            var currentForm = $(this.currentForm)[0];
            var sender_name = currentForm.getElementsByClassName('sender_name')[0].value;
            var sender_phone = currentForm.getElementsByClassName('sender_phone')[0].value;
            console.log(sender_name, sender_phone);

            $.ajax({
                url: 'payment.php',
                type: 'POST',
                cache: false,
                data: {
                    'sender_name': sender_name,
                    'sender_phone': sender_phone
                },
                dataType: 'html'
            });
             
        }
    })
 })