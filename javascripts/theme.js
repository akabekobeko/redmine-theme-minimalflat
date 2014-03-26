( function( $ ) {
if( !$ ) { return; }

$( document ).ready( function() {
    function addBeginIcon( target, iconClass ) {
        $( target ).each( function() {
            $( "<i>" ).addClass( iconClass ).prependTo( $( this ) );
        } );
    }

    function addBeginObject( target, text ) {
        $( target ).each( function() {
            $( "<strong>" ).text( text ).prependTo( $( this ) );
        } );
    }

    addBeginIcon( "tr.message.locked td.subject",       "fa fa-lock js-replace-fa-icon" );
    addBeginIcon( "tr.message.sticky td.subject",       "fa fa-arrow-right js-replace-fa-icon" );
    addBeginIcon( "tr.version.shared td.name",          "fa fa-link js-replace-fa-icon" );
    addBeginIcon( "table.members td.group",             "fa fa-users js-replace-fa-icon" );
    addBeginIcon( "div.flash.error, #errorExplanation", "fa fa-exclamation-circle js-replace-fa-icon" );
    addBeginIcon( "div.flash.notice",                   "fa fa-check js-replace-fa-icon" );
    addBeginIcon( "div.flash.warning, .conflict",       "fa fa-exclamation-triangle js-replace-fa-icon" );

    // Editor toolbar
    addBeginIcon( ".jstb_strong", "fa fa-bold" );
    addBeginIcon( ".jstb_em",     "fa fa-italic" );
    addBeginIcon( ".jstb_ins",    "fa fa-underline" ); 
    addBeginIcon( ".jstb_del",    "fa fa-strikethrough" ); 
    addBeginIcon( ".jstb_code",   "fa fa-code" ); 
    addBeginObject( ".jstb_h1", "H1" );
    addBeginObject( ".jstb_h2", "H2" );
    addBeginObject( ".jstb_h3", "H3" );
    addBeginIcon( ".jstb_ul", "fa fa-list-ul" ); 
    addBeginIcon( ".jstb_ol", "fa fa-list-ol" ); 
    addBeginIcon( ".jstb_bq", "fa fa-indent" ); 
    addBeginIcon( ".jstb_unbq", "fa fa-outdent" ); 
    addBeginObject( ".jstb_pre", "pre" );
    addBeginIcon( ".jstb_link", "fa fa-link" ); 
    addBeginIcon( ".jstb_img", "fa fa-picture-o" ); 
    addBeginIcon( ".jstb_help", "fa fa-question-circle" ); 

    $( "a[onclick*='removeFileField(this);']" ).addClass( "js-replace-icon-trash" ).empty();
    $( "a[data-method='delete']" ).addClass( "js-replace-icon-trash" ).empty();
    $( "img[src*='toggle_check.png']" ).replaceWith( $( "<i>" ).addClass( "js-replace-icon-check" ) );

    /*
    $( "a[href*='edit?section=']" ).addClass( "theme-js-icon-edit-section" ).empty();
    $( "a[href*='quoted?journal_id=']" ).addClass( "theme-js-icon-quoted-journal_id" ).empty();
    $( "a[onclick*='journals/edit']" ).addClass( "theme-js-icon-edit-section" ).empty();
    */
} );

} )( jQuery );
