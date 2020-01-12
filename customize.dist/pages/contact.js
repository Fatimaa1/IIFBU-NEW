define([
    '/api/config',
    '/common/hyperscript.js',
    '/customize/messages.js',
    '/customize/pages.js'
], function (Config, h, Msg, Pages) {
    return function () {
        return h('div#cp-main', [
            Pages.infopageTopbar(),
            h('div.container-fluid.cp-contdet', [
                h('row.col-12.col-sm-12',
                    h('h1.text-center', Msg.contact )
                )
            ]),
            h('div.container.cp-container', [
                Config.adminEmail && Config.adminEmail !== 'i.did.not.read.my.config@cryptpad.fr' ? h('div.row.cp-iconCont.align-items-center', [
                    h('div.col-12',
                        Pages.setHTML(h('h4.text-center'), Msg.contact_admin),
                        h('p', Msg.contact_adminHint)
                    ),
                    h('div.col-12.col-sm-6.col-md-3.col-lg-3',
                        h('a.card', {href : "mailto:"+Config.adminEmail},
                            h('div.card-body',
                                h('p', [
                                    h('img', {src: '/customize/images/email.svg'}),
                                    Msg.contact_email || 'Email'
                                ])
                            )
                        )
                    ),
                ]) : undefined,
                h('div.row.cp-iconCont.align-items-center', [
                    h('div.col-12',
                        Pages.setHTML(h('h4.text-center'), Msg.contact_dev),
                        h('p', Msg.contact_devHint)
                    ),
                    
                ]),
            ]),
            Pages.infopageFooter(),
        ]);
    };
});

