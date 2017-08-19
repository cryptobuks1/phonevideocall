/****************************************************************************
 JSCommunicator
 http://jscommunicator.org

 Copyright (C) 2014  Kengne Mabou Hervé Frantz https://github.com/elprincipe
 Copyright (C) 2014  Juliana Louback http://julianalouback.com

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 2 of the License, or (at your option)
 any later version.  The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

 You may distribute non-source (e.g., minimized or compacted) forms of
 that code without the full copy of the GNU GPL normally required
 provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.
****************************************************************************/

(function ($) {

window.i18n = {
      	// load I18N bundles
    initI18n : function(show_menu) {

        url_prefix = '';
        if(JSCommSettings.webserver) {
            if(JSCommSettings.webserver.url_prefix) {
                url_prefix = JSCommSettings.webserver.url_prefix;
            }
        }

        if(JSCommSettings.i18n.default_lang) {
            try {
                i18n.loadBundles(url_prefix, JSCommSettings.i18n.default_lang);
            } catch (error) {}
        }
        else {
            try {
                i18n.loadBundles(url_prefix, jQuery.i18n.browserLang());
            } catch (error) {}
        }

 
        if(show_menu) {
          $("#lang_selection").show();
          $.ajax({
             type:"GET",
             url: url_prefix + "available_languages.xml",
             dataType: "xml",
             success: function(xml) {
             $(xml).find("language").each(function() {
                  var display = $(this).find('display').text();
                  var value = $(this).find('code').text();
                  $('#lang_selection').append('<option value=' +value+ '>' +display+ '</option>');
                  });
             }
             });

            // configure language combo box
            jQuery('#lang_selection').change(function() {
                var selection = $(this).val();
                i18n.loadBundles(url_prefix, selection != 'lang_selection' ? selection : null);
            });
        }
        else {
            $("#lang_selection").hide();
        }
    },
 
		
    loadBundles : function (url_prefix, lang) {
			jQuery.i18n.properties({
			    name:'Messages', 
			    path: url_prefix + 'internationalization/',
			    mode:'both',
			    language:lang, 
			    callback: function() {
			        i18n.internationalize();
			    }
			});
		},
		
    internationalize : function () {
			// Accessing values through the map
				var msg1 = 'error_js';
				var msg2 = 'error_webrtc';
				var msg3 = 'error_no_config';
				var msg4 = 'error_ua_init_failure';
				var msg5 = 'error_reg_fail';
				var msg6 = 'error_call_attempt_failed';
				var msg7 = 'error_dynamic';
				var msg8 = 'jsc_login_display_name';
				var msg9 = 'jsc_login_sip_uri';
				var msg10 = 'jsc_login_password';
				var msg11 = 'jsc_login_button';
				var msg12 = 'ws_link';
				var msg13 = 'ws_state_connected';
				var msg14 = 'ws_state_disconnected';
				var msg15 = 'sip_reg';
				var msg16 = 'sip_reg_up';
				var msg17 = 'sip_reg_down';
				var msg18 = 'sip_dest_address';
				var msg19 = 'session_state_outgoing';
				var msg20 = 'session_state_incoming';
				var msg21 = 'session_state_accepted';
				var msg22 = 'session_state_active';
				var msg23 = 'button_session_cancel';
				var msg24 = 'button_session_reject';
				var msg25 = 'button_session_answer';
				var msg26 = 'button_call_audio';
				var msg27 = 'button_reg';
				var msg28 = 'button_dereg';
				var msg29 = 'button_call_audio_video';
				var msg30 = 'button_session_answer_video';
				var msg31 = 'button_session_answer_hold';
				var msg32 = 'button_session_answer_hang_up';
				var msg33 = 'button_video_control_self_view';
				var msg34 = 'button_video_control_self_hide';
				var msg35 = 'button_video_control_full_screen';
				var msg36 = 'welcome';
				var msg37 = 'call';
				var msg38 = 'chat';
				var msg39 = 'enter_contact';
				var msg40 = 'type_to_chat';
				var msg41 = 'start_chat';
				var msg42 = 'me';
				var msg43 = 'logout';
				var msg44 = 'no_contact';
				var msg45 = 'remember_me';
            
			jQuery('#error #js')
				.empty()
				.append(jQuery.i18n.prop(msg1));

			jQuery('#error #webrtc')
				.empty()
				.append(jQuery.i18n.prop(msg2));

			jQuery('#error #no-config')
				.empty()
				.append(jQuery.i18n.prop(msg3));

			jQuery('#error #ua-init-failure')
				.empty()
				.append(jQuery.i18n.prop(msg4));

			jQuery('#error #reg-fail')
				.empty()
				.append(jQuery.i18n.prop(msg5));

			jQuery('#error #call-attempt-failed')
				.empty()
				.append(jQuery.i18n.prop(msg6));

			jQuery('#error #dynamic')
				.empty()
				.append(jQuery.i18n.prop(msg7));

			jQuery('#jsc-login-display-name .jsc-login-label')
				.empty()
				.append(jQuery.i18n.prop(msg8));

			jQuery('#jsc-login-sip-uri .jsc-login-label')
				.empty()
				.append(jQuery.i18n.prop(msg9));

			jQuery('#jsc-login-password .jsc-login-label')
				.empty()
				.append(jQuery.i18n.prop(msg10));

			jQuery('#jsc-login-button')
				.val(jQuery.i18n.prop(msg11)).change();

			jQuery('#ws #ws_link')
				.empty()
				.append(jQuery.i18n.prop(msg12));

			jQuery('#ws #connected')
				.empty()
				.append(jQuery.i18n.prop(msg13));

			jQuery('#ws #disconnected')
				.empty()
				.append(jQuery.i18n.prop(msg14));

			jQuery('#reg #reg-label')
				.empty()
				.append(jQuery.i18n.prop(msg15));

			jQuery('#reg #state .up')
				.empty()
				.append(jQuery.i18n.prop(msg16));

			jQuery('#reg #state .down')
				.empty()
				.append(jQuery.i18n.prop(msg17));

			jQuery('#control #reg-button')
				.val(jQuery.i18n.prop(msg27)).change();

			jQuery('#control #de-reg-button')
				.val(jQuery.i18n.prop(msg28)).change();


			jQuery('#dial-controls #dest #dest_label')
				.empty()
				.append(jQuery.i18n.prop(msg18));

			jQuery('#chat #new-chat #chat_dest_label')
				.empty()
				.append(jQuery.i18n.prop(msg18));

			jQuery('#dial-controls #dialing-actions #call-audio').attr("title", jQuery.i18n.prop(msg26));
			
			jQuery('#dial-controls #dialing-actions #call-video').attr("title", jQuery.i18n.prop(msg29));

			jQuery('#session-controls #state .session-outgoing')
				.val(jQuery.i18n.prop(msg19)).change();

			jQuery('#session-controls #state .session-incoming')
				.val(jQuery.i18n.prop(msg20)).change();
		
			jQuery('#session-controls #state .session-accepted')
				.val(jQuery.i18n.prop(msg20)).change();

			jQuery('#session-controls #state .session-active')
				.val(jQuery.i18n.prop(msg22)).change();

			jQuery('#session-actions #session-cancel').attr("title", jQuery.i18n.prop(msg23));

			jQuery('#session-actions #session-reject').attr("title", jQuery.i18n.prop(msg24));

			jQuery('#session-actions #session-answer').attr("title", jQuery.i18n.prop(msg25));

			jQuery('#session-actions #session-answer-video').attr("title", jQuery.i18n.prop(msg30));

			/*jQuery('#peer #session-actions #session-hold')
				.val(jQuery.i18n.prop(msg31)).change();*/

			jQuery('#session-actions #session-hangup').attr("title", jQuery.i18n.prop(msg32));

			jQuery('#video-session #video-controls #video-control-self-view')
				.val(jQuery.i18n.prop(msg33)).change();

			jQuery('#video-session #video-controls #video-control-self-hide')
				.val(jQuery.i18n.prop(msg34)).change();

			jQuery('#video-session #video-controls #video-control-fullscreen')
				.val(jQuery.i18n.prop(msg35)).change();

			jQuery('#welcome').text(jQuery.i18n.prop(msg36));		

			jQuery('#call h3').text(jQuery.i18n.prop(msg37));

			jQuery('#chat h3').text(jQuery.i18n.prop(msg38));

			jQuery('#address').attr("placeholder", jQuery.i18n.prop(msg39));

			jQuery('#chat-address').attr("placeholder", jQuery.i18n.prop(msg39));

			jQuery('.inactive').attr("placeholder", jQuery.i18n.prop(msg40));

			jQuery('#start-chat').attr("title", jQuery.i18n.prop(msg41));

			jQuery('#jsc-logout-button').attr("title", jQuery.i18n.prop(msg43));

			jQuery('.no-contact').text(jQuery.i18n.prop(msg44));

			jQuery('#remember-label').text(jQuery.i18n.prop(msg45));
	
		}
};
})(jQuery);
