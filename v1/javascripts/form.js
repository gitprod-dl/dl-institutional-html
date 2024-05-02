var formContact = {
    send: function() {
        var formData = {
            company_name: $('input[name="f_company_name"]').val(),
            company_store_count: $('input[name="f_company_store_qty"]').val(),
            company_type: $('select[name="f_company_type"] option:selected').val(),
            name: $('input[name="f_name"]').val(),
            mobile: $('input[name="f_mobile"]').val(),
            email: $('input[name="f_email"]').val(),
            role: $('input[name="f_role"]').val(),
            pdv_name: $('input[name="f_pdv_name"]').val(),
            obs: $('textarea[name="f_obs"]').val(),
            news: $('input[name="f_news"]').is(':checked')
        };

        $.post('https://hfsfjpsjha.execute-api.sa-east-1.amazonaws.com/prod/send-message', JSON.stringify(formData),
        function(data) {
            console.log('data', data)

            if ( !data.success ) {
                $('#form-error p').addClass('error').removeClass('d-none').html(data.message).fadeIn('slow');
                formContact.resetMessage();
            }

            formContact.resetForm();
        },
        'json');
    },

    resetForm: function() {
        console.log('resetForm');
        $('input[name="f_company_name"]').val('');
        $('input[name="f_company_store_qty"]').val('');
        $('select[name="f_company_type"] option:first').prop('selected', true);
        $('input[name="f_name"]').val('');
        $('input[name="f_mobile"]').val('');
        $('input[name="f_email"]').val('');
        $('input[name="f_role"]').val('');
        $('input[name="f_pdv_name"]').val('');
        $('textarea[name="f_obs"]').val('');
        $('input[name="f_news"]').prop('checked', false);
    },

    resetMessage: function() {
        setTimeout(() => {
            $('#form-error p').addClass('d-none').removeClass('error').removeClass('success').html('').fadeOut('slow');
        }, 5000);
    }
};

$('#form-contact').validate({
    rules: {
        f_company_name: {
            required: true,
        },
        f_company_store_qty: {
            required: true,
        },
        f_company_type: {
            required: true,
        },
        f_name: {
            required: true,
        },
        f_mobile: {
            required: true,
        },
        f_email: {
            required: true,
            email: true
        }
    },

    messages: {
        f_company_name: "Informe o nome da empresa",
        f_company_store_qty: "Informe o número de lojas",
        f_company_type: "Informe os segmentos",
        f_name: "Informe o nome completo",
        f_mobile: "Informe o celular",
        f_email: {
            required: "Informe o e-mail",
            email: "E-mail inválido"
        }
    },

    submitHandler: function(form) {
        formContact.send();
    }
});