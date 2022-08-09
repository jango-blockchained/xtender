import frappe

@frappe.whitelist(allow_guest=True)
def unlock_user(user):
	print(frappe.session.user)
	print(user)
	#reset the number of attempt to 0
	user_roles = frappe.get_roles(user)
	frappe.cache().hset('login_failed_count', user, 0)
	delete = frappe.delete_doc('Lock Out User', user)
	frappe.db.commit()
	frappe.msgprint("The user have been unlocked")
