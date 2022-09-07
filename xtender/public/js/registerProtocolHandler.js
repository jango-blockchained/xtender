var isProtocolRegistered = 'unknown';
if ('localStorage' in window && window['localStorage'] !== null) {
    if ('callcenter_handler_state' in localStorage) {
        isProtocolRegistered = localStorage['callcenter_handler_state'];
    } else {
        localStorage['callcenter_handler_state'] = isProtocolRegistered;
    }
    if ('unknown' == isProtocolRegistered) {
        if ('navigator' in window &&
            'registerProtocolHandler' in window.navigator) {
                navigator.registerProtocolHandler("callcenter", "https://erp.abigruppe.de/calling?uri=%s", "Callcenter");
                localStorage['callcenter_handler_state'] = 'shown';
        }
    }
    var testProtocol = function() {
        $(window).bind('message', function(event){
                localStorage['callcenter_handler_state'] = 'working';
        });
        $('body').append("<div id='callcenter_test_frame' src='callcenter://agent1.call'>");
        var frame = $('#callcenter_test_frame');
    }
    if ('shown' == localStorage['callcenter_handler_state']) {
                                    
        localStorage['callcenter_handler_state'] = 'optout';
        setTimeout(testProtocol, 5000);
    } else if ('working' == localStorage['callcenter_handler_state']) {
        localStorage['callcenter_handler_state'] = 'unknown';
        setTimeout(testProtocol, 5000);
    }
}
