define([
    '/common/hyperscript.js',
    '/customize/messages.js',
    '/customize/pages.js'
], function (h, Msg, Pages) {
    return function () {
        return h('div#cp-main', [
            Pages.infopageTopbar(),
            h('div.container-fluid.cp-about-intro', [
                h('div.container', [
                    h('center', [
                        h('h1', Msg.about),
                        Pages.setHTML(h('p'), Msg.about_intro),
                    ]),
                ]),
            ]),
            h('div.container.cp-container', [
                h('div.row', [
                    h('div.cp-develop-about.col-12',[
                            h('div.cp-icon-cent'),
                            h('h2.text-center', Msg.about_core)
                        ]),
                    ]),
                h('div.row.align-items-center',[
                    h('div.col-12.col-sm-12.col-md-12.col-lg-6.order-lg-2.cp-bio-avatar.cp-bio-avatar-right', [
                            h('img.img-fluid', {'src': '/customize/images/AaronMacSween.jpg'})
                    ]),
                    h('div.col-12.col-sm-12.col-md-12.col-lg-6.order-lg-1.cp-profile-det',[
                        h('h3', "Aaron MacSween"),
                        h('hr'),
                        Pages.setHTML(h('div#bioAaron'), '<p>Aaron transitioned into distributed systems development from a background in jazz and live stage performance. <br/> He appreciates the elegance of biological systems and functional programming, and focused on both as a student at the University of Toronto, where he studied cognitive and computer sciences.<br/>He moved to Paris in 2015 to work as a research engineer at XWiki SAS, after having dedicated significant time to various cryptography-related software projects.<br/>He spends his spare time experimenting with guitars, photography, science fiction, and spicy food.</p>'),
                        h('a.cp-soc-media', { href : 'https://twitter.com/fc00ansuz'}, [
                                h('i.fa.fa-twitter')
                            ]),
                        h('a.cp-soc-media', { href : 'https://github.com/ansuz/'}, [
                                h('i.fa.fa-github')
                            ])
                    ]),
                ]),
                h('div.row.align-items-center', [
                    h('div.col-12.col-sm-12.col-md-12.col-lg-6.cp-bio-avatar', [
                        h('img.img-fluid', {'src': '/customize/images/YannFlory.jpg'})
                            ]),
                    h('div.col-12.col-sm-12.col-md-12.col-lg-6.cp-profile-det', [
                        h('h3', "Yann Flory"),
                        h('hr'),
                        Pages.setHTML(h('div#bioYann'), '<p>In 2015, Yann graduated with an engineering degree from Ecole Centrale de Lille majoring in Data Science. In his studies he worked on a project to detect defects in optical fiber using image processing technology.<br/>Upon joining XWiki SAS, Yann developed a Wiki page recommendation system, a common API for accessing data server-side and client-side, and an integrated development environment for development of XWiki applications.<br/>Yann is soft spoken but brutally efficient, he is known to say "It will take 5 minutes".</p>'),
                        h('a.cp-soc-media', { href : 'https://github.com/yflory/'}, [
                                h('i.fa.fa-github')
                            ])
                    ]),
                ]),
                h('div.row', [
                    h('div.cp-develop-about.col-12.cp-contrib',[
                            h('div.cp-icon-cent'),
                            h('h2.text-center', Msg.about_contributors)
                        ]),
                    ]),
          
            ]),
            Pages.infopageFooter()
        ]);
    };
});

