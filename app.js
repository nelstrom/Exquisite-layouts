Ext.application({
    name: 'Sencha',

    launch: function() {

        var red = {
            style: "background-color: #B22222; color:white;",
            title: "Red",
            html: "Red"
        };

        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'auto',
            items: [red]
        });

    }
});