Ext.application({
    name: 'Sencha',
    requires: ['Ext.Carousel'],

    launch: function() {

        var heads = {
            xtype: 'carousel',
            items: [
                {cls: "head-1 head"},
                {cls: "head-2 head"},
                {cls: "head-3 head"}
            ]
        };

        var torsos = {
            xtype: 'carousel',
            items: [
                {cls: "torso-1 torso"},
                {cls: "torso-2 torso"},
                {cls: "torso-3 torso"}
            ]
        };

        var legs = {
            xtype: 'carousel',
            items: [
                {cls: "legs-1 legs"},
                {cls: "legs-2 legs"},
                {cls: "legs-3 legs"}
            ]
        };

        var credits = {
            html: 'Illustrations by <a href="http://www.veryworrying.com/">Laurie Pink</a>'
        };

        Sencha.container = Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'vbox',
            defaults: { flex: 1 },
            items: [heads, torsos, legs, credits]
        });

    }
});