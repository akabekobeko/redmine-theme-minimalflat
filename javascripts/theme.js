( function( $ ) {
if( !$ ) { return; }

$( document ).ready( function() {
    function addIconAtChildBegin( target, iconClass ) {
        $( target ).each( function() {
            $( "<i>" ).addClass( iconClass ).prependTo( $( this ) );
        } );
    }

    addIconAtChildBegin( "tr.message.locked td.subject", "fa fa-lock js-replace-fa-icon" );
    addIconAtChildBegin( "tr.message.sticky td.subject", "fa fa-arrow-right js-replace-fa-icon" );
    addIconAtChildBegin( "tr.version.shared td.name", "fa fa-link js-replace-fa-icon" );
    addIconAtChildBegin( "table.members td.group", "fa fa-users js-replace-fa-icon" );

    $( "a[onclick*='removeFileField(this);']" ).addClass( "js-replace-icon-trash" ).empty();
    $( "a[data-method='delete']" ).addClass( "js-replace-icon-trash" ).empty();
} );

} )( jQuery );
