( function( $ ) {
if( !$ ) { return; }

$( document ).ready( function() {
    function addBeginIcon( target, iconClass ) {
        $( target ).each( function() {
            $( "<i>" ).addClass( iconClass ).prependTo( $( this ) );
        } );
    }

    addBeginIcon( "tr.message.locked td.subject",       "fa fa-lock js-replace-fa-icon" );
    addBeginIcon( "tr.message.sticky td.subject",       "fa fa-arrow-right js-replace-fa-icon" );
    addBeginIcon( "tr.version.shared td.name",          "fa fa-link js-replace-fa-icon" );
    addBeginIcon( "table.members td.group",             "fa fa-users js-replace-fa-icon" );
    addBeginIcon( "div.flash.error, #errorExplanation", "fa fa-exclamation-circle js-replace-fa-icon" );
    addBeginIcon( "div.flash.notice",                   "fa fa-check js-replace-fa-icon" );
    addBeginIcon( "div.flash.warning, .conflict",       "fa fa-exclamation-triangle js-replace-fa-icon" );

    $( "a[onclick*='removeFileField(this);']" ).addClass( "js-replace-icon-trash" ).empty();
    $( "a[data-method='delete']" ).addClass( "js-replace-icon-trash" ).empty();

    /*
    $( "a[href*='edit?section=']" ).addClass( "theme-js-icon-edit-section" ).empty();
    $( "a[href*='quoted?journal_id=']" ).addClass( "theme-js-icon-quoted-journal_id" ).empty();
    $( "a[onclick*='journals/edit']" ).addClass( "theme-js-icon-edit-section" ).empty();
    $( "a[onclick*='removeFileField(this);']" ).addClass( "theme-js-icon-trash" ).empty();
    $( "img[src*='toggle_check.png']" ).replaceWith( $( "<span>" ).addClass( "theme-js-icon-toggle-check" ) );
    */
} );

} )( jQuery );
