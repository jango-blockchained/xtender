// @author: jango_blockchained

function lowestUnusedNumber(sequence, startingFrom) {
    console.log('Seq: ', sequence);
    const arr = sequence.slice(0);
    arr.sort((a, b) => a - b);
    // --
    return arr.reduce((lowest, num, i) => {
        const seqIndex = i + startingFrom;
        return num !== seqIndex && seqIndex < lowest ? seqIndex : lowest;
    }, arr.length + startingFrom);
}

function arrStrToNum (arrOfStr) {
    const arrOfNum = arrOfStr.map(str => {
        return Number(str);
    });
    return arrOfNum;
}

frappe.ui.form.on('Employee', {
    refresh: function(frm) {
        if (!frm.is_new() && frm.doc.attendance_device_id > 1 && frm.doc.attendance_device_id < 250) {
            frm.add_custom_button(__('Enroll Fingerprint'), () => {
                frappe.call('getAuthDevices')
                .then(res => {
                    frappe.prompt({
                        label: 'Auth Device',
                        fieldname: 'auth_device',
                        fieldtype: 'Select',
                        options: res.message
                    }, (values) => {
                        frappe.call('connect_mqtt.connect_mqtt.api.utils.publish_enroll', {
                            fingerprint_id: frm.doc.attendance_device_id.toString()
                        })
                        .then(r => {
                            console.log('Enroll transmitted. ID ', frm.doc.attendance_device_id);
                            frappe.show_alert({
                                title:__('MQTT - Data transmitted'),
                                message:__('Successfully transmitted enroll request (ID: ' + frm.doc.attendance_device_id.toString() + ') to broker.'),
                                indicator:'green'
                            }, 7);
                        });
                    });
                });
            }, __('Fingerprint Scanner'));
            // --
            frm.add_custom_button(__('Delete Fingerprint'), () => {
                frappe.call('connect_mqtt.connect_mqtt.api.utils.publish_delete', {
                    fingerprint_id: frm.doc.attendance_device_id.toString()
                })
                .then(r =>  {
                    console.log('Delete transmitted. ID ', frm.doc.attendance_device_id);
                    frappe.show_alert({
                        message:__('Successfully transmitted delete request (ID: ' + frm.doc.attendance_device_id.toString() + ') to broker.'),
                        indicator:'green'
                    }, 7);
                });
            }, __('Fingerprint Scanner'));
        } else {
            frappe.call('getFingerprintIds')
            .then(r => {
                const lun = lowestUnusedNumber(arrStrToNum(r.message), 2);
                frm.set_value('attendance_device_id', lun);
                frappe.show_alert({
                    message:__('Automaticly set employee attendance_device_id to the lowest unused number (ID: ' + lun.toString() + ').'),
                    indicator:'orange'
                }, 7);
            });
        }
    },
    attendance_device_id: function(frm) {
        const old_attendance_device_id = frm.doc.attendance_device_id;
        const el1 = document.querySelector('input[data-fieldname="attendance_device_id"]');
        el1.placeholder = old_attendance_device_id;
        if (!frm.is_new() && old_attendance_device_id > 1 && frm.doc.status === "Active") {
            frm.set_df_property('attendance_device_id', 'reqd', 1);
        }
    }
}); 