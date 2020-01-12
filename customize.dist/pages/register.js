define([
    'jquery',
    '/common/hyperscript.js',
    '/common/common-interface.js',
    '/customize/messages.js',
    '/customize/pages.js'
], function ($, h, UI, Msg, Pages) {
    return function () {
        return [h('div#cp-main', [
            Pages.infopageTopbar(),
            h('div.container-fluid.cp-register-wel',[
                h('div.container',[
                    h('div.row',[
                        h('div.col-12',[
                            h('h1.text-center', Msg.register_header)
                        ])
                    ])
                ])
            ]),
            h('div.container.cp-container', [
                h('div.row.cp-register-det', [
                
                h('div#userForm.form-group.hidden.col-md-6', [
                    h('a', {
                        href: '/features.html'
                    }, Msg.register_whyRegister),
                    h('input.form-control#username', {
                        type: 'text',
                        autocomplete: 'off',
                        autocorrect: 'off',
                        autocapitalize: 'off',
                        spellcheck: false,
                        placeholder: Msg.login_username,
                        autofocus: true,
                    }),
                    h('input.form-control#password', {
                        type: 'password',
                        placeholder: Msg.login_password,
                    }),
                    h('input.form-control#password-confirm', {
                        type: 'password',
                        placeholder: Msg.login_confirm,
                    }),
                    h('div.checkbox-container', [
                        UI.createCheckbox('import-recent', Msg.register_importRecent, true)
                    ]),
                    h('div.checkbox-container', [
                        $(UI.createCheckbox('accept-terms')).find('.cp-checkmark-label').append(Msg.register_acceptTerms).parent()[0]
                    ]),
                    h('button#register.btn.cp-login-register', Msg.login_register)
                ])
                ]),
                h('div.row.cp-register-test',[
                    h('hr'),
                   
                ])
            ]),

            Pages.infopageFooter(),
        ])];
    };

});

